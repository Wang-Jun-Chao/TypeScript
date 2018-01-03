var bar = 0; // 全局的

(function (global){
   var foo : number = 0; //
   bar = 1;
   console.log(global.bar);
   console.log(foo);
})(this);

console.log(bar);
console.log(foo);