//  To avoid polluting the global namespace, wrap all of your functions in an IIFE. 
//  It is advised to have this happen at compilation/concatenation but including it here as an example.
(function() {

    function config($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controllerAs: 'MainCtrl as main'
            
            // Resolve Controller dependencies in the $routeProvider or $stateProvider (if using ui-router),
            // not the controller itself.
            
            // Never bind logic to the router and reference a resolve property on each controller to couple the logic.
            
            // Within your MainCtrl you would have a resolve property to call. Check 'controllers/MainCtrl.js'
            // for an example. This keeps resolve dependencies inside the same file as the controller and the router
            // free from logic.
            resolve: MainCtrl.resolve
        });
    }
    
    function run() {
        // this will run before your application starts
    }

    // Avoid setting a variable for the module and rely on getter/setter syntax.
    // Supplying an array as the second argument, sets the module. Leaving them off gets the module.
    // Only set the module once. Use get for all times after that.
    angular
        // nick: set your 3-rd party includes inside the square brackets, leave controllers/service/etc.. out!  
        .module('app', []) 
        // include the config and run functions
        .config(config)
        .run(run);
})();
