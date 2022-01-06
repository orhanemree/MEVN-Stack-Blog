import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: String, email: String, password: String
    },
    {
        collection: "users"
    }
);

export default mongoose.model("User", User);