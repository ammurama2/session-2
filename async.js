const posts=[
    {title:"Post one", body:"This is post one"},
    {title:"Post",body:"This is post two"}
]

function getPosts(){
    setTimeout (()=>{
    let output ="";
    posts.forEach(post,indec)=>{
        output += post.title;
        output += " ";
    }
    console.log(output);
    },1000);
}

function createPost(post){
   return new Promise(resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
        var error = false;
        if(!error){
            resolve();
        }
    },2000)
   }
    })
}

async function init(){
    await createPost({title:"Post three",body:"This ispost three"});
    getPosts();
};

getPosts();
createPost({title:"Post three",body:"This is post three"});
      
