const nodes = [];

const fragmentSymbol = Symbol("TestJsxFragmentSymbol");

class TestJsx {
  static h(element, props, children) {
    switch (element) {
      case this.Fragment:
        debugger;
        break;

      case "describe":
        debugger;

        if (typeof children === "function") {
          const { description, ...propsData } = props;

          debugger;

          return children({ ...propsData, set, get });

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

function getNodes() {
  return (
    <describe description="Test suite" value incrementBy={1}>
      {({ value, set, get, incrementBy }) => (
        <>
          <beforeEach>{() => set("value", 0)}</beforeEach>

          <it should="be zero">
            {() => <assert value={get("value")} equals={0} />}
          </it>

          <describe description="increment">
            {() => (
              <>
                <beforeEach>
                  {() =>
                    console.log(
                      `incrementing ${value} by ${incrementBy} to equal ${value +
                        incrementBy} `
                    ) && set("value", value + incrementBy)
                  }
                </beforeEach>

                <it should="be one">
                  {() => <assert value={get("value")} equals={1} />}
                </it>

                <describe description="increment again">
                  {() => (
                    <>
                      <beforeEach>
                        {() => set("value", value + incrementBy)}
                      </beforeEach>

                      <it should="be two">
                        {() => <assert value={get("value")} equals={2} />}
                      </it>
                    </>
                  )}
                </describe>
              </>
            )}
          </describe>
        </>
      )}
    </describe>
  );
}

const testNodes = getNodes();

console.log(JSON.stringify(testNodes, null, 2));
