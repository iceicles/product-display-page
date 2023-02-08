import React, { useEffect, useState } from 'react'
import { useGetProductDetailsQuery } from '../../services/ProductDetailService/product.service'
import { useAppSelector, useAppDispatch } from '../../hooks/use-typed-selector'
import { setCode } from '../../redux/slices/productDetails.slice'

const ProductPageInit: React.FC = () => {
    const dispatch = useAppDispatch()
    const { code } = useAppSelector(state => {
        return state.productDetails
    })
    const [skip, setSkip] = useState(true)
    const { data, isSuccess } = useGetProductDetailsQuery(code, { skip })
    const { isError, error } = useGetProductDetailsQuery('non-existent-pcode')

    useEffect(() => {
        dispatch(setCode('0431406p'))
        setSkip(false)
    }, [dispatch])

    useEffect(() => {
        if (isSuccess && data) {
            document.title = data.name
        }
    }, [isSuccess, data])

    useEffect(() => {
        if (isError && error) {
            // Error object still could be of type 'SerializedError', and isn't necessarily from CDS
            // By adding a check for the data property, we can infer the type as 'customFetchBaseQueryError'
            if ('data' in error) {
                console.log('Typed error:', error.data)
            }
        }
    }, [isError, error])

    return null
}

export default ProductPageInit
