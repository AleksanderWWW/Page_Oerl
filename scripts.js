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
    console.log(this.hash)
     $('html, body')
       .animate({
         scrollTop: $(hash).offset().top
       },600);
   }
});
});

$('#dropdownMenuButton').click(function(){

    $('.dropdown-menu').removeclass('dropdown-menu');
    $('.dropdown-menu').addclass('cng');
   

})



// $('#GL').click(function(){
//   var element = document.getElementById("CorpDIV");
//   element.classList.remove("ssc_page");
//   element.classList.add("ssc_page_pop");

// });
// $('#closevideo').click(function(){
//   var element = document.getElementById("CorpDIV");
//   element.classList.remove("ssc_page_pop");
//   element.classList.add("ssc_page");

// });
var textWrapper = document.querySelector('.Excellence');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 10200,
    delay: (el, i) => 200
  });
  var textWrapper = document.querySelector('.teamspirit');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 10200,
    delay: (el, i) =>  400 * i
  });

  var textWrapper = document.querySelector('.lastcore');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.ml12 .letter',
      translateX: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 10200,
      delay: (el, i) =>  600
    });

    var textWrapper = document.querySelector('.innovation');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: false})
      .add({
        targets: '.ml12 .letter',
        translateX: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 10200,
        delay: (el, i) =>  800
      });

$('GL').click(function(){
  var element = document.getElementById("myDIV");
  element.classList.remove("ssc_page");
  element.classList.add("ssc_page_pop");

});
$('#gnr').click(function(){
  var element = document.getElementById("CorpDIV");
  element.classList.remove("ssc_page");
  element.classList.add("ssc_page_pop");

});
$('#GL').click(function(){
  var element = document.getElementById("myDIV");
  element.classList.remove("ssc_page");
  element.classList.add("ssc_page_pop");

});

$('#AR').click(function(){
  var element = document.getElementById("myDIV");
  element.classList.remove("ssc_page");
  element.classList.add("ssc_page_pop");

});

$('#AP').click(function(){
  var element = document.getElementById("myDIV");
  element.classList.remove("ssc_page");
  element.classList.add("ssc_page_pop");

});

$('#HR').click(function(){
  var element = document.getElementById("myDIV");
  element.classList.remove("ssc_page");
  element.classList.add("ssc_page_pop");

});

$('#HEADS').click(function(){
  var element = document.getElementById("myDIV");
  element.classList.remove("ssc_page");
  element.classList.add("ssc_page_pop");

});

$('#PAYROLL').click(function(){
  var element = document.getElementById("myDIV");
  element.classList.remove("ssc_page");
  element.classList.add("ssc_page_pop");

});

$('#GL').click(function(){
  var element = document.getElementById("myDIV");
  element.classList.remove("ssc_page");
  element.classList.add("ssc_page_pop");

});

$('#close').click(function(){
  var element = document.getElementById("myDIV");
  element.classList.remove("ssc_page_pop");
  element.classList.add("ssc_page");

});


$('#closecorp').click(function(){
  var element = document.getElementById("CorpDIV");
  element.classList.remove("ssc_page_pop");
  element.classList.add("ssc_page");

});
