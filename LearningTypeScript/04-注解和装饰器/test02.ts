function logMethod(target: any, key: string, descriptor: any) {
    //保存原方法的引用
    var originalMethod = descriptor.value;

    //编辑descriptor 参数的value 属性
    descriptor.value = function (...args: any[]) {
        //将方法参数转化为字符串
        var a = args.map(a => JSON.stringify(a)).join();

        //执行方法，得到其返回值
        var result = originalMethod.apply(this, args);

        //将返回值转化为字符串
        var r = JSON.stringify(result);

        //将函数的调用细节打印在控制台中
        console.log(`Call ：${key}(${a}) => ${r}`);

        //返回方法的调用结果
        return result;
    };

    //返回编辑后的属性描述对象
    return descriptor;
}


class Person {
    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    @logMethod
    public saySomething(something: string): string {
        return this.name + " " + this.surname + " says: " + something;
    }
}

var me= new Person ("Remo", "Jansen");
me.saySomething ("hello!");
// Call : saySomething (”hello!")=>”Remo Jansen says: hello !”
