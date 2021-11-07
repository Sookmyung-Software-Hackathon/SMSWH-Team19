var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("modal_btn");
var marks = document.getElementsByClassName("modal_mark");

var funcs = [];

function openModal(num) {
  return function () {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
    btns[num].onclick = function () {
      modals[num].style.display = "block";
      console.log(num);
    };

    marks[num].onclick = function () {
      modals[num].style.display = "block";
      console.log(num);
    };
  };
}

// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
for (var i = 0; i < btns.length; i++) {
  funcs[i] = openModal(i);
}

// 원하는 Modal 수만큼 funcs 함수를 호출합니다.
for (var j = 0; j < btns.length; j++) {
  funcs[j]();
}

// Modal 영역 밖을 클릭하면 Modal을 닫습니다.
window.onclick = function (event) {
  if (event.target.className == "modal") {
    event.target.style.display = "none";
  }
};
