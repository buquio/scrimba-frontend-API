
// POSTING THE MULTIPLE FILES FROM MY COMPUTER TO https://httpbin.org/post

//2 upload multiple input files & post to httpbin

// Create a variable for the form element. 
// Then create an event listener for submit. 
// Prevent the default behavior. 
// Post a FormData object to https://httpbin.org/post, 

const uploadForm = document.getElementById('uploadForm');
uploadForm.addEventListener('submit', function(e) {
    e.preventDefault();
    uploadFile(this);
});

async function uploadFile(data) {
    const formData = new FormData(); //e.g promise
    const files = data.querySelector('input[type="file"]').files;
    
    for (let i=0; i < files.length; i++) {
        // formData.append(`fileInput_${i}`, files[i]); //or
        formData.append(files[i]);
    }
    
    const options = {
        method: 'POST',
        body: formData
    };
    
    const uploadPromise = await fetch('https://httpbin.org/post', options);
    if(uploadPromise.ok) {
        const uploadResp = await uploadPromise.json();
        console.log(uploadResp.files);
    } else {
        console.error(uploadPromise.status);
    }
}