//Example1: print 1, 2, 3 after 1 second
let ms = 3000
let i = 0;
function sleep(ms, i){
    return new Promise(function(resolve){
        setTimeout(resolve(++i), ms)
    })
}   
sleep(ms, i)
    .then(function(i){
        console.log(i)
        return sleep(ms, i)
    })
    .then(function(i){
        console.log(i)
        return sleep(ms, i)
    })
    .then(function(i){
        console.log(i)
        return sleep(ms, i)
    })

//Example2: print comment of user on screen
let users = [
    {
        id: 1,
        user_name: 'Minh Hieu',
    },
    {
        id: 2,
        user_name: 'Minh Trong',
    },
    {
        id: 3,
        user_name: 'Minh Dam',
    }
]
let comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son ra video di'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi'
    },
    {
        id: 3,
        user_id: 3,
        content: 'Test getComment',
    }
]
let getComments = (comments) =>
    new Promise((resolve, reject) => {
        setTimeout(resolve(comments), 1000)
    })
let getUsers = (users_id) => 
    new Promise((resolve, reject) => {
        let userOfComment = users.filter((user) => 
            users_id.includes(user.id)
        )
        setTimeout(resolve(userOfComment), 1000)
    })
let render = (data) => {
    let ul = document.querySelector('ul')
    let html = data.comments.reduce((result, comment) => {
        let user = data.users.find((userOfComment) => {
            return userOfComment.id === comment.user_id
        })
        return result.concat(`<li>${user.user_name}: ${comment.content}</li>`)
    }, '')
    ul.innerHTML = html
}


getComments(comments)
    .then((comments) => {
        let users_id = comments.map((comment) => comment.user_id)
        return getUsers(users_id)
    })
    .then((userOfComment) => {
        return {
            users: userOfComment,
            comments: comments
        }
    })
    .then((data) => {
        console.log(data)
        render(data)
    })
    .catch((error) => console.log(error))
