import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";
import useSWRMutation from "swr/mutation";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

async function addPlace(url, { arg: place }) {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(place),
  });
}

export default function CreatePlacePage() {
  const router = useRouter();

  const { trigger, isMutating } = useSWRMutation("api/places", addPlace);

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form
        disabled={isMutating}
        onSubmit={async (place) => {
          await trigger(place);
          // router.push("/");
        }}
        formName={"add-place"}
      />
    </>
  );
}
