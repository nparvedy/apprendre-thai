import React, { useState, useEffect, useRef } from 'react'
import './style.css'

function App() {
  const [currentTheme, setCurrentTheme] = useState('light')
  const [currentView, setCurrentView] = useState('home')
  const [selectedLesson, setSelectedLesson] = useState(null)

  // Données d'exemples pour les leçons
  const lessons = [
    {
      id: 1,
      title: 'Salutations de base',
      words: [
        { thai: 'สวัสดี', phonetic: 'sà-wàt-dee', french: 'Bonjour' },
        { thai: 'ขอบคุณ', phonetic: 'kɔ̀ɔp-kun', french: 'Merci' },
        { thai: 'คุณสบายดีไหม', phonetic: 'kun-sà-baai-dee-măi', french: 'Comment allez-vous ?' },
        { thai: 'สบายดี', phonetic: 'sà-baai-dee', french: 'Je vais bien' }
      ]
    },
    {
      id: 2,
      title: 'Nourriture',
      words: [
        { thai: 'อาหาร', phonetic: 'aa-hǎan', french: 'Nourriture' },
        { thai: 'ข้าว', phonetic: 'kâao', french: 'Riz' },
        { thai: 'น้ำ', phonetic: 'náam', french: 'Eau' },
        { thai: 'อร่อย', phonetic: 'à-rɔ̀ɔi', french: 'Délicieux' }
      ]
    },
    {
      id: 3,
      title: 'Chiffres',
      words: [
        { thai: 'หนึ่ง', phonetic: 'nèung', french: 'Un' },
        { thai: 'สอง', phonetic: 'sɔ̌ɔng', french: 'Deux' },
        { thai: 'สาม', phonetic: 'sǎam', french: 'Trois' },
        { thai: 'สี่', phonetic: 'sìi', french: 'Quatre' },
        { thai: 'ห้า', phonetic: 'hâa', french: 'Cinq' }
      ]
    }
  ]

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

  const [flashcardMode, setFlashcardMode] = useState('thai') // 'thai', 'phonetic' ou 'french'
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [completedLessons, setCompletedLessons] = useState([])
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
        setCompletedLessons([...completedLessons, selectedLesson.id])
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
    if (typingExercise.wordCompleted) return;
    
    // Ignorer l'appui sur la touche MAJ seule
    if (e.key === 'Shift') {
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

  useEffect(() => {
    if (currentView === 'typingExercise' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentView, typingExercise]);

  useEffect(() => {
    if (currentView === 'typingExercise') {
      initTypingExercise();
    }
  }, [currentView, selectedLesson]);

  const startTypingExercise = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentView('typingExercise');
  };

  const getNextWord = () => {
    initTypingExercise();
  };

  const renderHome = () => (
    <div className="container mx-auto p-4">
      <div className="hero bg-base-200 rounded-xl mb-8 p-6">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary">Apprendre le Thaï</h1>
            <p className="py-6">Bienvenue sur cette plateforme intuitive pour apprendre le thaï facilement. Commencez par choisir une leçon ci-dessous.</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Choisissez une leçon</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map(lesson => (
          <div key={lesson.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {lesson.title}
                {completedLessons.includes(lesson.id) && (
                  <div className="badge badge-success">Terminé</div>
                )}
              </h2>
              <p>{lesson.words.length} mots à apprendre</p>
              <div className="card-actions justify-end">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-primary">
                    Choisir un exercice
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={() => startLesson(lesson)}>Flashcards</button></li>
                    <li><button onClick={() => startTypingExercise(lesson)}>Exercice de saisie</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderLesson = () => {
    if (!selectedLesson) return null
    
    const currentWord = selectedLesson.words[currentCardIndex]
    const progress = ((currentCardIndex + 1) / selectedLesson.words.length) * 100
    
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
        
        <div className="card bg-base-100 shadow-xl mb-6 h-64 cursor-pointer" onClick={() => setShowAnswer(!showAnswer)}>
          <div className="card-body flex items-center justify-center">
            {flashcardMode === 'thai' ? (
              <>
                <div className="text-4xl mb-4">{currentWord.thai}</div>
                {showAnswer && (
                  <div>
                    <div className="text-xl opacity-80">{currentWord.phonetic}</div>
                    <div className="text-xl mt-2">{currentWord.french}</div>
                  </div>
                )}
              </>
            ) : flashcardMode === 'phonetic' ? (
              <>
                <div className="text-4xl mb-4">{currentWord.phonetic}</div>
                {showAnswer && (
                  <div>
                    <div className="text-xl opacity-80">{currentWord.thai}</div>
                    <div className="text-xl mt-2">{currentWord.french}</div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="text-4xl mb-4">{currentWord.french}</div>
                {showAnswer && (
                  <div>
                    <div className="text-xl opacity-80">{currentWord.thai}</div>
                    <div className="text-xl mt-2">{currentWord.phonetic}</div>
                  </div>
                )}
              </>
            )}
            
            {!showAnswer && (
              <div className="text-sm opacity-50">Cliquer pour révéler</div>
            )}
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
              {/* Indicateur de la touche Maj à gauche */}
              <div className="flex flex-col justify-center items-center">
                <div className={`key w-16 mb-2 p-2 rounded border ${
                  keyboardHighlight && keyboardHighlight.shift 
                    ? 'bg-primary text-white font-bold animate-pulse' 
                    : 'bg-base-200'
                }`}>
                  <div className="text-center">
                    <div className="text-sm font-bold">MAJ</div>
                    <div className="text-xs">(Shift)</div>
                  </div>
                </div>
                {keyboardHighlight && keyboardHighlight.shift && (
                  <div className="text-xs text-center text-primary font-bold">
                    Maintenir <br/>enfoncée
                  </div>
                )}
              </div>
              
              {/* Clavier principal qui change selon qu'on doive utiliser Shift ou non */}
              <div className="flex-1 flex flex-col gap-2">
                {['row1', 'row2', 'row3', 'row4'].map(rowName => (
                  <div key={rowName} className="flex justify-center gap-1">
                    {/* Pour chaque touche, vérifier si on a besoin de la version "shift" */}
                    {thaiKeyboard[rowName].map((key, index) => {
                      // Déterminer si cette touche est celle à saisir actuellement
                      const isHighlighted = keyboardHighlight && 
                        ((keyboardHighlight.row === rowName && keyboardHighlight.index === index && !keyboardHighlight.shift) ||
                         (keyboardHighlight.row === 'shift' + rowName && keyboardHighlight.index === index && keyboardHighlight.shift));
                      
                      // Déterminer quelle touche afficher (normale ou avec shift)
                      const shiftRowName = 'shift' + rowName;
                      const displayKey = keyboardHighlight && keyboardHighlight.shift && 
                                      thaiKeyboard[shiftRowName] && 
                                      thaiKeyboard[shiftRowName][index] ? 
                                      thaiKeyboard[shiftRowName][index] : key;
                      
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
                            {keyboardHighlight && keyboardHighlight.shift && thaiKeyboard[shiftRowName] && thaiKeyboard[shiftRowName][index] 
                              ? thaiKeyboard[shiftRowName][index].thai 
                              : key.thai}
                          </div>
                          <div className="text-xs opacity-70">
                            {keyboardHighlight && keyboardHighlight.shift && thaiKeyboard[shiftRowName] && thaiKeyboard[shiftRowName][index]
                              ? thaiKeyboard[shiftRowName][index].latin
                              : key.latin}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
                
                {/* Barre d'espace */}
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
