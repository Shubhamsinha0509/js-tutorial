const myObj = {
    js : "Javascript",
    Py : "Python",
    Cpp : "c++",
    rb : "Ruby"
}

// for (const key in myObj) {  //js
//    console.log(key)         //py
// }                           //cpp
                            //rb

for (const key in myObj) {
    console.log(`${key} is shortcut for ${myObj[key]}`)
}

// js is shortcut for Javascript
// Py is shortcut for Python
// Cpp is shortcut for c++
// rb is shortcut for Ruby