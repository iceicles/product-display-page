import React, { Suspense, useMemo, useState } from 'react'
import '../../styles/components/ProductFeatureList/ProductFeatureList.scss'
import { ProductFeatureListProps } from './ProductFeatureList.types'
import { useProduct } from '../../hooks/use-product'
import { iFeatureBullet } from '../../redux/models/product.interface'
import Button from '../Button/Button'

// Code Splitting - lazily import PokemonFeature component
const PokemonFeature = React.lazy(() => import('../PokemonFeature/PokemonFeature'))

/**
 * ProductFeatureList component
 * @return {JSX.Element} returns ProductFeatureList component
 */
const ProductFeatureList: React.FC<ProductFeatureListProps> = () => {
    const product = useProduct()

    const [showPokemonComponent, setShowPokemonComponent] = useState(false)

    // state to toggle pokemon component to demonstrate code splitting
    const toggleShowPokemonComponent = () => {
        setShowPokemonComponent(!showPokemonComponent)
    }

    // button emoji cuz why not
    let togglePokemonComponentBtnEmoji = useMemo(() => {
        return showPokemonComponent ? '🌞' : '🌚'
    }, [showPokemonComponent])

    return (
        <>
            <div className="product-features__container">
                <h2>Features</h2>
                <ul className="product-features__list">
                    {product?.featureBullets.map((feature: iFeatureBullet, index: number) => (
                        <li key={index} className="product-features__item">
                            {feature.description}
                        </li>
                    ))}
                </ul>
            </div>
            <Button
                label={`Toggle Pokemon Component ${togglePokemonComponentBtnEmoji}`}
                onClick={toggleShowPokemonComponent}></Button>
            {/* Code Splitting - */}
            <Suspense
                fallback={
                    <>
                        Loading Pokemon Component. One Sec...{' '}
                        <span role="img" aria-label="eyes">
                            🙄
                        </span>
                    </>
                }>
                {showPokemonComponent ? <PokemonFeature /> : null}
            </Suspense>
        </>
    )
}

export default ProductFeatureList
