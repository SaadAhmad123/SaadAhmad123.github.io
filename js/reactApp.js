function PreLoader(props){
    return (
        <div id="loader-wrapper">
            <div id="loader"></div>
            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
        </div>
    );
}

function MainImageTile(props){
    const personalAttributes = props.personalAttributes;
    return (
            <section className="topleft" style= {{backgroundImage: "url("+props.image+")"}}>
                <div className="bl-box row valign-wrapper">
                    <div className="row valign-wrapper">
                        <div className="title-heading">
                            <div className="selector uppercase" id="selector">
                                <h3 className="ah-headline p-none m-none">
                                    <span className="font-weight-300">Hi There ! I'm&nbsp;</span>
                                    <span className="ah-words-wrapper">
										<b className="is-visible">{" " + props.name}</b>
                                        {
                                            personalAttributes.map((attr, idx)=>
                                                <b key={attr+idx.toString()}>
                                                    {attr}
                                                </b>
                                            )
                                        }
									</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}


function TileTitle(props){
    return(
        <div className="bl-box valign-wrapper">
            <div className="page-title center-align">
                <span className="title-bg">{props.backgroundTitle}</span>
                <h2 className="center-align">
                    <span data-hover={props.titleText1}>{props.titleText1}</span>
                    <span data-hover={props.titleText2}>{props.titleText2}</span>
                </h2>
            </div>
        </div>
    );
}

class AboutTile extends React.Component{
    render(){
        return (
        <section>
            <TileTitle backgroundTitle="RESUME" titleText1="About&nbsp;" titleText2="ME"/>
        </section>
        );
    }
}

class PortfolioTile extends React.Component{
    render(){
        return(
            <section>
                <TileTitle backgroundTitle="WORKS" titleText1="MY&nbsp;" titleText2="PORTFOLIO"/>
            </section>
        );
    }
}

class ContactTile extends React.Component{
    render(){
        return(
            <section>
                <TileTitle backgroundTitle="CONTACT" titleText1="GET&nbsp;" titleText2="IN TOUCH"/>
            </section>
        );
    }
}








class MainContentPage extends React.Component{
    render(){
        return (
            <div className="wrapper">
                <div id="bl-main" className="bl-main">
                    <MainImageTile name="Saad Ahmad" 
                                    personalAttributes={["an Engineer", "a Problem Solver", "a Perfectionist"]}
                                    image = "images/main-photo.jpg"
                                    />
                    <AboutTile/>
                    <PortfolioTile/>
                    <ContactTile />
                </div>
            </div>
        );
    }
}

function makeReactApp(){
    // This function contains all the markup
    // which is to be interpreted by babel.
    const markup = [
        (<PreLoader />),
        (<MainContentPage />),
    ]
        
    

    root = document.getElementById("root");
    ReactDOM.render(
        markup,
        root
    );
}


