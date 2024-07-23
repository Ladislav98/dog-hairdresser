import { CardPrice, CardTitle, PricingCardWrapper } from "./PricingCardStyle";

function PricingCard({ cardTitle, cardPrice }) {
  return (
    <PricingCardWrapper>
      <CardTitle>{cardTitle}</CardTitle>
      <CardPrice>{cardPrice}</CardPrice>
    </PricingCardWrapper>
  );
}

export default PricingCard;
