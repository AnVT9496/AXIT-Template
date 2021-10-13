var v = 1; //set velocity

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


//active navbar
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});


//tab transition
// Hàm active tab nào đó
function activeTab(obj)
{
    // Xóa class active tất cả các tab
    $('.tab-wrapper ul li').removeClass('active');
 
    // Thêm class active vòa tab đang click
    $(obj).addClass('active');
 
    // Lấy href của tab để show content tương ứng
    var id = $(obj).find('a').attr('href');
 
    // Ẩn hết nội dung các tab đang hiển thị
    $('.tab-item').hide();
 
    // Hiển thị nội dung của tab hiện tại
    $(id) .show();
}
// Sự kiện click đổi tab
$('.tab li').click(function(){
    activeTab(this);
    return false;
});
// Active tab đầu tiên khi trang web được chạy
activeTab($('.tab li:first-child'));

$(document).ready(function()
{
    // Hàm active tab nào đó
    function activeTab(obj)
    {
        // Xóa class active tất cả các tab
        $('.tab-wrapper ul li').removeClass('active');
 
        // Thêm class active vòa tab đang click
        $(obj).addClass('active');
 
        // Lấy href của tab để show content tương ứng
        var id = $(obj).find('a').attr('href');
 
        // Ẩn hết nội dung các tab đang hiển thị
        $('.tab-item').hide();
 
        // Hiển thị nội dung của tab hiện tại
        $(id) .show();
    }
 
    // Sự kiện click đổi tab
    $('.tab li').click(function(){
        activeTab(this);
        return false;
    });
 
    // Active tab đầu tiên khi trang web được chạy
    activeTab($('.tab li:first-child'));
});



//disable back to top button

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


// back to top button

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


// scroll top event

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
