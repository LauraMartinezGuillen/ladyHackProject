(function(){
	'use strict';

	var controllerId = 'DetailController';
 
	angular
		.module('ladyhacks')
        .controller(controllerId, DetailController);
        
        DetailController.$inject = [
            '$scope',
            '$mdToast',
            '$stateParams',
            '$location',
            'serviceFactory',
            '$rootScope',
            '$window'
        ];
        
        function DetailController($scope, $mdToast, $stateParams, $location, serviceFactory, $rootScope, $window) {

            if($stateParams.id==1000) {
                $scope.service = $rootScope.service;
            }
            else {
                serviceFactory.getServices().query(function(data) {
                    for(var i =0; i<data.length; i++) {
                        if(data[i].ID==$stateParams.id) {
                            $scope.service = data[i];
                        }
                    }                
                });    
            }

            serviceFactory.getUsers().query(function(data) {
                for(var i =0; i<data.length; i++) {
                    if($scope.service.UserID==data[i].UserID) {
                        $scope.user = data[i];
                    }
                }                
            });




            // functions 

            $scope.locateToMain = function (event) {
                $location.path("/main");
            };

            $scope.email = function(emailId){
                $window.open("mailto:"+ emailId);
            };

            $scope.call = function(event){
                $mdToast.show(
                            $mdToast.simple()
                            .content('Calling.... ' + $scope.user.phoneNumber)
                            .hideDelay(3000)
                );
            };

            $scope.book = function(event){
                $mdToast.show(
                            $mdToast.simple()
                            .content('Booked this service!')
                            .hideDelay(3000)
                );
            };

            $scope.rateFunction = function( rating )
            {
                var data = {
                    rating: 4
                };
            };

        }
})();