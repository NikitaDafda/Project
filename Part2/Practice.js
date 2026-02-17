//P-1(trafic light)

let color='Orange';
 if(color=='red'){
     console.log("stop");
 }
 if(color=='Orange'){
     console.log("slow");
 }
 if(color=='Green'){
     console.log("Go");
 }

 //P-2(popcorn prize)

 let size="XL";
 //size="L";

 if(size=="XL"){
    console.log("price is 250");
 }
  else if(size=="L"){
    console.log("price is 200");
 }
  else if(size=="M"){
    console.log("price is 100");
 }
  else if(size=="S"){
    console.log("price is 50");
 }
 else{
    console.log(" sorry! this size is not available");
 }

 //P-3(good string)

 let string="snake"

 if(string[0]=="a" && string.length>3){
    console.log(` ${string} is good string`);
 }
 else{
    console.log(`${string} is not good string`);
 }