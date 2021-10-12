$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
    })
    // toggle menu/navbar javascript
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
});
var v = 1;

toggleBackToTop();
$(window).scroll(function(event) {
	 //Act on the event 
	// console.log($(window).scrollTop());

	// console.log($("#portfolio").offset().top);
	if($(window).scrollTop() >= $("#banner").offset().top){
		// $("nav").addClass('fixed-top');
		// $("nav").addClass('dummy-padding');
	}else {
		// $("nav").removeClass('fixed-top');
		// $("nav").removeClass('dummy-padding');
	}
	toggleBackToTop();
});



$(".back-to-top").click(function(event) {
	/* Act on the event */
	//time = distance / v;
	var distance = $(this).offset().top;
	var time = distance / v;
	$("html, body").animate({scrollTop:0}, time);
});

function toggleBackToTop(){
	if($(window).scrollTop() == 0){
		//tắt nút back to top
		$(".back-to-top").fadeOut();
	}else {
		//hiện ra
		$(".back-to-top").fadeIn();
	}
}

$("nav ul li a, #banner a").click(function(event) {
	/* Act on the event */
	event.preventDefault(); //ngăn chặn không cho chạy đến vùng có id tương ứng vs hash.
	// var hash = $(this).attr("href");
	var hash = this.hash; //hàm của javascript.
	// alert(hash);
	var target = $(hash);
	//phần tử có id tương ứng vs hash của nút dc click.
	var top = $(target).offset().top;
	// alert(top);
	var distance = Math.abs($(this).offset().top - top);
	//distance: vùng hiện tại con trỏ chuột -  section id
	var time = distance / v;

	$("html, body").stop().animate({scrollTop: top}, time, function(){
		console.log(1);
		window.location.hash=hash;//upate hash of address
	});
	console.log(5);
});
