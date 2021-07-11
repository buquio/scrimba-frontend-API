
//POSTING INPUT.value TO API

// POSTING FORM-INPUT.VALUE TO EXTERNAL API $ ALSO DISPLAYING IT IN A CARD IN THE BROWSER
// on clicking submit button you want to 
// 1. collect the values inside titleinput& bodyinput
// 2. prepare a container options
// 3. send the content of the container options along with the  https address 
// 4 put the content in the approprite location i.etitle = post.title; body = post.body;
// 5. wait to collect some result/Promise back
// 6. optionally you can show the posted content in the card div i.e card-title & card-Text 
// 7. then clear up the 2 input box 
// 8. posting to https/placeholder.com+promise.ok to catch error

//////////////////
document.getElementById("fetchForm").addEventListener("submit", submitPost);

async function submitPost(e) {
    e.preventDefault();

    let title = document.getElementById("titleInput").value;
    let body = document.getElementById("bodyInput").value;

    const options = {
        method: "POST",
        body: JSON.stringify({ title: title, body: body }), //convert title& body to JSON.strigify & put it inside options-body
        headers: new Headers({
        "Content-Type": "application/json"
        })
    };

    // address of where we are sending to and what we are sending 
    const postPromise = await fetch("https://jsonplaceholder.typicode.com/posts",options);
    if(postPromise.ok) { // checks if any error when sending to  the url
        const post = await postPromise.json();
    // console.log(post);
// we putting our titleinput & bodyinput inside the post.title & post.body at the api location
        title = post.title; //send to API
        body = post.body;
        console.log(`title:${title} body: ${body}`) //TO see what input.value is been sent, SEE CONSOLE
    } else {
        title = 'Error';
        body = `Status: ${postPromise.status}`;
        console.error(`error:${postPromise.status}`)

    }
    //if it delivers then .....see what is delivered
    // TO see what is been sent, show it in a card div in the browser OR SEE CONSOLE
    document.querySelector(".card-title").innerText = title; //send to browser
    document.querySelector(".card-text").innerText = body;
    // document.getElementsByClassName('card-title').innerText = title 
    // document.getElementsByClassName('card-text').innerText = body    


    document.getElementById("fetchForm").reset(); //set form back to empty // empty all the various input 
}
// no need to call the function becos the submit button is doing that already



