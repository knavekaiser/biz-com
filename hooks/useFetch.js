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
            if (!res.ok) {
              setLoading(false);
              reject(new Error("Network response was not ok"));
              return;
            }

            const contentType = res.headers.get("Content-Type");
            const transferEncoding = res.headers.get("Transfer-Encoding");
            if (
              transferEncoding === "chunked" ||
              contentType === "text/plain"
            ) {
              resolve({ res, stream: true });
            } else {
              let data = await res.json();
              resolve({ res, data });
            }
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            if (
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
