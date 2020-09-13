window.addEventListener('load', function() {
  var elUname = document.querySelector('#username');
  elUname.addEventListener('keyup', addMember);
  // KEYUP EVENT

  var elAdd = document.querySelector('#btn-add');
  elAdd.addEventListener('click', addMember);
  //CLICK EVENT
});

var count = 0; // 번호를 넣는 변수

function addMember(e) {
  var elUname;

  if (e.type == 'keyup') {
    var keycode = e.which || e.keyCode;
    if (keycode != 13) return;
    // console.log(this.value);

    elUname = this; // 위에 IF문에서 'keyup'을 판별했기떄문에 input을 가리킴
  } // END IF
  else {
    elUname = this.previousElementSibling; // button의 부모 input을가리킴
  } // END ELSE

  var uname = elUname.value; // input안의 값을 받아옴
  //console.log(uname);

  if (!uname) {
    var originalBg = elUname.style.backgroundColor; // 원래 배경색상
    elUname.style.backgroundColor = '#FFFF00';
    elUname.focus();
    window.setTimeout(function() {
      elUname.style.backgroundColor = originalBg;
    }, 2000) // END TIMEOUT
    return;
  } // END IF

  count++;

  // 번호가 들어가는 td 생성
  var elTdNum = document.createElement('td');
  elTdNum.textContent = count;

  // 번호가 들어가는 td 생성
  var elTdName = document.createElement('td');
  elTdName.textContent = uname;

  //삭제 버튼이 있는 td , button 생성
  var elTdMenu = document.createElement('td');
  var elDelBtn = document.createElement('button');
  elDelBtn.textContent ='삭제';
  elDelBtn.addEventListener('click',function(){
  	if(confirm('정말로 삭제하실건가요?')){
    	this.parentElement.parentElement.remove();
    }// IF END
  }); //CLICK EVENT
  elTdMenu.appendChild(elDelBtn);
  
  // 위 세개의 동적 요소를 자식을 가질 tr 요소를 생성
  var elTr = document.createElement('tr');
  elTr.appendChild(elTdNum);
  elTr.appendChild(elTdName);
  elTr.appendChild(elTdMenu);
  
  // 최종적으로 tbody에 추가하기
  document.querySelector('#members > tbody').appendChild(elTr);
  
  // 이름 입력 필드를 비우고 포커스를 줌
  elUname.value = '';
  elUname.focus();
}
// 실행될 함수