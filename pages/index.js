import Container from "../components/Container"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"
import Subtitle from "../components/Subtitle"
import Title from "../components/Title"

export default function Home() {
  return (
    <Container>
      <Title>Open Engineering Strategy</Title>
      <Section>
        <Subtitle>Why open?</Subtitle>
        <Paragraph>
          Strategy is hard, and when you don&apos;t have any real world examples to learn from is even harder.  We all are learning as we can by trail and error.
          Some of us had the chance to learn from the experience of others.
        </Paragraph>
      </Section>
    </Container>
  )
}
