function animateHeader() {
    const header = document.querySelector('.header')

    anime({
        targets: header,
        translateY: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutExpo',
        autoPlay: true,
    })
}

function animateIntroContent() {
    const introTitle = document.querySelector('.intro-title')
    const introSubtitle = document.querySelector('.intro-subtitle')
    const introButton = document.querySelector('.intro-btn')

    anime({
        targets: [introTitle, introSubtitle, introButton],
        translateX: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutExpo',
        autoPlay: true,
    })
}

animateHeader()
animateIntroContent()
