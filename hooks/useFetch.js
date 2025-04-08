import { useState, useEffect, useCallback, useRef } from "react";

export const useFetch = (
  url,
  { headers: hookHeaders, defaultHeaders } = {}
) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const controller = useRef();
  useEffect(() => {
    controller.current = new AbortController();

    return () => {
      controller.current.abort();
      setError(false);
      setLoading(false);
    };
  }, [url]);

  const onSubmit = useCallback(
    async (payload = {}, method, { headers, params, query } = {}) => {
      let _url = url;
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          _url = _url.replace(key, value);
        });
      }
      if (query) {
        _url += `${_url.includes("?") ? "" : "?"}&${new URLSearchParams(
          query
        ).toString()}`;
      }
      setLoading(true);
      return new Promise((resolve, reject) => {
        fetch(_url, {
          method: method,
          headers: {
            ...(!(typeof payload?.append === "function") && {
              "Content-Type": "application/json",
            }),
            ...(defaultHeaders !== false && {
              "x-access-token": localStorage.getItem("access_token"),
            }),
            ...hookHeaders,
            ...headers,
          },
          ...(["POST", "PUT", "PATCH", "DELETE"].includes(method) && {
            body:
              typeof payload?.append === "function"
                ? payload
                : JSON.stringify(payload),
          }),
          signal: controller.current.signal,
        })
          .then(async (res) => {
            let data = null;
            try {
              data = await res.json();
            } catch (err) {
              //
            }
            if (res.status === 404) {
              throw new Error("Failed to fetch");
            } else if (res.status === 500) {
              throw new Error("Internal Server Error");
            }

            setLoading(false);
            if (data) {
              return resolve({ res, data });
            }
            throw new Error(
              "Network error. Make sure you are connected to the internet."
            );
          })
          .catch((err) => {
            setLoading(false);
            if (["Internal Server Error"].includes(err?.message)) {
              reject(
                new Error("Something went wrong. Please try again later.")
              );
            } else if (["Failed to fetch"].includes(err?.message)) {
              reject(
                new Error(
                  "Request failed. Make sure you are connected to the internet."
                )
              );
            } else if (
              [
                "The user aborted a request.",
                "signal is aborted without reason",
              ].includes(err?.message)
            ) {
              // user aborted
            } else {
              setError(err);
              reject(err);
            }
          });
      });
    },
    [url]
  );

  const post = (payload, options) => onSubmit(payload, "POST", options);

  const get = (options) => onSubmit(null, "GET", options);

  const remove = (payload, options) => onSubmit(payload, "DELETE", options);

  const put = (payload, options) => onSubmit(payload, "PUT", options);

  const patch = (payload, options) => onSubmit(payload, "PATCH", options);

  return { get, post, put, remove, patch, loading, error, onSubmit };
};

export default useFetch;
