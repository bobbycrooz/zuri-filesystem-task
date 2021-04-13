import http from 'http'
import fs from 'fs'
import fetch from 'node-fetch'

 function  getPost(){
   return  fetch('http://jsonplaceholder.typicode.com/posts').then( res => res.json() ).then( posts => JSON.stringify(posts))
}

    
    const posts = await  getPost();

    fs.writeFile('./result/posts.json', posts, () => {

        console.log('created file succesfully');

    })




