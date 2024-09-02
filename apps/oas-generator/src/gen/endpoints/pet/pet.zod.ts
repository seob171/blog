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
  z as zod
} from 'zod'

/**
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
export const updatePetBody = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

export const updatePetResponse = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

/**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
export const addPetBody = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

export const addPetResponse = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatusQueryParams = zod.object({
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

export const findPetsByStatusResponseItem = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})
export const findPetsByStatusResponse = zod.array(findPetsByStatusResponseItem)

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
export const findPetsByTagsQueryParams = zod.object({
  "tags": zod.array(zod.string()).optional()
})

export const findPetsByTagsResponseItem = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})
export const findPetsByTagsResponse = zod.array(findPetsByTagsResponseItem)

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetByIdParams = zod.object({
  "petId": zod.number()
})

export const getPetByIdResponse = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithFormParams = zod.object({
  "petId": zod.number()
})

export const updatePetWithFormQueryParams = zod.object({
  "name": zod.string().optional(),
  "status": zod.string().optional()
})

/**
 * @summary Deletes a pet
 */
export const deletePetParams = zod.object({
  "petId": zod.number()
})

export const deletePetHeader = zod.object({
  "api_key": zod.string().optional()
})

/**
 * @summary uploads an image
 */
export const uploadFileParams = zod.object({
  "petId": zod.number()
})

export const uploadFileQueryParams = zod.object({
  "additionalMetadata": zod.string().optional()
})

export const uploadFileResponse = zod.object({
  "code": zod.number().optional(),
  "type": zod.string().optional(),
  "message": zod.string().optional()
})

