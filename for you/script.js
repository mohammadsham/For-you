/* =================================
   کنترل صفحات
================================= */


let currentPage = 1;


function nextPage(pageNumber){


    document
        .querySelectorAll(".page")
        .forEach(page=>{

            page.classList.remove("active");

        });



    let next =
        document.getElementById(
            "page" + pageNumber
        );


    if(next){

        next.classList.add("active");

    }



    currentPage = pageNumber;



    createHearts(20);



}







/* =================================
   قلب های متحرک
================================= */


function createHearts(amount){


    let container =
        document.getElementById(
            "hearts-container"
        );



    for(let i=0;i<amount;i++){



        let heart =
            document.createElement(
                "div"
            );



        heart.className =
            "heart";



        heart.innerHTML =
            "❤️";



        heart.style.left =
            Math.random()*100 + "%";



        heart.style.fontSize =
            (Math.random()*25+15)
            +"px";



        heart.style.animationDuration =
            (Math.random()*4+4)
            +"s";



        container.appendChild(
            heart
        );



        setTimeout(()=>{


            heart.remove();


        },8000);



    }



}




setInterval(()=>{


    createHearts(5);


},3000);









/* =================================
   دکمه نه مرحله اول
================================= */


const noBtn1 =
    document.getElementById(
        "noBtn1"
    );



const messages1 = [


    "مطمئنی؟ 🥺",


    "یه بار دیگه فکر کن ❤️",


    "شاید قلبت یه چیز دیگه میگه؟ 🌹",


    "من هنوز منتظرم 😄"


];



let msgIndex1=0;



if(noBtn1){



    noBtn1.addEventListener(
        "click",
        ()=>{


            noBtn1.style.transform =

                `translate(
                    ${Math.random()*120-60}px,
                ${Math.random()*80-40}px)`
            ;



            document
                .getElementById(
                    "message1"
                )
                .innerText =
                messages1[msgIndex1];



            msgIndex1++;



            if(
                msgIndex1>=messages1.length
            ){

                msgIndex1=0;

            }


        });


}









/* =================================
   دکمه نه مرحله پنجم
================================= */



const noBtn2 =
    document.getElementById(
        "noBtn2"
    );



if(noBtn2){



    noBtn2.addEventListener(
        "click",
        ()=>{


            noBtn2.style.transform =

                `translate(
                    ${Math.random()*150-70}px,
                ${Math.random()*100-50}px
        )`
            ;


        });



}










/* =================================
   تایمر عشق
   شروع:
   24 مرداد 1404
================================= */



// تبدیل تاریخ شمسی به میلادی:
// 24 مرداد 1404 = 15 August 2025


const loveStart =
    new Date(
        "2025-08-15T00:00:00"
    );





function updateTimer(){



    const now =
        new Date();



    let distance =
        now - loveStart;



    if(distance < 0)
        distance = 0;



    let seconds =
        Math.floor(
            distance / 1000
        );



    let days =
        Math.floor(
            seconds / 86400
        );



    seconds %=86400;



    let hours =
        Math.floor(
            seconds /3600
        );



    seconds %=3600;



    let minutes =
        Math.floor(
            seconds /60
        );



    seconds %=60;





    document
        .getElementById(
            "days"
        ).innerText =
        days;



    document
        .getElementById(
            "hours"
        ).innerText =
        hours;



    document
        .getElementById(
            "minutes"
        ).innerText =
        minutes;



    document
        .getElementById(
            "seconds"
        ).innerText =
        seconds;



}





setInterval(
    updateTimer,
    1000
);



updateTimer();
/* =================================
   متن های تایپی
================================= */


function typeWriter(
    element,
    text,
    speed = 50
){

    let index = 0;


    element.innerHTML = "";



    let timer =
        setInterval(()=>{


            element.innerHTML +=
                text.charAt(index);



            index++;



            if(index >= text.length){


                clearInterval(timer);


            }



        },speed);


}









/* =================================
   متن قول ها - مرحله ۷
================================= */


const promise =[

    'دنیا جان ❤️',

'من تمام زندگیمو با تو شریک میشم...',

'همه ی غم های تو غم های منه...',

'همه ی ناراحتیات ناراحتی منه...',

'همیشه و هرجا باهات خواهم موند...',

'هیچوقت کاری نمیکنم که ناراحتت کنم...',

'امیدوارم یه خانواده خوب بسازیم...',

'و باهم زندگی قشنگی داشته باشیم...',

'تا بچه هامون تو آینده همیشه بهمون افتخار کنن...',

'دوستت دارم تا ابد ❤️'

]
;





/* وقتی وارد مرحله ۷ شد */


let oldNextPage = nextPage;



nextPage = function(pageNumber){



    oldNextPage(pageNumber);



    if(pageNumber === 7){



        setTimeout(()=>{


            typeWriter(

                document.getElementById(
                    "promiseText"
                ),

                promise,

                45

            );


        },500);


    }






    if(pageNumber === 9){


        setTimeout(()=>{


            finalTyping();



        },500);


    }






    if(pageNumber === 10){


        startFireworks();


    }



};









/* =================================
   متن نهایی مرحله ۹
================================= */


function finalTyping(){



    const finalMessage =[

        'دنیا گیانم ❤️',

'من تمام زندگیمو با تو شریک میشم...',

    'تو قشنگ ترین اتفاق زندگی منی...',

    'کنارت آرامش دارم...',

    'همیشه تلاش میکنم لبخند روی لبت باشه...',

    'امیدوارم باهم آینده ای بسازیم که همیشه بهش افتخار کنیم...',

    'دوستت دارم تا ابد ❤️'
]
;



    typeWriter(

        document.getElementById(
            "finalText"
        ),

        finalMessage,

        40

    );



}









/* =================================
   تغییر جمله های مرحله ۴
================================= */


const quotes = [


    "بودنت قشنگ ترین اتفاق زندگی منه ❤️",


    "با تو همه چیز زیباتره ✨",


    "لبخندت دنیای منه 🌹",


    "کنارت حس آرامش دارم ❤️"


];



let quoteIndex=0;



setInterval(()=>{


    let quoteBox =
        document.getElementById(
            "quotes"
        );



    if(quoteBox){


        quoteIndex++;


        if(
            quoteIndex >= quotes.length
        ){

            quoteIndex=0;

        }



        quoteBox.style.opacity=0;



        setTimeout(()=>{


            quoteBox.innerText =
                quotes[quoteIndex];


            quoteBox.style.opacity=1;


        },500);



    }



},3000);









/* =================================
   آتش بازی پایان
================================= */


function startFireworks(){



    for(let i=0;i<80;i++){



        let fire =
            document.createElement(
                "div"
            );



        fire.innerHTML =
            [
                "❤️",
                "✨",
                "💖",
                "🌹",
                "⭐"
            ]
                [
                Math.floor(
                    Math.random()*5
                )
                ];



        fire.style.position =
            "fixed";



        fire.style.left =
            "50%";



        fire.style.top =
            "50%";



        fire.style.fontSize =
            Math.random()*30+15
            +"px";



        fire.style.zIndex =
            "999";



        let x =
            (Math.random()*600)-300;



        let y =
            (Math.random()*600)-300;



        fire.animate(

            [

                {
                    transform:
                        "translate(0,0)",
                    opacity:1
                },


                {

                    transform:
                        `translate(${x}px,${y}px)`,
            opacity:0

    }

    ],

        {

            duration:
                1500,

                    easing:
            "ease-out"

        }


    );



        document.body.appendChild(
            fire
        );



        setTimeout(()=>{

            fire.remove();


        },1500);



    }



}









/* =================================
   شروع اولیه
================================= */


createHearts(10);
updateTimer();
/* =================================
   موزیک
================================= */


const music =
    document.getElementById(
        "music"
    );


const musicBtn =
    document.getElementById(
        "musicBtn"
    );


let playing=false;



musicBtn.onclick=function(){


    if(!playing){


        music.play();


        musicBtn.innerHTML="⏸️";


        playing=true;


    }

    else{


        music.pause();


        musicBtn.innerHTML="🎵";


        playing=false;


    }



};









/* =================================
   گلبرگ رز
================================= */


function createPetal(){


    let petal =
        document.createElement(
            "div"
        );


    petal.className="petal";


    petal.innerHTML="🌹";



    petal.style.left =
        Math.random()*100+"%";



    petal.style.animationDuration =
        (Math.random()*5+5)+"s";



    petal.style.fontSize =
        (Math.random()*20+15)+"px";



    document.body.appendChild(
        petal
    );



    setTimeout(()=>{


        petal.remove();


    },10000);



}



setInterval(
    createPetal,
    700
);








/* =================================
   افکت ورود سینمایی
================================= */


document.body.onload=function(){


    setTimeout(()=>{


        createHearts(30);


    },1000);


};