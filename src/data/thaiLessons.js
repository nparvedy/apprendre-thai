/**
 * Liste des leçons de vocabulaire thaï
 * Organisée par catégories avec phonétique et traduction française
 */

const thaiLessons = [
  {
    id: 1,
    title: 'Salutations de base',
    icon: '👋',
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

export default thaiLessons;