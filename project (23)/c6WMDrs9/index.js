function succesfulPromise(){
    return new Promise((resolve,reject)=>{
        resolve({a:'success'})
    })
}

function rejectedPromise(){
    return new Promise((resolve,reject)=>{
        reject(new Error('here is error'))
    })
}

(async function() {
    try{
        const result = await rejectedPromise()
        console.log(result)
        
    }catch(err){
        console.log(err)
    }
})();