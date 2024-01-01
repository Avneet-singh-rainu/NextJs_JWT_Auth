import mongoose from "mongoose";

export default async function connectDB() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/NextJs")
    .then(() => {
      console.log("connect to the database named NextJs");
    })
    .catch((err) => console.log(err));
}
