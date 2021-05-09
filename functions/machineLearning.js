exports.handler = (event, context, callback) => {

  const frasi = [
    "Un po' vecchiotta ma decisamente azzeccata",
    "Bella",
    "Carina",
    "Che gusti di m***a",
    "Ti ricordo che è un matrimonio non un funerale...",
    "Azzeccata",
    "Bella idea, grazie!"
  ];
  const random = ~~(Math.random() * (frasi.length - 0)) + 0

  return callback(null, {
    statusCode: 200,
    body: frasi[random]
  })
}