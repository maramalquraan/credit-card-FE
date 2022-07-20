import React from "react";
import "./add-card.css";
import { AddCardTemplatePropsInterface } from "./add-card.template.props.interface";

export function AddCardTemplate({
  setCreditCardNumber,
  handleSubmit,
  creditCardNumber,
  creditCardName,
  setCreditCardName,
  error,
}: AddCardTemplatePropsInterface) {
  return (
    <div className="container">
      <h4 id="add-card-title">Add your credit card details</h4>
      <div className="column">
        <input
          value={creditCardNumber}
          onChange={(e) => {
            setCreditCardNumber(e.target.value.slice(0, 19));
          }}
          className="add-card-input"
          type={"number"}
          placeholder={"Card number (19 digits)"}
        />
        <input
          value={creditCardName}
          onChange={(e) => {
            setCreditCardName(e.target.value);
          }}
          className="add-card-input"
          placeholder={"Card user name"}
        />
        {error && <p id="error-message">{error}</p>}
        <div onClick={handleSubmit} id="submit-btn">
          <p className="no-select" id="submit-txt">
            Add
          </p>
        </div>
      </div>
    </div>
  );
}
