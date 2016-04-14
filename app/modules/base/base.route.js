(function() {
    'use strict';

    angular
        .module('base')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base', {
                url: '/base',
                views: {
                    '@': {
                        templateUrl: 'app/modules/base/views/base.html',
                    },
                    'header@base': {
                        templateUrl: 'app/modules/base/views/header.html',
                    },
                    'sidebar@base': {
                        templateUrl: 'app/modules/base/views/sidebar.html',
                        controller: 'BaseCtrl'
                    },
                    'footer@base': {
                        templateUrl: 'app/modules/base/views/footer.html',
                    }
                }
            });
    }

})();
