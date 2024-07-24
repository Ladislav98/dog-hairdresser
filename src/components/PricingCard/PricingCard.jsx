import { IoMdCheckmark } from "react-icons/io";
import {
  CardDetails,
  CardList,
  CardListItem,
  CardPrice,
  CardTitle,
  PricingCardWrapper,
} from "./PricingCardStyle";

function PricingCard({ cardTitle, cardPrice, cardDetails }) {
  return (
    <PricingCardWrapper>
      <CardTitle>{cardTitle}</CardTitle>
      <CardPrice>{cardPrice}</CardPrice>
      <CardDetails>
        <CardList>
          {cardDetails.map((detail, index) => (
            <CardListItem key={index}>
              <IoMdCheckmark style={{ fontSize: "2.4rem" }} />
              {detail}
            </CardListItem>
          ))}
        </CardList>
      </CardDetails>
    </PricingCardWrapper>
  );
}

export default PricingCard;
