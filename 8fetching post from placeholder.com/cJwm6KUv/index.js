
// 8fetching post from placeholder.com

async function getPosts() {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsPromise.json();
    // or 
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await response.json();
    
    console.log(posts);
}

getPosts();

///////////convert to arrow function
const getPosts = async () => {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await postsPromise.json()
    // or 
    posts.forEach(post => {
    console.log(post.title)
    });
}
getPosts();

// 9fetch post from placeholder + forEach
async function getPosts() {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsPromise.json();
    let html = "";
    
    posts.forEach( post => {  //same as return posts
        const title = post.title; //same as return posts-destructure
        const body = post.body;
        html += `    
            <div class='post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>
        `;     //same as single postTemplate function
    });
    document.body.innerHTML = html; // displayPosts function
}

getPosts();

// or returns all the posts one by one WELDONE
async function getPosts() {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsPromise.json();
    return posts //destructure
}
    
        function postTemplate(post){
           return `<div class='post'>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div> `
        };
    
    function displayPosts(posts) {
        document.body.innerHTML = `<div class="my-posts">
            ${posts.map(post => postTemplate(post)).join('')}
        </div>`
    }
    
getPosts()
.then(displayPosts)

// 11using promise.ok to catch errors
//NOTE postsPromise.ok -checks only for url-fetch errors

//TASK: fetch posts & render only 5 using posts.slice & also catch error

async function getPosts() {
    const postsPromise = await fetch("https://jsonplaceholder.typicode.com/pots" );// error here
    
    if(postsPromise.ok) {
        const posts = await postsPromise.json();
        let html = "";

        posts.slice(0, 5).forEach((post) => { 
            const title = post.title;
            const body = post.body;
            html += `
            <div class='post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>
            `;
        });
        document.body.innerHTML = html;
    } else {
        console.error(`Error: ${postsPromise.status}`) //Error:404
    }
}

getPosts();

 
// using promise.ok + try/catch to catch errors
async function getPosts() {
    const postsPromise = await fetch("https://jsonplaceholder.typicode.com/posts" );
    
    if(postsPromise.ok) {                       //checks only for fetch errors     
        try{                                    //reports any other error e.g typographic error
        const posts = await postsPromise.json();
        let html = "";

        posts.slice(0, 5).forEach((post) => { 
            const title = postx.title;    //error here
            const body = post.body;
            html += `
            <div class='post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>
            `;
        });
        document.body.innerHTML = html;
    }catch(error) { console.log(error)}  //try- we pass the error as a parameter & console.log the error

    } else {console.error(`Error: ${postsPromise.status}`) // postsPromise.ok
    }
}


getPosts();

//1 .then/.catch -.catah receives the error inside itself and perforn a fxn on it & console.error the err
// .catch(err => {
    // console.error(err)}); 

// 2.promise.ok /else
// const uploadPromise = await fetch('https://httpbin.org/post', options);
// if(postsPromise.ok) { 
    // const uploadResp = await uploadPromise.json(); 
// } else {
    // console.error(`Error: ${postsPromise.status}`)

//3.try/catch -catch is a fxn, it takes error as a parameter & console.log the error
    //try{

    // }catch(error) { console.log(error)}  

 
// BEER app
async function getBeers() {
    const beerPromise = await fetch("https://api.punkapi.com/v2/beers");
    const beers = await beerPromise.json();
    
    // render data
    const beersDiv = document.createElement('div');
    let beerHtml = "";
    
    beers.forEach(beer => {
       beerHtml += `
        <h3>${beer.name}</h3>
       `; 
    });
    
    beersDiv.innerHTML = beerHtml;
    document.body.appendChild(beersDiv)
    // OR 
    document.body.innerHTML = beerHtml;
}

getBeers();


//////////////////////
// Use Fetch with this URL, https://jsonplaceholder.typicode.com/posts/1, to get a single blog post and
//  render the blog title and body to the page.

async function getPost(){
    const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await postPromise.json();
    
    console.log(post);
    
    const html = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
    
    document.body.innerHTML = html;
}

getPost();


//////////////fetch 2 endpoint using Promise.all
async function getPost() {
    const [postPromise, userPromise] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ]);
    
    const posts = await postPromise.json();
    const users = await userPromise.json();
    
    console.log(users[0]);

    const html = `
		<h3>${posts[0].title}</h3>
        <h5>${users.filter(user => user.id === posts[0].userId)[0].name}</h5>
		<p>${posts[0].body}</p>
	`;

    document.body.innerHTML = html;
}

getPost();


////////////
// Below the authors/user name, add a new paragraph to the HTML that contains the company that the user works for.
//first find users id/authors id (from the api users-route) e.g users.filter
//use that users id to locate the users-post e.g user.id === posts[0].userId)[0]
//find the user-name with this id & post e.g posts[0].userId)[0].name
//add company name e.g posts[0].userId)[0].company.name
//you can also add the post title

async function getPost() {
    const [postPromise, userPromise] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ]);
    
    const posts = await postPromise.json();
    const users = await userPromise.json();
    
    console.log(users[0]);
    
    const html = `
		<h3>${posts[0].title}</h3>
        <h5>${users.filter(user => user.id === posts[0].userId)[0].name}</h5>
        <p>${users.filter(user => user.id === posts[0].userId)[0].company.name}</p>
		<p>${posts[0].body}</p>
	`;

    document.body.innerHTML = html;
}

getPost();

