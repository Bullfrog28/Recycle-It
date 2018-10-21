exports = function(payload) {
  // Add a location to the database
  // Send an HTTP POST Request
  if (payload.body) {
    body = EJSON.parse(payload.body.text());
  }
  
  const mongodb = context.services.get("mongodb-atlas");
  const collection = mongodb.db("locations").collection("test1");

  return collection
    .insertOne({"uid": body.uid, "lat":body.lat,"lng": body.lng,"type": body.type})
    .then(result => {
      const { insertedId } = result;
      // Do something with the insertedId
      return `Inserted document with _id: ${insertedId}`;
   });
};