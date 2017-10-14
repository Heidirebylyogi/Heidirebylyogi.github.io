var app = angular.module('app', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'home.html',
		controller : 'mainController'
	})

	.when('/about', {
		templateUrl : 'about.html',
		controller : 'aboutController'
	})
	.when('/gallery', {
		templateUrl : 'gallery.html',
		controller : 'galleryController'
	});

		$locationProvider.html5Mode(false);
		$locationProvider.hashPrefix("!");

});
app.animation('.reveal-animation', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      element.fadeIn(750, done);
      return function() {
        element.stop();
      }
    },
    leave: function(element, done) {
    	element.hide();
    }
  }
})

app.controller('mainController', function($scope){
});
app.controller('aboutController', function($scope){
});
app.controller('galleryController', function($scope){
	                initPhotoSwipeFromDOM('.my-gallery');
});