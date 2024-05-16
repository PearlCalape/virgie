const mongoose = require("mongoose");

module.exports = {
  connectToDb: (cb) => {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    mongoose.connect("mongodb+srv://pearlnerijeancalape:pearlnerijean.calape@cluster0.1mzryqu.mongodb.net/Avon?retryWrites=true&w=majority", connectionParams)
      .then(() => {
        console.log("Connected to database successfully");
        return cb();
      })
      .catch(error => {
        console.log(error);
        console.log("Could not connect to the database!");
        return cb(error);
      });
  },
  getDb: () => mongoose.connection,
};
