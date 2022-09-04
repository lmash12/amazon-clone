import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="top">Back to top</div>
      <div className="center">
         <div className="footer-list">
         <div className="About-us">
            <table>
            
                <tr>
                  <ul>
                <h5>About Us</h5>
                    <li><a href="#">About Amazon</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Amazon Devices</a></li>
                    <li><a href="#">Amazon Sciences</a></li>
                    <li><a href="#">Investor Relations</a></li>
                  </ul>
                </tr>
              
            </table>
          </div>
          <div className="Careers">
          <table>
              <tr>
                <ul>
              <h5>Careers</h5>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Learn More</a></li>
                </ul>
              </tr> 
            </table>
          </div>
          <div className="press-release">
          <table>
              <tr>
                <ul>
              <h5>Press Releases</h5>
                  <li><a href="#">January 2021</a></li>
                  <li><a href="#">June 2021</a></li>
                  <li><a href="#">December 2021</a></li>
                  <li><a href="#">January 2022</a></li>
                </ul>
              </tr>
            </table>
          </div>
          <div className="amazon-cares">
          <table>
            <tr>
              <ul>
                <h5>Amazon Cares</h5>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Your Orders</a></li>
                <li><a href="#">Amazon and Covid-19</a></li>
                <li><a href="#">Shipping Rates and Policies</a></li>
                <li><a href="#">Returns and Replacements</a></li>
                <li><a href="#">Manage Your Content and Devices</a></li>
                <li><a href="#">Amazon Assistant</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </tr>
            </table>
          </div>
         </div>
      </div>
    </div>
  );
}
export default Footer;
