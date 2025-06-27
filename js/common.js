


// 햄버거 메뉴 S
function btnMenu(){
    $('#header').toggleClass('active');
}
// 햄버거 메뉴 E


// 스크롤 올리면 메뉴 노출 내리면 비노출 S
const header = document.getElementById('header');
let lastScrollY = window.scrollY;
let anchorClicked = false;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // 스크롤 내림
        header.classList.add('scroll');
    } else if (!anchorClicked) {
        // 스크롤 올림 + 앵커 클릭이 아닐 때만 제거
        header.classList.remove('scroll');
    }

    lastScrollY = currentScrollY;
});
// 스크롤 올리면 메뉴 노출 내리면 비노출 E