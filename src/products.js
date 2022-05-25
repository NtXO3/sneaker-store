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
    }
]

export default products