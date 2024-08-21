document.addEventListener("DOMContentLoaded", function () {

  // top 버튼
  const topBtn = document.getElementById("top-btn");

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

  // map 출력
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(33.4423468, 126.5714523),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);
});
