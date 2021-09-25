function functionBind(func, context) {
  context.boundFunc = func;
  return function () {
    return context.boundFunc();
  };
}

const matt = {
  name: "matt",
  shout: function () {
    console.log(this.name);
  },
};
matt.shout()
const kim = { name: "kim" };
let boundShout = functionBind(matt.shout, kim);
boundShout();
boundShout = matt.shout;
boundShout();

