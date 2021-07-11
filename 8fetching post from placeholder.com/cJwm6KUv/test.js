
async function getPosts() {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsPromise.json();
    return posts
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