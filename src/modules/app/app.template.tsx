import React from "react";
import "./app.css";
import { AddCard } from "../add-card/add-card.component";
import CardsListComponent from "../cards-list/cards-list.component";
import { AppTemplateProps } from "./app.template.props.interface";

export default function AppTemplate({
  fetchList,
  cardsList,
}: AppTemplateProps) {
  return (
    <div className="app">
      <AddCard fetchList={fetchList} />
      <CardsListComponent list={cardsList} />
    </div>
  );
}
