/** @type {import("eslint").Linter.Config} */
const config = {
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        es2021: true,
        node: true,
        commonjs: true,
        jest: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "react/prop-types": "off",
        "react/jsx-key": "warn",
        "react/display-name": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-unknown-property": "warn",
        "react/jsx-no-target-blank": "warn",
        "react/no-children-prop": "warn",
        "react/jsx-no-undef": "warn",
        "react/no-string-refs": "warn",
        "no-const-assign": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        semi: ["error", "always"],
        quotes: ["warn", "double"],
        "no-unused-vars": [
            "warn",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
            },
        ],
        curly: ["warn", "all"],
        "space-infix-ops": [
            "error",
            {
                int32Hint: false,
            },
        ],
        "comma-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "brace-style": "warn",
        "no-debugger": "error",
        "no-duplicate-imports": "warn",
        "no-prototype-builtins": "warn",
        "no-useless-escape": "warn",
        "no-inner-declarations": "warn",
        "react/no-unescaped-entities": "warn",
        "no-case-declarations": "warn",
        "no-empty": "warn",
        "no-empty-pattern": "warn",
        "no-irregular-whitespace": "warn",
        "no-dupe-keys": "warn",
        "no-fallthrough": "warn",
        "no-self-assign": "warn",
        indent: "off",
    },
    overrides: [
        // allows .cjs files to use global named module, otherwise
        // it is undefined
        {
            files: ["src/**/*.cjs"],
            globals: {
                module: true,
            },
        },
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
};

module.exports = config;
