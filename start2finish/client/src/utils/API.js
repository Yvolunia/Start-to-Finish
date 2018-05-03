import axios from "axios";

export default {
    getkidsall:() => {
      return axios.get("/api/kids");
    },
    
    getkid:(id) => {
      return axios.get("/api/kids/" + id);
    },

    updatekid:(id) => {
      return axios.put("/api/kids" + id);
    },

    deletekid: (id) => {
      return axios.delete("/api/kids/" + id);
    },
    
    savekid: (kidData) => {
      return axios.post("/api/book", kidData);
    },

    getmissionsall:() => {
      return axios.get("/api/missions");
    },
    
    getmission:(id) => {
      return axios.get("/api/missions/" + id);
    },

    updatemission:(id) => {
      return axios.put("/api/missions" + id);
    },

    deletemission: (id) => {
      return axios.delete("/api/misions/" + id);
    },
    
    savemission: (missionData) => {
      return axios.post("/api/book", missionData);
    }



















  };