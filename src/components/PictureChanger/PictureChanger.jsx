import { useState } from "react";
import {
  Container,
  DogFigure,
  DogImage,
  LeftContainer,
  RightContainer,
  SentenceItem,
  SentenceList,
  SentenceSubtitle,
  SentenceTitle,
} from "./PictureChangerStyle";

function PictureChanger() {
  const [selectedId, setSelectedId] = useState(1);

  const sentences = [
    {
      id: 1,
      title: "Professional grooming services",
      subtitle: "Skilled groomers providing top-notch care",
      picture: "groomed.jpg",
    },
    {
      id: 2,
      title: "Customized styling",
      subtitle: "Personalized styling options available",
      picture: "grooming.jpg",
    },
    {
      id: 3,
      title: "Expert groomers",
      subtitle: "Professional grooming services for all breeds",
      picture: "happydog.jpg",
    },
  ];

  const handleSelectPicture = (id) => {
    if (id !== selectedId) {
      setSelectedId(id);
    }
  };

  const currentPicture = sentences.find(
    (sentence) => sentence.id === selectedId
  )?.picture;

  return (
    <Container>
      <LeftContainer>
        <DogFigure>
          <DogImage src={currentPicture} />
        </DogFigure>
      </LeftContainer>
      <RightContainer>
        <SentenceList>
          {sentences.map((sentence) => (
            <SentenceItem
              key={sentence.id}
              selected={sentence.id === selectedId}
              onClick={() => handleSelectPicture(sentence.id)}
            >
              <SentenceTitle>{sentence.title}</SentenceTitle>
              <SentenceSubtitle>{sentence.subtitle}</SentenceSubtitle>
            </SentenceItem>
          ))}
        </SentenceList>
      </RightContainer>
    </Container>
  );
}

export default PictureChanger;
