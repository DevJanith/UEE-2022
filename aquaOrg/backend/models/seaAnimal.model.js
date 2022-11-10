import mongoose from "mongoose";

const SeaAnimalSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  introduction: {
    type: String,
    require: true,
  },
  lifespan: {
    type: String,
    require: true,
  },
  mass: {
    type: String,
  },
  length: {
    type: String,
  },
  explanantion: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const SeaAnimal = mongoose.model("SeaAnimal", SeaAnimalSchema);

export default SeaAnimal;
