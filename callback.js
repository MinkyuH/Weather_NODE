var getUser = (id, callback) =>{
    var user ={
        id: id,
        name: "Steven"
    }
    setTimeout(()=>{
        callback(user)
    }, 3000)
    callback(user)
}

getUser(31, (user) =>{
    console.log(user);
})