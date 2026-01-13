//Q1
let str = "Js is the fun";

let reversed = str.split(" ").reverse().join(" ");

console.log(reversed);

//Question 2
function rotation(s1,s2){
    if(s1.length !==s2.length) return false;
    return (s1+s1).includes(s2);
}
console.log(rotation("ABCD","CDAB"));
