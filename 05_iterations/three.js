// for of 

// ["" , " ", " "]
// [{},{},{}]

const arr = [1 ,2 ,3 ,4, 5 ]

for (const element of arr) {
    // console.log(element)
}


const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`)
}


// Maps

const map = new Map()
map.set ("IN", "India")
map.set ("PAK", "Pakistan")
map.set ("CN", "Canada")
map.set ("IN", "India")        // Map(3) { 'IN' => 'India', 'PAK' => 'Pakistan', 'CN' => 'Canada' }
                              // india is printed inly once. map is known for its unique value
// console.log(map)

// for (const key of map) {
//     console.log(key)
// }  

// [ 'IN', 'India' ]
//[ 'PAK', 'Pakistan' ]
//[ 'CN', 'Canada' ]

for (const [key,value] of map) {
    console.log(key, ":-" , value)
}

// output:
// IN :- India
// PAK :- Pakistan
// CN :- Canada
