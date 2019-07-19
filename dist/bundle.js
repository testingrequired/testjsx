'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var nodes = [];
var fragmentSymbol = Symbol("TestJsxFragmentSymbol");

var TestJsx =
/*#__PURE__*/
function () {
  function TestJsx() {
    _classCallCheck(this, TestJsx);
  }

  _createClass(TestJsx, null, [{
    key: "h",
    value: function h(element, props, children) {
      switch (element) {
        case this.Fragment:
          console.log("fragment");
          break;

        case "describe":
          console.log("describe ".concat(JSON.stringify(props)));

          if (typeof children === "function") {
            var set = function set(key, newValue) {
              console.log("set ".concat(key, " to ").concat(newValue));
              propsData[key] = newValue;
              console.log("new propsData ".concat(JSON.stringify(propsData)));
            };

            var get = function get(key) {
              return propsData[key];
            };

            var description = props.description,
                propsData = _objectWithoutProperties(props, ["description"]);

            debugger;
            console.log("children is a function; running function");
            console.log("children ran with props: ".concat(JSON.stringify(propsData)));
            return children(_objectSpread2({}, propsData, {
              set: set,
              get: get
            }));
          }

          console.log("returning children");
          return children;

        case "beforeEach":
          console.log("running before each");
          return children();

        case "it":
          console.log("it ".concat(JSON.stringify(props)));

          if (typeof children === "function") {
            console.log("children is a function; running function");
            return children();
          }

          console.log("returning children");
          return children;

        case "assert":
          console.log("assert ".concat(JSON.stringify(props)));
          break;

        default:
          throw new Error("Invalid element '".concat(element, "' with props ").concat(JSON.stringify(props)));
      }
    }
  }, {
    key: "Fragment",
    get: function get() {
      return fragmentSymbol;
    }
  }, {
    key: "nodes",
    get: function get() {
      return [].concat(nodes);
    }
  }]);

  return TestJsx;
}();

function getNodes() {
  return TestJsx.h("describe", {
    description: "Test suite",
    value: true,
    incrementBy: 1
  }, function (_ref) {
    var value = _ref.value,
        set = _ref.set,
        get = _ref.get,
        incrementBy = _ref.incrementBy;
    return TestJsx.h(TestJsx.Fragment, null, TestJsx.h("beforeEach", null, function () {
      return set("value", 0);
    }), TestJsx.h("it", {
      should: "be zero"
    }, function () {
      return TestJsx.h("assert", {
        value: get("value"),
        equals: 0
      });
    }), TestJsx.h("describe", {
      description: "increment"
    }, function () {
      return TestJsx.h(TestJsx.Fragment, null, TestJsx.h("beforeEach", null, function () {
        return console.log("incrementing ".concat(value, " by ").concat(incrementBy, " to equal ").concat(value + incrementBy, " ")) && set("value", value + incrementBy);
      }), TestJsx.h("it", {
        should: "be one"
      }, function () {
        return TestJsx.h("assert", {
          value: get("value"),
          equals: 1
        });
      }), TestJsx.h("describe", {
        description: "increment again"
      }, function () {
        return TestJsx.h(TestJsx.Fragment, null, TestJsx.h("beforeEach", null, function () {
          return set("value", value + incrementBy);
        }), TestJsx.h("it", {
          should: "be two"
        }, function () {
          return TestJsx.h("assert", {
            value: get("value"),
            equals: 2
          });
        }));
      }));
    }));
  });
}

var testNodes = getNodes();
console.log(JSON.stringify(testNodes, null, 2));
