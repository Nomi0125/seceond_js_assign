      //=================Assignment Chapter # 21-25
   //----Task.1
// var fName=prompt("Enter First Name");
// var lName=prompt("Enter Last Name");
// document.write("Hello "+(fName+" "+lName));

   // ----Task.2

// var fon=prompt("What is your favorite mobile Phone");
// document.write("<br>"+"My Favorite phone is: "+fon+"<br>"+"Length of string is: "+ fon.length+"<br>");

   // ---Task.3

// var str="Pakistan";
// var IoS=str.indexOf("n");
// document.write("String: "+str+"<br>"+"Index of \" n\" is: "+IoS+"<br>");

   // ---Task.4

// var str = "Hello world";
// var IofStr=str.lastIndexOf("l");
// document.write("String: "+str+"<br>"+"Index of "+str+" is : "+IofStr+"<br>");

   // ---Task .5

// var str = "Pakistan";
// var CofStr=str.charAt(3);
// document.write("String: "+str+"<br>"+"Character at Index 3"+" is : "+CofStr+"<br>");

   // ---Task .6

// var fName=prompt("Enter first name");
// var lName=prompt("Enter second name");
// var fulName=fName.concat(" "+lName );
// document.write("Hello "+fulName)

   // ---Task .7

// var citi="Hyderabad";
// var newCiti=citi.replace('Hyder',"Islam");
// document.write("City: "+citi+"<br>"+"After replacement: "+newCiti);

   //---Task .8

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var NewMessage=message.replace(/and/g,"&");
// document.write(message+"<br>"+NewMessage);

   //---Task .9

// var stringNbr="456";
// var nbr=Number(stringNbr);
// document.write(stringNbr+"<br>"+" Type=string"+"<br>"+nbr+"<br>"+"Type =Number");

   //---TextTrackList.10

// var word=prompt("Enter Any Word");
// var uperCase=word.toUpperCase()
// document.write("User input: "+word+"<br>"+"Upper case: "+uperCase);

   //---Text .11

// var   name ="javascript"
// var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
// document.write("User input: "+name+"<br>"+"Title Case: "+ nameCapitalized)

   //---Text .12

// var num='35.36';
// var number=num.replace(/. /g,"");
// document.write("Fiirst number: "+num+ "<BR>" +"New number: "+number);

   //---Task-13.

// var name=prompt("Enter your name");
// var letter=/^[A-Za-z]+$/
// if(!name.match(letter)){
//     document.write("Please Enter a valid number")
// }
   
   // ---Text .14

// var A = ["CAKE", "APPLE PIE", "COOKIE", "CHIPS", "PATTIES"]
// var search=prompt("order an item");
// search=search.toUpperCase();
// var searched=A.indexOf(search);
// if(searched== -1){
//     document.write("Sorry!,Item not availiable in our bakery")
// }else{
//     document.write(search+" is available at index of "+searched)}

   // ---Task.15

// var pasword=prompt("Create a password");
// var a=pasword.charAt(0);
// if(!isNaN(a) ){
//     document.write("The first character of your password must be a Letter")}
// var LetNum=/^[0-9a-zA-Z]+$/;
// if(!pasword.match(LetNum)){
//     document.write("Symbols are not allow")}
// if(pasword.length<6 ){
// document.write("Password must be atleast 6 digits")}

   // ---Task 16

// var university = "University of Karachi"
// var char=university.split("");
// for(i=0;i<university.length;i++){
// document.write(char[i]+"<br>")}

   // ---Task 17

// var input=prompt("Enter some thing");
// document.write(input.charAt(input.length-1));

   // ---Task 18

// var str="The quick brown fox jump over The lazy dog"
// document.write("TEXT: "+str+"<br>"+"There are "+str.match(/The/g).length+" occurence of the word The")

      //========================Chapter 25 - 30
   //---Task 1

//var num=+prompt("Enter a positive number");
//document.write("Entered Number: "+num+"<br>"+"Round value: "+Math.round(num)+"<br>"+"Floor value: "+Math.floor(num)+"<br>"+"Ceil value: "+Math.ceil(num))

   //---Task 2

// var num=+prompt("Enter a negative float number");
// document.write("Entered Number: "+num+"<br>"+"Round value: "+Math.round(num)+"<br>"+"Floor value: "+Math.floor(num)+"<br>"+"Ceil value: "+Math.ceil(num))

   //---Task 3

// var num=+prompt("Enter a number to check its absolute value");
// document.write("The absolute value of "+num+" is "+Math.abs(num))

   // ---Task 4

// var dice=Math.floor((Math.random()*6)+1)
// document.write(x)

   // ---Task 5
// document.write("<h3>Toss</h3>")
// var coin=Math.floor(Math.random()*2)
// if(coin===0){
// document.write("Head")}
// if(coin===1){
//     document.write("Tail")}

   // ---Task 6

// document.write("RAndom number between 1 to 100"+Math.floor((Math.random()*100)+1))

   // ---Task7

// var a =prompt("Enter your weigth in kilogram")
// var result=/\d+/g
// document.write("Your weight is: "+a.match(result)+" kilogram")

   //---Task

// var secretNumber=8
// var num=+prompt("Enter a secret number between 1 to 10");
// if(num===secretNumber){
//     alert("congratulations")
// }else{
//     alert("Try again!")
// }

      //=========================chapter 31 to 34
   // ---Task 1
// document.write(Date())

   //---Task2

// var a = new Date();
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// document.write("Current month: " months[a.getMonth()] +"<br>")

   //---Task 3

// var dat=new Date()
// var day=dat.getDay()
// var days=["Mon","Tues","Wednes","Thurs","Fri","Sat","Sun"]
// document.write(Today is: "+days[day]+"<br>")

   //---Task 4

// var date=new Date()
// var day=date.getDay()
// if(date===5 || date ===6){
//     document.write("It\'s Fun day!")
// }

   //---Task 5

// var date=new Date()
// var dateOnly=date.getDate();
// if (dateOnly<15){
//     document.write("First fifteen days of the month")
// }else{
//     document.write("Last fiffteen days of the month")}

   //---Task 6

// var d=new Date("January 23, 1970")
// var dmili=d.getTime()/(1000*60*24*30*12);
// var dminute=d.getTime()*(60*60)
// var today=new Date()
// var acu=Math.round( (1000*60*60*24*30*12) )
// document.write("Current Date: "+today+"<br>"+"Elapsed milisecond since 1, 1970 "+":"+dmili+"<br>"+"Elapsed minute since 1, 1970 "+":"+dminute)

   //---Task 7

// var d=new Date()
// var dh=d.getHours()
// console.log(dh)
// if(dh>0 && dh < 11){
//     document.write("Its AM")
// }else{
//     document.write("ITs PM") }

   //---Task 8

// alert(new Date(new Date().getFullYear(), 11, 31))

   //---Task 9

// var ramadan=new Date(new Date().getFullYear(),4,23)
// var ramadamMili=ramadan.getTime();
// var today= new Date()
// var todayMili=today.getTime();
// console.log(ramadan,today)
// var difMili=todayMili - ramadamMili
// var dif=difMili/(1000*60*60*24)
// document.write("Ramadan enden on "+ ramadan + Math.round(dif) +" days have passed since ramadan")

   //---Task 10

// var start2020=new Date(new Date().getFullYear(),0 , 0)
// var started=start2020.getTime();
// var tody = new Date().getTime();
// var diff= tody-started
// document.write(diff+" seconds has passed since bigining of 2020")

   //---Task 11 ni hwa

// var dat=new Date()

      //========================Chapter 35 to 38

   //---Task 1
//function date(){
//  new Date()
// }date()

   //---Task 2

// funtion greet(){
//     var fName=prompt("Enter first name")
//     var lName=prompt("Enter last name")
//     document.write("Hello "+fName + lName)
// }greet()

   //---Task3

//function sum(fNum,sNum){
//    document.write (fNum+sNum)
// }
// sum(fNum=+prompt("Enter first number"),sNum=+prompt("Enter Second Number"))

   //---Task 4

// function cal(num1,num2,opr){
//     if(opr== "+"){
//     var a=num1 + num2
// } else if(opr== "-"){
//     var a= num1 - num2
// } else if(opr == "*"){
//     var a = num1 * num2
// } else if(opr == "/"){
//     var a =num1 / num2
// }
// alert(a)
// }
// cal(65,42,"+")

   //---Task 5

// function square(x,y){
//     document.write("arguments are "+x+'&'+y+"and square is "+ x*x +" "+ y*y +" respectively")
// }
// square(2,5)

   //---Task 6

// function fac(){
//     var x=+prompt("Enter a number to see factorial of that number")
//     var y=1
//     if(x > 0 ){
//     for( i=0 ; i < x; i++ ){
//      y= y *(x-i)
//     }
//     document.write("Factorial of "+x+"!= "+y)}
//     else if(x<0){
//         document.write("-1")
//     }
//     else if (x==0){
//         document.write("1")}}
// fac()

   //---Task 7

// function count(){
//     var x=+prompt("Enter a starting number")
//     var y=+prompt("Enter ending number")
//     for(i=x;i<=y;i++){
//         document.write(i+" ")
//     }}
// count()

   //---Task 8

//function hypotenuse(a , b) {
//     function square(x) { return x*x; }
//     return (square(a) + square(b));
//  }
//     document.write ( hypotenuse(4,2) );

   //---Task 9
  //-- i)
// function area(x=2,y=2){
//    var a=1/2(x*y)
//    document.write(a)
// }area()

  //--ii)
// function area(x,y){
//  var a=1/2(x*y)
//  document.write(a)}
//  area(4,4)

   // ---Task 10

// function palindrome(){
//    var word=prompt("enter a word")
//    var check="";
//    for(var i=word.length-1  ; i >= 0; i--){
//        check  += word[i]
//    }
//    console.log(check)
//    if(check === word){
//       document.write(word+" is a palindrom word")
//    }else{
//       document.write(word+" is not a palindron word")
//    }
// }
// palindrome()

   //--- Task11

// function titleCase() {
//    var str=prompt("Enter a long string")
//    var splitStr = str.toLowerCase().split(' ');
//    for (var i = 0; i < splitStr.length; i++) {
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//    }
//    return splitStr.join(' ');
// }
// document.write(titleCase("I'm a little tea pot the quick brown foxs"));

   // ---Task 12

// function longestWord(string) {
//    var str = string.split(" ");
//    var longest = 0;
//    for (var i = 0; i < str.length ; i++) {
//        if (longest < str[i].length) {
//            longest = str[i];}}
//    document.write( longest);}
//    longestWord(prompt("Enter a string"))

   //---Task 13

// function count(str,word){
//    var num=0 ;
//    for(var p=0; p < str.length; p++){
//       if(str.charAt(p)== word){
//          num += 1
//       }}
//    document.write(word+" is occur "+num+" times in "+str)
// }
// count(prompt("Enter a string").toLowerCase(),prompt("Enter a letter to find in string"))

   //---Task 14

// --i)
// function Circumference(r,pi=3.14){
//    var c=2*pi*r
//    document.write("The Circumference of the circle is "+c)
// }Circumference(prompt("Enter radius of the circle"))

   //--ii)
// function area(r,pi=3.14){
//    var a= pi*(r*r)
//    document.write("area of circle is "+a)
// }area(prompt("Enter radius of circle to find area"))
