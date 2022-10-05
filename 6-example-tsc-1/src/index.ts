import fetch from 'node-fetch';

// Operadores ternario
let var1 = true

if(var1){
    console.log("es verdadero")
}else{
    console.log("es falso")
}

var1 ? console.log("es verdadero") : console.log("es falso")

// GET ALL  RESOURCE OF POSTS
let url: string = "https://jsonplaceholder.typicode.com/posts"

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

async function getFetch(url: string) {
    const response = await fetch(url)
    const json = await response.json()
    return json as Post[]
}

async function showFirstPost() {
    const post = await getFetch(url)
    const firtPost = post[0]
    console.log(firtPost)
}

showFirstPost()

// GET ALL  RESOURCE OF COMMENTS
async function getComments() {
    let url2: string = "https://jsonplaceholder.typicode.com/comments"
    await fetch(url2).then(response => response.json()).then(json => console.log(json))
}

getComments()

// CREATING A RESOURCE
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// UPDATING A RESOURCE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// PATCHING A RESOURCE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));


// DELETING A RESOURCE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
