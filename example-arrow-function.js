var names = ["Doug", "Ted", "Erik"]

// names.forEach(function(friend){
//   console.log(friend);
// });
//
// names.forEach((name)=>{
//   console.log('Hello ', name);
// });
//
// names.forEach((name)=> {console.log(name); console.log("does this work?");});
//
// var returnMe = (name)=> console.log(name+'!');
//
// names.forEach(returnMe);

var persons = {
  name: 'Doug',
  greet:
  function(){
    var that = this;
    names.forEach((name)=>{
      console.log(this.name + " says hi to " + name);
    });
    }
}
persons.greet();

// var add = function(a, b){return console.log(a+b);}
// add(9,4);
//
// var total = (a,b)=> a+b;
// console.log(total(9,4));
//
// var sum = (a,b)=>{return a+b;};
// console.log(sum(9,4));
