import axios from "axios";

export default {
    getparents: function() {
      return axios.get("/api/parents");
    },
    // Gets the book with the given id
    getparents: function(id) {
      return axios.get("/api/parents/" + id);
    },

    deleteparents: function(id) {
      return axios.delete("/api/parents/" + id);
    },
    
    saveparents: function(parentData) {
      return axios.post("/api/books", parentData);
    }
  };