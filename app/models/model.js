import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: String,
  password: String
});

const model =
  mongoose.models.nextjsUsers || mongoose.model("nextjsUsers", schema);

export default model;
