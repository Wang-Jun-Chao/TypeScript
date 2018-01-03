
class Mammal2  {
    breathe() : string  {
        return "I'm alive!";
    }
}

class WingedAnimal2 {
    fly() : string {
        return "I can fly";
    }
}

class Bat2 implements  WingedAnimal2, Mammal2 {
    fly: () => string;
    breathe : ()=> string;
}