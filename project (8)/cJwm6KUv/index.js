async function getPosts() {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsPromise.json();
    // or 
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await response.json();
    
    console.log(posts);
}

getPosts();