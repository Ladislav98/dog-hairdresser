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
import { useNavigate } from "react-router-dom";

function PricingCard({ cardTitle, cardPrice, cardDetails, variant }) {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/appointment", {
      state: { price: cardPrice, serviceName: cardTitle },
    });
  };
  return (
    <PricingCardWrapper $variant={variant}>
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
      <Button onClick={handleBookingClick}>Book now</Button>
    </PricingCardWrapper>
  );
}

export default PricingCard;
