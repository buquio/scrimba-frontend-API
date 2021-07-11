// 1. fetch/.then/.then
// 2. function: /fetch/.then/./then ***
// 3. function arrow: const getPost = () => /fetch/.then/.then
// 4. async function:  /fetch/await 
// 5. async function arrow:const getData = async () => { fetch/await

// 1. axios/.get/.then/.then
// 2. function:  /axios.get/.then/.then ***
// 3. function arrow: const getPost = () => /axios.get/.then/.then
// 4. async function:  /axios.get/.then/.then
// 5. async function arrow: const getData = async () => { /axios.get/.then/.then

// fetch("https://restcountries.eu/rest/v2/all")
// .then(function(res){
//   // console.log(res);
//   return res.json();
// })
// .then(function(data){
//   // console.log(data);
//   initialize(data);
// })
// .catch(function(err){
//   console.log("Error:", err);
// });

// 1. fetch/.then/.then
//1.fetching internal files
 fetch('example.txt')
    .then( response => { // {return-means it will return many things or single
        return response.text()
    })
    .then( text => {
        console.log(text)
    });


// using arrow function + DOM
fetch('example.txt')
.then( response => response.text()) // return just one thing
.then( text => {
    const div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
    // or 
      console.log(text)
});

// 2. function: fetch/.then/./then ***
 function getText() {
    fetch('example.txt')
    .then( response => response.text()) // return just one thing
    .then( text => {
        const div = document.createElement('div');
        div.innerHTML = text;
        document.body.appendChild(div);
        // or 
        console.log(text)
    })
    }

getText();

// 3. function arrow: const getPost=() => /fetch/.then/.then
const getText = () => {
    fetch('example.txt')
    .then( response => response.text()) // return just one thing
    .then( text => {
        const div = document.createElement('div');
        div.innerHTML = text;
        document.body.appendChild(div);
        // or 
        console.log(text)
    })
    }

getText();


// 4. async function: /fetch/await 
async function getText() {
    const response = await fetch('example.txt');
    const text = await response.text();

    const div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
    // or 
console.log(text)
}

getText();


// 5. async function arrow:const getData = async () => { fetch/await
const getData = async () => {
    const response = await fetch('example.txt');
    const text = await response.text();

    const div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
    // or 
console.log(text)
}

getText();

    
// 2converting to json stringify
const user = {
name: "Jesse",
age: 25
}

const convertToJson = JSON.stringify(user)

console.log(convertToJson)


// 3getting image src from api url
// Fetch an image from https://jsonplaceholder.typicode.com/photos/5. The response will be in a JSON. 
// You'll need to access the "response url" property, then pass that into the img tag.
//NOTE: first,check the api to see all the attributes & how it is arranged OR  use console.log(json)

fetch('https://jsonplaceholder.typicode.com/photos/5') // fetch image5
	.then(res => res.json()) // Process the data
	.then(json => { 
		const img = document.createElement('img');
		img.src = json.url; // Set the image source to the json image5 URL== image5 src
		document.body.appendChild(img);
		// or  
console.log(json)  //testing to see all the possible jsondata attribute e.g 
}); 
//  {albumId: 1, 
//   id: 1, 
//   title: "accusamus beatae ad facilis cum similique qui sunt",
//   url: "https://via.placeholder.com/600/92c952", 
//   thumbnailUrl: "https://via.placeholder.com/150/92c952"}


// 4fetch data from people.json file
// EXERCISE 1
// Fetch the data from the people.json file and display each persons name on the web page.
fetch('people.json')
    .then( res => res.json() )
    .then( json => {
        json.forEach( person => {
            const div = document.createElement('div');
            div.innerHTML = person.name;

//NOTE:to see this in the browser you need to copy&paste this FOLDER PROJECT into www folder which is inside WAMP Server.
//  then open a new tab and type in localhost/3fetch data from people.json file/  
// OR RIGHT click on html select open with live server (live server extension on Vs code)

// EXERCISE 2
// Fetch the data from the people.json file and display each persons name and age like this: "John is 20".
           div.innerHTML = `${person.name} is ${person.age}`;
            document.body.appendChild(div);
        })
    })

    
//5 Add error handling to this example above 
fetch('people.json')
	.then( response => {throw 404} ) //manually added
	.then( json => {
		json.forEach((person) => {
            const div = document.createElement("div");
            div.innerHTML = `${person.name} is ${person.age}`;
            document.body.appendChild(div);
        })
    })
    .catch(err => console.error(err));
    



//6putting the above in a named async function   
async function getData() {
    const response = await fetch('people.json'); // const dataPromise = await fetch('people.json'); 
    const data = await response.json(); //const data = await dataPromise.json(); 
        
    data.forEach( person => {
        const div = document.createElement('div');
        // div.innerHTML = data;
        div.innerHTML = person.name;
        document.body.appendChild(div);
    })
}

getData(); //rember to call
//or
async function getPeople() {
    const response = await fetch('people.json')
    const people = await response.json()

    people.forEach(person => { 
    const div = document.createElement('div')
    div.innerHTML = person.name
    document.body.appendChild(div)
})
}
getPeople()


// 7using asyn function +arrow function
const getData = async () => {
    const response = await fetch('people.json');
    const data = await response.json();
        
    data.forEach( person => {
        const div = document.createElement('div');
        div.innerHTML = person.name;
        document.body.appendChild(div);
        console.log(div)
    })
}

getData();


///////////////////////////////////////////
// 1. axios/.get/.then/.then
// 2. function name() /axios.get/.then/.then ***
// 3. function arrow:const getPost() => /axios.get/.then/.then
// 4. async function name() /axios.get/.then/.then
// 5. const getData = async () => { /axios.get/.then/.then

// 1. axios/.get/.then/.then
const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/todos')
.then(({data}) => {// destructuring
    console.log(data)
    }).catch(error => {
    console.log(error)
    })
    
fetchData() 

// 2. function: axios.get/.then/.then ***
const axios = require("axios");

function getPost () {    
     return axios.get("https://jsonplaceholder.typicode.com/todos")
     .then(result => {
        console.log(result)    // all result
        }).catch(err => {
    console.log(err);
     })
    }

   console.log(getPost())

// 3. function arrow: const getPost() => /axios.get/.then/.then
   const axios = require("axios");
   
   const getPost = () => { 
        return axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(result => {
           console.log(result)    // all
           console.log(result.data)    // posts/1 
           }).catch(err => {
       console.log(err);
        })
       }
   
      console.log(getPost())
   
// 4. async function: axios.get/.then/.then
      const axios = require('axios')

    async function fetchData () {
    const res =await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(res.data)
        } 
        
    fetchData()    
   
// 5. async function arrow: const getData = async () => { /axios.get/.then/.then
    const axios = require('axios')

const fetchData = async() => {
    const response =await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(response.data)
        } 
        
    fetchData()    
   
// NOTE: axios cannot fetch internal files only external e.g api
const axios = require('axios')

const getText = () => { 
    return axios.get('example.txt')
    .then(text => {
        console.log(text)
        }).catch(error => {
        console.log(error)
        })
        }
        getText()


