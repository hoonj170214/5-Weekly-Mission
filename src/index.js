/* 
- 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
- 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.

- 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.

- 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.

- 이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.

- input에 에러와 관련된 디자인은 좌측 상단의 Components 영역에 있는 디자인을 참고해 주세요.

- 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.

*/

const input = document.querySelector('.sign-input');
console.log(input);

function validateForm() {
  // 아이디 입력 필드와 에러 메시지 요소 가져오기
  var usernameInput = document.getElementById('usernameInput');
  var usernameError = document.getElementById('usernameError');

  // 입력 값 확인
  if (usernameInput.value.trim() === '') {
    // 값이 없으면 에러 메시지 표시
    usernameError.textContent = '아이디를 입력하세요.';
  } else {
    // 값이 있으면 에러 메시지 지우기
    usernameError.textContent = '';
    // 여기에 추가적인 로직 또는 서버에 데이터 전송 등을 할 수 있습니다.
  }
}

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  validateInputValue() {
    if (this.email === 'test@codeit.com' && this.password === 'codeit101') {
      // /forder 페이지로 이동
      return true;
    } else this.checkErrorType();
  }
}

/*
  checkErrorType() {
    let emailInput = document.querySelectorAll('sign-input');
    console.log(emailInput);
    var usernameError = document.getElementById('usernameError');
  }
  */

function createErrorMessage(message) {
  let errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.className = 'error-message';
  return errorMessage;
}

function appendErrorMessage(errorContainer, message) {
  errorContainer.innerHTML = message;
}

function showErrorMessage(emailErrorMessage, passwordErrorMessage) {
  let emailInput = document.querySelector('.sign-input');
  let passwordInput = document.querySelector('sign-input:nth-child(2)');

  if (emailInput.value === '') {
    appendErrorMessage(emailErrorMessage, '이메일을 입력해주세요');
  } else if (emailInput.value.indexOf('@') === -1) {
    appendErrorMessage(emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
  } else {
    appendErrorMessage(emailErrorMessage, '');
  }

  if (passwordInput.value === '') {
    appendErrorMessage(passwordErrorMessage, '비밀번호를 입력해주세요');
  } else {
    appendErrorMessage(passwordErrorMessage, '');
  }
}

function validateForm() {
  let emailErrorContainer = document.querySelector(
    '.sign-input--error-container'
  );
  let passwordErrorContainer = document.querySelector(
    '.sign-input--error-container:nth-child(2)'
  );
  showErrorMessage(emailErrorContainer, passwordErrorContainer);
}

const ctaBtn = document.querySelector('.cta');
ctaBtn.addEventListener(onclick, validateForm);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    validateForm();
  }
});
