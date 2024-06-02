document.addEventListener("DOMContentLoaded", () => {
    const pTag1 = document.querySelector('.first-parallel');
    const textArr1 = ['허브', '떨', '아이스', '고기', '얼음', '물건', '필로폰', '대마'];

    function initTexts(element, textArray) {
        textArray.push(...textArray);  // 배열을 두 번 반복하여 결합
        for (let i = 0; i < textArray.length; i++) {
            element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;  // 요소들 사이에 네 개의 공백 추가
        }
    }

    if (pTag1) {
        initTexts(pTag1, textArr1);
    }

    let count1 = 0;

    function marqueeText(count, element, direction) {
        if (count > element.scrollWidth / 1) {
            element.style.transform = 'translateX(0)';
            count = 0;
        }
        element.style.transform = `translateX(${count * direction}px)`;
        return count;
    }

    function animate() {
        count1++;
        count1 = marqueeText(count1, pTag1, -2);
        window.requestAnimationFrame(animate);
    }

    if (pTag1) {
        animate();
    }

    const fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Palatino", "Garamond", "Comic Sans MS", "Trebuchet MS"];

    function getRandomFont() {
        return fonts[Math.floor(Math.random() * fonts.length)];
    }
    
    function applyRandomFonts() {
        const spanSelectors = [
            '.main span.random-font' // random-font 클래스가 적용된 span 요소만 선택
        ];
    
        spanSelectors.forEach(selector => {
            const spans = document.querySelectorAll(selector);
            spans.forEach(span => {
                span.style.fontFamily = getRandomFont();
            });
        });
    }
    
    applyRandomFonts();
    setInterval(applyRandomFonts, 1500); // 3초
    

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled');
            } else {
                entry.target.classList.remove('scrolled');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const mainContent1 = document.querySelector('.main_content1');

    if (mainContent1) {
        observer.observe(mainContent1);
    }

    const images = [
        'img/du (1).png',
        'img/du (2).png',
        'img/du (3).png',
        'img/du (4).png',
        'img/du (5).png',
        'img/du (6).png',
        'img/du (7).png',
        'img/du (8).png',
        'img/du (9).png',
    ];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    function getRandomSize() {
        return Math.floor(Math.random() * 300) + 50; // 300px ~ 50px 사이의 크기
    }

    const imageCreationProbability = 0.15;

    function handleMouseMove(event) {
        const cursorArea = document.querySelector('.web');
        const header = document.querySelector('.header');
        const mainText0 = document.querySelector('.main_text0');
        
        if (!cursorArea || !header || !mainText0) return;
        
        const headerRect = header.getBoundingClientRect();
        const mainText0Rect = mainText0.getBoundingClientRect();
        
        if (event.clientY > headerRect.bottom && event.clientY < mainText0Rect.top) {
            if (Math.random() < imageCreationProbability) {
                const follower = document.createElement('img');
                follower.src = getRandomImage();
                follower.className = 'follower';

                const size = getRandomSize();
                follower.style.width = `${size}px`;
                follower.style.height = `${size}px`;
                follower.style.position = 'absolute';
                follower.style.left = `${event.clientX - size / 2}px`;
                follower.style.top = `${event.clientY - size / 2}px`;
                follower.style.pointerEvents = 'none';

                document.body.appendChild(follower);

                setTimeout(() => {
                    follower.remove();
                }, 900);
            }
        }
    }

    const webArea = document.querySelector('.web');
    if (webArea) {
        webArea.addEventListener('mousemove', handleMouseMove);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const drugElements = document.querySelectorAll('.drug1');
    let isScrolled = false;

    function randomizePositions() {
        if (!isScrolled) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            drugElements.forEach(function(drug) {
                // 화면의 가시 영역 내에서 무작위로 좌표 생성
                const randomX = Math.random() * (windowWidth - drug.offsetWidth);
                const randomY = Math.random() * (windowHeight - drug.offsetHeight);
                drug.style.transform = `translate(${randomX}px, ${randomY}px)`;
            });

            isScrolled = true;
        }
    }

    window.addEventListener('scroll', function() {
        randomizePositions();
    });
});


const elements = document.querySelectorAll('.main_text2 > #box');
let currentIndex = 0;

function toggleElements() {
    elements[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % elements.length;
    elements[currentIndex].style.display = 'block';
}

// 최초에 한 번 실행
toggleElements();

// 5초마다 토글
setInterval(toggleElements, 5000);

