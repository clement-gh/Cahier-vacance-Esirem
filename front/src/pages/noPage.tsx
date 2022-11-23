import React from "react";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import "./noPage.css";

//page who display 404 when we are unable to find the requested page
export class NoPage extends React.Component {
    render(): React.ReactNode {
        return(
            <main className="nopage">
                <NavBar/>
                <div className="nopage_centraldiv">
                    <img className="nopage_image" src="/images/undraw_Page_not_found_re_e9o6.png" alt="404"/>
                </div>
                <Footer/>
            </main>
        );
    }    
}