const products = [
    {
        id: 1,
        title: 'Nike Air Max 270',
        brand: 'Nike',
        category: 'Men',
        description: `De Nike Air Max 270 is de eerste lifestyle Air Max van Nike en biedt stijl, comfort en volop attitude. Het design met het grote venster en allerlei frisse kleuren is geïnspireerd op Nike's legendarische en ongelofelijk innovatieve Air Max schoenen.`,
        price: 149.99,
        salePrice: 119.99,
        images: [
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/gorfwjchoasrrzr1fggt/air-max-270-herenschoen-7RW243.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-83452103-5cf5-4ffe-b539-212e6a63358d/air-max-270-herenschoen-7RW243.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/r8qjze7ovbegb388dnuv/air-max-270-herenschoen-7RW243.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-884f46a4-8366-462d-9de0-f000127b1538/air-max-270-herenschoen-7RW243.png'
        ],
        sizes: [38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5],
        url: 'nike-air-max-270-men'
    },
    {
        id: 2,
        title: "Nike Air Force 1 '07",
        brand: 'Nike',
        category: 'Men',
        description: `Behoud je stijlvolle look in de Nike Air Force 1 '07, het basketbalicoon dat een nieuwe draai geeft aan je favoriete onderdelen: fris leer, opvallende kleuren en precies de juiste hoeveelheid glans zodat jij kunt schitteren.`,
        price: 109.99,
        salePrice: 99.99,
        images: [
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-herenschoen-pXTXQ8.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/15b85bdb-aa12-4060-83d0-5163d11b314e/air-force-1-07-herenschoen-pXTXQ8.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f2e2833a-49e2-4088-b77e-4e4a5be53ae7/air-force-1-07-herenschoen-pXTXQ8.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dce93a1d-ebcb-4300-b8cf-f71da0820ea1/air-force-1-07-herenschoen-pXTXQ8.png'
        ],
        sizes: [38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5],
        url: 'nike-air-force-1-07-men'
    },
    {
        id: 3,
        title: "Stan Smith Parley",
        brand: 'Adidas',
        category: 'Men',
        description: `De wereld verandert, en wij vinden het belangrijk om mee te veranderen. Daarom hebben we een van onze meest iconische ontwerpen vernieuwd als onderdeel van onze inspanningen om plastic afval te verminderen. Deze adidas Stan Smith schoen ruilt doelgericht materialen uit het archief in voor gerecyclede versies. Hij ziet er net zo clean, fris en klassiek uit als altijd, met een wit bovenwerk en geperforeerde 3-Stripes. Alleen kun je je nu nog beter voelen wanneer je ze aantrekt.`,
        price: 120.00,
        salePrice: null,
        images: [
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63885ed215264facae12adf9008972cb_9366/STAN_SMITH_PARLEY_Wit_GV7614_01_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08768a17c97446f3a8ecadf900899160_9366/STAN_SMITH_PARLEY_Wit_GV7614_04_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b8e79c34285c43a88b51adf9008999e6_9366/STAN_SMITH_PARLEY_Wit_GV7614_05_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/90a5e0ed9ba1427b871badf9008982f4_9366/STAN_SMITH_PARLEY_Wit_GV7614_02_standard_hover.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'adidas-stan-smith-parley-men'
    },
    {
        id: 4,
        title: "Adizero x Allbirds 2.94KG C02E",
        brand: 'Adidas',
        category: 'Men',
        description: `Samen laten adidas en Allbirds de sterke punten van beide merken zien. Profiteer tegelijkertijd van de performance van adidas hardloopschoenen en van Allbirds' expertise wat betreft natuurlijke materialen. Het doel van de ontwerp- en productieprocessen was om de CO2e-voetafdruk tot een minimum te beperken. De middenzool op bio-basis en het bovenwerk van textiel combineren voor een lichtgewicht constructie en moeiteloos lopen.`,
        price: 120.00,
        salePrice: 107.99,
        images: [
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/420991b9497a4bff8b6fad8e0105eae6_9366/ADIZERO_X_ALLBIRDS_2.94_KG_CO2E_Wit_GY6157_01_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fd289949589c4ee782c4ad8e0105f990_9366/ADIZERO_X_ALLBIRDS_2.94_KG_CO2E_Wit_GY6157_02_standard_hover.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/472e997a11444b2488bcad8e010609b9_9366/ADIZERO_X_ALLBIRDS_2.94_KG_CO2E_Wit_GY6157_04_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7faae8ac1ea465b8b6ead8e010612ce_9366/ADIZERO_X_ALLBIRDS_2.94_KG_CO2E_Wit_GY6157_05_standard.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'adizero-allbirds-men'
    },
    {
        id: 5,
        title: "Classic Slip-On Checkerboard",
        brand: 'VANS',
        category: 'Men',
        description: `Samen laten adidas en Allbirds de sterke punten van beide merken zien. Profiteer tegelijkertijd van de performance van adidas hardloopschoenen en van Allbirds' expertise wat betreft natuurlijke materialen. Het doel van de ontwerp- en productieprocessen was om de CO2e-voetafdruk tot een minimum te beperken. De middenzool op bio-basis en het bovenwerk van textiel combineren voor een lichtgewicht constructie en moeiteloos lopen.`,
        price: 64.95,
        salePrice: 44.95,
        images: [
            'https://img01.ztat.net/article/spp-media-p1/3f81e11f55033ea684a6f11676ad8c7d/b3181fcfe2c74628a5ca337afc55b733.jpg?imwidth=1800&filter=packshot',
            'https://img01.ztat.net/article/spp-media-p1/a4600dfa4e273665981b1c4acc4c450a/8e1e4bf565724f0fb51b1fc56a04317c.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/9f7553b917dc3395aac7c9f7a492c3c4/4e2c7db01b8e470eab36eec8aad71559.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/a4600dfa4e273665981b1c4acc4c450a/8e1e4bf565724f0fb51b1fc56a04317c.jpg?imwidth=1800'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'vans-slip-on-checkerboard-men'
    },
    {
        id: 6,
        title: "Nike React Infinity Run Flyknit 3",
        brand: 'Nike',
        category: 'Men',
        description: `De Nike React Infinity Run Flyknit 3 voor heren is een allround hardloopschoen. De schoen biedt het zachte, stabiele gevoel in combinatie met een soepele ervaring die tijdens elke lange en korte ronde voor ondersteuning zorgen.`,
        price: 159.95,
        salePrice: 128.95,
        images: [
            'https://product-images.all4running.nl/product/2/b/7/c/2b7c09af264d289e8e742a2fbf12141da19de202_DH5392_003_PHSLH001_2000.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=500&w=500&s=6c563977b57c2de121d3636cd165adb9',
            'https://product-images.all4running.nl/product/0/8/d/8/08d835cc1842fb24065287c56754c01e81870d50_DH5392_003_PHCFH001_2000.jpeg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=500&w=500&s=2abe36d561ec9887cc2b96818e00df4b',
            'https://product-images.all4running.nl/product/4/f/4/d/4f4d8f854a9975ec753683408fb134f50049fb00_DH5392_003_PHSRH001_2000.jpeg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=500&w=500&s=7f827c20aaa5319ff20364ae56b91b8e',
            'https://product-images.all4running.nl/product/1/a/6/8/1a68fa62f6bafdfecc05959b87bb6c6580ee8851_DH5392_003_PHCBH000_2000.jpeg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=500&w=500&s=2129e08dd42a5313acc874ef89606e9d'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'nike-react-infinity-run-flyknit-3-men'
    },
    {
        id: 7,
        title: "Yeezy Boost 350 V2 Black Red",
        brand: 'Yeezy',
        category: 'Men',
        description: `Geen sneaker collab is meer gewild dan adidas x YEEZY. De YEEZY Boost 350 combineert de high-tech Boost-zool van adidas met de Primeknit bovenkant van Kanye West's eigentijdse visie.`,
        price: 390.00,
        salePrice: 310.00,
        images: [
            'https://media.restocks.net/products/CP9652/yeezy-boost-350-v2-197168-1-1000.png',
            'https://media.restocks.net/products/CP9652/yeezy-boost-350-v2-197168-2-1000.png',
            'https://media.restocks.net/products/CP9652/yeezy-boost-350-v2-197168-4-1000.png',
            'https://media.restocks.net/products/CP9652/yeezy-boost-350-v2-197168-5-1000.png'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'yeezy-boost-350-v2-black-red'
    },
    {
        id: 8,
        title: "Puma DISPERSE XT 2",
        brand: 'Puma',
        category: 'Men',
        description: `Til je training naar een hoger niveau met de Disperse XT 2 sportschoenen, een update van een onnavolgbare sportschoen op het kruispunt van prestatie en ontwerp. Deze nieuwe interpretatie van onze originele Disperse bevat dezelfde superlichtgewicht materialen en is net zo wendbaar, gecombineerd met een gemoderniseerd bovenwerk en meer gedurfde en in het oog springende ontwerpelementen.`,
        price: 59.95,
        salePrice: null,
        images: [
            'https://img01.ztat.net/article/spp-media-p1/354e97d8762d469a8328f0a08eba105d/2c73cea6227c4c47b78fa0737ddb1152.jpg?imwidth=1800&filter=packshot',
            'https://img01.ztat.net/article/spp-media-p1/5247e1285e264b94ae120f72a47683db/8fad9b7f3a89463aa85de47bb332ef4c.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/1f6f4e282a274a3ba7f37aa3446e34db/4a61d167997043219d3efeb00a256350.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/2ad1d0e323a842c6ab0780c721b0fcc7/ef46f9d64df74080907b7af5dd2196a4.jpg?imwidth=1800'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'puma-disperse-xt-2-men'
    },
    {
        id: 9,
        title: "SHOWTHEWAY 2.0 Unisex Blue",
        brand: 'Adidas',
        category: 'Unisex',
        description: `Whether you're stepping out for a morning jog through the neighbourhood or wanting to bring some running inspiration to your everyday wardrobe, lace up in these adidas shoes. The lightweight mesh upper is breathable, to keep feet cool even in warm weather, while a cushioned midsole cradles every step for all-day comfort. Classic 3-Stripes graphics keep your look rooted in sports.`,
        price: 59.95,
        salePrice: 49.95,
        images: [
            'https://img01.ztat.net/article/spp-media-p1/b8472db2e4f04132b9a1162c52058bee/69d0e1bec14542cfac9501f736adda03.jpg?imwidth=1800&filter=packshot',
            'https://img01.ztat.net/article/spp-media-p1/b130d3be031245d79b40f4233617314d/44e3a725cfb543d4af64256186c71276.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/60c867ba90dc4ed7930c6df83f5ef39c/169f692f0568481684d5cbafe4dd9cd3.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/be125dc86e8144a681bc8b6716a403e6/9a778fac5d48453eb6aa943bbc7b304d.jpg?imwidth=1800'
        ],
        sizes: [38, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48, 49],
        url: 'adidas-showtheway-2-unisex-blue'
    },
    {
        id: 10,
        title: "Mens 411 V2",
        brand: 'New Balance',
        category: 'Men',
        description: `Our men's 411v2 helps keep you moving in comfort for whatever the day brings. Featuring Ground Contact EVA with rubber pods, this men's shoe helps deliver incredibly lightweight cushioning while providing abrasion resistance and durability in every step. The sublimated print on the upper tops this shoe off with a sleek look to perfectly blend function and fashion.`,
        price: 54.95,
        salePrice: 49.95,
        images: [
            'https://img01.ztat.net/article/spp-media-p1/fd9a5798cfb44a408df27bc45d2168bc/d6b13963281546aca8b58bd45c831fbd.jpg?imwidth=1800&filter=packshot',
            'https://img01.ztat.net/article/spp-media-p1/410bbc3818d94d63828acdef26003b13/bb1f55091cbc4d9597223e26c5a23dd2.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/0d9838ae07de4b7094755bbc3ef93c2c/4dda3670759b47f182215e097b6ba939.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/1ea5f933a846482a9e8dff72cb342b21/6af1ce4850144ff295f51d5907862863.jpg?imwidth=1800'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'new-balance-mens-411-v2'
    },
    {
        id: 11,
        title: "Puma Flyer Flex",
        brand: 'Puma',
        category: 'Men',
        description: `Hardlopen is nog nooit zo comfortabel geweest als met de Puma Flyer Flex sneakers. Want deze dikke sneakers hebben alles in huis om je optimaal te laten performen. En niet alleen tijdens hardlopen, zo weet de Sneakerbaron, maar ook in de sportschool weten de Puma Flyer Flex van wanten. Deze veelzijdige sneakers hebben veel gemeen met andere Puma sneakers als bijvoorbeeld de Puma RS-0 sneakers en de Puma RS Curve sneakers.`,
        price: 49.95,
        salePrice: null,
        images: [
            'https://img01.ztat.net/article/spp-media-p1/cb0ee0fcf4cc4ca0aba1580accd85bb7/af7e9413bd1448d59b091ca0fbc70091.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/c443cb7cce6143fbb24d9a058c8b0d2f/5b2e0698667c454d8b09536b93c27fdb.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/73afcf7ddb1b4b5993b4a3ab2cd66449/ef59c6123869416e948d6793c0a634f1.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/00f6526aaea4401f8c787dc62d5147ab/47b030181c1f47c89faa8d290c1b79c0.jpg?imwidth=1800'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'puma-flyer-flex-men'
    },
    {
        id: 12,
        title: "Vans SK8-LOW",
        brand: 'VANS',
        category: 'Unisex',
        description: `De gloednieuwe Skate Classics-lijn is volledig opnieuw ontworpen met skaters in gedachten en levert nog meer van wat skaters nodig hebben om maximale progressie mogelijk te maken. De Skate Classics Sk8-Low Shoes in de kleur Black/White van Vans heeft een volledig vernieuwd bovenwerk, een voorgevormde hielkap, verstevigde tongbanden en een hergevormde DURACAP™ -onderlaag. Hij heeft een essentiële pasvorm die ademend en duurzamer is waar skaters dat het meest nodig hebben. De tweedelige band op de zool heeft een hardere teenribbel en zorgt voor meer boardcontact. De opnieuw ontworpen gum rubberen zool van Vans is verder verbeterd met de SICKSTICK™- rubbersamenstelling en een interne hielschacht voor meer grip, boardfeel, ondersteuning en duurzaamheid.`,
        price: 74.95,
        salePrice: null,
        images: [
            'https://img01.ztat.net/article/spp-media-p1/45bccefff82735d8a599a0e875f94500/6d2fc9c11ab44b3ea3ba1faa0f368f46.jpg?imwidth=1800&filter=packshot',
            'https://img01.ztat.net/article/spp-media-p1/9063785802c039718dba1ef887891618/6d210e4ffe13410781263b9e6a49c973.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/32cf3936fb5e3c92b5fb1053c9e870aa/772f0c82dd864a4b93a5989f39d52169.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/80836c7cd1873ba59f9ebda2501737ed/af3d166eed3a485b9d73f0f25821d47e.jpg?imwidth=1800'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'vans-sk8-low-men'
    },
    {
        id: 13,
        title: "Nike Performance ZOOMX Invincible Run",
        brand: 'Nike',
        category: 'Men',
        description: `Get after those long runs with lightweight, responsive foam that delivers a soft feel with every step. A Flyknit upper gives your foot breathability where you need it most and secure fit you can depend on. Designed for maximum shock absorption with a wider forefoot for stability and a more curved outsole for easier heel-to-toe transitions As one of our most tested shoes, lace up and feel the potential when your foot hits the pavement.`,
        price: 179.95,
        salePrice: 159.95,
        images: [
            'https://img01.ztat.net/article/spp-media-p1/2af6244fee49499dbbfe17fba2ecc980/96d49ec6b55f4d81981e67a8d21f2a8b.jpg?imwidth=1800&filter=packshot',
            'https://img01.ztat.net/article/spp-media-p1/e73cb6f95eef429087cede4071d1d456/22882aa6f3ab4caaabfb5a21b45ad5f7.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/85a217058fbe42adbcc5f209a02b81b6/682283c81faa435d8920df4d6526c1b6.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/372852db67e8451caf21e1eb59176a42/24708a8fdd7849288ba46a2b061c01ba.jpg?imwidth=1800'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'nike-zoomx-invincible-run-men'
    },
    {
        id: 14,
        title: "VANS SK8 UNISEX - Blue",
        brand: 'VANS',
        category: 'Unisex',
        description: `De gloednieuwe Skate Classics-lijn is volledig opnieuw ontworpen met skaters in gedachten en levert nog meer van wat skaters nodig hebben om maximale progressie mogelijk te maken. De Skate Classics Sk8-Low Shoes in de kleur Black/White van Vans heeft een volledig vernieuwd bovenwerk, een voorgevormde hielkap, verstevigde tongbanden en een hergevormde DURACAP™ -onderlaag. Hij heeft een essentiële pasvorm die ademend en duurzamer is waar skaters dat het meest nodig hebben. De tweedelige band op de zool heeft een hardere teenribbel en zorgt voor meer boardcontact. De opnieuw ontworpen gum rubberen zool van Vans is verder verbeterd met de SICKSTICK™- rubbersamenstelling en een interne hielschacht voor meer grip, boardfeel, ondersteuning en duurzaamheid.`,
        price: 74.95,
        salePrice: 66.95,
        images: [
            'https://img01.ztat.net/article/spp-media-p1/f9bd4f6ea746432e9458c8f41901e747/eb8d562034c441e78db2102834add400.jpg?imwidth=1800&filter=packshot',
            'https://img01.ztat.net/article/spp-media-p1/f47b43160f73481eae9bc28003adfbcb/dd5a023054e74a07a9ef0abfbed8b878.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/ef1ee7868cfe447398f28ee27e75c714/79b1ca17666c4fb08bf4b70ec2c2f07a.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/67ec4e35a22a4050b9458c927c23567d/eac9877b438d4c48a4342a3cbe4e466d.jpg?imwidth=1800'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'vans-sk8-blue-unisex'
    },
    {
        id: 15,
        title: "New Balance M5740 UNISEX - Sneakers laag",
        brand: 'New Balance',
        category: 'Unisex',
        description: `Deze sportieve beige sneaker M5740 is van het merk New Balance. Deze moderne lage sneaker is gemaakt van suède panelen in combinatie met glanzend mesh textiel en lederen details. De tong, zijkant en neus bevatten wit mesh textiel en op de zijkant is het welbekende ‘N’ embleem terug te vinden in zwart leer met witte biezen. De tong is gesierd met een textiel merklabel en op de hiel zit een grijze rubberen inzet voor extra stabiliteit en ondersteuning aan de hiel. Het binnenwerk is van zacht textiel met een gevoerde enkelkraag en tong die samen met het uitneembare voetbed voor veel comfort zorgen. De opvallende chunky zool met gele tussenzool en grafische vormen heeft een grof profiel voor veel stabiliteit. Waar combineer jij 'm bij?`,
        price: 119.95,
        salePrice: null,
        images: [
            'https://img01.ztat.net/article/spp-media-p1/80d4bf7472d445e9a2b9717e4d9ff41d/1cb9ddf9451445cc9ea48ce3c55e1275.jpg?imwidth=1800&filter=packshot',
            'https://img01.ztat.net/article/spp-media-p1/3f2027a7ff554b3e83aec53934eaef83/efe0b9aac8be4d5fadd30c6ea3405825.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/e574be34435d406e8550eb89866f1b4b/7d6cd74b40b9406caaa91df9c864f12b.jpg?imwidth=1800',
            'https://img01.ztat.net/article/spp-media-p1/778902699c3246f5929fd452a5126bd1/741a3eb1d2ee49f793a280c1e13ae044.jpg?imwidth=1800'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'new-balance-m5740-unisex'
    },
    {
        id: 16,
        title: "Old Skool 36 DX Anaheim Factory Yellow",
        brand: 'VANS',
        category: 'Men',
        description: `De details van de allereerste Authentic die je terugvindt in de Anaheim Factory Old Skool 36 DX zijn een hommage aan de eerste fabriek van Vans in Anaheim (Californië). Het extra modern comfort is te danken aan de vernieuwde Ortholite®-binnenzolen. Deze iconische schoen met Sidestripe heeft allerlei retrodetails, zoals het oorspronkelijke stijlnummer, een glanzender foxing tape, het oorspronkelijke gebruikte linnen en de katoenen veters. Om de look af te maken, is het bovenwerk gemaakt van vintage suède en textiel met een hergebruikte checkerboardprint.`,
        price: 89.95,
        salePrice: 79.95,
        images: [
            'https://static.sneakerdistrict.com/images2/vans-old-skool-36-dx-anaheim-factory-freestyle-spectra-yellow-1-1600.jpg',
            'https://static.sneakerdistrict.com/images2/vans-old-skool-36-dx-anaheim-factory-freestyle-spectra-yellow-8-1600.jpg',
            'https://static.sneakerdistrict.com/images2/vans-old-skool-36-dx-anaheim-factory-freestyle-spectra-yellow-3-1600.jpg',
            'https://static.sneakerdistrict.com/images2/vans-old-skool-36-dx-anaheim-factory-freestyle-spectra-yellow-5-1600.jpg'
        ],
        sizes: [38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48],
        url: 'vans-old-skool-36-dx-men'
    },
]

export default products