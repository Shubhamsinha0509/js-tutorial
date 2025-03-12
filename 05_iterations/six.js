const coding = ["java","ruby","cpp","js","python"]

// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = myNums.filter((num)=> num > 4)
// console.log(newNums)       // [ 5, 6, 7, 8, 9 ]


const books = [{
    title : "Book one", genre : "fiction" , publish : 1981, edition : 2004},

   { title : "Book two", genre : "fiction" , publish : 1981, edition : 2002},
   { title : "Book three", genre : "History" , publish : 1956, edition : 2008},
    {title : "Book four", genre : "Science" , publish : 1971, edition : 2007},
  {  title : "Book five", genre : "History" , publish : 1991, edition : 2008},
    {title : "Book six", genre : "fiction" , publish : 1961, edition : 2003}

]

const userBooks = books.filter((bk)=> bk.genre === "History")
console.log(userBooks)