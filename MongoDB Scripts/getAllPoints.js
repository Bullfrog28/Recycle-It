exports = function(payload) {
  // This function hears an HTTP GET request
  // And sends the data for all map points in the database
  var queryArg = payload.query.arg || '';
  var body = {};
  if (payload.body) {
    body = EJSON.parse(payload.body.text());
  }
  const mongodb = context.services.get("mongodb-atlas");
  const collection = mongodb.db("locations").collection("test1");
  return collection.find({}).toArray();
};