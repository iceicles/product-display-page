import React from 'react'
import '../../styles/components/Footer/Footer.scss'
import { FooterProps } from './Footer.types'

/**
 * Button component
 * @return {JSX.Element} returns Button component
 */
const Footer: React.FC<FooterProps> = ({ ...props }) => {
    // const title = props.title
    return (
        <div className="footer-container">
            <div className="cmp-container aem-Grid aem-Grid--1">
                <hr className="separator__dark no-gutter aem-GridColumn"></hr>
                <div className="footer__row aem-Grid aem-Grid-4 no-gutter aem-GridColumn">
                    <div className="aem-GridColumn">
                        <h3>Link Title</h3>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className="aem-GridColumn">
                        <h3>Link Title</h3>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className="aem-GridColumn">
                        <h3>Link Title</h3>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                    <div className="aem-GridColumn">
                        <h3>Link Title</h3>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__row no-gutter aem-GridColumn">
                    <img src="/assets/ct-brandmark-canstore-primary-hor-1-rgw-pos-hex.svg" className="footer__logo" alt="Canada's Store" />
                    <p className="footer__copywrite">© 2022 Copyright Canadian Tire Corporation. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

// Header.defaultProps = {
//     title: 'Default Title',
// }

// Header.propTypes = {
//     title: PropTypes.string,
// }

export default Footer
