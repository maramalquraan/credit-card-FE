import React from "react";
import { CardsListComponentProps } from "./cards-list.component.props.interface";
import CardsListTemplate from "./cards-list.template";

export default function CardsListComponent({ list }: CardsListComponentProps) {
  return <CardsListTemplate list={list} />;
}
