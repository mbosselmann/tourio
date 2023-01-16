import styled from "styled-components";
import Card from "../components/Card.js";
import TitleBar from "../components/TitleBar.js";
import useSWR from "swr";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Request with ${JSON.stringify(args)} failed.`);
  }
  return await response.json();
};

const List = styled.ul`
  list-style: none;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export default function Home() {
  const { data: places } = useSWR("/api/places", fetcher, { fallbackData: [] });

  return (
    <>
      <TitleBar />
      <List>
        {places.map((place) => {
          return (
            <Card
              key={place.id}
              name={place.name}
              image={place.image}
              location={place.location}
            />
          );
        })}
      </List>
    </>
  );
}
