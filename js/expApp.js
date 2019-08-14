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

function ExpItem(props){
    return (
        <div className="col s12 m6 l4" style={{ padding:'16px' }}>
            <div className="expPageItemCard">
                <div className="resume-content">
                    <h6 className="uppercase"><span>{props.job}</span></h6>
                    <span className="date"><i className="fa fa-calendar-o"></i>&nbsp;{props.timeSpan}</span>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}


class ExpPage extends React.Component{
    render(){
        return (
            <div>
                <div style={{ paddingTop:'100px', paddingBottom:'100px' }}>
                    <a href="/" style={{ cursor:'pointer' }}>
                        <TileTitle backgroundTitle="RESUME" titleText1="EXPER" titleText2="IENCE"/>
                    </a>
                </div>
                <section>
                    <div className="container">
                        <div className="row">
                            {
                                expList.map((exp, idx) => 
                                    <ExpItem 
                                        key={idx.toString()+"_kkk"} 
                                        job={exp.job}
                                        timeSpan={exp.timeSpan}
                                        text={exp.text}
                                    />
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


function makeReactApp(){
    const markup = [( <ExpPage />),];
    var root = document.getElementById("root");
    ReactDOM.render(markup,root);
}