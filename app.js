window.addEventListener('load', function(){
    const slider = document.querySelector('.slider')
    const sliderMain = document.querySelector('.slider-main')
    const sliderItems = document.querySelectorAll('.slider-item')
    const dots = document.querySelectorAll('.dot')
    const prevBtn = document.querySelector('.slider-prev')
    const nextBtn = document.querySelector('.slider-next')
    const silderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    var positionX = 0;
    var index = 0;


    [...dots].forEach(item => 
        item.addEventListener('click', function(e){
           
            const slideIndex = parseInt(e.target.dataset.index)
            index = slideIndex;
            positionX = -1 * index * silderItemWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            console.log(index)
        })    
    )


    nextBtn.addEventListener('click', function(){
        handleChangeSlide(1)
    })

    prevBtn.addEventListener('click', function(){
        handleChangeSlide(-1)
    })
    function handleChangeSlide(direction) {
        if(direction == 1 && index < sliderLength - 1){
            index++;
            positionX = positionX - silderItemWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            //console.log(index)
        }
        else if(direction == -1 && index > 0){
            positionX = positionX + silderItemWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            index--;
            //console.log(index)
        }
    }


    //show navbar on moblie and tablet
    function showNavbar() {
        var openBtn = document.querySelector('.header__navbar-mobile-tablet-btn')
        var closeBtn = document.querySelector('.header__navbar-mobile-tablet-close');
        var overlay  = document.querySelector('.header__navbar-mobile-tablet-overlay')
        var navbar = document.querySelector('.header__navbar-mobile-tablet')
        openBtn.addEventListener('click', function () {
            overlay.classList.add('active');
            navbar.classList.add('open');

        })
        closeBtn.addEventListener('click', function () {
            overlay.classList.remove('active');
            navbar.classList.remove('open');
        })
        overlay.addEventListener('click', function () {
            overlay.classList.remove('active');
            navbar.classList.remove('open');
        })
    }
    showNavbar()

})