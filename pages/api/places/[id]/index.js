import { getPlace, deletePlace, updatePlace } from "../../../../helpers/db.js";

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
    case "DELETE": {
      const deletedPlace = await deletePlace(request.query.id);
      if (!deletedPlace) {
        response.status(404).json({
          message: `Place ${request.query.id} was not found.`,
        });
      } else {
        response.status(200).json(deletedPlace);
      }
      break;
    }
    case "PATCH": {
      const place = JSON.parse(request.body);
      const updatedPlace = await updatePlace(request.query.id, place);
      if (!updatedPlace) {
        response.status(404).json({
          message: `Place ${request.query.id} was not found.`,
        });
      } else {
        response.status(200).json(updatedPlace);
      }
      break;
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "GET,DELETE,PATCH")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
