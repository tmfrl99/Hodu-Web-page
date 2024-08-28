# Hodu-web-page
HTML, CSS, Javascript로 구현한 웹페이지

# 배포 URL
https://tmfrl99.github.io/Hodu-web-page/

# 프로젝트 개요
고양이 '호두'의 블로그, 이메일을 입력해 블로그 구독이 가능한 사이트

# 주요 기능
- 호두 사진 다운로드
- 호두 소개
- 호두 사진 모아 보기
- 지도에 위치 표시
- 이메일 입력하여 구독하기

# 전체 화면
![fullScreen](https://github.com/user-attachments/assets/66ac477f-92da-4a27-a519-cc3743289400)

# 프로젝트 구조
📦HODU-WEB-PAGE  
 ┣ 📂img - 이미지 저장  
 ┣ 📂config - 설정 파일 저장  
 ┃ ┣ 📜apikey.js - 카카오맵 apikey 저장   
 ┣ 📜index.html  
 ┣ 📜javascript.js - 자바스크립트 파일  
 ┣ 📜reset.css - 브라우저 기본 스타일 초기화  
 ┣ 📜style.css - 스타일 정의 

# 요구사항 명세서
1. 피그마를 참고하여 페이지 구현을 합니다.
2. 모바일 화면도 고려하여 페이지 구현을 합니다.
3. 스크롤시 헤더가 고정되게 합니다. (단, 처음에는 고정된 상태가 아닙니다.)
4. 스크롤 탑 버튼을 구현합니다. 
    1. 스크롤 탑 버튼은 스크롤시 나타납니다.
    2. 스크롤 탑 버튼은 푸터 아래로 내려가지 않습니다.
    3. 스크롤 탑 버튼을 누르면 스크롤이 최상단으로 올라갑니다. (단, 부드럽게 올라가야 합니다.)
5. 구독하기 모달창
    1. 이메일을 입력하고 `Subscribe` 버튼을 클릭하면 모달창이 나타납니다.
    2. 이메일 유효성 검사를 진행해야 합니다. (값이 들어가지 않거나 이메일 형식이 유효하지 않으면 alert 창으로 경고 문구가 떠야합니다.)
    3. 이메일이 잘 입력되었다면 모달창이 뜹니다. 이때 모달창의 `OK! I love HODU` 버튼을 클릭하면 form이 제출되고 모달창이 닫힙니다.

# 요구사항 구현
|<center>화면</center>|<center>기능</center>|
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
|![scroll2](https://github.com/user-attachments/assets/777c7de6-0fc0-492b-80af-0f3dc57f8ccb)|**헤더**<ul><li>`position: sticky;` 사용하여 헤더 고정</li></ul> **스크롤**<ul><li>`window.scrollY > 0`일 경우 버튼의 opacity를 1로 설정, 0일 경우 0으로 설정하여 스크롤 시 스크롤 탑 버튼 보임</li><li>화면의 길이 `window.innerHeight`과 footer의 길이 `footer.getBoundingClientRect()`를 계산해서 top 버튼을 footer 바로 위에 고정시킴</li><li>`window.scrollTo({top: 0, behavior: "smooth",});`으로 설정하여 버튼 클릭 시 부드럽게 위로 올라감</li></ul>|
|![invalidEmail1](https://github.com/user-attachments/assets/3ea366f4-099a-458e-8c2b-fe9a4f49062c)<br>![validEmail](https://github.com/user-attachments/assets/ebadcaf8-0815-4d42-a683-c2282410e3e0)|**이메일 유효성 검사**<ol><li>길이 검사<br>`if (email.length < 5 \|\| email.length > 320)`</li><li>'@'기호 존재 및 위치 검사<br>`if (index <= 0 \|\| index === email.length - 1)`</li><li>'@' 뒤의 도메인 이름에 최소한 하나의 점 '.' 포함<br>`if (domain.indexOf(".") === -1)`</li><li>도메인 부분 길이 검사<br>`if (domainParts.some((part) => part.length < 2 \|\| part.length > 63))`</li><li>유효한 문자 검사(알파벳, 숫자, 하이픈, 밑줄, 점만 허용)<br>`if (!validChars.test(local) \|\| !validChars.test(domain.replace(/\./g, "")))`|
|![modal2](https://github.com/user-attachments/assets/3b9678be-faa0-42d8-bf56-af78c4f187b7)|**구독하기 모달창**<ul><li>모달창에 `.hidden {display: none;}`속성을 주고 이메일 형식이 유효하면 `modal.classList.remove("hidden");`으로 속성을 지워 모달창이 나타남</li><li>모달창의 버튼을 클릭하면 `form.submit();`으로 폼을 제출하고 ` modal.classList.add("hidden");`로 다시 해당 속성을 추가하여 모달창이 닫힘</li></ul>|


# 느낀점
HTML, CSS, Javascript로 처음 제대로 된 프로젝트를 구현해 보면서, 지난 2주 동안 배운 프론트엔드 내용을 많이 활용해 볼 수 있어 좋은 시간이었다. 고정형 화면 구현은 비교적 어렵지 않게 할 수 있어서 반응형으로도 구현해 보고 싶었으나 시간과 경험이 부족해 실패하여 아쉬운 마음이 들었다. 이번 프로젝트에서 겪은 시행착오를 바탕으로 다음 프로젝트에서는 반응형 구현까지 성공하고 싶다.