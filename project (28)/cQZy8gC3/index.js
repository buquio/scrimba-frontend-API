const startTransaction = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res(true)
      },5000)
})       
} 
const initPayment = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res(true)
      },1000)
})
}
const launchVerification = ()=>{
    return new Promise((res) => {
      setTimeout(()=>{
            res(true)
      },100)
})
}

const performance = async (label) => {
      const date = new Date()      
      console.log(label, `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}


(async function() {
    try{
          await performance('start')
          const result = await Promise.all([startTransaction(),initPayment(),launchVerification()])
          await performance('end')
          console.log(result)
            
    }catch(err){
        console.log(err)
    }
})();