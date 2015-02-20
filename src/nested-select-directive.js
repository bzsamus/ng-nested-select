'use strict';

angular.module('ng-nested-select').directive('nestedSelect', function() {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<div class="nestedselect" ng-transclude><select></select></div>'
  };
});

