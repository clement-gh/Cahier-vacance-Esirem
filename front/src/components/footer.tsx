import React from "react";
import "./footer.css"

export class Footer extends React.Component {
    render(): React.ReactNode {
        return (
            <footer className="footer_div">
                <div className="footer_imgs_emplacement">
                    <a href="https://esirem.u-bourgogne.fr/"><img src="./images/esirem_logo.png" alt="logo_esirem"></img></a>
                    <a href="https://www.u-bourgogne.fr/"><img src="./images/logoUB.png" alt="logo_ub"></img></a>
                </div>
                <div className="footer_text_emplacement">
                    <ul className="footer_list">             
                        <li className="footer_list_item"><a href="/cours">Cours</a></li>               
                        <li className="footer_list_item"><a href="/matieres">Matières</a></li>
                        <li className="footer_list_item"><a href="/about">A propos</a></li>
                        <li className="footer_list_item"><a href="/licence">Licence</a></li>
                        <li className="footer_list_item"><a href="/rgpd">RGPD</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}