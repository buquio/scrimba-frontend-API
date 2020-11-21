async function getPosts() {
    const postsPromise = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    
    if(postsPromise.ok) {
        const posts = await postsPromise.json();
        let html = "";

        posts.slice(0, 5).forEach((post) => { 
            const title = postx.title;
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
    else {
        console.error(`Error: ${postsPromise.status}`)
    }
}

getPosts();


// xxxxxxxxxxxxx try ...catch explained by Kolade

// async function getPosts() {
//     const postsPromise = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//     );
    
//     if(postsPromise.ok) {
//         try{
//         const posts = await postsPromise.json();
//         let html = "";

//         posts.slice(0, 5).forEach((post) => { 
//             const title = postx.title;
//             const body = post.body;
//             html += `
//             <div class='post'>
//                 <h3>${title}</h3>
//                 <p>${body}</p>
//             </div>
//             `;
//         });

//         document.body.innerHTML = html;
//     }
//     catch(error) {
//         console.log(error)
//     }
//     } 
//     else {
//         console.error(`Error: ${postsPromise.status}`)
//     }
// }

// getPosts();







