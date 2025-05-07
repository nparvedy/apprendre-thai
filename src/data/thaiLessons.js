/**
 * Liste des leçons de vocabulaire thaï
 * Organisée par catégories avec phonétique et traduction française
 */

const thaiLessons = [
  {
    id: 1,
    title: 'Salutations de base',
    icon: '👋',
    description: 'Les expressions essentielles pour engager une conversation en thaï et faire bonne impression.',
    words: [
      { thai: 'สวัสดี', phonetic: 'sà-wàt-dee', french: 'Bonjour' },
      { thai: 'ขอบคุณ', phonetic: 'kɔ̀ɔp-kun', french: 'Merci' },
      { thai: 'คุณสบายดีไหม', phonetic: 'kun-sà-baai-dee-măi', french: 'Comment allez-vous ?' },
      { thai: 'สบายดี', phonetic: 'sà-baai-dee', french: 'Je vais bien' },
      { thai: 'ไม่เป็นไร', phonetic: 'mâi-pen-rai', french: 'De rien/Pas de problème' },
      { thai: 'ลาก่อน', phonetic: 'laa-kɔ̀n', french: 'Au revoir' },
      { thai: 'เจอกันใหม่', phonetic: 'jəə-kan-mài', french: 'À bientôt' },
      { thai: 'ยินดีที่ได้รู้จัก', phonetic: 'yin-dee-têe-dâi-rúu-jàk', french: 'Enchanté(e)' },
      { thai: 'ขอโทษ', phonetic: 'kɔ̌ɔ-thôot', french: 'Excusez-moi/Pardon' },
      { thai: 'ไม่เข้าใจ', phonetic: 'mâi-kâo-jai', french: 'Je ne comprends pas' }
    ]
  },
  {
    id: 2,
    title: 'Nourriture',
    icon: '🍲',
    description: 'Découvrez le vocabulaire de la gastronomie thaïlandaise et ses saveurs uniques.',
    words: [
      { thai: 'อาหาร', phonetic: 'aa-hǎan', french: 'Nourriture' },
      { thai: 'ข้าว', phonetic: 'kâao', french: 'Riz' },
      { thai: 'น้ำ', phonetic: 'náam', french: 'Eau' },
      { thai: 'อร่อย', phonetic: 'à-rɔ̀ɔi', french: 'Délicieux' },
      { thai: 'ผัดไทย', phonetic: 'pàt-thai', french: 'Pad thaï' },
      { thai: 'ต้มยำกุ้ง', phonetic: 'tôm-yam-kûng', french: 'Soupe tom yam aux crevettes' },
      { thai: 'ส้มตำ', phonetic: 'sôm-tam', french: 'Salade de papaye verte' },
      { thai: 'ข้าวผัด', phonetic: 'kâao-pàt', french: 'Riz frit' },
      { thai: 'กาแฟ', phonetic: 'kaa-fɛɛ', french: 'Café' },
      { thai: 'ชา', phonetic: 'chaa', french: 'Thé' },
      { thai: 'เผ็ด', phonetic: 'pèt', french: 'Épicé' },
      { thai: 'หวาน', phonetic: 'wǎan', french: 'Sucré' },
      { thai: 'เค็ม', phonetic: 'kem', french: 'Salé' },
      { thai: 'เปรี้ยว', phonetic: 'prîiao', french: 'Acide' }
    ]
  },
  {
    id: 3,
    title: 'Chiffres',
    icon: '🔢',
    description: 'Apprenez à compter et à comprendre les nombres en thaï pour vos achats quotidiens.',
    words: [
      { thai: 'ศูนย์', phonetic: 'sǔun', french: 'Zéro' },
      { thai: 'หนึ่ง', phonetic: 'nèung', french: 'Un' },
      { thai: 'สอง', phonetic: 'sɔ̌ɔng', french: 'Deux' },
      { thai: 'สาม', phonetic: 'sǎam', french: 'Trois' },
      { thai: 'สี่', phonetic: 'sìi', french: 'Quatre' },
      { thai: 'ห้า', phonetic: 'hâa', french: 'Cinq' },
      { thai: 'หก', phonetic: 'hòk', french: 'Six' },
      { thai: 'เจ็ด', phonetic: 'jèt', french: 'Sept' },
      { thai: 'แปด', phonetic: 'pɛ̀ɛt', french: 'Huit' },
      { thai: 'เก้า', phonetic: 'kâo', french: 'Neuf' },
      { thai: 'สิบ', phonetic: 'sìp', french: 'Dix' },
      { thai: 'ร้อย', phonetic: 'rɔ́ɔi', french: 'Cent' },
      { thai: 'พัน', phonetic: 'pan', french: 'Mille' }
    ]
  },
  {
    id: 4,
    title: 'Jours de la semaine',
    icon: '📅',
    description: 'Maîtrisez les termes relatifs au temps pour organiser votre séjour en Thaïlande.',
    words: [
      { thai: 'วันจันทร์', phonetic: 'wan-jan', french: 'Lundi' },
      { thai: 'วันอังคาร', phonetic: 'wan-ang-khaan', french: 'Mardi' },
      { thai: 'วันพุธ', phonetic: 'wan-phút', french: 'Mercredi' },
      { thai: 'วันพฤหัสบดี', phonetic: 'wan-phā-rʉ́-hàt-bɔɔ-dii', french: 'Jeudi' },
      { thai: 'วันศุกร์', phonetic: 'wan-sùk', french: 'Vendredi' },
      { thai: 'วันเสาร์', phonetic: 'wan-sǎo', french: 'Samedi' },
      { thai: 'วันอาทิตย์', phonetic: 'wan-aa-thít', french: 'Dimanche' },
      { thai: 'สัปดาห์', phonetic: 'sàp-daa', french: 'Semaine' },
      { thai: 'เดือน', phonetic: 'dʉan', french: 'Mois' },
      { thai: 'ปี', phonetic: 'pii', french: 'Année' }
    ]
  },
  {
    id: 5,
    title: 'Famille',
    icon: '👪',
    description: 'Un vocabulaire complet pour parler de votre famille et comprendre les relations familiales thaïes.',
    words: [
      { thai: 'พ่อ', phonetic: 'phɔ̂ɔ', french: 'Père' },
      { thai: 'แม่', phonetic: 'mɛ̂ɛ', french: 'Mère' },
      { thai: 'พี่ชาย', phonetic: 'phîi-chaai', french: 'Grand frère' },
      { thai: 'พี่สาว', phonetic: 'phîi-sǎao', french: 'Grande sœur' },
      { thai: 'น้องชาย', phonetic: 'nɔ́ɔng-chaai', french: 'Petit frère' },
      { thai: 'น้องสาว', phonetic: 'nɔ́ɔng-sǎao', french: 'Petite sœur' },
      { thai: 'ลูกชาย', phonetic: 'lûuk-chaai', french: 'Fils' },
      { thai: 'ลูกสาว', phonetic: 'lûuk-sǎao', french: 'Fille' },
      { thai: 'สามี', phonetic: 'sǎa-mii', french: 'Mari' },
      { thai: 'ภรรยา', phonetic: 'phan-rá-yaa', french: 'Femme/Épouse' },
      { thai: 'ปู่', phonetic: 'pùu', french: 'Grand-père paternel' },
      { thai: 'ย่า', phonetic: 'yâa', french: 'Grand-mère paternelle' },
      { thai: 'ตา', phonetic: 'taa', french: 'Grand-père maternel' },
      { thai: 'ยาย', phonetic: 'yaai', french: 'Grand-mère maternelle' }
    ]
  },
  {
    id: 6,
    title: 'Transport',
    icon: '🚗',
    description: 'Les mots essentiels pour vous déplacer facilement dans les villes et régions thaïlandaises.',
    words: [
      { thai: 'รถ', phonetic: 'rót', french: 'Voiture/Véhicule' },
      { thai: 'รถยนต์', phonetic: 'rót-yon', french: 'Automobile' },
      { thai: 'รถเมล์', phonetic: 'rót-mee', french: 'Bus' },
      { thai: 'รถไฟ', phonetic: 'rót-fai', french: 'Train' },
      { thai: 'รถไฟฟ้า', phonetic: 'rót-fai-fáa', french: 'Métro/Train électrique' },
      { thai: 'เครื่องบิน', phonetic: 'khrʉ̂ang-bin', french: 'Avion' },
      { thai: 'เรือ', phonetic: 'rʉa', french: 'Bateau' },
      { thai: 'จักรยาน', phonetic: 'jàk-krà-yaan', french: 'Vélo' },
      { thai: 'จักรยานยนต์', phonetic: 'jàk-krà-yaan-yon', french: 'Moto' },
      { thai: 'แท็กซี่', phonetic: 'thɛ́k-sîi', french: 'Taxi' },
      { thai: 'ตุ๊กตุ๊ก', phonetic: 'túk-túk', french: 'Tuk-tuk' },
      { thai: 'สถานี', phonetic: 'sà-thǎa-nii', french: 'Station/Gare' }
    ]
  },
  {
    id: 7,
    title: 'Couleurs',
    icon: '🎨',
    description: 'Découvrez les noms des couleurs en thaï, utiles pour le shopping et les descriptions.',
    words: [
      { thai: 'สี', phonetic: 'sǐi', french: 'Couleur' },
      { thai: 'สีแดง', phonetic: 'sǐi-dɛɛng', french: 'Rouge' },
      { thai: 'สีเขียว', phonetic: 'sǐi-khǐiao', french: 'Vert' },
      { thai: 'สีน้ำเงิน', phonetic: 'sǐi-náam-ngəən', french: 'Bleu' },
      { thai: 'สีเหลือง', phonetic: 'sǐi-lʉ̌ang', french: 'Jaune' },
      { thai: 'สีส้ม', phonetic: 'sǐi-sôm', french: 'Orange' },
      { thai: 'สีม่วง', phonetic: 'sǐi-mûang', french: 'Violet' },
      { thai: 'สีชมพู', phonetic: 'sǐi-chom-phuu', french: 'Rose' },
      { thai: 'สีน้ำตาล', phonetic: 'sǐi-náam-taan', french: 'Marron' },
      { thai: 'สีดำ', phonetic: 'sǐi-dam', french: 'Noir' },
      { thai: 'สีขาว', phonetic: 'sǐi-khǎao', french: 'Blanc' },
      { thai: 'สีเทา', phonetic: 'sǐi-thao', french: 'Gris' }
    ]
  },
  {
    id: 8,
    title: 'Directions et lieux',
    icon: '🧭',
    description: 'Les expressions indispensables pour trouver votre chemin et demander des indications.',
    words: [
      { thai: 'ซ้าย', phonetic: 'sáai', french: 'Gauche' },
      { thai: 'ขวา', phonetic: 'khwǎa', french: 'Droite' },
      { thai: 'บน', phonetic: 'bon', french: 'En haut/Sur' },
      { thai: 'ล่าง', phonetic: 'lâang', french: 'En bas' },
      { thai: 'เหนือ', phonetic: 'nʉ̌a', french: 'Nord' },
      { thai: 'ใต้', phonetic: 'tâi', french: 'Sud' },
      { thai: 'ตะวันออก', phonetic: 'tà-wan-ɔ̀ɔk', french: 'Est' },
      { thai: 'ตะวันตก', phonetic: 'tà-wan-tòk', french: 'Ouest' },
      { thai: 'โรงแรม', phonetic: 'roong-rɛɛm', french: 'Hôtel' },
      { thai: 'ร้านอาหาร', phonetic: 'ráan-aa-hǎan', french: 'Restaurant' },
      { thai: 'ตลาด', phonetic: 'tà-làat', french: 'Marché' },
      { thai: 'ห้างสรรพสินค้า', phonetic: 'hâang-sàp-pá-sǐn-kháa', french: 'Centre commercial' },
      { thai: 'สนามบิน', phonetic: 'sà-nǎam-bin', french: 'Aéroport' },
      { thai: 'ชายหาด', phonetic: 'chaai-hàat', french: 'Plage' },
      { thai: 'วัด', phonetic: 'wát', french: 'Temple' }
    ]
  },
  {
    id: 9,
    title: 'Verbes courants',
    icon: '🏃',
    description: 'Les actions les plus utilisées au quotidien pour construire des phrases simples et efficaces.',
    words: [
      { thai: 'กิน', phonetic: 'kin', french: 'Manger' },
      { thai: 'ดื่ม', phonetic: 'dʉ̀ʉm', french: 'Boire' },
      { thai: 'นอน', phonetic: 'nɔɔn', french: 'Dormir' },
      { thai: 'ไป', phonetic: 'pai', french: 'Aller' },
      { thai: 'มา', phonetic: 'maa', french: 'Venir' },
      { thai: 'พูด', phonetic: 'phûut', french: 'Parler' },
      { thai: 'ฟัง', phonetic: 'fang', french: 'Écouter' },
      { thai: 'เห็น', phonetic: 'hěn', french: 'Voir' },
      { thai: 'ดู', phonetic: 'duu', french: 'Regarder' },
      { thai: 'อ่าน', phonetic: 'àan', french: 'Lire' },
      { thai: 'เขียน', phonetic: 'khǐian', french: 'Écrire' },
      { thai: 'ทำงาน', phonetic: 'tham-ngaan', french: 'Travailler' },
      { thai: 'เล่น', phonetic: 'lên', french: 'Jouer' },
      { thai: 'ซื้อ', phonetic: 'sʉ́ʉ', french: 'Acheter' },
      { thai: 'ขาย', phonetic: 'khǎai', french: 'Vendre' },
      { thai: 'ช่วย', phonetic: 'chûai', french: 'Aider' },
      { thai: 'รัก', phonetic: 'rák', french: 'Aimer' }
    ]
  },
  {
    id: 10,
    title: 'Shopping',
    icon: '🛒',
    description: 'Le vocabulaire essentiel pour faire des achats, négocier et profiter des marchés thaïlandais.',
    words: [
      { thai: 'เท่าไหร่', phonetic: 'thâo-rài', french: 'Combien ça coûte?' },
      { thai: 'ลดราคา', phonetic: 'lót-raa-khaa', french: 'Réduction/Solde' },
      { thai: 'แพง', phonetic: 'phɛɛng', french: 'Cher' },
      { thai: 'ถูก', phonetic: 'thùuk', french: 'Pas cher' },
      { thai: 'เงิน', phonetic: 'ngən', french: 'Argent' },
      { thai: 'บาท', phonetic: 'bàat', french: 'Baht (monnaie thaï)' },
      { thai: 'ธนาคาร', phonetic: 'thá-naa-khaan', french: 'Banque' },
      { thai: 'บัตรเครดิต', phonetic: 'bàt-khree-dìt', french: 'Carte de crédit' },
      { thai: 'เสื้อผ้า', phonetic: 'sʉ̂a-phâa', french: 'Vêtements' },
      { thai: 'ขนาด', phonetic: 'khà-nàat', french: 'Taille' },
      { thai: 'รองเท้า', phonetic: 'rɔɔng-tháo', french: 'Chaussures' },
      { thai: 'ลองได้ไหม', phonetic: 'lɔɔng-dâi-mǎi', french: 'Puis-je essayer?' }
    ]
  },
  {
    id: 11,
    title: 'Corps humain',
    icon: '🧠',
    description: 'Les termes anatomiques utiles, notamment en cas de besoin médical ou de bien-être.',
    words: [
      { thai: 'ศีรษะ', phonetic: 'sǐi-sà', french: 'Tête' },
      { thai: 'ตา', phonetic: 'taa', french: 'Œil' },
      { thai: 'หู', phonetic: 'hǔu', french: 'Oreille' },
      { thai: 'จมูก', phonetic: 'jà-mùuk', french: 'Nez' },
      { thai: 'ปาก', phonetic: 'pàak', french: 'Bouche' },
      { thai: 'แขน', phonetic: 'khɛ̌ɛn', french: 'Bras' },
      { thai: 'มือ', phonetic: 'mʉʉ', french: 'Main' },
      { thai: 'นิ้ว', phonetic: 'níw', french: 'Doigt' },
      { thai: 'ขา', phonetic: 'khǎa', french: 'Jambe' },
      { thai: 'เท้า', phonetic: 'tháo', french: 'Pied' },
      { thai: 'หัวใจ', phonetic: 'hǔa-jai', french: 'Cœur' },
      { thai: 'หลัง', phonetic: 'lǎng', french: 'Dos' },
      { thai: 'ท้อง', phonetic: 'thɔ́ɔng', french: 'Ventre' }
    ]
  },
  {
    id: 12,
    title: 'Urgences',
    icon: '🚨',
    description: 'Les expressions cruciales pour gérer une situation d\'urgence ou demander de l\'aide.',
    words: [
      { thai: 'ช่วยด้วย', phonetic: 'chûai-dûai', french: 'Au secours!' },
      { thai: 'เหตุฉุกเฉิน', phonetic: 'hèet-chùk-chə̀ən', french: 'Urgence' },
      { thai: 'ตำรวจ', phonetic: 'tam-rùat', french: 'Police' },
      { thai: 'โรงพยาบาล', phonetic: 'roong-phá-yaa-baan', french: 'Hôpital' },
      { thai: 'หมอ', phonetic: 'mɔ̌ɔ', french: 'Médecin' },
      { thai: 'เจ็บ', phonetic: 'jèp', french: 'Avoir mal' },
      { thai: 'ปวด', phonetic: 'pùat', french: 'Douleur' },
      { thai: 'ไข้', phonetic: 'khâi', french: 'Fièvre' },
      { thai: 'ยา', phonetic: 'yaa', french: 'Médicament' },
      { thai: 'อุบัติเหตุ', phonetic: 'ù-bàt-tì-hèet', french: 'Accident' },
      { thai: 'ไฟไหม้', phonetic: 'fai-mâi', french: 'Incendie' }
    ]
  }
];

/**
 * Liste des phrases courantes en thaï
 * Organisée par catégories avec phonétique et traduction française
 */
const thaiPhrases = [
  {
    id: 1,
    title: 'Conversation de base',
    icon: '💬',
    description: 'Les expressions essentielles pour engager et maintenir une conversation en thaï.',
    words: [
      { thai: 'คุณพูดภาษาอังกฤษได้ไหม', phonetic: 'khun-phûut-phaa-sǎa-ang-krìt-dâi-mǎi', french: 'Parlez-vous anglais ?' },
      { thai: 'คุณชื่ออะไร', phonetic: 'khun-chʉ̂ʉ-à-rai', french: 'Comment vous appelez-vous ?' },
      { thai: 'ฉันชื่อ...', phonetic: 'chǎn-chʉ̂ʉ...', french: 'Je m\'appelle...' },
      { thai: 'ดีใจที่ได้รู้จัก', phonetic: 'dii-jai-thîi-dâi-rúu-jàk', french: 'Enchanté(e) de faire votre connaissance' },
      { thai: 'คุณมาจากไหน', phonetic: 'khun-maa-jàak-nǎi', french: 'D\'où venez-vous ?' },
      { thai: 'ฉันมาจากฝรั่งเศส', phonetic: 'chǎn-maa-jàak-fà-ràng-sèet', french: 'Je viens de France' },
      { thai: 'คุณอายุเท่าไหร่', phonetic: 'khun-aa-yú-thâo-rài', french: 'Quel âge avez-vous ?' },
      { thai: 'ฉันอายุ... ปี', phonetic: 'chǎn-aa-yú... pii', french: 'J\'ai ... ans' },
      { thai: 'คุณทำงานอะไร', phonetic: 'khun-tham-ngaan-à-rai', french: 'Que faites-vous comme travail ?' },
      { thai: 'ฉันเข้าใจ', phonetic: 'chǎn-khâo-jai', french: 'Je comprends' },
      { thai: 'ฉันไม่เข้าใจ', phonetic: 'chǎn-mâi-khâo-jai', french: 'Je ne comprends pas' },
      { thai: 'ช่วยพูดช้าๆ ได้ไหม', phonetic: 'chûai-phûut-cháa-cháa-dâi-mǎi', french: 'Pouvez-vous parler plus lentement ?' }
    ]
  },
  {
    id: 2,
    title: 'Au restaurant',
    icon: '🍽️',
    description: 'Tout ce dont vous avez besoin pour commander et apprécier un repas en Thaïlande.',
    words: [
      { thai: 'โต๊ะสำหรับ... คน', phonetic: 'tó-sǎm-ràp... khon', french: 'Une table pour ... personnes' },
      { thai: 'เมนูมีไหม', phonetic: 'mee-nuu-mii-mǎi', french: 'Avez-vous un menu ?' },
      { thai: 'ขอดูเมนูหน่อย', phonetic: 'khɔ̌ɔ-duu-mee-nuu-nɔ̀i', french: 'Je voudrais voir le menu' },
      { thai: 'มีอาหารแนะนำอะไรบ้าง', phonetic: 'mii-aa-hǎan-nɛ́-nam-à-rai-bâang', french: 'Avez-vous des spécialités ?' },
      { thai: 'ผมขอสั่งอาหาร', phonetic: 'phǒm-khɔ̌ɔ-sàng-aa-hǎan', french: 'Je voudrais commander (homme)' },
      { thai: 'ดิฉันขอสั่งอาหาร', phonetic: 'di-chǎn-khɔ̌ɔ-sàng-aa-hǎan', french: 'Je voudrais commander (femme)' },
      { thai: 'ขอน้ำเปล่า', phonetic: 'khɔ̌ɔ-náam-plào', french: 'De l\'eau plate, s\'il vous plaît' },
      { thai: 'อาหารอร่อยมาก', phonetic: 'aa-hǎan-à-rɔ̀i-mâak', french: 'Le repas est délicieux' },
      { thai: 'เผ็ดเกินไป', phonetic: 'phèt-gəən-pai', french: 'C\'est trop épicé' },
      { thai: 'ขอเช็คบิลด้วย', phonetic: 'khɔ̌ɔ-chék-bin-dûai', french: 'L\'addition, s\'il vous plaît' },
      { thai: 'รับบัตรเครดิตไหม', phonetic: 'ráp-bàt-khree-dìt-mǎi', french: 'Acceptez-vous les cartes de crédit ?' },
      { thai: 'อาหารนี้มีอะไรบ้าง', phonetic: 'aa-hǎan-níi-mii-à-rai-bâang', french: 'Quels sont les ingrédients de ce plat ?' }
    ]
  },
  {
    id: 3,
    title: 'Transport et directions',
    icon: '🧭',
    description: 'Phrases pratiques pour vous déplacer et demander votre chemin en Thaïlande.',
    words: [
      { thai: 'ไปที่นี่ได้ไหม', phonetic: 'pai-thîi-nîi-dâi-mǎi', french: 'Pouvez-vous m\'emmener à cet endroit ?' },
      { thai: 'ที่นี่อยู่ไกลแค่ไหน', phonetic: 'thîi-nîi-yùu-klai-khɛ̂-nǎi', french: 'À quelle distance est cet endroit ?' },
      { thai: 'นั่นอยู่ที่ไหน', phonetic: 'nân-yùu-thîi-nǎi', french: 'Où est-ce ?' },
      { thai: 'ฉันหลงทาง', phonetic: 'chǎn-lǒng-thaang', french: 'Je suis perdu(e)' },
      { thai: 'ตรงไป', phonetic: 'trong-pai', french: 'Allez tout droit' },
      { thai: 'เลี้ยวซ้าย', phonetic: 'líao-sáai', french: 'Tournez à gauche' },
      { thai: 'เลี้ยวขวา', phonetic: 'líao-khwǎa', french: 'Tournez à droite' },
      { thai: 'รถเมล์ไปที่... ไหม', phonetic: 'rót-mee-pai-thîi... mǎi', french: 'Est-ce que ce bus va à... ?' },
      { thai: 'รถไฟใต้ดินอยู่ที่ไหน', phonetic: 'rót-fai-tâi-din-yùu-thîi-nǎi', french: 'Où est la station de métro ?' },
      { thai: 'ราคาเท่าไร', phonetic: 'raa-khaa-thâo-rai', french: 'Combien ça coûte ?' },
      { thai: 'หยุดที่นี่', phonetic: 'yùt-thîi-nîi', french: 'Arrêtez-vous ici' },
      { thai: 'ปั๊มน้ำมันอยู่ที่ไหน', phonetic: 'pám-náam-man-yùu-thîi-nǎi', french: 'Où est la station-service ?' }
    ]
  },
  {
    id: 4,
    title: 'À l\'hôtel',
    icon: '🏨',
    description: 'Expressions utiles pour votre séjour à l\'hôtel, de la réservation aux services.',
    words: [
      { thai: 'ผมจองห้องไว้', phonetic: 'phǒm-jɔɔng-hɔ̂ng-wái', french: 'J\'ai une réservation (homme)' },
      { thai: 'ดิฉันจองห้องไว้', phonetic: 'di-chǎn-jɔɔng-hɔ̂ng-wái', french: 'J\'ai une réservation (femme)' },
      { thai: 'คืนละเท่าไหร่', phonetic: 'khʉʉn-lá-thâo-rài', french: 'Combien coûte la nuit ?' },
      { thai: 'มีห้องว่างไหม', phonetic: 'mii-hɔ̂ng-wâang-mǎi', french: 'Avez-vous des chambres disponibles ?' },
      { thai: 'มีอินเตอร์เน็ตไหม', phonetic: 'mii-in-təə-nét-mǎi', french: 'Y a-t-il du Wi-Fi ?' },
      { thai: 'ที่จอดรถอยู่ที่ไหน', phonetic: 'thîi-jɔ̀ɔt-rót-yùu-thîi-nǎi', french: 'Où est le parking ?' },
      { thai: 'กุญแจห้องหาย', phonetic: 'kun-jɛɛ-hɔ̂ng-hǎai', french: 'J\'ai perdu ma clé de chambre' },
      { thai: 'เช็คเอาท์กี่โมง', phonetic: 'chék-ao-kìi-moong', french: 'À quelle heure est le check-out ?' },
      { thai: 'ขอผ้าเช็ดตัวเพิ่ม', phonetic: 'khɔ̌ɔ-phâa-chét-tuua-phə̂əm', french: 'Je voudrais des serviettes supplémentaires' },
      { thai: 'แอร์ไม่ทำงาน', phonetic: 'ɛɛ-mâi-tham-ngaan', french: 'La climatisation ne fonctionne pas' },
      { thai: 'ห้องนี้เสียงดัง', phonetic: 'hɔ̂ng-níi-sǐang-dang', french: 'Cette chambre est bruyante' }
    ]
  },
  {
    id: 5,
    title: 'Situations d\'urgence',
    icon: '🆘',
    description: 'Phrases cruciales à connaître en cas d\'urgence ou de besoin d\'assistance.',
    words: [
      { thai: 'ช่วยด้วย', phonetic: 'chûai-dûai', french: 'Au secours !' },
      { thai: 'เรียกตำรวจ', phonetic: 'rîak-tam-rùat', french: 'Appelez la police' },
      { thai: 'เรียกรถพยาบาล', phonetic: 'rîak-rót-phá-yaa-baan', french: 'Appelez une ambulance' },
      { thai: 'ผมไม่สบาย', phonetic: 'phǒm-mâi-sà-baai', french: 'Je ne me sens pas bien (homme)' },
      { thai: 'ดิฉันไม่สบาย', phonetic: 'di-chǎn-mâi-sà-baai', french: 'Je ne me sens pas bien (femme)' },
      { thai: 'ผมเป็นโรคภูมิแพ้', phonetic: 'phǒm-pen-rôok-phuum-phɛ́ɛ', french: 'Je suis allergique (homme)' },
      { thai: 'ดิฉันเป็นโรคภูมิแพ้', phonetic: 'di-chǎn-pen-rôok-phuum-phɛ́ɛ', french: 'Je suis allergique (femme)' },
      { thai: 'คุณพูดภาษาอังกฤษได้ไหม', phonetic: 'khun-phûut-phaa-sǎa-ang-krìt-dâi-mǎi', french: 'Parlez-vous anglais ?' },
      { thai: 'โทรศัพท์ของผมหาย', phonetic: 'thoo-rá-sàp-khɔ̌ɔng-phǒm-hǎai', french: 'J\'ai perdu mon téléphone (homme)' },
      { thai: 'โทรศัพท์ของดิฉันหาย', phonetic: 'thoo-rá-sàp-khɔ̌ɔng-di-chǎn-hǎai', french: 'J\'ai perdu mon téléphone (femme)' },
      { thai: 'ผมต้องการพูดกับสถานทูต', phonetic: 'phǒm-tɔ̂ng-kaan-phûut-kàp-sà-thǎan-thuut', french: 'Je dois contacter l\'ambassade (homme)' },
      { thai: 'ดิฉันต้องการพูดกับสถานทูต', phonetic: 'di-chǎn-tɔ̂ng-kaan-phûut-kàp-sà-thǎan-thuut', french: 'Je dois contacter l\'ambassade (femme)' }
    ]
  }
];

// Exporter les deux collections
export { thaiLessons, thaiPhrases };