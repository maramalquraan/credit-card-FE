import { CardType } from "../cards-list/card.type";

export interface AppTemplateProps {
  fetchList: () => void;
  cardsList: CardType[];
}
