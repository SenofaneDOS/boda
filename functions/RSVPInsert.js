// /* configure faunaDB Client with our secret */
var faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({
  // secret: process.env.VUE_APP_FAUNADB_SECRET
  secret: 'fnAEIkfzMlACAQJbS9Sv4303nnuqYVWz2QELwnZ3'
})

/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {
  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body)
  console.log("Function `todo-create` invoked", data)
  const item = {
    data: data
  }
  /* construct the fauna query */
  return client.query(q.Create(q.Collection("RSVP"), item))
  .then((response) => {
    console.log("success", response)
    /* Success! return the response with statusCode 200 */
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  }).catch((error) => {
    console.log("error", error)
    /* Error! return the error with statusCode 400 */
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}