'use strict';

(function(){


// HTML TEMPLATE

var slidesTemplate = document.querySelector('#slides-template').innerHTML;

Mustache.parse(slidesTemplate);

var slidesList = '';

for (var i = 0; i < slidesData.length; i++) {
	slidesList += Mustache.render(slidesTemplate, slidesData[i]);
}

var results = document.querySelector('#results');
results.insertAdjacentHTML('beforeend', slidesList);

var carouselCells = document.querySelectorAll('.carousel-cell');
for (var i = 0; i < carouselCells.length; i++) {
	carouselCells[i].id = 'carousel-cell' + (i + 1);
}



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


//GOOGLE MAP


window.initMap = function() {
	
	var catedral1 = slidesData[0].coords;

	
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: catedral1
	});


	// window.addEventListener('hashchange', function() {
		
	// 	console.log('hash has been changed!');

	// 	map.panTo(slidesData[(window.location.hash.substr(14)) - 1].coords);
	// });


	for ( i = 0; i < slidesData.length; i++) {
		
		var marker = new google.maps.Marker({
			position: slidesData[i].coords,
			map: map
		});
	} 
}


})(); 
