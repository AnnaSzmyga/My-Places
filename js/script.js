// 'use strict'

// (function(){


// HTML TEMPLATE

var slidesTemplate = document.querySelector('#slides-list');

Mustache.parse(slidesTemplate.innerHTML);

var slidesList = '';

for (var i = 0; i < slidesData.length; i++) {
	slidesList += Mustache.render(slidesTemplate, slidesData[i]);
}

document.querySelector('#results').insertAdjacentHTML('beforeend', slidesList);

console.log(slidesTemplate);



// FLICKITY CAROUSEL

var flkty = new Flickity( '.main-carousel', {
  freeScroll: true,
  wrapAround: true,
  pageDots: false,
  hash: true,
});


document.querySelector('.restart-btn').addEventListener('click', function(event) {
	flkty.select(0);
})

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// })(); 
