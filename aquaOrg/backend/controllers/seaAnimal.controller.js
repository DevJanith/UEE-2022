import mongoose from "mongoose";
import SeaAnimal from "../models/seaAnimal.model.js";

//add Sea Animal details
export const createSeaAnimal = async (req, res) => {
    const sea_animal = req.body;
    const newSeaAnimal = new SeaAnimal(sea_animal);
  
    try {
      await newSeaAnimal.save();
  
      res.json({
        data: newSeaAnimal,
        msg: "success",
        code: "00",
        type: "POST",
      });
    } catch (error) {
      res.status(409);
      res.json({ message: error.message });
      console.log(error);
    }
  };


//get all Sea Animal details

export const getAllSeaAnimals = async (req, res) => {
  try {
    const seaAnimals = await SeaAnimal.find();

    res.status(200);

    res.json({
      data: seaAnimals,
      msg: "success",
      code: "00",
      type: "GETALL",
    });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};


//get one Sea Animal details

export const getSeaAnimal = async (req, res) => {
  const id = req.params.id;

  try {
    const seaAnimal = await SeaAnimal.findById(id);

    res.status(200);
    res.json(seaAnimal);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//delete Sea Animal details

export const deleteSeaAnimal = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Sea Animal Details with id: ${id}`);
    }

    await SeaAnimal.findByIdAndDelete(id);
    res.status(200);
    res.json({ message: "Sea Animal Details Deleted Successfully" });
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};

//update Sea Animal details

export const updateSeaAnimal = async (req, res) => {
  const { id } = req.params;
  const { name, introduction, lifespan, mass, length, explanantion } = req.body;

  let updatedAt = new Date().toLocaleString({ timeZone: "Asia/Colombo" });

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No Sea Animal Details with id: ${id}`);
    }
    const updateSeaAnimal = {
      name, 
      introduction, 
      lifespan, 
      mass, 
      length, 
      explanantion,
      updatedAt,
    };
    const update = await SeaAnimal.findByIdAndUpdate(id, updateSeaAnimal);
    res.status(200).send({ message: "Feedback Details Updated" });
    res.json(update);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
};