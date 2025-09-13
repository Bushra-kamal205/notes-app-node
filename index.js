const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB =require("./database/ConnectDb");
const notesRouter = require("./Routes/notesRoutes");
const app = express();
const port = process.env.PORT;

connectDB();
app.use(express.json());
app.use("/", notesRouter);

app.use(cors({origin:"http://localhost:5173"}));
// app.get(/(.*)/ ,(req,res)=>{
//     res.send("404 not found");
// })
app.listen(port, ()=>{
    console.log(`Application is up and running on port ${port}`);
});

