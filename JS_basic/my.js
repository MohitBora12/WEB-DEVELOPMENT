
// function rectange(l,b){

//     let rec = {
//         length:l,
//         breadth:b,

//         show(){

//             console.log("Welcome to Mohit's Website");
//         }
//     };
//     return rec;
// }

// let store = rectange(19,20);

let student = [
    {uid:5364, name:'Mohit Bora'},
    {uid:5466, name:'Sukhpreet Singh'}
]

// let person = student.find(function(person){
//     return person.name=='Sukhpreet Singh';
// })

let hold = student.find(person => person.name=='Mohit Bora');
console.log(hold);


