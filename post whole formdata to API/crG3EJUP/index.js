
// POSTING THE WHOLE FORM DATA INSIDE HTML TO https://httpbin.org/post
const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    //call the named function here(optional)

//you can put all the below in a named asyncfunction(optional) & call it above
    const formData = new FormData(this); //1.prepare a place to put the new set formdata

    const options = {  //2. state the method & content-body needed to perform the sending operation
        method: 'POST', //this is the format needed by the API
        body: formData
    };
    
    // post the formdata in the options to https://httpbin.org/post  Then console log the JSON response. 
    fetch('https://httpbin.org/post', options) //3. specify the address & option where the data will be sent to
        .then(resp => resp.json())
        .then(json => {
            console.log(json.form) // this shows the data  sent/posted to the url in the console.
            console.log(formData) // this logs properties of formData-class constructor not new formData
        }) 
        .catch(err => { 
    console.error(err)});
        
});


