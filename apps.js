// fetch("https://jsonplaceholder.typicode.com/todos")
//    .then((response) => response.json())
//    .then((json) => console.log(json));

async function fechData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json()
    console.log(data);
   }