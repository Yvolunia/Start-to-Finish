import axios from "axios";

export default {
    getparents: function() {
      return axios.get("/api/parent");
    },
    // Gets the book with the given id
    getparents: function(id) {
      return axios.get("/api/parent/" + id);
    },

    deleteparents: function(id) {
      return axios.delete("/api/parent/" + id);
    },
    
    saveparents: function(parentData) {
      return axios.post("/api/book", parentData);
    }
  };