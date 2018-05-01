const readlineSync = require('readline-sync');

var player1 = 'Feri';

function entry (player) {
  let ways = ['jobb', 'bal'];
  var way = readlineSync.keyInSelect(ways, 'Ez a játék első része. A jobb vagy bal jaratot választod?');
  console.log('Te most ' + ways[way] + ' jaraton haladsz tovabb.');
  if (way === 0) {
    jobb(player);
  } else if (way === 1) {
    bal(player);
  } else {
    end ();
  }
}

function jobb (player) {
  var minerals = ['arany', 'gyemant', 'szen', 'ezust'];
  var way = readlineSync.keyInSelect(minerals, 'A jobb jarat egy banya lesz, mit akarsz banyasztni?');
}
function bal (player) {
  let ways = ['jobbra', 'balra', 'egyenesen'];
  var way = readlineSync.keyInSelect(ways, 'A bal jaraton egy kincses terkepet talaltal. Viszont az ut amit mutat tele van veszelyel. Merre szeretnel menni?');
  console.log('');
  console.log('Te most ' + ways[way] + ' folytatod az utat.');
  if (way === 0) {
    jobb2(player);
  } else if (way === 1) {
    bal2(player);
  } else if (way === 2) {
    egyenes2(player);
  } else {
    end ();
  }
}

// a bal/egyenes lezárva
function egyenes2 (player) {
  console.log('');
  console.log('Ó-ó, most aztán nyakig ülsz a kulimászba. Belesétáltál egy kígyókkal teli gödörbe. Te biza meghaltál, a játéknak vége.');
}
// a bal/bal lezárva
function bal2 (player) {
  console.log('');
  console.log('Ez az ösvény vissza vezetett az első választási helyre. Szedd össze magad, mert kezdheted előről.');
  entry();
}
// bal/jobb/
function jobb2 (player) {
  let ways = ['egyenesen', 'balra'];
  let way = readlineSync.keyInSelect(ways, 'A jobb ösvényt választottad. Itt újabb 2 lehetőség közül kell választanod. Az egyik út közelebb visz a kincshez. Melyik az?');
  console.log('');
  console.log('Ezuttal ' + ways[way] + ' mentél.');
  if (way === 0) {
    egyenes3(player);
  } else if (way === 1) {
    bal3(player);
  } else {
    end();
  }
}
// bal/jobb/egyenes/befejezve
function egyenes3 (player) {
  let coinToss = ['Fej', 'Írás'];
  let way = readlineSync.keyInSelect(coinToss, 'Ezen az ösvény egyenesen egy házhoz vezetett. Miután beléptél egy boszorkány fogadott, aki egy gonosz varázslattal megmérgezett. Alig maradt időd, de egy alkut ajánlott. Pénzfeldobással dönti el, hogy életben maradhatsz-e. Ha jót választasz ad az ellenszérumból és elvezet a kincsekhez. Ha rosszat, meghalsz. Fej vagy írás?');
  console.log('');
  console.log(coinToss[way] + '. Ez a te választásod. A boszorkány feldobja az érmét...');
  if (way === 0) {
    fej(player);
  } else if (way === 1) {
    iras(player);
  } else {
    end ();
  }
}
function fej () {
  console.log('Rosszat választottál. Te bizony meghaltál. Nagy kár érted. #irony')
}
function iras () {
  console.log('Repül az érme. A boszorkány elkapja és megnézi! Ez bizony írás! A boszorkány megmenti az életed és egyenesen a kincshez vezet. Gratulálok, nyertél!')
}
function bal3 (player) {
  console.log('Egy tisztásra értél és megtaláltad a kincset! Gratulálok, nyertél!');
}
entry(player1);
