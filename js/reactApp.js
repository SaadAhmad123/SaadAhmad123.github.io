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


function getFirst_N_ElementsOfArray(arr, thresh = 3){
    if (arr.length > thresh){
        return arr.slice(0,thresh);
    }else{
        return arr;
    }
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
    var _expList = null;
    if(props.windowWidth >= 800){
        _expList = getFirst_N_ElementsOfArray(props.experienceList, props.desktopMaxCardItem);
    }else{
        _expList = props.experienceList;
    }
    var _knowMoreButton = null;
    if(props.experienceList.length > props.desktopMaxCardItem){
        _knowMoreButton = <a href={props.knowMoreLink} className="col s12 m12 l4 xl4 waves-effect waves-light btn font-weight-400" style={{backgroundColor:"#222222", color:"#ffb400", paddingLeft:"12px;", paddingRight:"12px"}}>
			<i className="fa fa-info-circle" style={{paddingLeft:"6px", paddingRight:"6px" ,fontSize:"18px", color:"rgb(119,119,119)"}}></i>
            <span style={{color:"#ffffff"}}>KNOW</span>
			<span style={{color:"#ffb400"}}> MORE</span>
		</a>;
    }
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
                        _expList.map((exp, idx) => 
                            <ExpItem 
                                key={idx.toString()+"_kkk"} 
                                job={exp.job}
                                timeSpan={exp.timeSpan}
                                text={exp.text}
                            />
                        )
                    }
                    {_knowMoreButton}
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
    var _skillsList = null;
    if (props.windowWidth >= 800){
        _skillsList = getFirst_N_ElementsOfArray(props.skillsList, props.desktopMaxCardItem);
    }else{
        _skillsList = props.skillsList;
    }

    var _knowMoreButton = null;
    if(props.skillsList.length > props.desktopMaxCardItem){
        _knowMoreButton = <a href={props.knowMoreLink} className="col s12 m12 l4 xl4 waves-effect waves-light btn font-weight-400 modal-trigger" style={{backgroundColor:"#222222", color:"#ffb400", paddingLeft:"12px;", paddingRight:"12px"}}>
			<i className="fa fa-info-circle" style={{paddingLeft:"6px", paddingRight:"6px" ,fontSize:"18px", color:"rgb(119,119,119)"}}></i>
            <span style={{color:"#ffffff"}}>KNOW</span>
			<span style={{color:"#ffb400"}}> MORE</span>
        </a>;
    }
    var half_length = Math.ceil(_skillsList.length / 2);
    var skillsList1 = _skillsList.slice(0,half_length);
    var skillsList2 = _skillsList.slice(half_length, _skillsList.length);
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
                    {_knowMoreButton}
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
                                    windowWidth = {props.windowWidth}
                                    desktopMaxCardItem = {props.desktopMaxExperienceCardItem}
                                    knowMoreLink = "#modal_exp"
                                />
                                <AboutTileResumeExperienceCard
                                    dataIndex="1"
                                    titleIcon="fa-graduation-cap"
                                    title="Education"
                                    experienceList={educationList}
                                    windowWidth = {props.windowWidth}
                                    desktopMaxCardItem = {props.desktopMaxEducationCardItem}
                                    knowMoreLink = "#modal_edu"
                                />
                                <AboutTileSkillsCard 
                                    dataIndex="2"
                                    titleIcon="fa-star"
                                    title="Skills"
                                    skillsList = {skillsList}
                                    windowWidth = {props.windowWidth}
                                    desktopMaxCardItem = {props.desktopMaxSkillCardItem}
                                    knowMoreLink = "#modal_skill"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

class AboutTile extends React.Component{
    constructor(props){
        super(props);
        this.state = {windowWidth : window.innerWidth};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState((prevState, props) => {return { width: window.innerWidth, height: window.innerHeight }});
    }

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
                <AboutTileResume windowWidth={this.state.width} desktopMaxEducationCardItem={3} desktopMaxExperienceCardItem={3} desktopMaxSkillCardItem={10}/>
                {/*            
                <div className="container badges">
                    <div className="row">
                        <div className="col s12 m4 l4 center-align">
                            <h3>
                                <i className="fa fa-suitcase"></i>
                                <span className="font-weight-700">7+</span>
                            </h3>
                            <h6 className="uppercase font-weight-500">
                                Year Experience
                            </h6>
                        </div>
                    </div>
                </div>
                */}
            </div>
            <TileContentCloseBtn />
        </section>
        );
    }
}

function PortfolioDataPanel(props){
    return(
        <div className="col s12 m6 l3 xl3" data-panel={props.panelRef}>
            <a href="#">
                <img className="responsive-img" src={props.imgSrc} alt="Project"></img>
                <div className="valign-wrapper"><span className="font-weight-400 uppercase">{props.projectName}</span></div>
            </a>
        </div>
    );
}

function PortifolioDataPanelContentItem(props){
    return (
        <div data-panel={props.panelRef}>
            <div className="row">
                <div className='col s12 l6 xl6'>
                    <img className="responsive-img" src={props.imgSrc}></img>
                </div>
                <div className="col s12 l6 xl6">
                    <h3 className="font-weight-600 white-text uppercase">{props.projectName}</h3>
                    <ul className="project-details white-text second-font">
                        <li><i className="fa fa-user"></i><span className="font-weight-600"> Client </span>: <span className="font-weight-400 uppercase">{props.client}</span></li>
                        <li><i className="fa fa-calendar"></i><span className="font-weight-600"> Date </span>: <span className="font-weight-400 uppercase">{props.date}</span></li>
                        <li><i className="fa fa-cogs"></i> <span className="font-weight-600"> Used Technologies</span> : <span className="font-weight-400 uppercase">{props.usedTech}</span></li>
                    </ul>
                    <hr></hr>
                    <p className="white-text second-font">{props.infoText}</p>
                    <a href={props.previewLink} className="waves-effect waves-light btn font-weight-500">Preview <i className="fa fa-external-link"></i></a>
                </div> 
            </div>
        </div>
    );
}

function PortfolioDataPanelContentList(props){
    const _portfolioList = portfolioList;
    return(
        <div className="bl-panel-items" id="bl-panel-work-items">
            {
                _portfolioList.map(
                    (item, index) => 
                    <PortifolioDataPanelContentItem 
                        key={index.toString()}
                        panelRef={"panel-" + index.toString()}
                        imgSrc="images/projects/project-1.jpg"
                        projectName="Image Project"
                        client="Semester Porject"
                        date="June 12, 2015"
                        usedTech="Php"
                        infoText="Hello World"
                        previewLink="#"
                    />
                )
            }
            <nav>
                <span className="control-button bl-previous-work uppercase font-weight-700"><i className="fa fa-chevron-left"></i></span>
                <span className="control-button fa fa-close fa-2x bl-icon-close center-align" id="bl-icon-close"></span>
                <span className="control-button bl-next-work uppercase font-weight-700"><i className="fa fa-chevron-right"></i></span>
            </nav>
        </div>
    );
}

function PortfolioDataPanelTileList(props){
    const _portfolioList = portfolioList
    return(
        <div className={"row center-align da-thumbs"} id="bl-work-items">
            {
                _portfolioList.map(
                    (item, index) => <PortfolioDataPanel key={index.toString()} panelRef={"panel-" + index.toString()} imgSrc="images/projects/project-1.jpg" projectName="Image Project"/>
                )
            }
        </div>
    );
}

class PortfolioTile extends React.Component{
    render(){
        return(
            <section>
                <TileTitle backgroundTitle="WORKS" titleText1="MY&nbsp;" titleText2="PORTFOLIO"/>
                <div className="bl-content">
                    <TileContentTitle backgroundTitle="WORKS" titleText1="MY&nbsp;" titleText2="PORTFOLIO"/>
                    <div className="container">
                        {/* Divider Starts */}
                        <div className="divider center-align">
                            <span className="outer-line"></span>
                            <span className="fa fa-suitcase" aria-hidden="true"></span>
                            <span className="outer-line"></span>
                        </div>
                        {/* Divider Ends */}

                        <PortfolioDataPanelTileList />
                    </div>
                </div>
                <TileContentCloseBtn />
            </section>
        );
    }
}

function ContactInfo(props){
    const _personalInfo = personalInfo;
    return (
        <div className="col s12 m5 l3 xl3 leftside">
            <h6 className="font-weight-500 uppercase">Phone</h6>
            <span className="font-weight-400 second-font"><i className="fa fa-phone"></i>{_personalInfo.phone}</span>
			<h6 className="font-weight-500 uppercase">Email</h6>
			<span className="font-weight-400 second-font"><i className="fa fa-envelope"></i> {_personalInfo.email}</span>
			<h6 className="font-weight-500 uppercase">Address</h6>
			<span className="font-weight-400 second-font"><i className="fa fa-home"></i>  {_personalInfo.address}</span>
            <h6 className="font-weight-500 uppercase">Social Profiles</h6>
            <div className="social">
                <ul className="list-inline social social-intro center-align p-none">
                    <li className="facebook"><a href={_personalInfo.facebook} title="Lacebook"><i className="fa fa-facebook"></i></a></li>
                    <li className="linkedin"><a href={_personalInfo.linkedin} title="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                    <li className="github"><a href={_personalInfo.github} title="github"><i className="fa fa-github"></i></a></li>
                </ul>
            </div>
        </div>
    );
}


function ContactForm(props){
    return(
        <div className="col s12 m7 l9 xl9 rightside">
			<h6 className="uppercase m-none">Feel free to drop me a line</h6>
			<div className="row">
				<p className="col s12 m12 l7 xl7 second-font">
					If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.
				</p>
			</div>
            <form className="contactform" method="post" action="php/process-form.php">
                <div className="input-field second-font">
                    <i className="fa fa-user prefix"></i>
                    <input id="name" name="name" type="text" className="validate" required/>
                    <label className="font-weight-400" for="name">Your Name</label>
                </div>
                <div className="input-field second-font">
                    <i className="fa fa-envelope prefix"></i>
                    <input id="email" type="email" name="email" className="validate" required/>
                    <label for="email">Your Email</label>
                </div>
                <div className="input-field second-font">
                    <i className="fa fa-comments prefix"></i>
                    <textarea id="message" name="message" className="materialize-textarea" required></textarea>
                    <label for="message">Your message</label>
                </div>
                <div className="col s12 m12 l4 xl4 submit-form">
                    <button className="btn font-weight-500" type="submit" name="send">
						Send Message <i className="fa fa-send"></i>
					</button>
                </div>
                <div className="col s12 m12 l8 xl8 form-message">
                    <span className="output_message center-align font-weight-500 uppercase"></span>
                </div>
            </form>
        </div>


    );
}

class ContactTile extends React.Component{
    render(){
        return(
            <section>
                <TileTitle backgroundTitle="CONTACT" titleText1="GET&nbsp;" titleText2="IN TOUCH"/>
                <div className="bl-content">
                    <TileContentTitle backgroundTitle="CONTACT" titleText1="GET&nbsp;" titleText2="IN TOUCH"/>
                    <div className="container">
                        <div className="divider center-align">
                            <span className="outer-line"></span>
                            <span className="fa fa-envelope-open" aria-hidden="true"></span>
                            <span className="outer-line"></span>
                        </div>
                        <div className="row contact">
                            <ContactInfo />
                            <ContactForm />
                        </div>
                    </div>
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
                    <PortfolioDataPanelContentList/>
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


