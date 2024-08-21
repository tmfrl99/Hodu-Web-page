document.addEventListener("DOMContentLoaded", function () {

  // top 버튼
  const topBtn = document.getElementById("top-btn");
  const footer = document.querySelector("footer");

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

  function adjustButtonPosition() {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const buttonHeight = topBtn.offsetHeight;
    const imgHeight = document.querySelector('.background-img2').offsetHeight;

    if (footerRect.top <= windowHeight - imgHeight + 40) {
      topBtn.style.bottom = `${windowHeight - footerRect.top - imgHeight + buttonHeight + 40}px`;
    } else {
      topBtn.style.bottom = "40px";
    }
  }

  // 스크롤 이벤트에 adjustButtonPosition 함수 바인딩
  window.addEventListener("scroll", adjustButtonPosition);
  // 윈도우 리사이즈 이벤트에도 바인딩 (화면 크기 변경 시에도 위치 조정)
  window.addEventListener("resize", adjustButtonPosition);

  // map 출력
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(33.4423468, 126.5714523),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);
});
