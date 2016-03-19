angular
.module(
    'pizza-lib.util.debounce.service',
    []
)
.factory(
    'debounce',
    [
        '$rootScope',
        '$browser',
        '$q',
        '$exceptionHandler',
        function($rootScope, $browser, $q, $exceptionHandler) {
            'use strict';

            var deferreds = {},
                methods = {},
                uuid = 0;

            function debounce(fn, delay, invokeApply, cancel) {
                var deferred = $q.defer(),
                    promise = deferred.promise,
                    skipApply = (angular.isDefined(invokeApply) && !invokeApply),
                    timeoutId, cleanup,
                    methodId, bouncing = false;

                // check we dont have this method already registered
                angular.forEach(methods, function(value, key) {
                    if (angular.equals(methods[key].fn, fn)) {
                        bouncing = true;
                        methodId = key;
                    }
                });

                // not bouncing, then register new instance
                if (!bouncing) {
                    methodId = uuid++;
                    methods[methodId] = {
                        fn: fn
                    };
                } else {
                    // clear the old timeout
                    if (cancel) {
                        deferreds[methods[methodId].timeoutId].reject('bounced');
                    }
                    $browser.defer.cancel(methods[methodId].timeoutId);
                }

                var debounced = function() {
                    // actually executing? clean method bank
                    delete methods[methodId];
                    var called;
                    try {
                        called = fn();
                    } catch (e) {
                        deferred.reject(e);
                        $exceptionHandler(e);
                    }

                    if (cancel) {
                        deferred.resolve(called);
                    } else {
                        angular.forEach(deferreds, function (def) {
                            def.resolve(called);
                        });
                    }

                    if (!skipApply) {
                        $rootScope.$apply();
                    }
                };

                timeoutId = $browser.defer(debounced, delay);

                // track id with method
                methods[methodId].timeoutId = timeoutId;

                cleanup = function() {
                    delete deferreds[promise.$$timeoutId];
                };

                promise.$$timeoutId = timeoutId;
                deferreds[timeoutId] = deferred;
                promise.then(cleanup, cleanup);

                return promise;
            }

            // similar to angular's $timeout cancel
            debounce.cancel = function(promise) {
                if (promise && deferreds.hasOwnProperty(promise.$$timeoutId)) {
                    deferreds[promise.$$timeoutId].reject('canceled');
                    return $browser.defer.cancel(promise.$$timeoutId);
                }
                return false;
            };

            return debounce;
        }
    ]
);
