import React from 'react'
import '../../styles/components/ProductBuyBox/ProductBuyBox.scss'
import Button from '../Button/Button'
import { useProduct } from '../../hooks/use-product'

/**
 * MediaGallery component
 * @return {JSX.Element} returns MediaGallery component
 */
const ProductBuyBox: React.FC = () => {
    const product = useProduct()

    return (
        <div className="product-buybox-container">
            <p className="product-buybox__brand">{product?.brand.label}</p>
            <h1>{product?.name}</h1>
            <p className="product-buybox__sku">{product?.code}</p>
            {/* <ProductRating></ProductRating> */}
            {/* <ProductPrice></ProductPrice> */}
            {/* <ProductVariantSelector></ProductVariantSelector> */}
            {/* <ProductQuantitySelector></ProductQuantitySelector> */}
            <Button label="Add to Cart"></Button>
        </div>
    )
}

export default ProductBuyBox
