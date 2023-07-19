fetch("https://api.github.com/users/sreyaraya")
.then((response)=>{
   return response.json()
})
.then((data)=>{
    console.log(data)
})