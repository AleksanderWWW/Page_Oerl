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

$('#dropdownMenuButton').click(function(){

    $('.dropdown-menu').removeclass('dropdown-menu');
    $('.dropdown-menu').addclass('cng');
   

})



$('#videossc').click(function(){
  var element = document.getElementById("videoplayer");
  element.classList.remove("ssc_page");
  element.classList.add("ssc_page_pop");

});
$('#closevideo').click(function(){
  var element = document.getElementById("videoplayer");
  element.classList.remove("ssc_page_pop");
  element.classList.add("ssc_page");

});














$('#ssc').click(function(){
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
