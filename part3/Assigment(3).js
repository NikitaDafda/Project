let str="apple";
if(str.length()==0){
    console.log("string is empty");
}else{
    console.log("string is not empty");
}

str=prompt("enter a string ");
console.log(`original string ${str}`);
console.log(`after removing spaces ${str.trim()}`);