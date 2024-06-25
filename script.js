var typed=new Typed("#auto",{
    strings:["am a Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});



document.getElementById("btn1").addEventListener("click",function(){
    let fileUrl="file/Javascript Interview Questions (8).pdf";
    window.open(fileUrl)
})

//NAVBAR LOGIN FORM JS
document.getElementById('login').addEventListener("click",function(){
    window.open("login.html","_blank")
})


// ABOUT PART LOCATION FETCH
// HTML
document.getElementById('page1').addEventListener("click",function(){
    window.open('https://www.w3schools.com/html/default.asp','_blank');
})
// CSS
document.getElementById('page2').addEventListener("click",function(){
    window.open('https://www.w3schools.com/css/default.asp','_blank');
})
// BOOTSTRAP
document.getElementById('page3').addEventListener("click",function(){
    window.open('https://www.w3schools.com/bootstrap/bootstrap_ver.asp','_blank');
})
//JAVASCRIPT
document.getElementById('page4').addEventListener("click",function(){
    window.open('https://www.w3schools.com/js/default.asp','_blank');
})
// SQL
document.getElementById('page5').addEventListener("click",function(){
    window.open('https://www.w3schools.com/sql/default.asp','_blank');
})
//REACT JS
document.getElementById('page6').addEventListener("click",function(){
    window.open('https://www.w3schools.com/react/default.asp','_blank');
})
//ANGULAR
document.getElementById('page7').addEventListener("click",function(){
    window.open('https://www.w3schools.com/angular/default.asp','_blank');
})
//JQUERY
document.getElementById('page8').addEventListener("click",function(){
    window.open('https://www.w3schools.com/jquery/default.asp','_blank');
})
//Node Js
document.getElementById('page9').addEventListener("click",function(){
    window.open('https://www.w3schools.com/nodejs/','_blank');
})
//PHP
document.getElementById('page10').addEventListener("click",function(){
    window.open('https://www.w3schools.com/php/default.asp','_blank');
})
//JAVA
document.getElementById('page11').addEventListener("click",function(){
    window.open('https://www.w3schools.com/java/default.asp','_blank');
})
//PYTHON
document.getElementById('page12').addEventListener("click",function(){
    window.open('https://www.w3schools.com/python/default.asp','_blank');
})
//C++
document.getElementById('page13').addEventListener("click",function(){
    window.open('https://www.w3schools.com/cpp/default.asp','_blank');
})
//MySQL
document.getElementById('page14').addEventListener("click",function(){
    window.open('https://www.w3schools.com/sql/default.asp','_blank');
})
//PostgreSQL
document.getElementById('page15').addEventListener("click",function(){
    window.open('https://www.w3schools.com/postgresql/index.php','_blank');
})
//MongoDB
document.getElementById('page16').addEventListener("click",function(){
    window.open('https://www.w3schools.com/mongodb/index.php','_blank');
})


//CONTACT PART JS
//FACEBOOK
document.getElementById('page17').addEventListener("click",function(){
    window.open('https://www.facebook.com/profile.php?id=61550807416164','_blank');
})
//TWITTER
document.getElementById('page18').addEventListener("click",function(){
    window.open('https://twitter.com/home','_blank');
})
//Instagram
document.getElementById('page19').addEventListener("click",function(){
    window.open('https://www.instagram.com/babu.0229/','_blank');
})
//Linkedin
document.getElementById('page20').addEventListener("click",function(){
    window.open('https://www.linkedin.com/in/panchanan-pal-11b76a279/','_blank');
})
//Youtube
document.getElementById('page21').addEventListener("click",function(){
    window.open('https://www.youtube.com/channel/UC6D-tF4rAmoqZkVKO5sHrjg','_blank');
}) 

//LOADING ANIMATION
// document.addEventListener("Load", function() {
   
    setTimeout(function() {
        
        document.querySelector(".loader").style.display = 'none';
        
        document.querySelector(".content33").style.display = 'block';
    },3000); 


    window.onscroll=function(){
        if(window.scrollY>200){
            document.getElementById("btnn").style.display="block";
        }
        else{
            document.getElementById("btnn").style.display="none";
        }
    }
    document.getElementById("btnn").onclick=function(){
        window.scrollTo({top:0, behavior:"smooth"});
    }



    ///Sending Email 
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});