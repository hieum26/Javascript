// setTimeout, setInterval, fecth, XMLHttpRequest
// file reading, request animation frame

// promise concept
let promise = new Promise(
    //Excutor
    function(resolve, reject){
        // logic
        // Thanh cong
        //That bai
        //Khong goi resolve va cung khong goi reject => memory leak
    }
)
promise
    .then(function(value){
        console.log(value)
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log('done')
    })

//promise method
Promise.resolve('Success')
    .then(function(data){
        console.log(data)
    })
Promise.reject('Failure')
    .catch(function(error){
        console.log(error)
    })
let promise1 = new Promise(function(resolve){
    resolve([1, 2])
})
let promise2 = new Promise(function(resolve){
    resolve([3, 4])
})
Promise.all([promise1, promise2])
    .then(function(data){
        console.log([...data[0], ...data[1]])
    })
    .catch(function(error){
        console.log(error)
    })
