const fetch = require("node-fetch");
const API_ENDPOINT = 'http://api.genius.com/search?q=';
const token = '&access_token=sFIlUlUJZoVikuFOuUa-kRoLKeP88aTkHkZ7v6i4T8wE51V11LXGedIr1WL4ijp5';
exports.handler = async (event, context, callback) => {
  
  const dataInput = JSON.parse(event.body)
  const frasi = [
    "Un po' vecchiotta ma decisamente azzeccata",
    "Bella",
    "Carina",
    "Ti ricordo che è un matrimonio non un funerale...",
    "Azzeccata",
    "Bella idea, grazie!",
    "Interessante per carità, diciamo solo che potevi impegnarti un po' di più"
  ];
  const random = ~~(Math.random() * (frasi.length - 0)) + 0

  try {
    const response = await fetch(API_ENDPOINT+dataInput.title+token);
    const data = await response.json();
    data["esito"] = frasi[random];
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    };
  }
  

  return callback(null, {
    statusCode: 200,
    body: frasi[random] +" "+data.title
  })
}