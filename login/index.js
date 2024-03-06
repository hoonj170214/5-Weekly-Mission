/* 
- 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
- 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
- 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
- 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
- 이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.
- input에 에러와 관련된 디자인은 좌측 상단의 Components 영역에 있는 디자인을 참고해 주세요.
- 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.
*/

function createErrorMessage(message) {
  message.textContent = message;
  return message;
}

function appendErrorMessage(errorContainer, message) {
  errorContainer.innerHTML = message;
}

function showEmailErrorMessage(emailErrorMessage) {
  const emailInput = document.querySelector('input[type="email"]');

  if (emailInput.value === '') {
    appendErrorMessage(emailErrorMessage, '이메일을 입력해주세요');
  } else if (emailInput.value.indexOf('@') === -1) {
    appendErrorMessage(emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
  } else {
    appendErrorMessage(emailErrorMessage, '');
  }
}

function showPasswordErrorMessage(emailErrorMessage, passwordErrorMessage) {
  const passwordInput = document.querySelector('input[type="password"]');

  if (passwordInput.value === '') {
    appendErrorMessage(passwordErrorMessage, '비밀번호를 입력해주세요');
  } else {
    appendErrorMessage(passwordErrorMessage, '');
  }
}

function validateForm() {
  const emailErrorContainer = document.querySelector(
    '.sign-input--error-container'
  );
  const passwordErrorContainer = document.querySelector(
    '.sign-input--error-container:nth-child(2)'
  );
  showErrorMessage(emailErrorContainer, passwordErrorContainer);
}

const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

emailInput.addEventListener('focusout', validateForm);
passwordInput.addEventListener('focusout', validateForm);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
});
