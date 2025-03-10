// const tinderUser = new Object()  //singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
tinderUser.name = "sam"

// console.log(tinderUser)

const regularUser = {
    email : "user@gmail.com",
    username : {
        userFullName : {
            firstName : "shubham",
            lastname : "sinha"
        }
    }
}

console.log(regularUser.username.userFullName.firstName)  // shubham

console.log(regularUser.username.userFullName)  //{ firstName: 'shubham', lastname: 'sinha' }


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = Object.assign({},obj1,obj2)

// console.log(obj3)    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// spread operataor

const obj3 = {...obj1,...obj2}

console.log(obj3)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }






console.log(tinderUser)         // { id: '123abc', isLoggedIn: false, name: 'sam' }
console.log(Object.keys(tinderUser))   // [ 'id', 'isLoggedIn', 'name' ]
console.log(Object.values(tinderUser)) // [ '123abc', false, 'sam' ]



const course = {
    courseName : "javascript",
    price : 1000,
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

// console.log(courseInstructor)  // Hitesh

console.log(instructor)  // Hitesh

