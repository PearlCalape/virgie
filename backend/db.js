const mongoose = require("mongoose");

module.exports = {
  connectToDb: (cb) => {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    mongoose
      .connect(process.env.MongoAtlas, connectionParams)
      .then(() => {
        console.log("Connected to database successfully");
        return cb();
      })
      .catch((error) => {
        console.log(error);
        console.log("Could not connect to the database!");
        return cb(error);
      });
  },
  getDb: () => mongoose.connection,
};
