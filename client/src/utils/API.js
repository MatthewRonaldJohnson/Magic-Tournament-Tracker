import axios from "axios";

export default {
  getUserId: function(email){
    return axios.get("api/user/"+ email);
  }
};

