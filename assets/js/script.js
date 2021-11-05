const moveUpElement = $(".animation--move-up");
const moveDownElement = $(".animation--move-down");
const moveRightElement = $(".animation--move-right");

$(document).ready(function() {
    moveUpElement.addClass("transform transition-all duration-1000 ease-out translate-y-28 opacity-0 invisible");
    moveDownElement.addClass("transform transition-all duration-1000 ease-out -translate-y-28 opacity-0 invisible");
    moveRightElement.addClass("transform transition-all duration-1000 ease-out -translate-x-32 opacity-0 invisible");
});

$(document).scroll(function() {
    const scrollPosition = $(window).scrollTop() + $(window).height();

    moveUpElement.each(function(i, element) {
        if ($(element).offset().top < scrollPosition) {
            $(element).removeClass("translate-y-28 opacity-0 invisible");
        }
    });

    moveDownElement.each(function(i, element) {
        if ($(element).offset().top + $(element).outerHeight(true) < scrollPosition) {
            $(element).removeClass("-translate-y-28 opacity-0 invisible");
        }
    });

    moveRightElement.each(function(i, element) {
        if ($(element).position().top + $(element).outerHeight(true) < scrollPosition) {
            $(element).removeClass("-translate-x-32 opacity-0 invisible");
        }
    });
});