import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
    {
        title: String, description: String, content: String, author: String
    },
    {
        collection: "posts"
    }
);

export default mongoose.model("Post", Post);