// async function getRecentPost(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await response.json();
//     console.log(data);
//     document.getElementById("post").innerHTML=data.body;
// }

getRecent();


// Another method using axios function
// By using axios function the data which is ffetched from the API is automatically converted to a json file.

async function getRecent(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    document.getElementById("post").innerHTML= res.data.title;
    console.log("request processed")
}