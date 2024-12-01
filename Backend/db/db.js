import mongoose from "mongoose";

function connection() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MondoDb Connection Successfull");
    })
    .catch((err) => console.log(err));
}

export default connection;
