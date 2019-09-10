import { ITLayout } from '../component/img-and-text/i-t-layout.type';


class WorkData {
  title: string;
  titleImg: string;
  linkPath: string;
  info: {
    type: string,
    partner?: string,
    year: string,
    award?: string,
    design?: string,
    coding?: string,
    link?: Array<string>
  };
  layouts: Array<ITLayout>;
  constructor(init: WorkData) {
    Object.assign(this, init);
  }
}

const workDatas: Array<WorkData> =
  [
    new WorkData({
      title: 'BEER',
      titleImg: 'assets/worksTitleImg/titleImg-beer.jpg',
      linkPath: 'beer',
      info: {
        type:     'website',
        year:     '2019',
        design:   '林庭佑',
        coding:   '林庭佑',
        link: ['網站連結', 'https://lin-ting-yu.github.io/beer/index.html']
      },

      layouts: [
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/beer/beer-01.png'
          ]
        },
        { layout: 'imgAndText',
          layoutType: 0,
          imgs: [
            'assets/workImg/beer/beer-02.png',
          ],
          text: '酒精自古以來都是讓人著迷，在不影響健康的情況下，酒往往是大家聚會首選。在台灣，啤酒通常是入門的首選，因此作了這個網站。'
        },
        { layout: 'imgAndText',
          layoutType: 1,
          imgs: [
            'assets/workImg/beer/beer-03.png',
          ],
          text: '運用 three.js將啤酒呈現在網頁上，就算沒有看過，也可以馬上熟悉它。'
        }
      ]
    }),
    new WorkData({
      title: 'TAIWAN FOLK TOY',
      titleImg: 'assets/worksTitleImg/titleImg-toy.jpg',
      linkPath: 'taiwanfolktoy',
      info: {
        type:     'book',
        year:     '2015',
        partner:  '簡文娟、張修華',
        award:    'red dot bast of bast'
      },
      layouts: [
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/taiwan-toy/toy-2.jpg'
          ]
        },
        { layout: 'imgsAndText',
          layoutType: 1,
          imgs: [
            'assets/workImg/taiwan-toy/toy-1.jpg',
            'assets/workImg/taiwan-toy/toy-3.jpg'
          ],
          text: '台灣擁有豐富多元的自然人文景物。在歷史發展上，也有許多來自各方的文化，因此有「民族文化熔爐」之稱。因此我們探討過去存在，以童玩的方式呈現台灣。'
        },
        { layout: 'imgAndText',
          layoutType: 0,
          imgs: [
            'assets/workImg/taiwan-toy/toy-4.jpg'
          ],
          text: '盒底的附件，也是台灣古早時候的玩具 "冰鈴機"，是當年雜貨店或是烤魷魚推車必備的玩具，也是大家閒暇之餘，下課遊玩時，測試一下自己運氣的好東西。'
        },
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/taiwan-toy/toy-5.jpg'
          ]},
        { layout: 'twoBigImg',
          imgs: [
            'assets/workImg/taiwan-toy/toy-folktoypage-01.jpg',
            'assets/workImg/taiwan-toy/toy-folktoypage-02.jpg'
          ]
        }
      ]
    }),
    new WorkData({
      title: 'TAIWAN AMAZING FOOD',
      titleImg: 'assets/worksTitleImg/titleImg-food.jpg',
      linkPath: 'taiwanfood',
      info: {
        type:     'book',
        year:     '2015',
        partner:  '簡文娟、張修華',
        award:    'iF design award'
      },
      layouts: [
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/taiwan-food/food-1.jpg'
          ]
        },
        { layout: 'imgAndText',
          layoutType: 1,
          imgs: [
            'assets/workImg/taiwan-food/food-2.jpg'
          ],
          text: '許多國外的朋友，都對台灣食物產生無比的好奇，因此將具有台灣特色的小吃美食，以及外國人好奇的食物介紹給世界，以食物作為媒介，讓外國人更了解台灣文化與特色。'
        },
        { layout: 'imgsAndText',
          layoutType: 0,
          imgs: [
            'assets/workImg/taiwan-food/food-page1.png',
            'assets/workImg/taiwan-food/food-page2.png'
          ],
          text: '以圖片配合插畫，讓讀者不僅能夠對食物有，也可以了解台灣小吃的由來，及食物名稱的趣味原由。'
        },
        { layout: 'twoBigImg',
          imgs: [
            'assets/workImg/taiwan-food/food-icon-01.png',
            'assets/workImg/taiwan-food/food-icon-02.png'
          ]
        }
      ]
    }),
    new WorkData({
      title: '爭鮮 SuShi Express',
      titleImg: 'assets/worksTitleImg/titleImg-SuShi.jpg',
      linkPath: 'sushi',
      info: {
        type: 'cis',
        year: '2016'
      },
      layouts: [
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/sushi/sushi-2.jpg'
          ]
        },
        { layout: 'imgAndText',
          layoutType: 0,
          imgs: [
            'assets/workImg/sushi/sushi-juice.jpg'
          ],
          text: '以簡約及鮮魚為主。在 "爭鮮" 二字中藏了兩隻魚在其中，魚鰓呈現紅色，象徵新鮮。俐落的線條，使大眾看到有耳目一新的感覺。'
        },
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/sushi/sushi-1.jpg'
          ]
        }
      ]
    }),
    new WorkData({
      title: '米諾卡烘焙',
      titleImg: 'assets/worksTitleImg/titleImg-bakery.jpg',
      linkPath: 'milocca',
      info: {
        type: 'cis',
        year: '2016'
      },
      layouts: [
        { layout: 'twoBigImg',
          imgs: [
            'assets/workImg/milocca/milocca-01.png',
            'assets/workImg/milocca/milocca-02.png',
          ]
        },
        { layout: 'imgsAndText',
          layoutType: 0,
          imgs: [
            'assets/workImg/milocca/milocca-card-01.png',
            'assets/workImg/milocca/milocca-card-02.png'
          ],
          text: '傳統圖章式的LOGO設計。彷彿看到LOGO就直接聞到傳統手做麵包的香氣。'
        },
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/milocca/milocca-something.jpg'
          ]
        }
      ],
    }),
    new WorkData({
      title: 'Catch',
      titleImg: 'assets/worksTitleImg/titleImg-catch.jpg',
      linkPath: 'catch',
      info: {
        type: 'package',
        year: '2015'
      },
      layouts: [
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/catch/catch-4.jpg'
          ]
        },
        { layout: 'imgAndText',
          layoutType: 0,
          imgs: [
            'assets/workImg/catch/catch-3.jpg'
          ],
          text: '吃傳統包裝的冰棒時，總是因為融化速度過快，導致手變得黏黏的，讓人火大。因此了有這個想法。'
        },
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/catch/catch-2.jpg'
          ]
        }
      ]
    }),
    new WorkData({
      title: '永和豆漿',
      titleImg: 'assets/worksTitleImg/titleImg-soyMilk.jpg',
      linkPath: 'soymilk',
      info: {
        type:   'poster',
        award:  '時報金犢獎 - 入選',
        year:   '2015'
      },
      layouts: [
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/soymilk/soymilk-1.jpg'
          ]
        },
        { layout: 'imgAndText',
          layoutType: 0,
          imgs: [
            'assets/workImg/soymilk/soymilk-logo.jpg'
          ],
          text: '以 "永和豆漿" LOGO局部放大，融入舉重、攀岩及泛舟，意旨喝豆漿使身體強壯，激發淺能 ，超越自己。'
        }
      ]
    }),
    new WorkData({
      title: 'Honor!?',
      titleImg: 'assets/worksTitleImg/titleImg-honor.jpg',
      linkPath: 'honor',
      info: {
        type: 'poster',
        year: '2017'
      },
      layouts: [
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/honor/honor-1.jpg'
          ]
        },
        { layout: 'imgAndText',
          layoutType: 1,
          imgs: [
            'assets/workImg/honor/honor-2.jpg'
          ],
          text: '兒童兵一直是一個嚴重的問題。這張海報是一個正在被表揚的孩子，但成年人手中的東西不是一枚勳章，而是一排子彈，這意味著洗腦的過程。成年人和兒童形成 "！？" 形狀，因此我們懷疑並指責這個行為。 黃色背景與黑色圖案，有如警告標誌。'
        }
      ]
    }),
    new WorkData({
      title: 'Another Logo',
      titleImg: 'assets/worksTitleImg/titleImg-logotype.jpg',
      linkPath: 'anotherlogo',
      info: {
        type: 'logotype',
        year: '2013-2015'
      },
      layouts: [
        { layout: 'twoBigImg',
          imgs: [
            'assets/workImg/anotherlogo/anotherlogo-01.png',
            'assets/workImg/anotherlogo/anotherlogo-02.png'
          ]
        },
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/anotherlogo/anotherlogo-02.jpg'
          ]
        },
        { layout: 'imgsAndText',
          layoutType: 0,
          imgs: [
            'assets/workImg/anotherlogo/anotherlogo-03.jpg',
            'assets/workImg/anotherlogo/anotherlogo-04.jpg'
          ],
          text: '以編織出的文字，傳達出服飾店"訂製"的特色，每件衣服都是精心編織的結果。'
        },
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/anotherlogo/anotherlogo-05.jpg'
          ]
        },
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/anotherlogo/anotherlogo-06.jpg'
          ]
        }
      ]
    }),
    new WorkData({
      title: 'PSI',
      titleImg: 'assets/worksTitleImg/titleImg-psi.jpg',
      linkPath: 'psi',
      info: {
        type: 'logo',
        year: '2016'
      },
      layouts: [
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/psi/PSI-guitar.jpg'
          ]
        },
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/psi/psi-2.jpg'
          ]
        },
        { layout: 'imgAndText',
          layoutType: 1,
          imgs: [
            'assets/workImg/psi/psi-3.jpg'
          ],
          text: '以音樂播放鍵為出發點，結合箭頭與 pick 外型。整體以正三角形切格而成，象徵嚴謹的公司理念。箭頭指向右方表示前進、開始。'
        },
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/psi/psi-1.jpg'
          ]
        }
      ]
    }),
    new WorkData({
      title: '糾結',
      titleImg: 'assets/worksTitleImg/titleImg-kind.jpg',
      linkPath: 'kink',
      info: {
        type: 'poster',
        year: '2017'
      },
      layouts: [
        { layout: 'bigImg',
          imgs: [
            'assets/workImg/kink/kink-1.jpg'
          ]
        },
        { layout: 'imgsAndText',
          layoutType: 0,
          imgs: [
            'assets/workImg/kink/kink-2.jpg',
            'assets/workImg/kink/kink-3.jpg'
          ],
          text: '"糾結" 在字形上，是一個極具畫面感的辭彙，它帶來的印象就是一團團物體相交糾纏、枝杈重疊的模樣，因此我把 "糾結" 二字配合人們面對難題的心境一起呈現出來。'
        }
      ],
    })
  ];



export {WorkData, workDatas};
