(function(){
    // #1

    var nativeSetTimeout = window.setTimeout;

    window.setTimeout = function (delay, callback) {
        var args = [],
            idx = 0,
            len = arguments.length;

        for ( ; idx < len; idx++) {
            args.push(arguments[idx]);
        }

        args[0] = callback;
        args[1] = delay;

        return nativeSetTimeout.apply(null, args);
    };

    // 2

    var nativeSetInterval = window.setInterval;

    window.setInterval = function (callback, delay) {
        var args = [],
            idx = 0,
            len = arguments.length;

        for ( ; idx < len; idx++) {
            args.push(arguments[idx]);
        }

        args[0] = 0;
        args[1] = callback;

        var callerST = function () {
            return window.setTimeout.apply(null, args);
        };

        return nativeSetInterval.call(null, callerST, delay);
    };

})();