import React from "react";
import "./footer.css"

export class Footer extends React.Component {
    render(): React.ReactNode {
        return (
            <footer className="footer_div">
                <div className="footer_imgs_emplacement">
                    <img src="./images/esirem_logo.png" alt="logo_esirem"></img>
                    <img src="./images/logoUB.png" alt="logo_ub"></img>
                </div>
                <div className="footer_text_emplacement">
                    <ul className="footer_list">             
                        <li className="footer_list_item">Cours</li>               
                        <li className="footer_list_item">Matières</li>
                        <li className="footer_list_item">A propos</li>
                        <li className="footer_list_item">Licence</li>
                        <li className="footer_list_item">RGPD</li>
                    </ul>
                </div>
            </footer>
        );
    }
}