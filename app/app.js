(function () {
    'use strict';

	var ladyhacks = angular.module('ladyhacks', [
            'ngMaterial',
            'ui.router',
            'ngAnimate',
            'ngResource'
		]);

		ladyhacks.config(["$mdThemingProvider", "$mdIconProvider", function ($mdThemingProvider, $mdIconProvider){

              $mdThemingProvider.theme('default')
                  .primaryPalette('indigo')
                  .accentPalette('pink');

	    }]);


		ladyhacks.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider){

		  // For any unmatched url, redirect to /main
		  $urlRouterProvider.otherwise("/main");
		  
		  // Set up the states
		  $stateProvider
		  	.state('main', {
		      url: "/main",
		      templateUrl: "main/main.html",
		      controller: 'MainController',
		      data: {
		        requireLogin: false,
		        requirePrev: 0 
		      }
		    })
		    .state('detail', {
		      url: "/detail/:id",
		      templateUrl: "detail/detail.html",
		      controller: 'DetailController',
		      data: {
		        requireLogin: false,
		        requirePrev: 0
		      }
		    })
		    .state('profile', {
		      url: "/profile",
		      templateUrl: "profile/profile.html",
		      controller: 'ProfileController',
		      data: {
		        requireLogin: false,
		        requirePrev: 0,
		      }
		    });
	    }]);

			/**
	         * detect IE
	         * returns version of IE or false, if browser is not Internet Explorer
	         */
	        var detectIE = function() {

	            var ua = window.navigator.userAgent;

	            var msie = ua.indexOf('MSIE');
	            if (msie > 0) {
	            // IE 10 or older => return version number
	            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	            }

	            var trident = ua.indexOf('Trident/');
	            if (trident > 0) {
	            // IE 11 => return version number
	            var rv = ua.indexOf('rv:');
	            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	            }

	            var edge = ua.indexOf('Edge/');
	            if (edge > 0) {
	            // Edge (IE 12+) => return version number
	            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	            }

	            // other browser
	            return false;
	        };

	        if (detectIE() !== false) {
	            window.location = "index.html";
	        }

})();