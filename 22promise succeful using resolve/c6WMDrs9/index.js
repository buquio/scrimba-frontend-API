
// 22promise succeful 
function succesfulPromise(){  //template for sucessfulPromise
    return new Promise((resolve,reject)=>{ 
        resolve('success')
    })
}

(async function() { //actual action-event
    try{
        const result = await succesfulPromise()
        console.log(result)
        
    }catch(err){
        console.log(err)
    }
})();



// 23promise failed 
//template for both sucessfulPromise & rejectedPromise
function succesfulPromise(){
    return new Promise((resolve,reject)=>{
        resolve({a:'success'})
    })
}
function rejectedPromise(){
    return new Promise((resolve,reject)=>{
        reject(new Error('here is error'))  //Error:here is error
    })
}

(async function() { //actual action-event
    try{
        // const result = await succesfulPromise()
        const result = await rejectedPromise()
        console.log(result)
        
    }catch(err){
        console.log(err)
    }
})();


// 24promise pending 
//template for both sucessfulPromise & rejectedPromise & pending
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

function pendingPromise(){
    return new Promise((resolve,reject)=>{
        const interval = setInterval(()=>console.log('pending'),1000)
        setTimeout(()=>{   //i.e setTimeout((),2000) 
            clearInterval(interval)
            resolve('success after 4 seconds')
        },4000)
    })
}

(async function() { //actual action-event
    try{
        // const result = await succesfulPromise()
        // const result = await rejectedPromise()
        const result = await pendingPromise()
        console.log(result)
        
    }catch(err){
        console.log(err)
    }
})();


// 25random bool App using promise resolve & reject with if statement
// create a promise inside a function 
// setimeout to wait for 4 seconds
// resolve or reject based on randomBool
// false - reject 'hero is on vacation'
// true - resolve 'batman is here'

const randomBool = Boolean(Math.round(Math.random())) // returns either 0 or 1 i.e true or false

function getHero(){ //pending promise has settimeout
// const getHero = ()=>{
    return new Promise((resolve,reject)=>{ //resolve and reject template inside if statement
        setTimeout(()=>{
          if(randomBool){
              resolve('batman is here')
          }else{
              reject(new Error('hero is on vacation'))
          }
        },4000)
    })
}


(async function() { //actual action-event
    try{
        const result = await getHero()
        console.log(result)
        const myResult = await result.split()
        console.log(myResult)
    }catch(err){
        console.log(err)
    }
})();


// 26using try catch  &finally
// rejecting a promise but still want something to return a message
const promise = ()=>{
    return new Promise((resolve,reject)=>{
        reject(new Error('Something went wrong'))
    })
}

const resolver = async (promise)=>{
    try{
        await promise()
    }catch(err){
        console.log(err)
    }finally{
        return 'I still return the value'
        console.log('I am here')
    }
}

(async function() {
    const test = await resolver(promise)
    console.log(test)
})();

// 28promise+settimeout+promise.all
// Promise.all 
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


// 31promise+performance+promise.all
//promise.all
// result generated after perfoming a transaction e.g online trasfer

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
           await performance('start') //records starting time
           const result = await Promise.all([startTransaction(),initPayment(),launchVerification()])
           await performance('end') //records ending time
           console.log(result) //if all promises are resolved then it will log the result
             
     }catch(err){
         console.log(err)
     }
 })();


// 32promise+promise stopper+promise.race
// Promise.race /promiseStopper
// --set a time & resolve only the one within the specified time
// this will stop the whole process after 1500miliseconds wheather all is finished or not

const taskA = ()=>{
    return new Promise((res)=>{
       setTimeout(()=>{
             res('a')
            //  resolve('a')
       },4000)
 })       
 } 
 const taskB = ()=>{
    return new Promise((res)=>{
       setTimeout(()=>{
             res('b')
            //  resolve('b')
       },2000)
 })
 }
 const taskC = ()=>{
     return new Promise((res) => {
       setTimeout(()=>{
             res('c')
            //  resolve('c')
       },10000)
 })
 }
 
 const promiseStopper = ()=>{ //this will stop the whole process after 1500miliseconds wheather all is finished or not
       return new Promise((res) => {
       setTimeout(()=>{
             res('too long to complete')
            //  resolve('too long to complete')
       },1500)
 })
 }
 
 (async function() {
     try{
           const result = await Promise.race([taskA(),taskB(),taskC(),promiseStopper()])
           console.log(result)
     
     }catch(err){
         console.log(err)
     }
 })();

 
// 33excercise using promise.all & promise.race
const taskW = ()=>{
    return new Promise((res)=>{
       setTimeout(()=>{
             res('W')
       },1000)
 })       
 } 
 const taskO = ()=>{
    return new Promise((res)=>{
       setTimeout(()=>{
             res('O')
       },500)
 })
 }
 const taskExclaim = ()=>{
     return new Promise((res) => {
       setTimeout(()=>{
             res('!')
       },Math.floor(Math.random() * 1000)) //set random timing
 })
 }
 const taskSmiley = ()=>{
     return new Promise((res) => {
       setTimeout(()=>{
             res(':)')
       },300)
 })
 }
 
 // execute taskW & append resultW to wow/result
 // execute taskW and taskO in parallel(promise.all) and append their result to wow 
 // execute taskExclaim and taskSmiley in race(promise.race) condition append result to wow
 // get either WOW! or WOW:) depending on the random value of taskExclaim timeout
 
 
 
 (async function() {
     try{
       let wow = '' //or let result=''
       
       const resultW = await taskW()   
       wow += resultW //or result +=resultW  //-------------W
       
       const resultOW = await Promise.all([taskO(),taskW()])
       wow += resultOW[0]+=resultOW[1]  //or result += resultOW[0]+=resultOW[1] //-----W +OW
       
       const resultPostfix = await Promise.race([taskExclaim(),taskSmiley()])//-----! OR :)
       wow += resultPostfix  //or result += resultPostfix 
       
       console.log(wow) //console.log(result)
       
     }catch(err){
         console.log(err)
     }
 })();