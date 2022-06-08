`use strict`
const express=require("express")

const { CarTable }  = require("../models/index.js");


const CarRouter = express.Router();

CarRouter.get("/", Home);
CarRouter.get("/Car", getCars);
CarRouter.get("/Car/:id", getOneCar);
CarRouter.post("/Car", createCar);
CarRouter.put("/Car/:id", updateCar);
CarRouter.delete("/Car/:id", deleteCar);

 function Home (req,res){
    res.status(200).send("Ambition isn’t just length, although it often appears Here on this page, now we have the car route and carDetails to check ")
}

async function getCars(req, res) {
    let result = await CarTable.get();
    res.status(200).json(result);
}

async function getOneCar(req,res){
    const CarId = parseInt(req.params.id);
    let Car = await CarTable.get(CarId);
    res.status(200).json(Car);
}

async function createCar(req, res) {
    let newCar = req.body;
    let Car = await CarTable.create(newCar);
    res.status(201).json(Car);
}
async function updateCar(req, res) {
    let CarId = parseInt(req.params.id);
    let updateCar = req.body;
    let foundCar = await CarTable.get(CarId);
    if (foundCar) {
        let updatedCar = await foundCar.update(updateCar);
        res.status(201).json(updatedCar);
    }
}

async function deleteCar(req, res) {

    let CarId = parseInt(req.params.id);
    let deleteCar = await CarTable.delete(CarId);
    res.status(204).json(deleteCar);
}



module.exports=CarRouter