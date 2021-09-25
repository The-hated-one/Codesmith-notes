const matt = {
  name: "matt",
  shout: function () {
    console.log(this.name);
  },
};
matt.shout();

const kim = {
  name: "kim",
  shout: matt.shout
};
kim.shout();

const who = kim.shout;
who();

