import express from "express"
import "dotenv/config"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import route from "./routes/index";


// dotenv.config({path:"../../env"})
const app= express();
app.use(bodyParser.json());
app.use("/",route);

const database = process.env.DATABASE;
mongoose
.connect(database,{
    useNewUrlParser: true,
useUnifiedTopology:true,
})
.then(() =>{
    console.log("Database is well connected!");
});
//server configuration
const port =process.env.PORT ||4045
app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});


export default app;