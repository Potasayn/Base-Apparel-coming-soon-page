const input = document.querySelector('.page__input-input');
const btn = document.querySelector('.page__input-btn');
const errorMsg = document.querySelector('.page__input-error');
const errorIcon = document.querySelector('.page__input-error-icon')

const validateEmail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(input.value)) {
		errorMsg.style.visibility = 'hidden';
	} else {
		errorMsg.style.visibility = 'visible';
		input.classList.add('error')
		errorIcon.style.display = 'block'
	}

	setTimeout(() => {
		errorMsg.style.visibility = 'hidden';
		input.classList.remove('error')
		errorIcon.style.display = 'none'
	}, 5000);
};

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		validateEmail();
	}
});

btn.addEventListener('click', validateEmail);
