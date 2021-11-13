import axios from '../utils/config/axios.config';
 
//Metodos

	
// Método GET con fetch
// const GET = (url) => {
//     return fetch(url)
//       .then(response => response.json());
// }
 
 
// Utilizando axios
const GET = (url) => {
    return axios.get(url)
        .then(response => response.data);
}

	
const POST = (url, data) => {
    return axios.post(url, data)
        .then(response => response.data);
}

const PUT = (url, data) => {
    return axios.put(url, data)
        .then(response => response.data);
}

const DELETE = (url) => {
    return axios.delete(url)
        .then(response => `${response.status} ${response.statusText}`);
}

const getObservable = (url) => {
    axios.get(url).subscribe(
        res => {
            return res.data},
        error => console.log(error),
        () => console.log('success')
    )
    
}


export { GET, POST, PUT, DELETE, getObservable}