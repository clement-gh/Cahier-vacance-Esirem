import React from "react"
import "./error_pop_up.css"

type ErrorPopUpProps = {
    title: string,
    message: string,
    link: string,
    isDisplayed: boolean,
}

type ErrorPopUpState = {
    offsetY: number,
}

export class ErrorPopUp extends React.Component<ErrorPopUpProps, ErrorPopUpState>{
    constructor(props: ErrorPopUpProps) {
        super(props);
        this.state = {
            offsetY: 0,
        };
    }

    componentDidMount(): void {
        if(this.props.isDisplayed) {

        
            window.addEventListener("scroll", ()=> {
                this.setState({
                    offsetY: window.scrollY,
                })
            });
        }
    }

    render(): React.ReactNode {
        let displayClass = !this.props.isDisplayed ? "error_pop_up_not_displayed" : "";
        let ypos = window.innerHeight*0.4 + this.state.offsetY;
        return (
            <div className={"error_pop_up_display_result " + displayClass} style={{top: ypos}}>
                <h2 className="error_pop_up_display_title">{this.props.title}</h2>
                <p className="error_pop_up_display_message">{this.props.message}</p>
                <a className="error_pop_up_link" href={this.props.link}>Terminé</a>
            </div>  
        );
    }
}