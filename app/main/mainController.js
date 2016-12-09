(function(){
	'use strict';

	var controllerId = 'MainController';

	angular
		.module('ladyhacks')
		.controller(controllerId, MainController);

		MainController.$inject = [
			'$scope',
			'$mdDialog',
			'$mdToast',
			'$location',
			'serviceFactory',
			'$rootScope'
		];

		function MainController($scope, $mdDialog, $mdToast, $location, serviceFactory, $rootScope){

			serviceFactory.getServices().query(function(data) {
				
				$scope.services = data;		
			});

			$scope.order = 'Date';

			$scope.orders = [
				
				{label : 'Date', value : 'SUBMIT_DAT'},
				{label : 'Status', value : 'CASE_STATUS'},
				{label : 'Department', value : 'DEPARTMENT'}

			];

			$scope.filterBy = 'location';
			
			$scope.filters = [
				{filter : 'location', value : 'Toronto'},
				{filter : 'location', value : 'Oakville'},
				{filter : 'location', value : 'Brampton'},
				{filter : 'location', value : 'Markham'},
				{filter : 'location', value : 'York'},
				{filter : 'location', value : 'Oshawa'},
				{filter : 'location', value : 'Mississauga'},
				{filter : 'location', value : 'London'},
				{filter : 'location', value : 'Guelph'},
				{filter : 'location', value : 'Barrie'},
				{filter : 'category', value : 'Household Tasks'},
				{filter : 'category', value : 'Transportation'},
				{filter : 'category', value : 'Senior Services'},
				{filter : 'category', value : 'Children Services'},
				{filter : 'category', value : 'Media Services'},
				{filter : 'category', value : 'Tutoring'},
			]
 

			/// functions

			$scope.locateToDetail = function (id) {
				$location.path("/detail/" + id);
			};

			$scope.openDialog = function(event) {
				$mdDialog.show({
			    	templateUrl: 'serviceForm/serviceForm.html',
			    	controller: 'ServiceFormController',
			    	targetEvent: event,
			    	clickOutsideToClose: true
			    	})
			    	.then(function (){
			    		// show success message
			    		$mdToast.show(
	                        $mdToast.simple()
	                        .content('Your service is created!')
	                        .hideDelay(3000)
	            		);
			    	}, function() {
			    		// show cancel message
			      		$mdToast.show(
	                        $mdToast.simple()
	                        .content('Service form is canceld')
	                        .hideDelay(3000)
	                	);
			    	});
			};


			$scope.submitProblem = function (problem) {

				var problemToAdd = {
					"FID": 1000,
				    "CASE_ID": 123123,
				    "POSTALCODE": problem.POSTALCODE,
				    "WARD": problem.WARD,
				    "SUBMIT_DAT": "2016-05-15",
				    "DETAILS": problem.DETAILS,
				    "LOCATION": problem.LOCATION,
				    "CASE_STATUS": "Assigned",
				    "X_COORDINATE": 0,
				    "Y_COORDINATE": 0,
				    "DEPARTMENT": "",
				    "L_HOUSE_NO": 2350,
				    "L_STREET_N": "",
				    "FACILITY_N": 0,
				    "INTER_ST_1": 0,
				    "INTER_ST_2": 0,
				    "SUBMIT_DATE": 0,
				    "SOLVE_DATE": 0,
				    "STATUS": 0,
				    "PHOTO": 0,
				    "TYPE": 0,
				    "DESC": 0
				}

				$scope.services.push(problemToAdd);
				$rootScope.problem = problemToAdd;
				$mdToast.show(
					$mdToast.simple()
						.content('The problem has been added successfully!')
						.hideDelay(3000)
				);

			};
		}
})();