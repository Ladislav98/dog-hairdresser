import PricingCard from "../PricingCard/PricingCard";
import { SyledPricingSection } from "./PricingSectionStyle";

function PricingSection() {
  return (
    <SyledPricingSection>
      <PricingCard cardTitle="Classic plan" cardPrice="50€" />
      <PricingCard cardTitle="Full plan" cardPrice="120€" />
    </SyledPricingSection>
  );
}

export default PricingSection;
