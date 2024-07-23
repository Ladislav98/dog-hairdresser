import PricingSection from "../../components/PricingSection/PricingSection";
import Section from "../../components/Section/Section";
import { Heading, Paragraph } from "../../styles/generalStyles";

function Home() {
  return (
    <>
      <Section>
        <Heading as="h1" type="spaced">
          Welcome to Dog Hairdress
        </Heading>
        <Paragraph>
          At Dog Hairdress, we offer the best grooming services for your furry
          friends. Our professional groomers ensure that your pets are pampered
          and styled to perfection.
        </Paragraph>
      </Section>
      <Section>
        <PricingSection />
      </Section>
      <Section>
        <Heading as="h2">Form</Heading>
        <Paragraph>
          We offer two plans: the Classic plan and the Full plan. Choose the one
          that best fits your needs.
        </Paragraph>
      </Section>
    </>
  );
}

export default Home;
