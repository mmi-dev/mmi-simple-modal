import React, { useEffect } from "react";
// import "./Modal.css";

/**
 *
 * @param {*} props
 * @param {boolean} props.showModal Modal open state
 * @param {function} props.setShowModal Modal open state setter
 * @param {string} props.title Modal title
 * @param {string} props.body Modal content
 * @param {boolean} props.cancel Show cancel button if true
 * @param {function} props.cancelAction Cancel function
 * @param {boolean} props.callToAction Show the call to action button if true
 * @param {string} props.callToActionText Call to action button text (Confirm by default)
 * @param {function} props.callToActionAction Call to action function
 * @param {boolean} props.autoClose Auto close modal
 * @param {integer} props.autoCloseDelay Auto close delay in ms (10000ms by default)
 * @examples
 * add sate in your main component
 * -> const [openModal, setOpenModal] = useState(false);
 *
 *      <Modal
 *       showModal={openModal}
 *       setShowModal={setOpenModal}
 *       title="My modal title"
 *       body="My modal body"
 *       cancel={true}
 *       cancelAction={() => setOpenModal(false)}
 *       callToAction={true}
 *       callToActionText="Save"
 *       callToActionAction={() => {
 *       alert("confirmation action");
 *       setOpenModal(false);
 *       }}
 *       type="confirm"
 *       autoClose
 *       autoCloseDelay="5000"
 *     />
 *
 */
export const Modal = ({
  showModal,
  setShowModal,
  title,
  body,
  cancel,
  cancelAction,
  callToAction,
  callToActionText = "Confirm",
  callToActionAction,
  autoClose,
  autoCloseDelay = 10000,
}) => {
  useEffect(() => {
    if (autoClose) {
      setTimeout(() => {
        setShowModal(false);
      }, autoCloseDelay);
    }
  }, []);

  return (
    <>
      {showModal && (
        <div className="mmi-modal">
          <div
            className="mmi-modal-overlay"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="mmi-modal-container">
            <button
              className="mmi-modal-closeBtn"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <div className="mmi-modal-div">
              <div className="mmi-modal-title">{title}</div>
            </div>
            <div className="mmi-modal-body">{body}</div>
            <div className="mmi-modal-footer">
              {cancel && (
                <button className="mmi-modal-cancelBtn" onClick={cancelAction}>
                  CANCEL
                </button>
              )}
              {callToAction && (
                <button
                  className="mmi-modal-callToActionBtn"
                  onClick={callToActionAction}
                >
                  {callToActionText.toUpperCase()}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
