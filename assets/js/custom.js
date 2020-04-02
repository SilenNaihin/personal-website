const tags = [
    "one-pagers",
    "one-pagers",
    "decks",
    "decks highlights",
    "decks",
    "decks",
    "decks",
    "decks",
    "presentations highlights",
    "presentations",
    "presentations",
    "videos highlights",
    "videos",
    "videos",
    "videos",
    "design",
    "design highlights",
    "design highlights",
    "design highlights",

];
const tags_ = [
    "one-pagers_", 
    "one-pagers_", 
    "decks_",
    "decks_ highlights_",
    "decks_",
    "decks_",
    "decks_",
    "decks_",
    "presentations_ highlights_",
    "presentations_",
    "presentations_",
    "videos_ highlights_",
    "videos_",
    "videos_",
    "videos_",
    "design_",
    "design_ highlights_",
    "design_ highlights_",
    "design_ highlights_",

];
const links = [
    "assets/pdfs/Darwin^x one pager.pdf",
    "assets/pdfs/Ken-Sci One Pager.pdf",
    "assets/pdfs/Darwin^x Deck.pdf",
    "assets/pdfs/Walmart Deck.pdf",
    "assets/pdfs/Leasure Pitch Deck.pdf",
    "assets/pdfs/Tribalscale Ideathon.pdf",
    "assets/pdfs/TalkMoney.pdf",
    "assets/pdfs/Lendr.pdf",
    "https://www.youtube.com/watch?v=GJGrFeC1jng",
    "https://www.youtube.com/watch?v=FBzSuk7YYy8",
    "https://www.youtube.com/watch?v=e3rKigfU108",
    "https://www.youtube.com/watch?v=3WWrQXcktqc&t=128s",
    "https://www.youtube.com/watch?v=6guuI7C2K6I",
    "https://www.youtube.com/watch?v=hd-amAhrc_s",
    "https://www.youtube.com/watch?v=VzxxwZ8d7Q4",
    "assets/images/design/Dashboard.png",
    "assets/images/design/PRM.png",
    "http://peterma.ca/Livelihood/index.html",
    "https://darwinx.ca/",

];
const titles = [
    "Darwin^x", 
    "Ken Sci", 
    "Darwin^x Presentation",
    "Walmart Standalone Deck",
    "Leasure Pitch Deck",
    "Tribalscale Hackathon Pitch Deck",
    "FinHacks Hackathon Pitch Deck",
    "Elevate Hackathon Pitch Deck",
    "Grover's Algorithm - Potential To Break Cryptosystems",
    "Walmart Consultation - Transaction Fees",
    "Darwin^X - The Future of Personal Nanobot Armies",
    "Grover Algorithm - Explained With Visuals",
    "My Internship Experience With The Knowledge Society",
    "The Ultimate Basics of Marketing",
    "Quantum Tic-Tac-Toe - Qiskit",
    "Paradigm Hacks Dashboard",
    "Personal Relationship Manager UI",
    "Immigration Assistant Website",
    "Darwin^x Website",

];
const back_logos = [
    "fab fa-android", 
    "fas fa-heartbeat", 
    "fab fa-android",
    "fas fa-store",
    "fas fa-car",
    "fas fa-desktop",
    "fas fa-stream",
    "fas fa-money-bill-wave",
    "fas fa-atom",
    "fas fa-money-bill-wave",
    "fab fa-android",
    "fas fa-key",
    "fas fa-search-location",
    "fas fa-mail-bulk",
    "fas fa-atom",
    "fas fa-columns",
    "fas fa-chart-line",
    "fas fa-people-carry",
    "fas fa-atom",

];
const back_titles = [
    "Darwin^x", 
    "Ken Sci", 
    "Darwin^x",
    "Walmart",
    "Leasure",
    "Tribalscale Hackathon",
    "TalkMoney",
    "Lendr",
    "Grover's Algorithm",
    "Walmart",
    "Darwin^x",
    "Grover Algorithm",
    "The Knowledge Society Internship",
    "Basics of Marketing",
    "Quantum Tic-Tac-Toe",
    "Paradigm Hacks",
    "PRM",
    "Livelihood",
    "Darwin^x",

];
const back_descriptions = [
    "Proposal for a cheap and quick end-to-end process for the creation of nanobots.", 
    "Ken-Sci is a company that is changing the way medical predictions are made.",
    "Proposal for a cheap and quick end-to-end process for the creation of nanobots. Used when first introducing the proposal.", 
    "Proposal to Walmart to lower transaction fees. Selected to pitch at Walmart Canada HQ to executives.",
    "Invited to pitch to investors after our success at the Tribalscale Ideathon.",
    "A Tribalscale internal hackathon to which I was invited to. My team ended up securing 2nd and winning $800.",
    "Solving the problem of financial readability through NLP. We ended up securing 1st at the hackathon, winning us $200.",
    "Predatory payday loans are huge problem for immigrants and those without credit. We proposed a solution using AI and a peer to peer network to solve this issue.",
    "Grover's algorithm, and it's insane applications to encryption. I focus on how quantum computers can break SHA256 (the encryption method that Bitcoin is based on) using Grovers algorithm.",
    "Proposal to Walmart to lower transaction fees. Selected to pitch at Walmart Canada HQ to executives.",
    "Proposal for a cheap and quick end-to-end process for the creation of nanobots. First iteration of the pitch.",
    "In this video I go over Grover's algorithm, and talk about it's applications. This video has garnered 5 thousand views since posted.",
    "The Knowledge Society was scaling this year, and I was brought on the team to help run the marketing. I made a video to show what I learned.",
    "A quick video to educate the layman about the basics of marketing. Surface level overview.",
    "When learning about quantum computing, this was the first project I worked on. I built quantum tic-tac-toe using IBM's quantum library Qiskit.",
    "An IGM & Mackenzie Investements internal hackathon to which I was invited to. My team ended up securing 3rd, winning us $1500.",
    "A personal relationship manager I am in the process of building. Check my github for the code and any updates.",
    "Built at Hack the Hammer 2. We built a web app for the assistance of immigrants, and ended up winning in the design and best web app categories.",
    "The website that was built for the Darwin^x project. A proposal for a cheap and quick end-to-end process for the creation of nanobots.",
];

const portfolio = document.getElementById('portfolio');

for(i = 0; i < tags.length; i++){
    let tag = tags[i];
    let tag_ = tags_[i];
    let link = links[i];
    let picture = [i];
    let title = titles[i];
    let back_logo = back_logos[i];
    let back_title = back_titles[i];
    let back_description = back_descriptions[i];

    portfolio.innerHTML += `
    <div class="col-sm-6 col-md-4 ${tag} ${tag_} tile scale-anm">
        <a href="${link}" target="_blank">
            <div class="services-flip fadeInUp ${tag}" data-wow-duration="1.5s">
                <div class="services-list ${tag}">
                    <div class="services-list-front portfolio-list-${picture[0]} ${tag}">
                        <div class="flip-content ${tag}">
                            <h5 class="mb-0">${title}</h5>
                        </div>
                    </div>
                    <div class="services-list-back ${tag}">
                        <div class="flip-content ${tag}">
                            <div class="services-list-icon ${tag}">
                                <i class=" ${back_logo}  "></i>
                            </div>
                            <div class="mt-4 ${tag}">
                                <h5 class="mb-0">${back_title}</h5>
                                <p class=" mt-3">${back_description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `;
}

// Portfolio Section
const links_portfolio = [
    "projects/Livelihood.html",
    "projects/Leasure.html",
    "projects/Darwin^x.html",
    "projects/Walmart.html",
    "projects/Grover.html",
    "projects/Lendr.html",
    "projects/Talk Money.html",
    
    "projects/PRM.html",
];
const port_imgs = [
    "assets/images/Lendr/lendrprojects.png",
    "assets/images/Leasure/leasureprojects.png",
    "assets/images/Darwin^x/darwinxprojects.png",
    "assets/images/Walmart/walmartprojects.png",
    "assets/images/Grover/groverprojects.png",
    "assets/images/Livelihood/livelihoodprojects.png",
    "assets/images/Talk Money/talkmoneyprojects.png",
    
    "assets/images/PRM/prmprojects.png",
];
const port_titles = [
    "Livelihood (Hackathon)",
    "Leasure (Hackathon)",
    "Darwin^x",
    "Walpay",
    "Grover's Algorithm",
    "Lendr (Hackthon)",
    "Talk Money (Hackathon)",
    
    "6Degrees",
];
const port_descs = [
    "Web App To Improve Immigrants Transition Experience",
    "Car Sharing Company Concept (won $200 at Tribalscale Ideathon)",
    "Moonshot Company",
    "Consulting for Walmart (presented to executives at Walmart HQ)",
    "Breaking Cryptosystems With Quantum Computers",
    "Aid Against Predatory Payday Loans",
    "NLP To Improve Financial Readability",
    
    "Keep In Touch With Contacts Effortlessly",
];
const port_bottom = [
    "Livelihood - <b>Polishing The Immigrantion Experience</b>",
    "Leasure - <b>Advancing The Car Sharing Economy To The Next Level</b>",
    "Darwin^x - <b>Curing Cancer With Nanobots</b>",
    "Walpay - <b>Lowering Walmart's Transaction Fees</b>",
    "Grover's Algorithm - <b>Encryption and Quantum Computers</b>",
    "Lendr - <b>The Fight Against Predatory Loans</b>",
    "Talk Money - <b>Improving Financial Readability For All</b>",
    
    "Personal Relationship Manager - <b>Triple Your Emotional Intelligence</b>",

];

const projects = document.getElementById('projects_generation');

for(i = 0; i < links_portfolio.length; i++){
    let link = links_portfolio[i];
    let img = port_imgs[i];
    let title = port_titles[i];
    let descs = port_descs[i];
    let bottom = port_bottom[i];

    projects.innerHTML += `
    <div class="portfolio-item swiper-slide " data-groups="all slideshow">
        <a href="${link}" target='_blank' class="portfolio-item--content">
            <div class="portfolio-item--img b-box">
                <img src="${img}" class="img-fluid mx-auto" alt="work-img">
            </div>
            <div class="portfolio-item--desc d-flex justify-content-center align-items-center">
                <div class="portfolio-item--desc-in">
                    <h3 class="mb-2 text-white">${title}</h3>
                    <p class="text-white">${descs}</p>
                </div>
            </div>
        </a>
        <div class="portfolio-item--label p-3">
            <span class="d-block text-center font-weight-bold blog-cat">${bottom}</span>
        </div>
    </div>
    `;
}

// Testimonial Section
// const test_pic = [
//     "assets/images/avatar1.jpg",
//     "assets/images/avatar1.jpg",
//     "assets/images/avatar1.jpg",
//     "assets/images/avatar1.jpg",
//     "assets/images/avatar1.jpg",
// ];
// const test_main = [
//     "Be Kind",
//     "Be Kind",
//     "Be Kind",
//     "Be Kind",
//     "Be Kind",
// ];
// const test_desc = [
//     "The wall",
//     "The wall",
//     "The wall",
//     "The wall",
//     "The wall",
//     "The wall",
//     "The wall",
//     "The wall",
//     "The wall",

// ];

// const testimony = document.getElementById('testimony_generation');

// for(i = 0; i < test_pic.length; i++){
//     let pic = test_pic[i];
//     let main = test_main[i];
//     let desc = test_desc[i];

//     testimony.innerHTML += `
//     <div class="swiper-slide single-testimonials ">
//         <div class="single-testimonials-in text-center p-4 b-box mx-auto">
//             <img src="${pic}" alt="" class="mx-auto b-box">
//             <p class="pt-2 mt-4 text-center">"${main}"</p>
//             <span class="font-weight-bold mt-3 d-block">${desc}</span>
//         </div>
//     </div>`
// };

// Newsletter Popup
    // var ml_webform_1690650 = ml_account('webforms', '1690650', 'a4q2u1', 'load');
    // ml_webform_1690650('animation', 'fadeIn');

// Blog Section
const blog_link = [
    "https://medium.com/darwin-x/darwin-x-enabling-the-nanobot-revolution-dbc9b791dd8d",
    "https://blog.usejournal.com/goodbye-bitcoin-hello-quantum-9749ed451872",
    "https://medium.com/future-vision/a-simple-introduction-to-the-basics-of-data-science-cdeaf237c4b9",
    "https://medium.com/@silen.naihin/making-procrastination-your-b-ch-c2b8f1fb6b87",
    "https://blog.usejournal.com/quantum-computing-the-basics-the-bad-and-the-solution-59af357fb52",
    "https://medium.com/future-vision/how-to-dream-big-peter-diamandis-1d7d72017ff7",
    "https://blog.usejournal.com/why-did-the-chicken-cross-the-road-fd77891aa7a4",
    "https://blog.usejournal.com/meaning-behind-the-4-mysterious-letters-jungian-psychology-336b56e2af50",
    "https://blog.usejournal.com/breaking-cryptosystems-with-quantum-computers-c83b0fd991d8",
    "https://blog.usejournal.com/tic-tac-toe-but-more-confusing-and-way-cooler-1a3db38bd107",
];
const blog_img = [
    "assets/images/articles/1. Darwin^x.png",
    "assets/images/articles/2. Breaking encryption.png",
    "assets/images/articles/3. Data science.png",
    "assets/images/articles/4. Procrastination.png",
    "assets/images/articles/5. First Quantum Article.png",
    "assets/images/articles/6. Daimandis.png",
    "assets/images/articles/7. Humour.png",
    "assets/images/articles/8. Jungian.png",
    "assets/images/articles/9. Grovers Algo.png",
    "assets/images/articles/11. QTTT.jpg",

];
const blog_title = [
    "8 Min Read",
    "8 Min Read",
    "6 Min Read",
    "14 Min Read",
    "12 Min Read",
    "10 Mins Read",
    "11 Min Read",
    "7 Min Read",
    "12 Min Read",
    "5 Min Read",
];
const blog_time = [
    "Nanorobots. Thousands of times smaller than the thickness of a human hair. What if cancer became as curable as the common cold? What if…",
    "Digital security. Not only do you use it, you rely on it daily. What if I told you that quantum computers have the potential to threaten it?",
    "Computer science, math, and statistics decided to get married, and have a baby. That baby was called data science...",
    "It's 11 pm. You haven't started on a project that's due tomorrow. You work hard, harder than you had in the 3 weeks prior to when the work…",
    "What are quantum computers? What are the problems? How can we overcome those problems to make quantum computers a reality?",
    "Let me ask you one question. What is your MTP? What makes you get out of bed every morning and say \"this is why I am alive\"?",
    "To find someone with a better sense of humor. What makes something funny? What makes a combination of words a joke?",
    "Have you ever taken a personality test? Did you wonder the meaning behind the 4 letters that somehow know everything about you?",
    "In 1996 Lov Grover invented a quantum database search algorithm called Grover's algorithm (very original). ",
    "Superposition. Collapse of the wavefunction. The two words shot out through the air in forms of soundwaves, making anyone in their path confused.",
];
const blog_bottom_title = [
    "Darwin^X — Curing Cancer With Nanobots",
    "Goodbye Bitcoin… Hello Quantum",
    "A Simple Introduction: The Basics of Data Science",
    "Making Procrastination Your B**ch",
    "Quantum Computing — The Basics, The Bad, and the Solution",
    "How To Dream Big — Peter Diamandis",
    "Why did the chicken cross the road?",
    "Meaning Behind The 4 Mysterious Letters — Jungian Psychology",
    "Breaking Cryptosystems With Quantum Computers",
    "Tic-tac-toe… but more confusing and way cooler",
];
const blog_bottom_desc = [
    "145 Claps",
    "297 Claps",
    "160 Claps",
    "353 Claps",
    "529 Claps",
    "250 Claps",
    "150 Claps",
    "154 Claps",
    "315 Claps",
    "336 Claps",
];


const blog = document.getElementById('blog_generation');

for(i = 0; i < blog_link.length; i++){
    let link = blog_link[i];
    let img = blog_img[i];
    let title = blog_title[i];
    let time = blog_time[i];
    let bottom = blog_bottom_title[i];
    let descs = blog_bottom_desc[i];

    blog.innerHTML += `
    <a href="${link}" target="_blank" class="swiper-slide blog-list b-box hover-state d-block mb-4">
        <div class="blog-list--img wow fadeIn" data-wow-duration="1.5s">
            <img src="${img}" alt="Blog Image" class="img-fluid">
            <div class="blog-list--details d-flex justify-content-center align-items-center">
                <div class="blog-list--details-in">
                    <p class="blog-by text-white font-weight-bold">${title}</p>
                    <span class="blog-duration text-white"><i>${time}</i></span>
                </div>
            </div>
        </div>
        <div class="blog-list--desc p-3">
            <p>${bottom}</p>
            <span class="d-block text-center mt-3 font-weight-bold blog-cat">${descs}</span>
        </div>
    </a>
    `
}

// Newsletter 
const news_link = [
    "https://preview.mailerlite.com/o0v9w2",
    "https://preview.mailerlite.com/u5p7g3",
    "https://preview.mailerlite.com/d7o5i7",
    "https://preview.mailerlite.com/b4c9b3",
    "https://preview.mailerlite.com/u5o7d8",
    "https://preview.mailerlite.com/g7c9x2",
    "https://preview.mailerlite.com/w7e2p3",
    "https://preview.mailerlite.com/t4y4x3",
    "https://preview.mailerlite.com/a1p5p4",
    "https://preview.mailerlite.com/l7j3c1",
];
const news_img = [
    "assets/images/newsletter/November 2019.png",
    "assets/images/newsletter/October 2019.png",
    "assets/images/newsletter/September 2019.jpg",
    "assets/images/newsletter/June.July2019.jpg",
    "assets/images/newsletter/May 2019.jpeg",
    "assets/images/newsletter/March 2019.jpeg",
    "assets/images/newsletter/February 2019.jpeg",
    "assets/images/newsletter/January 2019.png",
    "assets/images/newsletter/December 2018.jpeg",
    "assets/images/newsletter/November 2018.jpeg",
];
const news_title = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];
const news_time = [
    "Winning FinHacks, writing an article about humour, and applying to CES Young Innovators",
    "Winning $1500 at a hackathon, quantum supremacy, and Nietzsche!",
    "End of my internship at Elevate, start of a new project and more!",
    "Sad endings, and happy new beginnings. Updates on my thoughts, Darwin^X, and all of my favorite apps.",
    "Attending Collision, TKS Showcase, working on Darwin^X, meeting Michael Seibel, and touring IBM",
    "I went on a missionary trip to Jamaica and started learning about Jungian psychology.",
    "I wrote an article about procrastination, and went to a data science workshop.",
    "Breaking Bitcoin encryption with quantum computers, and attending several cool events!",
    "I attended a Google conference, and coded a quantum tic-tac-toe game.",
    "From consulting and recommending Walmart innovative solutions, to researching quantum computing.",
];
const news_bottom_title = [
    "November Newsletter",
    "October Newsletter",
    "August/September Newsletter",
    "June/July Newsletter",
    "May Newsletter",
    "March Newsletter",
    "February Newsletter",
    "January Newsletter",
    "December Newsletter",
    "November Newsletter",
];
const news_bottom_desc = [
    "2019",
    "2019",
    "2019",
    "2019",
    "2019",
    "2019",
    "2019",
    "2019",
    "2018",
    "2018",
];

const newsletter = document.getElementById('newsletter_generation');

for(i = 0; i < news_link.length; i++){
    let link = news_link[i];
    let img = news_img[i];
    let title = news_title[i];
    let time = news_time[i];
    let bottom = news_bottom_title[i];
    let descs = news_bottom_desc[i];

    newsletter.innerHTML += `
    <a href="${link}" target="_blank" class="swiper-slide blog-list b-box hover-state d-block mb-4">
        <div class="blog-list--img wow fadeIn" data-wow-duration="1.5s">
            <img src="${img}" alt="Blog Image" class="img-fluid">
            <div class="blog-list--details d-flex justify-content-center align-items-center">
                <div class="blog-list--details-in">
                    <p class="blog-by text-white font-weight-bold">${title}</p>
                    <span class="blog-duration text-white"><i>${time}</i></span>
                </div>
            </div>
        </div>
        <div class="blog-list--desc p-3">
            <p>${bottom}</p>
            <span class="d-block text-center mt-3 font-weight-bold blog-cat">${descs}</span>
        </div>
    </a>
    `
}

! function($) {
    // $('.portfolio-item').mouseenter(function() {
    //     $(this).find('.portfolio-item--label').css('opacity', '30%');
    //   });
    
    // $('.portfolio-item').mouseleave(function() {
    //     $(this).find('.portfolio-item--label').css('opacity', '80%');
    // });

    "use strict";

    /* Preloader */

    $(window).on('load', function() {
        $('#preloader').addClass("loaded");
    });

    /* Section Scroll - Navbar */
    
    $('.navbar-nav a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');

        if($('.navbar').hasClass('active')){
            $('.navbar').removeClass('active')
            $('.ham').removeClass('active')
        }

        event.preventDefault();
    });

    $('.navbar-toggler').on('click', function(){
        $('.aside').toggleClass('aside-open');
        $(".ham").toggleClass('active');
    });


    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 50 ) {
            $('.section-about').addClass("in");
            $('.overlay-wrap').fadeOut(400);
        } else {
            $('.section-about').removeClass("in");
            $('.overlay-wrap').fadeIn(400);
        }

        if ($(this).scrollTop() > 500 ) {
            $('.navbar').fadeIn(400);
        } else {
            $('.navbar').fadeOut(400);
        }


    });

    /* Scroll Spy - init */

    $("#navbarCollapse").scrollspy({
        offset:20
    });

    /* Magnific Popup - Init */

    $('.simple-ajax-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });


    /* Swipper - Init */

    // Portolio init
    // // Portfolio Init
    // var swipertest_ = new Swiper('.swiper-testimony_', {
    //     spaceBetween: 30,
    //     
    // });

    var swiper = new Swiper('.swiper-portfolio', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        observer: true, 
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: -30,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 25,
            stretch: 0,
            depth: 150,
            slideShadows : false,
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: '.portfolio-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            el: '.portfolio-nav',
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: {
            invert: true,
            forceToAxis: true,
            sensitivity: 2,
          },
    });

    // Testimony init

    var swipertest = new Swiper('.swiper-testimony', {
        spaceBetween: 30,
        loop: true,
        navigation: {
            el: '.testimony-nav',
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: {
            invert: true,
            forceToAxis: true,
            sensitivity: 2,
          },
    });



    // Blog Init

    var swipert = new Swiper('.swiper-blog', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-progressbar',
            type: 'progressbar',
        },
        mousewheel: {
            invert: true,
            forceToAxis: true,
            sensitivity: 2,
          },
        navigation: {
            el: '.blog-nav',
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
    });

    // Home Banner Init

    var swiper = new Swiper('.swiper-home', {
        spaceBetween: 3,
        effect: 'fade',
        pagination: {
            el: '.home-pagination',
            clickable: true,
        }
    });

    /* Parallax - Init */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('#home').css({'background-attachment': 'scroll'});
    } else {
        $('#home').parallax('50%', -0.3);
    }

    if($('.section-home').length) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('.swiper-slide').css({'background-attachment': 'scroll'});
        } else {
            $('.swiper-slide').parallax('50%', -0.3);
        }        
    }

    /* AnimateOnScroll - Init */ 

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );
    wow.init();

    /* Youtub Player */


    if($('.youtube-bg').length) {
        $(".youtube-bg").mb_YTPlayer();
    }

    


}(window.jQuery);

