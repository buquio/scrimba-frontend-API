async function getPosts() {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsPromise.json();
    let html = "";
    
    posts.forEach( post => {
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
}

getPosts();