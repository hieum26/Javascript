let postAPI = 'https://jsonplaceholder.typicode.com/posts'
fetch(postAPI)
    .then((respone) =>  respone.json())
    .then((post) => console.log(post))
//respone vs respone.json la 1 promise
//post: javascript type