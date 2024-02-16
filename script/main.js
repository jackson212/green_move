
//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var imgs = document.querySelectorAll('.slider img');
    var dots = document.querySelectorAll('.dot');

    var currentImg = 0; // index of the first image 
    const interval = 3000; 

    function changeSlide(n) {
        for (var i = 0; i < imgs.length; i++) { // reset
            imgs[i].style.opacity = 0;
            dots[i].classList.remove('active');
        }

        imgs[n].style.opacity = 1;
        dots[n].classList.add('active');
    }

    // Initial display
    changeSlide(currentImg);

    // Slideshow logic
    setInterval(function() {
        currentImg = (currentImg + 1) % imgs.length;
        changeSlide(currentImg);
    }, interval);
});