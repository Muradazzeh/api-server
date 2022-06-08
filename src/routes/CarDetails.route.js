`use strict`
const express=require("express")
const {  CarDetailsTable } = require("../models/index.js");
const CarDetailsRouter = express.Router();

CarDetailsRouter.get("/CarDetails", getCarDetails);
CarDetailsRouter.get("/CarDetails/:id", getOneCarDetails);
CarDetailsRouter.post("/CarDetails", createCarDetails);
CarDetailsRouter.put("/CarDetails/:id", updateCarDetails);
CarDetailsRouter.delete("/CarDetails/:id", deleteCarDetails);


async function getCarDetails (req,res){
let result= await CarDetailsTable.get()
res.status(200).json(result)
}

async function getOneCarDetails(req, res) {
    const detailId = parseInt(req.params.id);
    let details = await CarDetailsTable.get(detailId);
    res.status(200).json(details);
}

async function createCarDetails(req, res) {
    let newDetails = req.body;
    let CreatedDeatail= await CarDetailsTable.create(newDetails);
    res.status(201).json(CreatedDeatail);
}

async function updateCarDetails(req, res) {
    let detailId = parseInt(req.params.id);
    let updateDetail = req.body;
    let foundDetails = await CarDetailsTable.get(detailId);
    if (foundDetails) {
        let updatedDetail = await foundDetails.update(updateDetail);
        res.status(201).json(updatedDetail);
    }
    else{
        res.status(404).send("Details Id not found")
    }
}
    async function deleteCarDetails (req, res) {

        let DetailId = parseInt(req.params.id);
        let deleteDetail= await CarDetailsTable.delete(DetailId);
        res.status(204).json(deleteDetail);
        
    }
    module.exports = CarDetailsRouter;