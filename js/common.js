// 햄버거 메뉴 S
function btnMenu(){
    $('#header').toggleClass('active');
}
// 햄버거 메뉴 E

// 스크롤 올리면 메뉴 노출 내리면 비노출 S
    const header = document.getElementById('header');
    const navWrap = document.querySelector('.navWrap');
    let lastScrollY = window.scrollY;
    let anchorClicked = false;

    // 앵커 태그 클릭 시 플래그 설정
    document.querySelectorAll('.navWrap ul li a').forEach(anchor => {
        anchor.addEventListener('click', () => {
            anchorClicked = true;
            // 강제로 scroll 클래스 추가
            header.classList.add('scroll');
            navWrap.classList.add('scroll');

            // 앵커 클릭 후 약간의 시간 동안 scroll 제거 막기
            setTimeout(() => {
                anchorClicked = false;
            }, 600);
        });
    });

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // 스크롤 내림
            header.classList.add('scroll');
            navWrap.classList.add('scroll');
        } else if (!anchorClicked) {
            // 스크롤 올림 + 앵커 클릭이 아닐 때만 제거
            header.classList.remove('scroll');
            navWrap.classList.remove('scroll');
        }

        lastScrollY = currentScrollY;
    });
    // 스크롤 올리면 메뉴 노출 내리면 비노출 E