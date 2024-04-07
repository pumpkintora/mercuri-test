import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function DeleteButton({ onClickFunc }) {
  return (
    <button className="round-btn" onClick={onClickFunc}>
      <FontAwesomeIcon icon={faDeleteLeft} />
    </button>
  );
}
