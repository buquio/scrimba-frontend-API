const startTransaction = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res(true)
      },3000)
})       
} 
const initPayment = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res(true)
      },2000)
})
}
const launchVerification = ()=>{
    return new Promise((res) => {
      setTimeout(()=>{
            res(true)
      },2000)
})
}

(async function() {
    try{
          const result = await Promise.all([startTransaction(),initPayment(),launchVerification()])
          console.log(result)
            
    }catch(err){
        console.log(err)
    }
})();