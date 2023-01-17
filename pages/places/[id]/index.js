import Image from "next/image.js";
import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../../../components/StyledLink.js";

const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: place, isLoading, error } = useSWR(`/api/places/${id}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function deletePlace() {
    await fetch(`/api/places/${id}`, {
      method: "DELETE",
    });

    router.push("/");
  }

  return (
    <>
      <Link href={"/"} passHref legacyBehavior>
        <StyledLink variant="alignSelf">back</StyledLink>
      </Link>
      <ImageContainer>
        <StyledImage
          src={place.image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt=""
        />
      </ImageContainer>
      <h2>
        {place.name}, {place.location}
      </h2>
      <Link href={place.mapURL} passHref legacyBehavior>
        <StyledLink variant="outlined">Location on Google Maps</StyledLink>
      </Link>
      <p>{place.description}</p>
      <Link href={`/places/${id}/edit`}>Edit</Link>
      <button onClick={deletePlace} type="button">
        DELETE
      </button>
    </>
  );
}
