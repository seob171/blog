/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.19
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  User
} from '.././model'

export const getCreateUsersWithListInputResponseMock = (overrideResponse: Partial< User > = {}): User => ({email: faker.helpers.arrayElement([faker.word.sample(), undefined]), firstName: faker.helpers.arrayElement([faker.word.sample(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), lastName: faker.helpers.arrayElement([faker.word.sample(), undefined]), password: faker.helpers.arrayElement([faker.word.sample(), undefined]), phone: faker.helpers.arrayElement([faker.word.sample(), undefined]), username: faker.helpers.arrayElement([faker.word.sample(), undefined]), userStatus: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getLoginUserResponseMock = (): string => (faker.word.sample())

export const getGetUserByNameResponseMock = (overrideResponse: Partial< User > = {}): User => ({email: faker.helpers.arrayElement([faker.word.sample(), undefined]), firstName: faker.helpers.arrayElement([faker.word.sample(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), lastName: faker.helpers.arrayElement([faker.word.sample(), undefined]), password: faker.helpers.arrayElement([faker.word.sample(), undefined]), phone: faker.helpers.arrayElement([faker.word.sample(), undefined]), username: faker.helpers.arrayElement([faker.word.sample(), undefined]), userStatus: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})


export const getCreateUserMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<User> | User)) => {
  return http.post('*/user', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getCreateUsersWithListInputMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<User> | User)) => {
  return http.post('*/user/createWithList', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCreateUsersWithListInputResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getLoginUserMockHandler = (overrideResponse?: string | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<string> | string)) => {
  return http.get('*/user/login', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getLoginUserResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getLogoutUserMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<void> | void)) => {
  return http.get('*/user/logout', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getGetUserByNameMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<User> | User)) => {
  return http.get('*/user/:username', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetUserByNameResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateUserMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/user/:username', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteUserMockHandler = (overrideResponse?: unknown | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<unknown> | unknown)) => {
  return http.delete('*/user/:username', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}
export const getUserMock = () => [
  getCreateUserMockHandler(),
  getCreateUsersWithListInputMockHandler(),
  getLoginUserMockHandler(),
  getLogoutUserMockHandler(),
  getGetUserByNameMockHandler(),
  getUpdateUserMockHandler(),
  getDeleteUserMockHandler()
]
