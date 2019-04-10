import axios from "axios";

export default {
    createUser: function(userData){
        console.log(userData)
        return axios.post("/auth/register", userData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    },
    getCurrentUser: function(){
        return axios.get("/api/allUsers/currentUser", {
            headers: {
                Authorization: localStorage.getItem('jwtToken')
            }
        })
    },
    getTutors: function(){
        console.log("Test")
        return axios.get("/api/allUsers/random")
    },
    getTutor: function(id){
        return axios.get("/api/allUsers/" + id, {
            headers: {
                Authorization: localStorage.getItem('jwtToken')
            }
        })
    },
    getSearchedTutors: function(query){
        console.log(query);
        return axios.get("/api/allUsers/search/" + query)
    }
}