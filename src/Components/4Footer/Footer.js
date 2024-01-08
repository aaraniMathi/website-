import './Footer.css'

const Footer=()=>{
    return(
       <div className="footer_site">
          <div className="row row-one aa">
            <a href="#">
            <img src="./image/KFC.png" alt="img"></img>
            </a>
            <div className="fotter_items">
                <div className="ul-title">
                    <span role="heading" className="header-text-footer"> Legal</span>
                    <ul className="footer_link">
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                        <li>Caution Notice</li>
                    </ul>
                </div>
            </div>
            <div className="fotter_items">
                <div className="ul-title">
                    <span role="heading" className="header-text-footer">KFC India</span>
                    <ul className="footer_link">
                        <li>About KFC</li>
                        <li>KFC Care</li>
                        <li>Careers</li>
                        <li>Our Golden Past</li>
                    </ul>
                </div>
            </div>
            <div className="fotter_items">
                <div className="ul-title">
                    <span role="heading" className="header-text-footer">KFC Food</span>
                    <ul className="footer_link">
                        <li>Menu</li>
                        <li>Order Lookup</li>
                        <li>Gift Card</li>
                        <li>Nutrition & Allergen</li>
                    </ul>
                </div>
            </div>
            <div className="fotter_items">
                <div className="ul-title">
                    <span role="heading" className="header-text-footer">Support</span>
                    <ul className="footer_link">
                        <li>Get Help</li>
                        <li>Contact Us</li>
                        <li>KFC Feedback</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="colum">
            <p className="copy">Copyright © KFC Corporation 2023 All Rights Reserved</p>
          </div>

       </div>
    )
}
export default Footer;