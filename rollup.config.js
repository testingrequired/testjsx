import babel from "rollup-plugin-babel";

export default {
  input: "testjsx.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [babel()]
};
