import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./features/cart/cartSlice"
import booksApi from "./features/books/booksApi"
import ordersApi from "./features/orders/ordersApi"
import quotesApi from "./features/quotes/quotesApi"


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [booksApi.reducerPath]: booksApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [quotesApi.reducerPath]: quotesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware, quotesApi.middleware)
    
})