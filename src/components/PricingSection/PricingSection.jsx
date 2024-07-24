import PricingCard from "../PricingCard/PricingCard";
import { SyledPricingSection } from "./PricingSectionStyle";

function PricingSection() {
  const pricingDetails = [
    {
      title: "Classic Plan",
      price: "50€",
      details: ["Haircut", "Styling"],
    },
    {
      title: "Full Plan",
      price: "120€",
      details: [
        "Bath & Brush",
        "Nail Trim",
        "Ear Cleaning",
        "Haircut",
        "Styling",
      ],
    },
  ];

  return (
    <SyledPricingSection>
      {pricingDetails.map((item, index) => (
        <PricingCard
          key={index}
          cardTitle={item.title}
          cardPrice={item.price}
          cardDetails={item.details}
        />
      ))}
    </SyledPricingSection>
  );
}

export default PricingSection;
