import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Button = styled.button`
  background: #fad200;
  border-radius: 30px;
  border: 2px solid #f3f812;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css` background: linear-gradient(#f3f812, #fad200)
color:black;
`}
`;

const Container = styled.div`
  text-align: center;
`;
render(
  <Container>
    <Button primary> Begin</Button>
    <Button>
      <i class="fas fa-plus"></i>
    </Button>
  </Container>
);
