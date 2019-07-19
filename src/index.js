const nodes = [];

const fragmentSymbol = Symbol("TestJsxFragmentSymbol");

export default class TestJsx {
  static h(element, props, children) {
    switch (element) {
      case this.Fragment:
        debugger;
        break;

      case "describe":
        debugger;

        if (typeof children === "function") {
          const { description, ...propsData } = props;

          const mappedPropsData = Object.keys(propsData).reduce((arr, key) => {
            let mappedValue;

            if (propsData[key] !== true && propsData[key] !== false) {
              mappedValue = propsData[key];
            }

            return { ...arr, [key]: mappedValue };
          }, {});

          debugger;

          return children({ ...mappedPropsData, set, get });

          function set(key, newValue) {
            debugger;
            propsData[key] = newValue;
          }

          function get(key) {
            debugger;
            return propsData[key];
          }
        }

        debugger;

        return children;

      case "beforeEach":
        debugger;
        return children();

      case "it":
        debugger;
        if (typeof children === "function") {
          debugger;
          return children();
        }

        debugger;

        return children;

      case "assert":
        debugger;
        break;

      default:
        debugger;
        throw new Error(
          `Invalid element '${element}' with props ${JSON.stringify(props)}`
        );
    }
  }

  static get Fragment() {
    return fragmentSymbol;
  }

  static get nodes() {
    return [...nodes];
  }
}
