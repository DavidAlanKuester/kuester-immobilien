let i = 0;
let imgInterval = setInterval(switchPic, 10000);

// ******* Onload function - start ******* 
function init() {
    // ******* Switching Navigationbar from transparent to white on onscroll - start ******* 
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
    // ******* Switching Navigationbar from transparent to white on onscroll - end ******* 
    img(0);
}
// ******* Onload function - end ******* 

// ******* Responsive Menu- start ******* 
function showMenu() {
    document.getElementById('responsive-menu-click').classList.remove('hide-menu');
    document.getElementById('blackbendjava').classList.remove('d-none');
}

function removeMenu() {
    document.getElementById('responsive-menu-click').classList.add('hide-menu');
    document.getElementById('blackbendjava').classList.add('d-none');
}
// ******* Responsive Menu- end ******* 

// ******* Image&Headline-Slider - start ******* 
function resetInterval() {
    clearInterval(imgInterval);
    imgInterval = setInterval(switchPic, 10000);
    resetZoom = document.getElementById('slideshow-img');
    resetZoom.style.animation = 'none';
    resetZoom.style.animation = null;

}

function switchPic() {
    i = i + 1;
    if (i > 3) {
        i = 0;
    }
    img(i);
}

function img(a) {
    document.getElementById('headline').classList.add('fly-in');

    if (a == 0) {
        document.getElementById('haus1').classList.remove('hide');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.add('hide');
        document.getElementById('haus4').classList.add('hide');
        document.getElementById('headline').innerHTML = 'Küster Immobilien';

    } else if (a == 1) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.remove('hide');
        document.getElementById('haus3').classList.add('hide');
        document.getElementById('haus4').classList.add('hide');
        document.getElementById('headline').innerHTML = 'Handwerksservice';
    } else if (a == 2) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.remove('hide');
        document.getElementById('haus4').classList.add('hide');
        document.getElementById('headline').innerHTML = 'Verwaltung';
    } else if (a == 3) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.add('hide');
        document.getElementById('haus4').classList.remove('hide');
        document.getElementById('headline').innerHTML = 'Sanierungsservice';
    }

    setTimeout(function () {
        document.getElementById('headline').classList.remove('fly-in');
    }, 1000);
}
    // ******* Image&Headline-Slider - end *******
