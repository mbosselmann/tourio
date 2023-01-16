import { getAllPlaces } from "../../../helpers/db.js";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const places = await getAllPlaces();
      response.status(200).json(places);
      break;
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "GET")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
