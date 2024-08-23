function init() {
  const topBtn = document.getElementById("top-btn"); // top 버튼
  const footer = document.querySelector("footer"); // footer

  // 초기 상태 설정
  topBtn.style.opacity = "0";
  topBtn.style.transition = "opacity 0.5s";

  // top 버튼 스크롤하면 보이기 / 숨기기
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      topBtn.style.display = "block";
      setTimeout(function () {
        topBtn.style.opacity = "1";
      }, 10);
    } else {
      topBtn.style.opacity = "0";
      setTimeout(function () {
        topBtn.style.display = "none";
      }, 500);
    }
  });

  // top 버튼 클릭 시 페이지 상단으로 부드럽게 이동
  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 화면과 footer의 길이를 계산해서 top 버튼을 footer 바로 위에 고정시키기
  function adjustButtonPosition() {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const buttonHeight = topBtn.offsetHeight;
    const imgHeight = document.querySelector(".background-img2").offsetHeight;

    if (footerRect.top <= windowHeight - imgHeight + 40) {
      topBtn.style.bottom = `${
        windowHeight - footerRect.top - imgHeight + buttonHeight + 40
      }px`;
    } else {
      topBtn.style.bottom = "40px";
    }
  }

  // 스크롤 이벤트에 adjustButtonPosition 함수 바인딩
  window.addEventListener("scroll", adjustButtonPosition);
  // 윈도우 리사이즈 이벤트에도 바인딩 (화면 크기 변경 시에도 위치 조정)
  window.addEventListener("resize", adjustButtonPosition);

  // map 출력
  kakao.maps.load(function () {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.4423468, 126.5714523),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
  });

  // 이메일 유효성 검사 후 modal창 띄우기
  const submit = document.querySelector(".submit-button");
  const emailInput = document.getElementById("email-input");
  const modal = document.querySelector(".modal");
  const submitForm = document.querySelector(".submit-form");
  const form = document.querySelector(".subscribe-form");

  // Subscribe 버튼 클릭 시
  submit.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 폼 제출 동작을 막음
    const email = emailInput.value;
    if (validateEmail(email)) {
      // 이메일이 유효하면 모달창 띄우기
      showModal();
    } else {
      alert("유효하지 않은 이메일입니다.");
    }
  });

  // 이메일 유효성 검사
  function validateEmail(email) {
    // 1. 길이 검사 (5 ~ 320자)
    if (email.length < 5 || email.length > 320) {
      return false;
    }

    // 2. '@' 기호의 존재 및 위치 검사(처음이나 끝에 위치하지 않고 한 번만 나타나게)
    const index = email.indexOf("@");
    if (index <= 0 || index === email.length - 1) {
      return false;
    }

    // 3. 도메인 부분 검사(@ 뒤에 도메인 이름 존재. 도메인 이름에는 최소한 하나의 점'.' 포함)
    const local = email.substring(0, index);
    const domain = email.substring(index + 1);
    if (domain.indexOf(".") === -1) {
      return false;
    }

    // 4. 도메인 부분의 길이 검사(2 ~ 63자)
    const domainParts = domain.split(".");
    if (domainParts.some((part) => part.length < 2 || part.length > 63)) {
      return false;
    }

    // 5. 유효한 문자 검사(로컬(@ 이전)과 도메인 부분에 알파벳, 숫자, 하이픈, 밑줄, 점만 허용)
    const validChars = /^[a-zA-Z0-9._-]+$/;
    if (
      !validChars.test(local) ||
      !validChars.test(domain.replace(/\./g, ""))
    ) {
      return false;
    }

    return true;
  }

  // 모달창 띄우기
  function showModal() {
    modal.classList.remove("hidden");
  }

  // 모달창의 버튼 클릭 시
  submitForm.addEventListener("click", function () {
    modal.classList.add("hidden");
    form.submit();
  });
}

// DOMContentLoaded가 발생했는지 확인하고 초기화
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
