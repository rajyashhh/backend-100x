async function getRecentPost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
    document.getElementById("post").innerHTML=data.body;
}

getRecentPost();
