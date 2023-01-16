import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Button = styled.button`
  background-color: lightsalmon;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

export default function Form({ onSubmit, formName }) {
  return (
    <>
      <FormContainer aria-labelledby={formName} onSubmit={onSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" />
        <Label htmlFor="image-url">Image Url</Label>
        <Input id="image-url" name="image" type="text" />
        <Label htmlFor="location">Location</Label>
        <Input id="location" name="location" type="text" />
        <Label htmlFor="map-url">Map Url</Label>
        <Input id="map-url" name="mapURL" type="text" />
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></Textarea>
        <Button type="submit">Add place</Button>
      </FormContainer>
    </>
  );
}
