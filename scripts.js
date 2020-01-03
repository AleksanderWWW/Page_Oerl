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
