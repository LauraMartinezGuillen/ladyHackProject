(function(){
	'use strict';

	var controllerId = 'ServiceFormController';

	angular
		.module('ladyhacks')
		.controller(controllerId, ServiceFormController);

		ServiceFormController.$inject = [
			'$scope',
			'$mdDialog',
			'$mdToast',
			'$location',
			'serviceFactory'
		];

		function ServiceFormController($scope, $mdDialog, $mdToast, $location, serviceFactory){

			$scope.departments = [

				{value : 'Household Tasks'},
				{value : 'Transportation'},
				{value : 'Senior Services'},
				{value : 'Children Services'},
			    {value : 'Media Services'},
			    {value : 'Tutoring'}

			];


			$scope.tasks = [

				{value : 'House Cleaning'},
				{value : 'Laundry'},
				{value : 'Cooking'},
				{value : 'Moving Help'},
			    {value : 'Packing Help'}
			  

			];

			$scope.type = "seeking";

			$scope.address = "123 Street";

			$scope.city = "Mississauga";


               


			/// functions

			$scope.submitService = function () {
				//$location.path("/detail/" + id);

				console.log("it clicked");
			};
		}
})();