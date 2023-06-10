const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phonesSchema = new Schema(
  {
    id:Number,
    name:String,
    manufacturer: String,
    description: String,
    color: String,
    price: String,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Phones = model("Phone", phonesSchema);

module.exports = Phones;
