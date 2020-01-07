const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click',() => {

        nav.classList.toggle('nav-active');




        navLinks.forEach((link,index) => {

            if(link.style.animation){

                link.style.animation = '';

            } else {

                    link.style.animation= 'navLinkFade 2s ease forwards ${ index/7+2 }s';
                }

    });


    burger.classList.toggle('toggle');



    });



};

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


$(document).ready(function () {
$('nav a').on('click', function (e) {
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body')
       .animate({
         scrollTop: $(hash).offset().top
       },600);
   }
});
});


jQuery(document).ready(function($) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {

               $(".nav").addClass("navscroll");
                // $(".nav").addClass("nav-linksscrolled");
               }
            else{
              
              $(".nav").addClass("cng");
              // $(".nav").removeClass("nav-linksscrolled");
              // $(".nav").addClass("nav-links");
            }
            });
            });
// function checkWindowSize() {
//
//    if ( $(window).width() > 900px ) {
//        $('.nav').addClass('large');
//    }
//    else {
//        $('content').removeClass('large');
//    }
//
// }
//
// $(window).resize(checkWindowSize);

navSlide();
