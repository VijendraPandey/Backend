const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
});

const uploadAudioToImageKit = async (file) => {
  try {
    if (!file) {
      throw new Error("No audio file received");
    }

    const result = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder: "/audio_files",
      tags: ["audio-upload"],
    });

    return result;
  } catch (error) {
    console.error("ImageKit Upload Error:", error.message);

    return error;
  }
};

module.exports = uploadAudioToImageKit;
