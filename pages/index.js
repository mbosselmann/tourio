import styled from "styled-components";
import Card from "../components/Card.js";
import TitleBar from "../components/TitleBar.js";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "../components/StyledLink.js";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
`;

export default function Home() {
  const { data: places } = useSWR("/api/places", { fallbackData: [] });

  return (
    <>
      <List role="list">
        {places.map((place) => {
          return (
            <ListItem key={place.id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={place.id}
              />
            </ListItem>
          );
        })}
      </List>
      <Link href="/create" passHref legacyBehavior>
        <StyledLink variant="fixed">+ place</StyledLink>
      </Link>
    </>
  );
}
