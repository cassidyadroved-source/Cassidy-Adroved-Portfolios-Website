const categories = {
  ux: {
    title: "UX/UI Design",
    sub_title: "Designing intuitive, structured digital experiences.",
    description: "These projects focus on creating user-centered interfaces that balance clarity, usability, and visual structure. From research and wireframing to final interface design, each solution is built to guide users naturally while supporting engagement and long-term interaction.",
    sectionTitles: [
      "Research",
      "Personas",
      "User Flows",
      "Wireframes",
      "Design Solutions",
      "Features"
    ],
    projects: [
      "Wish",
      "Crave",
      "Giggle",
      "Balanced",
      "Dashboard",
      "Bluewater",
      "Linked",
      "Davena Farms",
      "Infinite",
      "SHR Construction",
      "Paradigm Solutions",
      "Simply Green"
    ]
  },
  branding: {
    title: "Branding & Layout Design",
    sub_title: "Building thoughtful and cohesive brand systems",
    description: "These branding projects explore identity through typography, color, layout, and storytelling. Each system is designed to create consistency, recognition, and personality across both digital and physical touchpoints.",
    sectionTitles: [
      "Research",
      "Audience",
      "Color Scheme",
      "Logo",
      "Typography",
      "Supporting Elements"
    ],
    projects: [
      "Roots",
      "Sunshine",
      "Crave",
      "Giggle",
      "Balanced",
      "AIGA DEC",
      "Paradigm Solutions",
      "Davena Farms",
      "Infinite",
      "SHR Construction",
      "Tamed Magazine",
      "Simply Green",
      "Linked",
      "Bluewater",
      "Target Brochure",
      "Night Life",
      "Better World with Design",
      "Font Cards"
    ]
  },
  front_end: {
    title: "Front-end Development",
    sub_title: "Bringing design to life through code",
    description: "These projects translate visual concepts into responsive, functional interfaces using front-end development. The focus is on structure, accessibility, and interaction while maintaining consistency between design and implementation.",
    sectionTitles: [
      "Research",
      "Planning",
      "Semantic Layout",
      "Wireframes",
      "Consistency",
      "Responsive Design"
    ],
    projects: [
      "Giggle",
      "Dashboard",
      "Night Life",
      "Simply Green",
      "SHR Construction"
    ]
  }
};

const projects = {
  Wish: {
    title: "Wish",
    sub_title: "A social platform designed for growth",
    paragraph: "Concept for a social media app that allows users to make wishes, monitor their progress, and connect with others in a positive way.",
    main_img: {
      src: "../images/wish-app6.jpeg",
      alt: "Wish app interface screens"
    },
    role: "UX/UI Designer",
    deliverables: "App Design",
    tools: "Figma, Adobe Photoshop",
    overview: "Wish is a social motivation app idea that helps people set goals, see how far they've come, and stay motivated by interacting with other users. The interface combines personal tracking tools with social engagement features to help users build positive habits over time and receive encouragement throughout the process.",
    problem: "Most social media platforms focus more on comparison than personal growth. People who want to stay motivated, organized, and encouraged often lack tools that help them set goals while also connecting with a supportive community.",
    goal: "Create a positive social platform that gives users the ability to organize their aspirations, track progress through structured goal-setting tools, and stay motivated through supportive community interaction.",
    final_subtitle: "Final interface supporting structured motivation",
    final_paragraph: "The final design brings together goal tracking, inspiration feeds, and community interaction into one cohesive platform focused on encouragement and progress. By structuring features around milestone tracking and positive engagement, Wish creates a space where users can stay motivated while working toward meaningful aspirations.",
    small_images: [
      {
        src: "../images/wish-app5.jpeg",
        alt: "Wish app badge screens"
      },
      {
        src: "../images/wish-app9.jpeg",
        alt: "Wish app profile screen"
      },
      {
        src: "../images/wish-app10.jpeg",
        alt: "Wish app wishes screen"
      }
    ],
    large_images: [
      {
        src: "../images/wish-app6.jpeg",
        alt: "Wish app full interface screens"
      },
      {
        src: "../images/wish-app8.jpeg",
        alt: "Wish app research and features"
      },
      {
        src: "../images/wish-app4.jpeg",
        alt: "Wish app login and persona screens"
      }
    ],
    pageType: "case-study",
    caseStudyCategories: [
      "ux"
    ],
    research: [
      {
        text: "The initial research focused on how people use motivation-based platforms and why traditional social media sites do not always support personal growth. Many users reported feeling overwhelmed by negativity, a lack of structure, and limited tools for tracking meaningful goals. Research on the target audience showed that users between the ages of 15 and 35 are especially interested in mindfulness, self-improvement, and supportive communities. These users want daily inspiration, tools for setting and reaching goals, and spaces that encourage progress without creating pressure to compare themselves to others.",
        img: "../images/Wish-case_14.png",
        alt: "Wish app research and competitor analysis"
      }
    ],
    personas: [
      {
        text: "Sarah represents users who are trying to figure out their next steps while balancing responsibilities and long-term goals. She wants to grow personally, but struggles with organization and follow-through. Wish supports users like Sarah by providing structured goal tracking, motivational tools, and a positive social environment that lowers stress while encouraging steady progress.",
        img: "../images/Wish-case_12.png",
        alt: "Wish app persona and user profile screens"
      }
    ],
    userflows: [
      {
        text: "The user flows focused on wish creation, milestone tracking, interaction with inspirational content, and engagement with community-generated posts. These pathways were designed to help users move smoothly between personal goal-setting tools and social features while staying focused on meaningful progress.",
        img: "../images/Wish-case_18.png",
        alt: "Wish app user flow screens"
      }
    ],
    wireframes: [
      {
        text: "The wireframes mapped out the structure of the core experience, including wish creation, milestone tracking, inspirational content, and community interaction. The goal was to build a clear framework that supports both personal growth and social encouragement within one platform.",
        img: "../images/Wish-case_16.png",
        alt: "Wish app wireframe layouts"
      }
    ],
    designsolution: [
      {
        text: "The platform also includes community interaction features such as likes and comments to encourage support between users. Inspiration feeds and mindfulness-based content were added to strengthen motivation and emotional well-being throughout the experience.",
        img: "../images/Wish-case_20.png",
        alt: "Wish app community and motivation screens"
      }
    ],
    feature: [
      {
        text: "The posting tools are designed to help users clearly express their goals and aspirations. Milestone tracking supports step-by-step progress toward a larger goal while making achievements feel more manageable.",
        img: "../images/Wish-case_26.png",
        alt: "Wish app feature screens showing badges and progress tools",
      }
    ]
  },
  Crave: {
    title: "Crave",
    sub_title: "Designing a streamlined self-service café ordering flow",
    paragraph: "The Crave Coffee Co kiosk is a self-service ordering system designed to support efficient menu navigation, beverage customization, and order placement while reducing wait times in a café environment.",
    main_img: {
      src: "../images/crave10.jpeg",
      alt: "Crave kiosk interface screens"
    },
    role: "UX/UI Designer, Brand Identity Designer",
    deliverables: "Kiosk Interface Design, Branding",
    tools: "Adobe XD, Adobe Photoshop, Adobe Illustrator",
    overview: "This project explores the design process for a self-service ordering kiosk for Crave Coffee Co. The goal was to create a fast, user-friendly system that streamlines menu navigation, customization, and checkout while supporting both first-time and returning customers.",
    problem: "Traditional café ordering often causes congestion during busy hours. Customers must wait in line or navigate unclear digital systems that slow the process further. The challenge was to design a kiosk that reduces wait time while keeping ordering simple, clear, and accessible in a shared public setting.",
    goal: "Design a touch-friendly kiosk system that supports quick ordering, customization, and saved-order access for returning users while helping new users move through the process with confidence.",
    final_subtitle: "Final kiosk experience to support fast café ordering",
    final_paragraph: "The final kiosk experience supports fast café ordering through a clear structure that recognizes returning users while maintaining simplicity for new ones. By allowing users to order from saved profiles, recall previous orders, and enter table tent numbers for table delivery, the system helps reduce friction while preserving clarity throughout the process.",
    small_images: [
      {
        src: "../images/crave4.jpeg",
        alt: "Crave opening screen"
      },
      {
        src: "../images/crave6.jpeg",
        alt: "Crave kiosk screens"
      },
      {
        src: "../images/crave5.jpeg",
        alt: "Crave ordering screens"
      }
    ],
    large_images: [
      {
        src: "../images/crave9.jpeg",
        alt: "Crave ordering and login screens"
      },
      {
        src: "../images/crave10.jpeg",
        alt: "Crave full kiosk screens"
      },
      {
        src: "../images/crave11.jpeg",
        alt: "Crave ordering and payment screens"
      }
    ],
    pageType: "case-study",
    caseStudyCategories: [
      "ux",
      "branding"
    ],
    research: [
      {
        text: "The research explored how users interact with ordering kiosks in fast-paced café environments where speed and ease of use are essential. Competitive analysis showed that many coffee brands rely more heavily on mobile ordering than in-store kiosks, creating an opportunity to design a more efficient physical ordering experience.",
        img: "../images/crave-case_14.png",
        alt: "Crave kiosk research and competitive analysis"
      }
    ],
    personas: [
      {
        text: "The kiosk was designed for busy café customers who want to place orders quickly before work or during short breaks. These users already rely on digital tools in daily life and expect ordering technology to reduce friction rather than create it. They also want to reorder familiar items without losing the option to customize.",
        img: "../images/crave-case_12.png",
        alt: "Crave kiosk persona screens"
      }
    ],
    userflows: [
      {
        text: "The user flow includes three primary paths: new customer ordering, returning customer ordering, and guest checkout. New users can create a profile with phone verification, while returning users can access saved orders for faster reordering. From there, users browse categories, customize items, review their cart, enter a table tent number, choose payment options, and confirm their order.",
        img: "../images/crave-case_18.png",
        alt: "Crave kiosk user flow screens"
      }
    ],
    wireframes: [
      {
        text: "The wireframes focused on menu hierarchy, interaction order, and category navigation to help customers make quick decisions while ordering. The layouts emphasized large touch targets, strong visual hierarchy, and simple movement between steps.",
        img: "../images/crave-case_16.png",
        alt: "Crave kiosk wireframes"
      }
    ],
    designsolution: [
      {
        text: "The design solution introduced multiple entry points for new users, returning users, and guests, along with SMS verification for profile access. The ordering system was structured around clear category browsing, saved-order recall, and customization panels that help users adjust food and drink selections without confusion.",
        img: "../images/crave-case_26.png",
        alt: "Crave kiosk design solution screens",
  
      }
    ],
    feature: [
      {
        text: "The kiosk also includes cart editing, table tent number entry for order-to-table service, checkout with tipping options, payment confirmation, and receipt delivery to the user's phone.",
        img: "../images/crave-case_24.png",
        alt: "Crave kiosk cart and checkout features"
      }
    ],
    audience: [
      {
        text: "The brand targets customers looking for a quick and reliable café experience while still feeling welcomed by a neighborhood coffee shop atmosphere. Many users visit during busy morning routines and benefit from a system that feels familiar, simple to navigate, and visually calm.",
        img: "../images/crave-case_2.png",
        alt: "Crave brand audience and interface application"
      }
    ],
    color_scheme: [
      {
        text: "The color palette was designed to reflect warmth and comfort commonly associated with café environments. Neutral backgrounds support readability, while warm accent tones highlight interaction points and important actions. Soft browns and warm beige tones reinforce the coffee theme while maintaining contrast across kiosk screens.",
        img: "../images/crave-case_4.png",
        alt: "Crave kiosk color palette"
      }
    ],
    logo: [
      {
        text: "The Crave Coffee Co logo combines a clean wordmark with a simple circular icon inspired by coffee textures and café culture. The mark was designed to remain recognizable at multiple sizes and across both physical signage and digital interface applications.",
        img: "../images/crave-case_6.png",
        alt: "Crave Coffee Co logo design"
      }
    ],
    typography: [
      {
        text: "Typography was selected to balance personality with readability. Como Bold is used for headings to create strong visual anchors, while Urbane Rounded supports subheadings and body text to maintain clarity across interface screens. This pairing creates a friendly tone while staying legible in a fast-paced ordering environment.",
        img: "../images/crave-case_10.png",
        alt: "Crave typography system"
      }
    ],
    supporting_elements: [
      {
        text: "Supporting graphics include a repeating coffee bean pattern and a simple icon set that reinforce the brand personality without overwhelming the interface. These elements create consistency across screens while adding warmth to an otherwise minimal system.",
        img: "../images/crave-case_8.png",
        alt: "Crave brand supporting elements"
      }
    ]
  },

  Giggle: {
    title: "Giggle",
    sub_title: "A playful streaming experience built around discovery",
    paragraph: "Giggle is a movie streaming concept focused on creating a more engaging browsing experience through strong visual hierarchy, categorized content, and streamlined movie discovery.",
    main_img: {
      src: "../images/giggle14.jpeg",
      alt: "Giggle streaming platform screens"
    },
    role: "UX/UI Designer, Brand Identity Designer, Front-end Developer",
    deliverables: "Streaming Platform Design, Branding, Front-end Development",
    tools: "Figma, HTML, CSS, JavaScript",
    overview: "Giggle is a streaming platform concept designed to improve how users browse and discover entertainment content. The experience combines strong visual hierarchy with categorized browsing systems and detailed movie pages that encourage exploration while keeping navigation simple and intuitive.",
    problem: "Many streaming platforms overwhelm users with cluttered interfaces and excessive content, making it difficult to quickly find something engaging to watch. Users often spend more time browsing than interacting with content itself.",
    goal: "Design a playful and visually engaging streaming platform that simplifies movie discovery while supporting fast browsing, categorized exploration, and detailed film information.",
    final_subtitle: "Final streaming interface focused on discovery and engagement",
    final_paragraph: "The final experience emphasizes movie discovery through featured content sections, categorized browsing systems, and detailed movie information pages. By combining playful visuals with structured navigation, the interface encourages users to explore content while maintaining clarity and ease of use throughout the experience.",
    small_images: [
      {
        src: "../images/giggle2.jpeg",
        alt: "Giggle movie categories"
      },
      {
        src: "../images/giggle3.jpeg",
        alt: "Giggle movie details page"
      },
      {
        src: "../images/giggle4.jpeg",
        alt: "Giggle homepage layout"
      }
    ],
    large_images: [
      {
        src: "../images/giggle6.jpeg",
        alt: "Giggle full streaming interface"
      },
      {
        src: "../images/giggle7.jpeg",
        alt: "Giggle responsive interface"
      },
      {
        src: "../images/giggle8.jpeg",
        alt: "Giggle feature layouts"
      }
    ],
    pageType: "case-study",
    caseStudyCategories: [
      "ux",
      "branding",
      "front_end"
    ],
    research: [
      {
        text: "The research explored how users browse streaming services and what causes frustration during content discovery. Competitive analysis showed that many platforms overload users with information while lacking clear visual hierarchy or meaningful categorization systems.",
        img: "../images/giggle-case_14.png",
        alt: "Giggle streaming competitor analysis"
      }
    ],
    personas: [
      {
        text: "The primary audience includes younger users who frequently consume digital entertainment and expect modern interfaces that feel interactive and visually engaging. These users want quick access to content, personalized discovery experiences, and interfaces that feel playful without becoming overwhelming.",
        img: "../images/giggle-case_12.png",
        alt: "Giggle user persona"
      }
    ],
    userflows: [
      {
        text: "The user flow focuses on fast content discovery. Users can move from featured content on the homepage into categorized movie sections, detailed movie pages, and external links for additional information about directors or actors.",
        img: "../images/giggle-case_18.png",
        alt: "Giggle user flow"
      }
    ],
    wireframes: [
      {
        text: "The wireframes focused on homepage hierarchy, category organization, and the relationship between browsing sections and detailed movie pages. Layouts were structured to encourage continuous exploration while maintaining readability.",
        img: "../images/giggle-case-16.png",
        alt: "Giggle wireframes"
      }
    ],
    designsolution: [
      {
        text: "The design solution uses large featured content areas, categorized movie rows, and clear visual separation between browsing sections to simplify navigation. Interactive elements such as hover states and expandable movie details help users feel more connected to the platform.",
        img: "../images/giggle-case_20.png",
        alt: "Giggle design solutions",
      }
    ],
    feature: [
      {
        text: "Features include featured movie banners, categorized browsing sections, thumbs-up and thumbs-down interaction systems, linked director profiles, release dates, ratings, and searchable movie collections.",
        img: "../images/giggle-case_26.png",
        alt: "Giggle feature highlights",
      }
    ],
    audience: [
      {
        text: "Giggle targets entertainment-focused users who enjoy modern streaming experiences that feel playful, interactive, and visually engaging. The platform appeals especially to younger audiences who value both personalization and ease of discovery.",
        img: "../images/giggle-case_2.png",
        alt: "Giggle target audience"
      }
    ],
    color_scheme: [
      {
        text: "The color palette combines dark interface backgrounds with bright accent colors to create contrast while reinforcing the cinematic atmosphere. Accent colors help guide attention toward featured content, navigation, and interaction points.",
        img: "../images/giggle-case_4.png",
        alt: "Giggle color palette"
      }
    ],
    logo: [
      {
        text: "The Giggle logo uses rounded typography and playful visual treatment to reinforce the platform’s lighthearted entertainment focus while remaining clean and adaptable across multiple screen sizes.",
        img: "../images/giggle-case_6.png",
        alt: "Giggle logo system"
      }
    ],
    typography: [
      {
        text: "Typography choices focus on readability and personality. Bold display styles help featured content stand out, while clean supporting typography keeps navigation and detailed information easy to scan.",
        img: "../images/giggle-case_10.png",
        alt: "Giggle typography system"
      }
    ],
    supporting_elements: [
      {
        text: "Supporting visual elements include movie thumbnails, category systems, hover animations, and iconography that reinforce interaction throughout the platform while maintaining consistency across screens.",
        img: "../images/giggle-case_8.png",
        alt: "Giggle supporting brand elements"
      }
    ],
    research_front: [
      {
        text: "Front-end planning focused on reusable movie cards, categorized content sections, navigation systems, and responsive layouts that maintain consistency across screen sizes.",
        img: "../images/giggle-case_18.png",
        alt: "Giggle front-end component planning"
      }
    ],
    planning: [
      {
        text: "The site structure was organized around reusable content rows and responsive grid systems to simplify scaling while maintaining consistency throughout the platform.",
        img: "../images/giggle-case-16.png",
        alt: "Giggle layout planning"
      }
    ],
    semantic_layout: [
      {
        text: "The interface uses semantic HTML structure including header, navigation, main content, categorized sections, and footer layouts to improve accessibility and organization.",
        img: "../images/giggle-case-30.png",
        alt: "Giggle semantic layout"
      }
    ],
    consistency: [
      {
        text: "Consistency was maintained through reusable movie cards, repeated spacing systems, consistent button styling, and shared interaction patterns across all sections.",
        img: "../images/giggle-case_8.png",
        alt: "Giggle consistency system"
      }
    ],
    responsive_design: [
      {
        text: "The responsive system adapts categorized content rows and navigation layouts across desktop, tablet, and mobile screen sizes while preserving usability and visual hierarchy.",
        img: "../images/giggle-case-34.png",
        alt: "Giggle responsive layouts"
      }
    ]
  },
  Balanced: {
    title: "Balanced",
    sub_title: "A wellness experience centered around mindfulness and movement",
    paragraph: "Balanced is a wellness app concept focused on helping users build healthier routines through meditation, yoga, workouts, and progress tracking within one structured platform.",
    main_img: {
      src: "../images/balanced21.jpeg",
      alt: "Balanced wellness app screens"
    },
    role: "UX/UI Designer, Brand Identity Designer",
    deliverables: "App Design, Branding",
    tools: "Figma, Adobe Photoshop, Adobe Illustrator",
    overview: "Balanced is a wellness application designed to support mindfulness, fitness, and personal growth through a combination of guided meditation, yoga routines, workouts, and achievement tracking. The experience focuses on creating a calm and motivating environment that encourages users to develop healthier habits over time.",
    problem: "Many wellness applications focus too heavily on either fitness or mindfulness without creating a cohesive experience that connects physical and mental well-being. Users often struggle to maintain routines because platforms feel overwhelming or disconnected.",
    goal: "Create a wellness platform that combines mindfulness and fitness tools into one cohesive experience while encouraging consistency through progress tracking, guided routines, and motivational achievements.",
    final_subtitle: "Final wellness platform supporting mindful routines",
    final_paragraph: "The final experience combines guided meditation, yoga, fitness tracking, and achievement systems into a unified wellness platform. By organizing content through structured navigation and calming visual design, Balanced encourages users to develop sustainable wellness habits without feeling overwhelmed.",
    small_images: [
      {
        src: "../images/balanced2.jpeg",
        alt: "Balanced dashboard"
      },
      {
        src: "../images/balanced3.jpeg",
        alt: "Balanced achievements page"
      },
      {
        src: "../images/balanced4.jpeg",
        alt: "Balanced yoga categories"
      }
    ],
    large_images: [
      {
        src: "../images/balanced6.jpeg",
        alt: "Balanced full app screens"
      },
      {
        src: "../images/balanced7.jpeg",
        alt: "Balanced interface layouts"
      },
      {
        src: "../images/balanced8.jpeg",
        alt: "Balanced features and interactions"
      }
    ],
    pageType: "case-study",
    caseStudyCategories: [
      "ux",
      "branding"
    ],
    research: [
      {
        text: "Research focused on wellness applications that combine fitness and mindfulness tools. Competitive analysis revealed that users value simple navigation, calming visuals, achievement systems, and personalized routines that help maintain long-term consistency.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced research and competitor analysis"
      }
    ],
    personas: [
      {
        text: "The target audience includes users looking to improve both physical and mental wellness through structured daily routines. Many users want guidance and motivation while avoiding overly intense or stressful fitness experiences.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced persona screens"
      }
    ],
    userflows: [
      {
        text: "The user flow focuses on guiding users from onboarding into meditation, workouts, yoga categories, and achievement systems while keeping navigation simple and approachable.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced user flow"
      }
    ],
    wireframes: [
      {
        text: "Wireframes focused on dashboard hierarchy, content organization, and quick access to workouts, meditations, yoga categories, and recent activity.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced wireframes"
      }
    ],
    designsolution: [
      {
        text: "The design solution combines calming visual design with structured navigation systems that help users quickly access workouts, meditations, and progress tracking tools. Dashboard layouts prioritize clarity and ease of use while reinforcing wellness-focused interactions.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced design solutions",
        text2: "Achievement systems, categorized wellness content, and progress indicators were integrated to encourage long-term motivation while maintaining a calm and supportive experience.",
        img2: "../images/balanced6.jpeg",
        alt2: "Balanced dashboard and achievement systems"
      }
    ],
    feature: [
      {
        text: "Features include customizable workouts, categorized yoga routines, meditation libraries, achievement tracking, recent activity sections, and dashboard shortcuts for quickly resuming wellness routines.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced features",
        text2: "Additional tools include favorite workout systems, new pose recommendations, daily meditation prompts, and progress tracking systems designed to reinforce routine-building over time.",
        img2: "../images/balanced6.jpeg",
        alt2: "Balanced wellness features"
      }
    ],
    audience: [
      {
        text: "Balanced targets users interested in mindfulness, wellness, fitness, and sustainable self-improvement. The platform especially appeals to users looking for calm, supportive digital environments that encourage healthy routines without pressure.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced audience"
      }
    ],
    color_scheme: [
      {
        text: "The color palette uses calming greens, soft neutrals, and muted tones to reinforce relaxation and balance throughout the interface. Accent colors help guide interaction without creating visual stress.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced color palette"
      }
    ],
    logo: [
      {
        text: "The Balanced logo uses soft typography and rounded forms to reinforce themes of calmness, mindfulness, and wellness while remaining adaptable across digital applications.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced logo system"
      }
    ],
    typography: [
      {
        text: "Typography selections prioritize readability and calm visual rhythm. Rounded sans-serif styles help reinforce approachability while maintaining clarity across dashboards and wellness content.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced typography"
      }
    ],
    supporting_elements: [
      {
        text: "Supporting elements include wellness-focused iconography, calming gradients, soft dividers, and achievement graphics that reinforce the platform’s wellness identity across all screens.",
        img: "../images/balanced6.jpeg",
        alt: "Balanced supporting brand elements"
      }
    ]
  },

  Dashboard: {
    title: "Dashboard",
    sub_title: "A structured analytics dashboard for visualizing user behavior",
    paragraph: "Dashboard is a data visualization concept focused on presenting analytics, traffic metrics, and engagement data through a clean and organized interface.",
    main_img: {
      src: "../images/dashboard12.jpeg",
      alt: "Dashboard analytics interface"
    },
    role: "UX/UI Designer, Front-end Developer",
    deliverables: "Dashboard Design, Front-end Development",
    tools: "Figma, HTML, CSS, JavaScript",
    overview: "Dashboard is an analytics interface concept designed to present large amounts of user and business data through a structured and visually organized system. The interface focuses on helping users quickly understand trends, engagement metrics, and user behavior without becoming overwhelmed by information.",
    problem: "Analytics dashboards often become cluttered with excessive data, inconsistent hierarchy, and difficult navigation systems that make it hard for users to quickly identify meaningful insights.",
    goal: "Design a clean analytics dashboard that improves readability, organizes complex data into digestible sections, and allows users to monitor engagement metrics efficiently.",
    final_subtitle: "Final dashboard interface supporting data visualization",
    final_paragraph: "The final dashboard organizes user analytics, engagement metrics, and performance statistics into structured sections that prioritize readability and fast interpretation. Through strong visual hierarchy and reusable widget systems, the interface helps users understand data trends while maintaining consistency across screens.",
    small_images: [
      {
        src: "../images/dashboard2.jpeg",
        alt: "Dashboard analytics graphs"
      },
      {
        src: "../images/dashboard3.jpeg",
        alt: "Dashboard viewed pages section"
      },
      {
        src: "../images/dashboard4.jpeg",
        alt: "Dashboard statistics widgets"
      }
    ],
    large_images: [
      {
        src: "../images/dashboard6.jpeg",
        alt: "Dashboard full analytics interface"
      },
      {
        src: "../images/dashboard7.jpeg",
        alt: "Dashboard responsive layouts"
      },
      {
        src: "../images/dashboard8.jpeg",
        alt: "Dashboard widget system"
      }
    ],
    pageType: "case-study",
    caseStudyCategories: [
      "ux",
      "front_end"
    ],
    research: [
      {
        text: "Research explored how users interact with analytics dashboards and which layouts improve readability when displaying complex information. Competitive analysis showed that users value dashboards with strong hierarchy, clean spacing systems, and clearly separated widgets.",
        img: "../images/Dashboard-case_4.png",
        alt: "Dashboard research and analytics references"
      }
    ],
    personas: [
      {
        text: "The dashboard was designed for users responsible for monitoring engagement metrics, traffic data, and user behavior. These users need fast access to important insights without navigating cluttered systems.",
        img: "../images/Dashboard-case_2.png",
        alt: "Dashboard persona"
      }
    ],
    userflows: [
      {
        text: "The user flow focuses on navigating between analytics sections, engagement graphs, viewed page statistics, and settings areas while maintaining quick access to important metrics.",
        img: "../images/Dashboard-case_8.png",
        alt: "Dashboard user flow"
      }
    ],
    wireframes: [
      {
        text: "Wireframes focused on organizing widgets, graphs, and engagement statistics into structured sections with clear visual hierarchy and reusable layout systems.",
        img: "../images/dashboard-case-06.png",
        alt: "Dashboard wireframes"
      }
    ],
    designsolution: [
      {
        text: "The design solution organizes data into reusable widget sections that separate engagement metrics, graphs, viewed pages, and user behavior statistics into digestible visual groups.",
        img: "../images/dashboard-case-13.png",
        alt: "Dashboard design solutions",
      }
    ],
    feature: [
      {
        text2: "Additional functionality includes adjustable date ranges, reusable metric widgets, user management navigation, and quick-access analytics summaries.",
        img2: "../images/dashboard-case-15.png",
        alt2: "Dashboard analytics and interaction tools"
      }
    ],
    research_front: [
      {
        text: "Front-end planning focused on reusable widget systems, responsive graph layouts, and structured spacing systems that maintain consistency throughout the dashboard.",
        img: "../images/Dashboard-case_4.png",
        alt: "Dashboard front-end planning"
      }
    ],
    planning: [
      {
        text: "The layout structure was organized using reusable grid systems and analytics widgets that support scalability while maintaining consistent alignment across sections.",
        img: "../images/dashboard-case-19.png",
        alt: "Dashboard layout planning"
      }
    ],
    semantic_layout: [
      {
        text: "Semantic HTML structure separates navigation, analytics content, widget sections, and footer elements into clearly organized regions to improve accessibility and maintainability.",
        img: "../images/dashboard-case-123.png",
        alt: "Dashboard semantic layout"
      }
    ],
    consistency: [
      {
        text: "Consistency was maintained through reusable cards, shared spacing systems, repeated graph styles, and unified widget layouts that reinforce hierarchy throughout the interface.",
        img: "../images/dashboard-case.png",
        alt: "Dashboard consistency systems"
      }
    ],
    responsive_design: [
      {
        text: "The responsive system adapts analytics widgets and graph layouts across desktop, tablet, and mobile screens while preserving readability and spacing consistency.",
        img: "../images/dashboard-case-23.png",
        alt: "Dashboard responsive layouts"
      }
    ]
  },
  "Davena Farms": {
    title: "Davena Farms",
    sub_title: "A farm-to-table brand experience centered around freshness and authenticity",
    paragraph: "Davena Farms is a farm-to-table concept designed to highlight fresh produce, local agriculture, and approachable food experiences through a clean visual identity.",
    main_img: {
      src: "../images/davena-brand1.jpeg",
      alt: "Davena Farms branding and layouts"
    },
    role: "Brand Identity Designer",
    deliverables: "Branding, Packaging Design",
    tools: "Adobe Illustrator, Adobe Photoshop",
    overview: "Davena Farms is a farm-to-table concept focused on creating an approachable and authentic visual identity inspired by local agriculture, fresh ingredients, and handcrafted food experiences.",
    problem: "Many agricultural and farm-based brands rely on outdated visual systems that fail to communicate freshness, trust, and quality in modern digital and packaging environments.",
    goal: "Create a clean and approachable farm-to-table identity system that highlights freshness, authenticity, and handcrafted quality.",
    final_subtitle: "Final brand system inspired by local agriculture",
    final_paragraph: "The final branding system combines rustic typography, earthy visuals, and packaging elements that reinforce freshness and authenticity while supporting both digital and physical applications.",
    small_images: [
      {
        src: "../images/davena2.jpeg",
        alt: "Davena Farms labels"
      },
      {
        src: "../images/davena3.jpeg",
        alt: "Davena Farms packaging"
      },
      {
        src: "../images/davena4.jpeg",
        alt: "Davena Farms brand elements"
      }
    ],
    large_images: [
      {
        src: "../images/davena6.jpeg",
        alt: "Davena Farms branding layouts"
      },
      {
        src: "../images/davena7.jpeg",
        alt: "Davena Farms packaging system"
      },
      {
        src: "../images/davena8.jpeg",
        alt: "Davena Farms visual identity"
      }
    ],
    pageType: "case-study",
    caseStudyCategories: [
      "branding"
    ],
    research: [
      {
        text: "Research focused on farm-to-table businesses, agricultural branding systems, and local food experiences that emphasize authenticity and freshness. Competitive analysis showed that consumers value brands that feel handcrafted, trustworthy, and connected to natural ingredients.",
        img: "../images/davena-case-142.png",
        alt: "Davena Farms branding research"
      }
    ],
    audience: [
      {
        text: "The brand targets customers interested in fresh produce, local agriculture, and handcrafted food experiences. These users value authenticity, sustainability, and approachable branding that reflects real farm-to-table values.",
        img: "../images/davena6.jpeg",
        alt: "Davena Farms target audience"
      }
    ],
    color_scheme: [
      {
        text: "The color palette uses earthy neutrals, warm greens, and natural tones inspired by agriculture and fresh ingredients. These colors reinforce calmness, authenticity, and organic quality throughout the brand system.",
        img: "../images/davena-case_4.png",
        alt: "Davena Farms color palette"
      }
    ],
    logo: [
      {
        text: "The Davena Farms logo combines rustic typography with simple handcrafted styling to create a visual identity that feels approachable, local, and authentic across packaging and digital applications.",
        img: "../images/davena-case_6.png",
        alt: "Davena Farms logo system"
      }
    ],
    typography: [
      {
        text: "Typography selections focus on rustic serif styles paired with clean supporting text to reinforce handcrafted quality while maintaining readability across labels and packaging systems.",
        img: "../images/davena-case_10.png",
        alt: "Davena Farms typography"
      }
    ],
    supporting_elements: [
      {
        text: "Supporting brand elements include packaging labels, organic dividers, texture overlays, and simple illustrations inspired by agriculture and handcrafted food experiences.",
        img: "../images/davena-case_8.png",
        alt: "Davena Farms supporting elements"
      }
    ]
  },

  Infinite: {
    title: "Infinite",
    sub_title: "A creative agency concept focused on modern visual presentation",
    paragraph: "Infinite is a creative agency concept designed to showcase digital projects, branding work, and portfolio experiences through structured layouts and modern visuals.",
    main_img: {
      src: "../images/infinite-website4.jpeg",
      alt: "Infinite agency layouts"
    },
    role: "UX/UI Designer, Brand Identity Designer",
    deliverables: "Portfolio Website Design, Branding",
    tools: "Figma, Adobe Photoshop",
    overview: "Infinite is a creative agency concept designed to present branding, digital work, and portfolio projects through clean layouts and modern visual systems.",
    problem: "Many creative agency websites become visually overwhelming or inconsistent, making it difficult for users to focus on the work itself.",
    goal: "Create a modern creative agency experience that highlights portfolio work through structured layouts and clean visual hierarchy.",
    final_subtitle: "Final agency experience focused on showcasing creative work",
    final_paragraph: "The final concept uses structured layouts, clean typography, and strong spacing systems to highlight projects while maintaining a modern and visually engaging presentation.",
    small_images: [
      {
        src: "../images/infinite2.jpeg",
        alt: "Infinite layouts"
      },
      {
        src: "../images/infinite3.jpeg",
        alt: "Infinite branding"
      },
      {
        src: "../images/infinite4.jpeg",
        alt: "Infinite portfolio screens"
      }
    ],
    large_images: [
      {
        src: "../images/infinite6.jpeg",
        alt: "Infinite full layouts"
      },
      {
        src: "../images/infinite7.jpeg",
        alt: "Infinite interface systems"
      },
      {
        src: "../images/infinite8.jpeg",
        alt: "Infinite branding applications"
      }
    ],
    pageType: "project"
  },

  "SHR Construction": {
    title: "SHR Construction",
    sub_title: "A contractor website focused on professionalism and trust",
    paragraph: "SHR Construction is a contractor website concept designed to clearly present services, projects, and contact information through strong structure and approachable branding.",
    main_img: {
      src: "../images/shr2.jpeg",
      alt: "SHR Construction website"
    },
    role: "UX/UI Designer, Brand Identity Designer, Front-end Developer",
    deliverables: "Website Design, Branding, Front-end Development",
    tools: "Figma, HTML, CSS",
    overview: "SHR Construction is a contractor website concept focused on helping homeowners quickly understand available services and connect with trusted professionals.",
    problem: "Construction websites are often outdated, cluttered, or difficult to navigate, which reduces trust and makes service information harder to access.",
    goal: "Create a contractor website that communicates professionalism, trust, and clarity while simplifying service discovery and customer contact.",
    final_subtitle: "Final contractor website supporting clarity and trust",
    final_paragraph: "The final concept combines structured layouts, strong typography, and approachable branding to help customers quickly understand available services while reinforcing professionalism.",
    small_images: [
      {
        src: "../images/shr2.jpeg",
        alt: "SHR homepage"
      },
      {
        src: "../images/shr3.jpeg",
        alt: "SHR services"
      },
      {
        src: "../images/shr4.jpeg",
        alt: "SHR contact screens"
      }
    ],
    large_images: [
      {
        src: "../images/shr6.jpeg",
        alt: "SHR full layouts"
      },
      {
        src: "../images/shr7.jpeg",
        alt: "SHR responsive layouts"
      },
      {
        src: "../images/shr8.jpeg",
        alt: "SHR construction branding"
      }
    ],
    pageType: "project"
  },
  "Paradigm Solutions": {
    title: "Paradigm Solutions",
    sub_title: "A corporate identity focused on professionalism and structure",
    paragraph: "Paradigm Solutions is a business-focused branding concept designed to communicate professionalism, reliability, and modern corporate structure through clean layouts and visual consistency.",
    main_img: {
      src: "../images/paradigm11.jpeg",
      alt: "Paradigm Solutions branding"
    },
    role: "Brand Identity Designer",
    deliverables: "Branding System",
    tools: "Adobe Illustrator, Adobe Photoshop",
    overview: "Paradigm Solutions is a corporate branding concept designed to support modern business communication through structured visual systems, professional layouts, and consistent brand presentation.",
    problem: "Many corporate brands rely on generic visual systems that fail to create recognition or communicate trust effectively across digital and print applications.",
    goal: "Create a modern corporate identity system that communicates professionalism, clarity, and reliability through structured branding elements.",
    final_subtitle: "Final corporate identity focused on professionalism",
    final_paragraph: "The final branding system combines structured typography, professional color systems, and clean layouts to create a modern corporate identity that supports trust and recognition across multiple applications.",
    small_images: [
      {
        src: "../images/paradigm2.jpeg",
        alt: "Paradigm Solutions branding layouts"
      },
      {
        src: "../images/paradigm3.jpeg",
        alt: "Paradigm Solutions typography"
      },
      {
        src: "../images/paradigm4.jpeg",
        alt: "Paradigm Solutions visual system"
      }
    ],
    large_images: [
      {
        src: "../images/paradigm6.jpeg",
        alt: "Paradigm Solutions branding"
      },
      {
        src: "../images/paradigm7.jpeg",
        alt: "Paradigm Solutions applications"
      },
      {
        src: "../images/paradigm8.jpeg",
        alt: "Paradigm Solutions layouts"
      }
    ],
    pageType: "case-study",
    caseStudyCategories: [
      "branding"
    ],
    research: [
      {
        text: "Research focused on corporate branding systems and modern business identity design. Competitive analysis showed that users associate strong typography, minimal layouts, and structured visual systems with trust and professionalism.",
        img: "../images/Paradigm-case_2.png",
        alt: "Paradigm Solutions branding research"
      }
    ],
    audience: [
      {
        text: "The brand targets business clients and organizations looking for professional and dependable service experiences supported by clear communication and modern presentation.",
        img: "../images/Paradigm-case_12.png",
        alt: "Paradigm Solutions audience"
      }
    ],
    color_scheme: [
      {
        text: "The color palette combines dark neutrals with structured accent tones to reinforce professionalism, reliability, and visual clarity across corporate applications.",
        img: "../images/Paradigm-case_4.png",
        alt: "Paradigm Solutions color palette"
      }
    ],
    logo: [
      {
        text: "The Paradigm Solutions logo uses structured geometric forms and clean typography to reinforce professionalism and consistency across digital and print environments.",
        img: "../images/Paradigm-case_8.png",
        alt: "Paradigm Solutions logo"
      }
    ],
    typography: [
      {
        text: "Typography selections focus on modern sans-serif systems that prioritize readability and structured hierarchy while maintaining a professional tone throughout the brand.",
        img: "../images/Paradigm-case_10.png",
        alt: "Paradigm Solutions typography"
      }
    ],
    supporting_elements: [
      {
        text: "Supporting elements include structured grids, clean dividers, and subtle geometric graphics that reinforce professionalism without distracting from content.",
        img: "../images/Paradigm-case_8.png",
        alt: "Paradigm Solutions supporting elements"
      }
    ]
  },

  "Simply Green": {
    title: "Simply Green",
    sub_title: "An eco-conscious brand focused on sustainability and simplicity",
    paragraph: "Simply Green is a sustainability-focused concept designed to communicate environmentally conscious values through clean visuals and approachable design systems.",
    main_img: {
      src: "../images/simply-green11.jpeg",
      alt: "Simply Green branding"
    },
    role: "UX/UI Designer, Brand Identity Designer, Front-end Developer",
    deliverables: "Branding, Website Design, Front-end Development",
    tools: "Figma, HTML, CSS, Adobe Illustrator",
    overview: "Simply Green is an eco-conscious concept focused on promoting sustainable products and environmental awareness through approachable design and structured educational content.",
    problem: "Many sustainability brands struggle to balance education, branding, and product presentation without overwhelming users or appearing visually cluttered.",
    goal: "Create a clean sustainability-focused experience that communicates environmental awareness through approachable branding and organized content systems.",
    final_subtitle: "Final sustainability experience focused on clarity and education",
    final_paragraph: "The final concept combines sustainability-focused visuals with structured layouts and educational content systems that help users engage with environmentally conscious products and ideas.",
    small_images: [
      {
        src: "../images/simply-green2.jpeg",
        alt: "Simply Green layouts"
      },
      {
        src: "../images/simply-green3.jpeg",
        alt: "Simply Green branding"
      },
      {
        src: "../images/simply-green4.jpeg",
        alt: "Simply Green product layouts"
      }
    ],
    large_images: [
      {
        src: "../images/simply-green6.jpeg",
        alt: "Simply Green full layouts"
      },
      {
        src: "../images/simply-green7.jpeg",
        alt: "Simply Green responsive layouts"
      },
      {
        src: "../images/simply-green8.jpeg",
        alt: "Simply Green FAQ"
      }
    ],
    pageType: "project"
  },

  Roots: {
    title: "Roots",
    sub_title: "A farm-to-table food truck identity inspired by freshness and community",
    paragraph: "Roots is a farm-to-table food truck concept focused on fresh ingredients, local agriculture, and approachable branding inspired by handcrafted food experiences.",
    main_img: {
      src: "../images/roots11.jpeg",
      alt: "Roots food truck branding"
    },
    role: "Brand Identity Designer",
    deliverables: "Branding System",
    tools: "Adobe Illustrator, Adobe Photoshop",
    overview: "Roots is a farm-to-table food truck concept focused on creating an authentic visual identity inspired by local ingredients, handcrafted food, and community-focused experiences.",
    problem: "Many food truck brands rely on inconsistent visuals that fail to communicate freshness, quality, and personality in crowded public environments.",
    goal: "Create a welcoming and recognizable farm-to-table identity system that highlights freshness, handcrafted quality, and local food culture.",
    final_subtitle: "Final food truck identity inspired by local ingredients",
    final_paragraph: "The final identity combines rustic visuals, approachable typography, and earthy tones to create a food truck experience that feels fresh, handcrafted, and community-focused.",
    small_images: [
      {
        src: "../images/roots2.jpeg",
        alt: "Roots logo applications"
      },
      {
        src: "../images/roots3.jpeg",
        alt: "Roots typography"
      },
      {
        src: "../images/roots4.jpeg",
        alt: "Roots brand elements"
      }
    ],
    large_images: [
      {
        src: "../images/roots6.jpeg",
        alt: "Roots branding layouts"
      },
      {
        src: "../images/roots7.jpeg",
        alt: "Roots truck branding"
      },
      {
        src: "../images/roots8.jpeg",
        alt: "Roots packaging systems"
      }
    ],
    pageType: "case-study",
    caseStudyCategories: [
      "branding"
    ],
    research: [
      {
        text: "Research explored farm-to-table restaurants, local agriculture branding, and handcrafted food experiences. Consumers consistently associated earthy visuals and approachable branding with authenticity and freshness.",
        img: "../images/roots-case_2.png",
        alt: "Roots branding research"
      }
    ],
    audience: [
      {
        text: "The target audience includes customers interested in local ingredients, fresh food, and sustainable dining experiences that feel approachable and community-focused.",
        img: "../images/roots-case_12.png",
        alt: "Roots audience"
      }
    ],
    color_scheme: [
      {
        text: "The palette uses warm earthy tones, muted greens, and natural neutrals inspired by agriculture, vegetables, and outdoor food experiences.",
        img: "../images/roots-case_4.png",
        alt: "Roots color palette"
      }
    ],
    logo: [
      {
        text: "The Roots logo combines handcrafted typography and organic forms to create an approachable visual identity inspired by local food culture and freshness.",
        img: "../images/roots-case_6.png",
        alt: "Roots logo"
      }
    ],
    typography: [
      {
        text: "Typography selections focus on rustic serif styles paired with clean supporting text to reinforce handcrafted authenticity while maintaining readability.",
        img: "../images/roots-case_10.png",
        alt: "Roots typography"
      }
    ],
    supporting_elements: [
      {
        text: "Supporting visuals include organic dividers, textured graphics, and produce-inspired illustrations that reinforce the handcrafted and community-driven brand identity.",
        img: "../images/roots-case_8.png",
        alt: "Roots supporting elements"
      }
    ]
  },
  Sunshine: {
    title: "Sunshine",
    sub_title: "An eco-friendly café identity inspired by warmth and sustainability",
    paragraph: "Sunshine is an eco-conscious café concept focused on reusable packaging, approachable visuals, and a welcoming atmosphere inspired by community coffee culture.",
    main_img: {
      src: "../images/sunshine10.jpeg",
      alt: "Sunshine café branding"
    },
    role: "Brand Identity Designer",
    deliverables: "Branding System",
    tools: "Adobe Illustrator, Adobe Photoshop",
    overview: "Sunshine is a sustainable café concept designed to create a warm and welcoming coffee experience centered around reusable packaging, handcrafted presentation, and environmentally conscious branding.",
    problem: "Many cafés promote sustainability but fail to visually communicate those values in a consistent and approachable way across branding and packaging systems.",
    goal: "Create an eco-friendly café identity that feels warm, approachable, and community-focused while reinforcing sustainability through visual design.",
    final_subtitle: "Final café identity focused on warmth and sustainability",
    final_paragraph: "The final branding system combines warm visuals, natural textures, and reusable packaging concepts to create a café experience that feels inviting, sustainable, and community-driven.",
    small_images: [
      {
        src: "../images/sunshine2.jpeg",
        alt: "Sunshine packaging"
      },
      {
        src: "../images/sunshine3.jpeg",
        alt: "Sunshine typography"
      },
      {
        src: "../images/sunshine4.jpeg",
        alt: "Sunshine visual identity"
      }
    ],
    large_images: [
      {
        src: "../images/sunshine6.jpeg",
        alt: "Sunshine café branding"
      },
      {
        src: "../images/sunshine7.jpeg",
        alt: "Sunshine reusable packaging"
      },
      {
        src: "../images/sunshine8.jpeg",
        alt: "Sunshine café applications"
      }
    ],
    pageType: "case-study",
    caseStudyCategories: [
      "branding"
    ],
    research: [
      {
        text: "Research explored sustainable café branding, eco-conscious packaging systems, and modern coffee shop experiences focused on community and environmental responsibility. Users responded positively to brands that felt approachable, warm, and authentic rather than overly corporate.",
        img: "../images/sunshine-case_2.png",
        alt: "Sunshine café branding research"
      }
    ],
    audience: [
      {
        text: "The target audience includes environmentally conscious coffee drinkers who value sustainability, reusable products, handcrafted presentation, and welcoming community spaces.",
        img: "../images/sunshine-case_12.png",
        alt: "Sunshine audience"
      }
    ],
    color_scheme: [
      {
        text: "The palette combines warm yellows, earthy neutrals, soft browns, and muted greens inspired by sunlight, natural materials, and organic café environments.",
        img: "../images/sunshine-case_4.png",
        alt: "Sunshine color palette"
      }
    ],
    logo: [
      {
        text: "The Sunshine logo uses rounded typography and soft organic forms to create a welcoming identity that reinforces warmth, positivity, and sustainability.",
        img: "../images/sunshine-case_6.png",
        alt: "Sunshine logo"
      }
    ],
    typography: [
      {
        text: "Typography selections focus on approachable rounded styles paired with clean supporting text to reinforce friendliness and readability across packaging and signage systems.",
        img: "../images/sunshine-case_10.png",
        alt: "Sunshine typography"
      }
    ],
    supporting_elements: [
      {
        text: "Supporting visuals include reusable mason jar graphics, hand-drawn illustrations, textured backgrounds, and natural dividers inspired by sustainable café culture.",
        img: "../images/sunshine-case_8.png",
        alt: "Sunshine supporting elements"
      }
    ]
  },

  "AIGA DEC": {
    title: "AIGA DEC",
    sub_title: "An event branding system focused on structure and visual engagement",
    paragraph: "AIGA DEC is an event branding concept designed to support design-focused experiences through modern layouts, strong typography, and organized visual systems.",
    main_img: {
      src: "../images/aiga13.jpeg",
      alt: "AIGA DEC branding"
    },
    role: "Brand Identity Designer",
    deliverables: "Event Branding",
    tools: "Adobe Illustrator, Adobe Photoshop",
    overview: "AIGA DEC is a design-focused event branding concept created to support professional networking, creative collaboration, and visual engagement through structured branding systems.",
    problem: "Many event branding systems struggle to balance professionalism with creativity, often becoming visually cluttered or inconsistent across applications.",
    goal: "Create a modern event branding system that communicates creativity and professionalism through structured visual design.",
    final_subtitle: "Final event identity focused on structure and engagement",
    final_paragraph: "The final branding system combines bold typography, structured layouts, and modern visual hierarchy to create an event experience that feels both professional and creatively engaging.",
    small_images: [
      {
        src: "../images/aiga2.jpeg",
        alt: "AIGA DEC layouts"
      },
      {
        src: "../images/aiga3.jpeg",
        alt: "AIGA DEC typography"
      },
      {
        src: "../images/aiga4.jpeg",
        alt: "AIGA DEC visuals"
      }
    ],
    large_images: [
      {
        src: "../images/aiga6.jpeg",
        alt: "AIGA DEC branding"
      },
      {
        src: "../images/aiga7.jpeg",
        alt: "AIGA DEC applications"
      },
      {
        src: "../images/aiga8.jpeg",
        alt: "AIGA DEC layouts"
      }
    ],
    pageType: "case-study",
    caseStudyCategories: [
      "branding"
    ],
    research: [
      {
        text: "Research explored creative conference branding systems and design-focused event experiences. Strong typography and structured layouts consistently reinforced professionalism while still supporting creative energy.",
        img: "../images/aigaa1-case_2.png",
        alt: "AIGA DEC branding research"
      }
    ],
    audience: [
      {
        text: "The audience includes designers, students, and creative professionals interested in networking, collaboration, and attending visually engaging design events.",
        img: "../images/aigaa1-case_12.png",
        alt: "AIGA DEC audience"
      }
    ],
    color_scheme: [
      {
        text: "The palette combines bold contrast with modern accent colors to reinforce visual energy while maintaining readability and professional structure.",
        img: "../images/aigaa1-case_4.png",
        alt: "AIGA DEC color palette"
      }
    ],
    logo: [
      {
        text: "The logo system uses clean typography and structured geometric alignment to create a recognizable event identity adaptable across print and digital applications.",
        img: "../images/aigaa1-case_6.png",
        alt: "AIGA DEC logo"
      }
    ],
    typography: [
      {
        text: "Typography selections focus on bold hierarchy and modern sans-serif styles that reinforce readability while supporting a visually engaging event atmosphere.",
        img: "../images/aigaa1-case_10.png",
        alt: "AIGA DEC typography"
      }
    ],
    supporting_elements: [
      {
        text: "Supporting elements include structured grid systems, abstract graphics, and layered visual compositions that reinforce the creative identity of the event.",
        img: "../images/aigaa1-case_8.png",
        alt: "AIGA DEC supporting elements"
      }
    ],
  },

  "Tamed Magazine": {
  title: "Tamed Magazine",
  sub_title: "An editorial concept focused on modern typography and layout",
  paragraph: "Tamed Magazine is an editorial branding concept designed around strong typography, structured layouts, and modern visual storytelling.",
  main_img: {
    src: "../images/tamed4.jpeg",
    alt: "Tamed Magazine layouts"
  },
  role: "Brand Identity Designer",
  deliverables: "Editorial Branding",
  tools: "Adobe InDesign, Adobe Photoshop",
  overview: "Tamed Magazine is an editorial design concept focused on combining modern typography, structured layouts, and visual storytelling into a cohesive publication system.",
  problem: "Many editorial layouts become visually inconsistent or overly cluttered, reducing readability and weakening the connection between content and design.",
  goal: "Create a modern editorial identity system that supports readability while maintaining strong visual personality and hierarchy.",
  final_subtitle: "Final editorial system focused on typography and structure",
  final_paragraph: "The final editorial system combines bold typography, structured grid layouts, and clean visual hierarchy to support modern storytelling and readability across magazine spreads.",
  small_images: [
    {
      src: "../images/tamed2.jpeg",
      alt: "Tamed Magazine spreads"
    },
    {
      src: "../images/tamed3.jpeg",
      alt: "Tamed Magazine typography"
    },
    {
      src: "../images/tamed4.jpeg",
      alt: "Tamed Magazine layouts"
    }
  ],
  large_images: [
    {
      src: "../images/tamed6.jpeg",
      alt: "Tamed Magazine full layouts"
    },
    {
      src: "../images/tamed7.jpeg",
      alt: "Tamed Magazine editorial spreads"
    },
    {
      src: "../images/tamed8.jpeg",
      alt: "Tamed Magazine visual system"
    }
  ],
  pageType: "project"
},

"Target Brochure": {
  title: "Target Brochure",
  sub_title: "A retail brochure concept inspired by modern product marketing",
  paragraph: "Target Brochure is a retail marketing concept focused on structured layouts, bold visuals, and organized product presentation.",
  main_img: {
    src: "../images/target6.jpeg",
    alt: "Target brochure layouts"
  },
  role: "Brand Identity Designer",
  deliverables: "Retail Brochure Design",
  tools: "Adobe InDesign, Adobe Photoshop",
  overview: "Target Brochure is a retail marketing concept focused on organizing product information through clean layouts, strong hierarchy, and modern retail-inspired visuals.",
  problem: "Retail brochures often become overcrowded with information, making it difficult for users to quickly scan products and promotions.",
  goal: "Create a modern retail brochure system that supports fast product discovery and organized promotional layouts.",
  final_subtitle: "Final brochure system focused on retail clarity",
  final_paragraph: "The final brochure concept combines structured grids, strong hierarchy, and bold visuals to support quick scanning and organized product presentation.",
  small_images: [
    {
      src: "../images/target2.jpeg",
      alt: "Target brochure layouts"
    },
    {
      src: "../images/target3.jpeg",
      alt: "Target brochure typography"
    },
    {
      src: "../images/target4.jpeg",
      alt: "Target brochure visuals"
    }
  ],
  large_images: [
    {
      src: "../images/target6.jpeg",
      alt: "Target brochure system"
    },
    {
      src: "../images/target7.jpeg",
      alt: "Target brochure applications"
    },
    {
      src: "../images/target8.jpeg",
      alt: "Target brochure spreads"
    }
  ],
  pageType: "project"
},

"Night Life": {
  title: "Night Life",
  sub_title: "An event concept inspired by nightlife and entertainment culture",
  paragraph: "Night Life is an entertainment-focused concept designed around bold typography, dark visuals, and high-energy layouts inspired by nightlife experiences.",
  main_img: {
    src: "../images/night-life1.jpeg",
    alt: "Night Life branding"
  },
  role: "Brand Identity Designer, Front-end Developer",
  deliverables: "Branding, Front-end Development",
  tools: "Figma, HTML, CSS",
  overview: "Night Life is an entertainment concept inspired by nightlife culture, live events, and high-energy visual systems designed for promotional experiences.",
  problem: "Entertainment-focused websites and promotional systems often become visually chaotic, reducing readability and making navigation difficult.",
  goal: "Create a visually engaging nightlife experience that balances high-energy visuals with organized layouts and readability.",
  final_subtitle: "Final nightlife experience focused on energy and structure",
  final_paragraph: "The final concept combines bold typography, neon-inspired visuals, and structured layouts to create a nightlife experience that feels energetic while remaining organized and usable.",
  small_images: [
    {
      src: "../images/night-life2.jpeg",
      alt: "Night Life layouts"
    },
    {
      src: "../images/night-life3.jpeg",
      alt: "Night Life visuals"
    },
    {
      src: "../images/night-life4.jpeg",
      alt: "Night Life typography"
    }
  ],
  large_images: [
    {
      src: "../images/night-life6.jpeg",
      alt: "Night Life full layouts"
    },
    {
      src: "../images/night-life7.jpeg",
      alt: "Night Life responsive systems"
    },
    {
      src: "../images/night-life1.jpeg",
      alt: "Night Life layouts"
    }
  ],
  pageType: "project"
},

"Better World with Design": {
  title: "Better World with Design",
  sub_title: "A nonprofit concept focused on accessibility and communication",
  paragraph: "Better World with Design is a nonprofit-focused branding concept centered around accessibility, communication, and socially driven visual systems.",
  main_img: {
    src: "../images/better-world7.jpeg",
    alt: "Better World with Design branding"
  },
  role: "Brand Identity Designer",
  deliverables: "Branding System",
  tools: "Adobe Illustrator, Adobe Photoshop",
  overview: "Better World with Design is a nonprofit branding concept focused on communicating accessibility, empathy, and social impact through structured visual systems.",
  problem: "Nonprofit branding systems often struggle to balance professionalism with emotional communication and accessibility.",
  goal: "Create a nonprofit identity system that feels approachable, accessible, and socially focused while maintaining clarity and professionalism.",
  final_subtitle: "Final nonprofit identity focused on accessibility",
  final_paragraph: "The final concept combines approachable visuals, accessible typography, and clean layouts to create a nonprofit identity system centered around communication and inclusivity.",
  small_images: [
    {
      src: "../images/better-worlds2.jpeg",
      alt: "Better World layouts"
    },
    {
      src: "../images/better-worlds3.jpeg",
      alt: "Better World typography"
    },
    {
      src: "../images/better-worlds4.jpeg",
      alt: "Better World visuals"
    }
  ],
  large_images: [
    {
      src: "../images/better-world7.jpeg",
      alt: "Better World branding"
    },
    {
      src: "../images/better-world1.jpeg",
      alt: "Better World layouts"
    },
    {
      src: "../images/better-world2.jpeg",
      alt: "Better World applications"
    }
  ],
  pageType: "project"
},
"Font Cards": {
  title: "Font Cards",
  sub_title: "A typography learning system designed for student designers",
  paragraph: "Font Cards is a typography-focused concept designed to help student designers learn hierarchy, pairing systems, and visual organization through collectible educational layouts.",
  main_img: {
    src: "../images/font-cards6.jpeg",
    alt: "Font Cards typography system"
  },
  role: "Brand Identity Designer",
  deliverables: "Typography System",
  tools: "Adobe Illustrator, Adobe Photoshop",
  overview: "Font Cards is a typography learning concept designed to help designers better understand font hierarchy, pairing systems, readability, and visual organization through structured educational layouts.",
  problem: "Typography education can often feel abstract and difficult to visualize, especially for newer designers learning hierarchy and font relationships.",
  goal: "Create an approachable typography learning system that helps student designers understand hierarchy, pairing, and visual structure through engaging layouts.",
  final_subtitle: "Final typography system focused on education and hierarchy",
  final_paragraph: "The final system combines structured layouts, educational typography examples, and organized visual hierarchy to create a more approachable typography learning experience.",
  small_images: [
    {
      src: "../images/font-cards2.jpeg",
      alt: "Font Cards layouts"
    },
    {
      src: "../images/font-cards3.jpeg",
      alt: "Font Cards typography"
    },
    {
      src: "../images/font-cards4.jpeg",
      alt: "Font Cards hierarchy"
    }
  ],
  large_images: [
    {
      src: "../images/font-cards6.jpeg",
      alt: "Font Cards typography layouts"
    },
    {
      src: "../images/font-cards7.jpeg",
      alt: "Font Cards learning system"
    },
    {
      src: "../images/font-cards8.jpeg",
      alt: "Font Cards educational layouts"
    }
  ],
  pageType: "project"
},
Linked: {
  title: "Linked",
  sub_title: "A spa and resort experience focused on streamlined guest interaction",
  paragraph: "Linked is a hospitality app concept designed to simplify resort check-ins, spa bookings, and guest service interactions through a clean and approachable interface.",
  main_img: {
    src: "../images/linked10.jpeg",
    alt: "Linked app and brand screens"
  },
  role: "UX/UI Designer",
  deliverables: "Hospitality App Design",
  tools: "Figma, Adobe Photoshop",
  overview: "Linked is a resort and spa experience designed to simplify guest interactions before and during their stay. The platform allows users to manage reservations, check into rooms, browse spa services, and quickly access resort information through one structured mobile interface.",
  problem: "Traditional hospitality experiences often rely on fragmented systems that separate room management, service booking, and guest communication. This creates confusion and slows down interactions during travel experiences that should feel relaxing and seamless.",
  goal: "Create a streamlined hospitality experience that simplifies check-in, room access, spa browsing, and guest service interactions while maintaining a calm and approachable interface.",
  final_subtitle: "Final hospitality experience supporting smooth guest interactions",
  final_paragraph: "The final interface combines room management, spa services, and guest support into one connected system designed to reduce friction throughout the resort experience. By simplifying navigation and focusing on clarity, Linked supports smoother interactions for both first-time and returning guests.",
  small_images: [
    {
      src: "../images/linked4.jpeg",
      alt: "Linked welcome screen"
    },
    {
      src: "../images/linked9.jpeg",
      alt: "Linked login and interaction screens"
    },
    {
      src: "../images/linked2.jpeg",
      alt: "Linked check-in screens"
    }
  ],
  large_images: [
    {
      src: "../images/linked12.jpeg",
      alt: "Linked loading, welcome, and dashboard screens"
    },
    {
      src: "../images/linked11.jpeg",
      alt: "Linked app screens and logo"
    },
    {
      src: "../images/linked1.jpeg",
      alt: "Linked full app screens"
    }
  ],
  pageType: "case-study",
  caseStudyCategories: [
    "ux"
  ],
  research: [
    {
      text: "Research explored hospitality and resort applications focused on simplifying guest experiences. Competitive analysis showed that users value fast room access, simplified service booking, and calm interfaces that reduce stress during travel.",
      img: "../images/linked-case_14.png",
      alt: "Linked hospitality research"
    }
  ],
  personas: [
    {
      text: "The primary audience includes travelers looking for relaxing resort experiences supported by clear and efficient digital tools. These users expect fast access to reservations, room information, and spa services without navigating confusing systems.",
      img: "../images/linked-case_12.png",
      alt: "Linked user persona"
    }
  ],
  userflows: [
    {
      text: "The user flow focuses on account creation, room check-in, browsing spa services, and accessing reservation information while keeping movement between screens simple and intuitive.",
      img: "../images/linked-case_18.png",
      alt: "Linked user flow"
    }
  ],
  wireframes: [
    {
      text: "Wireframes focused on reservation management, spa browsing systems, and streamlined check-in flows designed to reduce friction during the guest experience.",
      img: "../images/linked-case_16.png",
      alt: "Linked wireframes"
    }
  ],
  designsolution: [
    {
      text: "Features such as check-in confirmation popups, room-number entry systems, and highlighted navigation tabs reinforce clarity while minimizing mistakes during booking and check-in processes.",
      img: "../images/linked-case_22.png",
      alt: "Linked hospitality interactions"
    }
  ],
  feature: [
    {
      text: "Additional features include highlighted navigation states, room-number management, spa category organization, and simplified guest account tools that improve usability throughout the experience.",
      img: "../images/linked-case_24.png",
      alt: "Linked booking and service features"
    }
  ]
},
Bluewater: {
  title: "Bluewater",
  sub_title: "A coastal-inspired experience focused on calm navigation and visual clarity",
  paragraph: "Bluewater is a concept project designed around clean layouts, ocean-inspired visuals, and a structured user experience that emphasizes simplicity and atmosphere.",

  main_img: {
    src: "../images/bluewater11.jpeg",
    alt: "Bluewater interface and branding"
  },

  role: "UX/UI Designer, Brand Identity Designer",
  deliverables: "Website Design, Branding",
  tools: "Figma, Adobe Photoshop",

  overview: "Bluewater is a coastal-inspired concept focused on creating a calm and visually immersive experience through structured layouts, minimal navigation systems, and ocean-inspired branding.",

  problem: "Many travel and hospitality-inspired websites become visually cluttered or overwhelming, making it difficult for users to focus on content and navigation.",

  goal: "Create a clean and calming digital experience that emphasizes simplicity, atmosphere, and structured navigation through ocean-inspired visuals and layouts.",

  final_subtitle: "Final coastal-inspired experience focused on clarity and atmosphere",

  final_paragraph: "The final concept combines calming imagery, structured spacing systems, and clean visual hierarchy to create an immersive browsing experience inspired by coastal environments and modern hospitality design.",

  small_images: [
    {
      src: "../images/bluewater2.jpeg",
      alt: "Bluewater layouts"
    },
    {
      src: "../images/bluewater3.jpeg",
      alt: "Bluewater interface"
    },
    {
      src: "../images/bluewater4.jpeg",
      alt: "Bluewater branding"
    }
  ],

  large_images: [
    {
      src: "../images/bluewater1.jpeg",
      alt: "Bluewater full layouts"
    },
    {
      src: "../images/bluewater5.jpeg",
      alt: "Bluewater responsive layouts"
    },
    {
      src: "../images/bluewater6.jpeg",
      alt: "Bluewater visual system"
    }
  ],

  pageType: "case-study",

  caseStudyCategories: [
    "branding"
  ],

  research: [
    {
      text: "Research explored hospitality, travel, and coastal-inspired branding systems that emphasize calm visual experiences and structured navigation. Users responded positively to spacious layouts, immersive photography, and minimal interfaces that reduce visual clutter.",
      img: "../images/bluewater-case_10.png",
      alt: "Bluewater branding research"
    }
  ],

  audience: [
    {
      text: "The target audience includes users interested in travel, hospitality, and relaxing digital experiences that feel immersive, modern, and visually calming.",
      img: "../images/bluewater-case_12.png",
      alt: "Bluewater audience"
    }
  ],

  color_scheme: [
    {
      text: "The palette combines ocean-inspired blues, soft neutrals, and natural tones that reinforce calmness, clarity, and coastal atmosphere throughout the experience.",
      img: "../images/bluewater-case_10.png",
      alt: "Bluewater color palette"
    }
  ],

  logo: [
    {
      text: "The logo system uses clean typography and minimal forms inspired by coastal movement and modern hospitality branding to create a calm and recognizable identity.",
      img: "../images/bluewater-case_10.png",
      alt: "Bluewater logo"
    }
  ],

  typography: [
    {
      text: "Typography selections focus on clean modern styles with strong readability and open spacing systems that reinforce simplicity and visual clarity.",
      img: "../images/bluewater-case_10.png",
      alt: "Bluewater typography"
    }
  ],

  supporting_elements: [
    {
      text: "Supporting visuals include ocean-inspired textures, minimal dividers, spacious layouts, and immersive imagery that reinforce the relaxing coastal atmosphere.",
      img: "../images/bluewater-case_10.png",
      alt: "Bluewater supporting elements"
    }
  ]
},
Bluewater: {
  title: "Bluewater",
  sub_title: "A coastal-inspired experience focused on calm navigation and visual clarity",
  paragraph: "Bluewater is a concept project designed around clean layouts, ocean-inspired visuals, and a structured user experience that emphasizes simplicity and atmosphere.",
  main_img: {
    src: "../images/bluewater11.jpeg",
    alt: "Bluewater interface and branding"
  },
  role: "UX/UI Designer, Brand Identity Designer",
  deliverables: "Website Design, Branding",
  tools: "Figma, Adobe Photoshop",
  overview: "Bluewater is a coastal-inspired concept focused on creating a calm and visually immersive experience through structured layouts, minimal navigation systems, and ocean-inspired branding.",
  problem: "Many travel and hospitality-inspired websites become visually cluttered or overwhelming, making it difficult for users to focus on content and navigation.",
  goal: "Create a clean and calming digital experience that emphasizes simplicity, atmosphere, and structured navigation through ocean-inspired visuals and layouts.",
  final_subtitle: "Final coastal-inspired experience focused on clarity and atmosphere",
  final_paragraph: "The final concept combines calming imagery, structured spacing systems, and clean visual hierarchy to create an immersive browsing experience inspired by coastal environments and modern hospitality design.",

  small_images: [
    {
      src: "../images/bluewater2.jpeg",
      alt: "Bluewater layouts"
    },
    {
      src: "../images/bluewater3.jpeg",
      alt: "Bluewater interface"
    },
    {
      src: "../images/bluewater4.jpeg",
      alt: "Bluewater branding"
    }
  ],

  large_images: [
    {
      src: "../images/bluewater1.jpeg",
      alt: "Bluewater full layouts"
    },
    {
      src: "../images/bluewater5.jpeg",
      alt: "Bluewater responsive layouts"
    },
    {
      src: "../images/bluewater6.jpeg",
      alt: "Bluewater visual system"
    }
  ],

  pageType: "project"
},
};