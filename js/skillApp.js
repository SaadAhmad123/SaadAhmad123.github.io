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

function SkillItem(props){
    var skillStars = [];
    for (var i = 0; i < props.stars; i++){
        skillStars.push(<i className="fa fa-star" style={{color:"#ffb400"}}>&nbsp;</i>);
    }
    return (
        <div className="col s6 m4 l2" style={{ padding:'8px' }}>
            <div className="expPageItemCard" style={{ paddingTop:'12px',paddingBottom:'24px' }}>
                <div className="">
                    <h6 className="uppercase" style={{ color:'white',paddingBottom:'0px' }}>{props.skill}</h6>
                    <p style={{ padding:'0px', margin:'0px' }}>
                        {skillStars}
                    </p>
                </div>
            </div>
        </div>
    );
}

class ExpPage extends React.Component{
    render(){
        return (
            <div>
                <div style={{ paddingTop:'100px', paddingBottom:'100px' }}>
                    <a href="/" style={{ cursor:'pointer' }}>
                        <TileTitle backgroundTitle="RESUME" titleText1="MY" titleText2="SKILLS"/>
                    </a>
                </div>
                <section>
                    <div className="container">
                        <div className="row">
                            {skillsList.map((skill, idx) => <SkillItem skill={skill.skill} stars={skill.stars}/>)}
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