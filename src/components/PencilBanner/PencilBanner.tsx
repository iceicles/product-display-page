import React from 'react'
import '../../styles/components/PencilBanner/PencilBanner.scss'
import PropTypes from 'prop-types'
import { PencilBannerProps } from './PencilBanner.types'

/**
 * Button component
 * @return {JSX.Element} returns Button component
 */
const PencilBanner: React.FC<PencilBannerProps> = ({ ...props }) => {
    const title = props.title
    return (
        <div className="pencil-banner-container">
            <div className="cmp-container aem-Grid aem-Grid--8">
                <div className="aem-GridColumn--tablet--8 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--8 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                    <img src="/assets/canada-s-store-en.webp" className="pencil-banner-container__image" alt="Canadian Tire Logo" />
                </div>
                <div className="aem-GridColumn--tablet--8 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--8 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

PencilBanner.defaultProps = {
    title: 'Default Title',
}

PencilBanner.propTypes = {
    title: PropTypes.string,
}

export default PencilBanner
