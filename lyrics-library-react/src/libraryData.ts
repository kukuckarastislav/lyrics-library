import { Library } from "./models/Library";

const jsonData = {
    "numberOfSongBooks": 5,
    "songBooks": [
        {
            "name": "Spevnik",
            "url": "spevnik",
            "numberOfSongs": 2,
            "languges": [
                "sk"
            ],
            "songs": [
                {
                    "name": "Či chceš väzby hriechu byť zbavený?",
                    "number": 70,
                    "lang": "sk",
                    "url": "ci-chces-vazby-hriechu-byt-zbaveny",
                    "author": "E. A. Hoffman",
                    "verses": [
                        [
                            "Či chceš väzby hriechu byť zbavený? Moc v krvi je! Moc v krvi je! Poď, mier v dušu bude",
                            "ti vložený; k očisteniu",
                            "moc v krvi je!"
                        ],
                        [
                            "REF.: Leží moc, moc, divotvorná moc v tej krvi, v tej krvi.",
                            "Leží moc, moc, víťaziaca moc v tej krvi Spasiteľa len."
                        ],
                        [
                            "2. Chceš vymanenie z náruživostí? Moc v krvi je! Moc v krvi je!",
                            "Krv z Golgoty celkom ťa očistí. Víťazstvo v drahej krvi je!"
                        ],
                        [
                            "REF.: Leží moc, moc, divotvorná moc v tej krvi, v tej krvi.",
                            "Leží moc, moc, víťaziaca moc v tej krvi Spasiteľa len."
                        ],
                        [
                            "3. Chcel bys´ belším byť nad bielučký sneh? Moc v krvi je! Moc v krvi je! Tá krv všetky škvrny vezme i hriech. Čistota, plná v krvi je!"
                        ],
                        [
                            "REF.: Leží moc, moc, divotvorná moc v tej krvi, v tej krvi.",
                            "Leží moc, moc, víťaziaca moc v tej krvi Spasiteľa len."
                        ],
                        [
                            "4. Chcel bys´ Kristu slúžiť tu oddane? Moc v krvi je! Moc v krvi je!",
                            "Pána lásky sláviť neprestajne? Denne moc k tomu v krvi je!"
                        ],
                        [
                            "REF.: Leží moc, moc, divotvorná moc v tej krvi, v tej krvi.",
                            "Leží moc, moc, víťaziaca moc v tej krvi Spasiteľa len."
                        ]
                    ]
                },
                {
                    "name": "Ja neviem, prečo milosti zdroj Boh mi otvoril",
                    "number": 227,
                    "lang": "sk",
                    "url": "ja-neviem-preco-milosti-zdroj-boh-mi-otvoril",
                    "author": "J. H. Sammis",
                    "verses": [
                        [
                            "1. Ja neviem, prečo milosti zdroj Boh mi otvoril,",
                            "ni prečo z lásky Pán Ježiš ma sebe vyvolil."
                        ],
                        [
                            "REF.: Ale komu uveril som, viem, presvedčený som,",
                            "že On je mocný ma sebe zachovať verným, až kým",
                            "príde Jeho deň!"
                        ],
                        [
                            "2. Ja neviem, ako viery dar mi k spáse požehnal",
                            "a v Jeho Slovo dôverou mier v srdci vyvolal."
                        ],
                        [
                            "REF.: Ale komu uveril som, viem, presvedčený som,",
                            "že On je mocný ma sebe zachovať verným, až kým",
                            "príde Jeho deň!"
                        ],
                        [
                            "3. Ja neviem, ako človeka Duch z hriechov usvedčí,",
                            "jak zjaví Pána Ježiša a dušu vylieči."
                        ],
                        [
                            "REF.: Ale komu uveril som, viem, presvedčený som,",
                            "že On je mocný ma sebe zachovať verným, až kým",
                            "príde Jeho deň!"
                        ],
                        [
                            "4. Ja neviem, či mám určený bôľ a či slasti žiar,",
                            "či jasné dni, či úzkosti, kým uzriem Jeho tvár."
                        ],
                        [
                            "REF.: Ale komu uveril som, viem, presvedčený som,",
                            "že On je mocný ma sebe zachovať verným, až kým",
                            "príde Jeho deň!"
                        ],
                        [
                            "5. Ja neviem, či v čas poludnia, či nocou príde Pán,",
                            "či s Ním ísť smrti dolinou,",
                            "či tu Ho vítať mám."
                        ],
                        [
                            "REF.: Ale komu uveril som, viem, presvedčený som,",
                            "že On je mocný ma sebe zachovať verným, až kým",
                            "príde Jeho deň!"
                        ]
                    ]
                }
            ]
        },
        {
            "name": "Mladeznicke",
            "url": "mladeznicke",
            "numberOfSongs": 153,
            "languges": [
                "sk", "srb", "eng"
            ],
            "songs": []
        },
        {
            "name": "Duhovne Pesme",
            "url": "duhovne-pesme",
            "numberOfSongs": 85,
            "languges": [
                "srb"
            ],
            "songs": []
        },
        {
            "name": "Prozor Na Nebu",
            "url": "prozor-na-nebu",
            "numberOfSongs": 214,
            "languges": [
                "srb"
            ],
            "songs": []
        },
        {
            "name": "Nove Pesme",
            "url": "nove-pesme",
            "numberOfSongs": 19,
            "languges": [
                "srb", "eng", "sk"
            ],
            "songs": []
        }
    ]
};

const library: Library = Library.fromJson(jsonData);
console.log(library);

export default library;

