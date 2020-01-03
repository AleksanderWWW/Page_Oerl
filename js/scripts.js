// Option 2 - jQuery Smooth Scrolling
$('.navbar a').on('click', function (e) {
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body')
       .animate({
         scrollTop: $(hash).offset().top
       },600);
   }
});





function activelink(){
    var current = $('.page.active')
    var x = current.attr('id')
     var str = "C"
     var per = "#"
     var xxx = str.concat(x)
     var res = per.concat(xxx)
     var elements = document.getElementsByClassName("aabout");
      for (var i = 0; i < elements.length; i++) {
       elements[i].classList.remove('bak');
            }
        $(res).addClass('bak');


};


window.onload = function() {
  activelink();
    start();
};






$('#right-arrow').click(function(){
    var currentSlide = $('.page.active');
    var nextSlide = currentSlide.next();

    currentSlide.fadeOut(300).removeClass('active');
    nextSlide.fadeIn(300).addClass('active');

    if(nextSlide.length == 0) {


        $('.page').first().fadeIn().addClass('active');

    }
    activelink();
    start();




});

$('#left-arrow').click(function(){
    var currentSlide = $('.page.active');
    var prevSlide = currentSlide.prev();

    currentSlide.fadeOut(300).removeClass('active');
    prevSlide.fadeIn(300).addClass('active');

    if(prevSlide.length == 0) {
        $('.page').last().fadeIn().addClass('active');
    }
    activelink();
    start();
});

$('.liabout a').on('click', function (e) {
   if (this.hash !== '') {
     e.preventDefault();
     var currentSlide = $('.page.active');
     const hash = this.hash;

      currentSlide.fadeOut(300).removeClass('active');
     $(hash).fadeIn(200).addClass('active')
   }


 });


 var elements = document.getElementsByClassName("liabout");
            for(var i = 0; i < elements.length; i++)
            {
                elements[i].onclick = function(){

                    activelink()
                };
            }

jQuery(document).ready(function($) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
               $("#navig").addClass("navigare");
               $(".text").addClass("textchanged");
               $(".name").addClass("namechanged");
                $(".logolink").addClass("logolinkchanged");
               }
            else{
                $("#navig").removeClass("navigare");
                $(".text").removeClass("textchanged");
                 $(".name").removeClass("namechanged");
                 $(".logolink").removeClass("logolinkchanged");
            }
            });
            });



















