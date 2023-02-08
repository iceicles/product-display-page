import React from 'react'
import '../../styles/components/MediaGallery/MediaGallery.scss'
import { useProduct } from '../../hooks/use-product'

/**
 * MediaGallery component
 * @return {JSX.Element} returns MediaGallery component
 */
const MediaGallery: React.FC = () => {
    const product = useProduct()

    return (
        <>
            {product && product?.images ? (
                <img
                    src={product?.images[0].url}
                    alt={product?.images[0].altText}
                    height="400px"
                    width="400px"
                    className="media-gallery__container"></img>
            ) : <div className="media-gallery__skeleton"></div>
        }
        </>
    )
}

export default MediaGallery
