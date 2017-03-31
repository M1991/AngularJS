var objapp = angular.module("testApp", ['ui.router']);
	// objapp.config(function($stateProvider, $urlRouterProvider){
		// $urlRouterProvider.otherwise('/login');
		// $stateProvider
		// .state('login', {
            // url: '/login',
            // templateUrl: 'login.html'
        // })
        // .state('home', {
			// url: "/home",
			// templateUrl: "home.html",
			//  //controller: "homeCtrl",
			// authenticate: true;
        // });
		
	// });
	
	
	objapp.controller("testCtrl", ['$scope','$http', function($scope, $http){
		
		$scope.objectIndex = '';
		$scope.savebtn = false;
		$scope.addbtn = true;
		// var formdata = [];
		
		$scope.userList = [{"fname":"Gaurav","lname":"Arora","desg":"Manager","email":"gav@gmail.com"},{"fname":"Ajeet","lname":"Patel","desg":"Developer","email":"ajeet@yahoo.com"},{"fname":"Rakesh","lname":"Sarmah","desg":"Employee","email":"abc@rediff.com"}];
		// $scope.userList = [];
		
		//Selecting Single and multiple items
		  $scope.toggleAll = function() {
			 var toggleStatus = !$scope.isAllSelected;
			 angular.forEach($scope.userList, function(itm){ itm.selected = toggleStatus; });
		   
		  };
		  
		  $scope.optionToggled = function(){
			$scope.isAllSelected = $scope.userList.every(function(itm){ return itm.selected; });
		  };
		
		$scope.editForm = function(id){
			// alert("Edit Form");
			// Save button enable
			$scope.savebtn = true;
			$scope.addbtn = false;
			$scope.objectIndex = id;
            $scope.formdata = angular.copy($scope.userList[id]);
            console.log($scope.objectIndex);
            console.log($scope.userList);
			
		};
		
		$scope.saveForm = function() {
					console.log($scope.objectIndex);
					if($scope.userList[$scope.objectIndex] == null) {
						$scope.userList.push($scope.formdata);
					} else {
						$scope.userList[$scope.objectIndex] = $scope.formdata;
					}
					$scope.formdata = {};
					$scope.objectIndex = '';
					$scope.addbtn = true;
					$scope.savebtn = false;
		};
		
		$scope.subForm = function(isValid){
			
			if(isValid){
				$scope.userList.push($scope.formdata);
				$scope.formdata = {};
			}
		};
		
		$scope.emailcheck = function(index){
				 alert("Email Check");
			};
				
		$scope.delForm = function(fname){
				
			index = -1;		
				var comArr = eval( $scope.userList );
				for( var i = 0; i < comArr.length; i++ ) {
					if( comArr[i].fname === fname ) {
						index = i;
						break;
					}
				}
				if( index === -1 ) {
					alert( "Something gone wrong" );
				}
				$scope.userList.splice( index, 1 );		
			
			$scope.savebtn = false;
		};
		
	}]);
	
$(document).ready(function(){
	
	$("#addbtn").click(function(){
		
		var fname=$("#fname").val();
		fname=fname.trim();
		if(fname=="")
			{
				$("#fname").css({"border":"1px solid red"});
			}else {
				$("#fname").css({"border":""});
			}	
	 
	 	var email=$("#email").val();
	 	email=email.trim();
	 	if((email=="")||(email.indexOf('@')==-1))
	 		{
	 			$("#email").css({"border":"1px solid red"});
	 		}else{
	 			$("#email").css({"border":""});
	 		}
	 	
	});
});
