

//Скрыть placeholder при клике
$(document).ready(function () {
	$('input').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
});

//=======================================================================================>

//$(function () {
//	$(".slider").slider();
//});

//$(".slider").slider({
//	animate: "slow",
//	range: "min",
//	value: 50
//});


$(".slider").slider({
	animate: "slow",
	range: "min",
	value: 75,
	slide: function (event, ui) {
		$(".polzunok__result").text(ui.value);
	}
});
$(".polzunok__result").text($(".slider").slider("value")); 