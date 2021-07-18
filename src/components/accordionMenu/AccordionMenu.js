import React from "react";
import { Accordion, AccordionSection } from "../accordion/Accordion";

import { StyledMenu } from "./style";

const sideCategories = [
  {
    id: 1,
    name: "ALLE SOKKEN",
    subcategories: [
      {
        id: 1,
        name: "Sport",
        url: " ",
      },
      {
        id: 2,
        name: "Reizen",
        url: " ",
      },
      {
        id: 3,
        name: "Dagelijks",
        url: " ",
      },
      {
        id: 4,
        name: "Herstellen",
        url: " ",
      },
    ],
  },
  {
    id: 2,
    name: "DAGELIJKS",
    subcategories: [
      {
        id: 1,
        name: "Mannen",
        url: " ",
      },
      {
        id: 2,
        name: "Vrouwen",
        url: " ",
      },
    ],
  },
  {
    id: 3,
    name: "SPORT",
    subcategories: [
      {
        id: 1,
        name: "Hardlopen",
        url: " ",
      },
      {
        id: 2,
        name: "Fitness",
        url: " ",
      },
      {
        id: 3,
        name: "Wielrennen",
        url: " ",
      },
      {
        id: 4,
        name: "Wandelen",
        url: " ",
      },
      {
        id: 5,
        name: "Herstellen",
        url: " ",
      },
      {
        id: 6,
        name: "Voetbal",
        url: " ",
      },
      {
        id: 7,
        name: "Padel",
        url: " ",
      },
      {
        id: 8,
        name: "Tennis",
        url: " ",
      },
      {
        id: 9,
        name: "Roeien",
        url: " ",
      },
      {
        id: 10,
        name: "Hockey",
        url: " ",
      },
      {
        id: 11,
        name: "Golf",
        url: " ",
      },
      {
        id: 12,
        name: "Honkbal",
        url: " ",
      },
      {
        id: 13,
        name: "Overige sporten",
        url: " ",
      },
      {
        id: 14,
        name: "KWF",
        url: " ",
      },
      {
        id: 15,
        name: "Skiën",
        url: " ",
      },
    ],
  },
  {
    id: 4,
    name: "REIZEN",
    subcategories: [
      {
        id: 1,
        name: "Mannen",
        url: " ",
      },
      {
        id: 1,
        name: "Vrouwen",
        url: " ",
      },
    ],
  },
  {
    id: 5,
    name: "Medisch",
    subcategories: [],
  },
];

const AccordionMenu = (props) => {
  return (
    <StyledMenu open={props.open} onClick={props.onClick}>
      <AccordionSection>
        {sideCategories.map((sideCategory) => (
          <Accordion
            accordionTitle={sideCategory.name}
            subcategories={sideCategory.subcategories}
          />
        ))}
      </AccordionSection>
    </StyledMenu>
  );
};

export default AccordionMenu;
