import React from 'react'
import '../../styles/components/Breadcrumbs/Breadcrumbs.scss'
import { BreadcrumbsProps } from './Breadcrumbs.types'
import { iCrumb } from '../../redux/models/product.interface'
import { useProduct } from '../../hooks/use-product'

/**
 * Breadcrumbs component
 * @return {JSX.Element} returns Breadcrumbs component
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ ...props }) => {
    const product = useProduct()

    return (
        <ul className="nav__breadcrumbs">
            {product?.breadcrumbList.map((value: iCrumb, index: number, array: iCrumb[]) => {
                if (index < (array.length-1)) {
                    return (
                        <li key={index} className="nav__breadcrumbs--item">
                            <a href={value.url}>{value.label}</a>
                        </li>
                    )
                } else {
                    return (
                        <li key={product?.breadcrumbList.length} className="nav__breadcrumbs--item">
                            {product?.name}
                        </li>
                    )
                }
            })}
        </ul>
    )
}

export default Breadcrumbs
