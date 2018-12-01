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

function TileContentTitle(props){
    return(
        <div className="container page-title center-align">
            <h2 className="center-align">
                <span data-hover={props.titleText1}>{props.titleText1}</span>
                <span data-hover={props.titleText2}>{props.titleText2}</span>
            </h2>
            <span className="title-bg">{props.backgroundTitle}</span>
        </div>
    );    
}

function TileContentCloseBtn(props){
    return (
        <img alt="close" src="images/close-button.png" className="bl-icon-close"></img>
    );
}

function TileContentDivider(props){
    return (
        <div className="divider center-align">
            <span className="outer-line"></span>
            <span className={"fa " + props.icon} aria-hidden="true"></span>
            <span className="outer-line"></span>
        </div>
    );
}

function AboutTileInfo(props){
    return (
        <div className="row">
            <div className="col s12 m5 l4 xl3 profile-picture">
				<img src={props.image} className="responsive-img my-picture" alt="My Photo"/>
            </div>
            <div className="col s12 m7 l8 xl9 personal-info">
                <h6 className="uppercase"><i className="fa fa-user"></i> Personal Informations</h6>
				<div className="col m12 l7 xl7 p-none">
                    <p className="second-font">
                        {props.personalInfo}
                    </p>
                </div>
                <div className="col s12 m12 l6 p-none">
                    <ul className="second-font list-1">
                        <li><span className="font-weight-600">First Name: </span>{props.firstName}</li>
                        <li><span className="font-weight-600">Last Name: </span>{props.lastName}</li>
                        <li><span className="font-weight-600">Date of birth: </span>{props.DOB}</li>
                        <li><span className="font-weight-600">Nationality: </span>{props.nationality}</li>
						<li><span className="font-weight-600">Freelance: </span>{props.freelance}</li>
                    </ul>
                </div>
                <div className="col s12 m12 l6 p-none">
                    <ul className="second-font list-2">
                        <li><span className="font-weight-600">Phone: </span>{props.phone}</li>
                        <li><span className="font-weight-600">Address: </span>{props.address}</li>
                        <li><span className="font-weight-600">Email: </span>{props.email}</li>
                        <li><span className="font-weight-600">Spoken Langages: </span>{props.spokeLanguage}</li>
						<li><span className="font-weight-600">Skype: </span>{props.skype}</li>
                    </ul>
                </div>
                <a href="#" className="col s12 m12 l4 xl4 waves-effect waves-light btn font-weight-500">
					Download Resume <i className="fa fa-file-pdf-o"></i>
				</a>
				{/*<a href="blog-dark.html" className="col s12 m12 l4 xl4 btn btn-blog font-weight-500">
					My Blog <i className="fa fa-edit"></i>
				</a>*/}
            </div>
        </div>
    );
}

function AboutTileResumeMenu(props){
    return(
            <div className="resume-list col l4">
                <div className="resume-list-item is-active" data-index="0" id="resume-list-item-0">
                    <div className="resume-list-item-inner">
                        <h6 className="resume-list-item-title uppercase"><i className="fa fa-briefcase"></i> Experience</h6>
                    </div>
                </div>
                <div className="resume-list-item" data-index="1" id="resume-list-item-1">
                    <div className="resume-list-item-inner">
                        <h6 className="resume-list-item-title uppercase"><i className="fa fa-graduation-cap"></i> Education</h6>
                    </div>
                </div>
                <div className="resume-list-item" data-index="2" id="resume-list-item-2">
                    <div className="resume-list-item-inner">
                        <h6 className="resume-list-item-title uppercase"><i className="fa fa-star"></i> Skills</h6>
                    </div>
                </div>
            </div>        
    );
}

function ExpItem(props){
    // Strictly tied to the AboutTileResumeExperienceCard()
    return (
        <div>
            <div className="resume-content">
                <h6 className="uppercase"><span>{props.job}</span></h6>
                <span className="date"><i className="fa fa-calendar-o"></i>&nbsp;{props.timeSpan}</span>
                <p>{props.text}</p>
            </div>
            <span style={{height:"2px", width:"70px", marginBottom:"24px", display:"block", backgroundColor:"yellow"}}></span>
        </div>
    );
}

function AboutTileResumeExperienceCard(props){
    const expList = props.experienceList;
    return(
        <div className={"resume-card resume-card-" + props.dataIndex} data-index={props.dataIndex}>
            <div className="resume-card-header">
                <div className="resume-card-name">
                    <i className={"fa " + props.titleIcon}></i>
                    &nbsp;{props.title}
                </div>
            </div>
            <div className="resume-card-body experience">
                <div className="resume-card-body-container second-font">
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
        </div>
    );
}

function SkillItem(props){
    var skillStars = [];
    for (var i = 0; i < props.stars; i++){
        skillStars.push(<i className="fa fa-star" style={{color:"#ffb400"}}>&nbsp;</i>);
    }
    return (
        <div className="resume-content">
		    <h6 className="uppercase">{props.skill}</h6>
			<p>
                {skillStars}
            </p>
        </div>
    );
}

function AboutTileSkillsCard(props){
    var skillsList = props.skillsList;
    var half_length = Math.ceil(skillsList.length / 2);
    var skillsList1 = skillsList.splice(0,half_length);
    var skillsList2 = skillsList;
    return(
        <div className={"resume-card resume-card-" + props.dataIndex} data-index={props.dataIndex}>
            <div className="resume-card-header">
                <div className="resume-card-name">
                    <i className={"fa " + props.titleIcon}></i>
                    &nbsp;{props.title}
                </div>
            </div>
            <div className="resume-card-body experience">
                <div className="resume-card-body-container second-font">
                    <div className="row">
                        <div className="col s6">
                            {skillsList1.map((skill, idx) => <SkillItem skill={skill.skill} stars={skill.stars}/>)}
                        </div>
                        <div className="col s6">
                            {skillsList2.map((skill, idx) => <SkillItem skill={skill.skill} stars={skill.stars}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AboutTileResume(props){
    return(
        <div className="resume-container">
            <div className="container">
                <div className="valign-wrapper row">
                    <AboutTileResumeMenu />
                    <div className="col s12 m12 l8 resume-cards-container">
                        <div className="resume-cards">
                            <AboutTileResumeExperienceCard
                                dataIndex="0"
                                titleIcon="fa-briefcase" 
                                title="Experience"
                                experienceList={expList}
                            />
                            <AboutTileResumeExperienceCard
                                dataIndex="1"
                                titleIcon="fa-graduation-cap"
                                title="Education"
                                experienceList={educationList}
                            />
                            <AboutTileSkillsCard 
                                dataIndex="2"
                                titleIcon="fa-star"
                                title="Skills"
                                skillsList = {skillsList}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

class AboutTile extends React.Component{
    render(){
        return (
        <section>
            <TileTitle backgroundTitle="RESUME" titleText1="About&nbsp;" titleText2="ME"/>
            <div className="bl-content">
                <TileContentTitle backgroundTitle="RESUME" titleText1="About&nbsp;" titleText2="ME"/>
                <div className="container infos">
                    <TileContentDivider icon="fa-vcard"/>
                    <AboutTileInfo image={personalInfo.image}
                                personalInfo={personalInfo.intro}
                                firstName = {personalInfo.firstName}
                                lastName = {personalInfo.lastName}
                                DOB = {personalInfo.DOB}
                                nationality = {personalInfo.nationality}
                                freelance = {personalInfo.freelance}
                                phone = {personalInfo.phone}
                                address = {personalInfo.address}
                                email = {personalInfo.email}
                                spokeLanguage = {personalInfo.spokenLanguage}
                                skype = {personalInfo.skype}
                    />
                </div>
                <AboutTileResume />
            </div>
            
            <TileContentCloseBtn />
        </section>
        );
    }
}

class PortfolioTile extends React.Component{
    render(){
        return(
            <section>
                <TileTitle backgroundTitle="WORKS" titleText1="MY&nbsp;" titleText2="PORTFOLIO"/>
                <div className="bl-content">
                    <TileContentTitle backgroundTitle="WORKS" titleText1="MY&nbsp;" titleText2="PORTFOLIO"/>
                </div>
                <TileContentCloseBtn />
            </section>
        );
    }
}

class ContactTile extends React.Component{
    render(){
        return(
            <section>
                <TileTitle backgroundTitle="CONTACT" titleText1="GET&nbsp;" titleText2="IN TOUCH"/>
                <div className="bl-content">
                    <TileContentTitle backgroundTitle="CONTACT" titleText1="GET&nbsp;" titleText2="IN TOUCH"/>
                </div>
                <TileContentCloseBtn />
            </section>
        );
    }
}








class MainContentPage extends React.Component{
    render(){
        return (
            <div id="bl-main" className="bl-main">
                    <MainImageTile name="Saad Ahmad" 
                                    personalAttributes={["an Engineer", "a Problem Solver", "a Perfectionist"]}
                                    image = "images/main-photo.jpg"
                                    />
                    <AboutTile/>
                    <PortfolioTile/>
                    <ContactTile />
            </div>
        );
    }
}

function makeReactApp(){
    // This function contains all the markup
    // which is to be interpreted by babel.
    const markup = [
        (<MainContentPage />),
    ]
        
    

    var root = document.getElementById("root");
    ReactDOM.render(
        markup,
        root
    );
}


