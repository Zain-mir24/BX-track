import axios from "axios"
const customInstance=axios.create({
    baseURL:"http://localhost:5000/",
    header:{
        'Content-Type': 'application/json'
    }
})
export default customInstance