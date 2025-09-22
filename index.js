const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB =require("./database/ConnectDb");
const notesRouter = require("./Routes/notesRoutes");
const usersRouter = require("./Routes/userRoutes");
const app = express();
const port = process.env.PORT;

connectDB();
app.use(cors({origin:process.env.FRONTEND_URL}));
app.use(express.json());
app.use("/", notesRouter);
app.use("/", usersRouter);


// app.get(/(.*)/ ,(req,res)=>{
//     res.send("404 not found");
// })
app.listen(port, ()=>{
    console.log(`Application is up and running on port ${port}`);
});

