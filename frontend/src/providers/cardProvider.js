import axios from 'axios'
const CARDAPIs = axios.create({
    baseURL: "http://localhost:8000/api"
})

export async function create(cardData) {
    try{
        const response = await CARDAPIs.post('/cards',cardData)
        return response.data
    }catch(error){
        console.error(error.message)
    }
}

export async function search(title){
    try{
        const response = await CARDAPIs.get(`/cards/${title}`);
        return response.data;
    }catch(error){
        console.error(error.message)
    }
}

export async function getAll(){
    try{
     const response = await CARDAPIs.get(`/cards`);
     return response.data;   
    }catch(error){
        console.error(error.message)
    }
}