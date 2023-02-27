import React, { forwardRef, useRef, useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ReactDOM, { createPortal } from "react-dom";
import * as ReactDOMClient from "react-dom/client";

export const Modal = ({ open, ...props }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted && open) {
    return <ModalComp open={open} {...props} />;
  }
  return null;
};
const ModalComp = ({
  open,
  setOpen,
  children,
  className,
  onBackdropClick,
  onOutsideClick,
  clickThroughBackdrop,
  backdropClass,
  style,
  label,
}) => {
  const ref = useRef();
  useEffect(() => {
    if (onOutsideClick) {
      const eventHandler = (e) => {
        if (!e.path?.includes(ref.current)) {
          onOutsideClick();
        }
      };
      document.addEventListener("click", eventHandler);
      return () => {
        document.removeEventListener("click", eventHandler);
      };
    }
  }, []);
  return createPortal(
    <>
      <div
        data-testid="modal"
        className={`modalBackdrop ${backdropClass || ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onBackdropClick?.();
        }}
        style={clickThroughBackdrop ? { pointerEvents: "none" } : {}}
      />
      <div
        style={{ ...style }}
        ref={ref}
        className={`modal ${className || ""} ${label ? "withHead" : ""}`}
      >
        {label && (
          <div className="head">
            <button
              className="btn clear"
              type="button"
              onClick={() => setOpen(false)}
            >
              <IoClose />
            </button>
            <span className="title">{label}</span>
          </div>
        )}
        {children}
      </div>
    </>,
    document.querySelector("#portal") || document.body
  );
};
// export const Modal = forwardRef(ModalComp);

export const Prompt = ({ className, type, message, btns, callback }) => {
  const container = document.querySelector("#prompt");
  if (container) {
    const root = ReactDOMClient.createRoot(container);
    const cleanup = () => root.render(<></>);
    const confirm = () => {
      callback();
      cleanup();
    };
    const decline = () => {
      cleanup();
      ["information", "success", "error"].includes(type) &&
        callback &&
        callback();
    };
    if (type === "error") {
      // console.trace(message);
    }
    root.render(
      <>
        <div className={`promptBackdrop`} />
        <div data-testid="prompt" className={`prompt ${className || ""}`}>
          <div className="content">
            <button className="clear close" onClick={decline}>
              <IoClose />
            </button>
            {type === "confirmation" && (
              <div className="label confirmation">
                <span className="svg">?</span>
                {
                  // <span className="promptLabel">CONFIRMATION</span>
                }
              </div>
            )}
            {type === "information" && (
              <div className="label information">
                <span className="svg">i</span>
                {
                  // <span className="promptLabel">INFORMATION</span>
                }
              </div>
            )}
            {type === "success" && (
              <div className="label success">
                <span className="svg">
                  <FaCheck />
                </span>
                {
                  // <span className="promptLabel">SUCCESS</span>
                }
              </div>
            )}
            {type === "error" && (
              <div className="label _error">
                <span className="svg">
                  <IoClose />
                </span>
                {
                  // <span className="promptLabel">ERROR</span>
                }
              </div>
            )}
            <p className="question">{message}</p>
            <div className="actions">
              {btns || (
                <>
                  {type === "confirmation" ? (
                    <>
                      <button
                        className="no btn secondary wd-100"
                        onClick={decline}
                      >
                        No
                      </button>
                      <button
                        className="yes btn secondary wd-100"
                        onClick={confirm}
                      >
                        Yes
                      </button>
                    </>
                  ) : (
                    <button
                      className="yes btn secondary wd-100"
                      onClick={decline}
                    >
                      Ok
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};
