import Link from "next/link.js";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";

export default function CreatePlacePage() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      ...Object.fromEntries(formData),
      categories: formData.getAll("categories"),
    };

    await fetch("api/places", {
      method: "POST",
      body: JSON.stringify(data),
    });

    router.push("/");
  }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledLink variant="alignSelf">back</StyledLink>
      </Link>
      <Form onSubmit={handleSubmit} formName={"add-place"} />
    </>
  );
}
