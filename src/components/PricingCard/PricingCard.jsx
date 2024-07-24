import { IoMdCheckmark } from "react-icons/io";
import {
  CardDetails,
  CardList,
  CardListItem,
  CardPrice,
  CardTitle,
  PricingCardInner,
  PricingCardWrapper,
} from "./PricingCardStyle";
import { Button } from "../../styles/generalStyles";

function PricingCard({ cardTitle, cardPrice, cardDetails, variant }) {
  return (
    <PricingCardWrapper variant={variant}>
      <PricingCardInner>
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
      </PricingCardInner>
      <Button>Book now</Button>
    </PricingCardWrapper>
  );
}

export default PricingCard;
