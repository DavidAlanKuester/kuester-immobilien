let i = 0;
let imgInterval;

// ******* Onload function - start ******* 
function init() {
    scrollingChange();
    changeImageAndHeadline(0);


    if(window.location.href.endsWith('/') || window.location.href.endsWith('/index.html')) {
        // Start interval for image slideshow
        imgInterval = setInterval(switchPic, 10000);
    }
}
// ******* Onload function - end ******* 

/**
 * Switching Navigationbar from transparent to white on onscroll - start
 */ 
function scrollingChange() {
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
// ******* Switching Navigationbar from transparent to white on onscroll - end ******* 


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
}

function switchPic() {
    i = i + 1;
    if (i > 3) {
        i = 0;
    }
    changeImageAndHeadline(i);
}



function changeImageAndHeadline(imageIndex) {
    document.getElementById('headline').classList.add('fly-in');

    for(let i=1; i<=4; i++){
        document.getElementById('haus' + i).classList.remove('header-image-zoom');
    }

    if (imageIndex == 0) {
        document.getElementById('haus1').classList.remove('hide');
        document.getElementById('haus1').classList.add('header-image-zoom');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.add('hide');
        document.getElementById('haus4').classList.add('hide');
        document.getElementById('headline').innerHTML = 'Küster Immobilien';

    } else if (imageIndex == 1) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.remove('hide');
        document.getElementById('haus2').classList.add('header-image-zoom');
        document.getElementById('haus3').classList.add('hide');
        document.getElementById('haus4').classList.add('hide');
        document.getElementById('headline').innerHTML = 'Handwerk & Sanierung';
    } else if (imageIndex == 2) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.remove('hide');
        document.getElementById('haus3').classList.add('header-image-zoom');
        document.getElementById('haus4').classList.add('hide');
        document.getElementById('headline').innerHTML = 'Wohnungen in Hannover & Rostock';
    } else if (imageIndex == 3) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.add('hide');
        document.getElementById('haus4').classList.remove('hide');
        document.getElementById('haus4').classList.add('header-image-zoom');
        document.getElementById('headline').innerHTML = 'Büros, Bandräume & Parkplätze';
    }

    setTimeout(function () {
        document.getElementById('headline').classList.remove('fly-in');
    }, 1000);
}
    // ******* Image&Headline-Slider - end *******
