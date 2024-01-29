const express = require("express");
const cors = require("cors");
const jsonwebtoken = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const rootRoutes = require("./routes/index");

app.use('/api/v1',rootRoutes);

app.listen(3000,(req,res)=>{
    console.log("server is running");
})
