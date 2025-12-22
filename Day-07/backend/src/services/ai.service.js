const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

const generateCaption = async (image) => {
  try {
    const base64 = Buffer.from(image.buffer).toString("base64");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                data: base64,
                mimeType: image.mimetype,
              },
            },
            {
              text: "Generate a short one line and only one, engaging caption for this image, use emoji's and hashtags also if possible",
            },
          ],
        },
      ],
    });

    return response.text;
  } catch (err) {
    console.error("Error generating caption:", err);
    throw err;
  }
};

module.exports = generateCaption;
