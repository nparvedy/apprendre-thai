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
  },
  {
    id: 6,
    title: 'Au marché',
    icon: '🛍️',
    description: 'Phrases utiles pour négocier et faire vos achats dans les marchés thaïlandais.',
    words: [
      { thai: 'ราคาเท่าไหร่', phonetic: 'raa-khaa-thâo-rai', french: 'Quel est le prix ?' },
      { thai: 'ลดราคาได้ไหม', phonetic: 'lót-raa-khaa-dâi-mǎi', french: 'Pouvez-vous faire une réduction ?' },
      { thai: 'แพงเกินไป', phonetic: 'phɛɛng-gəən-pai', french: 'C\'est trop cher' },
      { thai: 'ขอดูอันนั้น', phonetic: 'khɔ̌ɔ-duu-an-nán', french: 'Je peux voir celui-là ?' },
      { thai: 'มีขนาดอื่นไหม', phonetic: 'mii-khà-nàat-ʉ̀ʉn-mǎi', french: 'Avez-vous d\'autres tailles ?' },
      { thai: 'มีสีอื่นไหม', phonetic: 'mii-sǐi-ʉ̀ʉn-mǎi', french: 'Avez-vous d\'autres couleurs ?' },
      { thai: 'ของนี้ทำจากอะไร', phonetic: 'khɔ̌ɔng-níi-tham-jàak-à-rai', french: 'En quoi est fait cet article ?' },
      { thai: 'ฉันซื้อ', phonetic: 'chǎn-sʉ́ʉ', french: 'Je l\'achète' },
      { thai: 'ฉันไม่ซื้อ', phonetic: 'chǎn-mâi-sʉ́ʉ', french: 'Je ne l\'achète pas' },
      { thai: 'มีของที่ระลึกไหม', phonetic: 'mii-khɔ̌ɔng-thîi-rá-lʉ́k-mǎi', french: 'Avez-vous des souvenirs ?' },
      { thai: 'ขอถุงใส่ด้วย', phonetic: 'khɔ̌ɔ-thǔng-sài-dûai', french: 'Un sac, s\'il vous plaît' },
      { thai: 'รับเงินสดไหม', phonetic: 'ráp-ngən-sòt-mǎi', french: 'Acceptez-vous les espèces ?' },
      { thai: 'ของแท้ใช่ไหม', phonetic: 'khɔ̌ɔng-thɛ́ɛ-châi-mǎi', french: 'Est-ce authentique ?' },
      { thai: 'สินค้าพื้นเมือง', phonetic: 'sǐn-kháa-phʉ́ʉn-mʉang', french: 'Produits locaux' },
      { thai: 'ซื้อของฝาก', phonetic: 'sʉ́ʉ-khɔ̌ɔng-fàak', french: 'Acheter des cadeaux/souvenirs' }
    ]
  },
  {
    id: 7,
    title: 'À la plage',
    icon: '🏖️',
    description: 'Expressions pratiques pour profiter de vos journées sur les magnifiques plages thaïlandaises.',
    words: [
      { thai: 'ชายหาดสวยมาก', phonetic: 'chaai-hàat-sǔai-mâak', french: 'La plage est très belle' },
      { thai: 'ทะเลสวย', phonetic: 'thá-lee-sǔai', french: 'La mer est belle' },
      { thai: 'น้ำอุ่นไหม', phonetic: 'náam-ùn-mǎi', french: 'L\'eau est-elle chaude ?' },
      { thai: 'ว่ายน้ำได้ไหม', phonetic: 'wâai-náam-dâi-mǎi', french: 'Peut-on nager ici ?' },
      { thai: 'เช่าเตียงผ้าใบได้ที่ไหน', phonetic: 'châo-tiang-phâa-bai-dâi-thîi-nǎi', french: 'Où puis-je louer une chaise longue ?' },
      { thai: 'เช่าร่มชายหาด', phonetic: 'châo-rôm-chaai-hàat', french: 'Louer un parasol' },
      { thai: 'กันแดด', phonetic: 'kan-dɛ̀ɛt', french: 'Crème solaire' },
      { thai: 'อันตรายไหม', phonetic: 'an-tà-raai-mǎi', french: 'Est-ce dangereux ?' },
      { thai: 'มีฉลามไหม', phonetic: 'mii-chà-lǎam-mǎi', french: 'Y a-t-il des requins ?' },
      { thai: 'ระวังกระแสน้ำ', phonetic: 'rá-wang-krà-sɛ̌ɛ-náam', french: 'Attention aux courants' },
      { thai: 'ดำน้ำที่ไหนสวย', phonetic: 'dam-náam-thîi-nǎi-sǔai', french: 'Où est le meilleur endroit pour faire de la plongée ?' },
      { thai: 'เช่าอุปกรณ์ดำน้ำ', phonetic: 'châo-ù-pà-kɔɔn-dam-náam', french: 'Louer du matériel de plongée' },
      { thai: 'พระอาทิตย์ตก', phonetic: 'phrá-aa-thít-tòk', french: 'Coucher de soleil' },
      { thai: 'เล่นวอลเลย์บอล', phonetic: 'lên-wɔɔ-lee-bɔɔn', french: 'Jouer au volleyball' },
      { thai: 'นวดชายหาด', phonetic: 'nûat-chaai-hàat', french: 'Massage sur la plage' }
    ]
  },
  {
    id: 8,
    title: 'Activités et loisirs',
    icon: '🎯',
    description: 'Vocabulaire utile pour parler de vos loisirs et planifier des activités en Thaïlande.',
    words: [
      { thai: 'คุณชอบทำอะไรในเวลาว่าง', phonetic: 'khun-chɔ̂ɔp-tham-à-rai-nai-wee-laa-wâang', french: 'Qu\'aimez-vous faire pendant votre temps libre ?' },
      { thai: 'ฉันชอบเที่ยว', phonetic: 'chǎn-chɔ̂ɔp-thîao', french: 'J\'aime voyager' },
      { thai: 'เล่นกีฬา', phonetic: 'lên-kii-laa', french: 'Faire du sport' },
      { thai: 'ดูหนัง', phonetic: 'duu-nǎng', french: 'Regarder des films' },
      { thai: 'ฟังเพลง', phonetic: 'fang-phleeng', french: 'Écouter de la musique' },
      { thai: 'อ่านหนังสือ', phonetic: 'àan-nǎng-sʉ̌ʉ', french: 'Lire des livres' },
      { thai: 'ถ่ายรูป', phonetic: 'thàai-rûup', french: 'Prendre des photos' },
      { thai: 'เต้นรำ', phonetic: 'tên-ram', french: 'Danser' },
      { thai: 'เดินทางไกล', phonetic: 'dəən-thaang-klai', french: 'Faire de la randonnée' },
      { thai: 'ตกปลา', phonetic: 'tòk-plaa', french: 'Pêcher' },
      { thai: 'ดำน้ำ', phonetic: 'dam-náam', french: 'Plonger' },
      { thai: 'เล่นกอล์ฟ', phonetic: 'lên-kɔ́ɔp', french: 'Jouer au golf' },
      { thai: 'ปีนเขา', phonetic: 'piin-khǎo', french: 'Faire de l\'escalade' },
      { thai: 'ขี่จักรยาน', phonetic: 'khìi-jàk-krà-yaan', french: 'Faire du vélo' },
      { thai: 'ทำอาหาร', phonetic: 'tham-aa-hǎan', french: 'Cuisiner' },
      { thai: 'วาดรูป', phonetic: 'wâat-rûup', french: 'Dessiner/Peindre' }
    ]
  },
  {
    id: 9,
    title: 'Expressions de politesse',
    icon: '🙏',
    description: 'Les formules de politesse indispensables pour faire preuve de respect selon la culture thaïlandaise.',
    words: [
      { thai: 'ขอบคุณมาก', phonetic: 'kɔ̀ɔp-khun-mâak', french: 'Merci beaucoup' },
      { thai: 'ขอโทษ', phonetic: 'khɔ̌ɔ-thôot', french: 'Excusez-moi/Pardon' },
      { thai: 'ไม่เป็นไร', phonetic: 'mâi-pen-rai', french: 'Ce n\'est pas grave/De rien' },
      { thai: 'ขอรบกวน', phonetic: 'khɔ̌ɔ-róp-kuan', french: 'Puis-je vous déranger ?' },
      { thai: 'ยินดีที่ได้รู้จัก', phonetic: 'yin-dii-thîi-dâi-rúu-jàk', french: 'Ravi(e) de vous rencontrer' },
      { thai: 'แล้วพบกันใหม่', phonetic: 'lɛ́ɛo-phóp-kan-mài', french: 'À la prochaine' },
      { thai: 'โชคดี', phonetic: 'chôok-dii', french: 'Bonne chance' },
      { thai: 'ขอให้มีความสุข', phonetic: 'khɔ̌ɔ-hâi-mii-khwaam-sùk', french: 'Je vous souhaite du bonheur' },
      { thai: 'ขอให้เดินทางปลอดภัย', phonetic: 'khɔ̌ɔ-hâi-dəən-thaang-plɔ̀ɔt-phai', french: 'Bon voyage' },
      { thai: 'ขอให้หายเร็วๆ', phonetic: 'khɔ̌ɔ-hâi-hǎai-reo-reo', french: 'Prompt rétablissement' },
      { thai: 'ยินดีต้อนรับ', phonetic: 'yin-dii-tɔ̂ɔn-ráp', french: 'Bienvenue' },
      { thai: 'เชิญข้างใน', phonetic: 'chəən-khâang-nai', french: 'Je vous en prie, entrez' },
      { thai: 'เชิญนั่ง', phonetic: 'chəən-nâng', french: 'Je vous en prie, asseyez-vous' },
      { thai: 'รบกวนครับ/ค่ะ', phonetic: 'róp-kuan-khráp/khâ', french: 'Excusez-moi (pour attirer l\'attention)' },
      { thai: 'ขอบคุณสำหรับทุกสิ่ง', phonetic: 'kɔ̀ɔp-khun-sǎm-ràp-thúk-sìng', french: 'Merci pour tout' },
      { thai: 'ขอบคุณล่วงหน้า', phonetic: 'kɔ̀ɔp-khun-lûang-nâa', french: 'Merci d\'avance' }
    ]
  },
  {
    id: 10,
    title: 'Santé et bien-être',
    icon: '🏥',
    description: 'Phrases essentielles pour exprimer vos problèmes de santé et communiquer avec le personnel médical.',
    words: [
      { thai: 'ฉันรู้สึกไม่สบาย', phonetic: 'chǎn-rúu-sʉ̀k-mâi-sà-baai', french: 'Je ne me sens pas bien' },
      { thai: 'ฉันเป็นไข้', phonetic: 'chǎn-pen-khâi', french: 'J\'ai de la fièvre' },
      { thai: 'ฉันปวดหัว', phonetic: 'chǎn-pùat-hǔa', french: 'J\'ai mal à la tête' },
      { thai: 'ฉันปวดท้อง', phonetic: 'chǎn-pùat-thɔ́ɔng', french: 'J\'ai mal au ventre' },
      { thai: 'ฉันปวดฟัน', phonetic: 'chǎn-pùat-fan', french: 'J\'ai mal aux dents' },
      { thai: 'ฉันมีแผล', phonetic: 'chǎn-mii-phlɛ̌ɛ', french: 'J\'ai une blessure' },
      { thai: 'ฉันเป็นแพ้', phonetic: 'chǎn-pen-phɛ́ɛ', french: 'J\'ai une allergie' },
      { thai: 'ฉันแพ้ยา', phonetic: 'chǎn-phɛ́ɛ-yaa', french: 'J\'ai une allergie aux médicaments' },
      { thai: 'ฉันแพ้อาหารทะเล', phonetic: 'chǎn-phɛ́ɛ-aa-hǎan-thá-lee', french: 'J\'ai une allergie aux fruits de mer' },
      { thai: 'ฉันต้องการไปโรงพยาบาล', phonetic: 'chǎn-tɔ̂ng-kaan-pai-roong-phá-yaa-baan', french: 'J\'ai besoin d\'aller à l\'hôpital' },
      { thai: 'ฉันต้องการพบหมอ', phonetic: 'chǎn-tɔ̂ng-kaan-phóp-mɔ̌ɔ', french: 'J\'ai besoin de voir un médecin' },
      { thai: 'ฉันมียาประจำตัว', phonetic: 'chǎn-mii-yaa-prà-jam-tuua', french: 'J\'ai des médicaments personnels' },
      { thai: 'ฉันต้องการใบสั่งยา', phonetic: 'chǎn-tɔ̂ng-kaan-bai-sàng-yaa', french: 'J\'ai besoin d\'une ordonnance' },
      { thai: 'ฉันต้องการพักผ่อน', phonetic: 'chǎn-tɔ̂ng-kaan-phák-phɔ̀n', french: 'J\'ai besoin de me reposer' },
      { thai: 'ฉันมีประกันสุขภาพ', phonetic: 'chǎn-mii-prà-kan-sùk-khà-phâap', french: 'J\'ai une assurance santé' },
      { thai: 'เจ็บตรงนี้', phonetic: 'jèp-trong-níi', french: 'J\'ai mal ici' }
    ]
  },
  {
    id: 11,
    title: 'Météo et saisons',
    icon: '🌦️',
    description: 'Expressions pour parler du temps qu\'il fait et des différentes saisons en Thaïlande.',
    words: [
      { thai: 'วันนี้อากาศเป็นอย่างไร', phonetic: 'wan-níi-aa-kàat-pen-yàang-rai', french: 'Quel temps fait-il aujourd\'hui ?' },
      { thai: 'อากาศร้อน', phonetic: 'aa-kàat-rɔ́ɔn', french: 'Il fait chaud' },
      { thai: 'อากาศเย็น', phonetic: 'aa-kàat-yen', french: 'Il fait frais' },
      { thai: 'อากาศหนาว', phonetic: 'aa-kàat-nǎao', french: 'Il fait froid' },
      { thai: 'ฝนตก', phonetic: 'fǒn-tòk', french: 'Il pleut' },
      { thai: 'แดดออก', phonetic: 'dɛ̀ɛt-ɔ̀ɔk', french: 'Il y a du soleil' },
      { thai: 'มีเมฆมาก', phonetic: 'mii-mêek-mâak', french: 'C\'est très nuageux' },
      { thai: 'มีลมแรง', phonetic: 'mii-lom-rɛɛng', french: 'Il y a beaucoup de vent' },
      { thai: 'อากาศชื้น', phonetic: 'aa-kàat-chʉ́ʉn', french: 'C\'est humide' },
      { thai: 'อุณหภูมิเท่าไหร่', phonetic: 'ù-nà-phuu-mi-thâo-rài', french: 'Quelle est la température ?' },
      { thai: 'ฤดูร้อน', phonetic: 'rʉ́-duu-rɔ́ɔn', french: 'Saison chaude/Été' },
      { thai: 'ฤดูฝน', phonetic: 'rʉ́-duu-fǒn', french: 'Saison des pluies' },
      { thai: 'ฤดูหนาว', phonetic: 'rʉ́-duu-nǎao', french: 'Saison fraîche/Hiver' },
      { thai: 'พยากรณ์อากาศวันนี้', phonetic: 'phá-yaa-kɔɔn-aa-kàat-wan-níi', french: 'Les prévisions météo d\'aujourd\'hui' },
      { thai: 'ฝนจะหยุดเมื่อไหร่', phonetic: 'fǒn-jà-yùt-mʉ̂a-rài', french: 'Quand la pluie va-t-elle s\'arrêter ?' },
      { thai: 'ระวังน้ำท่วม', phonetic: 'rá-wang-náam-thûam', french: 'Attention aux inondations' }
    ]
  },
  {
    id: 12,
    title: 'Technologie et communication',
    icon: '📱',
    description: 'Vocabulaire moderne pour parler de technologie et rester connecté pendant votre séjour.',
    words: [
      { thai: 'อินเทอร์เน็ต', phonetic: 'in-təə-nét', french: 'Internet' },
      { thai: 'วายฟาย', phonetic: 'waai-faai', french: 'Wi-Fi' },
      { thai: 'รหัสผ่าน', phonetic: 'rá-hàt-phàan', french: 'Mot de passe' },
      { thai: 'มือถือ', phonetic: 'mʉʉ-thʉ̌ʉ', french: 'Téléphone portable' },
      { thai: 'แบตเตอรี่', phonetic: 'bɛɛt-təə-rîi', french: 'Batterie' },
      { thai: 'ชาร์จ', phonetic: 'châat', french: 'Charger' },
      { thai: 'ซิมการ์ด', phonetic: 'sim-kaat', french: 'Carte SIM' },
      { thai: 'เครือข่าย', phonetic: 'khrʉa-khàai', french: 'Réseau' },
      { thai: 'แอป', phonetic: 'ɛ́p', french: 'Application' },
      { thai: 'ดาวน์โหลด', phonetic: 'daao-lôot', french: 'Télécharger' },
      { thai: 'ส่งอีเมล', phonetic: 'sòng-ii-mee', french: 'Envoyer un e-mail' },
      { thai: 'วิดีโอคอล', phonetic: 'wí-dii-oo-khɔɔ', french: 'Appel vidéo' },
      { thai: 'อัพเดท', phonetic: 'áp-dèet', french: 'Mettre à jour' },
      { thai: 'คอมพิวเตอร์', phonetic: 'khɔɔm-phiu-təə', french: 'Ordinateur' },
      { thai: 'แท็บเล็ต', phonetic: 'thɛ́p-lét', french: 'Tablette' },
      { thai: 'แบ่งปันสัญญาณ', phonetic: 'bɛ̀ng-pan-sǎn-yaan', french: 'Partager la connexion (hotspot)' },
      { thai: 'ล่าม', phonetic: 'lâam', french: 'Traducteur (personne)' }
    ]
  },
  {
    id: 13,
    title: 'Culture et coutumes',
    icon: '🏮',
    description: 'Expressions liées aux traditions et coutumes thaïlandaises pour comprendre et respecter la culture locale.',
    words: [
      { thai: 'ไหว้', phonetic: 'wâi', french: 'Salut thaïlandais (geste)' },
      { thai: 'พระพุทธศาสนา', phonetic: 'phrá-phút-thá-sàat-sà-nǎa', french: 'Bouddhisme' },
      { thai: 'พระภิกษุ', phonetic: 'phrá-phík-sù', french: 'Moine bouddhiste' },
      { thai: 'แม่ชี', phonetic: 'mɛ̂ɛ-chii', french: 'Nonne bouddhiste' },
      { thai: 'ทำบุญ', phonetic: 'tham-bun', french: 'Faire une offrande/acte méritoire' },
      { thai: 'สวดมนต์', phonetic: 'sùat-mon', french: 'Prier/Réciter des mantras' },
      { thai: 'เทศกาล', phonetic: 'thêet-sà-kaan', french: 'Festival' },
      { thai: 'ประเพณี', phonetic: 'prà-phee-nii', french: 'Tradition' },
      { thai: 'วัฒนธรรม', phonetic: 'wát-thá-ná-tham', french: 'Culture' },
      { thai: 'สงกรานต์', phonetic: 'sǒng-kraan', french: 'Songkran (Nouvel An thaï)' },
      { thai: 'ลอยกระทง', phonetic: 'lɔɔi-krà-thong', french: 'Loy Krathong (festival des lumières)' },
      { thai: 'นวดแผนไทย', phonetic: 'nûat-phɛ̌ɛn-thai', french: 'Massage thaï traditionnel' },
      { thai: 'มวยไทย', phonetic: 'muai-thai', french: 'Boxe thaïlandaise' },
      { thai: 'อาหารเผ็ด', phonetic: 'aa-hǎan-phèt', french: 'Nourriture épicée' },
      { thai: 'พระราชา', phonetic: 'phrá-raa-chaa', french: 'Roi' },
      { thai: 'พระมหากษัตริย์', phonetic: 'phrá-má-hǎa-kà-sàt', french: 'Monarchie' }
    ]
  },
  {
    id: 14,
    title: 'Nature et environnement',
    icon: '🌴',
    description: 'Vocabulaire pour apprécier la diversité naturelle de la Thaïlande et ses paysages spectaculaires.',
    words: [
      { thai: 'ป่า', phonetic: 'pàa', french: 'Forêt' },
      { thai: 'ภูเขา', phonetic: 'phuu-khǎo', french: 'Montagne' },
      { thai: 'น้ำตก', phonetic: 'náam-tòk', french: 'Cascade' },
      { thai: 'แม่น้ำ', phonetic: 'mɛ̂ɛ-náam', french: 'Rivière' },
      { thai: 'ทะเล', phonetic: 'thá-lee', french: 'Mer' },
      { thai: 'เกาะ', phonetic: 'kɔ̀', french: 'Île' },
      { thai: 'ชายหาด', phonetic: 'chaai-hàat', french: 'Plage' },
      { thai: 'อุทยานแห่งชาติ', phonetic: 'ù-thá-yaan-hɛ̀ng-châat', french: 'Parc national' },
      { thai: 'สัตว์ป่า', phonetic: 'sàt-pàa', french: 'Animaux sauvages' },
      { thai: 'ช้าง', phonetic: 'cháang', french: 'Éléphant' },
      { thai: 'ลิง', phonetic: 'ling', french: 'Singe' },
      { thai: 'ทางเดินป่า', phonetic: 'thaang-dəən-pàa', french: 'Sentier de randonnée' },
      { thai: 'พระอาทิตย์ขึ้น', phonetic: 'phrá-aa-thít-khʉ̂n', french: 'Lever du soleil' },
      { thai: 'พระอาทิตย์ตก', phonetic: 'phrá-aa-thít-tòk', french: 'Coucher du soleil' },
      { thai: 'อนุรักษ์', phonetic: 'à-nú-rák', french: 'Conservation' },
      { thai: 'ระบบนิเวศ', phonetic: 'rá-bòp-ní-wêet', french: 'Écosystème' }
    ]
  },
  {
    id: 15,
    title: 'Éducation et apprentissage',
    icon: '📚',
    description: 'Expressions utiles pour parler d\'éducation, d\'apprentissage et échanger sur les connaissances.',
    words: [
      { thai: 'ภาษา', phonetic: 'phaa-sǎa', french: 'Langue' },
      { thai: 'เรียนภาษาไทย', phonetic: 'rian-phaa-sǎa-thai', french: 'Apprendre le thaï' },
      { thai: 'พูดช้าๆ ได้ไหม', phonetic: 'phûut-cháa-cháa-dâi-mǎi', french: 'Pouvez-vous parler plus lentement ?' },
      { thai: 'ช่วยสอนฉันหน่อย', phonetic: 'chûai-sɔ̌ɔn-chǎn-nɔ̀i', french: 'Pouvez-vous m\'apprendre ?' },
      { thai: 'นี่เรียกว่าอะไร', phonetic: 'nîi-rîak-wâa-à-rai', french: 'Comment appelle-t-on ça ?' },
      { thai: 'คำนี้แปลว่าอะไร', phonetic: 'kham-níi-plɛɛ-wâa-à-rai', french: 'Que signifie ce mot ?' },
      { thai: 'ช่วยเขียนให้ฉันดู', phonetic: 'chûai-khǐan-hâi-chǎn-duu', french: 'Pouvez-vous l\'écrire pour moi ?' },
      { thai: 'โรงเรียน', phonetic: 'roong-rian', french: 'École' },
      { thai: 'มหาวิทยาลัย', phonetic: 'má-hǎa-wít-thá-yaa-lai', french: 'Université' },
      { thai: 'นักเรียน', phonetic: 'nák-rian', french: 'Élève' },
      { thai: 'นักศึกษา', phonetic: 'nák-sʉ̀k-sǎa', french: 'Étudiant' },
      { thai: 'อาจารย์', phonetic: 'aa-jaan', french: 'Professeur/Enseignant' },
      { thai: 'หนังสือ', phonetic: 'nǎng-sʉ̌ʉ', french: 'Livre' },
      { thai: 'สมุด', phonetic: 'sà-mùt', french: 'Cahier' },
      { thai: 'ฝึกฝน', phonetic: 'fʉ̀k-fǒn', french: 'S\'entraîner/Pratiquer' },
      { thai: 'เข้าใจ', phonetic: 'khâo-jai', french: 'Comprendre' }
    ]
  }
];

// Exporter les deux collections
export { thaiLessons, thaiPhrases };