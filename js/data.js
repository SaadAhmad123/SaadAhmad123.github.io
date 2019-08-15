/* About Us tile data -- START -- */
const personalInfo = {
    image : "images/photo-about.jpg",
    intro : `   
        I am an Electical Engineer as well as a freelance Software developer. 
        I am interested in Internet of Things, Intelligent Robotics, Artificial Intelligence as well as Web / Mobile / Desktop Application Development.
        I love to read and attempt to implement new research papers and techniques relevent to my fields of interest. I also like to learn new programming languages and frameworks to make my work more efficient and amazing. 
            `,
    firstName : "Saad",
    lastName : "Ahmad",
    DOB : "March 1st, 1998",
    nationality : "Pakistan",
    freelance : "Available",
    phone : "(+61)41 3725464",
    address : "Clayton, VIC, Australia",
    email : "saadkwi12@hotmail.com",
    spokenLanguage : "English",
    skype : "Not Available",
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
        date : "June 2018",
        usedTech : "C - C++ - OpenGL - GLUT.h",
        infoText : `This is one of the projects I am most proud of because most of the people from my batch developed amazing 2D games like minesweeper and desktop version of color switch using this library as their first and second semester projects (Bachelors). Students from NUST, who know about it, use this library even today.
        
        In C, OpenGL, GLUT.h, SDL all have a learning curve and many lose hope and abandon learning and experience of these powerful libraries. We developed glass so that new students can learn about such things the easy way. GLASS.h is a C library that provides a low level abstraction of GLUT.h thus reduces the learning curve.
        `,
        previewLink : "https://github.com/PoweredByME/glass.h"
    },    
]

/* Portfolio tile data -- END -- */
