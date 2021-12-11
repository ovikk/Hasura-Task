import jsonFile from "../../assets/tails.json";

export default async function tail(req, res) {
  const { tail } = req.body.input;

  try {
    const request = await fetch(`http://backend:8080/api/rest/tail/${tail}`, {
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "secret",
      },
    });
    const { long_tails } = await request.json();

    // Here we can fetch file from any source. In this case I'm just re-defying it
    const file = jsonFile;

    const dataForTail = jsonFile.find((e) => e.id === long_tails[0].json_id);

    if (!dataForTail) {
      return res.status(400).json({
        message: "no data found",
      });
    }

    return res.json({
      title: dataForTail.title,
      description: dataForTail.description,
    });
    
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    });
  }
}
