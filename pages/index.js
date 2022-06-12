import Image from "next/image"
import Container from "../components/Container"
import Link from "../components/Link"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"
import Subtitle from "../components/Subtitle"
import Title from "../components/Title"

import awesomeImage from "../public/awesome.svg"

export default function Home() {
  return (
      <Container>
        <Title>Open Engineering Strategy</Title>
        <p className="text-center mt-6">
          <Link href="https://twitter.com/hashtag/openengineeringstrategy">#OpenEngineeringStrategy</Link>
        </p>
        <Section>
          <Subtitle>Why open?</Subtitle>
          <Paragraph>
            Strategy is hard, and when you do not have any real world examples to learn from is even harder.
          </Paragraph>
          <Paragraph>
            We all are learning as we can by trial and error. Some of us had the chance to learn from the experience of others.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>How to join the movement?</Subtitle>
          <div className="text-center">
            <ul className="list-disc">
              <li>It should be a real-world example. So, it should not be too abstract.</li>
              <li>It should be publicly available.</li>
              <li>Preferably under some <Link href="https://creativecommons.org/choose/">Creative Commons License</Link></li>
              <li>You need to have the organization permission to make that information publicly available</li>
            </ul>
          </div>
        </Section>
        <Section>
          <Subtitle>Where to find open strategies?</Subtitle>
          <Paragraph>
            At the Twitter hashtag of <Link href="https://twitter.com/hashtag/openengineeringstrategy">#OpenEngineeringStrategy</Link>
          </Paragraph>
          <Paragraph className="mt-5">
            <Link href="https://github.com/aleixmorgadas/awesome-engineering-strategy#open-engineering-strategies">
              <Image src={awesomeImage} width={150} alt="Awesome List Icon" className="mt-4" />
            </Link>
          </Paragraph>
          <Paragraph>
            In the Open Engineering Strategy Section at <Link href="https://github.com/aleixmorgadas/awesome-engineering-strategy#open-engineering-strategies">awesome-engineering-strategy</Link>
          </Paragraph>
        </Section>
      </Container>

  )
}
