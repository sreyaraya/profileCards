//https://github.com/settings/tokens/new?scopes=repo
//imports


import {Octokit} from "https://esm.sh/@octokit/rest";
const octokit = new Octokit({auth: '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'})
//register response
//test users
const response = await octokit.request('GET /users', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})


//get the response when enter
const form = document.getElementById("search")
const div = document.getElementById("tags")
//const div = document.getElementById("")

form.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    //get user
    let user = form.value;
    //console.log(user)
    form.value = ""
    getUser(user)
    document.getElementById("card").classList.remove("inactive")

    //get user info returned

    //show
  }
});
//run get usser + clear class
//clear


function getUser(name){
//console.log('calling');
    fetch(`https://api.github.com/users/${name}`)
    .then((response)=>{
       // console.log(response)
        return response.json()
    })
    .then((data)=>{
      //console.log(data)
      document.getElementById("pfp").src = data["avatar_url"]
      document.getElementById("name").innerText=data["login"]
      document.getElementById("bio").innerText=data["bio"]
      document.getElementById("followers").innerText=`${data["followers"]} Followers`
      document.getElementById("following").innerText=`${data["following"]} Following`
      document.getElementById("repos").innerText=`${data["public_repos"]} Repos`
      console.log(data["repos_url"])
     // console.log(data["repos_url"])

       fetch(`https://api.github.com/users/${data["login"]}/repos`)
       .then((repos)=>{   
          return repos.json()
        })
       .then((json2)=>{
         console.log(json2)
         for(let i = 0; true; i++){
          if(i==5) {break;}
          let b = document.createElement("div")
          b.classList.add("tags")
          b.classList.add("tag")
          b.innerText = json2[i]["name"]
          console.log(json2[i]["name"])
          div.appendChild(b)
          
         }
       })
    })
    .catch((error)=>{
      console.log("error")
    })
    //const result = await resolveAfter2Seconds();
   // console.log(result);
  // Expected output: "resolved"

}
//rest api
//async model