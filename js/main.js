let inactivityTime = function () {
  let timeout;

  // Function to reset the inactivity timer
  function resetTimer() {
    clearTimeout(timeout); // Clear any previous timeout
    timeout = setTimeout(() => {
      window.location.href = 'index.html'; // Redirect to index.html after inactivity
    }, 600000); // Set to 10 minutes (600,000 milliseconds)
  }

  // Listen for user events to reset the timer
  window.onload = resetTimer;             // Reset when the page loads
  document.onmousemove = resetTimer;      // Reset on mouse movement
  document.onkeypress = resetTimer;       // Reset on key press
  document.onclick = resetTimer;          // Reset on click
  document.onscroll = resetTimer;         // Reset on scroll

  // Add other events if needed (e.g., touch events for mobile)
};

// Call the inactivityTime function to start the timer
inactivityTime();




function loadMingzuoDetail(title) {
  const scrollContainer = document.querySelector('.scroll-container')
  const mingzuoContainer = document.querySelector('.mingzuo-container');
  const liushengContainer = document.querySelector('.liusheng-container');
  const chuanrenContainer = document.querySelector('.chuanren-container');
  const secondLayer = document.querySelector('.second-layer');

  scrollContainer.style.display = 'none';
  mingzuoContainer.style.display = 'none';
  liushengContainer.style.display = 'none';
  chuanrenContainer.style.display = 'none';

  const detail = mingZuoDetails[title];
  document.getElementById('mingzuo-detail').style.display = 'flex';
  secondLayer.classList.remove('second-layer-2');

  if (detail) {
    document.getElementById('mingzuo-detail-title').innerText = detail.title;
    document.getElementById('mingzuo-detail-image-1').src = detail.img[0];
    document.getElementById('mingzuo-detail-image-2').src = detail.img[1];
    document.getElementById('mingzuo-detail-text').innerText = detail.text;
  } else {
    console.log('Detail not found');
  }

  handleMingzuoDetail(title);

}

function loadChuanRenDetail(name) {
  const chuanrenContainer = document.querySelector('.chuanren-container');

  chuanrenContainer.style.display = 'none';

  const detail = chuanRenDetails[name];

  document.getElementById('chuanren-detail').style.display = 'flex';

  if(detail) {
    document.getElementById('chuanren-detail-title').innerText = detail.name;
    document.getElementById('chuanren-detail-year').innerText = detail.year;
    document.getElementById('chuanren-description').innerText = detail.description;
    document.getElementById('chuanren-image').src = detail.img;
  } else {
    console.log('Chuanren Detail not found');
  }

  handleChuanRenDetailBtns(name);

}

const chuanRenPinyinNames = [
  "zhangJunQiu",  // 张君秋
  "liShiFang",    // 李世芳
  "liYuFu",       // 李玉芙
  "duJinFang",    // 杜近芳
  "meiBaoJiu",     // 梅葆玖
  "biGuYun",      // 毕谷云
  "chengShuoQiu",  // 程砚秋
  "yanHuiZhu",    // 言慧珠
  "weiLianFang"  // 魏莲芳
];


function createChuanRenBtnEvents(id) {
  document.getElementById(id).addEventListener('click', () => loadChuanRenDetail(id));
}

chuanRenPinyinNames.forEach(name => {
  createChuanRenBtnEvents(name);
});


function handleChuanRenDetailBtns(name) {
  const buttonContainer = document.querySelector('.button-container');

  const currentIndex = chuanRenPinyinNames.indexOf(name);
  buttonContainer.innerHTML = `
        <button class="image-btn" id="chuanRenShangYiGe" onclick="handleChuanRenShanyigeBtn(${currentIndex})">
         <img src='./assets/images/btn-shangyishou-3x.png'>
        </button>
        <button class="image-btn" id="chuanRenXiaYiGe" onclick="handleChuanRenXiayigeBtn(${currentIndex})">
          <img src='./assets/images/btn-xiayishou-3x.png'>
        </button>
        <button class="image-btn" onclick="handleChuanRenFanhuishouyeBtn(4)">
          <img src='./assets/images/btn-fanhui-3x.png'>
        </button>
      `;

  if (name == "zhangJunQiu"){
    document.getElementById("chuanRenShangYiGe").style.display = "none";
  }

  if (name == "weiLianFang") {
    document.getElementById("chuanRenXiaYiGe").style.display = "none";
  }
}

function handleChuanRenShanyigeBtn(currentIndex){
  if (currentIndex > 0) {
    currentIndex--; // Move to the previous index
    const prevName = chuanRenPinyinNames[currentIndex];
    loadChuanRenDetail(prevName);
  } else {
    console.log("Already at the first item.");
  }

}


function handleChuanRenXiayigeBtn(currentIndex){
  if (currentIndex < detailBtns.length - 1) {
    currentIndex++; // Move to the next index
    const nextName = chuanRenPinyinNames[currentIndex];
    loadChuanRenDetail(nextName);
  } else {
    console.log("Already at the last item.");
  }
}

function handleChuanRenFanhuishouyeBtn(num){
  const buttonContainer = document.querySelector('.button-container');
  buttonContainer.innerHTML = `
    <button class="image-btn" onclick="changeTitleImage(1)">
      <img src='./assets/images/btn-shengping-3x.png' alt="Button Shengping">
    </button>
    <button class="image-btn" onclick="changeTitleImage(2)">
      <img src='./assets/images/btn-mingzuo-3x.png' alt="Button Mingzuo">
    </button>
    <button class="image-btn" onclick="changeTitleImage(3)">
      <img src='./assets/images/btn-liusheng-3x.png' alt="Button Liusheng">
    </button>
    <button class="image-btn" onclick="changeTitleImage(4)">
      <img src='./assets/images/btn-chuanren-3x.png' alt="Button Chuanren">
    </button>
  `;
  changeTitleImage(num);
}


// Detail Btns 

const detailBtns = [
  'changEBenyue', 
  'tianNvSaHua', 
  'daiYuZangHua', 
  'maGuXianShou', 
  "muLanCongJun", 
  "baWangBieJi", 
  "luoShen", 
  "lianJinFeng", 
  "taiZhenWaiZhuan", 
  "yuZhouFeng", 
  "fengHuanChao", 
  "kangJinBing",
  "shengSiHen",
  "muGuiYingGuaShuai"
]

function createDetailBtnEvents(id) {
  document.getElementById(id).addEventListener('click', () => loadMingzuoDetail(id));
}

detailBtns.forEach(id => {
  createDetailBtnEvents(id);
});




// JavaScript to dynamically change the title image based on button click window.changeTitleImage = 
function changeTitleImage(buttonNumber) {
  const titleImage = document.getElementById('title-image');
  const scrollContainer = document.querySelector('.scroll-container')
  const mingzuoContainer = document.querySelector('.mingzuo-container');
  const liushengContainer = document.querySelector('.liusheng-container');
  const chuanrenContainer = document.querySelector('.chuanren-container');
  const secondLayer = document.querySelector('.second-layer');
  const audioPlayer = document.querySelector('.audio-player');
  const audio = document.getElementById('audio');

  if(audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  
  
  document.getElementById('mingzuo-detail').style.display = 'none';
  document.getElementById('chuanren-detail').style.display = 'none';

  // Reset visibility of all containers
  scrollContainer.style.display = 'none';
  mingzuoContainer.style.display = 'none';
  liushengContainer.style.display = 'none';
  chuanrenContainer.style.display = 'none';
  audioPlayer.style.display = 'none';
   

  // Change the source of the title image based on the button number
  switch (buttonNumber) {
    case 1:
      titleImage.src = './assets/images/title-shengping-3x.png'; // Change to image 1
      scrollContainer.style.display = 'block';
      secondLayer.classList.remove('second-layer-2');
      scrollContainer.innerHTML = '<img src="./assets/images/tall-image-3x.png" alt="Tall Image">';
      break;
    case 2:
      titleImage.src = './assets/images/title-mingzuo-3x.png'; // Change to image 2
      secondLayer.classList.add('second-layer-2');
      mingzuoContainer.style.display = 'block';
      // scrollContainer.innerHTML = '';
      break;
    case 3:
      titleImage.src = './assets/images/title-liusheng-3x.png'; // Change to image 3
      liushengContainer.style.display = 'block';
      secondLayer.classList.add('second-layer-2');
      // scrollContainer.innerHTML = '';
      break;
    case 4:
      titleImage.src = './assets/images/title-chuanren-3x.png'; // Change to image 4
      chuanrenContainer.style.display = 'block';
      secondLayer.classList.add('second-layer-2');
      // scrollContainer.innerHTML = '';
      break;
    default:
      titleImage.src = './assets/images/title-shengping-3x.png'; // Default to image 1
      scrollContainer.innerHTML = '<img src="./assets/images/tall-image-3x.png" alt="Tall Image">';
  }
}


// Function to reset to the main page
function handleFanhuishouyeBtn(num) {
  // const titleImage = document.getElementById('title-image');
  const buttonContainer = document.querySelector('.button-container'); 

  // // Reset the title image to the default one
  // titleImage.src = './assets/images/title-liusheng-3x.png';

  // Reset the buttons to the main 4 buttons
  buttonContainer.innerHTML = `
    <button class="image-btn" onclick="changeTitleImage(1)">
      <img src='./assets/images/btn-shengping-3x.png' alt="Button Shengping">
    </button>
    <button class="image-btn" onclick="changeTitleImage(2)">
      <img src='./assets/images/btn-mingzuo-3x.png' alt="Button Mingzuo">
    </button>
    <button class="image-btn" onclick="changeTitleImage(3)">
      <img src='./assets/images/btn-liusheng-3x.png' alt="Button Liusheng">
    </button>
    <button class="image-btn" onclick="changeTitleImage(4)">
      <img src='./assets/images/btn-chuanren-3x.png' alt="Button Chuanren">
    </button>
  `;
  changeTitleImage(num);
}

function handleShanyiquBtn(currentIndex) {
  if (currentIndex > 0) {
    currentIndex--; // Move to the previous index
    const prevTitle = detailBtns[currentIndex];
    loadMingzuoDetail(prevTitle);
  } else {
    console.log("Already at the first item.");
  }
  
}

function handleXiayiquBtn(currentIndex) {
  if (currentIndex < detailBtns.length - 1) {
    currentIndex++; // Move to the next index
    const nextTitle = detailBtns[currentIndex];
    loadMingzuoDetail(nextTitle);
  } else {
    console.log("Already at the last item.");
  }
}

function handleMingzuoDetail(title) {
  const buttonContainer = document.querySelector('.button-container');


  let currentIndex = detailBtns.indexOf(title);

  buttonContainer.innerHTML = `
        <button class="image-btn" id="shangYiQu" onclick="handleShanyiquBtn(${currentIndex})">
         <img src='./assets/images/btn-shangyiqu-3x.png'>
        </button>
        <button class="image-btn" id="xiaYiQu" onclick="handleXiayiquBtn(${currentIndex})">
          <img src='./assets/images/btn-xiayiqu-3x.png'>
        </button>
        <button class="image-btn" onclick="handleFanhuishouyeBtn(2)">
          <img src='./assets/images/btn-fanhuishouye-3x.png'>
        </button>
      `;

  if (title == 'changEBenyue') {
    document.getElementById('shangYiQu').style.display = "none";
  };

  if (title == 'muGuiYingGuaShuai') {
    document.getElementById('xiaYiQu').style.display = "none";
  };

}





function handleLiushengDetail() {
  const buttonContainer = document.querySelector('.button-container');
  buttonContainer.innerHTML = `
        <button class="image-btn" onclick="handleShanyigeBtn()">
         <img src='./assets/images/btn-shangyishou-3x.png'>
        </button>
        <button class="image-btn" onclick="handleXiayigeBtn()">
          <img src='./assets/images/btn-xiayishou-3x.png'>
        </button>
        <button class="image-btn" onclick="handleFanhuishouyeBtn()">
          <img src='./assets/images/btn-fanhui-3x.png'>
        </button>
      `;
}


function changeSecondLayerBackgroundImage() {
  const secondLayer = document.querySelector('.second-layer');
  secondLayer.classList.add('second-layer-2');
}


function openPlayer(page) {
  const pageUrl = page + '.html';
  window.location.href = pageUrl;
  const titleImage = document.getElementById('title-image');
  titleImage.src = './assets/images/title-liusheng-3x.png';
}







// Mingzuo detail data
const mingZuoDetails = {
  "changEBenyue": {
    "title": "《嫦娥奔月》",
    "img": ["/assets/images/detailMingZuo/1-change.JPG", "/assets/images/detailMingZuo/2-change.JPG"],
    "text": "《嫦娥奔月》是1915年秋梅兰芳和齐如山、李释戡先生一起根据《淮南子》和《搜神记》中的“羿请不死之药于西王母,嫦娥窃之以奔月”神话而改编的古装戏,也是梅先生创编古装戏的处女作。是年农历九月二十三在北京吉祥园首次贴演。剧情说:后得不死之药,其妻嫦娥窃吞之,羿质问,嫦娥逃,因服药身轻直飞入月宫。在此剧中创造了'花镰舞' 及 '袖舞'。本编记录的【西皮原板】即第十场中“花镰舞”的唱腔:南梆子]则是在第十三场中,梅先生为配合袖舞而设计的。"
  },
  "tianNvSaHua": {
    "title": "《天女散花》",
    "img": ["/assets/images/detailMingZuo/3-tiannv.JPG", "/assets/images/detailMingZuo/4-tiannv.JPG"],
    "text":"此剧系梅兰芳取材于佛教《维摩诘经》里的故事而改编的古装戏。经说:维摩示疾,如来命天女至病室散花,以验结习,天女遵旨携带花篮去维摩室中,把花片纷纷散在诸人身上，佛旨宣毕,转回西方而去。梅先生在此剧(云路》和《散花》两场中,创造使用了绸带舞,配合大段的西皮唱腔及昆曲牌子,驭虚乘风，载歌载舞,身段步法疾徐相间,进退自如。此剧无论唱念歌舞,均须稳重灵活,华彩而庄严,方能显散花妙谛。人谓梅先生此剧是文戏武唱,足证所须功力之深。梅先生于1917年12月1日在北京吉祥园首次上演此剧,后亦成为梅先生早期之代表作。"
  },
  "daiYuZangHua": {
    "title": "《黛玉葬花》",
    "img": ["/assets/images/detailMingZuo/5-daiyu.JPG", "/assets/images/detailMingZuo/6-daiyu.JPG"],
    "text":"此剧是1915年末梅兰芳根据《红楼梦》改编的，为梅先生早期常演的古装戏之一。剧情为:林黛玉夜访宝玉，丫环误拒之，林疑宝玉薄已，心中忧闷。次日，荷锄至园中，偶见落花无主，益感身世飘零,乃赋诗葬花抒发愁怀。值宝玉至，向其表明心迹,复言归于好。1916年冬,梅先生第三次来沪曾五次贴演此剧,后由于场子太癌,故梅先生在中年以后就不常贴演了。然其剧本、唱腔均经精心设计编排，其中颇多引用《红楼梦》原作改写，诗意盎然，与唱腔配合,俨然一体，故此剧演唱需出原著之意境。"
  },
  "maGuXianShou": {
    "title": "《麻姑献寿》",
    "img": ["/assets/images/detailMingZuo/7-magu.JPG", "/assets/images/detailMingZuo/8-magu.JPG"],
    "text":"此剧是1916年初梅兰芳根据清人《调元乐》传奇而编演的古装戏。故事述百花、牡丹、海棠、芍药四仙子邀麻姑同赴西王母蟠桃寿宴，麻姑乃在绛珠河畔以灵芝酿酒献于王母，欢宴歌舞，尽兴而散。1922年梅先生第一次赴港曾于太平剧院演出此剧。1930年访美时,取其中“盘舞”一节作为表演节目,亦备受欢迎。"
  },
  "muLanCongJun": {
    "title": "《木兰从军》",
    "img": ["/assets/images/detailMingZuo/9-mulan.JPG", "/assets/images/detailMingZuo/10-mulan.JPG"],
    "text":"花木兰的英雄故事,很早就在我国民间广为传颂。梅兰芳深喜故事主人公替父从军抵御外侮的爱国主义精神，于1917年3月将其改编成京剧。此剧是梅派戏中，梅先生以小生姿态出现的惟一的一出。由于花木兰是个女扮男装的特定人物，梅先生无论在身段表演或唱腔唱法上，既体现出投笔从戎的男儿气概又不失巾帼英雄之本色。"
  },
  "baWangBieJi": {
    "title": "《霸王别姬》",
    "img": ["/assets/images/detailMingZuo/11-bawang.JPG", "/assets/images/detailMingZuo/12-bawang.JPG"],
    "text":"《霸王别姬》起源于《西汉演义》，至民初“清逸居士”撰写京剧本《楚汉争》。据此，于1921年经齐如山先生重新整理，删繁就简，改编《霸王别姬》京剧本。梅兰芳在数十年的演出过程中又进行了不断的修改，直到晚年对戏文、唱腔又做了改进，使此剧更为完善无缺。剧中梅兰芳饰演虞姬，用艺术手段塑造了中国古代女性端庄淑静、温柔含蓄、高雅大方的仪表姿态。梅兰芳在剧中的“南梆子”、“二六”为主的清婉唱腔。圆润的嗓音韵味醇浓、声腔婉转悠扬，用艺术手段表现出虞姬所具有的品德、意志和力量的典型形象。本剧中梅兰芳设计安排了“剑舞”的场景，通过表演手段，绘声绘色地反映出英雄与美人生死离别的悲壮情景，把观众带到千年古战场的意境之中，既丰富了历史知识，又得到艺术享受。"
  },
  "luoShen": {
    "title": "《洛神》",
    "img": ["/assets/images/detailMingZuo/13-luoshen.JPG", "/assets/images/detailMingZuo/14-luoshen.JPG"],
    "text":"《洛神》一剧是梅兰芳在1923年根据曹植《洛神赋》并参考汪南溟的(洛水悲》所编演的古装戏。故事叙述魏曹植带其兄所赐的玉镂金带枕，归途宿于洛川驿中，夜梦神女宓妃嘱赴洛川相会,曹如约以往,果见宓妃偕众神妃游女共戏川滨。宓告以前缘,二人互通款曲,珍重而别。此剧词句典雅,寓意较深,末场洛川相逢有大段【西皮】的成套唱腔，配以动人的曲牌及身段，载歌载舞,观者如置身诗情画境之中。1955年摄制成彩色影片。"
  },
  "lianJinFeng": {
    "title": "《廉锦枫》",
    "img": ["/assets/images/detailMingZuo/15-lianjin.JPG", "/assets/images/detailMingZuo/16-lianjin.JPG"],
    "text":"《太真外传》取材于唐白居易《长恨歌》，梅兰芳在1925至1926年间根据《长生殿》传奇改编为京剧,分为四本。自《人选》至《梦会》凡十余折,蔚为大观。此剧音乐由徐兰沅、王少卿二位先生精心设计,其中创造了不少新的板式和极为精彩之唱腔。如:头本中之[反四平]及三本中之[二黄碰板三眼]等板式;三本中之高拉低唱的[四平调],[西皮二六]及四本之[反二黄]等唱腔,均在京剧原有的板式及曲调的基础上作了发展。加之其中还编配了许多京昆曲牌，如:[春日景】、[雁儿落]等;安排设计了许多舞蹈身段，如:华清赐浴及霓裳羽衣舞,不仅使传说中的唐明皇与杨贵妃的故事变得非常形象、生动,且对京剧编演连续性的历史传说开创了先例,推进了京剧艺术的发展。"
  },
  "taiZhenWaiZhuan": {
    "title": "《太真外传》",
    "img": ["/assets/images/detailMingZuo/17-taizhen.JPG", "/assets/images/detailMingZuo/18-taizhen.JPG"],
    "text":"梅兰芳在1923年根据李汝珍《镜花缘》小说第十三回“孝女廉锦枫”一章编写的。故事谓:武则天称帝时,落第举子唐敖偕林之洋、多九公飘洋至君子国,适孝女廉锦枫因母病思食海参,在人海采取时为青丘国渔翁吴士公夫妇误擒网中,将其缚于船头意欲转卖,唐敖出资赎救,廉得以人海取参奉母。后廉于海中偶得屹度珠一颗赠唐为报。梅先生在此剧中创造了廉锦枫刺蚌的水中剑舞，并首创旦角唱【反二黄原板】的先例。"
  },
  "yuZhouFeng": {
    "title": "《宇宙锋》",
    "img": ["/assets/images/detailMingZuo/19-yuzhou.JPG", "/assets/images/detailMingZuo/20-yuzhou.JPG"],
    "text": '《宇宙锋》是梅兰芳将传统剧目增益收尾的典型，此剧原为青衣传统剧目，只演《修本金殿》两折，梅兰芳将其补充完整，几十年来不断琢磨提炼,使人物深化，演唱艺术高度融合,成为一出唱念表演极为精深的典型青衣戏。剧情叙述秦二世权臣赵高，畏其亲翁匡洪正直,盗其御赐“字宙锋"刺驾,以谋害其婿匡扶全家。匡家系狱后,赵拟献女进宫为妃,女不从,碎衣毁容装疯,在金殿笑怒骂,临危不惧,终得幸免。全本《宇宙锋》是1928年梅先生开始编演的,晚年常只演“修本”“金殿”二折。'
  },
  "fengHuanChao": {
    "title": "《凤还巢》",
    "img": ["/assets/images/detailMingZuo/21-fenghuan.JPG", "/assets/images/detailMingZuo/22-fenghuan.JPG"],
    "text": '梅兰芳早期演出喜剧《风筝误》，后根据此剧于1928年改编成《凤还巢》一剧。此剧内容错综复杂,为一出悲、欢、离、合,最后以大团圆结束的喜剧。梅兰芳饰演的程雪娥是一位端庄淑静，品貌双全的宦门小姐,言笑举止,极有分寸。剧中程雪娥奉父命“偷窥”公子穆居易一场，是难度较大的表演,也是本剧的重点之一。在其他场次中由于剧情变化,演员要具有忽悲忽喜等多变的面部表情，随至使感情衔接而步步深人剧情,才能把戏演得成功。梅兰芳在此剧中的唱腔艺术体现了中国传统美学原则，具有端庄娴雅的古典美,平和中正,恰到好处。其表演处处出自自然,而又无一腔一式照搬,故能使人耳目全新,毫无刺耳及刺目之感觉。'
  },
  "kangJinBing": {
    "title": "《抗金兵》",
    "img": ["/assets/images/detailMingZuo/23-kangjin.JPG", "/assets/images/detailMingZuo/24-kangjin.JPG"],
    "text": '《抗金兵》是梅兰芳在“九一八事变”后移居上海时,与《生死恨》同时创作的传播爱国思想、激励人民、抵御外侮的历史剧。内容写金兀术侵宋，润州守将韩世忠与夫人梁红玉共退金兵的故事。兀术来犯，韩、梁联合邻镇张俊、刘快之兵大战金兵于金山江上,梁红玉亲操桴鼓助阵,金兵败退,复为王达诱彼人黄天荡，韩、梁合围之,乃获全胜。此剧于1933年3月,梅先生首次上演于上海天蟾舞台,曾由林树森、姜妙香、金少山、萧长华、朱桂芳、刘连荣等名角为之配演。50年代仍与高盛麟、王琴生合演过此剧，唱腔略有修改。'
  },
  "shengSiHen": {
    "title": "《生死恨》",
    "img": ["/assets/images/detailMingZuo/25-sheng.JPG", "/assets/images/detailMingZuo/26-sheng.JPG"],
    "text": '《生死恨》是梅兰芳移居上海后，由齐如山根据明代传奇《易鞋记》改编为京剧。北宋时金人南犯，士人程鹏举与韩玉娘被掳为奴,并强令婚配。韩劝夫逃回故国,事泄被卖于瞿老丈，霍怜之，送其入庵为尼。后程杀敌立功升任襄阳太守,命赵寻持当年失散之鞋遍访玉娘,始悉玉娘历尽磨难而寄居于义母李家。程闻讯赶来,玉娘已一病不起,终成永别。剧本不落俗套,在唱腔、表演、服装、场景方面都有新的创造。剧中塑造了一个古代爱国女性形象,而在胜利来临、夫妻团聚时含恨归泉,感人至深。本剧梅先生在辍演八年重登舞台后,只演过一场,因“纺织夜诉”大段[二黄]颇为费力,以后即交由梅葆玖演出。此剧曾于1948年由艺华影业公司摄制成我国第一部彩色影片，由费穆担任导演。'
  },
  "muGuiYingGuaShuai": {
    "title": "《穆桂英挂帅》",
    "img": ["/assets/images/detailMingZuo/27-mugui.JPG", "/assets/images/detailMingZuo/28-mugui.JPG"],
    "text": '梅兰芳在晚年，为迎接国庆十周年庆典，决定移植并改编豫剧《挂帅》。1958年经中国京剧院马少波付院长推荐陆静岩、袁韵宜两位女作家改编京剧《挂帅》，确定郑亦秋担任导演。经共同商讨研究,剧名定为《穆挂英挂帅》。并与琴师徐兰沅先生和姜凤山先生切磋唱腔设计，使京剧《穆桂英挂帅》改编成功。《穆桂英挂帅》是梅兰芳根据京剧的特点和风格来加以变动和修改，尝试用京剧的程式和表演手法表现穆桂英这一段动人的故事。梅兰芳虽已是六十开外,但下决心要克困难、虚心向豫剧学习，有信心要移植成功。1959年5月25日在国庆十周年前夕，作为献礼项目在北京首场演出。'
  }
}


// Player
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const progressBar = document.getElementById('progressBar');
const volumeControl = document.getElementById('volumeControl');

// Play button functionality
playBtn.addEventListener('click', function () {
  audio.play();
  playBtn.disabled = true; // Disable play button when playing
  pauseBtn.disabled = false; // Enable pause button
});

// Pause button functionality
pauseBtn.addEventListener('click', function () {
  audio.pause();
  playBtn.disabled = false; // Enable play button when paused
  pauseBtn.disabled = true; // Disable pause button
});

// Update progress bar as the music plays
audio.addEventListener('timeupdate', function () {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
});

// Allow users to seek through the music
progressBar.addEventListener('input', function () {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Volume control
volumeControl.addEventListener('input', function () {
  audio.volume = volumeControl.value;
});


// chuanren detail
const chuanRenDetails = {
  "chengShuoQiu": {
    "name": "程砚秋",
    "year": "1904-1958",
    "description": "京剧“四大名旦”之一，在罗瘿公等人的协助下，1919年拜梅兰芳为师，并多次与梅兰芳同台演出。而后根据程砚秋自己的条件发展出了程派唱腔，并排演了大量新剧，如《梨花记》《花舫缘》《鸳鸯冢》《赚文娟》《金锁记》《青霜剑》《红拂传》《文姬归汉》《梅妃》《荒山泪》《春闺梦》《亡蜀鉴》《锁麟囊》等，与梅兰芳并列“四大名旦”。",
    "img": "/assets/images/detailChuanRen/chengShuoQiu.jpg"
  },
  "weiLianFang": {
    "name": "魏莲芳",
    "year": "1910-1998",
    "description": "著名京剧旦角演员，梅派名师。早年入斌庆社学艺，1924年时拜梅兰芳为师，得梅精心传授。1928年19岁时，又拜王瑶卿为师，技艺精进。新中国成立后，经梅兰芳介绍，魏莲芳进入上海戏曲学校任教，学生有杨春霞、李炳淑等。还应邀到中国戏校和济南、大连、哈尔滨等戏校及香港中文大学等传授梅派戏。",
    "img": "/assets/images/detailChuanRen/weiLianFang.jpg"
  },
  "yanHuiZhu": {
    "name": "言慧珠",
    "year": "1919-1966",
    "description": "京剧四大须生之一言菊朋之女，初习程派，后在其父指点下改习梅派，早年师从朱桂芳、徐兰沅等人，1943年在上海拜梅兰芳为师，成为活跃于舞台的梅派中坚力量。1957年后在上海戏曲学校任校长，培养大量传人。",
    "img": "/assets/images/detailChuanRen/yanHuiZhu.jpg"
  },
  "zhangJunQiu": {
    "name": "张君秋",
    "year": "1920-1997",
    "description": "14岁拜李凌枫为师，专攻青衣，嗓音甜润华美，深得尚小云等前辈赏识，1937年随马连良赴上海演出，梅兰芳亲到剧场看戏，而后得以拜师。梅兰芳亲自教授他《霸王别姬》等戏。张君秋在梅派唱腔的基础上，结合四大名旦之特色，发展出了张派唱腔。成为继梅派之后影响力最大、普及程度最高的旦角流派。",
    "img": "/assets/images/detailChuanRen/zhangJunQiu.jpg"
  },
  "liShiFang": {
    "name": "李世芳",
    "year": "1921-1947",
    "description": "父母均为梆子演员，幼入富连成科班学艺，因扮相、嗓音都似梅兰芳，有“小梅兰芳”之称。1936年梅兰芳自沪短暂回京，李世芳得以拜师。后挑梁组班“承芳社”，演出了《霸王别姬》《宇宙锋》《西施》《生死恨》等大量梅派戏，20世纪40年代赴沪演出，又得梅兰芳亲自指授，并师徒合演《金山寺·断桥》。1947年因空难离世，梅兰芳主持为其家属唱了两场义务戏，程砚秋等人均参加。",
    "img": "/assets/images/detailChuanRen/liShiFang.jpg"
  },
  "duJinFang": {
    "name": "杜近芳",
    "year": "1932-2021",
    "description": "幼年随京剧名家律佩芳学习青衣，1945年拜“通天教主”王瑶卿为师，从王幼卿学艺，1949年底经王瑶卿推荐在上海拜梅兰芳为师，受到梅兰芳悉心指教，演出《凤还巢》《霸王别姬》《廉锦枫》等梅派经典剧目，后加入中国京剧院，与李少春、袁世海、叶盛兰并列，排演《野猪林》《白蛇传》《柳荫记》《谢瑶环》《桃花扇》《白毛女》《红色娘子军》等大量新戏，代表了梅派艺术在新中国成立后的传承与发展。",
    "img": "/assets/images/detailChuanRen/duJinFang.jpg"
  },
  "liYuFu": {
    "name": "李玉芙",
    "year": "1938",
    "description": "早年在哈尔滨京剧团学戏，经梅兰芳介绍入北京市戏曲学校学习。1959年毕业到梅兰芳京剧团任演员，拜梅兰芳为师。1960年代表梅剧团参加梅、尚、程、荀四大流派联合专场演出，以一出《贵妃醉酒》，被誉为梅派传人中的新星。她嗓音甜润清脆，表演洒脱大方。后调入北京市实验京剧团任主演，其首演剧目有新编历史剧《雏凤凌空》《正气歌》，现代戏《海棠峪》《风雨千秋》等。以耄耋之年，至今仍在传承梅派艺术。",
    "img": "/assets/images/detailChuanRen/liYuFu.jpeg"
  },
  "biGuYun": {
    "name": "毕谷云",
    "year": "1930-2023",
    "description": "早年在上海师从祁彩芬、林颦卿等人学艺，得拜徐碧云、荀慧生为师，1961年5月，正式拜在梅兰芳门下，成为梅兰芳的最后一个弟子，学习了《贵妃醉酒》《天女散花》《宇宙锋》《断桥》《奇双会》等剧。毕谷云深得梅派艺术精华，在唱腔上传习了梅派唱法，又擅长踩跷，从筱翠花学习各种花旦剧目，是京剧演员一专多能的代表。",
    "img": "/assets/images/detailChuanRen/biGuYun.jpg"
  },
  "meiBaoJiu": {
    "name": "梅葆玖",
    "year": "1934-2016",
    "description": "梅兰芳幼子，1943年首次登台演出《三娘教子》中的薛倚，而后被梅兰芳、福芝芳作为继承人专门培养，聘请王幼卿教授青衣唱法，又请朱琴心教花旦、陶玉芝教把子、朱传茗教昆曲，从茹富兰学武功。在寒暑假参加夏声剧校的各种演出。1950年正式加入梅剧团，父子合演《游园惊梦》《金山寺·断桥》，并演出《玉堂春》《生死恨》《凤还巢》《二进宫》《四郎探母》等各种传统剧目。1961年梅兰芳去世后，梅葆玖成为梅剧团的主演，1964年后不再登台，直到1979年重返舞台，与李万春合演《霸王别姬》，恢复排演《穆桂英挂帅》等梅派经典剧目，成为梅派艺术最重要的传承者。于1995年重建梅兰芳京剧团，2001年排演《大唐贵妃》。晚年广收门徒，魏海敏、李胜素、董圆圆、张晶、胡文阁等梅派传人都是他的弟子，为梅派艺术的传承做了极大贡献。",
    "img": "/assets/images/detailChuanRen/meiBaoJiu.jpg"
  }
};




