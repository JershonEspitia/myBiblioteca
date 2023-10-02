// const getData = async () => {
//   let res = await (await fetch("http://127.0.0.1:5010/libros")).json();
//   console.log(res);
// };

// // getData();

// const postData = async () => {
//     let config = {
//         method: "POST",
//         headers: {"Content-Type":"application/json"},
//         body: JSON.stringify({name: "Jershon",edad: 23})
//     }
//     let res = await(await fetch("http://127.0.0.1:5010/libros", config)).json();
//     console.log(res)
// };

// postData();

// const putData = async()=>{
//     let config = {
//         method: "PUT",
//         headers: {"Content-Type":"application/json"},
//         body: JSON.stringify({name: "Orlando",edad: 20})
//     }
//     let res = await(await fetch("http://127.0.0.1:5010/libros/2", config)).json();
//     console.log(res)
// };

// // putData();

// const delData = async()=>{
//     let config = {
//         method: "DELETE"
//     }
//     let res = await(await fetch("http://127.0.0.1:5010/libros/2", config)).json();
//     console.log(res)
// }

// // delData();