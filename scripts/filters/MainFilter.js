(function() {

    // Create global filters using angular.filter() only. Never use local filters inside
    // controllers/services. This enhances testing and reusability.
    function startsWithTheLetterA() {
        return function(items) {
            return items.filter(function(item) {
                return /^a/i.test(item.name);
            })
        }
    }

    // Pass functions into module methods rather than assigning a callback.
    // This helps aid with readability and helps reduced the amount of code "wrapped"
    // inside Angular.
    angular.module('app')
    .filter('startsWithTheLetterA', startsWithTheLetterA)
})();