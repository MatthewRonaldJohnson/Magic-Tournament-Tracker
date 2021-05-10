import axios from "axios";

export default {
  getUserId: function(email){
    return axios.get("api/user/"+ email);
  },
  getCardDataFromScryfall: function(card){
    const url = "https://api.scryfall.com/cards/named?fuzzy="+card;
    return axios.get(url)
  },

  submitMatch: function(postData){
    console.log(postData)
    return axios.post("api/input/", postData)
  }
};

