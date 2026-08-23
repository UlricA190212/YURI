function searchBooks() {

    let input = document.getElementById("searchInput");

    let filter = input.value.toLowerCase();

    let cards = document.getElementsByClassName("book-card");

    for (let i = 0; i < cards.length; i++) {

        let titleElement =
            cards[i].getElementsByTagName("h2")[0];

        if (!titleElement) continue;

        let text =
            titleElement.textContent || titleElement.innerText;

        if (text.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function openBook(id) {
    const book = books[id];
    if (!book) return;

    document.getElementById("modalTitle").textContent = book.title;
    document.getElementById("modalAuthor").innerHTML = "作者：" + book.author;
    document.getElementById("modalGenre").innerHTML = "類型：" + book.genre;
    document.getElementById("modalRating").innerHTML = "推薦：" + book.rating;
    document.getElementById("modalCollection").innerHTML = "藏書：" + book.collection;
    document.getElementById("modalReview").innerHTML = book.review;

    // ⭐ 重點：背景圖
    const modal = document.getElementById("modalContent");
    modal.style.backgroundImage = `url('${book.cover}')`;
    modal.style.backgroundSize = "cover";
    modal.style.backgroundPosition = "center";

    document.getElementById("bookModal").style.display = "block";
}

function closeBook() {
    document.getElementById("bookModal").style.display = "none";
  
}

window.addEventListener("click", function(event) {

    let modal = document.getElementById("bookModal");

    if (event.target == modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeBook();
    }
});

function openBook(id) {
    window.location.href = "book.html?id=" + id;
}

const books = {

  wataren: {
    title: "我們不可能成為戀人！絕對不行。（※似乎可行？）",
    author: "みかみてれん",
    genre: "校園、後宮、三角戀、修羅場",
    rating: "★★★★★",
    collection: "1~8小說、第7集漫畫(2本)、SS集小說、短集篇小說",
    review: "一群有趣的女孩子們。百合後宮番，屑粉毛被美少女們玩弄的故事",
  },

  shinokoi: {
    title: "志乃與戀",
    author: "千種みのり",
    genre: "青春、甜文、校園、日常",
    rating: "★★★★★",
    collection: "future小說",
    review: "傳教成功率極高，色色萬歲。"
  },

  adashima: {
    title: "安達與島村",
    author: "入間人間",
    genre: "校園、戀愛",
    rating: "★★★★★",
    collection: "0、掛軸",
    review: "安達超麻煩（褒意），請趕快結婚。"
  },

  weeklymeeting: {
    title: "我買下了與她的每週密會",
    author: "羽田宇佐",
    genre: "校園、日常、戀愛、室友、18+",
    rating: "★★★★★",
    collection: "1~7小說（第4集特裝版）",
    review: "仙台是宮城的，宮城死嘴硬，怎麼還沒交往我就問。"
  },

  imouto: {
    title: "心上人的妹妹",
    author: "犬甘あんず",
    genre: "校園、日常、三角戀、修羅場",
    rating: "★★★★★",
    collection: "1~3首刷特典小說",
    review: "搞半天結果是我全都要嗎？！"
  },

  hatsukoi: {
    title: "她的女友與越界的初戀",
    author: "Akeo",
    genre: "校園、日常、修羅場",
    rating: "★★★★★",
    collection: "1小說",
    review: "據說不是三角戀，是四角戀。女主覺醒腹黑屬性"
  },
  
 人妻教師: {
    title: "人妻教師與班上的女高中生陷入戀愛",
    author: "入間人間",
    genre: "校園、日常、背德、出軌、師生、18+",
    rating: "★★★★★",
    collection: "1小說",
    review: "背德感好重，好喜歡"
  },
  冬歌同學: {
    title: "隔壁的冬歌同學只在意我",
    author: "白川",
    genre: "校園、日常、救贖?",
    rating: "★★★★",
    collection: "1~2小說",
    review: " 台灣作者!者本讀起來比夏日計畫親切，兩人的互動很有趣"
  },
  夏日計畫: {
    title: "夏日計畫",
    author: "白川",
    genre: "校園、日常、三角戀、魔法、穿越",
    rating: "★★★",
    collection: "1~3小說",
    review: " 異世界小複雜設定，動太多腦。腦袋要燒起來了"
  },
  來自深水: {
    title: "來自深水",
    author: "貓草",
    genre: "校園、職場、救贖、非人?、重生",
    rating: "★★★★★",
    collection: "小說",
    review: "我哭"
  },
  因為你是第一次: {
    title: "因為你是第一次",
    author: "琉璃",
    genre: "憂鬱、戀愛、救贖、18+",
    rating: "★★★★★",
    collection: "小說",
    review: "台灣作家!第一次接觸GL作品就是這本書，看到哭，是有關憂鬱症主題相關的作品"
  },
  惡劣青梅: {
    title: "敗給性格惡劣的天才兒時玩伴，初體驗全部被她奪走了",
    author: " 犬甘あんず",
    genre: "校園、日常、服從、18+",
    rating: "★★★★",
    collection: "1~3小說",
    review: "就......看女主被青梅欺負啊，我覺得沒有犬甘老師的第二部妹妹那個好看"
  },
  星光燦爛: {
    title: "今晚，星光依然燦爛",
    author: "非逆",
    genre: "校園、日常、背德、師生、18+",
    rating: "★★★★★",
    collection: "小說",
    review: "每次都是文科老師出事:)一直背學生瘋狂進攻"
  },
  閃爍光芒: {
    title: "在你眼底閃爍的光芒",
    author: "非逆",
    genre: "校園、日常、偶像?",
    rating: "★★★★",
    collection: "小說",
    review: "偶像pa我不熟"
  },
  綠色女同: {
    title: "我在意的對象並不是男人",
    author: "新井すみこ",
    genre: "校園、日常、音樂",
    rating: "★★★★★",
    collection: "1~3漫畫",
    review: "看了心情好的漫畫，也有搞笑，但不及不良少女:)"
  },
  戀上百合101天: {
    title: "戀上百合101天",
    author: "ムロマキ",
    genre: "戀愛、日常、短篇",
    rating: "★★★★★",
    collection: "1~3漫畫",
    review: "看了心情好的漫畫2.0，就兩個字-好吃"
  },
  100: {
    title: "100天後盛開的百合",
    author: "ムロマキ",
    genre: "戀愛、日常、短篇",
    rating: "★★★★★",
    collection: "漫畫",
    review: "看了心情好的漫畫3.0，就一個字-香。她的續作就是戀上百合101天"
  },
  夏日檸檬: {
    title: "夏日與檸檬與重疊世界",
    author: "Ru",
    genre: "救贖、死亡",
    rating: "★★★★★",
    collection: "漫畫",
    review: "我是被聳動的介紹嚇到買來看的，我只能說這麼多了:)"
  },
  脫離日常後: {
    title: "脫離日常後",
    author: "雪子",
    genre: "戀愛、日常、短篇",
    rating: "★★★★★",
    collection: "漫畫",
    review: "輕鬆看:)甜甜的。雪子老師的畫風好好看!"
  },
  恰如官方特輯: {
    title: "恰如細語般的戀歌官方創作集",
    author: "竹嶋えく",
    genre: "戀愛、日常、短篇",
    rating: "★★★★★",
    collection: "漫畫",
    review: " 雪子老師也有畫喔~這本是官方邀請各繪師來幫恰如畫短篇.......大概是醬"
  },
  女神: {
    title: "我的女神今天依然完美",
    author: "川內",
    genre: "戀愛、日常、短篇",
    rating: "★★★★★",
    collection: "1~2漫畫",
    review: "就是同個世界然後在不同地方有不同的百合cp的故事:)第二集最後有色色圖"
  },
   吸血鬼與女僕: {
    title: "吸血鬼與女僕",
    author: "ざんか",
    genre: "戀愛、日常、短篇、吸血鬼、女僕",
    rating: "★★★★",
    collection: "1~2漫畫",
    review: "主要是吸血鬼很可愛，然後跟女僕私奔啦"
  },
  MT: {
    title: "Madder & Teal",
    author: "海塩子",
    genre: "戀愛、室友、日常、短篇、音樂",
    rating: "★★★★★",
    collection: "1~2漫畫",
    review: "海塩子老師本人超正!雖然都是輕鬆小日常短篇，但劇情都有再推進，後續可以在IG或脆上都有在更新"
  },
  上依那牡丹: {
    title: "上依那牡丹，醉姿如百合",
    author: "塀",
    genre: "戀愛、宿舍、日常、喝酒",
    rating: "★★★★★",
    collection: "1漫畫",
    review: "可以看這篇來增進酒類知識，台灣女同張景嵐持續發力中，目標郡上學姊，使用道具:18天生啤、牛舌餅。動畫還不錯看:)"
  },
  願那含羞的女孩眷戀於我: {
    title: "願那含羞的女孩眷戀於我",
    author: "千葉らき",
    genre: "校園、日常",
    rating: "★★★★★",
    collection: "1漫畫",
    review: "青澀校園戀愛番，兩個人都可可愛愛的。原作出到第二集就完結了，總之看得姨母笑不停"
  },
  只想在床上沉淪: {
    title: "只想在床上沉淪，凝望天使的睡顏",
    author: "上栖綴人",
    genre: "校園、日常、R-18、同居",
    rating: "★★★★★",
    collection: "小說",
    review: " 千種老師的封面與插圖超香，劇情超乎想像的展開；不負R-18的名號:)"
  },
    披著狼皮的羊公主: {
    title: "披著狼皮的羊公主",
    author: "ミト",
    genre: "宮廷、日常、獸娘、純愛",
    rating: "★★★★★",
    collection: "漫畫",
    review: "獸耳真香，主僕:)畫風精細，多對CP，大家都很可愛"
  },
  
  };

function openBook(id) {

    const book = books[id];

    if (!book) return;

    document.getElementById("modalTitle")
        .textContent = book.title;

    document.getElementById("modalAuthor")
        .innerHTML =
        "<strong>作者：</strong>" + book.author;

    document.getElementById("modalGenre")
        .innerHTML =
        "<strong>類型：</strong>" + book.genre;

    document.getElementById("modalRating")
        .innerHTML =
        "<strong>推薦：</strong>" + book.rating;

    document.getElementById("modalCollection")
        .innerHTML =
        "<strong>藏書：</strong>" + book.collection;

    document.getElementById("modalReview")
        .innerHTML =
        "<strong>心得：</strong><br>" + book.review;

    document.getElementById("bookModal")
        .style.display = "block";
}
