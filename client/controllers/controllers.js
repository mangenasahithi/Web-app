myApp.controller('peoController',function($scope,$route,$routeParams,$http){
		$scope.getDetails = function(){
			$http.get('/api/details').then(function(response){
				$scope.details = response.data;
			});
			};
		$scope.showDetails = function(){
			var id=$routeParams.id;
			$http.get('/api/details/'+id).then(function(response){
				$scope.detail = response.data;
			});
			
			};
		$scope.addDetails = function(){
			$http.post('/api/details/',$scope.detail).then(function(response){
				//$scope.detail = response.data;
				window.location.href= '/';
			});
			
			};
		$scope.updateDetails = function(){
			var id=$routeParams.id;
			$http.put('/api/details/'+id,$scope.detail).then(function(response){
				//$scope.detail = response.data;
				window.location.href= '/';
			});
			
			};
		$scope.deleteDetail = function(id){
			var id= id;
			$http.delete('/api/details/'+id).then(function(response){
				$route.reload();
			});
			};
});