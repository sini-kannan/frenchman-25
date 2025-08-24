// French vocabulary lessons
const lessons = [
    {
        english: "Hello",
        french: "Bonjour",
        hint: "Starts with 'B' and sounds like 'bon-jor'"
    },
    {
        english: "Goodbye",
        french: "Au revoir",
        hint: "Starts with 'Au' and means 'until we see each other again'"
    },
    {
        english: "Thank you",
        french: "Merci",
        hint: "Sounds like 'mare-see'"
    },
    {
        english: "Please",
        french: "S'il vous plaît",
        hint: "Formal way to say please in French"
    },
    {
        english: "Yes",
        french: "Oui",
        hint: "Pronounced like 'we'"
    },
    {
        english: "No",
        french: "Non",
        hint: "Similar to English 'no' but with a nasal 'n' sound"
    },
    {
        english: "I love you",
        french: "Je t'aime",
        hint: "Starts with 'Je' which means 'I'"
    },
    {
        english: "How are you?",
        french: "Comment ça va?",
        hint: "Starts with 'Comment' which means 'how'"
    }
];

// ---------------------
// Image Vocabulary Quiz
// ---------------------
function seedImageQuizItems(target = 100) {
  if (imageQuizItems.length >= target) return;
  const pool = [
    { emoji: '🍎', fr: 'pomme', en: 'apple', level: 'A1' },
    { emoji: '🍌', fr: 'banane', en: 'banana', level: 'A1' },
    { emoji: '🍓', fr: 'fraise', en: 'strawberry', level: 'A1' },
    { emoji: '🍇', fr: 'raisin', en: 'grape', level: 'A1' },
    { emoji: '🍊', fr: 'orange', en: 'orange', level: 'A1' },
    { emoji: '🍋', fr: 'citron', en: 'lemon', level: 'A1' },
    { emoji: '🍅', fr: 'tomate', en: 'tomato', level: 'A1' },
    { emoji: '🥖', fr: 'pain', en: 'bread', level: 'A1' },
    { emoji: '🧀', fr: 'fromage', en: 'cheese', level: 'A1' },
    { emoji: '🥛', fr: 'lait', en: 'milk', level: 'A1' },
    { emoji: '💧', fr: 'eau', en: 'water', level: 'A1' },
    { emoji: '☕', fr: 'café', en: 'coffee', level: 'A1' },
    { emoji: '🍵', fr: 'thé', en: 'tea', level: 'A1' },
    { emoji: '🐟', fr: 'poisson', en: 'fish', level: 'A1' },
    { emoji: '🍗', fr: 'poulet', en: 'chicken', level: 'A1' },
    { emoji: '🏠', fr: 'maison', en: 'house', level: 'A1' },
    { emoji: '🏫', fr: 'école', en: 'school', level: 'A1' },
    { emoji: '🏙️', fr: 'ville', en: 'city', level: 'A1' },
    { emoji: '🌳', fr: 'parc', en: 'park', level: 'A1' },
    { emoji: '🏦', fr: 'banque', en: 'bank', level: 'A2' },
    { emoji: '🏬', fr: 'magasin', en: 'store; shop', level: 'A1' },
    { emoji: '📖', fr: 'livre', en: 'book', level: 'A1' },
    { emoji: '🐱', fr: 'chat', en: 'cat', level: 'A1' },
    { emoji: '🐶', fr: 'chien', en: 'dog', level: 'A1' },
    { emoji: '☀️', fr: 'soleil', en: 'sun', level: 'A1' },
    { emoji: '🌧️', fr: 'pluie', en: 'rain', level: 'A1' },
    { emoji: '❄️', fr: 'neige', en: 'snow', level: 'A1' },
    { emoji: '🪑', fr: 'chaise', en: 'chair', level: 'A1' },
    { emoji: '🛏️', fr: 'lit', en: 'bed', level: 'A1' },
    { emoji: '🚪', fr: 'porte', en: 'door', level: 'A1' },
    { emoji: '🪟', fr: 'fenêtre', en: 'window', level: 'A1' },
    { emoji: '👕', fr: 'chemise', en: 'shirt', level: 'A2' },
    { emoji: '👖', fr: 'pantalon', en: 'pants', level: 'A2' },
    { emoji: '🎩', fr: 'chapeau', en: 'hat', level: 'A2' },
    { emoji: '👟', fr: 'chaussure', en: 'shoe', level: 'A2' },
    { emoji: '🚆', fr: 'train', en: 'train', level: 'A1' },
    { emoji: '🚗', fr: 'voiture', en: 'car', level: 'A1' },
    { emoji: '🚌', fr: 'bus', en: 'bus', level: 'A1' },
    { emoji: '🚲', fr: 'vélo', en: 'bicycle', level: 'A1' },
    { emoji: '📱', fr: 'téléphone', en: 'phone', level: 'A2' },
    { emoji: '💻', fr: 'ordinateur', en: 'computer', level: 'A2' },
    { emoji: '🥚', fr: 'œuf', en: 'egg', level: 'A2' },
    { emoji: '🧂', fr: 'sel', en: 'salt', level: 'A1' },
    { emoji: '🍬', fr: 'sucre', en: 'sugar', level: 'A1' },
    { emoji: '🧈', fr: 'beurre', en: 'butter', level: 'A1' },
    { emoji: '🍄', fr: 'champignon', en: 'mushroom', level: 'A2' },
    { emoji: '🥕', fr: 'carotte', en: 'carrot', level: 'A1' },
    { emoji: '🌽', fr: 'maïs', en: 'corn', level: 'A2' },
    { emoji: '🍚', fr: 'riz', en: 'rice', level: 'A1' },
    { emoji: '🍝', fr: 'pâtes', en: 'pasta', level: 'A1' }
  ];
  for (let i = 0; i < target; i++) {
    const it = pool[i % pool.length];
    imageQuizItems.push({ ...it, id: i + 1 });
  }
}

function stripAccents(s) {
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function loadImageQuiz(index = 0) {
  if (!imageQuizItems.length) seedImageQuizItems(100);
  const total = imageQuizItems.length;
  imageQuizIndex = Math.max(0, Math.min(index, total - 1));
  const item = imageQuizItems[imageQuizIndex];
  if (!item) return;
  if (imageQuizImage) imageQuizImage.textContent = item.emoji;
  if (imageQuizHint) imageQuizHint.textContent = `Hint (EN): ${item.en} • Level: ${item.level}`;
  if (imageQuizAnswer) { imageQuizAnswer.value = ''; imageQuizAnswer.placeholder = 'Tape le mot en français...'; imageQuizAnswer.focus(); }
  if (imageQuizFeedback) imageQuizFeedback.classList.add('hidden');
  if (imageQuizPage) imageQuizPage.textContent = `${imageQuizIndex + 1} / ${total}`;
}

function checkImageQuiz() {
  const item = imageQuizItems[imageQuizIndex];
  if (!item) return;
  const user = (imageQuizAnswer.value || '').trim().toLowerCase();
  if (!user) return;
  const ok = stripAccents(user) === stripAccents(item.fr.toLowerCase());
  if (ok) {
    points += 10;
    updatePoints();
    imageQuizFeedbackText.textContent = `Correct! "${item.fr}" = ${item.en}.`;
    imageQuizFeedback.className = 'feedback correct';
  } else {
    imageQuizFeedbackText.textContent = `Incorrect. Correct answer: "${item.fr}" (${item.en}).`;
    imageQuizFeedback.className = 'feedback incorrect';
  }
  imageQuizFeedback.classList.remove('hidden');
}

function nextImageQuiz() {
  const next = imageQuizIndex + 1;
  if (next < imageQuizItems.length) {
    loadImageQuiz(next);
  } else {
    // loop back
    loadImageQuiz(0);
  }
}

// Seed 100 stories from easy (A1) to difficult (B1)
function seedStoriesItems(target = 100) {
  const base = listeningContent.stories || [];
  const protagonists = ['Léo', 'Mia', 'Noah', 'Zoé', 'Élise', 'Alex', 'Nina', 'Hugo'];
  const places = ['le parc', 'la maison', 'l\'école', 'la forêt', 'le jardin', 'la plage', 'le village', 'la ville'];
  const actionsA1 = [
    'Il marche lentement.',
    'Elle regarde un chat.',
    'Il mange une pomme.',
    'Elle lit un livre simple.',
    'Il joue avec un ballon.'
  ];
  const actionsA2 = [
    'Ils décident de visiter un ami après le déjeuner.',
    'Elle cherche son crayon parce qu\'elle veut dessiner.',
    'Il prépare un petit pique-nique pour l\'après-midi.',
    'Elle raconte une courte histoire à son frère.'
  ];
  const actionsB1 = [
    'Bien qu\'il fasse un peu froid, ils continuent leur promenade en discutant des projets pour le week-end.',
    'Elle se souvient d\'un rêve étrange et essaie de l\'écrire pour ne pas l\'oublier.',
    'Ils observent les nuages qui changent de forme tandis que le soleil se couche lentement.'
  ];
  const makeTranscript = (hero, place, level, idx) => {
    if (level === 'A1') {
      const a = actionsA1[idx % actionsA1.length];
      return `${hero} va à ${place}. ${a} Il sourit. C\'est une bonne journée.`;
    }
    if (level === 'A2') {
      const a = actionsA2[idx % actionsA2.length];
      return `${hero} arrive à ${place}. ${a} Ensuite, il parle avec une voisine sympathique. Tout se passe bien.`;
    }
    // B1
    const a = actionsB1[idx % actionsB1.length];
    return `${hero} se rend à ${place} où il rencontre une personne qu\'il n\'avait pas vue depuis longtemps. ${a} Finalement, il rentre chez lui, satisfait d\'avoir passé un moment paisible.`;
  };

  const levels = ['A1', 'A2', 'B1'];
  const start = base.length;
  for (let i = start; i < target; i++) {
    const hero = protagonists[i % protagonists.length];
    const place = places[i % places.length];
    const level = levels[Math.floor((i / target) * levels.length)] || 'B1';
    const title = `Histoire niveau ${level} #${i + 1}`;
    const description = `Petite histoire (${level}) avec ${hero} à ${place}.`;
    const transcript = makeTranscript(hero, place, level, i);
    const questions = [
      {
        question: `Qui est le personnage principal ?`,
        options: [hero, 'Paul', 'Emma', 'Marc'],
        correct: 0
      },
      {
        question: `Où se passe l\'histoire ?`,
        options: [place, 'au marché', 'au musée', 'à la gare'],
        correct: 0
      }
    ];
    base.push({ title, description, transcript, questions });
  }
  listeningContent.stories = base;
}

// Seed 100 conversations from easy (A1) to difficult (B1)
function seedConversationsItems(target = 100) {
  const base = listeningContent.conversations || [];
  const levels = ['A1', 'A2', 'B1'];
  const places = ['au café', 'au marché', 'à la gare', 'à l\'hôtel', 'au restaurant', 'à la pharmacie'];
  const topicsA1 = [
    ['Bonjour', 'Je voudrais un café, s\'il vous plaît.', 'Ça fait combien ?', 'Merci, au revoir.'],
    ['Salut', 'Où sont les toilettes ?', 'À gauche, merci.', 'De rien.']
  ];
  const topicsA2 = [
    ['Bonjour', 'Je cherche des tomates et du fromage.', 'Combien ça coûte au total ?', 'Je paie par carte, merci.'],
    ['Excusez-moi', 'Le train pour Lyon part à quelle heure ?', 'Voie trois, c\'est bien ?', 'Merci pour l\'information.']
  ];
  const topicsB1 = [
    ['Bonsoir', 'La chambre est un peu bruyante, avez-vous une autre ?', 'Nous restons deux nuits et nous aimerions une vue sur la cour.', 'Merci pour votre aide, c\'est très gentil.'],
    ['Bonjour', 'Le plat est délicieux mais un peu trop salé pour moi.', 'Serait-il possible d\'avoir moins de sel la prochaine fois ?', 'Merci de votre compréhension.']
  ];

  function makeDialogue(level, i) {
    const place = places[i % places.length];
    let lines;
    if (level === 'A1') {
      lines = topicsA1[i % topicsA1.length];
    } else if (level === 'A2') {
      lines = topicsA2[i % topicsA2.length];
    } else {
      lines = topicsB1[i % topicsB1.length];
    }
    const transcript = lines.map((l, idx) => (idx % 2 === 0 ? '- ' + l : '- ' + l)).join(' ');
    return { place, transcript, lines };
  }

  const start = base.length;
  for (let i = start; i < target; i++) {
    const level = levels[Math.floor((i / target) * levels.length)] || 'B1';
    const { place, transcript, lines } = makeDialogue(level, i);
    const title = `Conversation niveau ${level} #${i + 1}`;
    const description = `Dialogue ${place} (${level}).`;
    const q1Prompt = (level === 'A1') ? 'Que veut le client ?' : (level === 'A2' ? 'Que cherche la personne ?' : 'Quel est le problème mentionné ?');
    const correct1 = (level === 'A1') ? 0 : (level === 'A2' ? 1 : 2);
    const q1Options = (level === 'A1')
      ? ['Un café', 'Un thé', 'De l\'eau', 'Un jus']
      : (level === 'A2')
        ? ['Du pain', 'Des tomates et du fromage', 'Des pommes', 'Du lait']
        : ['Trop froid', 'Service lent', 'Trop bruyant/salé', 'Trop cher'];
    const q2Prompt = 'Où se passe la scène ?';
    const q2Options = [place, 'au cinéma', 'au parc', 'au musée'];
    const questions = [
      { question: q1Prompt, options: q1Options, correct: correct1 },
      { question: q2Prompt, options: q2Options, correct: 0 }
    ];
    base.push({ title, description, transcript, questions });
  }
  listeningContent.conversations = base;
}

// Listening content data
const listeningContent = {
    news: [
        {
            title: "French Weather Report",
            description: "A typical French weather forecast",
            transcript: "Bonjour et bienvenue au bulletin météo. Aujourd'hui, il fait beau dans toute la France. La température est de vingt degrés à Paris. Il y a du soleil et pas de nuages. Demain, il pleuvra dans le nord mais il fera encore beau dans le sud. Bonne journée!",
            questions: [
                {
                    question: "What is the temperature in Paris?",
                    options: ["15 degrees", "20 degrees", "25 degrees", "30 degrees"],
                    correct: 1
                },
                {
                    question: "What will the weather be like tomorrow in the north?",
                    options: ["Sunny", "Cloudy", "Rainy", "Snowy"],
                    correct: 2
                }
            ]
        }
    ],
    stories: [
        {
            title: "Le Petit Chat",
            description: "A simple story about a little cat",
            transcript: "Il était une fois un petit chat noir. Il habitait dans une petite maison avec une famille gentille. Chaque matin, le chat sortait dans le jardin pour jouer avec les papillons. Il aimait beaucoup courir et sauter. Le soir, il rentrait à la maison pour dormir près du feu.",
            questions: [
                {
                    question: "What color was the cat?",
                    options: ["White", "Black", "Brown", "Gray"],
                    correct: 1
                },
                {
                    question: "What did the cat like to do in the garden?",
                    options: ["Sleep", "Eat", "Play with butterflies", "Dig holes"],
                    correct: 2
                }
            ]
        }
    ],
    conversations: [
        {
            title: "At the Café",
            description: "A conversation between a customer and waiter",
            transcript: "- Bonjour monsieur, que désirez-vous? - Bonjour, je voudrais un café s'il vous plaît. - Avec du sucre? - Oui, deux morceaux de sucre. - Et avec ça? - C'est tout, merci. - Très bien, ça fait deux euros cinquante.",
            questions: [
                {
                    question: "What did the customer order?",
                    options: ["Tea", "Coffee", "Water", "Juice"],
                    correct: 1
                },
                {
                    question: "How much sugar did the customer want?",
                    options: ["One piece", "Two pieces", "Three pieces", "No sugar"],
                    correct: 1
                }
            ]
        }
    ]
};

// Seed 100 news items with slight variations (titles, descriptions, transcripts, and simple questions)
function seedNewsItems(target = 100) {
  const base = listeningContent.news || [];
  const cities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille', 'Nice', 'Toulouse', 'Nantes'];
  const conditions = ['il fait beau', 'il pleut', 'il y a du vent', 'le ciel est couvert', 'il y a du soleil'];
  const temps = [14, 16, 18, 20, 22, 24, 26];
  const days = ['aujourd\'hui', 'cet après-midi', 'ce matin', 'ce soir'];
  // Keep the first existing item, then extend up to target
  const start = base.length;
  for (let i = start; i < target; i++) {
    const city = cities[i % cities.length];
    const cond = conditions[i % conditions.length];
    const t = temps[i % temps.length];
    const when = days[i % days.length];
    const title = `Bulletin météo #${i + 1}`;
    const description = `Prévisions ${when} pour ${city}.`;
    const transcript = `Bonjour et bienvenue au bulletin météo. À ${city}, ${cond} ${when}. La température est d'environ ${t} degrés. Demain, les conditions pourraient changer légèrement. Bonne journée !`;
    const questions = [
      {
        question: `Quelle est la température à ${city} ?`,
        options: [String(t - 2), String(t), String(t + 2), String(t + 4)],
        correct: 1
      },
      {
        question: `Quel temps fait-il à ${city} ?`,
        options: ['Il neige', 'Il fait orage', cond.charAt(0).toUpperCase() + cond.slice(1), 'Tempête'],
        correct: 2
      }
    ];
    base.push({ title, description, transcript, questions });
  }
  listeningContent.news = base;
}

// DOM Elements
const englishPhrase = document.getElementById('english-phrase');
const questionTitle = document.getElementById('question-title');
const learnModeEl = document.getElementById('learn-mode');
const userAnswer = document.getElementById('user-answer');
const checkBtn = document.getElementById('check-answer');
const feedback = document.querySelector('.feedback');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-question');
const hintText = document.getElementById('hint-text');
const hint = document.querySelector('.hint');

// Image Vocabulary quiz elements
const modeTranslateBtn = document.getElementById('mode-translate');
const modeImageBtn = document.getElementById('mode-image');
const translatePane = document.getElementById('translate-quiz');
const imageQuizPane = document.getElementById('image-quiz');
const imageQuizImage = document.getElementById('image-quiz-image');
const imageQuizHint = document.getElementById('image-quiz-hint');
const imageQuizAnswer = document.getElementById('image-quiz-answer');
const imageQuizCheck = document.getElementById('image-quiz-check');
const imageQuizFeedback = document.getElementById('image-quiz-feedback');
const imageQuizFeedbackText = document.getElementById('image-quiz-feedback-text');
const imageQuizNext = document.getElementById('image-quiz-next');
const imageQuizPage = document.getElementById('image-quiz-page');
const progressBar = document.querySelector('.progress');
const pointsDisplay = document.querySelector('.points');
const mascot = document.getElementById('mascot');
const mascotSpeech = document.getElementById('mascot-speech');

// Listening elements
const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.section');
const contentBtns = document.querySelectorAll('.content-btn');
const audioPlayer = document.querySelector('.audio-player');
const audioTitle = document.getElementById('audio-title');
const audioDescription = document.getElementById('audio-description');
const frenchAudio = document.getElementById('french-audio');
const toggleTranscript = document.getElementById('toggle-transcript');
const transcript = document.getElementById('transcript');
// Listening navigation controls
const listenPrev = document.getElementById('listen-prev');
const listenNext = document.getElementById('listen-next');
const listenPageInfo = document.getElementById('listen-page-info');

// Profile elements
const currentAvatarEl = document.getElementById('current-avatar');
const avatarGridEl = document.getElementById('avatar-grid');
const profileNameEl = document.getElementById('profile-name');
// Header avatar
const headerAvatarEl = document.getElementById('header-avatar');
// Home greeting
const homeGreetingEl = document.getElementById('home-greeting');

// Home navigation buttons
const homeNavBtns = document.querySelectorAll('.home-nav-btn');

const transcriptText = document.getElementById('transcript-text');
const questionsContainer = document.getElementById('questions-container');

// Dictionary elements
const dictSearch = document.getElementById('dict-search');
const dictGroup = document.getElementById('dict-group');
const dictLevel = document.getElementById('dict-level');
const dictList = document.getElementById('dict-list');
const dictPrev = document.getElementById('dict-prev');
const dictNext = document.getElementById('dict-next');
const dictPageInfo = document.getElementById('dict-page-info');
const dictSort = document.getElementById('dict-sort');
const dictOrder = document.getElementById('dict-order');
const dictFrOnly = document.getElementById('dict-fr-only');

// Game state
let currentLesson = 0;
let points = 0;
let showHint = false;
let learnMode = localStorage.getItem('learnMode') || 'en-fr'; // 'en-fr' or 'fr-en'
let imageQuizItems = [];
let imageQuizIndex = 0;

// Initialize the game
function init() {
    loadLesson(currentLesson);
    updatePoints();
    
    // Event listeners
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', nextQuestion);
    userAnswer.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });
    
    // Home nav buttons -> switch section
    if (homeNavBtns && homeNavBtns.length) {
      homeNavBtns.forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));
    }

    // Show hint after 5 seconds if user is stuck
    setTimeout(() => {
        if (userAnswer.value === '') {
            showHint = true;
            hintText.textContent = lessons[currentLesson].hint;
            hint.classList.remove('hidden');
        }
    }, 5000);

    // Mascot interactions
    if (mascot) {
      mascot.addEventListener('click', () => {
        const tip = getRandomTip();
        showMascotTip(tip);
        speak(tip);
      });
      // show initial greeting after load
      setTimeout(() => {
        showMascotTip('Salut! Je peux prononcer les mots pour toi. Essaie le bouton 🔊.');
      }, 1500);

      // 3D tilt on hover (supports svg or img inside mascot)
      const tiltTarget = mascot.querySelector('svg, img');
      const maxTilt = 10; // degrees
      function onMove(e) {
        const rect = mascot.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;  // 0..1
        const y = (e.clientY - rect.top) / rect.height;  // 0..1
        const ry = (x - 0.5) * 2 * maxTilt; // left/right -> rotateY
        const rx = -(y - 0.5) * 2 * maxTilt; // up/down -> rotateX
        if (tiltTarget) {
          tiltTarget.style.setProperty('--rx', rx.toFixed(2) + 'deg');
          tiltTarget.style.setProperty('--ry', ry.toFixed(2) + 'deg');
        }
      }
      function onLeave() {
        if (tiltTarget) {
          tiltTarget.style.setProperty('--rx', '0deg');
          tiltTarget.style.setProperty('--ry', '0deg');
        }
      }
      mascot.addEventListener('mousemove', onMove);
      mascot.addEventListener('mouseleave', onLeave);
    }

    // Initialize Profile after core UI is ready
    initProfile();

    // Learning mode events
    if (learnModeEl) {
      learnModeEl.value = learnMode;
      learnModeEl.addEventListener('change', () => {
        learnMode = learnModeEl.value;
        localStorage.setItem('learnMode', learnMode);
        loadLesson(currentLesson);
        saveUserState({ learnMode });
      });
    }

    // Vocabulary mode toggle (Translate vs Image)
    if (modeTranslateBtn && modeImageBtn) {
      modeTranslateBtn.addEventListener('click', () => {
        modeTranslateBtn.classList.add('active');
        modeImageBtn.classList.remove('active');
        if (translatePane) translatePane.classList.remove('hidden');
        if (imageQuizPane) imageQuizPane.classList.add('hidden');
      });
      modeImageBtn.addEventListener('click', () => {
        modeImageBtn.classList.add('active');
        modeTranslateBtn.classList.remove('active');
        if (translatePane) translatePane.classList.add('hidden');
        if (imageQuizPane) imageQuizPane.classList.remove('hidden');
        if (!imageQuizItems.length) seedImageQuizItems(100);
        loadImageQuiz(0);
      });
    }

    // Image quiz events
    if (imageQuizCheck) imageQuizCheck.addEventListener('click', checkImageQuiz);
    if (imageQuizNext) imageQuizNext.addEventListener('click', nextImageQuiz);
    if (imageQuizAnswer) imageQuizAnswer.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkImageQuiz(); });
}

// Load a lesson
function loadLesson(index) {
    if (index >= lessons.length) {
        // All lessons completed
        englishPhrase.textContent = "Congratulations! You've completed all lessons!";
        document.querySelector('.answer-input').style.display = 'none';
        feedback.classList.add('hidden');
        return;
    }
    
    // Set prompt depending on learning mode
    if (learnMode === 'en-fr') {
      questionTitle.textContent = 'Translate to French:';
      englishPhrase.textContent = lessons[index].english;
      userAnswer.placeholder = 'Type in French...';
    } else {
      questionTitle.textContent = 'Traduisez en anglais :';
      englishPhrase.textContent = lessons[index].french;
      userAnswer.placeholder = 'Type in English...';
    }
    userAnswer.value = '';
    userAnswer.focus();
    feedback.classList.add('hidden');
    hint.classList.add('hidden');
    showHint = false;
    
    // Reset hint timer
    setTimeout(() => {
        if (userAnswer.value === '') {
            showHint = true;
            // Use existing hint; for FR->EN, show a generic hint if present
            hintText.textContent = learnMode === 'en-fr' ? (lessons[currentLesson].hint || '') : 'Pensez au sens en anglais.';
            hint.classList.remove('hidden');
        }
    }, 5000);
}

// Check user's answer
function checkAnswer() {
    const userResponse = userAnswer.value.trim().toLowerCase();
    const correctAnswer = (learnMode === 'en-fr' ? lessons[currentLesson].french : lessons[currentLesson].english).toLowerCase();
    
    if (userResponse === '') return;
    
    if (userResponse === correctAnswer) {
        // Correct answer
        const fr = lessons[currentLesson].french;
        const en = lessons[currentLesson].english;
        feedbackText.textContent = learnMode === 'en-fr' 
          ? `Correct! "${fr}" means "${en}".`
          : `Correct! "${en}" se traduit par "${fr}".`;
        feedback.className = 'feedback correct';
        points += 10;
        updatePoints();
        triggerPointsBump();
        launchConfetti(60, 1400);
        // Persist outcome
        saveUserState({ lastOutcome: 'correct' });
    } else {
        // Incorrect answer
        const answer = learnMode === 'en-fr' ? lessons[currentLesson].french : lessons[currentLesson].english;
        feedbackText.textContent = `Incorrect. The correct answer is "${answer}".`;
        feedback.className = 'feedback incorrect';
        // Persist outcome
        saveUserState({ lastOutcome: 'incorrect' });
    }
    
    feedback.classList.remove('hidden');
    checkBtn.style.display = 'none';
    nextBtn.style.display = 'block';
}

// Move to next question
function nextQuestion() {
    currentLesson++;
    updateProgress();
    loadLesson(currentLesson);
    checkBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    // Save progress advancement
    saveUserState();
}

// Update progress bar
function updateProgress() {
    const progress = (currentLesson / lessons.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Update points display
function updatePoints() {
    pointsDisplay.textContent = `${points} XP`;
}

// Personalized greeting on Home
function setHomeGreeting(name) {
  if (!homeGreetingEl) return;
  const n = (name || '').trim();
  homeGreetingEl.textContent = n ? `Bonjour, ${n} !` : '';
}

// Tab switching functionality
function switchTab(tabName) {
    // Update tab buttons
    tabBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update sections
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(`${tabName}-section`).classList.add('active');
    if (tabName === 'dictionary') ensureDictionaryInitialized();
}

// Listening functionality
function loadListeningContent(type, index = 0) {
    const total = (listeningContent[type] || []).length;
    if (!total) return;
    // clamp index
    index = Math.max(0, Math.min(index, total - 1));
    listeningIndex[type] = index;
    const content = listeningContent[type][index];
    if (!content) return;
    
    audioTitle.textContent = content.title;
    audioDescription.textContent = content.description;
    transcriptText.textContent = content.transcript;
    
    // Use Web Speech API for text-to-speech
    generateFrenchAudio(content.transcript);
    
    // Load questions
    loadQuestions(content.questions || []);
    
    audioPlayer.classList.remove('hidden');
    updateListeningNav(type);
}

function generateFrenchAudio(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        const voice = preferredVoice || pickChildFrenchVoice();
        if (voice) {
            utterance.voice = voice;
            utterance.lang = voice.lang || 'fr-FR';
        } else {
            utterance.lang = 'fr-FR';
        }
        utterance.rate = 0.95;
        utterance.pitch = 1.3;
        
        // Create a blob URL for the audio element
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        frenchAudio.style.display = 'block';
        
        // Add play button functionality
        const playBtn = document.createElement('button');
        playBtn.textContent = '🔊 Play Audio';
        playBtn.onclick = () => speechSynthesis.speak(utterance);
        
        const audioControls = document.querySelector('.audio-controls');
        audioControls.innerHTML = '';
        audioControls.appendChild(playBtn);
    }
}

function loadQuestions(questions) {
    questionsContainer.innerHTML = '';
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        const questionTitle = document.createElement('h5');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'answer-options';
        
        q.options.forEach((option, optionIndex) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.onclick = () => checkListeningAnswer(optionIndex, q.correct, optionBtn, optionsDiv);
            optionsDiv.appendChild(optionBtn);
        });
        
        questionDiv.appendChild(optionsDiv);
        questionsContainer.appendChild(questionDiv);
    });
}

function checkListeningAnswer(selected, correct, btn, optionsDiv) {
    const allBtns = optionsDiv.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.classList.add('correct');
        points += 5;
    } else {
        btn.classList.add('incorrect');
        allBtns[correct].classList.add('correct');
    }
    updatePoints();
}

// Event listeners
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

contentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // mark active type button
        contentBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const type = btn.dataset.type;
        listeningIndex[type] = 0;
        loadListeningContent(type, 0);
    });
});

toggleTranscript.addEventListener('click', () => {
    transcript.classList.toggle('hidden');
    toggleTranscript.textContent = transcript.classList.contains('hidden') ? 
        'Show Transcript' : 'Hide Transcript';
});

// Listening navigation state and handlers
let listeningIndex = { news: 0, stories: 0, conversations: 0 };

function updateListeningNav(type) {
  if (!listenPageInfo) return;
  const total = (listeningContent[type] || []).length;
  const idx = listeningIndex[type] || 0;
  listenPageInfo.textContent = `${idx + 1} / ${Math.max(1, total)}`;
  if (listenPrev) listenPrev.disabled = idx <= 0;
  if (listenNext) listenNext.disabled = idx >= total - 1;
}

if (listenPrev) listenPrev.addEventListener('click', () => {
  const activeTypeBtn = document.querySelector('.content-btn.active') || null;
  const type = (activeTypeBtn && activeTypeBtn.dataset.type) || 'news';
  const idx = (listeningIndex[type] || 0) - 1;
  loadListeningContent(type, idx);
});
if (listenNext) listenNext.addEventListener('click', () => {
  const activeTypeBtn = document.querySelector('.content-btn.active') || null;
  const type = (activeTypeBtn && activeTypeBtn.dataset.type) || 'news';
  const idx = (listeningIndex[type] || 0) + 1;
  loadListeningContent(type, idx);
});

// Start the app will be called after Firebase auth + loading cloud state

// ---------------------
// Firebase Setup (Auth + Firestore)
// ---------------------
let firebaseApp = null;
let auth = null;
let db = null;
let userId = null;

async function initFirebaseAndUser() {
  if (!(window.firebase && window.firebaseConfig)) {
    console.warn('Firebase not configured. Progress will not be saved.');
    return null;
  }
  try {
    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp(window.firebaseConfig);
    } else {
      firebaseApp = firebase.app();
    }
    auth = firebase.auth();
    db = firebase.firestore();

    const cred = await auth.signInAnonymously();
    userId = cred.user ? cred.user.uid : (auth.currentUser && auth.currentUser.uid);
    // Ensure user doc exists
    const userRef = db.collection('users').doc(userId);
    const snap = await userRef.get();
    if (!snap.exists) {
      await userRef.set({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        points: 0,
        currentLesson: 0,
        learnMode: learnMode,
        profileName: localStorage.getItem('profileName') || '',
        avatarSrc: localStorage.getItem('avatarSrc') || 'assets/1.png'
      }, { merge: true });
    }
    await loadUserState();
  } catch (e) {
    console.warn('Firebase init/sign-in failed:', e);
  }
}

async function loadUserState() {
  try {
    if (!db || !userId) return;
    const doc = await db.collection('users').doc(userId).get();
    if (!doc.exists) return;
    const data = doc.data() || {};
    if (typeof data.points === 'number') points = data.points;
    if (typeof data.currentLesson === 'number') currentLesson = Math.max(0, Math.min(data.currentLesson, lessons.length - 1));
    if (typeof data.learnMode === 'string') learnMode = data.learnMode;
    const name = (data.profileName || '');
    const avatar = (data.avatarSrc || localStorage.getItem('avatarSrc') || 'assets/1.png');
    // Ensure avatar file exists; if not, fall back to default
    const validAvatar = await loadImageIfExists(avatar) || 'assets/1.png';

    // Apply to UI/local
    localStorage.setItem('learnMode', learnMode);
    localStorage.setItem('profileName', name);
    localStorage.setItem('avatarSrc', validAvatar);
    if (profileNameEl) profileNameEl.value = name;
    selectAvatar(validAvatar, null, { persist: true });
    setHomeGreeting(name);
    updatePoints();
    updateProgress();
  } catch (e) {
    console.warn('Failed to load user state:', e);
  }
}

async function saveUserState(partial = {}) {
  try {
    if (!db || !userId) return;
    const payload = {
      points,
      currentLesson,
      learnMode,
      profileName: (profileNameEl ? profileNameEl.value.trim() : (localStorage.getItem('profileName') || '')),
      avatarSrc: (localStorage.getItem('avatarSrc') || 'assets/1.png'),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      ...partial
    };
    await db.collection('users').doc(userId).set(payload, { merge: true });
  } catch (e) {
    console.warn('Failed to save user state:', e);
  }
}

// ---------------------
// Dictionary Module
// ---------------------

// Seed dataset (~60 words across groups). Extendable to 400+.
const dictionary = [
  // Basics (A1)
  { fr: 'bonjour', en: 'hello; good morning', group: 'basics', level: 'A1', pos: 'interj.', exFr: 'Bonjour, comment ça va ?', exEn: 'Hello, how are you?', tags: ['greeting'] },
  { fr: 'salut', en: 'hi; bye (informal)', group: 'basics', level: 'A1', pos: 'interj.', exFr: 'Salut Paul !', exEn: 'Hi Paul!', tags: ['greeting','informal'] },
  { fr: 'merci', en: 'thank you', group: 'basics', level: 'A1', pos: 'interj.', exFr: 'Merci pour votre aide.', exEn: 'Thank you for your help.', tags: ['politeness'] },
  { fr: 's’il vous plaît', en: 'please (formal)', group: 'basics', level: 'A1', pos: 'expr.', exFr: 'Un café, s’il vous plaît.', exEn: 'A coffee, please.', tags: ['politeness','formal'] },
  { fr: 'oui', en: 'yes', group: 'basics', level: 'A1', pos: 'adv.', exFr: 'Oui, je comprends.', exEn: 'Yes, I understand.', tags: [] },
  { fr: 'non', en: 'no', group: 'basics', level: 'A1', pos: 'adv.', exFr: 'Non, pas aujourd’hui.', exEn: 'No, not today.', tags: [] },
  { fr: 'pardon', en: 'sorry; excuse me', group: 'basics', level: 'A1', pos: 'interj.', exFr: 'Pardon, je suis en retard.', exEn: 'Sorry, I am late.', tags: ['apology'] },
  { fr: 'au revoir', en: 'goodbye', group: 'basics', level: 'A1', pos: 'expr.', exFr: 'Au revoir et à demain !', exEn: 'Goodbye, see you tomorrow!', tags: ['parting'] },

  // People (A1–A2)
  { fr: 'homme', en: 'man', group: 'people', level: 'A1', pos: 'n.m.', exFr: 'Cet homme est français.', exEn: 'That man is French.', tags: ['noun'] },
  { fr: 'femme', en: 'woman; wife', group: 'people', level: 'A1', pos: 'n.f.', exFr: 'La femme parle anglais.', exEn: 'The woman speaks English.', tags: ['noun'] },
  { fr: 'enfant', en: 'child', group: 'people', level: 'A1', pos: 'n.', exFr: 'Les enfants jouent.', exEn: 'The children are playing.', tags: ['noun','plural'] },
  { fr: 'ami / amie', en: 'friend (m/f)', group: 'people', level: 'A1', pos: 'n.', exFr: 'Mon ami habite à Lyon.', exEn: 'My friend lives in Lyon.', tags: ['relationships'] },
  { fr: 'famille', en: 'family', group: 'people', level: 'A1', pos: 'n.f.', exFr: 'Ma famille est grande.', exEn: 'My family is big.', tags: ['noun'] },
  { fr: 'voisin / voisine', en: 'neighbor (m/f)', group: 'people', level: 'A2', pos: 'n.', exFr: 'Mon voisin est sympa.', exEn: 'My neighbor is nice.', tags: [] },

  // Food (A1–A2)
  { fr: 'pain', en: 'bread', group: 'food', level: 'A1', pos: 'n.m.', exFr: 'Je mange du pain.', exEn: 'I eat bread.', tags: ['food'] },
  { fr: 'eau', en: 'water', group: 'food', level: 'A1', pos: 'n.f.', exFr: 'Un verre d’eau, s’il vous plaît.', exEn: 'A glass of water, please.', tags: ['drink'] },
  { fr: 'lait', en: 'milk', group: 'food', level: 'A1', pos: 'n.m.', exFr: 'Le lait est froid.', exEn: 'The milk is cold.', tags: [] },
  { fr: 'fromage', en: 'cheese', group: 'food', level: 'A1', pos: 'n.m.', exFr: 'J’adore le fromage.', exEn: 'I love cheese.', tags: [] },
  { fr: 'pomme', en: 'apple', group: 'food', level: 'A1', pos: 'n.f.', exFr: 'Une pomme par jour.', exEn: 'An apple a day.', tags: ['fruit'] },
  { fr: 'poisson', en: 'fish', group: 'food', level: 'A1', pos: 'n.m.', exFr: 'Le poisson est frais.', exEn: 'The fish is fresh.', tags: [] },
  { fr: 'boeuf', en: 'beef', group: 'food', level: 'A2', pos: 'n.m.', exFr: 'Du boeuf grillé.', exEn: 'Grilled beef.', tags: [] },
  { fr: 'poulet', en: 'chicken', group: 'food', level: 'A1', pos: 'n.m.', exFr: 'Un sandwich au poulet.', exEn: 'A chicken sandwich.', tags: [] },
  { fr: 'sucre', en: 'sugar', group: 'food', level: 'A1', pos: 'n.m.', exFr: 'Sans sucre, merci.', exEn: 'No sugar, thanks.', tags: [] },
  { fr: 'sel', en: 'salt', group: 'food', level: 'A1', pos: 'n.m.', exFr: 'Ajoute du sel.', exEn: 'Add some salt.', tags: [] },

  // Travel (A1–A2)
  { fr: 'train', en: 'train', group: 'travel', level: 'A1', pos: 'n.m.', exFr: 'Le train arrive.', exEn: 'The train is arriving.', tags: ['transport'] },
  { fr: 'avion', en: 'plane', group: 'travel', level: 'A1', pos: 'n.m.', exFr: 'Je prends l’avion.', exEn: 'I am taking the plane.', tags: ['transport'] },
  { fr: 'voiture', en: 'car', group: 'travel', level: 'A1', pos: 'n.f.', exFr: 'La voiture est rouge.', exEn: 'The car is red.', tags: ['transport'] },
  { fr: 'billet', en: 'ticket', group: 'travel', level: 'A1', pos: 'n.m.', exFr: 'Un billet pour Paris.', exEn: 'A ticket to Paris.', tags: [] },
  { fr: 'bagage', en: 'luggage', group: 'travel', level: 'A2', pos: 'n.m.', exFr: 'Mes bagages sont lourds.', exEn: 'My luggage is heavy.', tags: [] },
  { fr: 'hôtel', en: 'hotel', group: 'travel', level: 'A1', pos: 'n.m.', exFr: 'L’hôtel est complet.', exEn: 'The hotel is full.', tags: ['accommodation'] },
  { fr: 'réservation', en: 'reservation', group: 'travel', level: 'A2', pos: 'n.f.', exFr: 'J’ai une réservation.', exEn: 'I have a reservation.', tags: [] },

  // Places (A1)
  { fr: 'maison', en: 'house; home', group: 'places', level: 'A1', pos: 'n.f.', exFr: 'La maison est grande.', exEn: 'The house is big.', tags: [] },
  { fr: 'école', en: 'school', group: 'places', level: 'A1', pos: 'n.f.', exFr: 'L’école est près d’ici.', exEn: 'The school is nearby.', tags: [] },
  { fr: 'ville', en: 'city', group: 'places', level: 'A1', pos: 'n.f.', exFr: 'La ville est belle.', exEn: 'The city is beautiful.', tags: [] },
  { fr: 'magasin', en: 'shop; store', group: 'places', level: 'A1', pos: 'n.m.', exFr: 'Le magasin ouvre à 9h.', exEn: 'The store opens at 9.', tags: [] },
  { fr: 'banque', en: 'bank', group: 'places', level: 'A2', pos: 'n.f.', exFr: 'La banque est fermée.', exEn: 'The bank is closed.', tags: [] },
  { fr: 'parc', en: 'park', group: 'places', level: 'A1', pos: 'n.m.', exFr: 'On va au parc.', exEn: 'We are going to the park.', tags: [] },

  // Time (A1–A2)
  { fr: 'aujourd’hui', en: 'today', group: 'time', level: 'A1', pos: 'adv.', exFr: 'Aujourd’hui, il pleut.', exEn: 'Today, it is raining.', tags: [] },
  { fr: 'demain', en: 'tomorrow', group: 'time', level: 'A1', pos: 'adv.', exFr: 'À demain !', exEn: 'See you tomorrow!', tags: [] },
  { fr: 'hier', en: 'yesterday', group: 'time', level: 'A1', pos: 'adv.', exFr: 'Hier, j’ai étudié.', exEn: 'Yesterday, I studied.', tags: [] },
  { fr: 'matin', en: 'morning', group: 'time', level: 'A1', pos: 'n.m.', exFr: 'Le matin, je lis.', exEn: 'In the morning, I read.', tags: [] },
  { fr: 'soir', en: 'evening', group: 'time', level: 'A1', pos: 'n.m.', exFr: 'Le soir, je cuisine.', exEn: 'In the evening, I cook.', tags: [] },
  { fr: 'heure', en: 'hour; time', group: 'time', level: 'A1', pos: 'n.f.', exFr: 'Il est quelle heure ?', exEn: 'What time is it?', tags: [] },

  // Verbs (A1–A2)
  { fr: 'être', en: 'to be', group: 'verbs', level: 'A1', pos: 'v.', exFr: 'Je suis étudiant.', exEn: 'I am a student.', tags: ['core'] },
  { fr: 'avoir', en: 'to have', group: 'verbs', level: 'A1', pos: 'v.', exFr: 'Tu as deux chiens.', exEn: 'You have two dogs.', tags: ['core'] },
  { fr: 'aller', en: 'to go', group: 'verbs', level: 'A1', pos: 'v.', exFr: 'Nous allons au marché.', exEn: 'We are going to the market.', tags: [] },
  { fr: 'faire', en: 'to do; to make', group: 'verbs', level: 'A1', pos: 'v.', exFr: 'Il fait ses devoirs.', exEn: 'He does his homework.', tags: [] },
  { fr: 'prendre', en: 'to take', group: 'verbs', level: 'A2', pos: 'v.', exFr: 'Je prends le métro.', exEn: 'I take the subway.', tags: [] },
  { fr: 'vouloir', en: 'to want', group: 'verbs', level: 'A2', pos: 'v.', exFr: 'Je veux apprendre le français.', exEn: 'I want to learn French.', tags: [] },
  { fr: 'pouvoir', en: 'can; to be able to', group: 'verbs', level: 'A2', pos: 'v.', exFr: 'On peut venir ?', exEn: 'Can we come?', tags: [] },
  { fr: 'aimer', en: 'to like; to love', group: 'verbs', level: 'A1', pos: 'v.', exFr: 'Ils aiment voyager.', exEn: 'They like to travel.', tags: [] },
  { fr: 'manger', en: 'to eat', group: 'verbs', level: 'A1', pos: 'v.', exFr: 'Je mange à midi.', exEn: 'I eat at noon.', tags: [] },
  { fr: 'boire', en: 'to drink', group: 'verbs', level: 'A1', pos: 'v.', exFr: 'Vous buvez du thé.', exEn: 'You drink tea.', tags: [] },
  { fr: 'venir', en: 'to come', group: 'verbs', level: 'A2', pos: 'v.', exFr: 'Elle vient demain.', exEn: 'She is coming tomorrow.', tags: [] },
  { fr: 'partir', en: 'to leave', group: 'verbs', level: 'A2', pos: 'v.', exFr: 'Il part ce soir.', exEn: 'He is leaving this evening.', tags: [] },

  // Adjectives (A1–A2)
  { fr: 'grand / grande', en: 'tall; big', group: 'adjectives', level: 'A1', pos: 'adj.', exFr: 'Un grand immeuble.', exEn: 'A tall building.', tags: [] },
  { fr: 'petit / petite', en: 'small; little', group: 'adjectives', level: 'A1', pos: 'adj.', exFr: 'Une petite maison.', exEn: 'A small house.', tags: [] },
  { fr: 'beau / belle', en: 'beautiful; handsome', group: 'adjectives', level: 'A2', pos: 'adj.', exFr: 'Une belle vue.', exEn: 'A beautiful view.', tags: [] },
  { fr: 'bon / bonne', en: 'good', group: 'adjectives', level: 'A1', pos: 'adj.', exFr: 'Un bon repas.', exEn: 'A good meal.', tags: [] },
  { fr: 'mauvais / mauvaise', en: 'bad', group: 'adjectives', level: 'A2', pos: 'adj.', exFr: 'Un mauvais film.', exEn: 'A bad movie.', tags: [] },
  { fr: 'chaud / chaude', en: 'hot; warm', group: 'adjectives', level: 'A1', pos: 'adj.', exFr: 'Il fait chaud.', exEn: 'It is hot.', tags: [] },
  { fr: 'froid / froide', en: 'cold', group: 'adjectives', level: 'A1', pos: 'adj.', exFr: 'L’eau est froide.', exEn: 'The water is cold.', tags: [] },

  // Numbers (A1)
  { fr: 'zéro', en: 'zero', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Zéro degré.', exEn: 'Zero degrees.', tags: [] },
  { fr: 'un', en: 'one', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Un livre.', exEn: 'One book.', tags: [] },
  { fr: 'deux', en: 'two', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Deux cafés.', exEn: 'Two coffees.', tags: [] },
  { fr: 'trois', en: 'three', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Trois amis.', exEn: 'Three friends.', tags: [] },
  { fr: 'quatre', en: 'four', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Quatre pièces.', exEn: 'Four rooms.', tags: [] },
  { fr: 'cinq', en: 'five', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Cinq minutes.', exEn: 'Five minutes.', tags: [] },
  { fr: 'six', en: 'six', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Six euros.', exEn: 'Six euros.', tags: [] },
  { fr: 'sept', en: 'seven', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Sept jours.', exEn: 'Seven days.', tags: [] },
  { fr: 'huit', en: 'eight', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Huit personnes.', exEn: 'Eight people.', tags: [] },
  { fr: 'neuf', en: 'nine', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Neuf heures.', exEn: 'Nine o’clock.', tags: [] },
  { fr: 'dix', en: 'ten', group: 'numbers', level: 'A1', pos: 'num.', exFr: 'Dix kilomètres.', exEn: 'Ten kilometers.', tags: [] }
];

let dictPage = 1;
const dictPageSize = 10;
let dictFiltered = [];
let dictInitialized = false;
const levelRank = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };
let frOnly = (localStorage.getItem('dictFrOnly') || 'false') === 'true';

function ensureDictionaryInitialized() {
  if (dictInitialized) return;
  applyDictFilters();
  attachDictEvents();
  dictInitialized = true;
}

function attachDictEvents() {
  dictSearch.addEventListener('input', () => { dictPage = 1; applyDictFilters(); });
  dictGroup.addEventListener('change', () => { dictPage = 1; applyDictFilters(); });
  dictLevel.addEventListener('change', () => { dictPage = 1; applyDictFilters(); });
  if (dictSort) dictSort.addEventListener('change', () => { dictPage = 1; renderDictionary(); });
  if (dictOrder) dictOrder.addEventListener('change', () => { dictPage = 1; renderDictionary(); });
  if (dictFrOnly) {
    dictFrOnly.checked = frOnly;
    dictFrOnly.addEventListener('change', () => {
      frOnly = dictFrOnly.checked;
      localStorage.setItem('dictFrOnly', String(frOnly));
      dictPage = 1;
      renderDictionary();
    });
  }
  dictPrev.addEventListener('click', () => { if (dictPage > 1) { dictPage--; renderDictionary(); } });
  dictNext.addEventListener('click', () => { const max = Math.ceil(dictFiltered.length / dictPageSize); if (dictPage < max) { dictPage++; renderDictionary(); } });
}

function normalize(text) {
  return text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function applyDictFilters() {
  const q = normalize(dictSearch.value || '');
  const g = dictGroup.value;
  const l = dictLevel.value;
  dictFiltered = dictionary.filter(entry => {
    const inGroup = g === 'all' || entry.group === g;
    const inLevel = l === 'all' || entry.level === l;
    const text = `${entry.fr} ${entry.en}`;
    const matches = q === '' || normalize(text).includes(q);
    return inGroup && inLevel && matches;
  });
  renderDictionary();
}

function renderDictionary() {
  dictList.innerHTML = '';
  // Sort before paginating
  const sortBy = dictSort ? dictSort.value : 'fr';
  const order = (dictOrder ? dictOrder.value : 'asc') === 'asc' ? 1 : -1;
  const sorted = [...dictFiltered].sort((a, b) => {
    if (sortBy === 'level') {
      const la = levelRank[a.level] || 999;
      const lb = levelRank[b.level] || 999;
      if (la === lb) return normalize(a.fr).localeCompare(normalize(b.fr)) * order;
      return (la - lb) * order;
    }
    const av = normalize(sortBy === 'fr' ? a.fr : a.en);
    const bv = normalize(sortBy === 'fr' ? b.fr : b.en);
    return av.localeCompare(bv) * order;
  });

  const start = (dictPage - 1) * dictPageSize;
  const pageItems = sorted.slice(start, start + dictPageSize);

  pageItems.forEach(e => {
    const item = document.createElement('div');
    item.className = 'dict-item';
    if (frOnly) {
      item.innerHTML = `
        <div class="dict-head">
          <div class="dict-french">${e.fr} <button class="speak-btn" title="Pronounce">🔊</button></div>
        </div>
        <div class="dict-meta">${e.pos} • Level: ${e.level}</div>
      `;
    } else {
      item.innerHTML = `
        <div class="dict-head">
          <div class="dict-french">${e.fr} <button class="speak-btn" title="Pronounce">🔊</button></div>
          <div class="dict-english">${e.en}</div>
        </div>
        <div class="dict-meta">${e.pos} • Group: ${e.group} • Level: ${e.level}</div>
        <div class="dict-example">
          <div class="fr">• ${e.exFr}</div>
          <div class="en">• ${e.exEn}</div>
        </div>
        <div class="dict-tags">${(e.tags||[]).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      `;
    }
    const speakBtn = item.querySelector('.speak-btn');
    if (speakBtn) speakBtn.addEventListener('click', () => speak(e.fr));
    dictList.appendChild(item);
  });

  const totalPages = Math.max(1, Math.ceil(dictFiltered.length / dictPageSize));
  dictPageInfo.textContent = `Page ${dictPage} / ${totalPages} • ${dictFiltered.length} entries`;
  dictPrev.disabled = dictPage <= 1;
  dictNext.disabled = dictPage >= totalPages;
}

// ---------------------
// Seed Lessons from Dictionary (to 100)
// ---------------------
function seedLessonsFromDictionary(targetCount = 100) {
  try {
    const seen = new Set(lessons.map(l => `${(l.english||'').toLowerCase()}|${(l.french||'').toLowerCase()}`));
    const addPair = (en, fr) => {
      if (!en || !fr) return;
      const key = `${en.toLowerCase()}|${fr.toLowerCase()}`;
      if (seen.has(key)) return;
      const hint = `Starts with "${(fr[0]||'').toUpperCase()}"`;
      lessons.push({ english: en, french: fr, hint });
      seen.add(key);
    };

    // 1) Use dictionary entries
    for (const e of dictionary) {
      if (lessons.length >= targetCount) break;
      const enPrimary = (e.en || '').split(';')[0].trim();
      // Capitalize nicely
      const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
      addPair(cap(enPrimary), cap(e.fr));
    }

    // 2) Fallback common phrases (if still below target)
    const fallback = [
      ['Good morning', 'Bonjour'],
      ['Good evening', 'Bonsoir'],
      ['See you soon', 'À bientôt'],
      ['See you later', 'À plus tard'],
      ['Excuse me', 'Excusez-moi'],
      ['I am sorry', 'Je suis désolé'],
      ['My name is', 'Je m’ appelle'],
      ['What is your name?', 'Comment vous appelez-vous ?'],
      ['I don’t understand', 'Je ne comprends pas'],
      ['Do you speak English?', 'Parlez-vous anglais ?'],
      ['I would like', 'Je voudrais'],
      ['How much is it?', 'C’est combien ?'],
      ['Where is the toilet?', 'Où sont les toilettes ?'],
      ['I am learning French', 'J’apprends le français'],
      ['Help!', 'Au secours !'],
      ['Cheers!', 'Santé !'],
      ['Good luck', 'Bonne chance'],
      ['Happy birthday', 'Joyeux anniversaire'],
      ['Welcome', 'Bienvenue'],
      ['See you tomorrow', 'À demain']
    ];
    for (const [en, fr] of fallback) {
      if (lessons.length >= targetCount) break;
      addPair(en, fr);
    }
  } catch (e) {
    console.warn('Seeding lessons failed:', e);
  }
}

// ---- TTS Voice Selection (prefer small French boy-like voice) ----
let preferredVoice = null;
function pickChildFrenchVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;
  const candNames = ['Garçon', 'Enfant', 'Jeune', 'Boy', 'Child'];
  // 1) French + candidate name (boy-like)
  let v = voices.find(v => (v.lang||'').toLowerCase().startsWith('fr') && candNames.some(n => (v.name||'').toLowerCase().includes(n.toLowerCase())));
  // 2) Any French voice
  if (!v) v = voices.find(v => (v.lang||'').toLowerCase().startsWith('fr'));
  // 3) Fallback: any voice with young/boy/child in the name
  if (!v) v = voices.find(v => /(boy|child|kid|young)/i.test(v.name||''));
  preferredVoice = v || null;
  return preferredVoice;
}

if ('speechSynthesis' in window) {
  // Try to pick immediately; also update when voices load
  pickChildFrenchVoice();
  window.speechSynthesis.onvoiceschanged = () => pickChildFrenchVoice();
}

// Simple TTS for pronunciation using the preferred child-like French voice
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  const voice = preferredVoice || pickChildFrenchVoice();
  if (voice) {
    utter.voice = voice;
    // force French for consistency
    utter.lang = 'fr-FR';
  } else {
    utter.lang = 'fr-FR';
  }
  utter.rate = 0.95; // slightly slower for clarity
  utter.pitch = 1.3;  // higher pitch to emulate a small boy
  speechSynthesis.speak(utter);
}

// ---------------------
// Profile Module
// ---------------------
function loadImageIfExists(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function buildAvatarGrid() {
  if (!avatarGridEl) return;
  avatarGridEl.innerHTML = '';
  const candidates = [
    'assets/1.png',
    'assets/2.png',
    'assets/3.png',
    'assets/5.png',
    'assets/6.png',
    'assets/7.png',
    'assets/shinchan.png'
  ];
  const labels = [
    "l'adorable",
    'avec popcorn',
    'trop cool',
    'endormi',
    'affamé',
    'Shinchan français',
    'classique'
  ];
  const existing = (await Promise.all(candidates.map(loadImageIfExists))).filter(Boolean);
  const selected = localStorage.getItem('avatarSrc') || existing[0] || 'assets/1.png';

  existing.forEach((src, i) => {
    const card = document.createElement('div');
    card.className = 'avatar-card' + (src === selected ? ' selected' : '');
    const img = document.createElement('img');
    img.className = 'avatar-thumb';
    img.src = src;
    img.alt = 'Shinchan — ' + (labels[i] || ('#' + (i+1)));
    const label = document.createElement('div');
    label.className = 'avatar-label';
    label.textContent = 'Shinchan: ' + (labels[i] || ('#' + (i+1)));
    card.appendChild(img);
    card.appendChild(label);
    card.addEventListener('click', () => selectAvatar(src, card));
    avatarGridEl.appendChild(card);
  });

  // Ensure current avatar reflects selection
  selectAvatar(selected, null, { persist: false });
}

function selectAvatar(src, card = null, { persist = true } = {}) {
  if (persist) localStorage.setItem('avatarSrc', src);
  if (currentAvatarEl) currentAvatarEl.src = src;
  const mascotImg = document.querySelector('#mascot img');
  if (mascotImg) mascotImg.src = src;
  if (headerAvatarEl) headerAvatarEl.src = src;
  if (avatarGridEl) {
    avatarGridEl.querySelectorAll('.avatar-card').forEach(c => c.classList.remove('selected'));
    if (card) card.classList.add('selected');
  }
  // Persist avatar change
  saveUserState({ avatarSrc: src });
}

function initProfile() {
  if (!currentAvatarEl) return; // profile section may not be present
  // Restore name
  const storedName = localStorage.getItem('profileName') || '';
  if (profileNameEl) {
    profileNameEl.value = storedName;
    profileNameEl.addEventListener('input', () => {
      localStorage.setItem('profileName', profileNameEl.value.trim());
      saveUserState({ profileName: profileNameEl.value.trim() });
      setHomeGreeting(profileNameEl.value.trim());
    });
    // Initial greeting
    setHomeGreeting(storedName);
  }

  // Restore avatar
  const storedAvatar = localStorage.getItem('avatarSrc');
  if (storedAvatar) {
    currentAvatarEl.src = storedAvatar;
    const mascotImg = document.querySelector('#mascot img');
    if (mascotImg) mascotImg.src = storedAvatar;
    if (headerAvatarEl) headerAvatarEl.src = storedAvatar;
  }

  // Build grid
  buildAvatarGrid();

  // Upload handler
  // Custom upload disabled/removed
}

// ---------------------
// Mascot helpers
// ---------------------
const tips = [
  'Astuce: Les articles définis en français sont le, la, les.',
  'Conseil: Écoute la phrase deux fois avant de répondre.',
  'Prononciation: "r" français vient de la gorge – doucement!',
  'Essaie de former une phrase avec le nouveau mot.',
  'Rappelle-toi: "au" se prononce comme "o" long.',
  'Petit défi: trouve 3 objets autour de toi et dis-les en français.'
];

function getRandomTip() { return tips[Math.floor(Math.random() * tips.length)]; }

function showMascotTip(message, timeout = 3000) {
  if (!mascotSpeech) return;
  mascotSpeech.querySelector('.bubble').textContent = message;
  mascotSpeech.classList.remove('hidden');
  clearTimeout(showMascotTip._t);
  showMascotTip._t = setTimeout(() => mascotSpeech.classList.add('hidden'), timeout);
}

function triggerPointsBump() {
  pointsDisplay.classList.remove('bump');
  // reflow
  void pointsDisplay.offsetWidth;
  pointsDisplay.classList.add('bump');
}

// ---------------------
// Confetti
// ---------------------
function launchConfetti(count = 80, duration = 1200) {
  const c = document.createElement('div');
  c.className = 'confetti';
  document.body.appendChild(c);
  const colors = ['#58cc02','#ffd166','#ef476f','#06d6a0','#118ab2','#8338ec'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const hue = colors[i % colors.length];
    p.style.background = hue;
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = (-10 - Math.random()*20) + 'vh';
    p.style.transform = `rotate(${Math.random()*360}deg)`;
    const fall = duration + Math.random()*800;
    p.style.animationDuration = fall + 'ms';
    c.appendChild(p);
  }
  setTimeout(() => c.remove(), duration + 1200);
}

// Seed quiz lessons to 100, then start the app after Firebase/auth
(async () => {
  try {
    seedLessonsFromDictionary(100);
    seedNewsItems(100);
    seedStoriesItems(100);
    seedConversationsItems(100);
    await initFirebaseAndUser();
  } catch (e) {
    console.warn('Bootstrap error:', e);
  } finally {
    init();
  }
})();
