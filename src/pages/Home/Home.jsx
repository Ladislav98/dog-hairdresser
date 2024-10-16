import PictureChanger from "../../components/PictureChanger/PictureChanger";
import PricingSection from "../../components/PricingSection/PricingSection";
import Section from "../../components/Section/Section";
import { Heading } from "../../styles/generalStyles";

function Home() {
  return (
    <>
      <Section>
        <Heading as="h1" type="spaced">
          Welcome to Dog Hairdress
        </Heading>
        <Heading as="h3" type="subheading">
          At Dog Hairdress, we offer the best grooming services for your furry
          friends. Our professional groomers ensure that your pets are pampered
          and styled to perfection.
        </Heading>
      </Section>
      <Section>
        <PictureChanger />
      </Section>
      <Section
        title="Pricing plan"
        subtitle="Choose the ideal grooming package for your furry friend."
      >
        <PricingSection />
      </Section>
      <Section>
        <Heading as="h2">Form</Heading>
        <Heading as="h3" type="formsub">
          Select the plan that suits your needs: Classic or Full.
        </Heading>
      </Section>
    </>
  );
}

export default Home;
