angular
    .module('ladyhacks')
    .directive('img', defaultPicture);

function defaultPicture() {
    var directive = {
		restrict: 'E',
		link: function(scope, element, attrs) {
			element.bind('error', function() {
				element.prop('src', './image/logoladyhacks.png');
			});
		}
	};
	
	return directive;
}