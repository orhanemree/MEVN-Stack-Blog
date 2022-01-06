import  express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/index.js"
import DB from "./DB.js"
import mongoose from "mongoose"

// create express app
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect to local mongoDB
mongoose.connect(DB);

// use router
app.use("/", router)


// start app
app.listen(8080, () => {
    console.log("Listening port 8080");
});
