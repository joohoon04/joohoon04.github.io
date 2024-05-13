const pTag1 = document.querySelector('.first-parallel')
// const pTag2 = document.querySelector('.second-parallel')

const textArr1 = ['Thank','you','for','viewing','our','project'];
// const textArr2 = ['I', 't', 'w', 'a', 's', 'a', 'g', 'o', 'o', 'd',  't', 'i', 'm', 'e','f', 'o', 'r',  'u', 's'];

function initTexts(element, textArray){
    textArray.push(...textArray)
    for (let i =0; i < textArray.length; i++){
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}
initTexts(pTag1, textArr1)
// initTexts(pTag2, textArr2)

let count1 = 0;
// let count2 = 0;

function marqueeText(count, element, direction){
    if(count > element.scrollWidth / 1){
        element.style.transform = 'translateX(0)'
        count = 0;
    }
    element.style.transform = `translateX(${count * direction}px)`
    return count
}

function animate() {
    count1++;
    // count2++;

    count1 = marqueeText(count1, pTag1, -2);
    // count2 = marqueeText(count2, pTag2, 1);

    window.requestAnimationFrame(animate);
}

animate();

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const backgroundImage = section.querySelector('.background-image');

        // 이미지가 텍스트 아래에 있을 때 opacity를 1로 설정하여 이미지를 나타냄
        if (scrollPosition >= sectionTop - windowHeight && scrollPosition < sectionTop + sectionHeight) {
            backgroundImage.style.opacity = '1';
        } else {
            // 그 외의 경우에는 이미지를 투명하게 함
            backgroundImage.style.opacity = '0';
        }
    });
});