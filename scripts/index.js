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
//Ползунок - слайдер
$(".slider").slider({
	animate: "slow",
	range: "min",
	value: 75,
	slide: function (event, ui) {
		$(".polzunok__result").text(ui.value);
	}
});
$(".polzunok__result").text($(".slider").slider("value"));

//=======================================================================================>

//$("#select :selected").val();
//$("#select :selected").text();




$("#select :selected").val();
$("#select :selected").text();

$(".is-active").hide();

let select = function () {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');

	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	});

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	function selectChoose() {
		let text = this.innerText,
			select = this.closest('.select'),
			currentText = select.querySelector('.select__current');
		currentText.innerText = text;
		select.classList.remove('is-active');

	}

};

select();

document.getElementById("selectoro").addEventListener("click", function () {
	let element = document.querySelector('#selectoro');
	if (element.classList.contains("chun")) {
		element.classList.remove("chun");
	}
	if (!element.classList.contains("chun")) {
		element.classList.add("chun");
	} else {
		element.classList.remove("chun");
	}
});
