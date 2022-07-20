import React from "react";
import { CardsListTemplateProps } from "./cards-list.template.props.interface";
import "./cards-list.css";

export default function CardsListTemplate({ list }: CardsListTemplateProps) {
  if (!list) return <h4 id="title">No Cards</h4>;
  return (
    <div id="container">
      <h4 id="title">Cards:</h4>
      {list.map((card) => (
        <div key={card._id} className="card">
          <div className="row">
            <h4>{card.name}</h4>
            <h5>
              {card.balance}
              {card.currency}
            </h5>
          </div>
          {card.cc_number}
        </div>
      ))}
    </div>
  );
}
