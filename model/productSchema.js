const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price:{
    type: Number, 
    required: true,
  },
    size:{
    type: Number,   
  },
  color:{
    type: String, 
  },
  category:{
    type: String, 
  },
  ram:{
    type: Number, 
  },
  storage:{
    type: Number, 
  },
},
{timestamps : true,

}
);
module.exports = mongoose.model("productList", productSchema);
