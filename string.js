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

// Question 3
function runLengthEncode(str) {
    if (str.length === 0) return "";

    let result = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + count;
            count = 1;
        }
    }

    return result;
}
console.log(runLengthEncode("aaabbc"));

// Question 4
let Str ="swiss";
let ans="";
for (let i=0;i<Str.length;i++){
    let count=0;
    for(let j=0;j<Str.length;j++){
        if(Str[i]===Str[j]) count++;
    }
    if(count === 1){
        ans = Str[i];
        break;
    }

}
console.log(ans);
