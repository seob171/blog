import { defineConfig } from "orval";

export default defineConfig({
  petstore: {
    output: {
      mode: "tags-split", // 파일 생성방법 // 단일로 만들건지 분기할건지 등
      target: "src/petstore.ts", // 파일 생성위치
      schemas: "src/model", // 모델 생성위치
      mock: true, // mocks 생성 여부 (기본 generator는 MSW)
      // baseUrl: "/api/v2",
      baseUrl: "https://petstore3.swagger.io/api/v3",
      client: "react-query", // 클라이언트
      httpClient: "fetch", // http 클라이언트
      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: "nextId",
          options: {
            staleTime: 60_000,
          },
        },
      },
    },
    input: {
      target: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
  },
  petstoreZod: {
    output: {
      mode: "tags-split",
      client: "zod",
      target: "src/gen/endpoints",
      fileExtension: ".zod.ts",
    },
    input: {
      target: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
  },
});
