

// speak("Hilda","morning");

// const answer = function (ques){
//     console.log(`whatg is ${ques}`)
// }



// function speak(name,time){
//     console.log(`Hello ${name} ${time}`)
// }

//function expression
// const calcArea = function(radius){
//         let area = 3.14 * radius**2
//         return area;
// };

// const a = calcArea(5)
// console.log(a)

//Arrow Functions

// const greet = ()=> "Hello, world"

// let cars = ["volvo","Audi","Mercedes","BMW", "5"]

// cars.forEach((person, index)=>{
//     console.log(index, person)
// })
let user = {
    name: "luigi",
    age: 30,
    email: "g@gmail",
    blogs:["mine","hghgg"],
    login(){
        console.log("user logged in")
    },
    logout(){
        console.log("user logged out")
    },
    logBlogs(){
        this.blogs.forEach(blog => {
            console.log(blog)
        })
    }
}
// console.log(user)
// console.log(user.name)
// user.login()
// user.logout()
// console.log(this)\
user.logBlogs()