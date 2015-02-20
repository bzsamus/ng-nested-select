'use strict';

var ExampleCtrl = function($rootScope, $scope) {
    var dateSelect = [
    	{'name' : 'is before', 'type' : daySelect},
    	{'name' : 'is after', 'type' : dayselect}
    ];

    $scope.mainSelect = [
        {'name' : 'birthday', 'type' : dateSelect},
        {'name' : 'age', 'type' : numSelect}
    ];
};

angular.module('example').controller('ExampleCtrl', ExampleCtrl);
