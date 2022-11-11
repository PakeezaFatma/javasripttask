// //inheriatance

// class User
// {
//     constructor(username,email,password)
//     {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     static countuser()
//     {
//         console.log('There are 50 users');
//     }
//     register()
//     {
//         console.log(this.username+`is now registered`);
//     }
// }
// //  let bob = new user ('bob','bob@gmail.com','12345');
// //  bob.register();
// User.countuser();

//  class Member extends User{
//     constructor(username,email,password,memberpackage)
//     {
//         super(username,email,password);
//         this.package = memberpackage;
//         let todaysDate =  new Date();
//         const membershipactivetillyear = todaysDate.getFullYear();
//         const membershipactivetillMonth = todaysDate.getMonth();
//         const membershipactivetillDay = todaysDate.getDay();
//         this.membershipactivetilldate = new Date(
//             membershipactivetillyear,
//             membershipactivetillMonth + 1,
//             membershipactivetillDay
//         );

//     }
//     renewMembership(){
//         const membershipactivetillyear = this.membershipactivetilldate.getFullYear();
//         const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
//         const membershipactivetillDay = this.membershipactivetilldate.getDay();
//         if(this.package === "Standard Package"){
//         this.membershipactivetilldate = new Date(
//             membershipactivetillyear,
//             membershipactivetillMonth + 1,
//             membershipactivetillDay
//         );
//         }else if(this.package === "Yearly Package") {
//             this.membershipactivetilldate = new Date(
//                 membershipactivetillyear + 1 ,
//                 membershipactivetillMonth,
//                 membershipactivetillDay
//             );
//         }
//     }
//     susbcriptionActiveTill(){
//         console.log(this.username + "is subscribed to " + this.package +"uptill" + this.membershipactivetilldate);
//     }
//     getPackage()
//     {
//         console.log(this.username +'is subscribed the'+ this.package + 'package');
//     }
//  } 
//  let mike = new Member('mike','mike@123.com',1234,'standard');
//   mike.getPackage(); 
//   mike.register();
//   mike.renewMembership();
//   mike.susbcriptionActiveTill();
//   const yash = new Member("yash","yash@123.com",1243,"YearlyPackage")
//   yash.getPackage();


//   //date
// //   var myPastDate = new Date(1545,11,2,10,30,15);
// //   var myFutureDate = new Date(2515,0,31,10,30,15);
// //   console.log(myPastDate);
// //   console.log(myFutureDate);
// // var myBirthday = new Date(1985,0,15,11,15,25);

// // console.log(myBirthday.getMonth());

// // console.log(myBirthday.getFullYear());
// // console.log(myBirthday.getDate());
// // console.log(myBirthday.getDay());
// // console.log(myBirthday.getHours());
// // console.log(myBirthday.getTime());

//multipe element DOM
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElemntsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// ul.remove();
// ul.lastElementChild.remove();


const ul = document.querySelector('.items');
ul.firstElementChild.innerHTML = '<h1>Hello<h1>';
const a = document.querySelector('.item1');
a.style.color = 'green';

// ul.children[1].innerHTML = '<h3>Brad</h3>';
// const b = document.querySelector('.item2');
// b.style.color = 'Yellow';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// function fun(){
//     let counter = 0;
//     return function(){
//         if(counter < 1)
//         {
//             console.log("Hi You called me");
//             counter++;
//         }
//         else{
//             console.log("mai ek bar call ho chuka hu");
//         }
//     }
// }
//  const myFunc = fun();
//  myFunc();
//  myFunc();
