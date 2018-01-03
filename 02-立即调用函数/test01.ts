var bar = 0; // 全局的

(function (){
   var foo : number = 0; //
   bar = 1;
   console.log(bar);
   console.log(foo);
})();

console.log(bar);
console.log(foo);