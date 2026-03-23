export const projects = [
  {
    id: 'ai-job-app-assistant',
    title: 'AI Job Application Assistant',
    description: 'Paste a job posting and get back a tailored resume and cover letter in seconds. Maintains a structured knowledge base of my work experience and iteratively refines output through chat. Built to eliminate the most tedious part of job hunting.',
    links: [
      { label: 'GitHub', url: 'https://github.com/vik-srinivasan/AI-job-app-assistant' },
    ],
    tags: ['AI', 'Python', 'Claude'],
    featured: true,
  },
  {
    id: 'ai-arcade',
    title: 'AI Arcade',
    description: 'Ever wanted to trash-talk an AI while playing Connect Four? Three classic games — Connect Four, Tic Tac Toe, and 20 Questions — all played against Claude, wrapped in a retro arcade UI with neon accents.',
    links: [
      { label: 'GitHub', url: 'https://github.com/vik-srinivasan/ai-arcade' },
    ],
    tags: ['React', 'Claude AI', 'Vite'],
    featured: true,
  },
  {
    id: 'mock-interview',
    title: 'Mock Interview Simulator',
    description: 'Job interviews are stressful and practicing alone doesn\'t help much. This runs you through a realistic 5-question interview with an AI that adapts to your role and difficulty level, then gives you honest feedback and a letter grade.',
    links: [
      { label: 'GitHub', url: 'https://github.com/vik-srinivasan/mock-interview-simulator' },
    ],
    tags: ['React', 'Claude AI', 'Vite'],
    featured: true,
  },
  {
    id: 'choose-adventure',
    title: 'Choose Your Own Adventure',
    description: 'A fantasy story where the AI narrates and your choices actually change the world. Track your Health, Gold, and Reputation as you play through a dark, atmospheric adventure that\'s different every time.',
    links: [
      { label: 'GitHub', url: 'https://github.com/vik-srinivasan/choose-your-adventure' },
    ],
    tags: ['React', 'Claude AI', 'Vite'],
    featured: false,
  },
  {
    id: 'genie-compliance',
    title: 'Genie Compliance Inference System',
    description: 'Smart contracts can be dangerous if they don\'t behave as expected. This system analyzes Solidity contracts for safety using structured reasoning worksheets, then measures how much better structured analysis performs vs. throwing the contract at an LLM and hoping for the best.',
    links: [
      { label: 'GitHub', url: 'https://github.com/vik-srinivasan/genie-compliance' },
    ],
    tags: ['NLP', 'LLMs', 'Solidity'],
    featured: false,
  },
  {
    id: 'geovision',
    title: 'Geovision: Image Geolocation with ViTs',
    description: 'Can a neural network figure out what country a photo was taken in? Fine-tuned Vision Transformers on a 104-country geolocation task, hitting 88% top-5 accuracy. Basically GeoGuessr but the AI plays.',
    links: [
      { label: 'GitHub', url: 'https://github.com/vik-srinivasan/GeoGuessrCV' },
    ],
    tags: ['Computer Vision', 'PyTorch', 'ViT'],
    featured: false,
  },
  {
    id: 'repwise',
    title: 'RepWise',
    description: 'Tell it your fitness goals and workout history, and it generates a personalized plan using Gemini. Built it because I wanted something smarter than a generic push/pull/legs split from Reddit.',
    links: [
      { label: 'GitHub', url: 'https://github.com/vik-srinivasan/RepWise' },
    ],
    tags: ['React Native', 'Gemini API', 'Supabase'],
    featured: false,
  },
  {
    id: 'spotify-tracker',
    title: 'SpotifyTracker',
    description: 'See your actual top tracks and artists across different time ranges — not Spotify Wrapped once a year, but whenever you want. Built with the Spotify Web API.',
    links: [
      { label: 'GitHub', url: 'https://github.com/vik-srinivasan/SpotifyTracker' },
    ],
    tags: ['React Native', 'Spotify API'],
    featured: false,
  },
  {
    id: 'audio-feedback',
    title: 'Audio Feedback Research',
    description: 'Voice dictation falls apart when you can\'t see the screen to catch errors. This tool uses named entity recognition and real-time correction to make transcription actually reliable for blind and low-vision users.',
    links: [
      { label: 'GitHub', url: 'https://github.com/vik-srinivasan/Audio-Feedback' },
    ],
    tags: ['NLP', 'Accessibility', 'Speech API'],
    featured: false,
  },
  {
    id: 'multilingual-narrative',
    title: 'Multilingual Narrative Detection',
    description: 'Detecting political narratives across languages is hard because models trained on English break on everything else. This uses a multi-task XLM-R model to do entity recognition and sentiment analysis simultaneously on multilingual social media text.',
    links: [
      { label: 'GitHub', url: 'https://github.com/vik-srinivasan/MultiNarDetection' },
    ],
    tags: ['NLP', 'XLM-R', 'PyTorch'],
    featured: false,
  },
];
