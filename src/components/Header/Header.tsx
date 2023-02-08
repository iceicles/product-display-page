import React from 'react'
import '../../styles/components/Header/Header.scss'
import PencilBanner from '../PencilBanner/PencilBanner'

/**
 * Button component
 * @return {JSX.Element} returns Button component
 */
const Header: React.FC = () => {
    return (
        <>
            <PencilBanner title="Made for Life in Canada"></PencilBanner>
            <div className="header-container">
                <div className="cmp-container aem-Grid aem-Grid--12">
                    <img
                        src="/assets/ct-brandmark-standard-primary-rgw-pos-hex.svg"
                        className="header-container__logo"
                        alt="Canada's Store"
                    />
                </div>
            </div>
        </>
    )
}

export default Header
