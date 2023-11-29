import { Library } from "./models/Library";

const jsonData = {
    "numberOfSongBooks": 5,
    "songBooks": [
        {
            "name": "Spevnik",
            "url": "spevnik",
            "numberOfSongs": 12,
            "languges": [
                "sk"
            ],
            "songs": [
                {
                    "name": "Chválime Ťa Bože náš",
                    "number": 1,
                    "lang": "sk",
                    "url": "chvalime-ta-boze-nas",
                    "author": "E. A. Hoffman",
                    "verses": [
                        [
                            "Chválime Ťa Bože náš"
                        ],
                        [
                            "Chválime Ťa, Bože náš,",
                            "vďačne, vrúcne, z celej sily,",
                            "že Ty, veľký k nám sa znáš,",
                            "hoc sme hnev Tvoj zaslúžili.",
                            "Od vekov si naveky,",
                            "svätý Bože, veliký!"
                        ],
                        [
                            "2. Celá zem i nebesá, svety,",
                            "pred Tebou sa koria,",
                            "k Tebe tvorstvo vinie sa,",
                            "velebia Ťa púšte, moria.",
                            "Tvoja múdrosť bezodná",
                            "vesmír drží dovedna."
                        ],
                        [
                            "3. Tvojho ľudu zástupy",
                            "slávia Ťa a verných zbory,",
                            "že si z vín ich vykúpil,",
                            "hrdinov z nich viery stvoril.",
                            "Celá cirkev chválou znie",
                            "za prijaté spasenie."
                        ],
                        [
                            "4. Dokonca Ťa budeme",
                            "oslavovať, Otče milý,",
                            "ku Tebe kým prídeme,",
                            "daj by sme Ťa nezradili!",
                            "Baránkov kým začne hod,",
                            "v milosti nás svojej voď!"
                        ]
                    ]
                },
                {
                    "name": "Haleluja! Chváľže Boha",
                    "number": 0,
                    "lang": "sk",
                    "url": "haleluja!-chváľže-boha",
                    "author": "",
                    "verses": [
                        [
                            "1. Haleluja! Chváľže Boha",
                            "v nebi Jeho stvorenie,",
                            "po vesmírnej hviezdnej dráhe",
                            "mohutná nech pieseň znie.",
                            "Stvoriteľa Boha chváľte,",
                            "slnce, mesiac s hviezdami,",
                            "Jeho oslavujte vďačne,",
                            "všetko nech znie chválami."
                        ],
                        [
                            "REF.: Chváľte, chváľte nebies Pána, všetci k chvále spojte sa!",
                            "Jeho slávy nech sú plné,",
                            "Jeho slávy nech sú plné,",
                            "Jeho slávy nech sú plné",
                            "moria, zem i nebesá!"
                        ],
                        [
                            "2. Chváľte Boha všetky veci, ktoré stvoril rozkazom.Rozhlasujte ľudia všetci, On že sám je vladárom. Pozemšťania, veľkí, malí, starci spolu s dietkami,Jemu zaspievajte žalmy, všetko nech znie chválami.",
                            "REF.: Chváľte, chváľte..."
                        ],
                        [
                            "REF.: Chváľte, chváľte nebies Pána, všetci k chvále spojte sa!",
                            "Jeho slávy nech sú plné,",
                            "Jeho slávy nech sú plné,",
                            "Jeho slávy nech sú plné",
                            "moria, zem i nebesá!"
                        ],
                        [
                            "3. Vzdajte chvály najzvučnejšie, duše Kristom spasené,z vašich sŕdc nech najvrúcnejšie pieseň chvály stále znie.Sláva Pánu Ježišovi, ktorý za nás život dal,",
                            "srdce k nemu láskou horí, spievajme mu žalmy chvál.",
                            "REF.: Chváľte, chváľte..."
                        ],
                        [
                            "REF.: Chváľte, chváľte nebies Pána, všetci k chvále spojte sa!",
                            "Jeho slávy nech sú plné,",
                            "Jeho slávy nech sú plné,",
                            "Jeho slávy nech sú plné",
                            "moria, zem i nebesá!"
                        ],
                        [
                            "4. Haleluja! Chváľme Boha,Stvoriteľa slávneho, ktorý k hriešnym prišiel zhora, zachrániť chce každého. Celým srdom dušou, telom Jemu chválu vzdávajme,On je naším",
                            "Spasiteľom, s radosťou to hlásajme!",
                            "REF.: Chváľte, chváľte..."
                        ],
                        [
                            "REF.: Chváľte, chváľte nebies Pána, všetci k chvále spojte sa!",
                            "Jeho slávy nech sú plné,",
                            "Jeho slávy nech sú plné,",
                            "Jeho slávy nech sú plné",
                            "moria, zem i nebesá!"
                        ]
                    ]
                },
                {
                    "name": "Boh je dobrý, Boh je dobrý",
                    "number": 3,
                    "lang": "sk",
                    "url": "boh-je-dobry-boh-je-dobry",
                    "author": "E. A. Hoffman",
                    "verses": [
                        [
                            "1. Boh je dobrý, Boh je dobrý,",
                            "Boh je dobrý, On je tak dobrý mne.",
                            "2. On Syna dal, On Syna dal,",
                            "On Syna dal, On je tak dobrý mne."
                        ],
                        [
                            "3. On mrel za mňa, On mrel za mňa,",
                            "On mrel za mňa, On je tak dobrý mne.",
                            "4.On z mŕtvych vstal,On z mŕtvych vstal,",
                            "On z mŕtvych vstal, On je tak dobrý mne."
                        ]
                    ]
                },
                {
                    "name": "Boh náš je láska od večnosti.",
                    "number": 4,
                    "lang": "sk",
                    "url": "boh-nas-je-laska-od-vecnosti",
                    "author": "E. A. Hoffman",
                    "verses": [
                        [
                            "1. Boh náš je láska od večnosti.",
                            "On základ bytia, prúd milosti.",
                            "Z lásky On stvoril, spravuje svet, kde nieto Jeho, života niet!",
                            "Boh náš je láska, Boh náš je láska."
                        ],
                        [
                            "2. Boh náš je láska od večnosti.",
                            "On prameň sily, lúč milosti.",
                            "Do rúcha krásy oblieka svet,",
                            "kde nieto Jeho, radosti niet!",
                            "Boh náš je láska, Boh náš je láska."
                        ],
                        [
                            "3. Boh náš je láska od večnosti.",
                            "On darcom svätej blaženosti.",
                            "Vykúpil láskou stratený svet,",
                            "kde nieto Jeho, spasenia niet!",
                            "Boh náš je láska, Boh náš je láska."
                        ],
                        [
                            "4. Boh náš je láska od večnosti. Neuzrieš ho však bez svätosti.",
                            "V ten čarokrásny nadhviezdny svet, bez rúcha slávy prístupu niet.",
                            "Boh náš je láska, Boh náš je láska."
                        ]
                    ]
                },
                {
                    "name": "Dobroreč Hospodinovi, duša, dobrotu Jeho spoznávaj",
                    "number": 5,
                    "lang": "sk",
                    "url": "dobrorec-hospodinovi-dusa-dobrotu-jeho-spoznavaj",
                    "author": "E. A. Hoffman",
                    "verses": [
                        [
                            "1. Dobroreč Hospodinovi, duša, dobrotu Jeho spoznávaj,",
                            "Jemu sa vydaj, keď vernosť skúša, životom celým česť Mu vzdaj.",
                            "Dobrotu Jeho spoznávaj, životom celým česť Mu vzdaj.",
                            "Haleluja, Haleluja."
                        ],
                        [
                            "2. Naveky Hospodin nemá hnevu, v láske Mu nieto rovného,otcovský skláňa sa k pokornému, netrápi tvora žiadneho.V láske Mu nieto rovného, netrápi tvora žiadneho.",
                            "Haleluja, Haleluja."
                        ],
                        [
                            "3. Dobre je chváliť Ťa, Hospodine, osláviť má Ťa každý tvor.",
                            "Kráľovstvo nik Ti z rúk neodníme, vďačne Ti spieva verných zbor.",
                            "Osláviť má Ťa každý tvor,",
                            "vďačne Ti spieva verných zbor. Haleluja, Haleluja."
                        ]
                    ]
                },
                {
                    "name": "Buď milosť Pána Jezu Krista, a láska Božia a účastenstvo",
                    "number": 6,
                    "lang": "sk",
                    "url": "bud-milost-pana-jezu-krista-a-laska-bozia-a-ucastenstvo",
                    "author": "E. A. Hoffman",
                    "verses": [
                        [
                            "Buď milosť Pána Jezu Krista, a láska Božia a účastenstvo",
                            "Ducha svätého so všetkými, so všetkými, nech je so všetkými.",
                            "Amen, amen, amen, amen."
                        ]
                    ]
                },
                {
                    "name": "V Pánovi nemal by som plesať, srdce keď Jeho lásku zná?!",
                    "number": 7,
                    "lang": "sk",
                    "url": "v-panovi-nemal-by-som-plesat-srdce-ked-jeho-lasku-zna",
                    "author": "E. A. Hoffman",
                    "verses": [
                        [
                            "1. V Pánovi nemal by som plesať, srdce keď Jeho lásku zná?!",
                            "Neváhal slávu neba nechať, zostúpil na zem v tele k nám."
                        ],
                        [
                            "2. V Pánovi, duša moja, teš",
                            "sa, dôkazy Jeho lásky máš.",
                            "Ej, nieto nad ňu láska väčšia: za nás mrel, vedie v domov náš."
                        ],
                        [
                            "3. Oslavuj Pána, zem ty celá, zakvitol Jeho lásky kvet,",
                            "Boží ľud môže rozpnúť kriela,",
                            "nad bahno hriechu vyletieť."
                        ],
                        [
                            "4. Pánovi spievaj, ľude Boží, ovocím Jeho lásky si.",
                            "Hoci svet svoju zlobu množí, víťazné vedieš zápasy."
                        ],
                        [
                            "5. Oslavuj Pána dušou celou, v Jeho ktos´ láske našiel skrýš.",
                            "Spásy zvesť hlásaj ľuďom smelo, v Kristovej sile zvíťazíš."
                        ]
                    ]
                },
                {
                    "name": "Hospodin Zástupov, Boh",
                    "number": 8,
                    "lang": "sk",
                    "url": "hospodin-zastupov-boh",
                    "author": "Rastislav",
                    "verses": [
                        [
                            "1. Hospodin Zástupov, Boh",
                            "požehnaný večne; celý svet pozná Ho,Boha Pána nášho. Haleluja, haleluja. Haleluja, haleluja.Od vekov naveky, od vekov naveky, od vekov naveky všetci Ho chváľte vďačne."
                        ],
                        [
                            "2. Nie v ľudí, bo sú tieň, nie v telo, ktoré hynie: My v Neho dúfame,",
                            "On nikdy neklame. Haleluja, haleluja. Haleluja, haleluja.",
                            "Len Ty sa k nám tiež znaj, len Ty sa k nám tiež znaj, len Ty sa k nám",
                            "tiež znaj, ó dobrý Hospodine!"
                        ],
                        [
                            "3. Preblažený ten ľud, čo v Kristu Teba hľadá, a Kráľa večného",
                            "rád nesie sladké jho. Haleluja, haleluja. Haleluja, haleluja.",
                            "Tvoje ramä večné, Tvoje ramä večné, Tvoje ramä večné jemu",
                            "zahynúť nedá!"
                        ],
                        [
                            "4. Tvoja rada stojí vzdor pýche",
                            "a lži pekla! Čos´ počal nenecháš,",
                            "by skazil satanáš. Haleluja, haleluja. Haleluja, haleluja.",
                            "Od slávy k sláve vždy, od slávy k slávy vždy, od sláve k slávy",
                            "vždy pôjde Tvoja ríš svetla!"
                        ],
                        [
                            "5. Ó, Pane daj i nám, nech v bázni slova Tvojho verne beh konáme",
                            "všade, zvlášte v chráme. Haleluja, haleluja. Haleluja, haleluja.",
                            "Až niekdy padneme, až niekdy padneme, až niekdy padneme,",
                            "u trónu Baránkovho!"
                        ]
                    ]
                },
                {
                    "name": "Čože Ti dáme",
                    "number": 9,
                    "lang": "sk",
                    "url": "coze-ti-dame",
                    "author": "E. A. Hoffman",
                    "verses": [
                        [
                            "1. Čože Ti dáme,",
                            "Pane, za dary prehojné?",
                            "Akože uctiť meno",
                            "Tvoje tak dôstojné?"
                        ],
                        [
                            "2. Svety Ťa neobsiahnú,",
                            "v pokore sklonia sa.",
                            "Plná zem slávy Tvojej,",
                            "plné i nebesá."
                        ],
                        [
                            "3. Nežiadaš drahokamy,",
                            "zlato, ni striebra kov.",
                            "Od Teba požičané",
                            "robia z nás dlžníkov."
                        ],
                        [
                            "4. Chceme dať srdcia",
                            "vďačné, našich pier vyznanie,nad to už ľúbeznejších obetí nemáme."
                        ],
                        [
                            "5. Na veky buď Ti chvála,",
                            "večnému Pánovi.",
                            "Za lásku Teba sláviť",
                            "duch náš je hotový."
                        ]
                    ]
                },
                {
                    "name": "Nože, verní prespevujte",
                    "number": 10,
                    "lang": "sk",
                    "url": "noze-verni-prespevujte",
                    "author": "E. A. Hoffman",
                    "verses": [
                        [
                            "1. Nože, verní prespevujte,",
                            "Boha srdcom oslavujte,",
                            "hoc´ by časom sveta hložie",
                            "chcelo dusiť pravdy Božie.",
                            "Nech sa búri pekla brána,",
                            "trvať bude cirkev Pána."
                        ],
                        [
                            "2. Už sa Slovo Pána množí,",
                            "čujte ho vy, čo ste Boží;",
                            "pohŕdajte sveta klamom,",
                            "nádej zložte v Kristu samom.",
                            "Od cisterní prázdnych, lživých, bežte k studnici vôd živých."
                        ],
                        [
                            "3. Už Pán, Kristus vládne",
                            "v Svojich, ukazuje, kto",
                            "v Ňom stojí: Ja som život, pravda, cesta jediná do slávy mesta.",
                            "Mimo mňa nič v svete stále,",
                            "iba smrť a večné žiale."
                        ],
                        [
                            "4. Zjavil sa syn zatratenia, Babylonu zánik zvonia.",
                            "Vyjdi von, môj ľude, z neho, nezašpiň sa hriechmi zlého,",
                            "chcem ho raniť večnou smrťou, neunikne pred pokutou."
                        ],
                        [
                            "5. Protivenstvá vždy svet strojí každému, kto v pravde stojí;",
                            "my však nič sa nestrachujme, milosťou sa upevňujme",
                            "Krista,Kráľa nebeského,",
                            "za nás  na smrť vydaného."
                        ]
                    ]
                },
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
            "name": "Mladeznicke jako lepe pesme",
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

