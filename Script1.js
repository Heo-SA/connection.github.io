// JavaScript source code
jQuery(document).ready(function ($) {

	$('a.scroll-link').click(function (e) {
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top - 20
		}, 750);
	});

}); /* 스크롤 아이콘 태그*/