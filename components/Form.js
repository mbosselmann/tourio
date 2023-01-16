export default function Form({ onSubmit }) {
  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <form aria-labelledby="add-place" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="image-url">Image Url</label>
        <input id="image-url" name="image" type="text" />
        <label htmlFor="location">Location</label>
        <input id="location" name="location" type="text" />
        <label htmlFor="map-url">Map url</label>
        <input id="map-url" name="mapURL" type="text" />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Add place</button>
      </form>
    </>
  );
}
