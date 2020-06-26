//alert('Hello World')

//Assignment Operator
var a=15
a+=3//a=a+3
document.write(a+'</br>')


var  a=15
a-=5//a=a-5
document.write(a+'</br>')


var a=15
a *=5//a=a*5
document.write(a+'</br>')


var a=15
a/=3//a=a/3
document.write(a+'</br>')


var a=15
a%=4//a=a%4
document.write(a+'</br>')


//Javascript Comparisom Operators

var a=3
var b=3
document.write((a == b)+'</br>')

var a=3
var b=2
document.write((a == b)+'</br>')

var a=3
var b=3
document.write((a === b)+'</br>')

var a=3
var b='3'
document.write((a === b)+'</br>')

var a=3
var b=3
document.write((a!=b)+'</br>')

var a=3
var b='2'
document.write((a!==b)+'</br>')

var a=10
var b=3
document.write((a<b)+'</br>')

var a=13
var b=3
document.write((a>b)+'</br>')

var a=13
var b=6
document.write((a<=b)+'</br>')

var a=23
var b=13
document.write((a>=b)+'</br>')


//Js Condition

var a=50

if('a>30'){
    document.write('a is greater than 30'+'</br>')
}

var a=50

if('a<30'){
    document.write('a is smallest than 30'+'</br>')
}


var a=200

if(a>400){
    document.write('a is greater than 400'+'</br>')
}else{
    document.write('a is Smaller than 400'+'</br>')
}

var a=100

if(a > 100){
    document.write('a is greater than 100')
}

else if(a > 100){
    document.write('a is greater than 100')
}

else{
    document.write('a is epual to 100'+'</br>')
}

//Logical Operator

var a=40
var b=30

if('a==40 && b==30'){
    document.write("a equal to 40 and b equal to 30"+'</br>')
}


var a=40
var b=30

if('a==40 || b==30'){
    document.write("a equal to 40 or b equal to 30"+'</br>')
}


var a=40
var b=30

if('a!=40'){
    document.write("a not equal to 40 "+'</br>')
}


var n=20
var Result = n % 2==0 ? 'Even' : 'odd'
document.write(Result+'</br>')


var n=25
var Result = n % 2==0 ? 'Even' : 'odd'
document.write(Result+'</br>')


//Loop

for(var i=0; i<=10; i++){
    document.write(i+'</br>')
}

//While

var a=2

while(a<=15){
    document.write(a + '</br>')
    a++
}

//Do While

var a=1
do{
    document.write(a +  '</br>')
    a++
}
while(a<=12)



//for(var i=1; i<=10; i++){
    //document.write('<div class="section">')
   // for(var j=1;j<=10; j++){
        //var Result=i*j
        //document.write( i+'x'+j +'=' +Result +'</br>')
   // }
    //document.write('</div>')
//}


//Function

 function sum(a,b) {
    return(a+b)
}
sum(20,30)-10
document.write(sum(20,30)-10)

function sum(a,b) {
    return(a-b)
}
sum(60,30)-10
document.write(sum(60,30)-10 +'</br>')



var num =80

if(num >= 80 && num <= 100){
    document.write('A+'+'</br>')
}


var num =71

if(num >= 71 && num <= 79){
    document.write('A'+'</br>')
}


var num =61

if(num >= 61 && num <= 69){
    document.write('A-'+'</br>')
}


var num =51

if(num >= 51 && num <= 59){
    document.write('B'+'</br>')
}


var num =41

if(num >= 41 && num <= 49){
    document.write('C'+'</br>')
}


var num =33

if(num >= 33 && num <= 40){
    document.write('D'+'</br>')
}


var num =0

if(num >= 0 && num <= 32){
    document.write('F'+'</br>')
}