import axios from "axios";

export function getAllAriticles() {
  return axios.get("/api/v1/articles/getAllArticle");
}
