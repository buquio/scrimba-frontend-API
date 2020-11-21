// fetch('people.json')
//     .then( res => res.json())
//     .then( json => {
//         json.forEach( person => {
//             const div = document.createElement('div');
//             div.innerHTML = `${person.name} is ${person.age}`;
//             document.body.appendChild(div);
//         });
//     });



// using async for the above 
async function getData() {
    const response = await fetch('people.json');
    const data = await response.json();
        
    data.forEach( person => {
        const div = document.createElement('div');
        div.innerHTML = person.name;
        document.body.appendChild(div);
    })
}

getData();






