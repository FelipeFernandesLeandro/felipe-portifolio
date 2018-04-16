//$(document).ready(function() {
//	if($(window).width() > 380) {
//		$(".logo").attr("src", "img/nome-destaque-250-125.jpg");
//	} else {
//		$(".logo").attr("src", "img/logo-160-128.jpg");
//	}
//});


$(document).ready(function(){
    $('.hamburgler').click(function(e){
        e.preventDefault();
        $(this).toggleClass('no-hamburgler');
	});
	$('#ano').text(new Date().getFullYear());
});

