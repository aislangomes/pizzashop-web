import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/menaged-rastaurant', () => {
  return HttpResponse.json({
    id: 'restaurant-id',
    name: 'Pizza Shop',
    description: 'Custom Restaurant description',
    managedId: 'custom-uder-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
