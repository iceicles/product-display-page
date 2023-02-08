import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MediaGallery from '../components/MediaGallery/MediaGallery'
import ProductBuyBox from '../components/ProductBuyBox/ProductBuyBox'
import ProductFeatureList from '../components/ProductFeatureList/ProductFeatureList'
import ProductPageInit from '../helpers/pageInit/productPageInit'

export const cmsComponentMap: {
    [key: string]: React.FC<any>
} = {
    Header,
    Breadcrumbs,
    MediaGallery,
    ProductBuyBox,
    ProductFeatureList,
    Footer,
    ProductPageInit,
}
