let i = 1;


setInterval(switchPic, 10000);

function init() {
    window.onscroll = function () {
        if(window.pageYOffset > 0) {
            document.getElementById('navbar').classList.add('navigationbar-container-scroll');
        } else {
            document.getElementById('navbar').classList.remove('navigationbar-container-scroll');
        }
    }
}


function switchPic() {
    img(i);
    i = i + 1;

    if (i == 4) {
        i = 1;
    }
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
        document.getElementById('headline').innerHTML = 'Neue Anzeige';
    } else if (a == 3) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.remove('hide');
        document.getElementById('haus4').classList.add('hide');
        document.getElementById('headline').innerHTML = 'Ein toller Spruch';
    } else if (a == 4) {
        document.getElementById('haus1').classList.add('hide');
        document.getElementById('haus2').classList.add('hide');
        document.getElementById('haus3').classList.add('hide');
        document.getElementById('haus4').classList.remove('hide');
        document.getElementById('headline').innerHTML = 'Noch ein Angebot';
    }

    setTimeout(function () {
        document.getElementById('headline').classList.remove('fly-in');
        document.getElementById('underscore').classList.remove('fly-in');
    }, 1000);
}
