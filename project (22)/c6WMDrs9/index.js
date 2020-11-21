function succesfulPromise(){
    return new Promise((resolve,reject)=>{
        resolve('success')
    })
}



(async function() {
    try{
        const result = await succesfulPromise()
        console.log(result)
        
    }catch(err){
        console.log(err)
    }
})();