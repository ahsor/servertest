console.log('hello js');

// document.addEventListener('DOMContentLoaded', ()=>{ })
// 대신 defer를 사용할 것임 

 // dom
 const userid = document.querySelector('#userid');
 const userpw = document.querySelector('#userpw');
 const button = document.querySelector('button');

 // console.log( userid );
 button.addEventListener('click', login);
 function login(){
     //console.log(`hello, ${userid.value}`);
     const req = { 
         id : userid.value, 
         pw : userpw.value 
    }
    console.log( JSON.stringify(req) );

    fetch("/login", {
        method:"POST",
        headers:{
            "Content-Type" :"application/json",
        },
        body:JSON.stringify(req),
    })
 }
