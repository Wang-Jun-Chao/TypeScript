var Counter = (function () {

    var _i: number = 0;

    function Counter() {
        _i = 0;
    }

    Counter.prototype.get = function () {
        return _i;
    };


    Counter.prototype.set = function (val: number) {
        _i = val;
    };

    Counter.prototype.increment = function () {
        _i++;
    };

    return Counter;
})();

var counter = new Counter();
console.log(counter.get());
counter.set(2);
console.log(counter.get());
counter.increment();
console.log(counter.get());
// console.log(counter._i); // 错误
