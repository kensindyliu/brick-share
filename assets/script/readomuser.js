const URL = 'https://www.randomuser.me/api/?nat=CA&results=10&seed=same';

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors'
};

fetch(URL, options)
    .then(response => response.json())
    .then(json => json.results)
    .then(console.log)
    .catch(console.error);

async function getUsers(){
    try{
        const result = await fetch(URL,options);
        const users = await result.json();
        console.log(users);
    } catch(err) {
        console.log(err.message);
    }
}