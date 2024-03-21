import { axiosClient } from "../axiosConfig";

export const quizAttemptApi = {
  createQuizAttempt: (quizAttempt) =>
    axiosClient.post("/quizAttempt", { quizAttempt }),
  getAllQuizAttempts: () => axiosClient.get("/quizAttempt"),
  getQuizAttempt: (id) => axiosClient.get(`/quizAttempt/${id}`),
  updateQuizAttempt: (id, quizAttempt) => {
    return axiosClient.put(`/quizAttempt/${id}`, { quizAttempt });
  },
};
