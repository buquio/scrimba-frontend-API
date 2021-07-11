const button = document.getElementById("action")
    button.addEventListener("click", getUser)

    const getUser = () => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => {
            const firstUser = json.results[0].name.first
        })//check this not needed here but below

        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => {
            const secondUser = json.results[0].name.first
            console.log(`${firstUser} and ${secondUser} are friends`)
        })
    }) 
    }