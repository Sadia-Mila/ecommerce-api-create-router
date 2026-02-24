const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: "dlkr0dfoi",
  api_key: "382663556533198",
  api_secret: "1hRp1mhytbnCVvWK-KBzje6cVeg",
});

const uploadImage = async (filename)=>{
    const result  = await cloudinary.uploader.upload(filename)
   console.log(result);
   return result;
}



module.exports = uploadImage
