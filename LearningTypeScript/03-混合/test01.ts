class Animal {
    eat() {
        // do something
    }
}

class Mammal extends Animal {
    breathe() {
        // do something
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