

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