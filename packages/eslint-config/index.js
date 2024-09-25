const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true, // 현재 폴더(root)의 린트 설정파일만 적용함 (상위에 eslintrc 파일이 있어도 참고하지 않음)
  plugins: [
    // ESLint에서 기본 제공하는 규칙(rule)외에 추가할 규칙
    "import", // import구문 자동정리 (eslint-plugin-import 패키지 설치 필요. --fix 옵션 필요)
    "@typescript-eslint", // typescript 린트
    "react", // react 린트
    "prettier", // prettier 린트
    "@tanstack/query", // tanstack-query 린트
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  extends: [
    // 다른 사람들이 만든 ESLint 설정옵션 가져오기 (Airbnb가 대표적)
    "airbnb", // airbnb가 만든 eslint 설정옵션 (풀네임: eslint-config-airbnb. eslint-config- 생략가능)
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended", // eslint에서 추천하는 설정
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    // 규칙을 하나하나 세세하게 제어하기 위해 사용 (보통 extends 옵션에 의해 설정된 규칙을 덮어쓰고 싶을 때 사용)
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".ts", ".tsx"] }], // jsx 파일 확장자를 .ts, .tsx로 한정. 위반 시 경고(warn)
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-shadow": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ], // 라이브러리 패키지는 제외하고 import문에 확장자 없을 시 에러. 에러시 수동수정 필요 (TypeScript에서는 확장자 붙이는 것을 권장)
    "no-console": "off", // airbnb 규칙에선 no-console 규칙을 어기면 warn이나, error로 설정함.
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        some: ["nesting", "id"],
      },
    ],
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "object",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
  parser: "@typescript-eslint/parser", // ESLint가 이해할수있는 Javascript 문법으로 파싱해주는 파서 설정 (typescript 문법을 Javascript로 변환하는 파서 추가)
  parserOptions: {
    // 파싱하기 위한 Javascript 옵션을 지정
    ecmaVersion: "latest", // 최신 ECMAScript 버전 사용
    sourceType: "module", // parser의 export 형태 설정 (module 방식 사용)
    ecmaFeatures: {
      // ECMAScript의 언어 확장 기능을 설정
      jsx: true, // jsx 코드 린트하도록 설정
    },
    project: "./tsconfig.json", // 파싱할 프로젝트 경로 제공. (TypeScript 인 경우)
  },
  env: {
    // 활성화할 환경 지정 (eslint가 전역 변수를 인식하는 구간)
    browser: true, // 브라우저에서 접근가능 전역 객체 등록 (document나 window가 인식되게 함)
    node: true, // NodeJs에서 접근가능 전역 객체 등록
    es6: true, // es6에서 접근가능 전역 객체 등록 (es6에서 추가된 전역변수 사용가능)
  },
  ignorePatterns: ["build", "dist", "public"], // 린트 무시할 파일/폴더 (기본적으로 node_modules 폴더나 .로 시작하는 설정 파일은 무시)
};
