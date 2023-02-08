// Need to use the React-specific entry point to import createApi
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { customFetchBaseQueryError } from '../../redux/models/error.interface'
import { iProductData } from '../../redux/models/product.interface'

// Headers
const SERVICE_CLIENT = 'ctr/web'
const SERVICE_VERSION = 'ctc-dev2'
const API_SUB_KEY = '263bc901e3cc4c20a8c41ff0fc03d9cc'
const BASE_SITE_ID = 'CTR'
const BANNER_ID = 'CTR'

// API Paths & Query Params
const API_BASE_URL = 'https://apim-nprd.canadiantire.ca'
const API_ENDPOINTS_PRODUCT_DETAILS = '/public/qa2/v1/product/api/v1/product/productFamily'
const LANGUAGE = 'en_CA'
const BASE_STORE_ID = 'CTR'
const PREFERRED_STORE = '299'

// Define a service using a base URL and expected endpoints
// Casting fetchBaseQuery allows definition of custom errors
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: headers => {
            headers.set('service-client', SERVICE_CLIENT)
            headers.set('service-version', SERVICE_VERSION)
            headers.set('Ocp-Apim-Subscription-Key', API_SUB_KEY)
            headers.set('baseSiteId', BASE_SITE_ID)
            headers.set('bannerid', BANNER_ID)
            return headers
        }
    }) as BaseQueryFn<string | FetchArgs, unknown, customFetchBaseQueryError, {}>,
    endpoints: builder => ({
        getProductDetails: builder.query<iProductData, string>({
            query: productCode => {
                return {
                    url: `${API_ENDPOINTS_PRODUCT_DETAILS}/${productCode}`,
                    params: {
                        baseStoreId: BASE_STORE_ID,
                        lang: LANGUAGE,
                        storeId: PREFERRED_STORE,
                    },
                }
            },
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductDetailsQuery } = productApi