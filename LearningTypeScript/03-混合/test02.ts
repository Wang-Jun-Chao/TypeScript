class Animal {
    eat() {
        // do something
    }
}

class Mammal  {
    breathe() ： string {
        return "I'm alive!";
    }
}

class WingedAnimal extends Animal {
    fly() {
        // do something
    }
}

// 错误子类只能继继承一个父类
class Bat extends  WingedAnimal, Mammal {

}