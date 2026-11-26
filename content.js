 // Put photos, videos, and your résumé PDF in assets. Paths start at index.html.
const portfolio = {
  name: 'Dennis Gao',
  role: 'Georgia Tech mechanical engineering student',
  bio: `- As a Georgia Tech student, I aspire to innovate and explore new opportunities.
- Make a contribution to an ever-evolving world.
- Communicate with intent.`,
  resume: 'assets/resume11.25.26.pdf', // Example: 'assets/resume.pdf'
  contactFormEndpoint: 'https://formspree.io/f/mqpqjgqr', // Paste the HTTPS form endpoint here.
  backgroundImage: 'assets/giphy.gif',
  backgroundTileWidth: 0, // Single image. Use 1500 to repeat it again.
  siteIcon: '', // Example: 'assets/icon.png'
  // Set src to an empty string to hide the photo beside your name.
  heroPhoto: { src: 'assets/PB050002.JPG', alt: '' },
  introPhoto: { src: '', alt: 'Headshot of Dennis Gao' }, // Example: src: 'assets/headshot.jpg'

  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/gaodennis/' },
    //{ label: 'GitHub', url: 'https://github.com/BigDen01' },
    // Add more links here: { label: 'Personal site', url: 'https://example.com' },
  ],

  projects: [
    // Fill in this entry, then copy it to add another project.
    {
      title: 'L1 Rocket Certification',
      description: 'Designing and building a L1 rocket',
      details: `During my 2026 Fall semester, I wanted to dip my toes in rocketry and was able to fly my first ever high powered rocket through\
                the Rambling Rocket Club. Using Openrocket, I designed "Lotus" to use an Aerotech H-123 motor that reaches an apogee of 2184 ft and hitting a \
                maximum velocity of 449 ft/s (mach 0.403). The rocket had a simulated stability of 1.75 calibers, and the recovery was a basic delayed charge \
                of a single 36 inch parachute.
                
                During launch day, the rocket fired as expected and it blasted into the sky. However, the motor for the rocket was switched last minute, and\
                 the rocket's delay charge that ejected the parachute was so delayed that it fired moments before it crash landed. Fortunately,the rocket and\
                 and the parachute was still intact, which allowed me to pass my L1 certification.
                 
                 Through this project, I learned many things:
                 - Use OpenRocket to evaluate predicted altitude, speed, and stability as part of the design process.
                 - Record which configuration produced each simulation so the results stay tied to the design I evaluated.
                 - Revisit my preflight assumptions when a component changes close to launch.
                 `,
      files: [],
      images: [
        // The first image also appears on the project card.
        { src: 'assets/L1rocket/lotus.jpeg', thumbnail: 'assets/portfolio/lotus-cover.webp', alt: 'L1 rocket certification project', caption: 'Pre-flight photo' },
        { src: 'assets/L1rocket/finAssembly.jpeg', alt: 'Completed fixture on the assembly bench', caption: 'Rocket fin Assembly' },
        { src: 'assets/L1rocket/IMG_4132.jpg', alt: 'Group photo', caption: 'Group Photo' },
      ],
      videos: [
        { src: 'assets/L1rocket/rocketvid.mp4', label: 'Video of rocket flying', caption: 'First rocket launch', autoplay: true },
      ],
    },
  //------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------
        {
      title: 'ME 2110 (Creative Decisions) Robotics',
      description: 'Fall 2026 Robotics Competition',
      details: `ME2110 is a design and build course in which all students in the School of Mechanical Engineering at Georgia Tech participate. \
                This year's theme was Pirate's of the Carribean, and our robot had to navigate an dynamic arena, topple mermaid statues, retrieve Davy Jones' heart\
                , retrieve and organize coins and jewels, and raise our pirate flag as high as possible. 

                 After weeks of preparation, we received mixed results during competition day. We worked on trying to make every single subsystem to\
                 work up to the competition, but reliability was key to getting the best results. We were able to get into the round of 32 out of 82 teams, \
                 and we scored top 20 out of all teams during the first two rounds.
                 
                 However, our team still earned invaluable skills that will be utilized in our future endeavors, including:
                 - Engineering Documentation
                 - Fabrication Skills
                 - Mechatronics and Coding skills
                 - Calloborative decisions and brainstorming`,
      files: [],
      images: [
        // The first image also appears on the project card.
        { src: 'assets/ME2110/CAD2.png', thumbnail: 'assets/portfolio/me2110-cover.webp', alt: 'Full assembly 1', caption: 'Unactivated Assembly' },
        { src: 'assets/ME2110/CAD1.png', alt: 'Full Assembly 2' , caption: 'CAD representation of activated robot'},
        { src: 'assets/ME2110/IMG_4148.jpeg', alt: 'Actual robot', caption: 'Final robot before competition' },
        
      ],
      videos: [
        { src: 'assets/ME2110/IMG_0849.MOV', label: 'Competition', caption: 'Best round during competition', autoplay: true },
      ],
    },
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
            {
      title: '1st Place ECTC Undergraduate Research',
      description: 'Thermal Packaging Researching of large scale AI cooling',
      details: `I am extremely proud to share that our Georgia Tech team secured first place in the Student Competition BS/MS track at IEEE ECTC!
      
      Our research focused on advancing the thermo-mechanical reliability of next-generation AI and data center processors.\
       Specifically, we addressed the critical bottlenecks of extreme localized heat generation and the subsequent structural warpage\
        caused by mismatched material expansion in high-power chips.
      
       Finally, a massive thank you to my teammates, Dennis Gao and Kelvin Cheung. \
       This milestone is a direct result of our dedication and countless horus of rigorous research we poured into this project.
       
       Here is our following paper:`,
      files: [
        { src: 'assets/ECTC/ECTC 2026 Final.pdf', label: 'ECTC 2026 Final (PDF)' },
      ],
      images: [
        // The first image also appears on the project card.
        { src: 'assets/ECTC/ectc_logo.jpeg', thumbnail: 'assets/portfolio/ectc-cover.webp', alt: 'Describe what the photo shows' },
      ],
    },

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
            {
      title: 'L2 Rocket Certification',
      status: 'In progress',
      description: 'Currently Underway!',
      details: '',
      files: [
        // Add your report PDF to assets, then uncomment and set its filename.
        // { src: 'assets/ECTC/report.pdf', label: 'Read our research report (PDF)' },
      ],
      images: [
        // The first image also appears on the project card.
        // { src: 'assets/project-photo.jpg', alt: 'Describe what the photo shows' },
      ],
    },
  ],
};
