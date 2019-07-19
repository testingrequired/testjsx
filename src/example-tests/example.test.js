import TestJsx from "../index";

export default () => (
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
                {() => set("value", get("value") + incrementBy)}
              </beforeEach>

              <it should="be one">
                {() => <assert value={get("value")} equals={1} />}
              </it>

              <describe description="increment again">
                {() => (
                  <>
                    <beforeEach>
                      {() => set("value", get("value") + incrementBy)}
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
