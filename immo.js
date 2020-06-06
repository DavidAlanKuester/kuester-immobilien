let i = 1;
let img_interval = setInterval(switchPic, 10000);

function init() {
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            document.getElementById('navbar').classList.add('navigationbar-container-scroll');
            document.getElementById('logo_white').classList.add('hide');
            document.getElementById('logo').classList.remove('hide');
            document.getElementById('menu-white').classList.add('hide');
            document.getElementById('menu-black').classList.remove('hide');

        } else {
            document.getElementById('navbar').classList.remove('navigationbar-container-scroll');
            document.getElementById('logo_white').classList.remove('hide');
            document.getElementById('logo').classList.add('hide');
            document.getElementById('menu-black').classList.add('hide');
            document.getElementById('menu-white').classList.remove('hide');
        }
    }
}

function responsive_menu() {
    document.getElementById('responsive-menu-click').classList.add('hide-menu');
    document.getElementById('blackbendjava').classList.remove('hide');
}

function responsive_menu_exit() {
    document.getElementById('responsive-menu-click').classList.remove('hide-menu');
    document.getElementById('blackbendjava').classList.add('hide');
}

function resetInterval() {
    clearInterval(img_interval);
    img_interval = setInterval(switchPic, 10000);
}


function switchPic() {

    i = i + 1;

    if (i > 4) {
        i = 1;
    }
    img(i);
}

function img(a) {
    document.getElementById('headline').classList.add('fly-in');
    document.getElementById('underscore').classList.add('fly-in');

    if (a == 1) {
        document.getElementById('haus1').classList.remove('hide');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.add('hide');
        document.getElementById('haus4').classList.add('hide');
        document.getElementById('headline').innerHTML = 'Küster Immobilien';

    } else if (a == 2) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.remove('hide');
        document.getElementById('haus3').classList.add('hide');
        document.getElementById('haus4').classList.add('hide');
        document.getElementById('headline').innerHTML = 'Handwerksservice';
    } else if (a == 3) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.remove('hide');
        document.getElementById('haus4').classList.add('hide');
        document.getElementById('headline').innerHTML = 'Verwaltung';
    } else if (a == 4) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.add('hide');
        document.getElementById('haus4').classList.remove('hide');
        document.getElementById('headline').innerHTML = 'Sanierungsservice';
    }

    setTimeout(function () {
        document.getElementById('headline').classList.remove('fly-in');
        document.getElementById('underscore').classList.remove('fly-in');
    }, 1000);
}
