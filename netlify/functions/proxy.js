const axios = require("axios");

exports.handler = async (event) => {
  const url = `https://graphigo.prd.galaxy.eco${event.path.replace(
    "/.netlify/functions/proxy",
    ""
  )}`;

  try {
    const response = await axios({
      method: event.httpMethod,
      url,
      headers: {
        "Content-Type": "application/json",
        ...event.headers,
      },
      data: event.body,
    });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({error: error.message}),
    };
  }
};
