const user_name = document.getElementById('username')
const user_id = document.getElementById('userid')
const user_email = document.getElementById('useremail')
const user_phone = document.getElementById('phone')
const user_pw = document.getElementById('password')
const user_pw_check = document.getElementById('password_check')
const user_first_amount = document.getElementById('first_amount')
const user_second_amount = document.getElementById('second_amount')

function handleUsername(event) {
  const value = event.target.value;
  if(!value)
  {
    alert("이름은 필수 입니다.");
  }
}

function handleUseremail(event) {
  const value = event.target.value;
  if(!value)
  {
    alert("이메일은 필수 입니다.");
  }
}

function handlePhone(event) {
  const value = event.target.value;
  if(!value)
  {
    alert("연락처는 필수 입니다.");
  }
}

order_form.addEventListener('submit', (e) => {
  var edition1_check = document.getElementById('edition1').checked;
  var edition2_check = document.getElementById('edition2').checked;
  var edition3_check = document.getElementById('edition3').checked;
  var edition4_check = document.getElementById('edition4').checked;

  let assignmnet_check1 = document.querySelector("#col_assignment").checked;
  let assignmnet_check2 = document.querySelector("#service_assignment").checked;

  if(user_name.value === '' || user_name.value == null)
  {
    alert("이름을 입력해주세요.")
    return false;
  }

  if(!(user_name.value.length >= 2 && user_name.value.match((/[\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]/g))))
  {
    alert("유효하지 않은 이름입니다.")
    document.getElementById("username").focus();
    return false;
  }

  if(user_id.value === '' || user_id.value == null)
  {
    alert("아이디를 입력해주세요.")
    document.getElementById('userid').focus();
    return false;
  }

  if(!(user_id.value.length >= 4 && user_id.value.length <= 12 && user_id.value.match(/[A-Za-z\-0-9]/)))
  {
    alert("아이디는 4~12자의 대소문자 영문과 숫자 조합만 가능합니다.")
    document.getElementById('userid').focus();
    return false;
  }

  if(user_email.value === '' || user_email.value == null)
  {
    alert("이메일을 입력해주세요.")
    return false; 
  }

  if(!user_email.value.match(/^[A-Za-z0-9-._]*[@][A-Za-z0-9-._]*[\.][a-z]{2,3}$/))
  {
    alert("유효하지 않은 이메일 형식입니다.")
    return false;
  }

  if(user_phone.value === '' || user_phone.value == null)
  {
    alert("연락처를 입력해주세요.")
    return false;
  }

  if(!(user_phone.value.length >= 10 && user_phone.value.length <= 11 && user_phone.value.match(/[0-9]/)))
  {
    alert("연락처는 -기호 제외하고 작성해주세요.")
    return false;
  }

  if(user_pw.value === '' || user_pw.value == null)
  {
    alert("비밀번호를 입력해주세요.")
    return false;
  }

  if(!(user_pw.value.length >= 4 && user_pw.value.length <= 12 && user_pw.value.match(/[A-Za-z\-0-9]/)))
  {
    alert("비밀번호는 4~12자의 대소문자 영문과 숫자 조합만 가능합니다.")
    document.getElementById('userpw').focus();
    return false;
  }

  if(user_pw_check.value === '' || user_pw_check.value == null || user_pw_check.value !== user_pw.value)
  {
    alert("비밀번호가 일치하지 않습니다.")
    return false;    
  }

  if((edition1_check == false)&&(edition2_check == false)&&(edition3_check == false)&&(edition4_check == false))
  {
    alert("제품을 선택해주세요.")
    return false;
  }

  if((user_first_amount.value === '' || user_first_amount.value === null) && (user_second_amount.value === '' || user_second_amount === null))
  {
    alert("수량을 입력해주세요.")
    return false;
  }

  if((!assignmnet_check1) || (!assignmnet_check2))
  {
    alert("필수 약관에 동의해주세요.")
    return false;
  }

  alert("정상적으로 신청되었습니다.")
  e.preventDefault();
  window.location.href = "https://www.salesforce.org/education/solutions/collaboration-tools/";
})