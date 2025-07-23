let sell=(string)=>{ 
    let i=0;
    while(i<string.length)
    {
       if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u")
       {
           i++;
           
       }
    }
    console.log("total vowels are",i);
}
sell("ishan");
let str="ishan";
//methods are functions which are associated with an object or data structure.
console.log(str.toUpperCase);//to uppercase ek method  hai ,method is also a function lekin ye kisi object ya datastructure ke sath hota hai.

//js ke andar function ke andar ek function pass kr skte parameter ki jgh ushi ko callback function bolte hai,,
//callback function ko hum kisi bhi function ke andar pass karte hai, callback function ko hum as a parameter pass karte hai.
//for each ek loop hai array ke liye jo ek function ko value pass krta hai array ki sab values 
let arr=[1,2,3,4,5,6,7,8,9,10];
arr.forEach( function myfunction(value){
    console.log(value);
}
);
let city=["delhi","mumbai","banglore","chennai"]
city.forEach( (value,i) =>{  // do bracket loop ke uske andar hi apna function banao
    console.log(value,i);
});
city.forEach( function myfunction(value,i) {
    console.log(value,i);
}); //only for arrays for each is used not for string
//higher order function is a function which takes another function as an argument/parameter or returns a function as a result.
//ye dusre function ko as a parameter lete hai ya dusre function ko return karte hai
let numbers=[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function square(value){
    console.log(value*value);

});
let calculate=(value)=>{
    console.log(value*value);
}
numbers.forEach(calculate);//ham ese bhi callback functions ko likhte hai apan
//event mtlb koi bhi action jo user karta hai jaise ki click karna, mouse move karna, keyboard press karna, etc.
//change in state of an object is called event
//event handling mtlb ham jb deal krte in events ke sath jese mouse ko click karna button click karna keyboard press karna
//mouse event mtlb mouse ke sath jo bhi action hota hai jese ki mouse move karna, mouse click karna, mouse over karna, etc.
//keyboard event mtlb keyboard ke sath jo bhi action hota hai jese ki key press karna, key up karna, key down karna, etc.
//form event mtlb form ke sath jo bhi action hota hai jese ki form submit karna, form reset karna, etc.
 //on click ek buttons ke liye event hai jisse click kre baad actions ho jese print hona redirect hona aise
 //on dblclick mtlb double click karne par changes honge AUR dikhenge
//inline event handling mtlb ham tag ke andar hi likhre aur event handling mtlb vo process button click kiye baad changes hna etc
//likhne k standard tareeka
let mybutton=document.querySelector("#mybutton"); //ye button ko select karega jo ki id mybutton hai he externall likhne ka tareeka hai
mybutton.onclick=(evt)=>{
    console.log("button clicked"); //ye button click hone par ye function chalega
    let a=78;
    a++;
    console.log(evt); //ye event object ko print karega jo ki button click hone par milega
    console.log(evt.target); //ye target ko print karega jo ki button click hone par milega kispr event perform kr rhe hai
    console.log(evt.clientx); //ye position ko print karega jo ki button click hone par milega x axis pr
    console.log(evt.clienty); //ye position ko print karega jo ki button click hone par milega y axis pr
}
//js ka likhe wala will have more priority than inline
let div=document.querySelector(div); //ye div ko select karega jo ki id mydiv hai he externall likhne ka tareeka hai
div.mouseover=()=> {
    console.log("mouse over"); //ye mouse over hone par ye function chalega
}
//event object mtlb event ke baare me information deta special type of object hota hai 
//function k andar parameter ki jgh e likhne se access hota hai
// window object mtlb browser ka window object hota hai jo ki browser ke andar hota hai
//window object ke andar sab kuch hota hai jo ki browser ke andar hota hai jese ki document, location, history, etc.
// ye ek browser ka object hai js ka nhi ye global object hai jisme bohot methods and functions hote hain
// dom mtlb document object model hota hai jo ki html document ko js ke andar represent karta hai
// dom ke andar sab kuch hota hai jo ki html document ke andar hota hai jese ki elements, attributes, etc.

// jb website lload hoti toh browser ek document object model banata jisme sb objects rhte
// html ke sb cheezo ko js me laa skte in  form of object rhte vo
//console.dir(document.body) ese acess kr skte pura
//log se html ke andar likha hua aata dir se pura aata
console.dir(document.body); //ye document ko print karega jo ki html document hai
// document likhkr jo hona lee sakteee
//chil nodes mltb ek ke andar kitne nodes h jese body ke andar text heading h2 ye vo button sb
//html ko js ke andar laane ka tareek dom
console.dir(document.body.childNodes[1]); //ye child nodes ko print karega jo ki body ke andar hai
// jb hm website dalte server pe tb toh html css change ni kr skte isliye dom kaam ata 
//dynamic changes run time ke time krne  ke  liye
//console me likho
///document.body.childNodes[1].style.color="red"; //ye child nodes ko print karega jo ki body ke andar hai
//document.div.style.color="red"; //ye div ko print karega jo ki body ke andar hai
//ese access krke change
document.body.childNodes[1].innertext="hii"; //ye child nodes ko print karega jo ki body ke andar hai
// dom manipulation matlab kese cheezo ko access kare 
//script ko body ke phle likkhe to access nhi hota
let heading=document.querySelector("h1"); //ye h1 ko select karega jo ki body ke andar hai
console.log(heading); //ye h1 ko print karega jo ki body ke andar hai
//console.dir sb pura object print kardega
document.getelementbyid("mydiv"); //ye div ko select karega jo ki id mydiv hai he externall likhne ka tareeka hai
document.getelementsbyclassname("myclass"); //ye class ko select karega jo ki class myclass hai he externall likhne ka tareeka hai
document.getelementsbytagname("h1"); //ye h1 ko select karega jo ki body ke andar hai
document.queryselector("h1"); //sb paas kr skte andar matching first ayega
document.queryselectorall("h1"); //h1 wale sb ajayenge  node list dedega isse related pura maal dega
// jb koi id nhi hoti usko print kraye to null aata 
//koi class wala kraye toh html collection aata hai jo ki array jesa hota hai jisme bohot saare elements hote hai 

// properties
 let buttons =document.querySelector("mybutton")//
 buttons.tagname //ye tag name ko print karega jo ki button hai 
 // pehle jese body me div hai to body node div child node div ke anda img p ye sb discedents bolte 
 // sibling div aur script dono sibling h ek hi parent ke bacche hai
 // childnode property rhti firstchild lastchild 
 //node ke main type text aur element kbi kbi text bolkr return krta ham element pr focus krte hai comment node bhi hota hai
 document.querySelector("div").children// sb children dega uske andar ke
 // inner text property mtlb andar likhe wala deti child parent dono ka bhi deti
 document.querySelector("div").innertext // ye inner text ko print karega jo ki div ke andar hai sb childnoe ke bhi sirf  text ko ko dega ye
 document.queryselector("div").innerhtml // ye inner html ko print karega jo ki div ke andar hai sb dega y andar likhe wala pura html tag vag sab dega
div.innertext="hii"; // ab usko change krdiya











    

    

