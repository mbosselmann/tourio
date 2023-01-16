import Image from "next/image.js";
import styled from "styled-components";

const Article = styled.article`
  border: 5px solid black;
  border-radius: 0.8rem;
  padding: 0.5rem;
`;

export default function Card({ name, image, location }) {
  return (
    <Article>
      <figure>
        <Image src={image} width={250} height={150} alt="" />
        <figcaption>{name}</figcaption>
      </figure>
      <p>Location: {location}</p>
    </Article>
  );
}
