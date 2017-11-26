let carrousel = document.querySelector('.carrousel');
let carrouselItems = document.querySelectorAll('.carrousel-item');
let carrouselButtons = document.querySelectorAll('.carrousel-button');

let movieArray = [
    {
        title: 'Moonlight',
        posterUrl: 'https://assets.mubi.com/images/notebook/post_images/22621/images-w1400.jpg?1481167057',
        runtime: 122,
        summary: 'A young, African-American, gay man deals with his dysfunctional home life and comes of age in Miami during the "War on Drugs" era. The story of his struggle to find himself is told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love while grappling with his own sexuality.',
        trailerUrl: 'https://www.youtube.com/embed/9NJj12tJzqc',
        director: 'Barry Jenkins',
        producer: 'A24',
        distributor: 'Plan B'
    },
    {
        title: 'Fight Club',
        posterUrl: 'https://i.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02--classic-poster-classic-movies-posters.jpg',
        runtime: 139,
        summary: 'A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler\'s fight club, he must accept the awful truth that Tyler may not be who he says he is.',
        trailerUrl: 'https://www.youtube.com/embed/9NJj12tJzqc',
        director: 'David Fincher',
        producer: 'Art Linson Productions',
        distributor: '20th Century Fox',

    },
    {
        title: 'Assasin\'s Creed',
        posterUrl: 'https://www.heyuguys.com/images/2016/11/assassins-creed-uk-movie-poster-439x650.jpg',
        runtime: 115,
        summary: 'Through a revolutionary technology that unlocks his genetic memories, Callum Lynch (Michael Fassbender) experiences the adventures of his ancestor, Aguilar de Nerha, in 15th Century Spain. Callum discovers he is descended from a mysterious secret society, the Assassins, and amasses incredible knowledge and skills to take on the oppressive and powerful Templar organization in the present day.',
        trailerUrl: 'https://www.youtube.com/embed/4haJD6W136c',
        director: 'Justin Kurzel',
        producer: '</br>Ubisoft Motion Pictures</br>New Regency Pictures',
        distributor: '20th Century Fox',
    },
    {
        title: 'Arrival',
        posterUrl: 'http://www.posterposter.org/wp-content/uploads/2016/09/3-arrival-movie-poster-embarrassing-photoshop-fail.jpg',
        runtime: 116,
        summary: 'Linguistics professor Louise Banks leads an elite team of investigators when gigantic spaceships touchdown in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind.',
        trailerUrl: 'https://www.youtube.com/embed/tFMo3UJ4B4g',
        director: 'Denis Villeneuve',
        producer: 'FilmNation Entertainment',
        distributor: 'Paramount Pictures',
    },
    {
        title: 'Raiders of the Lost Ark',
        posterUrl: 'https://20ui41tp7v127j03rcnp97oh-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/robotwig_indiana.jpg',
        runtime: 115,
        summary: 'The year is 1936. An archeology professor named Indiana Jones is venturing in the jungles of South America searching for a golden statue. Unfortunately, he sets off a deadly trap but miraculously escapes. Then, Jones hears from a museum curator named Marcus Brody about a biblical artifact called The Ark of the Covenant, which can hold the key to humanly existence. Jones has to venture to vast places such as Nepal and Egypt to find this artifact. However, he will have to fight his enemy Rene Belloq and a band of Nazis in order to reach it.',
        trailerUrl: 'https://www.youtube.com/embed/XkkzKHCx154',
        director: 'Steven Spielberg',
        producer: 'Lucasfilm',
        distributor: 'Lucasfilm. Ltd',
    },
    {
        title: 'John Wick 2',
        posterUrl: 'https://i.pinimg.com/736x/3d/b6/52/3db65253860373965081b28a05d492de--poster-film-movie-posters.jpg',
        runtime: 122,
        summary: 'After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.',
        trailerUrl: 'https://www.youtube.com/embed/XGk2EfbD_Ps',
        director: 'Chad Stahelski',
        producer: 'Lionsgate',
        distributor: 'Summit Entertainment',
    }
]

let angleDelta = 360 / movieArray.length;

for (let i = 0; i < movieArray.length; i++) {
    carrousel.innerHTML +=
        '<div class="wrapper column carrousel-item" style="transform:rotateY(' + (angleDelta * i) + 'deg) translateZ(' + (65 * movieArray.length) + 'px) scale(1)">' +
        '<div class="carrousel-item-poster" onclick="detailedCarrouselItem(this)">' +
        '<div class="carrousel-item-picture" style="background-image:url(' + movieArray[i].posterUrl + ')"></div>' +
        '<div class="carrousel-item-picture-tip"><i class="fa fa-info-circle" aria-hidden="true"></i></div>' +
        '</div>' +
        '<div class="wrapper column align-center carrousel-item-detail">' +
        '<div class="carrousel-item-title">' + movieArray[i].title + '</div>' +
        '<div class="carrousel-item-runtime">' + movieArray[i].runtime + ' minutes</div>' +
        '<div class="carrousel-item-summary">' + movieArray[i].summary + '</div>' +
        '<div class="carrousel-item-trailer"><iframe width="100%" height="300px" src="' + movieArray[i].trailerUrl + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div>' +
        '<div class="carrousel-item-trivia">' +
        '<div class="carrousel-item-trivia-item">Director: ' + movieArray[i].director + '</div>' +
        '<div class="carrousel-item-trivia-item">Production Company: ' + movieArray[i].producer + '</div>' +
        '<div class="carrousel-item-trivia-item">Distributor: ' + movieArray[i].distributor + '</div>' +
        '</div>' +
        //'<div class="carrousel-item-trivia-tickets">Get Tickets</div>' +
        '<div class="wrapper row align-center justify-center carrousel-item-trivia-get-it-on">Get it on</div>' +
        '<div class="wrapper row carrousel-item-trivia-stores">' +
        '<div class="carrousel-item-trivia-stores-item" style="color:deepskyblue"><i class="fa fa-google" aria-hidden="true"></i></div>' +
        '<div class="carrousel-item-trivia-stores-item" style="color:#febd69"><i class="fa fa-amazon" aria-hidden="true"></i></div>' +
        '<div class="carrousel-item-trivia-stores-item" style="color:#666"><i class="fa fa-apple" aria-hidden="true"></i></div>' +
        '<div class="carrousel-item-trivia-stores-item" style="color:#ff0000"><i class="fa fa-youtube-play" aria-hidden="true"></i></div>' +
        '</div>' +
        '</div>' +
        '</div>';
}

function detailedCarrouselItem(element) {
    console.log(element.childNodes);
    if (element.parentNode.classList.contains('carrousel-item-detailed')) {
        element.parentNode.classList.remove('carrousel-item-detailed');
    } else {
        element.parentNode.classList.add('carrousel-item-detailed');
    }

    if (element.parentNode.childNodes[0].childNodes[0].classList.contains('carrousel-item-picture-detailed')) {
        element.parentNode.childNodes[0].childNodes[0].classList.remove('carrousel-item-picture-detailed');
    } else {
        element.parentNode.childNodes[0].childNodes[0].classList.add('carrousel-item-picture-detailed');
    }
    if (element.parentNode.childNodes[1].classList.contains('carrousel-item-detail-visible')) {
        element.parentNode.childNodes[1].classList.remove('carrousel-item-detail-visible');
    } else {
        element.parentNode.childNodes[1].classList.add('carrousel-item-detail-visible');
    }
    if (element.childNodes[1].classList.contains('carrousel-item-picture-tip-static')) {
        element.childNodes[1].classList.remove('carrousel-item-picture-tip-static');
        element.childNodes[1].innerHTML = '<i class="fa fa-info-circle" aria-hidden="true"></i>';
    } else {
        element.childNodes[1].classList.add('carrousel-item-picture-tip-static');
        element.childNodes[1].innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
    }
}

let carrouselRotateY = 0;
carrousel.style.transform = 'rotate(' + carrouselRotateY + 'deg)';

carrouselButtons[0].addEventListener('click', function () {
    carrouselRotateY = carrouselRotateY + angleDelta;
    carrousel.style.transform = 'rotateY(' + carrouselRotateY + 'deg)';
});

carrouselButtons[1].addEventListener('click', function () {
    carrouselRotateY = carrouselRotateY - angleDelta;
    carrousel.style.transform = 'rotateY(' + carrouselRotateY + 'deg)';
});

