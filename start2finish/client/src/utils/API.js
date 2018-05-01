import axios from "axios";

export default {
    getkids:() => {
      return axios.get("/api/kids");
    },
    
    getkids: (id) => {
      return axios.get("/api/kids/" + id);
    },

    updatekids:(id) => {
      return axios.put("/api/kids" + id);
    },

    deletekids: (id) => {
      return axios.delete("/api/kids/" + id);
    },
    
    savekids: (kidData) => {
      return axios.post("/api/book", kidData);
    },

    getmissions:() => {
      return axios.get("/api/missions");
    },
    
    getmissions: (id) => {
      return axios.get("/api/missions/" + id);
    },

    updatemissions:(id) => {
      return axios.put("/api/missions" + id);
    },

    deletemissions: (id) => {
      return axios.delete("/api/misions/" + id);
    },
    
    savekids: (missionData) => {
      return axios.post("/api/book", missionData);
    }



















  };