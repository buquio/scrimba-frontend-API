
// 20random name App using random API using 1.fetch/.then 2.asyn/await


document.getElementById("action").addEventListener("click", ()=>{ //the button calls the api
    // call user API
    // store random first name in a variable firstUser
    // call user API again, after you finish calling first one
    // store random first name in variable secondUser 
    // console log `${firstUser} and ${secondUser} are friends`
    
    // METHOD 1-using fetch/.then
    const userApi = 'https://randomuser.me/api/' //get only one user at a time i.e random picking so you need to call the api 2ce
    
    fetch(userApi)
    .then(response=>response.json())
    .then(json=>{
        // console.log(json)
        const firstUser = json.results[0].name.first
    // })
    fetch(userApi)
    .then(response=>response.json())
    .then(json=>{
            const secondUser = json.results[0].name.first
            console.log(`${firstUser} and ${secondUser} are friends`)
        })
    });

    

    //rewrite METHOD 1 above using normal arrow function
    const button = document.getElementById("action")
    button.addEventListener("click", getUser)

    const getUser = () => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => {
            const firstUser = json.results[0].name.first
        // })check this not needed here but below

        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => {
            const secondUser = json.results[0].name.first
            console.log(`${firstUser} and ${secondUser} are friends`)
        })
    }) 
    }


    // METHOD 2 -using async/await
    document.getElementById("action").addEventListener("click", async ()=>{ //the button calls the api
        const userApi = 'https://randomuser.me/api/'

    const firstResponse = await fetch(userApi) //or firstUserPromise
    const firstUserJson = await firstResponse.json()
    const firstUser = firstUserJson.results[0].name.first
    
    const secondResponse = await fetch(userApi)  //or secondUserPromise
    const secondUserJson = await secondResponse.json()
    const secondUser = secondUserJson.results[0].name.first
    
    console.log(`${firstUser} and ${secondUser} are friends`)
    })
    

// 21random name App usind 1.promise-.catcn 2.try%catch error
// METHOD 1:catching fetch api error using 1.catch within 2.try/catch
document.getElementById("chaining").addEventListener("click", ()=> {
    const userApi = 'https://randomuser.me/apii'//SEE ERROR HERE!- apii
    
    fetch(userApi)
    then(response=>response.json())
    .then(json=>{
      console.log('promise chaining:', json.results[0].name.first)
    }).catch(err=> console.log(err))
    })

    // METHOD 2:catching FETCH API error using TRY/CATCH within async/await
document.getElementById("async-await").addEventListener("click", async ()=>{
    const userApi = 'htttps://randomuser.me/api/'//SEE ERROR HERE!- htttps
   try{
        const response = await fetch(userApi)
        const json = await response.json()
        console.log('async/await:', json.results[0].name.first)
   } catch(err){
       console.log(err)
   }
})
    