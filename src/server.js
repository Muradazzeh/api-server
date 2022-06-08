`use strict`
require("dotenv").config();
const express = require("express");
const app = express();
const CarRouter=require("./routes/Cars.routes")
const notFoundHandler=require("./errorHandler/404")
const servererror=require("./errorHandler/500")
const CarDetailsRouter =require("./routes/CarDetails.route")


app.use(express.json());
app.use(CarRouter)
app.use(CarDetailsRouter)
app.get("*",notFoundHandler);
app.get(servererror);



function start(port){
app.listen(port,()=>{
    console.log(`All Beautifull things happens on port : ${port}`)
})
}
module.exports=({
    start:start,
    app:app
})