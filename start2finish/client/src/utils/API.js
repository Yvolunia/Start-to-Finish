import axios from "axios";

export default {
    getMissionsall:() => {
      return axios.get("/api/missions");
    },
    
    getMission:(id) => {
      return axios.get("/api/missions/" + id);
    },

    updateMission:(id) => {
      return axios.put("/api/missions" + id);
    },

    deleteMission: (id) => {
      return axios.delete("/api/missions/" + id);
    },
    
    saveMission: (missionData) => {
      return axios.post("/api/missions", missionData);
    },

    getProfilesall:() => {
      return axios.get("/api/profile/");
    },
    
    getProfile:(id) => {
      return axios.get("/api/profile/" + id);
    },

    updateProfile:(id,data) => {
      return axios.put("/api/profile/" + id, data);
    },

    deleteProfile: (id) => {
      return axios.delete("/api/profile/" + id);
    },
    
    saveProfile: (id) => {
      return axios.post("/api/profile", id);
    }

    


















  };