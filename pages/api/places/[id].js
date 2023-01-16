import { getPlace } from "../../../helpers/db.js";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const place = await getPlace(request.query.id);
      if (!place) {
        response.status(404).json({
          message: `Place ${request.query.id} was not found.`,
        });
      } else {
        response.status(200).json(place);
      }
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
