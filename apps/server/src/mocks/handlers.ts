// import { http, HttpResponse } from "msw";
//
// type Params = Record<string, string>;
// type RequestBody = Record<string, string>;
// type ResponseBody = {
//   id: string;
//   firstName: string;
//   lastName: string;
// };
// type Path = "/user";
//
// export const handler = [
//   http.get<Params, RequestBody, ResponseBody, Path>("/user", () => {
//     return HttpResponse.json({
//       id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
//       firstName: "John",
//       lastName: "Maverick",
//     });
//   }),
// ];

// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/posts", () => {
    console.log('Captured a "GET /posts" request');

    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.post("/posts", () => {
    console.log('Captured a "POST /posts" request');
  }),
  http.delete("/posts/:id", ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`);
  }),
];
