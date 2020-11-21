// EXERCISE 1
// Fetch the data from the people.json file and display each persons name on the web page.

fetch('people.json')
    .then( res => res.json() )
    .then( json => {
        json.forEach( person => {
            const div = document.createElement('div');
            div.innerHTML = person.name;
// or 
// EXERCISE 2
// Fetch the data from the people.json file and display each persons name and age like this: "John is 20".
           div.innerHTML = `${person.name} is ${person.age}`;

            document.body.appendChild(div);
        })
    })




    