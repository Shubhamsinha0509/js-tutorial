const coding = ["js","ruby","python", "C++","java"]

coding.forEach (function (val){
    // console.log(val)
})

// coding.forEach((item)=>{
//     console.log(item)
// })

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

// js 0 [ 'js', 'ruby', 'python', 'C++', 'java' ]
// ruby 1 [ 'js', 'ruby', 'python', 'C++', 'java' ]
// python 2 [ 'js', 'ruby', 'python', 'C++', 'java' ]
// C++ 3 [ 'js', 'ruby', 'python', 'C++', 'java' ]
// java 4 [ 'js', 'ruby', 'python', 'C++', 'java' ]


const myCoding = [
    {
    languageName : "javascript",
    languageFileName : "js"
},
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
    {
        languageName : "ruby",
        languageFileName : "rb"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})

// javascript
// c++
// ruby