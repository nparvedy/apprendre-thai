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

export default defaultImages;