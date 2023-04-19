import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import Form from "@/components/Form.js";
import { StyledLink } from "@/components/StyledLink.js";
import useSWRMutation from "swr/mutation";

async function editPlace(url, { arg: place }) {
  await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(place),
  });
}

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: place, isLoading, error } = useSWR(`/api/places/${id}`);

  const { trigger } = useSWRMutation(`/api/places/${id}`, editPlace);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-place">Edit Place</h2>
      <Link href={`/places/${id}`} passHref legacyBehavior>
        <StyledLink justifySelf="start">back</StyledLink>
      </Link>
      <Form
        onSubmit={async (place) => {
          await trigger(place);
          router.push("/");
        }}
        formName={"edit-place"}
        defaultData={place}
      />
    </>
  );
}
