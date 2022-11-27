const btn = document.querySelector('.btn');
const generate = document.querySelector('.generate');
const copy = document.getElementById('copy');


btn.addEventListener('mouseover', (e) => {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
});

copy.addEventListener('mouseover', (e) => {
    const x = e.pageX - copy.offsetLeft;
    const y = e.pageY - copy.offsetTop;

    copy.style.setProperty("--xPos", x + "px");
    copy.style.setProperty("--yPos", y + "px");
});

generate.addEventListener('mouseover', (e) => {
    const x = e.pageX - generate.offsetLeft;
    const y = e.pageY - generate.offsetTop;

    generate.style.setProperty("--xPos", x + "px");
    generate.style.setProperty("--yPos", y + "px");
});

window.addEventListener('resize', e => {
    const screenSize = screen.width;
    if (screenSize <= 480) {
        const toHideDiv = document.getElementById('toHide');
        toHideDiv.classList.add('true');
    } else {
        const toHideDiv = document.getElementById('toHide');
        toHideDiv.classList.remove('true');
    }
});


// Generate btn
const generateBtn = document.querySelector('.generate');
generateBtn.addEventListener('click', (e) => {
    // change the text of copy button to COPY
    document.querySelector('.copyText').innerHTML = '<i class="fa-regular fa-copy"></i> Copy';

    // rotion transition
    const addAnimate = () => {
        const icon = document.querySelector('.fa-rotate');
        icon.classList.add('animate');
        // icon.style.transform = 'rotate(300deg)';

        console.log('hello');
    };

    const removeAnimate = () => {
        clearInterval(timer);
        const icon = document.querySelector('.fa-rotate');
        icon.classList.remove('animate');

        randompick();
    };

    let timer = setInterval(addAnimate, 200);
    setTimeout(removeAnimate, 3000);


    // random title picker
    const randompick = () => {
        //prevent the default
        e.preventDefault();
        //array of titles and authors
        const titles = [
            { "author": "ziza", "quote": "Online E-Learning System" },
            { "author": "ziza", "quote": "Online Examination System" },
            { "author": "ziza", "quote": "OJT Timesheet Monitoring System" },
            { "author": "ziza", "quote": "Home Surveillance and Automation" },
            { "author": "ziza", "quote": "iPhone SMS Notification Systems" },
            { "author": "ziza", "quote": "Using GSM Technologies for Detecting Theft" },
            { "author": "ziza", "quote": "POS Apps and Their Use" },
            { "author": "ziza", "quote": "Business Use Cases for Accounting Apps" },
            { "author": "ziza", "quote": "Time Tracking Solutions for Office Productivity" },
            { "author": "ziza", "quote": "SMS Doorbell Notification Tools" },
            { "author": "ziza", "quote": "Wireless Technologies for Surveillance" },
            { "author": "ziza", "quote": "Online Learning Systems and Their Relevance" },
            { "author": "ziza", "quote": "Online Apps For Business Management" },
            { "author": "ziza", "quote": "Improving Nursing Education With a Healthcare System" },
            { "author": "ziza", "quote": "Project Management Tracking Systems" },
            { "author": "ziza", "quote": "Biometric Security Systems" },
            { "author": "ziza", "quote": "Most Important Tools For Managing Data Security" },
            { "author": "ziza", "quote": "Most Important Tools For Managing Data Security" },
            { "author": "ziza", "quote": "How The Internet Works: The Basics" },
            { "author": "ziza", "quote": "Introduction to Data Mining" },
            { "author": "ziza", "quote": "Emergency Vehicle Notification Systems" },
            { "author": "ziza", "quote": "Benefits of Data Mining" },
            { "author": "ziza", "quote": "Student Tracking Performance" },
            { "author": "ziza", "quote": "Library Information System" },
            { "author": "ziza", "quote": "Student Information System" },
            { "author": "ziza", "quote": "Student Handbook Application" },
            { "author": "ziza", "quote": "Thesis and Capstone Archiving System" },
            { "author": "ziza", "quote": "School Portal Application" },
            { "author": "ziza", "quote": "School Events Attendance System" },
            { "author": "ziza", "quote": "Grading System" },
            { "author": "ziza", "quote": "Student Profile and Guidance Services with Decision Support" },
            { "author": "ziza", "quote": "Faculty Evaluation System" },
            { "author": "ziza", "quote": "Online School Documents Processing with Payment System" },
            { "author": "ziza", "quote": "Class Scheduling System" },
            { "author": "ziza", "quote": "Student Council Voting System" },
            { "author": "ziza", "quote": "Android Based E-learning" },
            { "author": "ziza", "quote": "OJT Records Monitoring System" },
            { "author": "ziza", "quote": "Sales and Inventory System" },
            { "author": "ziza", "quote": "Point of Sale Application" },
            { "author": "ziza", "quote": "Boarding House Management System" },
            { "author": "ziza", "quote": "COOP Management System" },
            { "author": "ziza", "quote": "Insurance Management System" },

            { "author": "ziza", "quote": "Beauty Parlor Management System" },
            { "author": "ziza", "quote": "Daily Time Record and Payroll System with Barcode/Biometric" },
            { "author": "ziza", "quote": "Budget Management System" },
            { "author": "ziza", "quote": "Queuing System" },
            { "author": "ziza", "quote": "Financial Management with SMS Notification" },
            { "author": "ziza", "quote": "Procurement Management System" },
            { "author": "ziza", "quote": "Financial Documents Archiving Management System" },
            { "author": "ziza", "quote": "Teller’s Queuing System Using Barcode Technology" },
            { "author": "ziza", "quote": "Service Marketplace System" },
            { "author": "ziza", "quote": "Tailor Booking Management System" },
            { "author": "ziza", "quote": "Expense Tracking and Monitoring System" },
            { "author": "ziza", "quote": "Loan Transaction and Reservation with SMS" },
            { "author": "ziza", "quote": "Accounting Information Management System" },
            { "author": "ziza", "quote": "Food Order and Catering Services System" },
            { "author": "ziza", "quote": "Online and SMS Based Salary Notification" },
            { "author": "ziza", "quote": "Pharmacy Stocks Management" },
            { "author": "ziza", "quote": "Laundry Booking System" },
            { "author": "ziza", "quote": "Hotel Reservation Application" },
            { "author": "ziza", "quote": "Tourism Management Database System" },
            { "author": "ziza", "quote": "Management Information Systems for Tourism and Hospitality" },
            { "author": "ziza", "quote": "Hotel And Restaurant Management And Monitoring System with SMS Support" },
            { "author": "ziza", "quote": "Mobile Based Tourist Destination Information" },
            { "author": "ziza", "quote": "Hotel Best Prices Mobile Application" },
            { "author": "ziza", "quote": "Hospitality Information System" },
            { "author": "ziza", "quote": "Cloud-Based Property and Hospitality Management" },
            { "author": "ziza", "quote": "Hotel Booking App For Smart Travel" },
            { "author": "ziza", "quote": "Point of Sale (PoS) System used in the Hotel Industry" },
            { "author": "ziza", "quote": "BrowseHotel: Hotel Hopping using Mobile Devices" },
            { "author": "ziza", "quote": "Transaction Processing System in Hotel and Restaurant" },
            { "author": "ziza", "quote": "Travel Destination and Events Portal Capstone Project" },
            { "author": "ziza", "quote": "Property Management Information System" },
            { "author": "ziza", "quote": "Hotels and Vacation Rentals" },
            { "author": "ziza", "quote": "Maternal Records Management" },
            { "author": "ziza", "quote": "Smart Healthcare Support for Remote Patient Monitoring During COVID-19 Quarantine" },
            { "author": "ziza", "quote": "X-Ray Results Image Archiving" },
            { "author": "ziza", "quote": "First Aid Knowledge-Based Mobile Application" },
            { "author": "ziza", "quote": "Hospital Management System" },
            { "author": "ziza", "quote": "Hospital Resources and Room Utilization" },
            { "author": "ziza", "quote": "Online Platform for COVID-19 Contact Tracing System" },
            { "author": "ziza", "quote": "Nutrition Office Management Information System" },
            { "author": "ziza", "quote": "Patient monitoring and tracking system of family planning in the community" },
            { "author": "ziza", "quote": "Mask Wearing Monitoring Application" },
            { "author": "ziza", "quote": "Mobile Based E-Prescribing App with Admin Panel" },
            { "author": "ziza", "quote": "Clinic Management System" },
            { "author": "ziza", "quote": "Online Platform for Patient Dental and Medical Records" },
            { "author": "ziza", "quote": "Web-Based Psychopathology Diagnosis System" },
            { "author": "ziza", "quote": "Health and Welfare Monitoring System" },
            { "author": "ziza", "quote": "Mobile Based Common Ailment Guide with Admin Panel" },
            { "author": "ziza", "quote": "Blood Bank Information System" },
            { "author": "ziza", "quote": "Medicine Reminder Application" },
            { "author": "ziza", "quote": "Web and Mobile Based Information of Herbal Plants and Medicinal Usages" },
            { "author": "ziza", "quote": "Android Based Fitness and Exercise App" },
            { "author": "ziza", "quote": "Gym Management System" },
            { "author": "ziza", "quote": "Nutrition and Diet Mobile Application" },
            { "author": "ziza", "quote": "Contact Tracing Application" },
            { "author": "ziza", "quote": " COVID-19 Facilities Information System" },
            { "author": "ziza", "quote": "Online Bus Ticket Reservation" },
            { "author": "ziza", "quote": "Vehicle Rental System with Mobile App Support" },
            { "author": "ziza", "quote": "Driving School Management System" },
            { "author": "ziza", "quote": "Shipping Management System" },
            { "author": "ziza", "quote": "Vehicle Insurance Information System" },
            { "author": "ziza", "quote": "GPS based Vehicle Theft Detection System using GSM Technology" },
            { "author": "ziza", "quote": "Bike Portal Information System" },
            { "author": "ziza", "quote": "Vehicle Parking Management System" },
            { "author": "ziza", "quote": "Vehicle Impoundment Information Management System" },
            { "author": "ziza", "quote": "Vehicle Registration Portal" },
            { "author": "ziza", "quote": "Vehicle Franchising and Drivers Offense Software" },
            { "author": "ziza", "quote": "Traffic Management System" },
            { "author": "ziza", "quote": "Mobile Based Airline Reservation System (Android and IOS)" },
            { "author": "ziza", "quote": "Tricycle Driver Conduct Reporting Mobile Application" },
            { "author": "ziza", "quote": "PUV Transportation Route and Mapping System" },
            { "author": "ziza", "quote": "Driving School Management System" },
            { "author": "ziza", "quote": "QR Code Fare Payment System" },
            { "author": "ziza", "quote": "Courier Management System" },
            { "author": "ziza", "quote": "Mobile Based Emergency Reporting with SMS Support" },
            { "author": "ziza", "quote": "Interactive Flood Hazard Map" },
            { "author": "ziza", "quote": "Web and Mobile Crime Reporting System" },
            { "author": "ziza", "quote": "Weather Prediction App" },
            { "author": "ziza", "quote": "Bantay Baha Alert System with SMS and Push Notification" },
            { "author": "ziza", "quote": "Fire and Smoke Detection Application with SMS Notification" },
            { "author": "ziza", "quote": "SMS-based Flood Monitoring System" },
            { "author": "ziza", "quote": "Crisis Information Management Software" },
            { "author": "ziza", "quote": "Data Platform for Emergency Response Management" },
            { "author": "ziza", "quote": "Fire Extinguisher and Fire Fighting Drone" },
            { "author": "ziza", "quote": "Disaster Management Information System" },
            { "author": "ziza", "quote": "Crime Scene Management Mobile Application" },
            { "author": "ziza", "quote": "Android Based Controlled Water Sprinkler" },
            { "author": "ziza", "quote": "Online Platform for Plant Calendar Scheduling" },
            { "author": "ziza", "quote": "MobileMangrove a Mobile-Based Mangrove Species Field Guide" },
            { "author": "ziza", "quote": "Mobile Based Instructional Material for Agriculture" },
            { "author": "ziza", "quote": "Soil Moisture Sensor using Micro Controller" },
            { "author": "ziza", "quote": "E-commerce Platform for Farm Trading Activities" },
            { "author": "ziza", "quote": "Web and Mobile Based Monitoring and Tracking of Fertilizer Delivery Products" },
            { "author": "ziza", "quote": "Online Record Archiving of Soil Analysis Results" },
            { "author": "ziza", "quote": "Drone Based Seeding Application Controlled by Mobile Devices" },
            { "author": "ziza", "quote": "Dairy Farm Management System" },
            { "author": "ziza", "quote": "Water Monitoring For Aquaculture with SMS Notification" },
            { "author": "ziza", "quote": "Arduino Based Irrigation Device with Android Controlled Settings" },
            { "author": "ziza", "quote": "Android Based Feeds Scheduler Dispensing Application" },
            { "author": "ziza", "quote": "Mobile Based Farm Management Application" },
            { "author": "ziza", "quote": "Electronic Watering System for Vegetable Nursery Garden" },
            { "author": "ziza", "quote": "Solar-Powered Water Filtration System used in Farm Land" },
            { "author": "ziza", "quote": "Curfew and Travel Pass Information System" },
            { "author": "ziza", "quote": "Evacuation Center Management System" },
            { "author": "ziza", "quote": "PWD Information System" },
            { "author": "ziza", "quote": "Cloud-Based Business Permit Processing" },
            { "author": "ziza", "quote": "Vaccine Distribution System" },
            { "author": "ziza", "quote": "Senior Citizen Information System" },
            { "author": "ziza", "quote": "DSWD Donation System" },
            { "author": "ziza", "quote": "Information System for Bureau of Fire Protection" },
            { "author": "ziza", "quote": "Poverty and Malnutrition Monitoring System" },
            { "author": "ziza", "quote": "Project Monitoring and Evaluation System" },
            { "author": "ziza", "quote": "BJMP’S Visitor’s Log Monitoring System" },
            { "author": "ziza", "quote": "City Business Permit and Monitoring System with Decision Support" },
            { "author": "ziza", "quote": "Barangay Records Management System" },
            { "author": "ziza", "quote": "Housing Information Management with Mapping" },
            { "author": "ziza", "quote": "Census Monitoring" },
            { "author": "ziza", "quote": "Cedula Mobile: Cedula and Certification Request Mobile Application" },
            { "author": "ziza", "quote": "Health Center Information Management System" },
            { "author": "ziza", "quote": "Apps for Monitoring Temperature" },

            // What are Data Breaches and How to Prevent Them
            // Improving Data Security
            // Benefits of Car Transportation Systems
            // Ecommerce Pricing Control Systems
            // Mobile Event Planners
            // Alarm SMS Notification Systems
            // Mobile Learning: How it Works
            // Project Management Systems
            // Machine Learning and Big Data
            // University Networks
            // ARPANET: How The Internet Started
            // Latest Ecommerce Technologies
            // Cre Principles of Cybersecurity
            // Information Technology in the 21st century
            // Java Programming: The Basics
            // Software Testing 101
            // Introduction to Software Quality Assurance
            // Employee Productivity Apps
            // Onboarding Systems and HR
            // Cloud-Based Software vs. On-Site Solutions
            // Benefits of Cloud Solutions
            // Hotel PMS Systems
            // Smart Technology in the Hotel Industry
            // IoT and Data
            // New IoT Gadgets
            // What is Artificial Intelligence
            // What is Machine Learning
            // Robotics Systems
            // Neural Networks
            // How Has Technology Changed Our Lives
            // Censorship on the Internet
            // Should the Internet be Free?
            // Email Marketing Tools
            // Web Scrapers
            // How Machine Learning Learns
            // How is AI Affecting us Today
            // New Tech Innovations for the Near Future
            // What is Virtual Reality
            // How are Clouds Technologies Used for Data Storage
            // Mobile Apps That Improve Education
            // How The Internet Will Develop
            // Software as a Service
            // Platform as a Service
            // Infrastructure as a Service
            // SaaS, PaaS, & IaaS: Main Differences
            // How Google Ranks Websites
            // 3D Visualization in Architecture
            // Essential Skills 3D Artists Need
            // 3D Rendering Tools
            // DMaaS - Data Mining as a Service
            // Augmented Reality
            // VR vs. AR: Differences Explained
            // Automation Systems in the 21st century
            // Data Management for Big Companies
            // Essential Data Analyst Skills
            // AI and Gamification
            // Data Mining for Employee Evaluation
            // Data Mining in Healthcare
            // Machine Learning for OTAs
            // Facebook and Data
            // Censorship on Social Media
            // How Social Media Filters out Content
            // Fingerprint Authentication
            // IoT Sensors
            // Web Ordering Systems
            // How to Prevent Phishing Attacks
            // Using Web Scraping for Research
            // Web Proxies
            // Virtual Private Networks
            // Differences Between VPNs and Proxies
            // How Proxies Enhances Web Scraping
            // Home Automation Systems
            // Smart Homes
            // Warehouse Management Systems
            // How Voice Recognition Systems Work
            // QR Code Check-ins
            // Smart Systems in Cars
            // Should Cars Have More Computers or Less?
            // Solar Grass Cutters With Automation
            // Voice Controlled Tools
            // CRM Software
            // Online Training Software Benefits
            // ChatBots: Introduction
            // Complex Chat Bots
            // Using ML for Cybersecurity
            // Machine LEarning in Ecommerce
            // Elearning and Gamification
            // How Games Have Improved Digital Technologies
            // How Far Have Video Games Gone?
            // Home Voice Assistants
            // How Technology Helps Disabled People
            // Apps for Child Monitoring
            // Nutrition Tools
            // Semantic Web & Big Data
            // Autonomous Systems Today
            // Is The Internet Helping us?
            // Blockchain and Crypto
            // How Bitcoin Works
            // IoT and 5G
            // Edge Computing Explained
        ];


        //get random title
        let getTitle = Math.floor(Math.random() * titles.length);
        let randomQuotes = titles[getTitle].quote;
        let author = titles[getTitle].author;
        // display to DOM
        document.querySelector('.capstoneTitle').innerHTML = randomQuotes;
        document.querySelector('.titleAuthor').innerHTML = author;

        //set ID for every title
        let capstoneTitleValue = document.querySelector('.capstoneTitle').setAttribute('id', randomQuotes);

    };

});


// copy the title
const copyBtn = document.querySelector('.copy');
copyBtn.addEventListener('click', () => {
    let capstoneTitle = document.querySelector('.capstoneTitle').id;
    let capstoneAuthor = document.querySelector('.titleAuthor').id;

    // Copy the text inside the text field
    navigator.clipboard.writeText(`Title:${capstoneTitle}\nAuthor:${capstoneAuthor}`);
    document.querySelector('.copyText').innerHTML = '<i class="fa-regular fa-copy"></i> Text coppied';
    console.log('copy');

});