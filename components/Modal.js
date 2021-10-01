import { createPortal } from "react-dom";
import { Menu } from "./Menu";

function Modal(props) {
  return createPortal(
    <section className="modal">
      <Menu event={props.modalEvent} />{" "}
    </section>,
    document.body
  );
}

export { Modal };
