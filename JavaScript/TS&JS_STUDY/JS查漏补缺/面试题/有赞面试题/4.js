var foo = {
  bar: function () {
      console.log(this);   // [Arguments] { '0': [Function: bar] }
      return this.baz;
  },
  baz: 1
};

(function () {
  return typeof arguments[0]();  // undefined
})(foo.bar);