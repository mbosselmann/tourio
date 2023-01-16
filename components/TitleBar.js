import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 20px;
  text-align: center;
`;

export default function TitleBar() {
  return <Headline>Tourio</Headline>;
}
