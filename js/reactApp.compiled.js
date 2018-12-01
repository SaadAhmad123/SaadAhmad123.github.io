"use strict";var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function MainImageTile(a){var b=a.personalAttributes;return React.createElement("section",{className:"topleft",style:{backgroundImage:"url("+a.image+")"}},React.createElement("div",{className:"bl-box row valign-wrapper"},React.createElement("div",{className:"row valign-wrapper"},React.createElement("div",{className:"title-heading"},React.createElement("div",{className:"selector uppercase",id:"selector"},React.createElement("h3",{className:"ah-headline p-none m-none"},React.createElement("span",{className:"font-weight-300"},"Hi There ! I'm\xA0"),React.createElement("span",{className:"ah-words-wrapper"},React.createElement("b",{className:"is-visible"}," "+a.name),b.map(function(c,d){return React.createElement("b",{key:c+d.toString()},c)}))))))))}function TileTitle(a){return React.createElement("div",{className:"bl-box valign-wrapper"},React.createElement("div",{className:"page-title center-align"},React.createElement("span",{className:"title-bg"},a.backgroundTitle),React.createElement("h2",{className:"center-align"},React.createElement("span",{"data-hover":a.titleText1},a.titleText1),React.createElement("span",{"data-hover":a.titleText2},a.titleText2))))}function TileContentTitle(a){return React.createElement("div",{className:"container page-title center-align"},React.createElement("h2",{className:"center-align"},React.createElement("span",{"data-hover":a.titleText1},a.titleText1),React.createElement("span",{"data-hover":a.titleText2},a.titleText2)),React.createElement("span",{className:"title-bg"},a.backgroundTitle))}function TileContentCloseBtn(){return React.createElement("img",{alt:"close",src:"images/close-button.png",className:"bl-icon-close"})}function TileContentDivider(a){return React.createElement("div",{className:"divider center-align"},React.createElement("span",{className:"outer-line"}),React.createElement("span",{className:"fa "+a.icon,"aria-hidden":"true"}),React.createElement("span",{className:"outer-line"}))}function AboutTileInfo(a){return React.createElement("div",{className:"row"},React.createElement("div",{className:"col s12 m5 l4 xl3 profile-picture"},React.createElement("img",{src:a.image,className:"responsive-img my-picture",alt:"My Photo"})),React.createElement("div",{className:"col s12 m7 l8 xl9 personal-info"},React.createElement("h6",{className:"uppercase"},React.createElement("i",{className:"fa fa-user"})," Personal Informations"),React.createElement("div",{className:"col m12 l7 xl7 p-none"},React.createElement("p",{className:"second-font"},a.personalInfo)),React.createElement("div",{className:"col s12 m12 l6 p-none"},React.createElement("ul",{className:"second-font list-1"},React.createElement("li",null,React.createElement("span",{className:"font-weight-600"},"First Name: "),a.firstName),React.createElement("li",null,React.createElement("span",{className:"font-weight-600"},"Last Name: "),a.lastName),React.createElement("li",null,React.createElement("span",{className:"font-weight-600"},"Date of birth: "),a.DOB),React.createElement("li",null,React.createElement("span",{className:"font-weight-600"},"Nationality: "),a.nationality),React.createElement("li",null,React.createElement("span",{className:"font-weight-600"},"Freelance: "),a.freelance))),React.createElement("div",{className:"col s12 m12 l6 p-none"},React.createElement("ul",{className:"second-font list-2"},React.createElement("li",null,React.createElement("span",{className:"font-weight-600"},"Phone: "),a.phone),React.createElement("li",null,React.createElement("span",{className:"font-weight-600"},"Address: "),a.address),React.createElement("li",null,React.createElement("span",{className:"font-weight-600"},"Email: "),a.email),React.createElement("li",null,React.createElement("span",{className:"font-weight-600"},"Spoken Langages: "),a.spokeLanguage),React.createElement("li",null,React.createElement("span",{className:"font-weight-600"},"Skype: "),a.skype))),React.createElement("a",{href:"#",className:"col s12 m12 l4 xl4 waves-effect waves-light btn font-weight-500"},"Download Resume ",React.createElement("i",{className:"fa fa-file-pdf-o"}))))}function AboutTileResumeMenu(){return React.createElement("div",{className:"resume-list col l4"},React.createElement("div",{className:"resume-list-item is-active","data-index":"0",id:"resume-list-item-0"},React.createElement("div",{className:"resume-list-item-inner"},React.createElement("h6",{className:"resume-list-item-title uppercase"},React.createElement("i",{className:"fa fa-briefcase"})," Experience"))),React.createElement("div",{className:"resume-list-item","data-index":"1",id:"resume-list-item-1"},React.createElement("div",{className:"resume-list-item-inner"},React.createElement("h6",{className:"resume-list-item-title uppercase"},React.createElement("i",{className:"fa fa-graduation-cap"})," Education"))),React.createElement("div",{className:"resume-list-item","data-index":"2",id:"resume-list-item-2"},React.createElement("div",{className:"resume-list-item-inner"},React.createElement("h6",{className:"resume-list-item-title uppercase"},React.createElement("i",{className:"fa fa-star"})," Skills"))))}function ExpItem(a){return React.createElement("div",null,React.createElement("div",{className:"resume-content"},React.createElement("h6",{className:"uppercase"},React.createElement("span",null,a.job)),React.createElement("span",{className:"date"},React.createElement("i",{className:"fa fa-calendar-o"}),"\xA0",a.timeSpan),React.createElement("p",null,a.text)),React.createElement("span",{style:{height:"2px",width:"70px",marginBottom:"24px",display:"block",backgroundColor:"yellow"}}))}function AboutTileResumeExperienceCard(a){var b=a.experienceList;return React.createElement("div",{className:"resume-card resume-card-"+a.dataIndex,"data-index":a.dataIndex},React.createElement("div",{className:"resume-card-header"},React.createElement("div",{className:"resume-card-name"},React.createElement("i",{className:"fa "+a.titleIcon}),"\xA0",a.title)),React.createElement("div",{className:"resume-card-body experience"},React.createElement("div",{className:"resume-card-body-container second-font"},b.map(function(c,d){return React.createElement(ExpItem,{key:d.toString()+"_kkk",job:c.job,timeSpan:c.timeSpan,text:c.text})}))))}function SkillItem(a){for(var b=[],c=0;c<a.stars;c++)b.push(React.createElement("i",{className:"fa fa-star",style:{color:"#ffb400"}},"\xA0"));return React.createElement("div",{className:"resume-content"},React.createElement("h6",{className:"uppercase"},a.skill),React.createElement("p",null,b))}function AboutTileSkillsCard(a){var b=a.skillsList,c=Math.ceil(b.length/2),d=b.splice(0,c);return React.createElement("div",{className:"resume-card resume-card-"+a.dataIndex,"data-index":a.dataIndex},React.createElement("div",{className:"resume-card-header"},React.createElement("div",{className:"resume-card-name"},React.createElement("i",{className:"fa "+a.titleIcon}),"\xA0",a.title)),React.createElement("div",{className:"resume-card-body experience"},React.createElement("div",{className:"resume-card-body-container second-font"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col s6"},d.map(function(f){return React.createElement(SkillItem,{skill:f.skill,stars:f.stars})})),React.createElement("div",{className:"col s6"},b.map(function(f){return React.createElement(SkillItem,{skill:f.skill,stars:f.stars})}))))))}function AboutTileResume(){return React.createElement("div",{className:"resume-container"},React.createElement("div",{className:"container"},React.createElement("div",{className:"valign-wrapper row"},React.createElement(AboutTileResumeMenu,null),React.createElement("div",{className:"col s12 m12 l8 resume-cards-container"},React.createElement("div",{className:"resume-cards"},React.createElement(AboutTileResumeExperienceCard,{dataIndex:"0",titleIcon:"fa-briefcase",title:"Experience",experienceList:expList}),React.createElement(AboutTileResumeExperienceCard,{dataIndex:"1",titleIcon:"fa-graduation-cap",title:"Education",experienceList:educationList}),React.createElement(AboutTileSkillsCard,{dataIndex:"2",titleIcon:"fa-star",title:"Skills",skillsList:skillsList}))))))}var AboutTile=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(){return React.createElement("section",null,React.createElement(TileTitle,{backgroundTitle:"RESUME",titleText1:"About\xA0",titleText2:"ME"}),React.createElement("div",{className:"bl-content"},React.createElement(TileContentTitle,{backgroundTitle:"RESUME",titleText1:"About\xA0",titleText2:"ME"}),React.createElement("div",{className:"container infos"},React.createElement(TileContentDivider,{icon:"fa-vcard"}),React.createElement(AboutTileInfo,{image:personalInfo.image,personalInfo:personalInfo.intro,firstName:personalInfo.firstName,lastName:personalInfo.lastName,DOB:personalInfo.DOB,nationality:personalInfo.nationality,freelance:personalInfo.freelance,phone:personalInfo.phone,address:personalInfo.address,email:personalInfo.email,spokeLanguage:personalInfo.spokenLanguage,skype:personalInfo.skype})),React.createElement(AboutTileResume,null)),React.createElement(TileContentCloseBtn,null))}}]),b}(React.Component),PortfolioTile=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(){return React.createElement("section",null,React.createElement(TileTitle,{backgroundTitle:"WORKS",titleText1:"MY\xA0",titleText2:"PORTFOLIO"}),React.createElement("div",{className:"bl-content"},React.createElement(TileContentTitle,{backgroundTitle:"WORKS",titleText1:"MY\xA0",titleText2:"PORTFOLIO"})),React.createElement(TileContentCloseBtn,null))}}]),b}(React.Component),ContactTile=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(){return React.createElement("section",null,React.createElement(TileTitle,{backgroundTitle:"CONTACT",titleText1:"GET\xA0",titleText2:"IN TOUCH"}),React.createElement("div",{className:"bl-content"},React.createElement(TileContentTitle,{backgroundTitle:"CONTACT",titleText1:"GET\xA0",titleText2:"IN TOUCH"})),React.createElement(TileContentCloseBtn,null))}}]),b}(React.Component),MainContentPage=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(){return React.createElement("div",{id:"bl-main",className:"bl-main"},React.createElement(MainImageTile,{name:"Saad Ahmad",personalAttributes:["an Engineer","a Problem Solver","a Perfectionist"],image:"images/main-photo.jpg"}),React.createElement(AboutTile,null),React.createElement(PortfolioTile,null),React.createElement(ContactTile,null))}}]),b}(React.Component);function makeReactApp(){var a=[React.createElement(MainContentPage,null)];root=document.getElementById("root"),ReactDOM.render(a,root)}