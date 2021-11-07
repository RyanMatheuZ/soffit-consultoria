const readyRightElement= $(".animation--ready-right");
const readyScaleElement = $(".animation--ready-scale");

const moveUpElement = $(".animation--move-up");
const moveDownElement = $(".animation--move-down");
const moveRightElement = $(".animation--move-right");
const moveScaleElement = $(".animation--move-scale");

$(document).ready(function() {
    readyRightElement.each(function(i, element) {
        $(element).removeClass("-translate-x-32 opacity-0 invisible")
        .addClass("transition-all duration-1000 ease-out");
    });

    readyScaleElement.each(function(i, element) {
        $(element).removeClass("scale-0 opacity-0")
        .addClass("duration-700 ease-in");
    });
});

$(document).scroll(function() {
    const scrollPosition = $(window).scrollTop() + $(window).height();

    moveUpElement.each(function(i, element) {
        if ($(element).offset().top < scrollPosition) {
            $(element).removeClass("translate-y-28 opacity-0 invisible")
            .addClass("transition-all duration-1000 ease-out");
        }
    });

    moveDownElement.each(function(i, element) {
        if ($(element).offset().top + $(element).outerHeight(true) < scrollPosition) {
            $(element).removeClass("-translate-y-28 opacity-0 invisible")
            .addClass("transition-all duration-1000 ease-out");
        }
    });

    moveRightElement.each(function(i, element) {
        if ($(element).position().top + $(element).outerHeight(true) < scrollPosition) {
            $(element).removeClass("-translate-x-32 opacity-0 invisible")
            .addClass("transition-all duration-1000 ease-out");
        }
    });

    moveScaleElement.each(function(i, element) {
        if ($(element).position().top + $(element).outerHeight(true) < scrollPosition) {
            $(element).removeClass("scale-0 opacity-0 invisible")
            .addClass("transition-all duration-1000 ease-out");
        }
    });
});
