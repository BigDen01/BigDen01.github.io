// Put photos, videos, and your résumé PDF in assets. Paths start at index.html.
const portfolio = {
  name: 'Dennis Gao',
  role: 'Mechanical Engineering Portfolio',
  bio: `- As a Georgia Tech student, I aspire to innovate and explore new opportunities.
- Make a contribution to an ever-evolving world.
- Communicate with intent.`,
  resume: '', // Example: 'assets/resume.pdf'
  backgroundImage: 'assets/giphy.gif',
  backgroundTileWidth: 0, // Single image. Use 1500 to repeat it again.
  siteIcon: '', // Example: 'assets/icon.png'
  introPhoto: { src: '', alt: 'Headshot of Dennis Gao' }, // Example: src: 'assets/headshot.jpg'

  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/gaodennis/' },
    { label: 'GitHub', url: 'https://github.com/BigDen01' },
    // Add more links here: { label: 'Personal site', url: 'https://example.com' },
  ],

  projects: [
    // Fill in this entry, then copy it to add another project.
    {
      title: 'L1 Rocket Certification',
      description: 'Designing and building a L1 rocket',
      details: '',
      images: [
        // The first image also appears on the project card.
        { src: 'assets/L1rocket/lotus.jpeg', alt: 'L1 rocket certification project' },
        { src: 'assets/L1rocket/finAssembly.jpeg', alt: 'Completed fixture on the assembly bench', caption: 'Rocket fin assembly' },
      ],
      videos: [
        { src: 'assets/L1rocket/rocketvid.mp4', label: 'Video of rocket flying', autoplay: true },
      ],
    },
        {
      title: 'ME 2110(Creative Decisions) Robotics',
      description: 'Semesterly Robotics Competition',
      details: '',
      images: [
        // The first image also appears on the project card.
        // { src: 'assets/project-photo.jpg', alt: 'Describe what the photo shows' },
      ],
    },
            {
      title: '1st Place ECTC Undergraduate Research',
      description: 'AI chip cooling',
      details: '',
      images: [
        // The first image also appears on the project card.
        // { src: 'assets/project-photo.jpg', alt: 'Describe what the photo shows' },
      ],
    },
  ],
};
