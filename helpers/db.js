import mongoose, { model, models, Schema } from "mongoose";

const URI = `mongodb+srv://mareikebosselmann:${process.env.MONGODB_PASSWORD}@cluster0.rdlhnaa.mongodb.net/?retryWrites=true&w=majority`;

const placeSchema = new Schema({
  id: String,
  text: String,
  author: String,
  categories: [String],
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

export { getAllPlaces };
