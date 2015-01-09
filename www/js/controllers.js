angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CuboidCtrl', function($scope, $stateParams, $famous) {
  var Timer = $famous['famous/utilities/Timer'];
  var _colors = ["#b58900","#cb4b16","#dc322f","#6c71c4","#268bd2","#2aa198","#859900"];
  var SPEED = [.03, -.03, .01];
  //var _rotate = [Math.PI / 4,0,0];
  var _rotate = [0,0,0];
  Timer.every(function(){
    _rotate[0] += SPEED[0];
    _rotate[1] += SPEED[1];
    _rotate[2] += SPEED[2];
  });
  $scope.getRotate = function(){
    return _rotate;
  };
  $scope.surfaces = _.map(_.range(6), function(i){
    return {bgColor: _colors[i]};
  });
})

.controller('DraggableCtrl', function ($scope, $famous) {
  var EventHandler = $famous['famous/core/EventHandler'];
  $scope.handler = new EventHandler();
})

.controller('FlipperCtrl', function ($scope, $famous) {
  var EventHandler = $famous['famous/core/EventHandler'];

  $scope.evt = new EventHandler();

  $scope.flip = function(){
    $famous.find('#flipper')[0].flip();
  }
});