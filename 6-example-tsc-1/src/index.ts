let url: string = "https://jsonplaceholder.typicode.com/posts"

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

async function getFetch(url: string){
    const response = await fetch(url)
    const json = await response.json()
    return json as Post[]
}

async function showFirstPost(){
    const post = await getFetch(url)
    const firtPost = post[0]
    console.log(firtPost)
}


showFirstPost()


let fectComments = fetch("https://jsonplaceholder.typicode.com/comments").then(response => response.json()).then(json => console.log(json))

