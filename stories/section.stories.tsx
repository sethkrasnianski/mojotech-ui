import * as React from "react";
import { storiesOf } from "@storybook/react";
import Section from "../src/components/Section";
import Wrap from "../src/components/Wrap";
import Row from "../src/components/Row";
import Column from "../src/components/Column";
import Text from "../src/components/Text";

storiesOf("Section", module).add("Sections", () => (
  <React.Fragment>
    <Section>
      <Wrap>
        <Text fontSize={3} as="h2">
          The principles that guide us.
        </Text>
        <Row>
          <Column>
            <Text as="h3" fontSize={2}>
              Agility
            </Text>
            <Text as="p">
              We’ve successfully built complex systems a hundred times over. We
              are able to identify issues quickly and adjust in real-time to
              ensure we are tracking well against expectations and constantly
              delivering value.
            </Text>
          </Column>
          <Column>
            <Text as="h3" fontSize={2}>
              Team Strength
            </Text>
            <Text as="p">
              Designers and engineers are assigned to one, full-time project.
              This allows the team to focus solely on clients’ goals,
              internalizing a product vision, and taking pride and ownership in
              their work.
            </Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text as="h3" fontSize={2}>
              User-Centered Design
            </Text>
            <Text as="p">
              Our designs are built on a deep understanding of your business,
              your customers, and what you want to achieve.
            </Text>
          </Column>
          <Column>
            <Text as="h3" fontSize={2}>
              User-Centered Design
            </Text>
            <Text as="p">
              Our designs are built on a deep understanding of your business,
              your customers, and what you want to achieve.
            </Text>
          </Column>
        </Row>
      </Wrap>
    </Section>
    <Section>
      <Wrap>
        <Text fontSize={3} as="h2">
          The principles that guide us.
        </Text>
        <Row>
          <Column>
            <Text as="h3" fontSize={2}>
              Agility
            </Text>
            <Text as="p">
              We’ve successfully built complex systems a hundred times over. We
              are able to identify issues quickly and adjust in real-time to
              ensure we are tracking well against expectations and constantly
              delivering value.
            </Text>
          </Column>
          <Column>
            <Text as="h3" fontSize={2}>
              Team Strength
            </Text>
            <Text as="p">
              Designers and engineers are assigned to one, full-time project.
              This allows the team to focus solely on clients’ goals,
              internalizing a product vision, and taking pride and ownership in
              their work.
            </Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text as="h3" fontSize={2}>
              User-Centered Design
            </Text>
            <Text as="p">
              Our designs are built on a deep understanding of your business,
              your customers, and what you want to achieve.
            </Text>
          </Column>
          <Column>
            <Text as="h3" fontSize={2}>
              User-Centered Design
            </Text>
            <Text as="p">
              Our designs are built on a deep understanding of your business,
              your customers, and what you want to achieve.
            </Text>
          </Column>
        </Row>
      </Wrap>
    </Section>
  </React.Fragment>
));
