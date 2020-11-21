// fetch('example.txt')
//     .then( response => {
//         return response.text()
//     })
//     .then( text => {
//         console.log(text)
//     });


    fetch('example.txt')
    .then( response => response.text())
    .then( text => {
        const div = document.createElement('div');
        div.innerHTML = text;
        document.body.appendChild(div);
        // or 
//       console.log(text)
    });


