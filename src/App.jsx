import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import { thaiLessons, thaiPhrases } from './data/thaiLessons'

// Fonctions utilitaires pour la sauvegarde de la progression
const saveProgressToLocalStorage = (data) => {
  try {
    localStorage.setItem('thaiLearningProgress', JSON.stringify(data));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de la progression:', error);
  }
};

const loadProgressFromLocalStorage = () => {
  try {
    const savedData = localStorage.getItem('thaiLearningProgress');
    return savedData ? JSON.parse(savedData) : null;
  } catch (error) {
    console.error('Erreur lors du chargement de la progression:', error);
    return null;
  }
};

// Fonction pour récupérer les URL des images
const getImageUrl = (specificImage, type = 'words', keyword = '') => {
  // Si une image spécifique est fournie, l'utiliser
  if (specificImage) return specificImage;
  
  // Utiliser une API d'images libres de droits
  // Ces URLs sont des exemples d'images libres de droits d'Unsplash
  const defaultImages = {
    // Mots courants
    'bonjour': 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=300',
    'au revoir': 'https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?q=80&w=300',
    'merci': 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=300',
    's\'il vous plaît': 'https://images.unsplash.com/photo-1555955208-94f6fafea771?q=80&w=300',
    'oui': 'https://images.unsplash.com/photo-1572250383942-c513d6602f1b?q=80&w=300',
    'non': 'https://images.unsplash.com/photo-1607275121002-8cfad2a07891?q=80&w=300',
    
    // Nourriture
    'riz': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=300',
    'nouille': 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=300',
    'eau': 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=300',
    'bière': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=300',
    'poulet': 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?q=80&w=300',
    'porc': 'https://images.unsplash.com/photo-1602901248692-06c8935adac0?q=80&w=300',
    'poisson': 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=300',
    'légume': 'https://images.unsplash.com/photo-1557844352-761f2565b576?q=80&w=300',
    'fruit': 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=300',
    
    // Nombres
    'un': 'https://images.unsplash.com/photo-1621264326259-c441a2c0458c?q=80&w=300',
    'deux': 'https://images.unsplash.com/photo-1581022295087-35e593693456?q=80&w=300',
    'trois': 'https://images.unsplash.com/photo-1629052510192-0712c8d74a87?q=80&w=300',
    'quatre': 'https://images.unsplash.com/photo-1582035498396-8428e3ee84fb?q=80&w=300',
    'cinq': 'https://images.unsplash.com/photo-1532354058425-c1c9c9343825?q=80&w=300',
    
    // Transport
    'taxi': 'https://images.unsplash.com/photo-1553844055-cfef9e11c5be?q=80&w=300',
    'bus': 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=300',
    'train': 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=300',
    'bateau': 'https://images.unsplash.com/photo-1527425260491-98c6ebc0a40c?q=80&w=300',
    'avion': 'https://images.unsplash.com/photo-1532299033004-d924127c0040?q=80&w=300',
    
    // Temps
    'matin': 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=300',
    'après-midi': 'https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?q=80&w=300',
    'soir': 'https://images.unsplash.com/photo-1472120435266-53107fd0c44a?q=80&w=300',
    'nuit': 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=300',
    'heure': 'https://images.unsplash.com/photo-1508057198894-b80685c8e5f3?q=80&w=300',
    
    // Directions
    'gauche': 'https://images.unsplash.com/photo-1541787457429-b1766a4766b6?q=80&w=300',
    'droite': 'https://images.unsplash.com/photo-1490157598888-f84fd2026ebf?q=80&w=300',
    'avant': 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?q=80&w=300',
    'arrière': 'https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=300',
    
    // Lieux
    'hôtel': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=300',
    'restaurant': 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=300',
    'marché': 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=300',
    'plage': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300',
    'temple': 'https://images.unsplash.com/photo-1599825986654-5e--ZT9a1Sg?q=80&w=300',
    
    // Corps
    'tête': 'https://images.unsplash.com/photo-1541710430735-5fca14c95b00?q=80&w=300',
    'main': 'https://images.unsplash.com/photo-1579169825453-8d6507cb78a8?q=80&w=300',
    'pied': 'https://images.unsplash.com/photo-1595452767427-0905ad9b036d?q=80&w=300',
    'yeux': 'https://images.unsplash.com/photo-1586009287138-9fd087a50e22?q=80&w=300',
    
    // Images par défaut pour les catégories
    'words': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=300',
    'phrases': 'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?q=80&w=300',
    'salutations': 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=300',
    'nourriture': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=300',
    'voyage': 'https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?q=80&w=300',
    'temps': 'https://images.unsplash.com/photo-1501139083538-0139c4722333?q=80&w=300',
    'nombres': 'https://images.unsplash.com/photo-1577962146048-0f472495d057?q=80&w=300',
    'directions': 'https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?q=80&w=300'
  };
  
  // Rechercher une image spécifique pour le mot (en français)
  const searchTerm = keyword.toLowerCase() || (type === 'words' ? 'words' : 'phrases');
  
  // Si nous avons une image prédéfinie pour ce mot
  if (defaultImages[searchTerm]) {
    return defaultImages[searchTerm];
  }
  
  // Images par défaut par type
  const defaultImage = type === 'phrases' 
    ? defaultImages['phrases'] 
    : defaultImages['words'];
  
  return defaultImage;
};

function App() {
  const [currentTheme, setCurrentTheme] = useState('light')
  const [currentView, setCurrentView] = useState('home')
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [activeTab, setActiveTab] = useState('words') // Nouvel état pour gérer les onglets

  // État pour le nouvel exercice de mémorisation
  const [memoryExercise, setMemoryExercise] = useState({
    words: [],
    currentWordIndex: 0,
    userInput: '',
    targetWord: {},
    showHint: false,
    errors: 0,
    completed: false,
    keyboardHighlight: null,
    currentKeyIndex: 0
  });

  // Mettre à jour le clavier thaï avec les bonnes correspondances AZERTY
  const thaiKeyboard = {
    row1: [
      { thai: 'ๅ', latin: '&', shift: false }, { thai: '/', latin: 'é', shift: false }, { thai: '_', latin: '"', shift: false }, 
      { thai: 'ภ', latin: '\'', shift: false }, { thai: 'ถ', latin: '(', shift: false }, { thai: 'ุ', latin: '-', shift: false }, 
      { thai: 'ึ', latin: 'è', shift: false }, { thai: 'ค', latin: '_', shift: false }, { thai: 'ต', latin: 'ç', shift: false }, 
      { thai: 'จ', latin: 'à', shift: false }, { thai: 'ข', latin: ')', shift: false }, { thai: 'ช', latin: '=', shift: false }
    ],
    row2: [
      { thai: 'ๆ', latin: 'a', shift: false }, { thai: 'ไ', latin: 'z', shift: false }, { thai: 'ำ', latin: 'e', shift: false }, 
      { thai: 'พ', latin: 'r', shift: false }, { thai: 'ะ', latin: 't', shift: false }, { thai: 'ั', latin: 'y', shift: false }, 
      { thai: 'ี', latin: 'u', shift: false }, { thai: 'ร', latin: 'i', shift: false }, { thai: 'น', latin: 'o', shift: false }, 
      { thai: 'ย', latin: 'p', shift: false }, { thai: 'บ', latin: '^', shift: false }, { thai: 'ล', latin: '$', shift: false }
    ],
    row3: [
      { thai: 'ฟ', latin: 'q', shift: false }, { thai: 'ห', latin: 's', shift: false }, { thai: 'ก', latin: 'd', shift: false }, 
      { thai: 'ด', latin: 'f', shift: false }, { thai: 'เ', latin: 'g', shift: false }, { thai: '้', latin: 'h', shift: false }, 
      { thai: '่', latin: 'j', shift: false }, { thai: 'า', latin: 'k', shift: false }, { thai: 'ส', latin: 'l', shift: false }, 
      { thai: 'ว', latin: 'm', shift: false }, { thai: 'ง', latin: 'ù', shift: false }, { thai: 'ฃ', latin: '*', shift: true }
    ],
    row4: [
      { thai: 'ผ', latin: 'w', shift: false }, { thai: 'ป', latin: 'x', shift: false }, { thai: 'แ', latin: 'c', shift: false }, 
      { thai: 'อ', latin: 'v', shift: false }, { thai: 'ิ', latin: 'b', shift: false }, { thai: 'ื', latin: 'n', shift: false }, 
      { thai: 'ท', latin: ',', shift: false }, { thai: 'ม', latin: ';', shift: false }, { thai: 'ใ', latin: ':', shift: true }, 
      { thai: 'ฝ', latin: '!', shift: true }, { thai: 'ฦ', latin: '§', shift: false }
    ],
    shiftRow1: [
      { thai: '+', latin: '1', shift: true }, { thai: '๑', latin: '2', shift: true }, { thai: '๒', latin: '3', shift: true }, 
      { thai: '๓', latin: '4', shift: true }, { thai: '๔', latin: '5', shift: true }, { thai: 'ู', latin: '6', shift: true }, 
      { thai: '฿', latin: '7', shift: true }, { thai: '๕', latin: '8', shift: true }, { thai: '๖', latin: '9', shift: true }, 
      { thai: '๗', latin: '0', shift: true }, { thai: '๘', latin: '°', shift: true }, { thai: '๙', latin: '+', shift: true }
    ],
    shiftRow2: [
      { thai: '๐', latin: 'A', shift: true }, { thai: '"', latin: 'Z', shift: true }, { thai: 'ฎ', latin: 'E', shift: true }, 
      { thai: 'ฑ', latin: 'R', shift: true }, { thai: 'ธ', latin: 'T', shift: true }, { thai: 'ํ', latin: 'Y', shift: true }, 
      { thai: '๊', latin: 'U', shift: true }, { thai: 'ณ', latin: 'I', shift: true }, { thai: 'ฯ', latin: 'O', shift: true }, 
      { thai: 'ญ', latin: 'P', shift: true }, { thai: 'ฐ', latin: '¨', shift: true }, { thai: ',', latin: '£', shift: true }
    ],
    shiftRow3: [
      { thai: 'ฤ', latin: 'Q', shift: true }, { thai: 'ฆ', latin: 'S', shift: true }, { thai: 'ฏ', latin: 'D', shift: true }, 
      { thai: 'โ', latin: 'F', shift: true }, { thai: 'ฌ', latin: 'G', shift: true }, { thai: '็', latin: 'H', shift: true }, 
      { thai: '๋', latin: 'J', shift: true }, { thai: 'ษ', latin: 'K', shift: true }, { thai: 'ศ', latin: 'L', shift: true }, 
      { thai: 'ซ', latin: 'M', shift: true }, { thai: '.', latin: '%', shift: true }, { thai: 'ฅ', latin: 'µ', shift: true }
    ],
    shiftRow4: [
      { thai: '(', latin: 'W', shift: true }, { thai: ')', latin: 'X', shift: true }, { thai: 'ฉ', latin: 'C', shift: true }, 
      { thai: 'ฮ', latin: 'V', shift: true }, { thai: 'ฺ', latin: 'B', shift: true }, { thai: '์', latin: 'N', shift: true }, 
      { thai: '?', latin: '?', shift: true }, { thai: 'ฒ', latin: '.', shift: true }, { thai: 'ฬ', latin: '/', shift: true }, 
      { thai: 'ฝ', latin: '§', shift: true }, { thai: 'ฦ', latin: '§', shift: true }
    ],
    space: { thai: ' ', latin: 'espace', shift: false }
  };

  const [completedLessons, setCompletedLessons] = useState(loadProgressFromLocalStorage()?.completedLessons || [])
  const [lessonStats, setLessonStats] = useState(loadProgressFromLocalStorage()?.lessonStats || {})
  const [isShiftPressed, setIsShiftPressed] = useState(false)

  const [flashcardMode, setFlashcardMode] = useState('thai') // 'thai', 'phonetic' ou 'french'
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [typingExercise, setTypingExercise] = useState({
    currentWord: {},
    userInput: '',
    currentIndex: 0,
    currentKeyIndex: 0,
    targetKeys: [],
    keyboardHighlight: null,
    wordCompleted: false,
    isCorrect: true,
    errorMessage: '',
    exerciseWords: []
  });

  const inputRef = useRef(null);

  useEffect(() => {
    saveProgressToLocalStorage({
      completedLessons,
      lessonStats
    });
  }, [completedLessons, lessonStats]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'retro' : 'light')
    document.documentElement.setAttribute('data-theme', currentTheme === 'light' ? 'retro' : 'light')
  }

  const startLesson = (lesson) => {
    setSelectedLesson(lesson)
    setCurrentCardIndex(0)
    setShowAnswer(false)
    setCurrentView('lesson')
  }

  const nextCard = () => {
    if (selectedLesson && currentCardIndex < selectedLesson.words.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setShowAnswer(false)
    } else {
      // Fin de la leçon
      if (!completedLessons.includes(selectedLesson.id)) {
        const updatedLessons = [...completedLessons, selectedLesson.id];
        setCompletedLessons(updatedLessons);

        // Mettre à jour les statistiques
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0]; // Format YYYY-MM-DD

        setLessonStats(prevStats => {
          const lessonId = selectedLesson.id.toString();
          const prevLessonStats = prevStats[lessonId] || { completions: 0, lastCompleted: null, dates: [] };

          return {
            ...prevStats,
            [lessonId]: {
              ...prevLessonStats,
              completions: prevLessonStats.completions + 1,
              lastCompleted: dateStr,
              dates: [...(prevLessonStats.dates || []), dateStr]
            }
          };
        });
      }
      setCurrentView('congratulations')
    }
  }

  const changeFlashcardMode = (mode) => {
    setFlashcardMode(mode)
    setShowAnswer(false)
  }

  const initTypingExercise = () => {
    if (!selectedLesson || selectedLesson.words.length === 0) return;

    const randomIndex = Math.floor(Math.random() * selectedLesson.words.length);
    const word = selectedLesson.words[randomIndex];
    const targetKeys = word.thai.split('');

    setTypingExercise({
      currentWord: word,
      userInput: '',
      currentIndex: 0,
      currentKeyIndex: 0,
      targetKeys: targetKeys,
      keyboardHighlight: findKeyOnKeyboard(targetKeys[0]),
      wordCompleted: false,
      isCorrect: true,
      errorMessage: '',
      exerciseWords: selectedLesson.words
    });
  };

  const findKeyOnKeyboard = (thaiChar) => {
    for (const rowName of ['row1', 'row2', 'row3', 'row4']) {
      if (Array.isArray(thaiKeyboard[rowName])) {
        const keyIndex = thaiKeyboard[rowName].findIndex(key => key.thai === thaiChar);
        if (keyIndex !== -1) {
          return { row: rowName, index: keyIndex, shift: false };
        }
      }
    }

    for (const rowName of ['shiftRow1', 'shiftRow2', 'shiftRow3', 'shiftRow4']) {
      if (Array.isArray(thaiKeyboard[rowName])) {
        const keyIndex = thaiKeyboard[rowName].findIndex(key => key.thai === thaiChar);
        if (keyIndex !== -1) {
          return { row: rowName, index: keyIndex, shift: true };
        }
      }
    }

    if (thaiChar === ' ') {
      return { row: 'space', index: 0, shift: false };
    }

    return null;
  };

  const handleTyping = (e) => {
    if (typingExercise.wordCompleted) {
      // Si le mot est déjà complété et que l'utilisateur appuie sur Tab, Entrée ou Espace
      if (e.key === 'Tab' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Empêcher le comportement par défaut (important pour Tab)
        getNextWord();
        return;
      }
      return;
    }

    // Gérer l'appui ou le relâchement de la touche MAJ
    if (e.key === 'Shift') {
      setIsShiftPressed(e.type === 'keydown');
      return;
    }

    const { targetKeys, currentKeyIndex } = typingExercise;
    const pressedKey = e.key;
    const pressedCode = e.code;
    const targetChar = targetKeys[currentKeyIndex];
    const highlight = typingExercise.keyboardHighlight;

    // Pour le débogage
    console.log('Touche pressée:', e.key, 'Code:', e.code, 'Shift:', e.shiftKey);

    let keyMatches = false;

    if (highlight) {
      const rowName = highlight.row;
      const keyIndex = highlight.index;
      const requiresShift = highlight.shift;

      if (rowName === 'space') {
        keyMatches = pressedKey === ' ';
      } else {
        const keyObj = thaiKeyboard[rowName][keyIndex];

        // Cas spéciaux pour différentes touches
        if (keyObj.latin === ')' && pressedKey === ')') {
          keyMatches = true;
        }
        else if (keyObj.latin === '^' && (e.code === 'BracketLeft' || pressedKey === '^')) {
          keyMatches = true;
        }
        else if (keyObj.latin === '$' && pressedKey === '$') {
          keyMatches = true;
        }
        else if (keyObj.latin === '*' && pressedKey === '*' && e.shiftKey) {
          keyMatches = true;
        }
        else if (keyObj.latin === ':' && pressedKey === ':' && e.shiftKey) {
          keyMatches = true;
        }
        else if (keyObj.latin === '!' && pressedKey === '!' && e.shiftKey) {
          keyMatches = true;
        }
        // Gestion normale pour les touches avec/sans Shift
        else if (requiresShift) {
          keyMatches = pressedKey.toLowerCase() === keyObj.latin.toLowerCase() && e.shiftKey;

          if (pressedKey.toLowerCase() === keyObj.latin.toLowerCase() && !e.shiftKey) {
            setTypingExercise({
              ...typingExercise,
              isCorrect: false,
              errorMessage: 'Appuyez sur MAJ (Shift) + ' + keyObj.latin
            });
            return;
          }
        }
        else {
          keyMatches = pressedKey.toLowerCase() === keyObj.latin.toLowerCase() && !e.shiftKey;

          if (pressedKey.toLowerCase() === keyObj.latin.toLowerCase() && e.shiftKey) {
            setTypingExercise({
              ...typingExercise,
              isCorrect: false,
              errorMessage: 'Relâchez la touche MAJ (Shift)'
            });
            return;
          }
        }
      }
    }

    if (keyMatches) {
      const newInput = typingExercise.userInput + targetChar;
      const newKeyIndex = currentKeyIndex + 1;
      const isCompleted = newKeyIndex >= targetKeys.length;

      setTypingExercise({
        ...typingExercise,
        userInput: newInput,
        currentKeyIndex: newKeyIndex,
        keyboardHighlight: isCompleted ? null : findKeyOnKeyboard(targetKeys[newKeyIndex]),
        wordCompleted: isCompleted,
        isCorrect: true,
        errorMessage: ''
      });

    } else if (!typingExercise.errorMessage) {
      setTypingExercise({
        ...typingExercise,
        isCorrect: false,
        errorMessage: 'Touche incorrecte, réessayez'
      });

      setTimeout(() => {
        setTypingExercise(prev => ({
          ...prev,
          isCorrect: true,
          errorMessage: ''
        }));
      }, 1500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Shift') {
      setIsShiftPressed(true);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Shift') {
      setIsShiftPressed(false);
    }
  };

  useEffect(() => {
    if (currentView === 'typingExercise') {
      initTypingExercise();
    } else if (currentView === 'memoryExercise') {
      initMemoryExercise();
    }
  }, [currentView, selectedLesson]);

  useEffect(() => {
    if ((currentView === 'typingExercise' || currentView === 'memoryExercise') && inputRef.current) {
      inputRef.current.focus();

      // Ajouter des écouteurs d'événements pour les touches MAJ
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      // Nettoyer les écouteurs lors du démontage
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [currentView, typingExercise, memoryExercise]);

  const startTypingExercise = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentView('typingExercise');
  };

  const completeTypingExercise = () => {
    if (!selectedLesson) return;

    // Mettre à jour les statistiques
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0]; // Format YYYY-MM-DD

    setLessonStats(prevStats => {
      const lessonId = selectedLesson.id.toString();
      const prevLessonStats = prevStats[lessonId] || {
        completions: 0,
        lastCompleted: null,
        dates: [],
        typing: { attempts: 0, successes: 0 }
      };

      const typing = prevLessonStats.typing || { attempts: 0, successes: 0 };

      return {
        ...prevStats,
        [lessonId]: {
          ...prevLessonStats,
          typing: {
            attempts: typing.attempts + 1,
            successes: typing.successes + 1
          },
          lastCompleted: dateStr,
          dates: [...(prevLessonStats.dates || []), dateStr]
        }
      };
    });

    // Si la leçon n'est pas encore marquée comme terminée, la marquer maintenant
    if (!completedLessons.includes(selectedLesson.id)) {
      setCompletedLessons([...completedLessons, selectedLesson.id]);
    }
  };

  const getNextWord = () => {
    completeTypingExercise();
    initTypingExercise();
  };

  const calculateGlobalStats = () => {
    // Statistiques pour les mots
    const totalLessons = thaiLessons.length;
    const completedLessonIds = completedLessons.filter(id => {
      const lesson = thaiLessons.find(l => l.id === id);
      return lesson !== undefined;
    });
    const completedCount = completedLessonIds.length;
    const completionPercentage = Math.round((completedCount / totalLessons) * 100) || 0;

    let totalWords = 0;
    thaiLessons.forEach(lesson => {
      totalWords += lesson.words.length;
    });

    let learnedWords = 0;
    completedLessonIds.forEach(lessonId => {
      const lesson = thaiLessons.find(l => l.id === lessonId);
      if (lesson) {
        learnedWords += lesson.words.length;
      }
    });

    const wordsPercentage = Math.round((learnedWords / totalWords) * 100) || 0;

    // Statistiques pour les phrases
    const totalPhraseCategories = thaiPhrases.length;
    const completedPhraseCategoryIds = completedLessons.filter(id => {
      const category = thaiPhrases.find(c => c.id === id);
      return category !== undefined;
    });
    const completedPhraseCount = completedPhraseCategoryIds.length;
    const phraseCompletionPercentage = Math.round((completedPhraseCount / totalPhraseCategories) * 100) || 0;

    let totalPhrases = 0;
    thaiPhrases.forEach(category => {
      totalPhrases += category.words.length;
    });

    let learnedPhrases = 0;
    completedPhraseCategoryIds.forEach(categoryId => {
      const category = thaiPhrases.find(c => c.id === categoryId);
      if (category) {
        learnedPhrases += category.words.length;
      }
    });

    const phrasesPercentage = Math.round((learnedPhrases / totalPhrases) * 100) || 0;

    // Statistiques des exercices
    let typingExercises = 0;
    let memoryExercises = 0;
    let flashcardExercises = 0;

    Object.values(lessonStats).forEach(stat => {
      if (stat.typing) {
        typingExercises += stat.typing.successes || 0;
      }
      if (stat.memory) {
        memoryExercises += stat.memory.successes || 0;
      }
      // Les exercices de flashcards sont comptés comme les complétion sans exercices spécifiques
      const exercisesTotal = (stat.typing?.successes || 0) + (stat.memory?.successes || 0);
      flashcardExercises += Math.max(0, (stat.completions || 0) - exercisesTotal);
    });

    // Activité et séquence
    let lastActivity = null;
    Object.values(lessonStats).forEach(stat => {
      if (stat.lastCompleted && (!lastActivity || stat.lastCompleted > lastActivity)) {
        lastActivity = stat.lastCompleted;
      }
    });

    let streak = 0;
    if (Object.values(lessonStats).length > 0) {
      const allDates = new Set();
      Object.values(lessonStats).forEach(stat => {
        if (stat.dates && Array.isArray(stat.dates)) {
          stat.dates.forEach(date => allDates.add(date));
        }
      });

      const sortedDates = Array.from(allDates).sort().reverse();

      if (sortedDates.length > 0) {
        const today = new Date().toISOString().split('T')[0];
        let currentStreak = 0;
        let currentDate = today;

        while (allDates.has(currentDate)) {
          currentStreak++;
          const prevDate = new Date(new Date(currentDate).getTime() - 86400000);
          currentDate = prevDate.toISOString().split('T')[0];
        }

        streak = currentStreak;
      }
    }

    return {
      // Stats mots
      totalLessons,
      completedCount,
      completionPercentage,
      totalWords,
      learnedWords,
      wordsPercentage,
      // Stats phrases
      totalPhraseCategories,
      completedPhraseCount,
      phraseCompletionPercentage,
      totalPhrases,
      learnedPhrases,
      phrasesPercentage,
      // Stats exercices
      typingExercises,
      memoryExercises,
      flashcardExercises,
      totalExercises: typingExercises + memoryExercises + flashcardExercises,
      // Stats activité
      lastActivity,
      streak
    };
  };

  // Initialiser l'exercice de mémorisation avec les mots de la leçon sélectionnée
  const initMemoryExercise = () => {
    if (!selectedLesson || selectedLesson.words.length === 0) return;
    
    const words = [...selectedLesson.words]; // Copie des mots de la leçon
    const targetWord = words[0]; // Premier mot
    
    setMemoryExercise({
      words: words,
      currentWordIndex: 0,
      userInput: '',
      targetWord: targetWord,
      showHint: false,
      errors: 0,
      completed: false,
      keyboardHighlight: null,
      currentKeyIndex: 0
    });
  };

  // Gérer la saisie utilisateur dans l'exercice de mémorisation
  const handleMemoryInput = (e) => {
    if (memoryExercise.completed) {
      if (e.key === 'Tab' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        nextMemoryWord();
        return;
      }
      return;
    }

    // Gérer la touche Maj
    if (e.key === 'Shift') {
      setIsShiftPressed(e.type === 'keydown');
      return;
    }
    
    const { targetWord, userInput, currentKeyIndex } = memoryExercise;
    const targetKeys = targetWord.thai.split('');
    const currentChar = targetKeys[currentKeyIndex];
    
    // Vérifier si la touche pressée correspond au caractère attendu
    const pressedKey = e.key;
    let isCorrect = false;
    
    // Chercher la correspondance dans le clavier thaï
    for (const rowName of Object.keys(thaiKeyboard)) {
      if (!Array.isArray(thaiKeyboard[rowName])) continue;
      
      const keyIndex = thaiKeyboard[rowName].findIndex(key => {
        const isShiftRequired = rowName.includes('shift');
        return key.thai === currentChar && 
               ((isShiftRequired && e.shiftKey && key.latin.toLowerCase() === pressedKey.toLowerCase()) ||
                (!isShiftRequired && !e.shiftKey && key.latin === pressedKey));
      });
      
      if (keyIndex !== -1) {
        isCorrect = true;
        break;
      }
    }
    
    // Si c'est un espace
    if (currentChar === ' ' && pressedKey === ' ') {
      isCorrect = true;
    }
    
    if (isCorrect) {
      // Ajouter le caractère à l'entrée utilisateur
      const newInput = userInput + currentChar;
      const newKeyIndex = currentKeyIndex + 1;
      const isWordCompleted = newKeyIndex >= targetKeys.length;
      
      setMemoryExercise({
        ...memoryExercise,
        userInput: newInput,
        currentKeyIndex: newKeyIndex,
        keyboardHighlight: null, // Ne pas afficher d'indice par défaut
        completed: isWordCompleted
      });
      
      if (isWordCompleted) {
        setTimeout(nextMemoryWord, 1000); // Passer au mot suivant après 1 seconde
      }
    } else {
      // Afficher l'indice en cas d'erreur
      const highlight = findKeyOnKeyboard(currentChar);
      
      setMemoryExercise({
        ...memoryExercise,
        errors: memoryExercise.errors + 1,
        showHint: true,
        keyboardHighlight: highlight
      });
      
      // Cacher l'indice après 2 secondes
      setTimeout(() => {
        setMemoryExercise(prev => ({
          ...prev,
          showHint: false,
          keyboardHighlight: null
        }));
      }, 2000);
    }
  };
  
  // Passer au mot suivant dans l'exercice
  const nextMemoryWord = () => {
    const { currentWordIndex, words } = memoryExercise;
    const nextIndex = currentWordIndex + 1;
    
    // Vérifier si c'est le dernier mot
    if (nextIndex >= words.length) {
      completeMemoryExercise();
      return;
    }
    
    // Passer au mot suivant
    setMemoryExercise({
      ...memoryExercise,
      currentWordIndex: nextIndex,
      userInput: '',
      targetWord: words[nextIndex],
      showHint: false,
      currentKeyIndex: 0,
      completed: false,
      keyboardHighlight: null
    });
  };
  
  // Terminer l'exercice de mémorisation
  const completeMemoryExercise = () => {
    // Mettre à jour les statistiques
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    
    setLessonStats(prevStats => {
      const lessonId = selectedLesson.id.toString();
      const prevLessonStats = prevStats[lessonId] || {
        completions: 0,
        lastCompleted: null,
        dates: [],
        memory: { attempts: 0, successes: 0, totalErrors: 0 }
      };
      
      const memory = prevLessonStats.memory || { attempts: 0, successes: 0, totalErrors: 0 };
      
      return {
        ...prevStats,
        [lessonId]: {
          ...prevLessonStats,
          memory: {
            attempts: memory.attempts + 1,
            successes: memory.successes + 1,
            totalErrors: memory.totalErrors + memoryExercise.errors
          },
          lastCompleted: dateStr,
          dates: [...(prevLessonStats.dates || []), dateStr]
        }
      };
    });
    
    // Marquer la leçon comme terminée si ce n'est pas déjà le cas
    if (!completedLessons.includes(selectedLesson.id)) {
      setCompletedLessons([...completedLessons, selectedLesson.id]);
    }
    
    // Rediriger vers l'écran de félicitations
    setCurrentView('congratulations');
  };
  
  // Démarrer l'exercice de mémorisation
  const startMemoryExercise = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentView('memoryExercise');
  };

  const renderHome = () => (
    <div className="container mx-auto p-4">
      {/* Bannière d'accueil améliorée */}
      <div className="hero-banner mb-8">
        <div className="hero-content text-center text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Apprendre le Thaï</h1>
            <p className="text-xl mb-6">
              Explorez la beauté de la langue thaïlandaise à travers une approche interactive et immersive.
              Notre méthode combine apprentissage visuel, mémorisation active et exercices de prononciation
              pour vous aider à progresser rapidement dans votre voyage linguistique.
            </p>
            <div className="badge badge-primary text-sm font-medium py-3 px-4 mr-2">+{thaiLessons.length + thaiPhrases.length} catégories</div>
            <div className="badge badge-accent text-sm font-medium py-3 px-4">+{(() => {
              let count = 0;
              thaiLessons.forEach(lesson => count += lesson.words.length);
              thaiPhrases.forEach(category => count += category.words.length);
              return count;
            })()} expressions</div>
          </div>
        </div>
      </div>

      {/* Caractéristiques principales */}
      <div className="features-container mb-8">
        <div className="feature-card">
          <span className="feature-icon">🎯</span>
          <h3 className="text-xl font-bold mb-2">Apprentissage ciblé</h3>
          <p>Des leçons conçues autour des situations quotidiennes pour une utilisation immédiate.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔄</span>
          <h3 className="text-xl font-bold mb-2">Méthode interactive</h3>
          <p>Flashcards, exercices de saisie et de mémorisation pour renforcer vos compétences.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📊</span>
          <h3 className="text-xl font-bold mb-2">Suivi de progression</h3>
          <p>Visualisez votre progression et maintenez votre motivation avec des statistiques détaillées.</p>
        </div>
      </div>

      {/* Onglets améliorés */}
      <div className="tabs-container mb-6">
        <div className="tabs tabs-boxed p-1 bg-base-200">
          <button
            className={`tab grow ${activeTab === 'words' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('words')}
          >
            <span className="mr-2">📚</span> Mots
          </button>
          <button
            className={`tab grow ${activeTab === 'phrases' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('phrases')}
          >
            <span className="mr-2">💬</span> Phrases
          </button>
        </div>
      </div>

      {activeTab === 'words' && (
        <>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-primary mr-2">📚</span> Choisissez une catégorie de vocabulaire
          </h2>
          <div className="category-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {thaiLessons.map(lesson => {
              // Construire la classe CSS sans espace ni accents
              const categoryName = lesson.title.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Supprimer les accents
                .replace(/[^a-z0-9]/g, ""); // Supprimer les espaces et caractères spéciaux
              
              const categoryImageClass = `category-image-${categoryName}`;
              
              return (
                <div key={lesson.id} className="category-card card shadow-xl">
                  <div className={`category-image ${categoryImageClass}`}></div>
                  <div className="category-icon">{lesson.icon}</div>
                  <div className="card-body">
                    <h2 className="card-title">
                      {lesson.title}
                      {completedLessons.includes(lesson.id) && (
                        <div className="badge badge-success">Terminé</div>
                      )}
                    </h2>
                    <p className="text-sm mb-2">{lesson.description}</p>
                    <p className="text-xs badge badge-outline">{lesson.words.length} mots à apprendre</p>
                    
                    <div className="card-actions flex flex-row flex-wrap gap-2 mt-4">
                      <button onClick={() => startLesson(lesson)} className="btn btn-sm btn-primary flex-1 text-base">
                        <span className="mr-1">🎴</span> Flashcards
                      </button>
                      <button onClick={() => startTypingExercise(lesson)} className="btn btn-sm btn-outline btn-primary flex-1 text-base">
                        <span className="mr-1">⌨️</span> Saisie
                      </button>
                      <button onClick={() => startMemoryExercise(lesson)} className="btn btn-sm btn-outline btn-secondary flex-1 text-base">
                        <span className="mr-1">🧠</span> Mémo
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {activeTab === 'phrases' && (
        <>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-primary mr-2">💬</span> Choisissez une catégorie de phrases
          </h2>
          <div className="category-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {thaiPhrases.map(category => {
              // Construire la classe CSS sans espace ni accents
              const categoryName = category.title.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Supprimer les accents
                .replace(/[^a-z0-9]/g, ""); // Supprimer les espaces et caractères spéciaux
              
              const categoryImageClass = `category-image-${categoryName}`;
              
              return (
                <div key={category.id} className="category-card card shadow-xl">
                  <div className={`category-image ${categoryImageClass}`}></div>
                  <div className="category-icon">{category.icon}</div>
                  <div className="card-body">
                    <h2 className="card-title">
                      {category.title}
                      {completedLessons.includes(category.id) && (
                        <div className="badge badge-success">Terminé</div>
                      )}
                    </h2>
                    <p className="text-sm mb-2">{category.description}</p>
                    <p className="text-xs badge badge-outline">{category.words.length} phrases à apprendre</p>
                    
                    <div className="card-actions flex flex-row flex-wrap gap-2 mt-4">
                      <button onClick={() => startLesson(category)} className="btn btn-sm btn-primary flex-1 text-base">
                        <span className="mr-1">🎴</span> Flashcards
                      </button>
                      <button onClick={() => startTypingExercise(category)} className="btn btn-sm btn-outline btn-primary flex-1 text-base">
                        <span className="mr-1">⌨️</span> Saisie
                      </button>
                      <button onClick={() => startMemoryExercise(category)} className="btn btn-sm btn-outline btn-secondary flex-1 text-base">
                        <span className="mr-1">🧠</span> Mémo
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  )

  const renderLesson = () => {
    if (!selectedLesson) return null

    const currentWord = selectedLesson.words[currentCardIndex]
    const progress = ((currentCardIndex + 1) / selectedLesson.words.length) * 100
    
    // Déterminer le type d'image à charger (mots ou phrases)
    const imageType = thaiPhrases.some(category => category.id === selectedLesson.id) ? 'phrases' : 'words'
    
    // Récupérer l'URL de l'image
    const imageUrl = getImageUrl(currentWord.image, imageType, currentWord.french)

    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <button className="btn btn-ghost" onClick={() => setCurrentView('home')}>
            ← Retour
          </button>
          <h2 className="text-2xl font-bold">{selectedLesson.title}</h2>
          <div className="space-x-2">
            <span className="badge badge-outline">{currentCardIndex + 1}/{selectedLesson.words.length}</span>
          </div>
        </div>

        <progress className="progress progress-primary w-full mb-6" value={progress} max="100"></progress>

        <div className="flex justify-center mb-6">
          <div className="btn-group">
            <button
              className={`btn ${flashcardMode === 'thai' ? 'btn-active' : ''}`}
              onClick={() => changeFlashcardMode('thai')}
            >
              Thaï
            </button>
            <button
              className={`btn ${flashcardMode === 'phonetic' ? 'btn-active' : ''}`}
              onClick={() => changeFlashcardMode('phonetic')}
            >
              Phonétique
            </button>
            <button
              className={`btn ${flashcardMode === 'french' ? 'btn-active' : ''}`}
              onClick={() => changeFlashcardMode('french')}
            >
              Français
            </button>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl mb-6 cursor-pointer overflow-hidden" onClick={() => setShowAnswer(!showAnswer)}>
          <figure className="lg:w-1/2 min-h-64 relative overflow-hidden">
            <img 
              src={imageUrl} 
              alt={currentWord.french}
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = imageType === 'phrases' 
                  ? '../assets/phrases/default.txt' 
                  : '../assets/words/default.txt';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-300/70 to-transparent flex items-end justify-center pb-4">
              <div className="badge badge-lg">{selectedLesson.icon}</div>
            </div>
          </figure>
          
          <div className="card-body lg:w-1/2 flex flex-col justify-center items-center">
            <div className="text-center w-full">
              {flashcardMode === 'thai' ? (
                <>
                  <div className="text-4xl mb-4 animate__animated animate__fadeIn">{currentWord.thai}</div>
                  {showAnswer && (
                    <div className="animate__animated animate__fadeIn">
                      <div className="text-xl opacity-80 mb-2">{currentWord.phonetic}</div>
                      <div className="text-xl mt-2 font-bold">{currentWord.french}</div>
                    </div>
                  )}
                </>
              ) : flashcardMode === 'phonetic' ? (
                <>
                  <div className="text-4xl mb-4 animate__animated animate__fadeIn">{currentWord.phonetic}</div>
                  {showAnswer && (
                    <div className="animate__animated animate__fadeIn">
                      <div className="text-xl opacity-80 mb-2">{currentWord.thai}</div>
                      <div className="text-xl mt-2 font-bold">{currentWord.french}</div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="text-4xl mb-4 animate__animated animate__fadeIn">{currentWord.french}</div>
                  {showAnswer && (
                    <div className="animate__animated animate__fadeIn">
                      <div className="text-xl opacity-80 mb-2">{currentWord.thai}</div>
                      <div className="text-xl mt-2">{currentWord.phonetic}</div>
                    </div>
                  )}
                </>
              )}

              {!showAnswer && (
                <div className="text-sm opacity-50 mt-4 animate-pulse">Cliquer pour révéler</div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            className="btn btn-outline"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? "Masquer" : "Révéler"}
          </button>
          <button
            className="btn btn-primary"
            onClick={nextCard}
          >
            {currentCardIndex < selectedLesson.words.length - 1 ? "Suivant" : "Terminer"}
          </button>
        </div>
      </div>
    )
  }

  const renderCongratulations = () => (
    <div className="container mx-auto p-4 text-center">
      <div className="hero bg-base-200 rounded-xl p-6">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">🎉 Félicitations !</h1>
            <p className="text-lg mb-6">Vous avez terminé la leçon "{selectedLesson?.title}"</p>
            <div className="space-y-4">
              <button
                className="btn btn-primary w-full"
                onClick={() => setCurrentView('home')}
              >
                Retour à l'accueil
              </button>
              <button
                className="btn btn-outline w-full"
                onClick={() => {
                  setCurrentCardIndex(0)
                  setShowAnswer(false)
                  setCurrentView('lesson')
                }}
              >
                Réviser cette leçon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTypingExercise = () => {
    if (!selectedLesson || !typingExercise.currentWord) return null;

    const { currentWord, userInput, targetKeys, currentKeyIndex, keyboardHighlight, wordCompleted, isCorrect, errorMessage } = typingExercise;
    const progress = targetKeys.length > 0 ? (currentKeyIndex / targetKeys.length) * 100 : 0;
    
    // Déterminer le type d'image (mots ou phrases)
    const imageType = thaiPhrases.some(category => category.id === selectedLesson.id) ? 'phrases' : 'words';
    
    // Récupérer l'URL de l'image pour le mot actuel
    const imageUrl = getImageUrl(currentWord.image, imageType, currentWord.french);

    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <button className="btn btn-ghost" onClick={() => setCurrentView('home')}>
            ← Retour
          </button>
          <h2 className="text-2xl font-bold">Exercice de saisie - {selectedLesson.title}</h2>
          <div></div>
        </div>

        <progress className="progress progress-primary w-full mb-6" value={progress} max="100"></progress>

        <div className="card bg-base-100 shadow-xl mb-8 p-6">
          <div className="card-body text-center">
            <div className="text-lg mb-2">Écrivez ce mot :</div>
            
            {/* Image du mot */}
            <div className="flex justify-center mb-6">
              <img 
                src={imageUrl} 
                alt={currentWord.french} 
                className="rounded-lg shadow-md max-h-52 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = imageType === 'phrases' 
                    ? '../assets/phrases/default.txt' 
                    : '../assets/words/default.txt';
                }}
              />
            </div>

            <div className="flex justify-center gap-4 mb-4">
              <div className="badge badge-lg">{currentWord.phonetic}</div>
              <div className="badge badge-lg badge-neutral">{currentWord.french}</div>
            </div>

            <div className="text-2xl text-base-content opacity-50 mb-6">{currentWord.thai}</div>

            <div className="flex flex-col gap-4 items-center">
              <div className="text-4xl font-bold min-h-16">
                {wordCompleted ? (
                  <span className="text-success">✓ {currentWord.thai}</span>
                ) : (
                  <>
                    <span className="text-primary">{userInput}</span>
                    <span className="text-primary animate-pulse">|</span>
                  </>
                )}
              </div>

              <input
                ref={inputRef}
                type="text"
                className="input input-ghost w-0 h-0 opacity-0 absolute"
                autoFocus
                onKeyDown={handleTyping}
                onBlur={() => inputRef.current && inputRef.current.focus()}
              />

              {errorMessage && (
                <div className="badge badge-error mt-2">{errorMessage}</div>
              )}
            </div>

            {wordCompleted && (
              <button className="btn btn-success mt-4" onClick={getNextWord}>
                Mot suivant
              </button>
            )}
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h3 className="card-title mb-4">Clavier d'aide</h3>

            {keyboardHighlight && (
              <div className="alert alert-info mb-4">
                <div>
                  {keyboardHighlight.shift ? (
                    <span><strong>Appuyez sur MAJ (Shift) + {thaiKeyboard[keyboardHighlight.row][keyboardHighlight.index].latin}</strong> pour saisir {targetKeys[currentKeyIndex]}</span>
                  ) : (
                    <span><strong>Appuyez sur la touche {thaiKeyboard[keyboardHighlight.row][keyboardHighlight.index].latin}</strong> pour saisir {targetKeys[currentKeyIndex]}</span>
                  )}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <div className="flex flex-col justify-center items-center">
                <div className={`key w-16 mb-2 p-2 rounded border ${
                  isShiftPressed || (keyboardHighlight && keyboardHighlight.shift)
                    ? 'bg-primary text-white font-bold animate-pulse'
                    : 'bg-base-200'
                }`}>
                  <div className="text-center">
                    <div className="text-sm font-bold">MAJ</div>
                    <div className="text-xs">(Shift)</div>
                  </div>
                </div>
                {(isShiftPressed || (keyboardHighlight && keyboardHighlight.shift)) && (
                  <div className="text-xs text-center text-primary font-bold">
                    Maintenir <br/>enfoncée
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                {(isShiftPressed ? ['shiftRow1', 'shiftRow2', 'shiftRow3', 'shiftRow4'] : ['row1', 'row2', 'row3', 'row4']).map((rowName, rowIndex) => {
                  const baseRowName = isShiftPressed ? rowName.replace('shift', '') : rowName;
                  const displayRowName = isShiftPressed ? rowName : rowName;

                  return (
                    <div key={rowName} className="flex justify-center gap-1">
                      {thaiKeyboard[displayRowName].map((key, index) => {
                        const isHighlighted = keyboardHighlight &&
                          ((isShiftPressed && keyboardHighlight.shift && keyboardHighlight.row.replace('shift', '') === baseRowName && keyboardHighlight.index === index) ||
                          (!isShiftPressed && !keyboardHighlight.shift && keyboardHighlight.row === rowName && keyboardHighlight.index === index));

                        return (
                          <div
                            key={index}
                            className={`key w-10 h-10 flex flex-col items-center justify-center rounded border ${
                              isHighlighted
                                ? 'bg-primary text-white font-bold'
                                : 'bg-base-200'
                            }`}
                          >
                            <div className="text-sm font-bold">
                              {key.thai}
                            </div>
                            <div className="text-xs opacity-70">
                              {key.latin}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}

                <div className="flex justify-center mt-2">
                  <div
                    className={`key key-space px-6 py-2 rounded border ${
                      keyboardHighlight && keyboardHighlight.row === 'space'
                        ? 'bg-primary text-white font-bold'
                        : 'bg-base-200'
                    }`}
                  >
                    espace
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-center opacity-70">
              Utilisez votre clavier pour taper les touches correspondant aux caractères thaï indiqués en surbrillance
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderStats = () => {
    const stats = calculateGlobalStats();

    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <button className="btn btn-ghost" onClick={() => setCurrentView('home')}>
            ← Retour
          </button>
          <h2 className="text-2xl font-bold">Statistiques d'apprentissage</h2>
          <div></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title flex items-center mb-4">
                <span className="text-2xl mr-2">📊</span>
                Progression générale
              </h3>

              <div className="stats stats-vertical shadow w-full">
                <div className="stat">
                  <div className="stat-title">Leçons terminées</div>
                  <div className="stat-value">{stats.completedCount} / {stats.totalLessons}</div>
                  <div className="stat-desc">
                    <progress
                      className="progress progress-primary w-full"
                      value={stats.completionPercentage}
                      max="100"
                    ></progress>
                    <span className="text-right block">{stats.completionPercentage}%</span>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title">Mots appris</div>
                  <div className="stat-value">{stats.learnedWords} / {stats.totalWords}</div>
                  <div className="stat-desc">
                    <progress
                      className="progress progress-accent w-full"
                      value={stats.wordsPercentage}
                      max="100"
                    ></progress>
                    <span className="text-right block">{stats.wordsPercentage}%</span>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title">Catégories de phrases terminées</div>
                  <div className="stat-value">{stats.completedPhraseCount} / {stats.totalPhraseCategories}</div>
                  <div className="stat-desc">
                    <progress
                      className="progress progress-secondary w-full"
                      value={stats.phraseCompletionPercentage}
                      max="100"
                    ></progress>
                    <span className="text-right block">{stats.phraseCompletionPercentage}%</span>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title">Phrases apprises</div>
                  <div className="stat-value">{stats.learnedPhrases} / {stats.totalPhrases}</div>
                  <div className="stat-desc">
                    <progress
                      className="progress progress-info w-full"
                      value={stats.phrasesPercentage}
                      max="100"
                    ></progress>
                    <span className="text-right block">{stats.phrasesPercentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title flex items-center mb-4">
                <span className="text-2xl mr-2">🔥</span>
                Assiduité
              </h3>

              <div className="stats stats-vertical shadow w-full">
                <div className="stat">
                  <div className="stat-title">Séquence actuelle</div>
                  <div className="stat-value text-primary">{stats.streak} {stats.streak <= 1 ? 'jour' : 'jours'}</div>
                  <div className="stat-desc">Continuez à apprendre chaque jour !</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Dernière activité</div>
                  <div className="stat-value text-secondary">
                    {stats.lastActivity ? new Date(stats.lastActivity).toLocaleDateString('fr-FR') : 'Aucune'}
                  </div>
                  <div className="stat-desc">
                    {stats.lastActivity && new Date(stats.lastActivity).toISOString().split('T')[0] === new Date().toISOString().split('T')[0]
                      ? "Aujourd'hui"
                      : "Revenez demain pour maintenir votre séquence !"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title flex items-center mb-4">
                <span className="text-2xl mr-2">🏋️</span>
                Types d'exercices
              </h3>

              <div className="stats stats-vertical shadow w-full">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                        <span className="text-2xl">🎴</span>
                      </div>
                    </div>
                  </div>
                  <div className="stat-title">Flashcards</div>
                  <div className="stat-value text-primary">{stats.flashcardExercises}</div>
                  <div className="stat-desc">Exercices de mémorisation visuelle</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center">
                        <span className="text-2xl">⌨️</span>
                      </div>
                    </div>
                  </div>
                  <div className="stat-title">Saisie</div>
                  <div className="stat-value text-secondary">{stats.typingExercises}</div>
                  <div className="stat-desc">Exercices de saisie en thaï</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-accent">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full bg-accent bg-opacity-20 flex items-center justify-center">
                        <span className="text-2xl">🧠</span>
                      </div>
                    </div>
                  </div>
                  <div className="stat-title">Mémorisation</div>
                  <div className="stat-value text-accent">{stats.memoryExercises}</div>
                  <div className="stat-desc">Exercices de mémorisation active</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-info">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full bg-info bg-opacity-20 flex items-center justify-center">
                        <span className="text-2xl">💯</span>
                      </div>
                    </div>
                  </div>
                  <div className="stat-title">Total</div>
                  <div className="stat-value text-info">{stats.totalExercises}</div>
                  <div className="stat-desc">Exercices complétés</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl col-span-1 md:col-span-2">
            <div className="card-body">
              <h3 className="card-title flex items-center mb-4">
                <span className="text-2xl mr-2">📝</span>
                Détail par leçon
              </h3>

              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Leçon</th>
                      <th>Statut</th>
                      <th>Exercices terminés</th>
                      <th>Dernière pratique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thaiLessons.map(lesson => {
                      const lessonStat = lessonStats[lesson.id] || {};
                      const isCompleted = completedLessons.includes(lesson.id);
                      return (
                        <tr key={lesson.id} className={isCompleted ? 'bg-success bg-opacity-10' : ''}>
                          <td className="flex items-center gap-2">
                            <span>{lesson.icon}</span>
                            <span>{lesson.title}</span>
                          </td>
                          <td>
                            {isCompleted
                              ? <span className="badge badge-success">Terminé</span>
                              : <span className="badge badge-ghost">À faire</span>
                            }
                          </td>
                          <td>
                            {lessonStat.completions || 0}
                            {lessonStat.typing && <span className="text-xs opacity-70"> (dont {lessonStat.typing.successes || 0} exercices de saisie)</span>}
                            {lessonStat.memory && <span className="text-xs opacity-70"> (dont {lessonStat.memory.successes || 0} exercices de mémorisation)</span>}
                          </td>
                          <td>
                            {lessonStat.lastCompleted
                              ? new Date(lessonStat.lastCompleted).toLocaleDateString('fr-FR')
                              : '-'
                            }
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMemoryExercise = () => {
    if (!selectedLesson || !memoryExercise.targetWord) return null;

    const { targetWord, userInput, currentWordIndex, words, showHint, keyboardHighlight, completed, errors } = memoryExercise;
    const progress = words.length > 0 ? ((currentWordIndex + 1) / words.length) * 100 : 0;
    
    // Déterminer le type d'image (mots ou phrases)
    const imageType = thaiPhrases.some(category => category.id === selectedLesson.id) ? 'phrases' : 'words';
    
    // Récupérer l'URL de l'image pour le mot actuel
    const imageUrl = getImageUrl(targetWord.image, imageType, targetWord.french);

    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <button className="btn btn-ghost" onClick={() => setCurrentView('home')}>
            ← Retour
          </button>
          <h2 className="text-2xl font-bold">Exercice de mémorisation - {selectedLesson.title}</h2>
          <div></div>
        </div>

        <progress className="progress progress-primary w-full mb-6" value={progress} max="100"></progress>

        <div className="card bg-base-100 shadow-xl mb-8 p-6">
          <div className="card-body text-center">
            <div className="text-lg mb-2">Mémorisez ce mot :</div>
            
            {/* Image du mot */}
            <div className="flex justify-center mb-6">
              <img 
                src={imageUrl} 
                alt={targetWord.french} 
                className="rounded-lg shadow-md max-h-52 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = imageType === 'phrases' 
                    ? '../assets/phrases/default.txt' 
                    : '../assets/words/default.txt';
                }}
              />
            </div>

            <div className="flex justify-center gap-4 mb-4">
              <div className="badge badge-lg">{targetWord.phonetic}</div>
              <div className="badge badge-lg badge-neutral">{targetWord.french}</div>
            </div>

            <div className="text-2xl text-base-content opacity-50 mb-6">{targetWord.thai}</div>

            <div className="flex flex-col gap-4 items-center">
              <div className="text-4xl font-bold min-h-16">
                {completed ? (
                  <span className="text-success">✓ {targetWord.thai}</span>
                ) : (
                  <>
                    <span className="text-primary">{userInput}</span>
                    <span className="text-primary animate-pulse">|</span>
                  </>
                )}
              </div>

              <input
                ref={inputRef}
                type="text"
                className="input input-ghost w-0 h-0 opacity-0 absolute"
                autoFocus
                onKeyDown={handleMemoryInput}
                onBlur={() => inputRef.current && inputRef.current.focus()}
              />

              {showHint && keyboardHighlight && (
                <div className="alert alert-info mt-2">
                  <div>
                    {keyboardHighlight.shift ? (
                      <span><strong>Appuyez sur MAJ (Shift) + {thaiKeyboard[keyboardHighlight.row][keyboardHighlight.index].latin}</strong> pour saisir {targetWord.thai.split('')[memoryExercise.currentKeyIndex]}</span>
                    ) : (
                      <span><strong>Appuyez sur la touche {thaiKeyboard[keyboardHighlight.row][keyboardHighlight.index].latin}</strong> pour saisir {targetWord.thai.split('')[memoryExercise.currentKeyIndex]}</span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {completed && (
              <button className="btn btn-success mt-4" onClick={nextMemoryWord}>
                Mot suivant
              </button>
            )}
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h3 className="card-title mb-4">Clavier d'aide</h3>

            <div className="flex gap-4">
              <div className="flex flex-col justify-center items-center">
                <div className={`key w-16 mb-2 p-2 rounded border ${
                  isShiftPressed || (keyboardHighlight && keyboardHighlight.shift)
                    ? 'bg-primary text-white font-bold animate-pulse'
                    : 'bg-base-200'
                }`}>
                  <div className="text-center">
                    <div className="text-sm font-bold">MAJ</div>
                    <div className="text-xs">(Shift)</div>
                  </div>
                </div>
                {(isShiftPressed || (keyboardHighlight && keyboardHighlight.shift)) && (
                  <div className="text-xs text-center text-primary font-bold">
                    Maintenir <br/>enfoncée
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                {(isShiftPressed ? ['shiftRow1', 'shiftRow2', 'shiftRow3', 'shiftRow4'] : ['row1', 'row2', 'row3', 'row4']).map((rowName, rowIndex) => {
                  const baseRowName = isShiftPressed ? rowName.replace('shift', '') : rowName;
                  const displayRowName = isShiftPressed ? rowName : rowName;

                  return (
                    <div key={rowName} className="flex justify-center gap-1">
                      {thaiKeyboard[displayRowName].map((key, index) => {
                        const isHighlighted = keyboardHighlight &&
                          ((isShiftPressed && keyboardHighlight.shift && keyboardHighlight.row.replace('shift', '') === baseRowName && keyboardHighlight.index === index) ||
                          (!isShiftPressed && !keyboardHighlight.shift && keyboardHighlight.row === rowName && keyboardHighlight.index === index));

                        return (
                          <div
                            key={index}
                            className={`key w-10 h-10 flex flex-col items-center justify-center rounded border ${
                              isHighlighted
                                ? 'bg-primary text-white font-bold'
                                : 'bg-base-200'
                            }`}
                          >
                            <div className="text-sm font-bold">
                              {key.thai}
                            </div>
                            <div className="text-xs opacity-70">
                              {key.latin}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}

                <div className="flex justify-center mt-2">
                  <div
                    className={`key key-space px-6 py-2 rounded border ${
                      keyboardHighlight && keyboardHighlight.row === 'space'
                        ? 'bg-primary text-white font-bold'
                        : 'bg-base-200'
                    }`}
                  >
                    espace
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-center opacity-70">
              Utilisez votre clavier pour taper les touches correspondant aux caractères thaï indiqués en surbrillance
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return renderHome()
      case 'lesson':
        return renderLesson()
      case 'congratulations':
        return renderCongratulations()
      case 'typingExercise':
        return renderTypingExercise()
      case 'memoryExercise':
        return renderMemoryExercise()
      case 'stats':
        return renderStats()
      default:
        return renderHome()
    }
  }

  return (
    <div data-theme={currentTheme} className="min-h-screen bg-base-300">
      <nav className="navbar bg-base-100 shadow-lg mb-4">
        <div className="flex-1">
          <button className="btn btn-ghost normal-case text-xl" onClick={() => setCurrentView('home')}>
            🇹🇭 Apprendre le Thaï
          </button>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-circle" onClick={() => setCurrentView('stats')}>
            📊
          </button>
          <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
            {currentTheme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      <main>
        {renderCurrentView()}
      </main>

      <footer className="footer footer-center p-4 bg-base-200 text-base-content mt-8">
        <div>
          <p>© 2025 - Apprendre le Thaï - Une application créée avec React et DaisyUI</p>
        </div>
      </footer>
    </div>
  )
}

export default App
