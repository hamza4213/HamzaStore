// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "expo",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  plugins: ["reactotron", "prettier", "import"],
  rules: {
    // 🔹 Prettier
    "prettier/prettier": ["error", { endOfLine: "auto" }],

    // 🔹 TypeScript
    "@typescript-eslint/array-type": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-require-imports": 0,
    "@typescript-eslint/no-empty-object-type": 0,

    // 🔹 ESLint Core
    "no-use-before-define": 0,
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react",
            importNames: ["default"],
            message: "Import named exports from 'react' instead.",
          },
          {
            name: "react-native",
            importNames: ["SafeAreaView"],
            message: "Use the SafeAreaView from 'react-native-safe-area-context' instead.",
          },
          {
            name: "react-native",
            importNames: ["Text", "Button", "TextInput"],
            message: "Use the custom wrapper component from '@/components'.",
          },
        ],
      },
    ],

    // 🔹 React / React Native
    "react/prop-types": 0,
    "react-native/no-raw-text": 0,

    // 🔹 Reactotron
    "reactotron/no-tron-in-production": "error",

    // 🔹 ESLint Standard Overrides
    "comma-dangle": 0,
    "no-global-assign": 0,
    "quotes": 0,
    "space-before-function-paren": 0,

    // 🔹 Import order (main fix)
    "import/order": [
      "error",
      {
        "alphabetize": { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
        "groups": [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
        "pathGroups": [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-native",
            group: "external",
            position: "before",
          },
          {
            pattern: "expo{,-*}",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
        "pathGroupsExcludedImportTypes": ["react"],
      },
    ],
    "import/newline-after-import": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      alias: {
        map: [["@", "./"]],
        extensions: [".ts", ".js", ".jsx", ".tsx"],
      },
    },
    "react": {
      version: "detect",
    },
  },
}
