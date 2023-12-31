const express=require('express');
require("./db/conn");
const MensRanking=require("./models/mens");
const router=require("./routers/mens");

const app=express();
const port=process.env.PORT || 4000;

app.use(express.json());
app.use(router)

app.listen(port,()=>{console.log('server is listening')});