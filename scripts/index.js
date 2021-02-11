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

//Селект
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


//=======================================================================================>

//Меню бургер
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__navigation').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__link').click(function (event) {
		$('.header__burger,.header__navigation').removeClass('active');
		$('body').removeClass('lock');
	});

});

//=======================================================================================>

//Отправка формы на почту + валидация инпутов

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	const buttonForm = document.querySelector('.button__form');
	buttonForm.addEventListener('click', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');

			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});