'use strict';
angular.module('ng-nested-select', []);// Source: src/nested-select-directive.js
angular.module('ng-nested-select').directive('nestedSelect', function() {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div class="nestedselect" ng-transclude><select></select></div>'
  };
});

