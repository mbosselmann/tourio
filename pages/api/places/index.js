import { getAllPlaces, createPlace } from "../../../helpers/db.js";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const places = await getAllPlaces();
      response.status(200).json(places);
      break;
    }
    case "POST": {
      const place = JSON.parse(request.body);
      const createdPlace = await createPlace(place);
      response.status(201).json(createdPlace);
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "GET,POST")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
