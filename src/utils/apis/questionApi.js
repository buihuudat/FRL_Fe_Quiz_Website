import { axiosClient } from "../axiosConfig";

export const questionApi = {
  createQuestion: (question) => axiosClient.post("/question", { question }),
  getAllQuestions: () => axiosClient.get("/question"),
  getQuestion: (id) => axiosClient.get(`/question/${id}`),
  updateQuestion: (id, question) =>
    axiosClient.put(`/question/${id}`, { question }),
  deleteQuestion: (id) => axiosClient.delete(`/question/${id}`),
};
