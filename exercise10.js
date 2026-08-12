const obj = {
  name: "Ada",
  regularFn: function () {
    console.log(this.name);  // "Ada" — this = obj
  },
  arrowFn: () => {
    console.log(this.name);  // undefined — arrow doesn't bind its own 'this'
  }
};
