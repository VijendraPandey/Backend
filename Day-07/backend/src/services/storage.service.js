const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
});

const uploadImageToImageKit = async (file) => {
  if (!file?.buffer) {
    throw new Error("Invalid file: buffer missing");
  }

  try {
    const result = await imagekit.upload({
      file: file.buffer,              
      fileName: file.originalname,    
      folder: "/image_files",
      tags: ["image-upload"],
      useUniqueFileName: true,
    });

    return result;
  } catch (error) {
    console.error("ImageKit Upload Error:", error.message);
    throw error; // ✅ IMPORTANT
  }
};

module.exports = uploadImageToImageKit;
