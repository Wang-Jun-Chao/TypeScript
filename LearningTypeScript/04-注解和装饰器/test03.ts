function logProperty(target: any, key: string) {
    //属性值
    var _val = this[key];

    //属性的getter
    var getter = function () {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    };

    //属性的setter
    var setter = function (newVal) {
        console.log(`Set: ${key} => ${newVal}`);
        _val = newVal;

    };

    //删除属性，在严格模式下，如果对象是不可配置的，
    //删除操作将会抛出一个错误。在非严格模式下，则会
    //返回false
    if (delete this[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}


class Person {

    @logProperty
    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    public saySomething(something: string): string {
        return this.name + " " + this.surname + " says: " + something;
    }
}


var me = new Person("Remo", "Jansen");
// Set: name => Remo
me.name = "Remo H. ";
//  Set: name => Remo H.
var n = me.name;
// Get: name Remo H.
