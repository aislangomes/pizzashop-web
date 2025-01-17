import { http, HttpResponse } from 'msw'

import {
  GetOderDetailsResponse,
  GetOrderDetailsParams,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123123123123',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 2900,
        product: { name: 'Pizza Peperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2100,
        product: { name: 'Pizza Marguerita' },
        quantity: 2,
      },
    ],
  })
})
