/* About Us tile data -- START -- */
const personalInfo = {
    image : "images/photo-about.jpg",
    intro : `   
            I am an Electrical Engineer as well as a freelance Software developer. I am interested in Internet of Things, Intelligent Robotics, Artificial Intelligence as well as Web / Mobile / Desktop Application Development. 
            I love to read and attempt to implement new research papers and techniques relevant to my fields of interest. I also like to learn new programming languages, frameworks and methods to make my work more efficient and amazing.
            I am currently pursuing Masters of Advanced Engineering (Electrical Engineering) from Monash University, Clayton Campus. I have completed my Bachelor of Electrical Engineering from National University of Sciences and Technology, Pakistan. 
            `,
    firstName : "Saad",
    lastName : "Ahmad",
    DOB : "March 1st, 1998",
    nationality : "Pakistan",
    freelance : "Available",
    phone : "(+61)41 3725464",
    address : "Clayton, VIC, Australia",
    email : "saadkwi12@hotmail.com",
    spokenLanguage : "English, Urdu",
    skype : "live:saadkwi12",
    facebook:"https://www.facebook.com/profile.php?id=100005595785739",
    linkedin:"https://www.linkedin.com/in/saad-ahmad-kwi123/",
    github:"https://github.com/PoweredByME",
}

const personalAttributes = ["a Futurist", "a Problem Solver"];

const expList = [
    {
        job : "Engineering Services Intern",
        place : 'Pak-Arab Oil Refinery Limited, Pakistan',
        timeSpan : "July 2018 - Aug 2018",
        text : "I worked on various projects being carried out by the Engineering Services Department at PARCO. The main purpose of this department is to plan, design and execute new projects in the industry."
    },
    {
        job : "Web Developer",
        place : 'ConnecKt Lab, NUST-SEECS, Islamabad, Pakistan',
        timeSpan : "Sep 2017 - Mar 2018",
        text : "I contributed in the development a very low latency remote control for MicroCell Injection Systems; in order to enable doctors experiment at a very low cost from anywhere in the country (Pakistan)."
    },{
        job : "Sales & Utilies Intern",
        place : 'ABB Power & Automation Ltd, Lahore, Pakistan',
        timeSpan : "June 2017 - Aug 2017",
        text : "At ABB, I was the part of the team which oversaw the sales operations of the ABB, Pakistan."
    },
    {
        job : "Electrical Engineering Intern",
        place : 'Sugar Mills, Thal Industries, Layyah, Pakistan',
        timeSpan : "Jun 2016 - Aug 2016",
        text : "I was the part of the Maintenance department - Electical Engineering",
    },
    {
        job : "Director Web & IT - NUST Fine Arts Club",
        place : 'NUST, H-12, Islambad, Pakistan',
        timeSpan : "Sep 2017 - June 2018",
        text : "I was the director of the Web & IT team which was responsible for all maintainence and developement of the the IT services of the Club.",
    },
];


const educationList = [
    {
        job : "Master in Advanced Engineering - Monash University",
        timeSpan : "2019 - Present",
        text : "I am currently doing my Masters of Advanced Engineering - Electrical Engineering from Monash University, Clayton, VIC, Australia "
    },
    {
        job : "Bachelors in Electrical Engineering - NUST, Islamabad",
        timeSpan : "2015 - 2019",
        text : "I completed my Bachelor of Electrical Engineering with a CGPA of 3.52 form National University of Science and Technology (NUST), H-12, Islamabad, Pakistan"
    },
    {
        job : "High School",
        timeSpan : "2013 - 2015",
        text : "I completed my F.Sc with 91% marks from Punjab Group of Colleges, Lahore, Pakistan"
    },{
        job : "Matriculation",
        timeSpan : "2010 - 2013",
        text : "I completed my Matriculation with 96% marks from Cadet College Kallar Kahar, Kallar Kahar, Pakistan"
    }
];

const skillsList = [
    {
        skill : "Multisim",
        stars : 3
    },{
        skill : "Proteus",
        stars : 4
    },{
        skill : "Adobe Eagle",
        stars : 4
    },{
        skill : "MATLAB",
        stars : 4
    },{
        skill : "C/C++",
        stars : 4
    },{
        skill : "C# & Xamarin",
        stars : 4
    },{
        skill : "Python",
        stars : 4
    },{
        skill : "HTML & CSS",
        stars : 5
    },{
        skill : "Javascript",
        stars : 5
    },{
        skill : "WebRTC",
        stars : 4
    },{
        skill : "Vue JS",
        stars : 4
    },{
        skill : "React JS & React Native",
        stars : 4
    },{
        skill : "PHP",
        stars : 5
    },{
        skill : "PHP - Laravel Framework",
        stars : 5
    },{
        skill : "MySQL",
        stars : 5
    },{
        skill : "Python - OpenCV",
        stars : 4
    },{
        skill : "Python - Keras",
        stars : 4
    },{
        skill : "Python - Pytorch",
        stars : 4
    },{
        skill : "Arduino",
        stars : 4
    },{
        skill : "Raspberry Pi",
        stars : 4
    },{
        skill : "Node MCU",
        stars : 4
    },

]

/* About Us tile data -- END -- */



/* Portfolio tile data -- START -- */

portfolioList=[
    {
        imgSrc : "/images/projects/vc.png",
        imgLink : "#",
        projectName : "1 to 1 Video Chat",
        client : "Self Project",
        date : "June 2019",
        usedTech : "WebRTC - MQTT - Javascript - HTML - CSS",
        infoText : `
            In this project I developed a 1-to-1 video chat web applications. It is a serverless application with no backend. The communications are handled by MQTT streams and the Video Chat is handled by WebRTC.
        `,
        previewLink : "https://poweredbyme.github.io/vc/"
    },{
        imgSrc : "/images/projects/illust.png",
        imgLink : "#",
        projectName : "Design.ai | Illustrations",
        client : "Freelance Project",
        date : "June 2019",
        usedTech : "Laravel - PHP - VueJS - HTML - CSS",
        infoText : `
            This is one of my freelance projects in which I developed a web application which gives the users the oppertunity to select from a wide range of SVGs and then customize the colors of that SVG.
        `,
        previewLink : "http://undraw.sabsolutionspak.com/assets"
    },
    {
        imgSrc : "/images/projects/calendar.png",
        imgLink : "#",
        projectName : "Design.ai | Calendar",
        client : "Freelance Project",
        date : "June 2019",
        usedTech : "Laravel - PHP - VueJS - HTML - CSS",
        infoText : `
            This is one of my freelance projects in which I developed a web application which is a calendar containing most of the global events.
        `,
        previewLink : "http://undraw.sabsolutionspak.com/calendar"
    },
    {
        imgSrc : "/images/projects/inews.png",
        imgLink : "#",
        projectName : "Ivioremessages News",
        client : "Freelance Project",
        date : "June 2019",
        usedTech : "React Native - Wordpress REST API",
        infoText : `
            This is one of my freelance projects in which I developed a news application for Android using React Native. 
            The Application fetches the data from a Wordpress site via a REST API. The Application also has Google Ads in it.
        `,
        previewLink : "https://github.com/SaadAhmad123/react_native_Iviromessages_news"
    },{
        imgSrc : "/images/projects/hosteleat.png",
        imgLink : "#",
        projectName : "HostelEat",
        client : "My Start Up",
        date : "April 2019",
        usedTech : "Laravel - Php - Javascript - HTML - CSS",
        infoText : `
            One of the most common problem in the hostel of universities of Pakistan is that most of the student do not like the food that is provided in the mess. As a result, they go to different restaurant to get food they like. However, most of the people want to eat home cooked food. There are a lot of people in Pakistan willing to cook in there homes for money but they do not have a platform to advertise themselves.
            
            In this start up we tried to solve this problem by developing a platform which connected home based eateries with the hostelites of different universities. Our service ensured the delivery and quality of the food.

            I was the lead software developer and co-founder of this startup. 
        `,
        previewLink : "http://hosteleat.com"
    },{
        imgSrc : "/images/projects/ssvep.png",
        imgLink : "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjrp8aAsYTkAhVQWH0KHZZAArMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FBasic-parts-of-a-SSVEP-based-BCI-system_fig3_301890798&psig=AOvVaw0gmfK7oR7-Kd83stmgyH8v&ust=1565941539800510",
        projectName : "SSVEP Based User Interface (Brain Computer Interface)",
        client : "Final Year Project (Bachelor in Electrical Engineering)",
        date : "June 2018 - May 2019",
        usedTech : "Python - MATLAB - OpenBCI - EEG Signals - Stocastic Signal Processing - OpenCV",
        infoText : `The brain computer interface is the method of interacting with the computer just with our thought. My Bachelor Final Year Project is to develop a User interface which can be operated directly with human brain. The neurological process used to achieve this is Steady State Visually Evoked Process (SSVEP). My advisor in this project was Dr. Awais Mehmood Kamboh (http://seecs.nust.edu.pk/faculty/amkamboh.html)

        In this project we mainly applied the Canonical Correlation Analysis Technique to detect an SSVEP signal from the 32-channel EEG signals. SSVEP (Steady State Visually Evoked Potential) are the signals which are generated in the brain when a person sees a blinking light. These signals have a higher Signal to Noise ratio and can be catagorised relatively accuratly.
        
        The project also included an eye tracking systems which was quite accurate and was based on the Gradient Minimizing Technique as proposed in the paper by Fabian Tim (https://www.inb.uni-luebeck.de/fileadmin/files/PUBPDFS/TiBa11b.pdf).
        `,
        previewLink : "https://github.com/PoweredByME/SSVEP_FYP"
    },
    {
        imgSrc : "/images/projects/autorintro.png",
        imgLink : "#",
        projectName : "Author Intro",
        client : "Freelance Project",
        date : "January 2019",
        usedTech : "Laravel - Php - Javascript - HTML - CSS",
        infoText : `
            This is one of my freelance projects in which I developed a website where the authors can connect with eachother and review the works of each other.
        `,
        previewLink : "http://authorintro.com"
    }, 
    {
        imgSrc : "/images/projects/mci.jpg",
        imgLink : "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiYnty5vITkAhXJbX0KHdC6AVEQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.compassfertility.com.au%2Fivf&psig=AOvVaw2EMouzPZFf6Iywwb8EPEJr&ust=1565944367687327",
        projectName : "Low Latency teleoperation of MicroCell Injection System",
        client : "Research Project (ConnecKt Lab, NUST-SEECS, H-12, Islamabad)",
        date : "Sep 2017 - Mar 2018",
        usedTech : "WebRTC - MQTT - C# - JS - HTML - CSS",
        infoText : `In order to provide a smooth remote operation of the MCI System, I contributed in the development of a system which delivers a video feed and control feed at a very low latency ( < ~150ms) on Commercial 4G networks for the smooth operation of telemetry cell surgery. I undertook this project under the supervision of Dr. Saad bin Qaisar(http://seecs.nust.edu.pk/faculty/saad.html) and Dr. Osman Hassan(http://seecs.nust.edu.pk/faculty/osmanhasan.html).`,
        previewLink : "http://mci.seecs.nust.edu.pk"
    },    
    {
        imgSrc : "/images/projects/rovbot.png",
        imgLink : "#",
        projectName : "roVBot",
        client : "Semester Project (Bachelor of Electrical Engineering - 4th Semester)",
        date : "Sep 2017 - Mar 2018",
        usedTech : "WebRTC - HTML - CSS - JS - PHP - Python - Raspberry Pi 3 - Atmega328 - DC Motor Drive - Power Management",
        infoText : `Security and surveillance at low cost is getting rare with every passing day. roVBot is a domestic drone which can be controlled from anywhere in the world via WiFi/Internet Connection and user can get sonar and visual data remotely. The robot can move around freely and the user can observe all the blind spots in the region (home/office) from anywhere in world at a very low latency. I completed this projected as a semester project in the course of Microprocessor systems taught by Dr. Saad bin Qaisar`,
        previewLink : "#"
    },
    {
        imgSrc : "/images/projects/pose.png",
        imgLink : "#",
        projectName : "Dance Pose Extraction using Pose Detection",
        client : "Self Project",
        date : "July 2018",
        usedTech : "Python - Tensorflow",
        infoText : `I used the pose detector Convolutional Neural Network proposed by the paper Realtime Multi-Person 2D Pose Estimation using Part Affinity Fields (https://arxiv.org/pdf/1611.08050.pdf) and attempted to use it to extract the dance moves in a video.`,
        previewLink : "https://youtu.be/pz26POcmXTM"
    },    
    {
        imgSrc : "/images/projects/facenet.jpg",
        imgLink : "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjGgffmyoTkAhXSfX0KHQd9DtAQjRx6BAgBEAQ&url=https%3A%2F%2Fmedium.com%2Fintro-to-artificial-intelligence%2Fone-shot-learning-explained-using-facenet-dff5ad52bd38&psig=AOvVaw2czP8do1u9zhCIlaBqeEle&ust=1565948337698937",
        projectName : "Face Recognition base on FaceNet",
        client : "Self Project",
        date : "June 2018",
        usedTech : "Python - Kera - OpenFace - DLIB",
        infoText : `I implemented the FaceNet algorithm for face recognition using python.`,
        previewLink : "#"
    },  
    {
        imgSrc : "/images/projects/eyetrack.png",
        imgLink : "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiIuLjCy4TkAhVKb30KHVi1B5EQjRx6BAgBEAQ&url=https%3A%2F%2Finsidescientific.com%2Fintegrating-eye-tracking-physiology-measurement&psig=AOvVaw1mOEvUqKYMLppBh8UHzFBz&ust=1565948654820165",
        projectName : "Webcam based Eye Tracker based on Vector Product",
        client : "Self Project",
        date : "June 2018",
        usedTech : "Python - OpenCV - Cython - Dlib - Vector Gradient Optimization",
        infoText : `I implemented an eye tracker in python using OpenCV and cython. I implemented a technique of finding the global minima in the image (i.e eye pupil) using vector products as mentioned in the research paper "ACCURATE EYE CENTRE LOCALISATION BY MEANS OF GRADIENTS" (https://www.inb.uni-luebeck.de/fileadmin/files/PUBPDFS/TiBa11b.pdf)`,
        previewLink : "https://github.com/PoweredByME/pythonWebcamEyeTracker"
    },    
    {
        imgSrc : "/images/projects/glass.jpg",
        imgLink : "#",
        projectName : "GLASS.h",
        client : "Semester Project (Bachelor of Electrical Engineering - 1st Semester)",
        date : "Dec 2015",
        usedTech : "C - C++ - OpenGL - GLUT.h",
        infoText : `This is one of the projects I am most proud of because most of the people from my batch developed amazing 2D games like minesweeper and desktop version of color switch using this library as their first and second semester projects (Bachelors). Students from NUST, who know about it, use this library even today.
        
        In C, OpenGL, GLUT.h, SDL all have a learning curve and many lose hope and abandon learning and experience of these powerful libraries. We developed glass so that new students can learn about such things the easy way. GLASS.h is a C library that provides a low level abstraction of GLUT.h thus reduces the learning curve.
        `,
        previewLink : "https://github.com/PoweredByME/glass.h"
    },
    {
        imgSrc : "/images/projects/music.png",
        imgLink : "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_pKit0ITkAhXbR30KHbKyAmYQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fmath.illinoisstate.edu%252Fschebol%252Ftalks%252FMathmusic-talk.htm%26psig%3DAOvVaw2sfluHrnMVk21V3sQQXK2I%26ust%3D1565949936677480&psig=AOvVaw2sfluHrnMVk21V3sQQXK2I&ust=1565949936677480",
        projectName : "Mathematical Analysis and Computer Synthesis of Music",
        client : "Self Project",
        date : "Feb 2016",
        usedTech : "C# - Complex Analysis",
        infoText : `I made a program after a through mathematical analysis of music waveform composition and sinusoidal patterns in which occur in musical melodies and made a program based of the equations which was able to create musical sounds. I have done this project under the supervision of Dr. Sajid Ali (http://seecs.nust.edu.pk/faculty/sajidali.html)`,
        previewLink : "#"
    },
    {
        imgSrc : "/images/projects/mathparser.png",
        imgLink : "#",
        projectName : "MathParser",
        client : "Semester Project (Bachelor of Electrical Engineering - 2nd Semester)",
        date : "March 2016",
        usedTech : "C#",
        infoText : `A very simple to use and extendable math expression parsing library (PCL) in C#. Ideal for Scientific Calculator App Development in C#. It is capable of processing matrices and real numbers. Store variables and implement various function. The functionality of the library functionality can be extended very easily. I completed this project as a semester project in the course taught by Dr. Kashif Sharif (https://pk.linkedin.com/in/kashif-sharif)`,
        previewLink : "https://github.com/SaadAhmad123/MathParser"
    },
    {
        imgSrc : "/images/projects/matapp.png",
        imgLink : "#",
        projectName : "MatApp",
        client : "Semester Project (Bachelor of Electrical Engineering - 2nd Semester)",
        date : "April 2016",
        usedTech : "C# - Xamarin",
        infoText : `An android Scientific Calculator App based on MathParser. It can solve scientific operations as well as Matrix Operations`,
        previewLink : "https://github.com/PoweredByME/MatApp/tree/master/MatApp/bin/Release"
    },
    {
        imgSrc : "/images/projects/tetrix.png",
        imgLink : "#",
        projectName : "Tetris",
        client : "Semester Project (Bachelor of Electrical Engineering - 3rd Semester)",
        date : "November 2016",
        usedTech : "Digital Logic Design - Proteus - Hardware - Logic Gate",
        infoText : `Developed a Tetris game on 8x8 matrix display by using only the basis digital logic circuit components (Gates, Flip Flops and Counters)`,
        previewLink : "https://youtu.be/Ef0phpMYhKA"
    },
]

/* Portfolio tile data -- END -- */
