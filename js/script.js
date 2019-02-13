'use strict'

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
