import { v4 as uuidv4 } from "uuid";
import mongoose, { model, models, Schema } from "mongoose";

const URI = `mongodb+srv://mareikebosselmann:${process.env.MONGODB_PASSWORD}@cluster0.rdlhnaa.mongodb.net/?retryWrites=true&w=majority`;

const placeSchema = new Schema({
  id: String,
  location: String,
  image: String,
  mapURL: String,
  description: String,
  name: String,
});

const Place = models.Place || model("Place", placeSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllPlaces() {
  await connectDatabase();

  const places = await Place.find({});

  return places;
}

async function getPlace(id) {
  await connectDatabase();
  const place = await Place.findOne({ id });
  console.log(place);
  return place;
}

async function createPlace(place) {
  await connectDatabase();

  const createdPlace = await Place.create({
    ...place,
    id: uuidv4(),
  });
  return createdPlace;
}

export { getAllPlaces, getPlace, createPlace };
