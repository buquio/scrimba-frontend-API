//THIS IS COULD BE EMPTY BECOS YOU NEED TO COPY AND PASTE EACH CODE FROM ALL.JS TO TEST IT HERE

const startTransaction = ()=>{
    return new Promise((res)=>{
       setTimeout(()=>{
             res(true)
            //  resolve(true)
       },5000)  //set:if you start a transfer transaction after 5s online app will close
 })       
 } 
 const initPayment = ()=>{
    return new Promise((res)=>{
       setTimeout(()=>{
             res(true)
            //  resolve(true)
       },1000)  //set:if you initiat/start a transfer transaction after 1s online app will close
 })
 }
 const launchVerification = ()=>{
     return new Promise((res) => {
       setTimeout(()=>{
             res(true)
            //  resolve(true)
       },100)  //set:if you start a verification transaction after 1ms online app will close
 })
 }
 
 const performance = async (label) => { //performance according to the date & time of transaction
       const date = new Date()   //set date & time  
       console.log(label, `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
 }
 
 
 (async function() {
     try{
           await performance('start') //records starting time when this fuction starts
           const result = await Promise.all([startTransaction(),initPayment(),launchVerification()])
           await performance('end') //records ending time when all the setimeout finishes.
           console.log(result) //if all promises are resolved then it will log the result
             
     }catch(err){
         console.log(err)
     }
 })();
