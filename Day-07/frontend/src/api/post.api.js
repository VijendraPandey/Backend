import api from "./axios";

export const createPost = (formData) =>
  api.post("/posts", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
