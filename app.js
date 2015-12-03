(function() {
  'use strict';
  angular.module("candyApp", [])
  angular.module("candyApp")
    .controller('candyController', candyController)
    .filter('checkmark', checkmarkFilter)
    .directive('navBar', navBar)
    .directive('content', content)
    .directive('pagefooter', pageFooter)


  candyController.$inject = ['$scope']

  function navBar(){
    var directive = {
      restrict: 'EA',
      templateUrl: 'templates/navbar.html'
    }
    return directive
  }

  function content(){
    var directive = {
      restrict: 'EA',
      templateUrl: 'templates/content.html'
    }
    return directive
  }

  function pageFooter(){
    var directive = {
      restrict: 'EA',
      templateUrl: 'templates/pagefooter.html'
    }
    return directive
  }

  function checkmarkFilter(){
    return function(input) {
      return input ? '\u2713' : '\u2718'
    }
  }

  function candyController($scope){
    var candyCtrl = this

    candyCtrl.name = "Candy!"

    candyCtrl.candies = [{name: 'Snickers', color: 'Brown', fruity: false, price: 1.5}, {name: 'Fruit Roll Ups', color: 'Red', fruity: true, price: 3}, {name: 'White Chocolate Hershey Bars', color: 'White', fruity: false, price: .85}, {name: 'Lime Jelly Beans', color: 'Green', fruity: true, price: .05}, {name: 'Red Hots', color: 'Red', fruity: false, price: 1.25}, {name: 'Whoppers', color: 'Brown', fruity: false, price: 1.75}]
  }
}());
