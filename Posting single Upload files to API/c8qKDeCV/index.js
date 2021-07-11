// Create a variable for the form element. Then create an event listener for submit. Prevent the default behavior.
        //  Post a FormData object to https://httpbin.org/post, then console log the JSON response.

        const uploadForm = document.getElementById('uploadForm');

        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            uploadFile(this); 
        });
        
        async function uploadFile(data) {
            const formData = new FormData(data); //where input is type=file, this select just 1 file
            
            const options = {
                method: 'POST',
                body: formData
            };
            
            const uploadPromise = await fetch('https://httpbin.org/post', options);
            if(uploadPromise.ok) {
                const uploadResp = await uploadPromise.json();
                console.log(uploadResp.files);
               //or 
                console.log(uploadResp); //all property info
            } else {
                console.error(uploadPromise.status);
            }
        }