import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    input: "src/index.js",
    output: {
        file: "api/map.js",
        format: "esm",
    },
    plugins: [nodeResolve()],
    external: ["axios"],
};
