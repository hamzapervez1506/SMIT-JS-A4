//Question 1
document.write("Question 1"+"<br>")

let firstname=prompt("First Name");
let lastname=prompt("Last name");
let fullname=firstname+lastname

document.write(fullname+"<br>")

//Question 2
document.write("Question 2"+"<br>")
let phone=prompt("Enter fav phone")
let len=phone.length

document.write("Phone= "+phone+"<br>")
document.write("Length= "+len+"<br>")

//Question 3
document.write("Question 3"+"<br>")

let str="Pakistani"
let index=str.indexOf("n");

document.write(index+"<br>")

//Question 4
document.write("Question 4"+"<br>")

let greet="Hello World"
let Lindex=greet.lastIndexOf("l");

document.write(Lindex+"<br>")

//Question 5
document.write("Question 5"+"<br>")

let cha=str.charAt(5);

document.write(cha+"<br>")

//Question 6
document.write("Question 6"+"<br>")
let cfullname=firstname.concat(lastname)

document.write(cfullname+"<br>")

//Question 7
document.write("Question 7"+"<br>")
let orgCity= "Hyderabad"
let chCity=orgCity.replace("Hyder", "Islam")
document.write("City: "+orgCity+"<br>")
document.write("After Replacement: "+chCity+"<br>")

//Question 8
document.write("Question 8"+"<br>")

let orgStr="Ali and Sami are best friends. They play cricket and football together"
let chStr=orgStr.split("and").join("&")
document.write("Original String: "+orgStr+"<br>")
document.write("After Replacement: "+chStr+"<br>")

//Question 9
document.write("Question 9"+"<br>")
let strNum="472"
let convnum=+(strNum)
document.write("Value: "+strNum+"<br>")
document.write("Type: "+ typeof strNum+"<br>")
document.write("Value: "+convnum+"<br>")
document.write("Type: "+ typeof convnum+"<br>")

//Question 10
document.write("Question 10"+"<br>")

let userInput=prompt("User Input small characters")
let capLet=userInput.toUpperCase()
document.write(capLet+"<br>")

//Question 11
document.write("Question 11"+"<br>")
let Fir= userInput.charAt(0).toUpperCase()+userInput.slice(1)
document.write(Fir+"<br>")

//Question 12
document.write("Question 12"+"<br>")

let pnum=35.36
let cstring=pnum.toString()
let replacedot=cstring.replace(".", "")
document.write(replacedot+"<br>")


//Question 13
document.write("Question 13"+"<br>")
let usin=prompt("Enter username");
for(i=0;i<usin.length;i++){
    if(usin[i]==String.fromCharCode(33)||usin[i]==String.fromCharCode(44)||usin[i]==String.fromCharCode(46)||usin[i]==String.fromCharCode(64)){
        alert("invalid")
}
else{
    alert("valid")
}
break;
}

//Question 14
document.write("Question 14"+"<br>")
let want=prompt("what do you want")
let bakeryItems=["apple","cake","cookie","patties"]
let isAvailable=false;
let conwant=want.toLowerCase()

for(i=0;i<bakeryItems.length;i++){
    if(bakeryItems[i]==conwant||bakeryItems[i]==conwant||bakeryItems[i].charAt(0).toUpperCase()+bakeryItems[i].slice(1)==conwant){
        isAvailable=true;
          break;
    }

}

if(isAvailable){
alert("available")
}
else{
    alert("not available")
}

//Question 15
document.write("Question 15"+"<br>")
let pass=prompt("Enter Password")
if(pass>='a' && pass<='z' || pass>='A' && pass<='Z' && pass==!isNaN(pass.charAt(0)) && pass>=6 && pass>='0' && pass<='9'){
    alert('valid')
}
else{
    alert('invalid')
}
//Question 16
document.write("Question 16"+"<br>")
let uni="University of Karachi"
for (i=0;i<uni.length;i++){
    document.write(uni[i]+"<br>")
}
//Question 17
document.write("Question 17"+"<br>")
let inp=prompt("Enter Input")
let lastinp=inp.charAt(inp.length-1)
document.write(lastinp)

//Question 18
document.write("Question 18"+"<br>")

let string="The quick brown fox jumps over the lazy dog";
let count=0;
let lowercased=string.toLowerCase();
let sp=lowercased.split(' ');
for (i=0;i<sp.length;i++){
    if(sp[i]==="the"){
        count++;
    }
}
document.write(count)