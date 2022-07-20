import axios from "axios";
import React, { useState } from "react";
import { AddCardComponentProps } from "./add-card.component.props.interface";
import { AddCardTemplate } from "./add-card.template";

const apiURL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

export function AddCard({ fetchList }: AddCardComponentProps) {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardHolderName, setCreditCardName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    try {
      await axios.post(`${apiURL}/v1/card`, {
        creditCardNumber,
        creditCardHolderName,
      });
      setCreditCardNumber("");
      setCreditCardName("");
      fetchList();
    } catch (e: any) {
      setError(e.response?.data?.message || "Card details are wrong");
    }
  };

  return (
    <AddCardTemplate
      creditCardNumber={creditCardNumber}
      setCreditCardNumber={setCreditCardNumber}
      creditCardName={creditCardHolderName}
      setCreditCardName={setCreditCardName}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}
