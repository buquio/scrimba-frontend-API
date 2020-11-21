
// METHOD 1:catching fetch api error using .catch/.then(promise chaining)
document.getElementById("x").addEventListener("click", ()=>{
    
    const userApi = 'https://randomuser.me/apii'//SEE ERROR HERE!- apii
    
    fetch(userApi).then(response=>response.json()).then(json=>{
      console.log('promise chaining:', json.results[0].name.first)
    }).catch(err=>console.log(err))
    
    
    })
// METHOD 2:catching FETCH API error using TRY/CATCH+AWAIT
    
document.getElementById("y").addEventListener("click", async ()=>{

    const userApi = 'htttps://randomuser.me/api/'//SEE ERROR HERE!- htttps
    

   try{
        const response = await fetch(userApi)
        const json = await response.json()
        console.log('async/await:', json.results[0].name.first)

   } catch(err){
       console.log(err)
   }

})
    
    