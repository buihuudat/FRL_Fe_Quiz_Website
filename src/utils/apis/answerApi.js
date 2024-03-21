import { axiosClient } from "../axiosConfig";

export const answerApi = {
  createAnswer: (answer) => axiosClient.post("/answer", { answer }),
  getAllAnswers: () => axiosClient.get("/answer"),
  getAnswer: (id) => axiosClient.get(`/answer/${id}`),
  updateAnswer: (id, answer) => axiosClient.put(`/answer/${id}`, { answer }),
  deleteAnswer: (id) => axiosClient.delete(`/answer/${id}`),
};
