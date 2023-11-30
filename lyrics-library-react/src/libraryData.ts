import { Library } from "./models/Library";

const jsonData = {
    "numberOfSongBooks": 5,
    "songBooks": [
        {
            "name": "Duchovne Piesne",
            "url": "duchovne-piesne",
            "numberOfSongs": 484,
            "languges": [
                "sk"
            ],
            "songs": [
                {
                    "name": "Chválime Ťa, Bože náš",
                    "number": 1,
                    "lang": "sk",
                    "url": "chvalime-ta-boze-nas",
                    "author": "",
                    "verses": [
                        [
                            "1. Chválime Ťa, Bože náš, vďačne, vrúcne, z celej sily,",
                            "že Ty, veľký k nám sa znáš, hoc sme hnev Tvoj zaslúžili.",
                            "Od vekov si naveky, svätý Bože, veliký!"
                        ],
                        [
                            "2. Celá zem i nebesá, svety, pred Tebou sa koria,",
                            "k Tebe tvorstvo vinie sa, velebia Ťa púšte, moria.",
                            "Tvoja múdrosť bezodná vesmír drží dovedna."
                        ],
                        [
                            "3. Tvojho ľudu zástupy slávia Ťa a verných zbory,",
                            "že si z vín ich vykúpil, hrdinov z nich viery stvoril.",
                            "Celá cirkev chválou znie za prijaté spasenie."
                        ],
                        [
                            "4. Dokonca Ťa budeme oslavovať, Otče milý,",
                            "ku Tebe kým prídeme, daj by sme Ťa nezradili!",
                            "Baránkov kým začne hod, v milosti nás svojej voď!"
                        ]
                    ]
                },
                {
                    "name": "Haleluja, chváľte Boha",
                    "number": 2,
                    "lang": "sk",
                    "url": "haleluja-chvalte-boha",
                    "author": "",
                    "verses": [
                        [
                            "1. Haleluja! Chváľte Boha v nebi Jeho stvorenie, ",
                            "po vesmírnej hviezdnej dráhe mohutná nech pieseň znie.",
                            "Stvoriteľa Boha chváľte, slnce, mesiac s hviezdami,",
                            "Jeho oslavujte vďačne, všetko nech znie chválami."
                        ],
                        [
                            "REF.: Chváľte, chváľte nebies Pána, všetci k chvále spojte sa!",
                            "Jeho slávy nech sú plné, Jeho slávy nech sú plné, ",
                            "Jeho slávy nech sú plné moria, zem i nebesá!"
                        ],
                        [
                            "2. Chváľte Boha všetky veci, ktoré stvoril rozkazom.",
                            "Rozhlasujte ľudia všetci, On že sám je vladárom. ",
                            "Pozemšťania, veľkí, malí, starci spolu s dietkami,",
                            "Jemu zaspievajte žalmy, všetko nech znie chválami."
                        ],
                        [
                            "REF.: Chváľte, chváľte..."
                        ],
                        [
                            "3. Vzdajte chvály najzvučnejšie, duše Kristom spasené,",
                            "z vašich sŕdc nech najvrúcnejšie pieseň chvály stále znie.",
                            "Sláva Pánu Ježišovi, ktorý za nás život dal, srdce k nemu",
                            "láskou horí, spievajme mu žalmy chvál.",
                            "   ",
                            "REF.: Chváľte, chváľte..."
                        ],
                        [
                            "4. Haleluja! Chváľme Boha, Stvoriteľa slávneho, ",
                            "ktorý k hriešnym prišiel zhora, zachrániť chce každého. ",
                            "Celým srdom dušou, telom Jemu chválu vzdávajme,",
                            "On je naším Spasiteľom, s radosťou to hlásajme!"
                        ],
                        [
                            "REF.: Chváľte, chváľte..."
                        ]
                    ]
                },
                {
                    "name": "Boh je dobrý",
                    "number": 3,
                    "lang": "sk",
                    "url": "boh-je-dobry",
                    "author": "",
                    "verses": [
                        [
                            "1. Boh je dobrý, Boh je dobrý, ",
                            "Boh je dobrý, On je tak dobrý mne."
                        ],
                        [
                            "2. On Syna dal, On Syna dal, ",
                            "On Syna dal, On je tak dobrý mne."
                        ],
                        [
                            "3. On mrel za mňa, On mrel za mňa, ",
                            "On mrel za mňa, On je tak dobrý mne."
                        ],
                        [
                            "4. On z mŕtvych vstal, On z mŕtvych vstal, ",
                            "On z mŕtvych vstal, On je tak dobrý mne."
                        ]
                    ]
                },
                {
                    "name": "Boh náš je láska",
                    "number": 4,
                    "lang": "sk",
                    "url": "boh-nas-je-laska",
                    "author": "",
                    "verses": [
                        [
                            "1. Boh náš je láska od večnosti. On základ bytia, prúd milosti.",
                            "Z lásky On stvoril, spravuje svet, kde nieto Jeho, života niet!",
                            "Boh náš je láska, Boh náš je láska."
                        ],
                        [
                            "2. Boh náš je láska od večnosti. On prameň sily, lúč milosti.",
                            "Do rúcha krásy oblieka svet, kde nieto Jeho, radosti niet!",
                            "Boh náš je láska, Boh náš je láska."
                        ],
                        [
                            "3. Boh náš je láska od večnosti. On darcom svätej blaženosti. ",
                            "Vykúpil láskou stratený svet, kde nieto Jeho, spasenia niet!",
                            "Boh náš je láska, Boh náš je láska. "
                        ],
                        [
                            "4. Boh náš je láska od večnosti. Neuzrieš ho však bez svätosti. ",
                            "V ten čarokrásny nadhviezdny svet, bez rúcha slávy prístupu niet.",
                            "Boh náš je láska, Boh náš je láska. "
                        ]
                    ]
                },
                {
                    "name": "Dobroreč Hospodinovi",
                    "number": 5,
                    "lang": "sk",
                    "url": "dobrorec-hospodinovi",
                    "author": "",
                    "verses": [
                        [
                            "1. Dobroreč Hospodinovi, duša, dobrotu Jeho spoznávaj, ",
                            "Jemu sa vydaj, keď vernosť skúša, životom celým česť Mu vzdaj.",
                            "Dobrotu Jeho spoznávaj, životom celým česť Mu vzdaj. Haleluja, Haleluja."
                        ],
                        [
                            "2. Naveky Hospodin nemá hnevu, v láske Mu nieto rovného,",
                            "otcovský skláňa sa k pokornému, netrápi tvora žiadneho.",
                            "V láske Mu nieto rovného, netrápi tvora žiadneho. Haleluja, Haleluja."
                        ],
                        [
                            "3. Dobre je chváliť Ťa, Hospodine, osláviť má Ťa každý tvor. ",
                            "Kráľovstvo nik Ti z rúk neodníme, vďačne Ti spieva verných zbor. ",
                            "Osláviť má Ťa každý tvor, vďačne Ti spieva verných zbor. Haleluja, Haleluja."
                        ]
                    ]
                },
                {
                    "name": "Buď milosť Pána Jezu Krista",
                    "number": 6,
                    "lang": "sk",
                    "url": "bud-milost-pana-jezu-krista",
                    "author": "",
                    "verses": [
                        [
                            "Buď milosť Pána Jezu Krista, a láska Božia a účastenstvo ",
                            "Ducha svätého so všetkými, so všetkými, nech je so všetkými. ",
                            "Amen, amen, amen, amen. "
                        ]
                    ]
                },
                {
                    "name": "V Pánovi nemal by som plesať?",
                    "number": 7,
                    "lang": "sk",
                    "url": "v-panovi-nemal-by-som-plesat",
                    "author": "",
                    "verses": [
                        [
                            "1. V Pánovi nemal by som plesať, srdce keď Jeho lásku zná?!",
                            "Neváhal slávu neba nechať, zostúpil na zem v tele k nám."
                        ],
                        [
                            "2. V Pánovi, duša moja, teš sa, dôkazy Jeho lásky máš.",
                            "Ej, nieto nad ňu láska väčšia: za nás mrel, vedie v domov náš."
                        ],
                        [
                            "3. Oslavuj Pána, zem ty celá, zakvitol Jeho lásky kvet,",
                            "Boží ľud môže rozpnúť kriela, nad bahno hriechu vyletieť."
                        ],
                        [
                            "4. Pánovi spievaj, ľude Boží, ovocím Jeho lásky si.",
                            "Hoci svet svoju zlobu množí, víťazné vedieš zápasy."
                        ]
                    ]
                },
                {
                    "name": "Hospodin Zástupov",
                    "number": 8,
                    "lang": "sk",
                    "url": "hospodin-zastupov",
                    "author": "",
                    "verses": [
                        [
                            "5. Oslavuj Pána dušou celou, v Jeho ktos´ láske našiel skrýš.",
                            "Spásy zvesť hlásaj ľuďom smelo, v Kristovej sile zvíťazíš. ",
                            " ",
                            "1. Hospodin Zástupov, Boh požehnaný večne; celý svet pozná Ho,",
                            "Boha Pána nášho. Haleluja, haleluja. Haleluja, haleluja.",
                            "Od vekov naveky, od vekov naveky, od vekov naveky všetci Ho ",
                            "chváľte vďačne.   "
                        ],
                        [
                            "2. Nie v ľudí, bo sú tieň, nie v telo, ktoré hynie: My v Neho dúfame,",
                            "On nikdy neklame. Haleluja, haleluja. Haleluja, haleluja. ",
                            "Len Ty sa k nám tiež znaj, len Ty sa k nám tiež znaj, len Ty sa k nám ",
                            "tiež znaj, ó dobrý Hospodine!"
                        ],
                        [
                            "3. Preblažený ten ľud, čo v Kristu Teba hľadá, a Kráľa večného ",
                            "rád nesie sladké jho. Haleluja, haleluja. Haleluja, haleluja.",
                            "Tvoje ramä večné, Tvoje ramä večné, Tvoje ramä večné jemu ",
                            "zahynúť nedá!"
                        ],
                        [
                            "4. Tvoja rada stojí vzdor pýche a lži pekla! Čos´ počal nenecháš,",
                            "by skazil satanáš. Haleluja, haleluja. Haleluja, haleluja.",
                            "Od slávy k sláve vždy, od slávy k slávy vždy, od sláve k slávy vždy",
                            "pôjde Tvoja ríš svetla!"
                        ],
                        [
                            "5. Ó, Pane daj i nám, nech v bázni slova Tvojho verne beh konáme",
                            "všade, zvlášte v chráme. Haleluja, haleluja. Haleluja, haleluja.",
                            "Až niekdy padneme, až niekdy padneme, až niekdy padneme, ",
                            "u trónu Baránkovho!"
                        ]
                    ]
                },
                {
                    "name": "Čože Ti dáme, Pane",
                    "number": 9,
                    "lang": "sk",
                    "url": "coze-ti-dame-pane",
                    "author": "",
                    "verses": [
                        [
                            "1. Čože Ti dáme, Pane, za dary prehojné? ",
                            "Akože uctiť meno Tvoje tak dôstojné?"
                        ],
                        [
                            "2. Svety ťa neobsiahnú, v pokore slonia sa.",
                            "Plná zem slávy Tvojej, plné i nebesá."
                        ],
                        [
                            "3. Nežiadaš drahokamy, zlato, ni striebra kov.",
                            "Od Teba požičané robia z nás dlžníkov."
                        ],
                        [
                            "4. Chceme dať srdcia vďačné, našich pier vyznanie,",
                            "nad to už ľúbeznejších obetí nemáme. "
                        ],
                        [
                            "5. Na veky buď Ti chvála, večnému Pánovi.",
                            "Za lásku Teba sláviť duch náš je hotový."
                        ]
                    ]
                },
                {
                    "name": "Nože, verní, prespevujte",
                    "number": 10,
                    "lang": "sk",
                    "url": "noze-verni-prespevujte",
                    "author": "",
                    "verses": [
                        [
                            "1. Nože, verní prespevujte, Boha srdcom oslavujte,",
                            "hoc´ by časom sveta hložie chcelo dusiť pravdy Božie.",
                            "Nech sa búri pekla brána, trvať bude cirkev Pána. "
                        ],
                        [
                            "2. Už sa Slovo Pána množí, čujte ho vy, čo ste Boží;",
                            "pohŕdajte sveta klamom, nádej zložte v Kristu samom.",
                            "Od cisterní prázdnych, lživých, bežte k studnici vôd živých."
                        ],
                        [
                            "3. Už Pán, Kristus vládne v Svojich, ukazuje, kto v Ňom stojí:",
                            "Ja som život, pravda, cesta jediná do slávy mesta. ",
                            "Mimo mňa nič v svete stále, iba smrť a večné žiale.    "
                        ],
                        [
                            "4. Zjavil sa syn zatratenia, Babylonu zánik zvonia. ",
                            "Vyjdi von, môj ľude, z neho, nezašpiň sa hriechmi zlého,",
                            "chcem ho raniť večnou smrťou, neunikne pred pokutou."
                        ],
                        [
                            "5. Protivenstvá vždy svet strojí každému, kto v pravde stojí;",
                            "my však nič sa nestrachujme, milosťou sa upevňujme Krista,",
                            "Kráľa nebeského, za nás  na smrť vydaného."
                        ]
                    ]
                },
                {
                    "name": "Hosanna! Ide požehnaný Kráľ",
                    "number": 11,
                    "lang": "sk",
                    "url": "hosanna-ide-pozehnany-kral",
                    "author": "",
                    "verses": [
                        [
                            "1. Hosana! Ide požehnaný Kráľ, ide v mene Pána! Na výsosti Hosana!",
                            "V mene Pána prichádza už k nám. Zrak svoj pozdvihnite k nebesám! ",
                            "Hosianna! Hosianna! Hosanna na výsosti! Hosanna! Na výsosti!"
                        ],
                        [
                            "2. Haleluja! Nech sláva Jemu znie, tomu, ktorý na svet priniesol ",
                            "nám spasenie! Nech Ho chváli vojsko nebeské, pejú zbory verných ",
                            "pozemské! Haleluja! Haleluja! Buď Mu večná sláva česť. ",
                            "Buď Mu večná sláva česť. "
                        ]
                    ]
                },
                {
                    "name": "Haleluja! Nech slávu česť",
                    "number": 12,
                    "lang": "sk",
                    "url": "haleluja-nech-slavu-cest",
                    "author": "",
                    "verses": [
                        [
                            "1. Haleluja! Nech slávu česť chce v piesni Bohu každý niesť,",
                            "sú veľké skutky Jeho! Nech od vekov až k večnosti, Pán Boh ",
                            "náš plný milosti, má poctu od každého. Slávte, vravte: Svätý, ",
                            "svätý, večne svätý je Boh, náš Pán. Chválospev znej zo všetkých strán.  "
                        ],
                        [
                            "2. Haleluja! I Kristus Pán čo strpel za nás množstvo rán, nech ",
                            "oslavný spev čuje, On zvolil si nás za Svoj ľud a zbavil hriechu,",
                            "diabla pút, nám večnosť zaisťuje. Pejte! Znejte spevy vďaky nad ",
                            "oblaky k chvále Jeho, Darcu mieru nebeského! "
                        ],
                        [
                            "3. Haleluja! Aj Svätý Duch nám daný iba zo zásluh a lásky Spasiteľa.",
                            "Ním tiež sme znovu zrodení a so Ženíchom spojení. Nuž spievaj, ",
                            "cirkev celá. Hlasné, časné v našom pení raz sa zmení v hudbu novú, ",
                            "večnú pieseň Baránkovu."
                        ],
                        [
                            "4. Haleluja! Nech slávu česť chce každý nášmu Bohu niesť v Trojici ",
                            "jedinému. Nuž, s anjelským náš spev sa dnes ta hore vďačne, ",
                            "vrúcne vznes až k trónu nebeskému. Amen, Amen, svätý, svätý, ",
                            "večne svätý je Boh, náš Pán. Nech znie chvála zo všetkých strán!"
                        ]
                    ]
                },
                {
                    "name": "Ó, Bohu buď česť",
                    "number": 13,
                    "lang": "sk",
                    "url": "o-bohu-bud-cest",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, Bohu buď česť, že sa Otcom nám stal, ",
                            "z raja vyhnaných do rodiny si vzal."
                        ],
                        [
                            "REF.: Haleluja, chváľte Pána, Haleluja, Amen!",
                            "Znej Mu vďaka večer, zrána a po celý deň!"
                        ],
                        [
                            "2.  Ó, Bohu buď česť, že raz Baránok mrel, ",
                            "Jeho krv vracia hriešnym nevinný peľ."
                        ],
                        [
                            "REF.: Haleluja, chváľte..."
                        ],
                        [
                            "3. Ó, Bohu buď česť, že čo Duch vedie nás, ",
                            "Boží na obraz tvár nám premieňa zas. "
                        ],
                        [
                            "REF.: Haleluja, chváľte..."
                        ]
                    ]
                },
                {
                    "name": "Poskoč, srdce, od radosti",
                    "number": 14,
                    "lang": "sk",
                    "url": "poskoc-srdce-od-radosti",
                    "author": "",
                    "verses": [
                        [
                            "1. Poskoč, srdce, od radosti, spievaj Hospodinu, ",
                            "že nám dožiť dal z milosti túto hodinu.",
                            "/: On ju požehnal a nám radosť dal. Ó, nech Ti ",
                            "je večná chvála, mocný nebies Pán :/"
                        ],
                        [
                            "2. Poskoč, srdce, od radosti, privítaj deň nový.",
                            "Ktokoľvek si Jeho ctiteľ, spievaj Pánovi.",
                            "/: Jeho milujme, Jemu spievajme, chváľme,",
                            "chváľme, chváľme Pána! Sláva buď Bohu! :/"
                        ]
                    ]
                },
                {
                    "name": "Tak znie sladko meno Ježiš",
                    "number": 15,
                    "lang": "sk",
                    "url": "tak-znie-sladko-meno-jezis",
                    "author": "",
                    "verses": [
                        [
                            "1. Tak znie sladko meno Ježiš, ono lieči každý bôľ. ",
                            "V srdci, ktoré pevne verí, radosť, pokoj zavládol."
                        ],
                        [
                            "REF.: Radostne v srdci znie pieseň o Ježišovi.",
                            "O inom nespievam, o svojom len Kráľovi."
                        ],
                        [
                            "2. Napred v mene Ježišovom, On je našou záchranou,",
                            "v Jeho mene odrazíme každý útok satanov. "
                        ],
                        [
                            "REF.: Radostne v srdci znie..."
                        ],
                        [
                            "3. Pejme vďačne Ježišovi, rozhlasujme Jeho česť!",
                            "Poďme v zbore vykúpených slávu Jeho mena niesť!"
                        ],
                        [
                            "REF.: Radostne v srdci znie..."
                        ]
                    ]
                },
                {
                    "name": "Svätý, svätý",
                    "number": 16,
                    "lang": "sk",
                    "url": "svaty-svaty",
                    "author": "",
                    "verses": [
                        [
                            "1. Svätý, svätý, svätý je náš Boh! Každé nech srdce na česť Mu plesá!",
                            "Celý svet je podnož Jeho nôh, korte sa mu a klaňajte sa! ",
                            "Mocný je v láske, nesmierny v moci, v milosti veľký kráľov je Kráľ.",
                            "Svätý, svätý, svätý je náš Boh, korte sa Mu a klaňajte sa!"
                        ],
                        [
                            "2. Hospodina chváľte s radosťou! Pred Jeho slovom hory sa trasú.",
                            "Život klíči Jeho milosťou, Jeho ruka rozsieva krásu. ",
                            "V kráľovstve Jeho smrť právo stráca, pred Jeho žezlom uteká hriech!",
                            "Svätý, svätý, svätý je náš Boh, korte sa Mu a klaňajte sa!"
                        ],
                        [
                            "3. Meno svojho Pána velebme, Jemu nech večná česť je a chvála. ",
                            "Hriešnikom zvesť radostnú nesme, že len milosť nás zachovala. ",
                            "Víťazov vence pred Jeho trónom bárs by sme mohli položiť raz.",
                            "Svätý, svätý, svätý je náš Boh, korte sa Mu a klaňajte sa!"
                        ]
                    ]
                },
                {
                    "name": "Chváľme Boha",
                    "number": 17,
                    "lang": "sk",
                    "url": "chvalme-boha",
                    "author": "",
                    "verses": [
                        [
                            "1. Chváľme Boha, dobrotivý že je, s vrúcnou vďakou ",
                            "nech Mu poctu vzdá, cirkev celá nech Mu k sláve peje, ",
                            "/: Jeho láska, že je bezodná. :/ "
                        ],
                        [
                            "2. Chváľme Boha v Synovi, že milom otvoril nám cestu do neba.",
                            "Vyhlasujme v speve ušľachtilom: /: Jeho láska, k nám je bezodná. :/"
                        ],
                        [
                            "3. Chváľme Boha, kto sme z ľudu Jeho, nech znie svetom ",
                            "tá zvesť  radostná, že je v Kristu milosť pre každého,",
                            "/: Božia láska, k nám je bezodná. :/"
                        ]
                    ]
                },
                {
                    "name": "Je jasno v mojom srdci",
                    "number": 18,
                    "lang": "sk",
                    "url": "je-jasno-v-mojom-srdci",
                    "author": "",
                    "verses": [
                        [
                            "1. Je jasno v mojom srdci dnes, viac ako býva tam,",
                            "kde slnko svieti hrejivé, mne žiari Ježiš sám. "
                        ],
                        [
                            "REF.: Tak je jasno krásne jasno. Blažená a šťastná chvíľa tá,",
                            "keď Ježišovu zrieť smiem tvár, v mojom srdci jasno je."
                        ],
                        [
                            "2. Znie pieseň v mojom srdci dnes, spev o tej milosti,",
                            "čo vedie moje kroky vpred a z bied ma vyprostí."
                        ],
                        [
                            "REF.: Tak je jasno krásne..."
                        ],
                        [
                            "3. Dnes vládne v mojom srdci jar, veď poznám prameň síl!",
                            "Tú vôňu a ten spevu dar Pán Ježiš vydobyl."
                        ],
                        [
                            "REF.: Tak je jasno krásne..."
                        ],
                        [
                            "4. Je radosť v mojom srdci dnes, a nádej, chvála, slasť.",
                            "Smiem čakať s pevnou istotou, že uzriem večnú vlasť."
                        ],
                        [
                            "REF.: Tak je jasno krásne..."
                        ]
                    ]
                },
                {
                    "name": "Ó, duša, spievaj",
                    "number": 16,
                    "lang": "sk",
                    "url": "o-dusa-spievaj",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, duša spievaj a chválu vzdávaj, kúpil ťa Ježiš krvou sebe.",
                            "Zbavil pút zlého, Ducha svojeho ku spaseniu dal On v ňom tebe.",
                            "- Ó, srdce moje, vzdaj Jemu česť, bo zachovať ťa On mocný je!",
                            "Len spievaj s chválou a nedbaj žiaľov. Boj skončí skoro už."
                        ],
                        [
                            "2. Večnosti kraje v nich rozkoš zraje, sú teraz žitia môjho už cieľ!",
                            "To mesto Sálem uprostred paliem večne mám dostať hľa, za podiel!",
                            "- Jak biedne všetko je na zemi oproti tomu, čo kynie mi v ústrety.",
                            "Jasám domova krásam, čo až tam spočiniem. "
                        ],
                        [
                            "3. Len malá chvíľa a dôjdem cieľa, do preskvúcich  tých, ach, raja brán!",
                            "Prostý už zlého Priateľa môjho zriem, ktorý za mňa bol v obeť dan!",
                            "- Ó, čuj to nebe i celá zem! Pri Jeho tróne ja bývať smiem, ",
                            "kde kynú palmy a znejú žalmy večne ku Jeho cti!"
                        ]
                    ]
                },
                {
                    "name": "Poď, zaplesajme radosťou",
                    "number": 20,
                    "lang": "sk",
                    "url": "pod-zaplesajme-radostou",
                    "author": "",
                    "verses": [
                        [
                            "1. Poď, zaplesajme radosťou „Boh nás má rád!“ Jeho sa tešme milosťou: ",
                            "„Boh nás má rád!“ Vy hriešni zo sna vstávajte spasenie večné hľadajte, ",
                            "noc smrti zmizla, jasajte: „Boh nás má rád! Boh nás má rád, Boh nás má rád. ",
                            "Poďte, plesajme radosťou: „Boh nás má rád!“"
                        ],
                        [
                            "2. Oznámte všade hriešnikom: „Boh nás má rád!“ Im k spáse stal sa dieťaťom.",
                            "„Boh nás má rád!“ Prišiel Spasiteľ presvätý, mrieť na výšinách Golgoty. ",
                            "Vykúpený sme ja a ty! „Boh nás má rád!“ Boh nás má rád, Boh nás má rád. ",
                            "Poďte, plesajme radosťou: „Boh nás má rád!“"
                        ],
                        [
                            "3. Ty, ktos´ Ho prijal, zajasaj: „Boh nás má rád!“ Dobrotu jeho okušaj;",
                            "„Boh nás má rád!“ V Ňom slnko i štít máme svoj; nádeje lásky v Ňom je zdroj. ",
                            "On stíši všetku žalosť boj. „Boh nás má rád!“ Boh nás má rád, Boh nás má rád.",
                            "Poďte, plesajme radosťou: „Boh nás má rád!“"
                        ]
                    ]
                },
                {
                    "name": "Zvelebuj Pána, ó, srdce moje!",
                    "number": 21,
                    "lang": "sk",
                    "url": "zvelebuj-pana-o-srdce-moje",
                    "author": "",
                    "verses": [
                        [
                            "1. Zvelebuj Pána, ó, srdce moje! Do smrti vždy Ho chváliť chcem,",
                            "kým ešte v svete mám sídlo svoje, kým Jemu ku cti spievať smiem.",
                            "On, ktorý telo, dušu dal, prijmi oznovu hymnu chvál. Haleluja! Haleluja! "
                        ],
                        [
                            "2. Šťastný, ó, šťastný je, ktorý dúfa, že Boh mu príde na pomoc, ten,",
                            "ktorý vo viere si nezúfa, bo nádejou mu Krista moc! ",
                            "Ó, komu Ježiš vodcom je, ten vždy si dobre radiť vie. Haleluja! Haleluja! "
                        ],
                        [
                            "3. A keď je ktorý aj ukrivdený, On spravednosť mu prislúži. ",
                            "Lačný vždy môž´ byť Ním nasýtený; bo dá, čo k zdraviu poslúži. ",
                            "Zviazaných mocne rozviaže, divnú tak milosť ukáže. Haleluja! Haleluja!"
                        ],
                        [
                            "4. No nepravých ľudí kroky smelé ramenom silným zarazí, ",
                            "tak že zmotajú sa v hriechoch cele, padnú vo vlastné povrazy. ",
                            "Boh nad tebou vždy bdie, Sion; večným je Pánom, kráľom On. Haleluja, Haleluja."
                        ],
                        [
                            "5. Vyvýšte, ó ľudia, divov prameň! Zvelebujte Ho radostne.",
                            "Všetko, čo život má, zvolaj: „Amen!“ a sláv to meno milostné. ",
                            "Vy, dietky Božie, ctite Ho, ach, Boha trojjediného. Haleluja! Haleluja!"
                        ]
                    ]
                },
                {
                    "name": "Ó, Bože môj",
                    "number": 22,
                    "lang": "sk",
                    "url": "o-boze-moj",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, Bože môj, v stálom udivení tom myslím na to, ",
                            "čo Ty si učinil: hviezdy jasné i desné hromobytie, ",
                            "vesmír celý, jak slovom si stvoril."
                        ],
                        [
                            "REF.: Duša moja Ťa piesňou velebí, jak, Bože môj, si veliký!",
                            "Duša moja Ťa piesňou velebí, jak, Bože môj, si veliký!"
                        ],
                        [
                            "2. Keď putujem krásami prírodnými a čujem spev ",
                            "tam vtáctva prekrásny. A keď hľadím v nádherné krásy dolín, ",
                            "žblnkot čujem potôčkov tak vzácny."
                        ],
                        [
                            "REF.: Duša moja..."
                        ],
                        [
                            "3. Keď nad všetko vidím tú lásku Tvoju, jak človeka ",
                            "si veľmi miloval, žes’ Syna svojho jednorodeného ",
                            "vydal na kríž, za nás neľutoval."
                        ],
                        [
                            "REF.: Duša moja..."
                        ],
                        [
                            "4. Až Pán Ježiš príde pre Cirkev svoju, do oblakov ",
                            "ju k sebe zavolá, tam pochopím tú veľkú lásku Tvoju, ",
                            "spievať duša moja neodolá."
                        ],
                        [
                            "REF.: Duša moja..."
                        ]
                    ]
                },
                {
                    "name": "Poď zaspievajme zvučne",
                    "number": 23,
                    "lang": "sk",
                    "url": "pod-zaspievajme-zvucne",
                    "author": "",
                    "verses": [
                        [
                            "1. Poď zaspievajme zvučne o Pánu Ježiši,",
                            "On veľkých nás i malých, je priateľ najlepší.",
                            "Nad cherubíny v sláve vysoko trón svoj má,",
                            "a predsa naše hlasy milostne prijíma.    ",
                            "  ",
                            "2. Jak milo spievať o Ňom; keď z neba prišiel k nám",
                            "a pre spasenie naše dal v obeť seba sám.",
                            "On Pán, dedič všetkého vzal nízku podobu,",
                            "ochotne znášal hanu, biedu i chudobu."
                        ],
                        [
                            "3. Jak milo o Ňom spievať a hlásať Jeho česť.",
                            "On dobrý je ku všetkým a chce v nebe uviesť.",
                            "Žiadnemu neodoprel v súžení pomoci, ",
                            "uzdravuje milostne a cíti v nemoci."
                        ],
                        [
                            "4. Jak milo spievať o Ňom, že slávne z mŕtvych vstal",
                            "a smrťou, diablom, peklom víťazne bojoval.",
                            "Všetkých nás vyvolených verným On vodcom je",
                            "a v boji s nepriateľom víťazstvo daruje.  "
                        ],
                        [
                            "5. Nuž teda pejme o Ňom, kým je duša s telom,",
                            "nech Ho ctíme i potom v nebi novým spevom!",
                            "Chceš, by ťa Ježiš vyznal? Ty ho smelo vyznaj ",
                            "a dá ti v nebi uzrieť svoj svätý obličaj."
                        ]
                    ]
                },
                {
                    "name": "Kde Kristus kraľuje",
                    "number": 24,
                    "lang": "sk",
                    "url": "kde-kristus-kraluje",
                    "author": "",
                    "verses": [
                        [
                            "1. Kde Kristus kraľuje, tam život v blahu je ",
                            "a radosť vetvy vyženie, keď On dá zmierenie. "
                        ],
                        [
                            "2. Kto Jemu vzdoruje svoj bôľ si zhoršuje",
                            "a diel má v pekla trápení, od Boha vzdialený."
                        ],
                        [
                            "3. Boh musí kraľovať, moc v Kristu zaujať ",
                            "a súlad celým vesmírom má zavládnuť len v Ňom."
                        ],
                        [
                            "4. Ó, vzácne zmierenie, keď Božie stvorenie ",
                            "On zo vzdychov a bolestí raz navždy vyprostí."
                        ],
                        [
                            "5. Ten bude kraľovať, kto vedel milovať a s Kristom ",
                            "vojde v slávu tam, kde Boh má blaha chrám."
                        ],
                        [
                            "6. Tam každé koleno raz bude skloneno",
                            "a každý jazyk vyzná rád, že Pán má kraľovať."
                        ],
                        [
                            "7. Boh všetko vo všetkom, duch každý zjasá v Ňom",
                            "i každá radosť vrcholí a chválou hlaholí."
                        ]
                    ]
                },
                {
                    "name": "Slávte, slávte",
                    "number": 25,
                    "lang": "sk",
                    "url": "slavte-slavte",
                    "author": "",
                    "verses": [
                        [
                            "1. Slávte, slávte, života Knieža vždy slávte, ohlasujte Jeho moc národom!",
                            "Sláva, sláva, jasajte, synovia Boží, prespevujte spásu že máte v Ňom!",
                            "Ako pastier vodí si ovce svoje, jahniatka si na rukách nosieva."
                        ],
                        [
                            "REF.: Slávte, pejte, Ježiš je Spasiteľ sveta, ",
                            "slávte, pejte, hlásajte s jasaním."
                        ],
                        [
                            "2. Slávte, slávte, Baránka Božieho slávte, niesol naše hriechy na Golgotu.",
                            "Vyvyšujte hriešnikom meno to vzácne: Ježiš, Ježiš cesta je k životu.",
                            "Po celý čas miloval teba Ježiš, nezabúdaj, čo v Jeho mene máš."
                        ],
                        [
                            " REF.: Slávte, pejte..."
                        ],
                        [
                            "3. Slávte, slávte, zástupcu hriešnikov slávte, jasaj, duša z milosti spasená!",
                            "On je Pánom života, smrti a súdu, do Jeho rúk všetka moc vložená. ",
                            "Čoskoro už zjaví sa v sláve neba všetkým ľuďom na súd a spasenie."
                        ],
                        [
                            "REF.: Slávte, pejte... "
                        ]
                    ]
                },
                {
                    "name": "Kto berieš podiel v milosti",
                    "number": 26,
                    "lang": "sk",
                    "url": "kto-beries-podiel-v-milosti",
                    "author": "",
                    "verses": [
                        [
                            "1. Kto berieš podiel v milosti a v spasení večnom,",
                            "zaspievaj pieseň radosti o mene zázračnom!"
                        ],
                        [
                            "REF.: Ježiš je Spasiteľ, spievajme, Jemu česť najvyššiu vzdávajme!",
                            "V Ňom plnosť Božia zložená vždy má byť slávená!",
                            "  ",
                            "2. Prúd lásky život majúcej rozlial sa z Golgoty. ",
                            "Hriešnikov, ktorí pili z nej, Boh prijal za deti."
                        ],
                        [
                            "REF.: Ježiš je Spasiteľ, spievajme..."
                        ],
                        [
                            "3. To meno: „Ježiš“ anjeli slávne zvelebujú,",
                            "v Ňom skrytú silu spasenia veľmi obdivujú."
                        ],
                        [
                            "REF.: Ježiš je Spasiteľ, spievajme..."
                        ],
                        [
                            "4. Jemu svedectvo dávajú proroci od vekov,",
                            "že dal sa na smrť k spaseniu stratených hriešnikov. "
                        ],
                        [
                            "REF.: Ježiš je Spasiteľ, spievajme..."
                        ],
                        [
                            "5. Ó, zvýšme i my Jeho moc, spásu nekonečnú:",
                            "Ježiš rozhania hriecha noc, vedie v slávu večnú.."
                        ],
                        [
                            "REF.: Ježiš je Spasiteľ, spievajme..."
                        ]
                    ]
                },
                {
                    "name": "Sláva buď Bohu na nebi!",
                    "number": 27,
                    "lang": "sk",
                    "url": "slava-bud-bohu-na-nebi",
                    "author": "",
                    "verses": [
                        [
                            "1. Sláva buď Bohu na nebi! Vďačne Ho srdce velebí,",
                            "/: že dal nám svojho Syna milého, čo odblesk svojej osoby. :/"
                        ],
                        [
                            "2. V Ňom Boha Otcom voláme, s Ním v obecenstve trváme,",
                            "/: vo svetle Jeho a v láske z Neho v podobu Krista vzrastáme. :/"
                        ],
                        [
                            "3. Chceme Ťa chváliť, Otče náš, verne Ti slúžiť, Pane náš,",
                            "/: že k blaha zdrojom v Synovi svojom nás pozemšťanov pripúšťaš. :/"
                        ],
                        [
                            "4. Svätý Duch je náš Tešiteľ, je sľúbený nám Učiteľ,",
                            "/: nás posväcuje a uisťuje, že máme s Kristom večný diel. :/"
                        ]
                    ]
                },
                {
                    "name": "Radujme sa, veseľme sa",
                    "number": 28,
                    "lang": "sk",
                    "url": "radujme-sa-veselme-sa",
                    "author": "",
                    "verses": [
                        [
                            "1. Radujme sa, veseľme sa, Boh nám práva synov dal,",
                            "radujme sa, veseľme sa, spievajme Mu žalmy chvál."
                        ],
                        [
                            "REF.: Radovanie, chvály vzdanie zmenia srdce v lásky chrám,",
                            "kde sa chvály stále nové vzňali a kde tróni Boh náš sám."
                        ],
                        [
                            "2. Nevýslovná láska Božia otcovský nás objíma, ",
                            "chráni, bráni v každej dobe, koho má On za syna. "
                        ],
                        [
                            "REF.: Radovanie, chvály vzdanie..."
                        ],
                        [
                            "3. Kto však od Neho sa vzdiali cestou vlastných žiadostí,",
                            "nedbá na zdroj lásky Jeho, zbavuje sa radosti."
                        ],
                        [
                            "REF.: Radovanie, chvály vzdanie...  "
                        ],
                        [
                            "4. Cestou svetla idú k cieľu duše Pánu oddané, ",
                            "preto Jemu žime, mrime, On sa Svojich zastane."
                        ],
                        [
                            "REF.: Radovanie, chvály vzdanie..."
                        ]
                    ]
                },
                {
                    "name": "Teba, Bože, Otca vekov",
                    "number": 29,
                    "lang": "sk",
                    "url": "teba-boze-otca-vekov",
                    "author": "",
                    "verses": [
                        [
                            "1. Teba, Bože, Otca vekov, Pána tvorstva všetkého,",
                            "oslavujú zem i nebo, aj my z srdca vrúcneho. ",
                            "Vesmír vzdáva chválu Tebe; Cherubín a Serafín ",
                            "skvelou hudbou plnia nebe: Svätý, svätý Hospodin!  "
                        ],
                        [
                            "2. Ty, ó, Kriste, Kráľu slávy, Otca svetiel večný Syn,",
                            "na kríži si muky znášal za náš hriech a množstvo vín. ",
                            "Ty si osteň smrti zlomil, nebo verným získal sám.",
                            "Krvou svojou si nás obmyl, práva synov dal si nám. "
                        ],
                        [
                            "3. Pane, ktorý v sláve nebies po pravici Otca dlieš,",
                            "ktorý budeš vesmír súdiť a už i dnes všetko vieš,",
                            "ráč nám prispieť ku pomoci, dary svojho Ducha daj,",
                            "veď nás ta, kde nieto noci, spas ľud svoj a požehnaj."
                        ]
                    ]
                },
                {
                    "name": "Nech znejú chválospevy",
                    "number": 30,
                    "lang": "sk",
                    "url": "nech-zneju-chvalospevy",
                    "author": "",
                    "verses": [
                        [
                            "1. Nech znejú chválospevy až k nebies výšinám!",
                            "Ježiš, Kráľ večnej slávy, spasenie získal nám."
                        ],
                        [
                            "2. Ó, žehnaj, Cirkvi svojej Duchu síl, múdrosti,",
                            "aby len k sláve Tvojej vzrastala z milosti."
                        ],
                        [
                            "3. Roznecuj lásku v srdciach, bratstvo milovania,",
                            "rozmáhať v dobrých skutkoch, v slove vzdelávania!"
                        ],
                        [
                            "4. Jako ruža sáronská nech je Cirkev Tvoja,",
                            "jako vôňa libanská, i v nej sláva Tvoja!"
                        ],
                        [
                            "5. Čisté slovo života zachráň v Cirkvi svojej,",
                            "nech sa delí od sveta, stojí v pravde Tvojej."
                        ],
                        [
                            "6. Až bránou ulíc zlatých vstúpi Cirkev Tvoja,",
                            "zazvučí hudba svätých a k nej sa pripoja."
                        ]
                    ]
                },
                {
                    "name": "Spievajme Bohu novú pieseň",
                    "number": 31,
                    "lang": "sk",
                    "url": "spievajme-bohu-novu-piesen",
                    "author": "",
                    "verses": [
                        [
                            "1. Spievajme Bohu novú pieseň veľký div s nami učinil.",
                            "Rameno Jeho vykonalo, z ľudí čo nik by nemal síl.",
                            "Na milosť Pán sa rozpomenul a dal nám večnú záchranu, ",
                            "ktorú tí, čo sa odcudzili, vo viere tiež raz dostanú."
                        ],
                        [
                            "2. Celá zem s všetkým, čo je na nej, slávu mu vďačne prevolaj.",
                            "Spievajte hlasne a nadšene, ozvena nech znie v sveta kraj.",
                            "Citarou tiež si vypomôžte, chváľte Ho zvučne na trúby, ",
                            "Kráľovi sveta chválospev váš úprimný nech sa zaľúbi."
                        ],
                        [
                            "3. More nech hučí vlnobitím sveta kruh nech sa zobudí.",
                            "Rukami tlieskajte aj rieky, spôsobte radosť u ľudí. ",
                            "Pán Boh je spravodlivý sudca, potrestá pyšné národy, ",
                            "poriadok spraví podľa práva, chorú zem pravdou obrodí."
                        ]
                    ]
                },
                {
                    "name": "Spev dolín a šum hory",
                    "number": 32,
                    "lang": "sk",
                    "url": "spev-dolin-a-sum-hory",
                    "author": "",
                    "verses": [
                        [
                            "1. Spev dolín a šum hory i žírnej nivy lán, lúč krásny rannej zory ",
                            "i búrny oceán, svit slnka, jagot hviezdy, kvet nežnej ľalie, ",
                            "to všetko slávu Bohu zvestuje."
                        ],
                        [
                            "REF.: Slávu Bohu všemocnému nech tiež všetko tvorstvo vzdá,",
                            "pokloní sa vďačne Jemu za Ježiša, za dar spasenia. "
                        ],
                        [
                            "2. Keď Kráľa svojho slávi zem celá, nebesá, či Jeho obraz pravý ",
                            "človek by neplesal? Keď skutky Božej lásky dnes udržuje svet,",
                            "či z nášho srdca nemá chvála znieť?"
                        ],
                        [
                            " REF.: Slávu Bohu všemocnému..."
                        ],
                        [
                            "3. Nech letia k Tvojmu trónu sŕdc našich piesne chvál, veď šťastný je ten, ",
                            "komu sa Ježiš Kráľom stal! Ten v nebi v rúchu bielom ",
                            "môcť bude v sláve stáť a pieseň Baránkovu vyspievať."
                        ],
                        [
                            "REF.: Slávu Bohu všemocnému..."
                        ]
                    ]
                },
                {
                    "name": "Pánovi všetci spievajte",
                    "number": 33,
                    "lang": "sk",
                    "url": "panovi-vsetci-spievajte",
                    "author": "",
                    "verses": [
                        [
                            "1. Pánovi všetci spievajte, kdekoľvek ktorí bývate,",
                            "poďte k Nemu s dôvernosťou a slúžte Mu vždy s radosťou.",
                            "       ",
                            "2. To, vedzte, že je On Boh náš, nie mi seba, On stvoril nás ",
                            "a my sme ľud vyvolení, sťa kŕdeľ oviec chránený."
                        ],
                        [
                            "3. Chválu srdečnej vďačnosti vzdajte, Jeho velebnosti,",
                            "Jeho meno vyvyšujte, chváľte, ctite, oslavujte."
                        ],
                        [
                            "4. Veď dobroty je plný on a od vekov má slávy trón",
                            "i pravda Jeho odveká, čo zachraňuje človeka."
                        ]
                    ]
                },
                {
                    "name": "Vzdaj chválu",
                    "number": 34,
                    "lang": "sk",
                    "url": "vzdaj-chvalu",
                    "author": "",
                    "verses": [
                        [
                            "1. Vzdaj chválu všemocnému Bohu, Kráľovi neba!",
                            "Ó, duša, v pokore za podnož zlož Jemu seba!",
                            "Zapej žalmy, oslavy chystaj palmy! Jemu buď vďaka veleba!"
                        ],
                        [
                            "2. Vzdaj chválu Bohu, ktorý celý svet sám spravuje,",
                            "On ako orlica nesie ťa a ochraňuje! Či necítiš,",
                            "v čej mocnej ruke ležíš, kto ťa živí, zveľaďuje?"
                        ],
                        [
                            "3. Vzdaj Pánu chválu, česť, svojemu Stvoriteľovi,",
                            "Darcovi zdravia a života Riaditeľovi! Tak často ",
                            "On pomohol ti stíšil ston, šťastia svit zažal zas nový.  "
                        ],
                        [
                            "4. Vzdaj Pánu chválu, česť: nádherné sláv meno Jeho!",
                            "Všetko v čom život je, zvelebuj Boha večného! V Ňom svetlo je; ",
                            "v Ňom duša blaho tvoje. Ó, ži v svete len pre Neho!"
                        ]
                    ]
                },
                {
                    "name": "Nad Betlemom",
                    "number": 35,
                    "lang": "sk",
                    "url": "nad-betlemom",
                    "author": "",
                    "verses": [
                        [
                            "1. Nad Betlemom Dávidovým skláňala sa tmavá noc,",
                            "Boh keď poslal zahynulým Svojho Syna na pomoc."
                        ],
                        [
                            "REF.: Sláva Bohu! Sláva Bohu! že miluje biedny ľud;",
                            "Nám posiela Spasiteľa a v Ňom život, radosť kľud."
                        ],
                        [
                            "2. V hriechu vo tmách, bez nádeje ľudstvo celé hynulo,",
                            "Boh keď splnil sľuby svoje, keď sa svetlo zjavilo. "
                        ],
                        [
                            " REF.: Sláva Bohu! Sláva Bohu! že..."
                        ],
                        [
                            "3. Prišiel Mesiáš sľubovaný vzdychy väzňov utíšiť,",
                            "zlámať putá, liečiť rany, rok milosti vyhlásiť."
                        ],
                        [
                            "REF.: Sláva Bohu! Sláva Bohu! že..."
                        ],
                        [
                            "4. Nechcel miesto na palácoch, stajňu slávnou urobil.",
                            "I dnes hľadá miesto v srdciach, by ich spásou ozdobil."
                        ],
                        [
                            "REF.: Sláva Bohu! Sláva Bohu! že..."
                        ],
                        [
                            "5. Kráľa kráľov uvítajte, ó, mešťania pozemskí,",
                            "stan srdca Mu otvárajte, otvorí vám nebeský. "
                        ],
                        [
                            "REF.: Sláva Bohu! Sláva Bohu! že... "
                        ]
                    ]
                },
                {
                    "name": "Čujte, aká vzácna pieseň",
                    "number": 36,
                    "lang": "sk",
                    "url": "cujte-aka-vzacna-piesen",
                    "author": "",
                    "verses": [
                        [
                            "1. Čujte aká vzácna pieseň rozlieha sa po nebi!",
                            "Anjeli a vojsko nebies Pána Boha velebí!",
                            "Je to pieseň o radosti pre nás, Jeho stvorenie:",
                            "Sláva Bohu na výsosti, sila moc i spasenie!"
                        ],
                        [
                            "2. Pokoj! V ľuďoch zasľúbenie! Raj sa zase otvoril!",
                            "Ľudskému zas pokoleniu Pán Boh slávu pripravil. ",
                            "Narodil sa z čistej Panny v meste v Betleheme dnes Spasiteľ,",
                            "kráľ zvestovaný, k nemu aj ty vstúpiť smieš!"
                        ],
                        [
                            "3. Poďte všetci, Jemu slúžte, v ňom svoj pokoj majte len,",
                            "kým raz v jasnej nebies ríši večný svitne slávny deň.",
                            "Tam už bied a hriechov prostí zaspievame nadšene:",
                            "Sláva Bohu na výsosti, sila moc i spasenie!"
                        ]
                    ]
                },
                {
                    "name": "Tichá noc, svätá noc",
                    "number": 37,
                    "lang": "sk",
                    "url": "ticha-noc-svata-noc",
                    "author": "",
                    "verses": [
                        [
                            "1. Tichá noc, svätá noc. Vo sna taj stíchol kraj. ",
                            "Len tam, hľa v úžase presvätom, bdeje pár ",
                            "nad božským dieťaťom, v svätom čo pokoji spí, čo v pokoji spí."
                        ],
                        [
                            "2. Tichá noc, svätá noc, Svätý chór z nebies hôr",
                            "pastierom v Betleme na poli: spásnu zvesť radostne ",
                            "hlaholí Kristus sa narodil vám! Kristus prišiel k vám!"
                        ],
                        [
                            "3. Tichá noc, svätá noc, Boží Syn, prostý vín,",
                            "preveľkou láskou len nútený, zostúpil na svet náš stratený,",
                            "spasenie priniesol nám. Prišiel Kristus Pán."
                        ]
                    ]
                },
                {
                    "name": "V nadhviezdnej výšine",
                    "number": 38,
                    "lang": "sk",
                    "url": "v-nadhviezdnej-vysine",
                    "author": "",
                    "verses": [
                        [
                            "1. V nadhviezdnej výšine, v presvätej tíšine anjelov plesania ",
                            "zhlaholil hlas, že z dávna žiadanej, prorokmi hlásanej, ",
                            "milosti Hospodin naplnil čas."
                        ],
                        [
                            "2. Z kráľovstva večnosti do stanu zemskosti Syn Boží jediný",
                            "obrátil krok. By človek zaplesal, telesnosť na sa vzal, ",
                            "slobody večitej prehlásil rok."
                        ],
                        [
                            "3. Zrodenie spasenia, Božieho zmierenia, velebne zvolená",
                            "pokryla noc. V jasličkách spočinul, k ľudstvu sa privinul Pán,",
                            "ktorý večnú má slávu i moc."
                        ],
                        [
                            "4. Zmiluj sa Ježiši, Syn Boží najvyšší! Sílo, Immanuel,",
                            "prídi i k nám! Ó, Knieža pokoja! Satana rozbroje premáhať,",
                            "zvíťaziť pomáhaj nám!"
                        ],
                        [
                            "5. V nadhviezdnej výšine, v presvätej tíšine anjelov plesania",
                            "zhlaholil hlas, že z dávna žiadanej, prorokmi hlásanej, ",
                            "milosti Hospodin naplnil čas."
                        ]
                    ]
                },
                {
                    "name": "Haleluja zemou hlása",
                    "number": 39,
                    "lang": "sk",
                    "url": "haleluja-zemou-hlasa",
                    "author": "",
                    "verses": [
                        [
                            "1. Haleluja zemou hlása, Kristus nám narodil sa, sláva Bohu, ",
                            "zbor anjelov, radosťou hlása veľkou."
                        ],
                        [
                            "REF.: Sláva Bohu na výsosti, pokoj ľuďom na zemi,",
                            "to anjelia zvestovali, plní cti a veleby."
                        ],
                        [
                            "2. Tá chudobná maštaľ malá, Teba Pána prijala, ",
                            "keď pastieri hlas dostali, k maštali ponáhľali.     "
                        ],
                        [
                            "REF.: Sláva Bohu na výsosti..."
                        ],
                        [
                            "3. A keď oni dnuka vošli, nemlúvniatko tam našli,",
                            "oni sa Mu radovali, a chválu Bohu vzdali."
                        ],
                        [
                            "REF.: Sláva Bohu na výsosti..."
                        ],
                        [
                            "4. Haleluja všetci spolu, vzdajme Mu zato chválu,",
                            "že miesto za našu žalosť, v Ňom máme pokoj radosť."
                        ],
                        [
                            "REF.: Sláva Bohu na výsosti... "
                        ]
                    ]
                },
                {
                    "name": "Predivný prišiel k nám",
                    "number": 40,
                    "lang": "sk",
                    "url": "predivny-prisiel-k-nam",
                    "author": "",
                    "verses": [
                        [
                            "1. Predivný prišiel k nám človeka Syn, za nás vzal na seba bremeno vín.",
                            "Do ríše hriechu a bezodných bied zostúpil Boží Syn vykúpiť svet."
                        ],
                        [
                            "REF.: Predivné meno má, predivne pomáha, ",
                            "sprevádza pútnika svetlom i tmou. Predivná Golgota, ",
                            "tam náruč rozpätá láskou ma objala prepodivnou. "
                        ],
                        [
                            "2. Predivnou cestou šiel života Kráľ, biednym bol priateľom, liek na bôľ mal. ",
                            "Každému prinášal radostnú zvesť, zomdleným pomáhal bremeno niesť."
                        ],
                        [
                            "REF.: Predivné meno má..."
                        ],
                        [
                            "3.Predivne zomrel, vstal k životu zas, premenil v teplú jar hrobový mráz:",
                            "premohol smrti noc, vykúpil nás, odišiel prichystať nebeskú vlasť."
                        ],
                        [
                            "REF.: Predivné meno má..."
                        ],
                        [
                            "4. Predivne plní sa zasľúbenie: krajiny k žatve sú pripravené,",
                            "predivnú nádej mám: stretnem sa s Ním, s Kráľom a víťazom osláveným. ",
                            "REF.: Zaspievam pieseň chvál, že mi vždy pomáhal, sprevádzal pútnika svetlom ",
                            "i tmou. Pre kríž a Golgotu k večnému životu láskou ma doviedol prepodivnou."
                        ]
                    ]
                },
                {
                    "name": "Otče, žes´ nám Syna dal",
                    "number": 41,
                    "lang": "sk",
                    "url": "otce-zes-nam-syna-dal",
                    "author": "",
                    "verses": [
                        [
                            "1. Otče, žes´ nám Syna dal, prijmi za to obeť chvál. ",
                            "Za tú milosť, dobrotu, lásku vrelú bohatú."
                        ],
                        [
                            "2. A Ty Spasiteľu náš, Si ten pravý Mesiáš. Už od ",
                            "vekov čakaný a prorokmi hlásaný."
                        ],
                        [
                            "3. Keď čas ten sa naplnil, aj sľub sa nám vyplnil.",
                            "Anjelia sa radujú a pastierom zvestujú."
                        ],
                        [
                            "4. Veľká radosť na nebi, pokoj ľuďom na zemi,",
                            "v Tebe slávny Ježišu, sľúbený Mesiášu!"
                        ]
                    ]
                },
                {
                    "name": "Zvestujem vám radosť",
                    "number": 42,
                    "lang": "sk",
                    "url": "zvestujem-vam-radost",
                    "author": "",
                    "verses": [
                        [
                            "1. Zvestujem vám radosť, ktorá páru nemá: Porodila panna,",
                            "Duchom navštívená, Kráľa nebeského. Chváľme s nebešťanmi",
                            "Pána zrodeného."
                        ],
                        [
                            "2. Proroci to dávno v proroctvách už znali, príchod Mesiáša",
                            "na zem zvestovali. Prišla plnosť času, ľud čo po Ňom túžil,",
                            "uzrel Jeho krásu."
                        ],
                        [
                            "3. Slnko, mesiac, hviezdy v jasný svoj svit menia, zvestujú ",
                            "tak radosť z Jeho narodenia. Každé zo stvorenia očakáva ",
                            "nádej svojho vykúpenia. "
                        ],
                        [
                            "4. Hľaďte na to Dieťa krásne, utešené, zavinuté v plienkach,",
                            "v jasliach uložené. Vesmír sa Mu korí, vzdávajú Mu chválu ",
                            "nebešťanov zbory."
                        ],
                        [
                            "5. Slávime Ťa s nimi, Kriste narodený, radujúc sa v Tebe ",
                            "v našom vykúpení. Veď nás von z temností, z dolín, žiaľu,",
                            "plaču večnej do radosti."
                        ]
                    ]
                },
                {
                    "name": "Skala vekov",
                    "number": 43,
                    "lang": "sk",
                    "url": "skala-vekov",
                    "author": "",
                    "verses": [
                        [
                            "1. Skala vekov, v svoju skrýš priviň ma, v nej srdce stíš.",
                            "Vnor ma v svätej krvi zdroj, všetky rany hriechu zhoj.",
                            "Príď, ó, príď mi na pomoc, odpusť hriech, znič, jeho moc!"
                        ],
                        [
                            "2. Nárek nezbaví ma múk, nepomôže práca rúk.  V priepasť",
                            "vedie moja púť musím biedne zahynúť. Neviem kade neviem",
                            "kam, ku Tebe sa utiekam. "
                        ],
                        [
                            "3. Prázdne ruky vystieram, oči na kríž upieram; nahý som,",
                            "Ty odev daj, bezmocného požehnaj! Vrúcnych prosieb ",
                            "počuj hlas, Spasiteľu, spas ma spas!"
                        ],
                        [
                            "4. Až mi biely smrti mráz zavrie oči pre svet raz, by sa ",
                            "otvorili tam, kde Ty súdiť budeš sám, Skala vekov,",
                            "v svoju skrýš priviň ma, v nej stíš ma stíš!"
                        ]
                    ]
                },
                {
                    "name": "Hľa Baránka ako vedú",
                    "number": 44,
                    "lang": "sk",
                    "url": "hla-baranka-ako-vedu",
                    "author": "",
                    "verses": [
                        [
                            "1. Hľa Baránka ako vedú, toho Kráľa slávy ",
                            "a korunu z tŕňa kladú na vrch Jeho hlavy!"
                        ],
                        [
                            "2.Otec vydal svojho Syna, jak predivný cieľ mal;",
                            "by On, čo obeť príjemná nám k spaseniu sa dal."
                        ],
                        [
                            "3. Božia moc Ho povýšila, už na tróne sedí!",
                            "„Spravedlnosť, čo Ho bila nám milosť pečatí.“"
                        ],
                        [
                            "4. Ty si svätý, ó, Bože  náš, pred Tebou padáme,",
                            "Ty nás na svojom lone máš, Otcom Ťa voláme."
                        ],
                        [
                            "5. Večnej smrti sme sa báli, dnes nemá moc svoju,",
                            "s Kristom sme z hrobu povstali, spievať pieseň novú."
                        ]
                    ]
                },
                {
                    "name": "Nevinnosť premilá",
                    "number": 45,
                    "lang": "sk",
                    "url": "nevinnost-premila",
                    "author": "",
                    "verses": [
                        [
                            "1. Nevinnosť premilá, čímže si zvinila? Za koho umieraš,",
                            "za koho viny lkáš? Bez reptania odovzdaná za koho umieraš,",
                            "za koho viny kláš?"
                        ],
                        [
                            "2. Zomiera bez viny Boží Syn jediný na kríži rozpätý, tichý",
                            "a presvätý. Za tvoju zlosť, za neprávosť zomiera bez viny ",
                            "Boží Syn jediný."
                        ],
                        [
                            "3. Človeče, pred Ním stoj, oľutuj život svoj! Za tvoj hriech,",
                            "neposluch platil Pán strašný dlh. Opusť zlosti, neprávosti ",
                            "pre Jeho mučenie, bys´ mal v Ňom spasenie."
                        ],
                        [
                            "4. S Bohom sa svätým zmier, v spásnu moc krvi ver. ",
                            "Priateľa drahého Pána milostného, v smrti ranách tvojho Pána ",
                            "Boh sám ťa objíma, prijíma za syna."
                        ]
                    ]
                },
                {
                    "name": "Kto túžiš po milosti",
                    "number": 46,
                    "lang": "sk",
                    "url": "kto-tuzis-po-milosti",
                    "author": "",
                    "verses": [
                        [
                            "1. Kto túžiš po milosti, hľaď s vierou na Golgotu, ",
                            "tam kde Ježiš v bolesti vylial za nás krv svätú."
                        ],
                        [
                            "REF.: V Ňom spása dáva sa hneď všetkým kajúcim, ",
                            "hriešnik milosť obdrží len v Jeho kríži."
                        ],
                        [
                            "2. „Dokonané!“ Zvesť blahá! Šťastný, kto jej uverí!",
                            "Kto Kristu žiť neváha, bohato ho obdarí."
                        ],
                        [
                            "REF.: V Ňom spása dáva sa..."
                        ],
                        [
                            "3. Ó, poď už dnes, hriešniku! Ježiš čaká na teba.",
                            "Váž si lásku velikú, z ktorej umrel za teba."
                        ],
                        [
                            "REF.: V Ňom spása dáva sa..."
                        ],
                        [
                            "4. Čuj, človeče Jeho hlas, nepohŕdaj spasením",
                            "daj Mu srdce, kým je čas, večne budeš blažený!"
                        ],
                        [
                            "REF.: V Ňom spása dáva sa..."
                        ]
                    ]
                },
                {
                    "name": "Kde Ježiš môj kríž podstúpil",
                    "number": 47,
                    "lang": "sk",
                    "url": "kde-jezis-moj-kriz-podstupil",
                    "author": "",
                    "verses": [
                        [
                            "1. Kde Ježiš môj kríž podstúpil, tam sa mi Boh tiež sám zjavil.",
                            "Dal Svoju krv, ó, Golgota, tam našiel som chlieb života."
                        ],
                        [
                            "REF.: Ach, Golgota ty presmutná, krv Ježišova tečie tam. ",
                            "Ach, Golgota ty presvätá, kde žriedlo večnej spásy mám.  "
                        ],
                        [
                            "2. Triasla sa zem a zhasol deň, keď pretrpel Pán smrti tieň. ",
                            "Dokonané! Tam zavolal a k milosti vstup vyzískal."
                        ],
                        [
                            "REF.: Ach, Golgota ty presmutná..."
                        ],
                        [
                            "3. Ježišu môj, krv vzácna tá aj za mňa tam je preliata?",
                            "Ó, srdce, drž si v pamäti, že spásu máš v tej obeti."
                        ],
                        [
                            "REF.: Ach, Golgota ty presmutná..."
                        ]
                    ]
                },
                {
                    "name": "Ó, hlava v mukách",
                    "number": 48,
                    "lang": "sk",
                    "url": "o-hlava-v-mukach",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, hlava v mukách, v žiali, rán plná pre môj hriech, tŕň krvou ",
                            "zrak Ti kalí, si svetu za posmech! Ty, hlava, ozdobená cťou, ",
                            "slávou milosťou, ó, ako pohanená si ľudskou hriešnosťou."
                        ],
                        [
                            "2. Kam zaniesť biedu svoju, kam s bôľom tým sa skryť, že trest ",
                            "za vinu moju si musel podstúpiť! Žiť nový život, Pane, ",
                            "som vrúcne zatúžil a čakám zľutovanie, veď smrť som zaslúžil        "
                        ],
                        [
                            "3. Ó, ako vyriecť chválu, kde slávospevy vziať? Či možno, ",
                            "žitia Kráľu, dosť Tebe ďakovať, že Tvojim smiem byť, Pane?",
                            "Daj vernosti mi cnosť, skry do svojej ma dlane pre čas i pre večnosť."
                        ],
                        [
                            "4. Buď mojim pevným štítom a zažeň strachu tieň. Buď do tmy ",
                            "svetla svitom, buď silou v smrti deň. I vtedy duša moja sa k Tebe ",
                            "privinie. Tak vprostred smrti boja istotne nezhynie!"
                        ]
                    ]
                },
                {
                    "name": "Na kríži ukrvavený",
                    "number": 49,
                    "lang": "sk",
                    "url": "na-krizi-ukrvaveny",
                    "author": "",
                    "verses": [
                        [
                            "1. Na kríži ukrvavený, hnevom Božím umorený, za hriechy moje ",
                            "zranený vysels´ Jezu milený. Čo ja činím pre Teba? Čo ja činím pre ",
                            "Teba? V také muky dal Si seba! Čo ja činím pre Teba?"
                        ],
                        [
                            "2. Ó, Tvoj život vzácny, drahý, za mňa dals´ Baránku Boží, moje ",
                            "ním Si splatil dlhy, smrti dal si sa za mňa. Čo činil som pre Teba?",
                            "Čo činil som pre Teba? Ty na smrť Si vydal seba! Čo činil som pre Teba?"
                        ],
                        [
                            "3. Zákon hodil zlorečenstvo, ach na celé človečenstvo; len Tvoje ",
                            "milosrdenstvo navždy uvoľnilo mňa. Ja nežil som pre Teba; Ja nežil ",
                            "som pre Teba; bárs´ Ty v obeť dal Si seba, ja nežil som pre Teba."
                        ],
                        [
                            "4. Pane jakým som nevďačným, že tak pozde na to myslím, z celého sa",
                            "srdca hanbím. Spasiteľu, nauč mňa. Od dneska žiť pre Teba. Od dneska ",
                            "žiť pre Teba. Ó, Spasiteľu nauč mňa, od dneska žiť pre Teba!"
                        ]
                    ]
                },
                {
                    "name": "Na Golgote",
                    "number": 50,
                    "lang": "sk",
                    "url": "na-golgote",
                    "author": "",
                    "verses": [
                        [
                            "1. Na Golgote, na boľastnej, raz trpel Boží Syn;",
                            "tam na kríži nesie ťarchu celého sveta vín. "
                        ],
                        [
                            "2. Medzi lotrov zavesený zomiera ťažko tam;",
                            "posmievaný, opustený, trpí hnev Boží sám. "
                        ],
                        [
                            "3. Už dotrpel dokončil boj, minula mrákota!",
                            "Zomrel Ježiš, s ním i hriech tvoj. Chváľ Darcu života! "
                        ],
                        [
                            "4. Ó, Ježišu, Tys´ pokoj náš, a Tvoja svätá krv ",
                            "obmýva vinu v každý čas a krotí Boží hnev."
                        ],
                        [
                            "5. Ja som, Pane, smrť zavinil, ja pekla horkosť sám.",
                            "Teba hriechom Boh učinil, v Tebe odpustil nám."
                        ],
                        [
                            "6. Ó, Ježišu, vezmi moje srdce za výplatu, za ",
                            "ukrutné muky Tvoje, za strašnú Golgotu!"
                        ]
                    ]
                },
                {
                    "name": "Na Golgote slávnej",
                    "number": 51,
                    "lang": "sk",
                    "url": "na-golgote-slavnej",
                    "author": "",
                    "verses": [
                        [
                            "1. Na Golgote slávnej výšine čaká ľudstvo spásu jedine.",
                            "Tam Baránok Boží presvätý, na kríži, ach, hrozne rozpätý,",
                            "volá v mukách smrti hodine: „Ó, hriešniku, žíznim za teba! ",
                            "Ó, poď ku mne; za teba, ó, poď ku mne, Ja ťa spasím!“"
                        ],
                        [
                            "2. Zem sa trasie, skaly pukajú, svätí z hrobov živí vstávajú. ",
                            "Slnko hasne; na svet padla noc, ľudské srdcia zviera strachu moc. ",
                            "Opona sa trhá v svätyni. Ježiš volá: „Žíznim, hriešniku! Ó, poď ",
                            "ku mne, hriešniku! Ó, poď ku mne,",
                            "Ja ťa spasím!“"
                        ],
                        [
                            "3. Hľa, koruna z tŕnia rozryla čelo na ňom svätosť sídlila.",
                            "Vidíš, ako srdce ustáva? Vidíš, ako Ježiš skonáva? Čuj, ",
                            "s posledným dychom čo volá: „Ó, hriešniku, žíznim po tebe!",
                            "Ach, poď ku mne; po tebe! Ach poď ku mne, Ja ťa spasím!“"
                        ],
                        [
                            "4. Ó, hriešniku, prečo odchádzaš? Prečo srdce svoje zatváraš?",
                            "Čie priestupky sú to súdené? Čie krivdy, ach na Ňom pomstené?",
                            "Kto tú smrť strašlivú zavinil? „Ja a ty hriešniku! Ach, tak poď ",
                            "na Golgotu; poď ó poď k Ježišovi! On ťa spasí!“"
                        ]
                    ]
                },
                {
                    "name": "Na hore Golgoty",
                    "number": 52,
                    "lang": "sk",
                    "url": "na-hore-golgoty",
                    "author": "",
                    "verses": [
                        [
                            "Na hore Golgoty, kde kríž drevený stál, čo znak hanby, utrpenia,",
                            "ja milujem ten kríž, na ňom Ježiš zmieral, by nám zjednal vykúpenie."
                        ],
                        [
                            "REF.: Preto milujem ten Kristov kríž. Keď sa môj ten zemský zborí stan;",
                            "On vezme ma k sebe v nebies ríš. Kde za kríž korunu dá mne Pán."
                        ],
                        [
                            "Ten horký Kristov kríž, ním tak rád zhŕdal svet, má predivnú nádej pre mňa;",
                            "krížom tým mne môj Pán otvoril nebies raj a sprostil večného ohňa."
                        ],
                        [
                            "V kríži tom sa teším, zaň vzdávam Kristu česť, lebo lásku mi v srdce vzňal;",
                            "hanu jak Pán niesol pre mňa, ja preň chcem niesť, by s Ním večnú slasť požíval."
                        ]
                    ]
                },
                {
                    "name": "Ježiš pred Pilátom",
                    "number": 53,
                    "lang": "sk",
                    "url": "jezis-pred-pilatom",
                    "author": "",
                    "verses": [
                        [
                            "1. Ježiš pre Pilátom stojí tam, zradený, bez bratov, sám a sám.",
                            "Otázka zaznieva stadiaľ k nám: S Ježišom ja čo spravím?",
                            "S Ježišom ty čo spravíš? Odpovedz sebe sám. Príde čas, musíš ",
                            "sa pýtať: „Čo spraví so mnou Pán?“ "
                        ],
                        [
                            "2. Na súde ešte vždy Ježiš dlie, verný chceš jemu byť, lebo nie? ",
                            "Pýta sa vlastné ťa svedomie: S Ježišom ja čo spravím? S Ježišom",
                            "ty čo spravíš? Odpovedz sebe sám. Príde čas, musíš sa pýtať: ",
                            "„Čo spraví so mnou Pán?“ "
                        ],
                        [
                            "3. Vyhneš sa? Pilát tak učinil. Zvolíš ho za to, že vykúpil?",
                            "Márne bys´ otázku umŕtvil: S Ježišom ty čo spravíš? S Ježišom ty ",
                            "čo spravíš? Odpovedz sebe sám. Príde čas, musíš sa pýtať: ",
                            "„Čo spraví so mnou Pán?“  "
                        ],
                        [
                            "4. Vyznávaš jeho, že tvoj je Pán, alebo zaprieš a budeš sám? Sväté",
                            "a vážne znie znovu k nám: S Ježišom ty čo spravíš? S Ježišom ty čo ",
                            "spravíš? Odpovedz sebe sám. Príde čas, musíš  sa pýtať: ",
                            "„Čo spraví so mnou Pán?“    "
                        ],
                        [
                            "5. Ježišu, srdce ti odovzdám. Ako som, prijmi ma, o to lkám. V ",
                            "Tebe len život i všetko mám. Ty si môj Kráľ, môj Ježiš! S Ježišom",
                            "ty čo spravíš? Odpovedz sebe sám. Príde čas, musíš sa pýtať: ",
                            "„Čo spraví so mnou Pán?“"
                        ]
                    ]
                },
                {
                    "name": "V márnosti som život utrácal",
                    "number": 54,
                    "lang": "sk",
                    "url": "v-marnosti-som-zivot-utracal",
                    "author": "",
                    "verses": [
                        [
                            "1. V márnosti som utrácal, nedbajúc Pána som križoval, nevediac,",
                            "že pre mňa život dal! Na Golgote.",
                            "    ",
                            "REF.: Milosť Božia bola veliká, zdarma bola pre mňa hriešnika.",
                            "Slobodu som našiel pod krížom! Na Golgote."
                        ],
                        [
                            "2. Hriech svoj zrel som v knihe života, spasila ma Božia dobrota. ",
                            "Dušu moju zaujal ten div! Na Golgote.  "
                        ],
                        [
                            "REF.: Milosť Božia bola veliká..."
                        ],
                        [
                            "3. Teraz dal som všetko Ježiši, ktorý je môj poklad najvyšší.",
                            "Srdce moje vždy len spieva si o Golgote."
                        ],
                        [
                            "REF.: Milosť Božia bola veliká..."
                        ],
                        [
                            "4. Láska večná, čo sa nemeníš, ľudské srdce jasom naplníš,",
                            "ktoré vierou k Tebe pozrie sa! Na Golgotu. "
                        ],
                        [
                            "REF.: Milosť Božia bola veliká..."
                        ]
                    ]
                },
                {
                    "name": "V skalný hrob",
                    "number": 55,
                    "lang": "sk",
                    "url": "v-skalny-hrob",
                    "author": "",
                    "verses": [
                        [
                            "1. V skalný hrob vložený mŕtvy, plný rán, ",
                            "ráno vstal vzkriesený Ježiš, môj Pán.  "
                        ],
                        [
                            "REF.: Preč je kameň, žije Pán! Vstal už z mŕtvych, vyšiel z hrobu brán. ",
                            "Žije Pán, už nedrží Ho hrobu noc, Knieža života už zlomil smrti moc. ",
                            "/: Žije Pán :/ Haleluja žije Pán!"
                        ],
                        [
                            "2. Smrti už osteň vzal Spasiteľ môj sám, ",
                            "tým jej moc polámal Ježiš, môj Pán."
                        ],
                        [
                            "REF.: Preč je kameň, žije Pán..."
                        ],
                        [
                            "3. Aj môj hrob otvoril Spasiteľ môj sám ",
                            "pre večné priestory, Ježiš, môj Pán."
                        ],
                        [
                            "REF.: Preč je kameň, žije Pán... "
                        ]
                    ]
                },
                {
                    "name": "Nastal nám čas preradostný",
                    "number": 56,
                    "lang": "sk",
                    "url": "nastal-nam-cas-preradostny",
                    "author": "",
                    "verses": [
                        [
                            "1. Nastal nám čas preradostný, kresťania, jasajte, žije Víťaz ",
                            "veľkonočný, kresťania, spievajte! Vyšiel z hrobu Pán, Spasiteľ, ",
                            "Svojho ľudu Vykupiteľ, chválu Mu prineste!"
                        ],
                        [
                            "2. Na kríži keď v mukách visel, slnko sa zatmilo, ťarchu tú ",
                            "že strpieť prišiel, akoby smútilo. Ale keď vstal, vyšlo v jase, ",
                            "na dôkaz, že svitol zase milosti Božej čas."
                        ],
                        [
                            "3. Zem sa od žalosti chvela, ducha keď vypustil. Jasala, keď ",
                            "spásy diela vzkriesený dovŕšil. Anjeli tiež prišli z neba oznámiť,",
                            "že sláviť treba živého Pána zas."
                        ],
                        [
                            "4. Zapej vďačne, cirkev celá, chvála nech Bohu znie, oslavujme ",
                            "Spasiteľa za naše spasenie. Bohu vďaku vyspievajme za víťazstvo",
                            "Jeho slávne v Kristovi dobyté."
                        ]
                    ]
                },
                {
                    "name": "Žije, žije",
                    "number": 57,
                    "lang": "sk",
                    "url": "zije-zije",
                    "author": "",
                    "verses": [
                        [
                            "Žije, žije, aj hrob prázdny zostal. Žije, žije, Pán Kristus ",
                            "z mŕtvych vstal! Žije, žije tam v sláve nebeskej, ľud Jeho ",
                            "s Ním žiť bude v nej."
                        ],
                        [
                            "1. Keď hriešnici Ho týrali, na kríž pribili, to utrpenie hriechy",
                            "Mu naše zvinili: pot smrteľný a nevinnej krvi kropaje. V Ňom",
                            "dokonaná spása je.  Žije, žije...  "
                        ],
                        [
                            "2. Šiel Jozef telo vyžiadať, z kríža sám ho zňal a uložil v hrob ",
                            "nový tam v lone tvrdých skál, no cez povoje mraky a kameň",
                            "s pečaťou jas života sa prebil tmou. Žije, žije... "
                        ],
                        [
                            "3. Šli učeníci ku hrobu ráno za svitu, tam radostne ich privítal ",
                            "anjel v dobu tú: Pán isto žije, z mŕtvych vstal, hľaďte tu Ho niet,",
                            "to rozhlasujte v šíry svet. Žije, žije..."
                        ],
                        [
                            "4. Aj Mária sa v zármutku pýta, kde je Pán. Tu pred ňou zrazu ",
                            "Pán Ježiš stojí živý sám a prekvapená radostne volá: Rabúni!",
                            "Diel máme v Jeho vzkriesení. Žije, žije... "
                        ]
                    ]
                },
                {
                    "name": "Golgotský víťaz",
                    "number": 58,
                    "lang": "sk",
                    "url": "golgotsky-vitaz",
                    "author": "",
                    "verses": [
                        [
                            "1. Golgotský víťaz, premohol svet, zaspievaj oslavy žalm. Satan už vládu ",
                            "nezíska späť, každý deň Ježiša chváľ. Vyhladil celkom nemoc a hriech, ",
                            "do pekla hlbiny ochotne šiel. Večný je Víťaz, iného niet, každý deň Ježiša chváľ! "
                        ],
                        [
                            "2. Všetko čo máme, vydobil Pán, zaspievaj oslavy žalm. Satan už škodiť nemôže ",
                            "nám, každý deň Ježiša chváľ. Otroctva hriechu pominul čas, predivným menom ",
                            "tiež obdaril nás. Radostný život, nebo dal nám, každý deň Ježiša chváľ!"
                        ],
                        [
                            "3. Ježiš je Víťaz! Dal nám v tom diel, zaspievaj oslavy žalm. Porazil navždy ",
                            "mocnosti zlé, každý deň Ježiša chváľ. Nikto nám pieseň nemôže vziať, v Kristovej ",
                            "slobode budeme stáť. Premohol diabla, odstránil hriech, každý deň Ježiša chváľ! "
                        ]
                    ]
                },
                {
                    "name": "Kristus, Pán vstal z mŕtvych",
                    "number": 59,
                    "lang": "sk",
                    "url": "kristus-pan-vstal-z-mrtvych",
                    "author": "",
                    "verses": [
                        [
                            "1. Kristus, Pán vstal z mŕtvych, k radosti zve nás Divný, ",
                            "Radca, Knieža pokoja a krás. Premohol smrť, peklo, ",
                            "vzal im všetku moc, hlavu hada zničil v túto Veľkú noc."
                        ],
                        [
                            "REF.: S radosťou už spievam: Žije Kristus, Pán. Haleluja,",
                            "Ježiš bratom stal sa nám. Kristus z mŕtvych vstal, znie ",
                            "pozdrav pokoja, v Ňom sa Jeho verným bôle zahoja."
                        ],
                        [
                            "2. Vzdávajte Mu česť, že náš dlh zaplatil, otvoril nám raj  ",
                            "a radosť navrátil. Kristus Pán a Brat náš za nás trpel, mrel, ",
                            "žije a nám život večný schystať šiel."
                        ],
                        [
                            "REF.: S radosťou už spievam... "
                        ],
                        [
                            "3. Mária, ty zvestuj učeníkom zvesť, že som živý. Rýchlo",
                            "choď tú správu niesť. Ku Otcovi idem, k Bohu Svojemu",
                            "a tiež ku Otcovi, Bohu vašemu."
                        ],
                        [
                            "REF.: S radosťou už spievam..."
                        ],
                        [
                            "4. Pozdravuj aj Petra, ktorý ľutuje, že ma zaprel. Povedz:",
                            "Pán ťa miluje. A to mu tiež oznám, že som z mŕtvych vstal,",
                            "odpustil som všetko, by sa radoval."
                        ],
                        [
                            "REF.: S radosťou už spievam... "
                        ],
                        [
                            "Potom prišiel Ježiš k učeníkom tam, v strachu zatvoreným,",
                            "riekol: Pokoj vám! Tu, hľa, moje rany. Ja som, vravím vám. Jak mňa poslal Otec, ja vás posielam."
                        ],
                        [
                            "REF.: S radosťou už spievam..."
                        ],
                        [
                            "S radosťou ja spievam túto pieseň dnes a mám z toho v srdci radosť, jas a ples. ",
                            "Halelujah, spievam k pocte Víťaza, Baránka a nášho Zmiercu, Veľkňaza."
                        ],
                        [
                            "REF.: S radosťou už spievam..."
                        ]
                    ]
                },
                {
                    "name": "Vstal dnes Kristus",
                    "number": 60,
                    "lang": "sk",
                    "url": "vstal-dnes-kristus",
                    "author": "",
                    "verses": [
                        [
                            "1. Vstal dnes Kristus, vstal dnes práve, prázdny je už hrob.",
                            "Víťazne sa nesie k sláve, nedbá pekla zlôb."
                        ],
                        [
                            "REF.: Kristus žije! Smrť, kde osteň tvoj?",
                            "Peklo, víťazstvo kde tvoje? Kristus vyhral boj! "
                        ],
                        [
                            "2. Vstal už! Nech je oslávený drahý Spasiteľ!",
                            "Hrob je hrôzy pozbavený, čo by som sa chvel?"
                        ],
                        [
                            "REF.: Kristus žije..."
                        ],
                        [
                            "3. Vstal už z hrobu v božskej moci aj mňa Jeho hlas ",
                            "v poslednej tej Veľkej noci vzbudí k žitiu zas."
                        ],
                        [
                            "REF.: Kristus žije..."
                        ]
                    ]
                },
                {
                    "name": "Haleluja! Slávny svitol deň",
                    "number": 61,
                    "lang": "sk",
                    "url": "haleluja-slavny-svitol-den",
                    "author": "",
                    "verses": [
                        [
                            "1. Halelujah! Slávny svitol deň. Ježiš Kristus zahnal smrti tieň;",
                            "bránu hrobu polámal, víťazne z mŕtvych vstal. "
                        ],
                        [
                            "REF.: Už sa netreba báť, aj my smieme raz vstať, zaletieť až k výšinám, ",
                            "k večnej slávy končinám, kde smrť už neľaká, radosť kde čaká. Nieto sĺz, ",
                            "niet trápenia vo vlasti vzkriesenia."
                        ],
                        [
                            "2. Halelujah! Boh je zmierený, na Golgote hriech je zhladený. ",
                            "Baránok náš zvíťazil, satana porazil."
                        ],
                        [
                            "REF.: Už sa netreba báť..."
                        ],
                        [
                            "3. Halelujah! Vzácny nastal čas; má už ľudstvo v nebi Otca zas,",
                            "plný lásky, milosti hľadí naň z výsosti."
                        ],
                        [
                            "REF.: Už sa netreba báť..."
                        ],
                        [
                            "4. Haleluja! Srdce zaplesaj! Ver a dúfaj, v smútkoch neklesaj!",
                            "Polož v otvorený hrob bremeno hriechov, mdlôb."
                        ],
                        [
                            "REF.: Už sa netreba báť... "
                        ]
                    ]
                },
                {
                    "name": "Hľa, Baránok",
                    "number": 62,
                    "lang": "sk",
                    "url": "hla-baranok",
                    "author": "",
                    "verses": [
                        [
                            "1. Hľa, Baránok vyvýšený na tróne Otcovom; ",
                            "a slávou korunovaný, všetkého je Pánom."
                        ],
                        [
                            "2. Po pravici Otca sedí, načo aj právo mal. ",
                            "Celé nebe Ho velebí, všetko mu Otec dal."
                        ],
                        [
                            "3. Ak vyvýšený prijíma chválu ľudu svojho,",
                            "i tie najslabšie si všíma, prídu v uši Jeho."
                        ],
                        [
                            "4. Tebe, ktorýs´ sa za nás dal, vzdávame česť,",
                            "chválu: Hoden si, bys´ korunu vzal, a oslavu celú."
                        ]
                    ]
                },
                {
                    "name": "Náš Pán kraľuje",
                    "number": 63,
                    "lang": "sk",
                    "url": "nas-pan-kraluje",
                    "author": "",
                    "verses": [
                        [
                            "1. Náš Pán kraľuje, Svoj ľud spravuje, sedí na tróne ",
                            "v slávy korune. Nech sa, ako chcú, ľudia hnevajú. ",
                            "Nech sa protiví svet, víťazstvo nemá zrieť."
                        ],
                        [
                            "2. Náš Kráľ najväčší aj najmocnejší, On bude súdiť ",
                            "raz všetkých ľudí. Vládne Sionu, nuž, Jeho menu,",
                            "česť Jeho svätosti vzdajte v úctivosti."
                        ],
                        [
                            "3. Kráľa večného, v moci slávneho verná je vláda,",
                            "bo v nej prevláda láska, úprimnosť, pravda a nie zlosť.",
                            "Patriarchovia sami toho sú svedkami."
                        ],
                        [
                            "4. Tak Ho poznáme, pred Ním kľakáme, Boha verného",
                            "ctíme samého pred Jeho trónom, ako s Áronom Mojžiš ",
                            "vzdával chválu svojmu Bohu stálu."
                        ],
                        [
                            "5. Preto svätého Boha večného slávu zvestujte a oslavujte.",
                            "Pred Jeho trónom kľakajte zborom, On je naším Kráľom ",
                            "na prestole stálom. "
                        ]
                    ]
                },
                {
                    "name": "Pri nohách",
                    "number": 64,
                    "lang": "sk",
                    "url": "pri-nohach",
                    "author": "",
                    "verses": [
                        [
                            "1. Pri nohách keď svojho Pána ticho sedávam, ",
                            "útechu mám v Jeho sľube: „Prídem k vám!“ "
                        ],
                        [
                            "2. V búrke, v práci, keď ma trápi žitia nepokoj,",
                            "pýtam sa Ho kedy prídeš, „Pane môj?“"
                        ],
                        [
                            "3. Rozumie On mojej túžbe, čuje tichý hlas.",
                            "Odpovedá srdcu môjmu: „Prídem včas!“ "
                        ],
                        [
                            "4. Tíško čakám, iste príde Ježiš pre svoj ľud;",
                            "táto viera káže srdcu: „Verný buď!“"
                        ],
                        [
                            "5. Príď, ó, Pane, večný Kráľu! – volá svätých zbor ",
                            "čakáme Ťa, neodkladaj, „príď čím skôr!“"
                        ]
                    ]
                },
                {
                    "name": "Odišiel Pán Ježiš, Spasiteľ",
                    "number": 65,
                    "lang": "sk",
                    "url": "odisiel-pan-jezis-spasitel",
                    "author": "",
                    "verses": [
                        [
                            "1. Odišiel Pán Ježiš, Spasiteľ, náš Pán, pripraviť nám v nebi miesto kde ",
                            "je sám. Keď pripraví, príde k Sebe zobrať nás s Ním nás čaká v sláve jas."
                        ],
                        [
                            "REF.: Áno, áno odišiel náš Pán pripraviť nám miesto, kde je sám. ",
                            "Keď pripraví, príde si vziať nás budeme s Ním tam, kde slávy jas."
                        ],
                        [
                            "2. Slávne zasľúbenie rýchlo naplní, na obzore neba Pán sa objaví. ",
                            "Bratu sestro, či ste už pripravený? On prináša odmeny."
                        ],
                        [
                            "REF.: Áno, áno odišiel náš Pán..."
                        ],
                        [
                            "3. Aká že to bude slávna odmena. U Ježiša v nebesiach pripravená!",
                            "Budeme sa tešiť a či nariekať? Potrebné je dnes už znať. "
                        ],
                        [
                            "REF.: Áno, áno odišiel náš Pán..."
                        ],
                        [
                            "4. V Jeho vinici, kto snažne pracuje, Pánovmu návratu ten sa raduje.",
                            "Preto neleňošme, dnes je práce čas. Odmení On slávne nás. "
                        ],
                        [
                            "REF.: Áno, áno odišiel náš Pán...   "
                        ]
                    ]
                },
                {
                    "name": "Boží Duch kde pôsobí",
                    "number": 66,
                    "lang": "sk",
                    "url": "bozi-duch-kde-posobi",
                    "author": "",
                    "verses": [
                        [
                            "1. Boží Duch kde pôsobí, srdce vstáva z poroby, prebúdza sa ",
                            "túžba čistá nechať svet a ľúbiť Krista. Boží Duch kde pôsobí, ",
                            "vstáva srdce z poroby."
                        ],
                        [
                            "2. Kresťan, v ktorom býva Duch, nepozná už neposluch, ",
                            "ale vôľu Otca plní, aj keď prídu strastí vlny. Kresťan, ",
                            "v ktorom býva Duch, nepozná už neposluch."
                        ],
                        [
                            "3. Duch kde má Svoj božský stan, láska vstup má dokorán, ",
                            "žehnať vie i nepriateľa, k bratovi je bratsky vrelá. Duch kde ",
                            "má Svoj božský stan, láska vstup má dokorán."
                        ],
                        [
                            "4. Duch kde trón Svoj postaví, neistoty pozbaví. Srdcia Duchom ",
                            "obrodené vidia krásy novej zeme. Duch kde trón Svoj postaví, ",
                            "neistoty pozbaví."
                        ]
                    ]
                },
                {
                    "name": "Mohutné milosti prúdy",
                    "number": 67,
                    "lang": "sk",
                    "url": "mohutne-milosti-prudy",
                    "author": "",
                    "verses": [
                        [
                            "1. Mohutné milosti prúdy, nimi ráč zavlažiť svet, ",
                            "napojiť vypráhle hrudy, rozviť by mohol sa kvet."
                        ],
                        [
                            "REF.: Mohutné prúdy. Plnosť si zasľúbil dať. ",
                            "Keď nás už rosička blaží, z plnosti túžime brať."
                        ],
                        [
                            "2. Mohutné milosti prúdy, hľaďte, jak stúpajú výš:",
                            "Boží Duch hriešnikov budí, Kristov im zjavuje kríž."
                        ],
                        [
                            "REF.: Mohutné prúdy..."
                        ],
                        [
                            "3. Mohutné milosti prúdy s hukotom blížia sa k nám,",
                            "Ježiš, Kráľ spasených ľudí, svetu sa zjaviť chce sám."
                        ],
                        [
                            "REF.: Mohutné prúdy..."
                        ]
                    ]
                },
                {
                    "name": "Ach, svetlo večné",
                    "number": 68,
                    "lang": "sk",
                    "url": "ach-svetlo-vecne",
                    "author": "",
                    "verses": [
                        [
                            "1. Ach, svetlo večné, obnov ma, cnosť v srdci nech zas domov má, ",
                            "nech z ducha, tela žiari zas len Tvojej svätej tvári jas.     "
                        ],
                        [
                            "2. Zlú žiadosť ráč sám umŕtviť a srdca stánok obnoviť,",
                            "nech Ducha Tvojho silná zbroj mi dáva silu v dobrý boj."
                        ],
                        [
                            "3. Ráč ochotného ducha dať, by vedel som Ťa poslúchať ",
                            "nech nemám v ničom záľuby, čo Tebe tiež sa neľúbi."
                        ]
                    ]
                },
                {
                    "name": "Hľa, Ježiš, lekár najvyšší",
                    "number": 69,
                    "lang": "sk",
                    "url": "hla-jezis-lekar-najvyssi",
                    "author": "",
                    "verses": [
                        [
                            "1. Hľa, Ježiš, lekár najvyšší, kríž nemoci zňal mojich ",
                            "a preto viem, že utíši a každý neduch zhojí."
                        ],
                        [
                            "REF.: Z hriechov, bied a nemocí ľuďom biedne hynúcim ",
                            "nesie nádej pomoci Ježiš, Ježiš, Ježiš. "
                        ],
                        [
                            "2. Čo hľadáš inde pomoci, keď lekárom je Ježiš? ",
                            "Keď veríš Mu, čo v nemoci len svojej ešte biediš?"
                        ],
                        [
                            "REF.: Z hriechov, bied a nemocí..."
                        ],
                        [
                            "3. Čuj, vraví Knieža života: Ja uzdraviť chcem teba!",
                            "Či nechce Božia dobrota ťa sýtiť darmi neba?!"
                        ],
                        [
                            "REF.: Z hriechov, bied a nemocí..."
                        ],
                        [
                            "4. Hľa, Ježiš, lekár najvyšší, je duše, tela Pánom. ",
                            "On každý neduch utíši, keď vierou visím na Ňom."
                        ],
                        [
                            "REF.: Z hriechov, bied a nemocí..."
                        ]
                    ]
                },
                {
                    "name": "Či chceš väzby hriechu byť zbavený?",
                    "number": 70,
                    "lang": "sk",
                    "url": "ci-chces-vazby-hriechu-byt-zbaveny",
                    "author": "",
                    "verses": [
                        [
                            "1. Či chceš väzby hriechu byť zbavený? Moc v krvi je! Moc v krvi je!",
                            "Poď, mier v dušu bude ti vložený; k očisteniu moc v krvi je!"
                        ],
                        [
                            "REF.: Leží moc, moc, divotvorná moc v tej krvi, v tej krvi. ",
                            "Leží moc, moc, víťaziaca moc v tej krvi Spasiteľa len. "
                        ],
                        [
                            "2. Chceš vymanenie z náruživostí? Moc v krvi je! Moc v krvi je!",
                            "Krv z Golgoty celkom ťa očistí. Víťazstvo v drahej krvi je!"
                        ],
                        [
                            "REF.: Leží moc, moc..."
                        ],
                        [
                            "3. Chcel bys´ belším byť nad bielučký sneh? Moc v krvi je! Moc v krvi je!",
                            "Tá krv všetky škvrny vezme i hriech. Čistota, plná v krvi je!"
                        ],
                        [
                            "REF.: Leží moc, moc..."
                        ],
                        [
                            "4. Chcel bys´ Kristu slúžiť tu oddane? Moc v krvi je! Moc v krvi je!",
                            "Pána lásky sláviť neprestajne? Denne moc k tomu v krvi je! "
                        ],
                        [
                            "REF.: Leží moc, moc..."
                        ]
                    ]
                },
                {
                    "name": "Čože to množstvo je za zjav?",
                    "number": 71,
                    "lang": "sk",
                    "url": "coze-to-mnozstvo-je-za-zjav",
                    "author": "",
                    "verses": [
                        [
                            "1. Čože to množstvo je za zjav? Čo znamená ten ľudu dav? ",
                            "Zhromaždenie deň odo dňa, za akým cieľom, kto to zná? Čuj ",
                            "radostný výkrik sveta: „To ide Ježiš z Nazareta!“ Čuj radostný ",
                            "výkrik sveta: „To ide Ježiš z Nazareta!“  "
                        ],
                        [
                            "2. Čože je On za človeka, keď ľud za Ním tak uteká? Že starý, ",
                            "mladý k Nemu k Nemu lne, ach, či to nie je predivné? Zas počuješ ",
                            "výkrik sveta: „To ide Ježiš z Nazareta!“ Zas počuješ výkrik sveta: ",
                            "„To ide Ježiš z Nazareta!“"
                        ],
                        [
                            "3. To je ten Ježiš mocný Pán, ktorý sa zrodil kvôli nám. Keď",
                            "rozkáže, chromí chodia, a mŕtvi z hrobov vychodia. Slepých hlas ",
                            "znie nad šum sveta: „Pomôž mám, Jezu z Nazareta!“ Slepých hlas",
                            "znie nad šum sveta: „To ide Ježiš z Nazareta!“"
                        ],
                        [
                            "4. On, sláva Bohu, ešte vždy ticho medzi ľuďmi chodí; On tu i tam",
                            "klope hľadá, či si kto spasenie žiada. I my volajme v diaľ sveta: ",
                            "„On ide, Ježiš z Nazareta!“ I my volajme v diaľ sveta: ",
                            "„Pomôž nám, Jezu z Nazareta!“"
                        ],
                        [
                            "5. Ó, poďte, hriešnici biedni! Kto zhojí hriech, kto očistí?",
                            "Ježiš On volá vás skrz nás; On krvou svojou zmyje vás.",
                            "Očistení, vy chváľte Ho, ach, Ježiša Nazaretského! Očistení, ",
                            "vy chváľte Ho ach, Ježiša Nazaretského!"
                        ],
                        [
                            "6. Nedajte srdciam zatvrdať; Ježiš nebude vždy volať! Prejde hodina ",
                            "posledná; beda ak bola zmrhaná! Ach, po milosti je veta, keď prešiel ",
                            "Ježiš z Nazareta! Ach po milosti je veta, keď prešiel Ježiš z Nazareta!"
                        ]
                    ]
                },
                {
                    "name": "Ježišu krásny",
                    "number": 72,
                    "lang": "sk",
                    "url": "jezisu-krasny",
                    "author": "",
                    "verses": [
                        [
                            "1. Ježišu krásny, Panovníku jasný, Boží i ľudský Synu, ",
                            "Teba milovať i oslavovať túžim v každú hodinu."
                        ],
                        [
                            "2. Krásne sú kraje, hory, polia, háje, lúčne kvetiny, lesný mach. ",
                            "Na celej zemi najmilšie je mi pred Pánom na kolenách."
                        ],
                        [
                            "3. Je slnka krása i svetlo mesiaca, žiara hviezd na obzore. ",
                            "Jasnejšie svieti nad nebies kvety Ježiš v anjelskom zbore."
                        ],
                        [
                            "4. Do krásy sveta, tam do jasu leta často sa tiene vpíšu. Svit ",
                            "Tvojej tváre žiari však stále jediný môj Ježišu.         "
                        ]
                    ]
                },
                {
                    "name": "Čujte všetci vzácne povolanie",
                    "number": 73,
                    "lang": "sk",
                    "url": "cujte-vsetci-vzacne-povolanie",
                    "author": "",
                    "verses": [
                        [
                            "1. Čujte všetci vzácne povolanie, krajšie ako spevy anjelov!",
                            "Počúvajte jeho milé zvanie, Ježiš volá hriešnikov!"
                        ],
                        [
                            "REF.: Toho, kto príde ku mne, toho, kto príde ku mne, toho, ",
                            "kto príde ku mne, nikdy nevyženiem von!"
                        ],
                        [
                            "2. Únavou kto, ťarchou klesá v žiali, radostné mu kynie spasenie,",
                            "u Ježiša nájdu, veľkí malí pomoc, s Bohom zmierenie."
                        ],
                        [
                            "REF.: Toho, kto príde ku mne..."
                        ],
                        [
                            "3. Hľadaj i ty svojho Spasiteľa, Jemu hriech i život odovzdaj, ",
                            "s Ním ťa čaká v nebi večnosť celá, s dôverou sa spoliehaj."
                        ],
                        [
                            "REF.: Toho, kto príde ku mne..."
                        ]
                    ]
                },
                {
                    "name": "Kým hlas prosieb vôkol znie",
                    "number": 74,
                    "lang": "sk",
                    "url": "kym-hlas-prosieb-vokol-znie",
                    "author": "",
                    "verses": [
                        [
                            "1. Kým hlas prosieb vôkol znie, neodmietaj spasenie! ",
                            "Keď ťa volá Otec tvoj, domov navrátiť sa stroj!"
                        ],
                        [
                            "REF.: Ešte dnes, ešte dnes, vráť sa domov ešte dnes! ",
                            "Ešte dnes, ešte dnes, vráť sa domov ešte dnes!"
                        ],
                        [
                            "2. Ďaleko si zablúdil, z hriechov povstať nemáš síl.",
                            "Neodvracaj svoju tvár, prijmi milosť Boží dar!"
                        ],
                        [
                            "REF.: Ešte dnes, ešte dnes... "
                        ],
                        [
                            "3. Svet ťa zlákal, oklamal a dnes vládne v srdci žiaľ. ",
                            "Vráť sa uver v Ježiša, v Ňom sa bôle utíšia!"
                        ],
                        [
                            "REF.: Ešte dnes, ešte dnes..."
                        ],
                        [
                            "4. Poď a zlož hriech, zve ťa Pán. Veriť smieš v moc Jeho rán. ",
                            "K Nemu keď sa privinieš, spasenie máš ešte dnes."
                        ],
                        [
                            "REF.: Ešte dnes, ešte dnes..."
                        ]
                    ]
                },
                {
                    "name": "Volali desiati malomocní",
                    "number": 75,
                    "lang": "sk",
                    "url": "volali-desiati-malomocni",
                    "author": "",
                    "verses": [
                        [
                            "1. Volali desiati malomocní: „Ježišu, zmiluj sa nad biednymi!“",
                            "Ježiš ich uzdravil zázračne hneď. Jeden z nich ďakuje, ostatných niet."
                        ],
                        [
                            "REF.: /: Deviatich niet. :/ Desať ich bolo, deviatich niet!"
                        ],
                        [
                            "2. Jeden bol cudzinec. Slovami chvál Bohu vzdal vďaku, že zdravie ",
                            "mu dal. Keď len sám ďakoval, Ježiš sa hneď opýtal bolestne:",
                            "„Ostatných niet?“"
                        ],
                        [
                            "REF.: /: Deviatich niet...:/"
                        ],
                        [
                            "3. „Kristus ak tento je“, mnohých znie hlas, „nech nám dá zjavenie, ",
                            "presvedčí nás!“ Mnohí viac milujú rozkoše, svet. Málokto uverí, ",
                            "ostatných niet."
                        ],
                        [
                            "REF.: /: Deviatich niet...:/"
                        ],
                        [
                            "4. Tisíce majú len posmešný tón: „K Bohu nás priniesť chce, ktože ",
                            "je ON?“ Bude aj o tebe výrok ten znieť: „Jeden len uveril, ostatných niet!“? "
                        ]
                    ]
                },
                {
                    "name": "Mnoho je duší, ktoré blúdia",
                    "number": 76,
                    "lang": "sk",
                    "url": "mnoho-je-dusi-ktore-bludia",
                    "author": "",
                    "verses": [
                        [
                            "REF.: /: Deviatich niet...:/",
                            " ",
                            "1. Mnoho je duší, ktoré blúdia, bez viery v mori hriechu hynú, ",
                            "neznajú Toho, ktorý im rád spasenie chce dať, nádej inú."
                        ],
                        [
                            "REF.: Poď, ó, ty duša, Pánov čuj hlas: Spasenie blízko, ",
                            "hľa milosti čas!"
                        ],
                        [
                            "2. Láskavý Pastier stále volá zbludilých, by sa navrátili, ",
                            "s bolesťou želie neposlušných, ktorí beh v priepasť obrátili."
                        ],
                        [
                            "REF.: Poď, ó, ty duša..."
                        ],
                        [
                            "3. Šťastie a vnady, čo svet dáva, lživý sú blud a sodomský kvet,",
                            "Pán Ježiš Kristus, verný pastier, dovedie iste v nebeský svet."
                        ],
                        [
                            "REF.: Poď, ó, ty duša.."
                        ],
                        [
                            "4. Počuj, kto blúdiš po cestách zlých, zanechaj klam, poď,",
                            "k Ježišovi, aby si prijal spasenia dar, započal s Pánom život nový. "
                        ],
                        [
                            "REF.: Poď, ó, ty duša..."
                        ]
                    ]
                },
                {
                    "name": "Hľa, Ježiš volá",
                    "number": 77,
                    "lang": "sk",
                    "url": "hla-jezis-vola",
                    "author": "",
                    "verses": [
                        [
                            "1. Hľa, Ježiš volá: poďte len, ja povediem vás sám, tou úzkou cestou ",
                            "spasenia a domov k nebesám! Ó, poďte všetci znavení a pripojte sa ",
                            "k spaseným, ja odpočinok pre vás mám, kde večnej slávy chrám."
                        ],
                        [
                            "REF.: Aký to šťastný lós, šťastný lós, šťastný lós, aký to šťastný lós mať ",
                            "v Ježišovi dosť. – Stôl svadobný je prikrytý a vykúpených zástupy svoj",
                            "víťazný vždy pejú žalm k sláve Baránku tam. "
                        ],
                        [
                            "2. Ó, to je radosť v nebesiach, keď hriešnik kajá sa. Zbor vykúpených ",
                            "oslavou a spevom zajasá. Tam všetci chvália Ježiša, že obeť Jeho ",
                            "najvyššia nás môže zbaviť všetkých vín. Tak činí Hospodin."
                        ],
                        [
                            "REF.: Aký to šťastný lós..."
                        ],
                        [
                            "3. V deň súdny drahý Spasiteľ si svojich osloví: o poďte mojej do slávy",
                            "a k môjmu Otcovi. Tam pery plné radosti pieť budú z nebies výsosti, že ",
                            "veľké veci činil Pán vždy z lásky k všetkým nám."
                        ],
                        [
                            "REF.: Aký to šťastný lós..."
                        ]
                    ]
                },
                {
                    "name": "Ešte Boží zaznieva hlas",
                    "number": 78,
                    "lang": "sk",
                    "url": "este-bozi-zaznieva-hlas",
                    "author": "",
                    "verses": [
                        [
                            "1. Ešte Boží zaznieva hlas: Poď, hriešniku, poď, kým je ",
                            "čas k Ježišovi teraz a hneď; opusť márnosť, rozkoš a svet!    "
                        ],
                        [
                            "2. Prevzácna zvesť, čuj táto je: Boh ťa skutočne miluje, ",
                            "spásu chce ti i život dať; chce ťa večne u seba mať."
                        ],
                        [
                            "3 Spása istá a úplná je v zásluhách Jeho Syna: ",
                            "Platiť za ňu nič nemusíš, vierou ak si ju privlastníš."
                        ],
                        [
                            "4. Ale ak bys´ ňou pohŕdnul, beda večne bys´ zahynul! ",
                            "Pán čo vravel, to neminie; kto neverí, ten zahynie."
                        ],
                        [
                            "5. Preto, počuj, ó, hriešniku! Spásu voľnú a veliku prijmi ",
                            "radostne ešte dnes; srdce, myseľ už Jemu nes!"
                        ]
                    ]
                },
                {
                    "name": "Duša, ak sa chceš obrátiť",
                    "number": 79,
                    "lang": "sk",
                    "url": "dusa-ak-sa-chces-obratit",
                    "author": "",
                    "verses": [
                        [
                            "1. Duša, ak sa chceš obrátiť, tak to učiň dôkladne; nech ťa Ježiš",
                            "sám vyučí! Kto s Ním kráča, nepadne. Ó, keď ťa On volá, choď,",
                            "kým neskončí spásy hod, kým neskončí spásy hod!   "
                        ],
                        [
                            "2. Sám sa nikto neobráti; no každý to musí chcieť! V kom po ",
                            "Bohu túžby nieto, pre toho spasenia niet. Ak sa ty chceš obrátiť, ",
                            "musíš vôľu podrobiť; musíš vôľu podrobiť."
                        ],
                        [
                            "3. Keď ťa Ježiš tiahne, spiechaj! Keď ťa volá, tak mu ver. Súženiu ",
                            "sa nevyhýbaj; sladké jarmo Jeho ber. Čo ti bráni, odstráň sám: za ",
                            "Pánom leť k výšinám! Za Pánom leť k výšinám."
                        ]
                    ]
                },
                {
                    "name": "Pri dverách stojím",
                    "number": 80,
                    "lang": "sk",
                    "url": "pri-dverach-stojim",
                    "author": "",
                    "verses": [
                        [
                            "1. Pri dverách stojím, klopem tam: Otvor mi srdca svojho stan!",
                            "/: Kto hlas môj čuje, otvorí, prijme ma v srdca priestory. :/  "
                        ],
                        [
                            "2. Hostinu tomu vystrojím, so mnou on bude a ja s ním.",
                            "/: Bude to advent veselý, zajasá zem i anjeli. :/"
                        ],
                        [
                            "3. Otvor že, otvor dokorán, aby vojsť mohol Kristus, Pán.",
                            "/: Otvorí On ti nebesá, kde duša večne zaplesá. :/"
                        ]
                    ]
                },
                {
                    "name": "Nestaraj sa, hriešniku, čo sám k spáse dáš.",
                    "number": 81,
                    "lang": "sk",
                    "url": "nestaraj-sa-hriesniku-co-sam-k-spase-das",
                    "author": "",
                    "verses": [
                        [
                            "1. Nestaraj sa, hriešniku, čo sám k spáse dáš.",
                            "Ježiš všetko vykonal, ty len prijímať máš."
                        ],
                        [
                            "REF.: Dokonal, On dokonal, hriešnik, ty sa teš, ",
                            "spasenie ti vyzískal, čože viacej chceš? "
                        ],
                        [
                            "2. Jedno len máš urobiť: aký si, tak poď, ",
                            "ostatné Pán zariadi, dá ti nový rod."
                        ],
                        [
                            "REF.: Dokonal, On dokonal..."
                        ],
                        [
                            "3. Ty si biedny, len to máš, slepý, stratený ale ",
                            "Pán je bohatý v nebi, na zemi."
                        ],
                        [
                            "REF.: Dokonal, On dokonal..."
                        ],
                        [
                            "4. Iba v Jeho zásluhách, vierou v Jeho moc ",
                            "nájdeš pravé spasenie, zmizne hriechu noc."
                        ],
                        [
                            "REF.: Dokonal, On dokonal..."
                        ]
                    ]
                },
                {
                    "name": "„Oddeľte sa“, vraví Pán",
                    "number": 82,
                    "lang": "sk",
                    "url": "oddelte-sa-vravi-pan",
                    "author": "",
                    "verses": [
                        [
                            "1. „Oddeľte sa“, vraví Pán, „chcem byť vaším Bohom sám;",
                            "varujte sa nevery, za synov a za dcéry prijmem vás a premením ",
                            "na ľud zvláštny, spasený.“"
                        ],
                        [
                            "2. „Budem s vami prebývať, obeť vďaky prijímať. Buďte živé ",
                            "kamene láskou vedno spojené, ste chrám Boha živého, oddeľte",
                            "sa od zlého!“"
                        ]
                    ]
                },
                {
                    "name": "Ježiš hriešnych prijíma",
                    "number": 83,
                    "lang": "sk",
                    "url": "jezis-hriesnych-prijima",
                    "author": "",
                    "verses": [
                        [
                            "1. Ježiš hriešnych prijíma rúcho spásy pre nich má, ",
                            "Boh ich láskou objíma. Ježiš hriešnych prijíma."
                        ],
                        [
                            "REF.: /: Čuj každý radostnú zvesť Ježiš hriešnych prijíma. :/"
                        ],
                        [
                            "2. Ak si zblúdil do sveta, verný Pastier hľadá ťa, ",
                            "tvoje rany zhojiť zná. Ježiš hriešnych prijíma."
                        ],
                        [
                            "REF.: /: Čuj každý radostnú zvesť..."
                        ],
                        [
                            "3. Poďte všetci blúdiaci, unavení po práci, ",
                            "odpočinok hojný má. Ježiš hriešnych prijíma."
                        ],
                        [
                            "REF.: /: Čuj každý radostnú zvesť..."
                        ],
                        [
                            "4. S dôverou sa uchop tej spásy krvi Kristovej, ",
                            "v Ňom sám Boh ťa objíma. Ježiš hriešnych prijíma."
                        ],
                        [
                            "REF.: /: Čuj každý radostnú zvesť..."
                        ]
                    ]
                },
                {
                    "name": "Kto si biedny",
                    "number": 84,
                    "lang": "sk",
                    "url": "kto-si-biedny",
                    "author": "",
                    "verses": [
                        [
                            "1. Kto si biedny, nesieš ťarchu hriechov bremena,",
                            "pomoc je len v Ježišovi jediná.     "
                        ],
                        [
                            "2. On ťa volá, chce ťa spasiť, poď že k Nemu dnes",
                            " s biedou svojou celé srdce k Nemu nes."
                        ],
                        [
                            "3. Nezavrhne, neodsúdi, vyjde v ústrety, do tvojej",
                            "tmy Jeho svetlo zasvieti."
                        ],
                        [
                            "4. Svojou nežnou Božou láskou pozdvihne ťa, ver,",
                            "radosť, pokoj zaplaví ťa z rajských dvier."
                        ]
                    ]
                },
                {
                    "name": "Na hody milosti",
                    "number": 85,
                    "lang": "sk",
                    "url": "na-hody-milosti",
                    "author": "",
                    "verses": [
                        [
                            "1. Na hody milosti od kráľa večnosti pozvanie máš!",
                            "Poď, kto chceš život mať, šťastným sa večne stať,",
                            "diel v sláve ak chceš brať: hlas ten si váž!  "
                        ],
                        [
                            "2. Žiadosť kráľa naplň, miesto svoje zaplň pri večeri!",
                            "Ešte dnes poď a ver, s Bohom sa svojím zmier, za milosť,",
                            "milosť ber rukou viery!"
                        ],
                        [
                            "3. Nedaj sa zadržať, Pán ťa dal povolať k Svojmu stolu!",
                            "„Všetko je schystané!“ Poď v tejto hodine, život a spasenie ",
                            "dnes môžeš mať!"
                        ],
                        [
                            "4. Kto milosť obdrží, ten báť sa nemusí ani súdu! ",
                            "A preto, kto si v nej, staň sa hneď svedkom jej, ",
                            "horlivo svedč o nej všade ľudu! "
                        ]
                    ]
                },
                {
                    "name": "Kto len chce, ten smie prísť",
                    "number": 86,
                    "lang": "sk",
                    "url": "kto-len-chce-ten-smie-prist",
                    "author": "",
                    "verses": [
                        [
                            "1. Kto len chce, ten smie prísť, znie reč Krista. K studni ",
                            "žitia stále trvá pozvanie. Kto z tej studne pije nemá duše ",
                            "smäd, kto len chce, nech príde hneď."
                        ],
                        [
                            "REF.: Trápi ťa hlad, smäd, poď, jedz a pi hneď! Hriešniku, ",
                            "Pán Ježiš volá: Zdarma ber! Vstup je otvorený, stôl pripravený, ",
                            "kto chceš, vstup do spásy dvier!"
                        ],
                        [
                            "2. Kto len chce, ten smie prísť! Neváhaj už! Srdcu, duši ",
                            "pokrm prijať len sa vzmuž! Veľkňaz večný zháša všetkých ",
                            "duší smäd, kto len chce, nech príde hneď!"
                        ],
                        [
                            "REF.: Trápi ťa hlad..."
                        ],
                        [
                            "3. Kto len chce, ten smie prísť! Mocný je Pán! Kto Ho čuje,",
                            "nech to hlása tu i tam! Kto Ho potrebuje, záchranu smie zrieť, ",
                            "kto len chce, nech príde hneď. "
                        ],
                        [
                            "REF.: Trápi ťa hlad..."
                        ]
                    ]
                },
                {
                    "name": "K nebesiam",
                    "number": 87,
                    "lang": "sk",
                    "url": "k-nebesiam",
                    "author": "",
                    "verses": [
                        [
                            "1. K nebesiam, len k nebesiam túžby upri let! Po čom ",
                            "svätí vzdychajú, nemôže dať svet. To nájdu tam, kde ich ",
                            "čaká odmena. Náhli, duša zomdlená, spej k nebesiam!"
                        ],
                        [
                            "2. K nebesiam, hľa pri tebe kráča Boží ľud. Znáša v pravej ",
                            "nádeji úzkosti i trud. Ó, spoj sa s ním! Cez boje a mrákavy,",
                            "Pán ťa vedie do slávy, hor k nebesiam!"
                        ],
                        [
                            "3. V nebesiach, len v nebesiach hľadaj žitia ceľ! Nestaraj sa ",
                            "priveľa o pozemský diel! To márnosť je. Len čos´ v nebi uložil,",
                            "nakoľko si Bohu žil, v tom cena je."
                        ],
                        [
                            "4. K nebesiam ťa predišiel Ježiš Kristus, Kráľ, mlčky znášal",
                            "pohanu, tak ti príklad dal. Ó, za ním chod! drž sa Boha ako On, ",
                            "kráčaj s vierou na Sion! Vždy verný buď."
                        ],
                        [
                            "5. K nebesiam ťa napokon vznesie smrti let, hoci teraz môžeš",
                            "sa pred ňou ešte chvieť. Ó, neboj sa! Svitne deň a v svetle tom ",
                            "otcovský si uzrieš dom, v ňom večný diel."
                        ]
                    ]
                },
                {
                    "name": "Môj Ježiš volá ma",
                    "number": 88,
                    "lang": "sk",
                    "url": "moj-jezis-vola-ma",
                    "author": "",
                    "verses": [
                        [
                            "1. Môj Ježiš volá ma, že moc len malú mám, ",
                            "svoj pokoj ponúka, chce všetkým byť mi sám.   "
                        ],
                        [
                            "REF.: Len krv Pánova zmaže každý hriech, ",
                            "môj dlh by bol ako krv, zbieli ma ako sneh."
                        ],
                        [
                            "2. Môj Pane, Tvoja krv nech i mňa očistí. Tys´ ",
                            "Pánom predivným aj v časoch neistých."
                        ],
                        [
                            "REF.: Len krv Pánova..."
                        ],
                        [
                            "3. Čo Boh by prijať chcel, nič také vo mne niet,",
                            "len v Tebe spásu mám a s Otcom zmierenie."
                        ],
                        [
                            "REF.: Len krv Pánova..."
                        ],
                        [
                            "4. Keď skončím zemskú púť, duch z tela odletí,",
                            "viem, že Ty, Ježišu, mi vyjdeš v ústrety."
                        ],
                        [
                            "REF.: Len krv Pánova..."
                        ],
                        [
                            "5. Tam Tvojim pred trónom súc plný radosti",
                            "Ti k nohám položím hold svojej vďačnosti. "
                        ],
                        [
                            "REF.: Len krv Pánova..."
                        ]
                    ]
                },
                {
                    "name": "Ideme k neba výšinám",
                    "number": 89,
                    "lang": "sk",
                    "url": "ideme-k-neba-vysinam",
                    "author": "",
                    "verses": [
                        [
                            "1. Ideme k neba výšinám, /: chceš ísť tiež? :/ Zvelebovať, ctiť Boha tam, ",
                            "/: chceš ísť tiež? :/ Milióny hriešnikov tam sú už v tej sláve, kde je Pán,",
                            "privolávajú stadiaľ nám: /: Chceš ísť tiež? :/ "
                        ],
                        [
                            "2. Ideme za Ježišom vpred /: chceš ísť tiež? :/ Kráľovstvo Jeho uvidieť ",
                            "/: chceš ísť tiež? :/ Tam je to slnko jasnosti vo večnej, pravej radosti, ",
                            "pre starosť, žiaľ tam miesta niet, /: chceš ísť tiež? :/"
                        ],
                        [
                            "3. Cestu tam nie je ťažko nájsť, /: chceš ísť tiež? :/ Opusť svet, keď chce ",
                            "pasce klásť /: chceš ísť tiež? :/ Bremeno hriechu pod kríž zhoď, Ježiš ťa volá:",
                            "Za mnou poď v šľapajach Mojich v novú vlasť! /: chceš ísť tiež? :/ "
                        ],
                        [
                            "4. Ó, kiež by zvolal mnohý z vás /: Chcem ísť tiež! :/ Milujem Krista odteraz,",
                            "/: chcem ísť tiež! :/ Žiadosti sveta odmietam, v Ježišovi už všetko mám,",
                            "Jemu chcem slúžiť v každý čas, /: chcem ísť tiež! :/"
                        ]
                    ]
                },
                {
                    "name": "Aké miesto dávaš Kristu?",
                    "number": 90,
                    "lang": "sk",
                    "url": "ake-miesto-davas-kristu",
                    "author": "",
                    "verses": [
                        [
                            "1. Aké miesto dávaš Kristu? Za teba On strpel kríž. ",
                            "Pri dverách keď tvojich klope či Mu srdce otvoríš?"
                        ],
                        [
                            "REF.: Pre Ježiša, Kráľa slávy, v srdci miesto prichystaj!",
                            "On ti nesie život pravý, s radosťou Ho uvítaj!"
                        ],
                        [
                            "2. Ako veľa svetu dávaš! A či verný Spasiteľ nemá miesta",
                            "v tvojom srdci, za ktoré On z lásky mrel?"
                        ],
                        [
                            "REF.: Pre Ježiša, Kráľa slávy..."
                        ],
                        [
                            "3. Počuj, duša, zvesť milosti! Pán ťa domov volá zas.",
                            "Dnes je tvojej spási chvíľa, zajtra neistý je čas."
                        ],
                        [
                            "REF.: Pre Ježiša, Kráľa slávy..."
                        ],
                        [
                            "4. V pokore zlož k Jeho nohám ťarchu srdca, hriech a bôľ,",
                            "zanechaj už rozkoš sveta, Krista za Pána si zvoľ!"
                        ],
                        [
                            "REF.: Pre Ježiša, Kráľa slávy..."
                        ]
                    ]
                },
                {
                    "name": "Od Boha v diaľke blúdil som",
                    "number": 91,
                    "lang": "sk",
                    "url": "od-boha-v-dialke-bludil-som",
                    "author": "",
                    "verses": [
                        [
                            "1. Od Boha v diaľke blúdil som , dnes sa vraciam späť, ",
                            "po cestách krivých v svete zlom, Pane, idem späť."
                        ],
                        [
                            "REF.: Vraciam sa k domovu z mojich bludných ciest,",
                            "Otec náruč vystiera, domov chce ma viesť."
                        ],
                        [
                            "2. Dosť vzácnych dni som zmrhal dar, dnes sa vraciam späť. ",
                            "Prúd horkých sĺz mi zmáča tvár, Pane, idem späť."
                        ],
                        [
                            " REF.: Vraciam sa k domovu..."
                        ],
                        [
                            "3. Len biedu hriech mi vedel dať, dnes sa vraciam späť. ",
                            "Smiem z Tvojej ruky milosť vziať? Pane, idem späť."
                        ],
                        [
                            "REF.: Vraciam sa k domovu..."
                        ],
                        [
                            "4. Mne duša hynie, srdce lká, keď sa vraciam späť,",
                            "no vedie nádej preveľká: domov idem späť."
                        ],
                        [
                            "REF.: Vraciam sa k domovu..."
                        ],
                        [
                            "5. Som zmorený tou ťarchou vín, keď sa vraciam späť. ",
                            "Aj za mňa zomieral Tvoj Syn, Otče, prijmi späť."
                        ],
                        [
                            "REF.: Vraciam sa k domovu..."
                        ],
                        [
                            "6. Tá Jeho krv môj zmýva hriech, idem bežím späť. ",
                            "Už belší som než biely sneh, Otče, doma späť. ",
                            "REF.: Dom som, doma som z mojich bludných ciest.",
                            "V náruč si ma privinul, Otče ráč ma viesť."
                        ]
                    ]
                },
                {
                    "name": "Po dvoch cestách",
                    "number": 92,
                    "lang": "sk",
                    "url": "po-dvoch-cestach",
                    "author": "",
                    "verses": [
                        [
                            "1. Po dvoch cestách speje ľudstva prúd; až sa skončí jeho ",
                            "vážna púť, náhle príde koniec ľudských dní a súd posledný."
                        ],
                        [
                            "2. Ku dvom bránam náhli celý svet, no len tesnou možno ",
                            "iste spieť ta, kde stíchnu bôle, úzkosti, v ríšu radosti."
                        ],
                        [
                            "3. Po ktorej ty ceste putuješ? Ktorou bránou k cieľu smeruješ?",
                            "Obrátil ti kroky k Sionu k trónu Božiemu?"
                        ],
                        [
                            "4. Na širokej vládne zvod a hriech; žalosť v srdci, a na ",
                            "ústach smiech. Kráčajú ňou duše stratené, neobrátené."
                        ],
                        [
                            "5. Chceš ísť s nimi, duša, úbohá? Ešte ďalej chceš žiť bez Boha?",
                            "Pováž len, že cesta márnosti skončí v žalosti."
                        ],
                        [
                            "6. Ach, je ľahko padnúť v hriechu kal, ale nemôcť z neho",
                            "aký žiaľ! Aká bolesť navždy zostať v tmách, zhynúť v hlbinách. "
                        ]
                    ]
                },
                {
                    "name": "Poď k Ježišovi",
                    "number": 93,
                    "lang": "sk",
                    "url": "pod-k-jezisovi",
                    "author": "",
                    "verses": [
                        [
                            "1. Poď, k Ježišovi, poď ešte dnes, svoje Mu srdce k obeti nes!",
                            "On s trónu svojho, kde večný ples, tak sladko volá: „Poď!“"
                        ],
                        [
                            "REF.: Sláva, sláva dušu ožiari, až pri Božom stanem oltári,",
                            "kde svätosť našu hriech nezmarí. Ó, Pane idem už!"
                        ],
                        [
                            "2. Poď, dieťa milé; Ten sladký hlas i teba volá; poď kým ",
                            "je čas!  Kto zná či zajtra ozve sa zas? Ó, nemeškaj, len poď!"
                        ],
                        [
                            "REF.: Sláva, sláva dušu ožiari..."
                        ],
                        [
                            "3. Poď, kto si koľvek, hľa, blízko Pán! Za všetkých niesol horkosti ",
                            "rán. Všetkých nás volá so všetkých strán. Ó, čuj a ver a poď!"
                        ],
                        [
                            "REF.: Sláva, sláva dušu ožiari..."
                        ]
                    ]
                },
                {
                    "name": "Ó, nechoď svetom sám",
                    "number": 94,
                    "lang": "sk",
                    "url": "o-nechod-svetom-sam",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, nechoď svetom sám a sám; poď s nami k neba výšinám, poď s nami domov ",
                            "len. Poď s nami, ta, kde blaha ríš, kde naveky sa potešíš, kde večný svitá deň. ",
                            "Poď len, poď len, tam čaká teba Spasiteľ. Poď len, poď len, a volá teba, abys´ šiel."
                        ],
                        [
                            "2. Ó, márnotratný synu, čuj, v otčinu z diaľky zakeruj; ó, vráť sa synu vráť! ",
                            "Tvoj Otec s láskou vyzerá, či syn sa domov vyberá, ó, synu, vráť sa vráť!",
                            "Poď len, poď len, veď Otec teba miluje. Poď len, poď len, i nad tebou sa zľutuje!"
                        ],
                        [
                            "3. Ó, i ty, dcéro zblúdilá , bárs bys´ sa domov vrátila; ach, kedy nájsť sa dáš!",
                            "Pán hľadá tvoje spasenie, pre hriešnice má zmierenie; na čože odkladáš? Poď ",
                            "len, poď len, bárs jako červec hriech je tvoj. Poď len, poď len, vo krvi Krista spásy zdroj!  ",
                            "  ",
                            "4. Ó, s nami poď a nechoď sám; ideme k neba výšinám, poď s nami v blaha ríš. ",
                            "Nás vedie Ježiš, vodca náš, neuškodí nám satanáš, tam pokoj, uvidíš. Poď len, poď len",
                            "poď zložiť hriechy pod kríž tam. Poď len, poď len, stezk, túžby stíši Ježiš sám."
                        ],
                        [
                            "5. Ó, s nami poď, a neblúď už! Tvoj Ježiš volá; tak sa vzmuž, hriech u nôh Jeho zlož. ",
                            "Ó, rozhodni sa! Dnes je čas, dnes Spasiteľov volá hlas, tak ďalej zlo nemnož! Poď, len, ",
                            "poď len,  poď za Ježišom k nebesiam! Poď  len, poď len, On blaha dom ti schystal sám. "
                        ]
                    ]
                },
                {
                    "name": "Pán Boh je láska",
                    "number": 95,
                    "lang": "sk",
                    "url": "pan-boh-je-laska",
                    "author": "",
                    "verses": [
                        [
                            "1. Pán Boh je láska, vykúpil hriešnych, ",
                            "Pán Boh je láska, miluje ma."
                        ],
                        [
                            "REF.: Spievajme spoločne: Pán Boh je láska, ",
                            "Pán Boh je láska, miluje nás! "
                        ],
                        [
                            "2. Ležal som v putách strašného hriechu,",
                            "z väzenia svojho nemohol von."
                        ],
                        [
                            "REF.: Spievajme spoločne..."
                        ],
                        [
                            "3. Z nesmiernej lásky Spasiteľ prišiel,",
                            "aby ma zbavil otrockých púť."
                        ],
                        [
                            "REF.: Spievajme spoločne..."
                        ],
                        [
                            "4. Dal sa mi poznať v milosti svojej,",
                            "svadobným rúchom priodial ma."
                        ],
                        [
                            "REF.: Spievajme spoločne..."
                        ],
                        [
                            "5. Ó, láska večná, utíšiš bolesť, ",
                            "ó, láska večná, liečiš môj žiaľ."
                        ],
                        [
                            "REF.: Spievajme spoločne..."
                        ],
                        [
                            "6. Teba chcem chváliť, Tebe česť vzdávať,",
                            "naveky ľúbiť, večne som Tvoj!"
                        ],
                        [
                            "REF.: Spievajme spoločne..."
                        ]
                    ]
                },
                {
                    "name": "Ó, poďte a Pána kríža prijmite!",
                    "number": 96,
                    "lang": "sk",
                    "url": "o-podte-a-pana-kriza-prijmite",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, poďte a Pána kríža prijmite! Ó, poďte a verte, šťastní budete!",
                            "Je u Neho zdarma odpustenie vín, bo spasenie vydobyl nám Boží Syn."
                        ],
                        [
                            "REF.: Ó, poď, bo ten Pán len zachráni ťa sám, v Ňom poslané bolo ",
                            "vykúpenie nám. Len u Neho nájdeš odpustenie vín, bo dokonalú nám ",
                            "spásu dobyl Boží Syn."
                        ],
                        [
                            "2. Ó, poďte a hriechu slúžiť prestaňte! Ó, poďte a Kristu život oddajte!",
                            "On pokoj svoj dá vám i hneď určite, len spasenie, ešte dnes v Ňom prijmite!"
                        ],
                        [
                            " REF.: Ó, poď, bo ten Pán len zachráni..."
                        ],
                        [
                            "3. Ó, poďte len hlásať preradostnú zvesť! Ó, poďte ju šíriť, všetkým ľuďom ",
                            "niesť, že dľa svojho plánu Boh dá život nám, čo vydobyl slávne Kristus Ježiš sám."
                        ],
                        [
                            "REF.: Ó, poď, bo ten Pán len zachráni..."
                        ]
                    ]
                },
                {
                    "name": "Čuj, kto v tichej nočnej chvíli klope",
                    "number": 97,
                    "lang": "sk",
                    "url": "cuj-kto-v-tichej-nocnej-chvili-klope",
                    "author": "",
                    "verses": [
                        [
                            "1. Čuj, kto v tichej nočnej chvíli klope v tebe tiež. Klope zase, ",
                            "klope znova, kto je to či vieš? Nevrav, že to tep je srdca, hlbší tlkot ten:",
                            "Ježiš je to, On ťa prosí, bys´ Ho vpustil len.   "
                        ],
                        [
                            "2. Keď smrť príde v chatrč, v palác, dlho nelení nepýta sa, či ju vpustia, ",
                            "vnikne s náhlením. Ale Ježiš čaká, čaká, či Ho prijmeš len, konečne však ",
                            "odíde preč a s Ním spásy deň."
                        ],
                        [
                            "3. Potom budeš ty stáť vonku, „Pane, vpusť ma“, klať, ruky spínať, volať, ",
                            "kvíliť; On ťa nechá stáť. Zabudol si, kto ťa prosil, bys´ Ho prijať chcel? ",
                            "Dlho klopal. Keď si nedbal, navždy odišiel."
                        ]
                    ]
                },
                {
                    "name": "Ó, poďte už k Pánovi v mladosti hneď",
                    "number": 98,
                    "lang": "sk",
                    "url": "o-podte-uz-k-panovi-v-mladosti-hned",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, poďte už k Pánovi v mladosti hneď, v Ňom nájdete Priateľa",
                            "iste a skôr než vás zvedie a otrávi svet, On vám chce dať životy čisté.  "
                        ],
                        [
                            "REF.: Hľa, Spasiteľ volá a zve, je hotový spasiť i vás a vytrhnúť zlému,",
                            "ó, poďte dnes k Nemu, raz pominie milosti čas. "
                        ],
                        [
                            "2. Ó, hľaďte, čo pretrpel, vycedil krv, to všetko sa pre hriešnych stalo. ",
                            "Tak v istote viery Mu dajte čím prv i duše i životy s chválou."
                        ],
                        [
                            "REF.: Hľa, Spasiteľ volá a zve..."
                        ],
                        [
                            "3. Už dlhý je detí i dospelých rad, čo na roli Božej, hľa stojí.",
                            "Či zajtra už nebude neskoro snáď sa s ľudom tým spaseným spojiť?"
                        ],
                        [
                            "REF.: Hľa, Spasiteľ volá a zve..."
                        ],
                        [
                            "4. Len Pánovi dajte sa, pokým je čas, v Ňom spoznáte Záchrancu",
                            "duší, bo príde noc hnevu a zahubí vás. Tú chvíľu kto môže z nás tušiť!?"
                        ],
                        [
                            "REF.: Hľa, Spasiteľ volá a zve..."
                        ]
                    ]
                },
                {
                    "name": "Ó, duša nešťastná",
                    "number": 99,
                    "lang": "sk",
                    "url": "o-dusa-nestastna",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, duša nešťastná, ó neži v nevere! ",
                            "I tebe otvoril Boh milosti dvere."
                        ],
                        [
                            "2. Skrze svojho Syna ťa slovom milosti",
                            "k Sebe povoláva, hriechy ti odpustí."
                        ],
                        [
                            "3. Len vyznaj v pokore svoje prestúpenie,",
                            "nad všetky skutky je Božie zľutovanie."
                        ],
                        [
                            "4. Opusť cestu hriechu , pristúp vierou k Nemu.",
                            "Privlastni si spásu a vzdaj chválu Jemu!"
                        ],
                        [
                            "5. Zasväť život celý službe Ježišovej, ",
                            "aby ťa uviedol tam do zeme novej!"
                        ]
                    ]
                },
                {
                    "name": "K prameňu života poďte",
                    "number": 100,
                    "lang": "sk",
                    "url": "k-pramenu-zivota-podte",
                    "author": "",
                    "verses": [
                        [
                            "1. K prameňu života poďte, smädní a unavení, ",
                            "bremená hriechov tam zhoďte, budete obnovení."
                        ],
                        [
                            "REF.: Priateľu, poď k prameňu vôd, istotu spasenia dosiahneš tam. ",
                            "Pod krížom k životu vstaneš, vykročíš ku nebesám."
                        ],
                        [
                            "2. Ku studni zmierenia spiechaj, napi sa vierou z jej vôd, ",
                            "pochybnosť hriešnu tam nechaj, na ceste spásy vpred poď."
                        ],
                        [
                            "REF.: Priateľu, poď k prameňu vôd..."
                        ],
                        [
                            "3. Z prameňa svätého prúdy obživia, sila v nich dlie;",
                            "nemusíš v mrákavách blúdiť, k večnému blahu ísť smieš."
                        ],
                        [
                            "REF.: Priateľu, poď k prameňu vôd..."
                        ]
                    ]
                },
                {
                    "name": "Jediný odkaz",
                    "number": 101,
                    "lang": "sk",
                    "url": "jediny-odkaz",
                    "author": "",
                    "verses": [
                        [
                            "Jediný odkaz chcem ľuďom rád niesť, dokiaľ je milosti čas. ",
                            "Celému svetu by znela v ňom zvesť: Ježiš dnes spasiť chce nás!"
                        ],
                        [
                            "Zbor: Ježiš dnes spasiť chce nás, Ježiš dnes spasiť chce nás, ",
                            "Ježiš nás spasiť chce v každý čas, Ježiš dnes spasiť chce nás. "
                        ],
                        [
                            "Hoci už hriechy a previnenia zmŕtvili svedomia hlas,",
                            "vravte len s vierou aj s brán súženia: Ježiš dnes spasiť chce nás!",
                            "Zbor:"
                        ],
                        [
                            "Keď svet k zlu zvádza, vám ubúda síl, dozrieva súdu už čas, ",
                            "smelo len vravte aj prostred tých chvíľ: Ježiš dnes spasiť chce nás!",
                            "Zbor:"
                        ],
                        [
                            "V biede keď smútku, cez slzy a žiaľ nezrieť už slnečný jas, ",
                            "zverte sa Bohu, čo nám Syna dal: Ježiš dnes spasiť chce nás! ",
                            "Zbor:"
                        ],
                        [
                            "V údoli smrti, kde zavládne tieň, splesajte v blízkosti krás: ",
                            "Ešte pár krokov a zasvitne deň: Ježiš dnes spasiť chce nás!",
                            "Zbor:"
                        ]
                    ]
                },
                {
                    "name": "Ó, zo sna hriechu prebuď sa",
                    "number": 102,
                    "lang": "sk",
                    "url": "o-zo-sna-hriechu-prebud-sa",
                    "author": "",
                    "verses": [
                        [
                            "Ó zo sna hriechu prebuď sa, aj teba volá Pán. ",
                            "Hľa, Pastier ovce zvoláva a želie tvojich rán. "
                        ],
                        [
                            "Zbor: (: Duša, povedz mi, prečo odkladáš? :) ",
                            "Prečo spasenie večné odmietaš? Milosť pominie ani nezbadáš. "
                        ],
                        [
                            "Už nechoď cestou širokou, hľa, vztýčený je kríž, ",
                            "ním cestu k Bohu otvoril aj tebe Pán Ježiš. ",
                            "Zbor:"
                        ],
                        [
                            "Ó, cesty chybné zanechaj krok obráť v iný smer",
                            "keď Spasiteľ ťa domov zve, Duch volá: poď a ver!",
                            "Zbor: "
                        ]
                    ]
                },
                {
                    "name": "Čuj, Pán Ježiš volá teba",
                    "number": 103,
                    "lang": "sk",
                    "url": "cuj-pan-jezis-vola-teba",
                    "author": "",
                    "verses": [
                        [
                            "Čuj Pán Ježiš volá teba, prečo odkladáš? ",
                            "Na srce ti často klopal, kedy Mu ho dáš?",
                            "Dlho, dlho váhaš, stojíš, načo čakáš len? ",
                            "Život skoro uplynie ti, zájde spásy deň. "
                        ],
                        [
                            "Prečo váhaš odovzdať sa? Pán ťa volá dnes!",
                            "Počuj Jeho láskavý hlas, k Nemu ešte smieš. ",
                            "Neobzeraj sa viac naspäť, dnes čas milosti, ",
                            "nevieš, možno zajtra pôjdeš cestou večnosti. "
                        ],
                        [
                            "Beda, ak deň spásy zmeškáš, večne budeš lkať, ",
                            "tvoje slzy budú márne, pozde ľutovať! ",
                            "Neskoro už! Desné slová! Všetko stratené!",
                            "Neskryješ sa nikde, srdce hriechom zmámené!"
                        ],
                        [
                            "Dnes však ešte nie je pozde! Prečo odkladáš? ",
                            "Spasiteľ ťa volá k sebe, prečo utekáš? ",
                            "Smrťou svojou vykúpil ťa, vráť, sa kým je čas!",
                            "Dnes ťa volá! Dnes ťa prijme! Počuj Pánov hlas!\n"
                        ]
                    ]
                },
                {
                    "name": "Spasiteľ ťa k Sebe volá",
                    "number": 104,
                    "lang": "sk",
                    "url": "spasitel-ta-k-sebe-vola",
                    "author": "",
                    "verses": [
                        [
                            "Spasiteľ ťa k Sebe volá, poď ešte dnes",
                            "K hodom svadobného stola poď ešte dnes! "
                        ],
                        [
                            "Zbor: Posolstvo nech všade zneje: k Bohu každý smie tam, ",
                            "kde je, odpustenie hotové je, poď ešte dnes!"
                        ],
                        [
                            "Či si veľký a či malý, poď ešte dnes, ",
                            "Ježiš volá z blízka, z diali, poď ešte dnes!",
                            "Zbor:"
                        ],
                        [
                            "Poď skôr, ako noc ťa schváti, poď ešte dnes, ",
                            "Ježiš ťa chce obohatiť, poď ešte dnes!",
                            "Zbor: "
                        ],
                        [
                            "On ti chce byť milostivý, poď ešte dnes, ",
                            "chlebom večným Svojich živí, poď ešte dnes!",
                            "Zbor:"
                        ],
                        [
                            "So všetkými vôkol stola, poď ešte dnes, ",
                            "nové piesne spievať volá, poď ešte dnes! ",
                            "Zbor. "
                        ]
                    ]
                },
                {
                    "name": "Duša unavená, slabá,",
                    "number": 105,
                    "lang": "sk",
                    "url": "dusa-unavena-slaba",
                    "author": "",
                    "verses": [
                        [
                            "Duša unavená, slabá, Ježiš ti pomôcť chce. ",
                            "Pán ťa z biedy budí, vinie k Svojej hrudi, ",
                            "On ťa občerstvením poľúbi. "
                        ],
                        [
                            "Zbor: Dúfaj, synu v Neho, Pána láskavého, ",
                            "On ti k víťazstvu silu dá. "
                        ],
                        [
                            "Duša opustená, samá, Spasiteľ hľadá ťa. ",
                            "On ťa menom pozná, hoc je búrka hrozná, ",
                            "On je dúha mieru ľúbezná. ",
                            "Zbor:"
                        ],
                        [
                            "Duša poranená žiaľom, Ježiš ťa zhojiť chce. ",
                            "Vidí tvoje rany a ty nevieš ani, ",
                            "ako Jeho ruka zachráni. ",
                            "Zbor:"
                        ],
                        [
                            "Duša nemocná a chorá, Ježiš ťa vzpriamiť chce. ",
                            "Keď ťa bolesť trápi, On je Lekár pravý, ",
                            "ktorý pozdvihne a uzdravi. ",
                            "Zbor: "
                        ],
                        [
                            "Duša umorená hladom, Ježiš ťa sýtiť chce ",
                            "chlebom Svojho stola. Hladných k Sebe volá, ",
                            "nasýti ich všetkých dokola. ",
                            "Zbor:"
                        ]
                    ]
                },
                {
                    "name": "Viď tú lásku Kristovu",
                    "number": 106,
                    "lang": "sk",
                    "url": "vid-tu-lasku-kristovu",
                    "author": "",
                    "verses": [
                        [
                            "Viď tú lásku Kristovu k pomoci vždy hotovú!",
                            "Hľadá vo dne, hľadá v noci, či je sparno a či mráz, ",
                            "po mestách i po dedinách počuť Jeho drahý hlas. "
                        ],
                        [
                            "Viď tú lásku Kristovu k pomoci vždy hotovú!",
                            "Pri dverách sŕdc verne stojí, čaká, kto jej otvori. ",
                            "Z bied a bôľov vzkriesi túžby, čo zrú v neba priestory."
                        ],
                        [
                            "Viď tú lásku Kristovu k pomoci vždy, hotovú!",
                            "Srdce, ktoré hriechom zhrublo a či žiaľom hynulo, ",
                            "k životu On môže vzkriesiť, aby piesňou vzplanulo. "
                        ],
                        [
                            "Máš tú lásku Kristovu k pomoci vždy hotovú? ",
                            "Chcel by si tiež byť jej kňazom? Oltár, hľa, je hotový: ",
                            "tam kde hynie tvoj brat biedny, zotročený diablovi. "
                        ],
                        [
                            "Mal si lásku Kristovu k pomoci vždy, hotovú? ",
                            "Otázka ťá bude víriť tvojej duše hlbiny, ",
                            "keď sa Sudca bude pýtať, ako si žil s blížnymi. "
                        ]
                    ]
                },
                {
                    "name": "Vráť sa, domov!",
                    "number": 107,
                    "lang": "sk",
                    "url": "vrat-sa-domov",
                    "author": "",
                    "verses": [
                        [
                            "Vráť sa, domov! Poď, ó, duša blúdna!",
                            "V ďalekej cudzine blaho ti nekynie. "
                        ],
                        [
                            "Zbor: Ó, dieťa zblúdilé, vráť sa, domov vráť! ",
                            "Vráť, vráť sa domov, vráť!"
                        ],
                        [
                            "Vráť sa, domov! Otec teba čaká, ",
                            "v pokáni a žiali opusť hriechu kaly. ",
                            "Zbor:"
                        ],
                        [
                            "Vráť sa, domov! Poď von z ríše smrti, ",
                            "diabol kde ťa klame, sklamanie kde samé. ",
                            "Zbor:"
                        ],
                        [
                            "Vráť sa, domov! U Otca je dobre, ",
                            "s láskou zve ťa k sebe, odpustiť chce tebe. ",
                            "Zbor: "
                        ]
                    ]
                },
                {
                    "name": "Všetci, čo ste smädní",
                    "number": 108,
                    "lang": "sk",
                    "url": "vsetci-co-ste-smadni",
                    "author": "",
                    "verses": [
                        [
                            "Všetci, čo ste smädní, poďte k vodám: Ja vám tu nápoja, spásy podám. ",
                            "„Pán volá z výšin hlasom ľúbezným, Ó, len poďte srdcom roztúženým!“"
                        ],
                        [
                            "Poďte a kupujte bez peňazí, Môj pokrm, i nápoj ktorý blaží;",
                            "i mlieka, vína dám, ó, len poďte! Veď Mi ho zaplatiť nemusíte. "
                        ],
                        [
                            "Prečo len peniaze vydávate, nie za chlieb, a prečo jedávate, ten pokrm,",
                            "ktorý vás nenasíti, v ňom duša pokoja nepocíti? "
                        ],
                        [
                            "Počujte radšej Mňa, ku Mne bežte, a to čo je dobré u Mňa jedzte, ",
                            "nech sa duch váš u Mňa kochá v tuku; „Ó, poďte, veď podávam vám ruku!“"
                        ],
                        [
                            "Čujte a otvorte svoje uši, poďte si pre spásu svojich duší;",
                            "„Ja s vami chcem spraviť zmluvu večnú; Ja chcem vám dať milosť nekonečnú.“ "
                        ]
                    ]
                },
                {
                    "name": "Zle na tom sú ver´ tie duše",
                    "number": 109,
                    "lang": "sk",
                    "url": "zle-na-tom-su-ver-tie-duse",
                    "author": "",
                    "verses": [
                        [
                            "Zle na tom sú ver´ tie duše, v ich srdci",
                            "sa Boh nemôže dľa svojej ľúbosti osláviť ",
                            "z milosti, bárs Ho i znajú, v Ňom nádej majú. "
                        ],
                        [
                            "Ach, povedz mi, čo bráni im mať úplné ",
                            "spojenie s Ním? Nevedia sa stíšiť, keď Ježiš ",
                            "naplniť chce svojou láskou a blaženosťou. "
                        ],
                        [
                            "V ich srdci rozhodnosti niet, nenechalo ",
                            "márnosti svet. V dve strany klátené, nie sú ",
                            "naplnené olejom svätým, Pánom bohatým. "
                        ],
                        [
                            "Ó, srdce ďalej neváhaj, bo stratíš svoj ",
                            "slúbený raj! Zájde Božia milosť; ó, aká to žalosť.",
                            "Dobre si rozváš, čo učiniť máš! "
                        ],
                        [
                            "Upotreb svoje vážne „dnes“. Milosť Božia zmizne raz, vieš!? ",
                            "Nedaj jej uletieť. Ó, nezostávaj späť: Vykroč za Kristom, pokoj je len v Ňom. "
                        ],
                        [
                            "On sám duši dá blaženosť; uspokojí ju na večnosť.",
                            "Ó, tam už nezhynie! K srdcu Pán privinie dieťa milené, draho kúpené. "
                        ],
                        [
                            "Ó, Jezu tiahni si ma blíž! Ty vzrastaj, mňa vznes na Svoj kríž.",
                            "Opanuj ma cele, na duši i tele, Ty Si dnes diel môj, a ja navždy Tvoj. "
                        ]
                    ]
                },
                {
                    "name": "Všetci, ktorí chcú",
                    "number": 110,
                    "lang": "sk",
                    "url": "vsetci-ktori-chcu",
                    "author": "",
                    "verses": [
                        [
                            "Všetci, ktorí chcú sa zmocniť šťastia taju,",
                            "ku ovečkám Krista pripojiť sa majú. "
                        ],
                        [
                            "On ich stále vodí na zelené nivy. ",
                            "Tam im Seba dáva – pokrm pravý, živý. "
                        ],
                        [
                            "Smäd ich duše sýtia žriedla prebohaté, ",
                            "čo sú otvorené v krvi Jeho svätej. "
                        ],
                        [
                            "Za ovečku Svoju prijmi aj mňa. Pane, ",
                            "v Sebe samom uzdrav srdce doráňané. "
                        ]
                    ]
                },
                {
                    "name": "Ježiš volá teba",
                    "number": 111,
                    "lang": "sk",
                    "url": "jezis-vola-teba",
                    "author": "",
                    "verses": [
                        [
                            "Ježiš volá teba, duša, na svoju si hruď ",
                            "pritiskne ťa k svojmu srdcu, dá ti kľud. "
                        ],
                        [
                            "Hoc nad počet hviezd nebeských viacej ",
                            "si mal vín, ponúka ti odpustenie, Boží Syn. "
                        ],
                        [
                            "Ver, ó, ver už, Ježišovi srdce dnes Mu daj, ",
                            "budeš počuť Jeho slovo: „Pokoj maj!“"
                        ]
                    ]
                },
                {
                    "name": "Istotu vzácnu",
                    "number": 112,
                    "lang": "sk",
                    "url": "istotu-vzacnu",
                    "author": "",
                    "verses": [
                        [
                            "Istotu vzácnu v srdci už mám: spasil ",
                            "ma Ježiš, Boh môj a Pán! Bremeno hriechov",
                            "z duše mi sňal, dedičom Božím tak som sa stal. "
                        ],
                        [
                            "Zbor: Zazvučí, chvály radostný tón, vznáša sa ",
                            "vrúcne pred Boží trón: Sláva Ti, Pane, spásu ",
                            "že mám, srdce a dušu v obeť Ti dám!"
                        ],
                        [
                            "Aká to sláva, Pánom ho zvať, do služieb ",
                            "Jeho navždy sa dať! Priniesol spásu pre celú zem, ",
                            "pravdu tú ľuďom zvestovať chcem. ",
                            "Zbor: "
                        ],
                        [
                            "Oddaný Jemu, pokoj už mám, srdce mi zmenil",
                            "v svätý svoj chrám. V predivnej sláve zjaví ",
                            "sa v ňom, vo všetkom všetkým je mi tu On!",
                            "Zbor."
                        ],
                        [
                            "D. P. 113",
                            "Haleluja!",
                            "Haleluja! Plesaj ľudstvo Boh nám svojho Syna daroval, ",
                            "Hriešnikov On s láskou volá do vlasti kde pre nich neskonalú radosť prichystal. "
                        ],
                        [
                            "Zbor: On nás miluje, On nás miluje, večnou láskou ľudí miluje. ",
                            "vzdajme chválu Jeho menu, Spasiteľ náš drahý všetkej vďaky, chvály hoden je. "
                        ],
                        [
                            "Haleluja na výsosti! Minula noc, ťažký hriecha sen.",
                            "Milsoť svetom cleým žiari ľudstvu zblúdilému, odpustenia slávny svitol deň. ",
                            "Zbor."
                        ],
                        [
                            "Haleluja na výsosti! Ježiš z nebies výšin zostúpil. ",
                            "Opustil trón večnej slávy, aby stratený svet na potupnom kríži vykúpil. ",
                            "Zbor. "
                        ],
                        [
                            "Haleluja! On je láska, dobrovoľne seba v obeť dal. ",
                            "On nás s Otcom zmieril spasil; zmazané sú viny, všetkých volá k sebe Kráľov, Kráľ. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 114",
                            "Ty môj večný Dobrodinče",
                            "1. Ty môj večný Dobrodinče, viac než priateľ ",
                            "Ty si mne; počas môjho putovania, dovoľ ",
                            "kráčať pri Tebe. Pri Tebe, pri Tebe; pri Tebe, pri Tebe. ",
                            "Počas môjho putovanie, dovoľ kráčať pri Tebe. "
                        ],
                        [
                            "2. Nie za svetské radovanky, nie za slávu prosím Ťa;",
                            "s radosťou ja budem trpieť, keď len Ty povedieš mňa. ",
                            "Pre Teba, pre Teba; pre Teba, pre Teba. ",
                            "S radosťou ja budem trpieť, keď len Ty povedieš mňa. "
                        ],
                        [
                            "Cez údolie stínu smrti, i cez vodu búrlivú, ",
                            "veď ma milý Spasiteľu, šťastne doveď k domovu. ",
                            "Veď ma Ty, veď ma Ty; veď ma Ty, veď ma Ty. ",
                            "Veď ma milý Spasiteľu, šťastne dove\tď k domovu. "
                        ]
                    ]
                },
                {
                    "name": "V mori hriecha",
                    "number": 115,
                    "lang": "sk",
                    "url": "v-mori-hriecha",
                    "author": "",
                    "verses": [
                        [
                            "1. V mori hriecha tonul som, od brehu ďaleko;",
                            "Poškvrneným životom blúdil som široko. ",
                            "Ale toho mora Pán Zúfalý čul môj hlas, ",
                            "z hriecha vĺn ma pozdvihol, som šťastný zas. "
                        ],
                        [
                            "Zbor: Láska Pána pozdvihla ma keď nič nepomohlo, Pán zdvihol ma. ",
                            "Láska Pána pozdvihla ma keď nič nepomohlo, Pán zdvihol ma. ",
                            "Láska Pána pozdvihla ma keď nič nepomohlo, Pán zdvihol ma. "
                        ],
                        [
                            "2. Cele sa mu oddávam, chcem navždy Jeho byť.",
                            "V Jeho len prítomnosti je veľká radosť žiť. ",
                            "On vždy svoje ramená k pomoci podáva; ",
                            "každého chce vyslobodiť ako mňa. ",
                            "Zbor. "
                        ],
                        [
                            "3. Všetky duše hynúce, k Nemu sa obráťte, ",
                            "hriechom srdce zronené v obeť Mu oddajte. ",
                            "Toho mora mocný Pán. Chce sa vás zaújať, ",
                            "z vĺn krutých vyslobodiť a život dať. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 116",
                            "Čo ma z hriechu očistí? ",
                            "1. Čo ma z hriechu očistí? Iba krv Ježiša Krista. ",
                            "Duši mier čo zaistí? Iba krv Ježiša Krista. "
                        ],
                        [
                            "Zbor: Slávny a drahý prúd odvráti Boží súd, ",
                            "milosť mi prichystá iba krv Ježiša Krista. "
                        ],
                        [
                            "2. Čo ma dlhov pozbaví? Iba krv Ježiša Krista. ",
                            "Čo mi večnosť pripraví? Iba krv Ježiša Krista. ",
                            "Zbor. "
                        ],
                        [
                            "3. Čo dá s Bohom zmierenie? Iba krv Ježiša Krista. ",
                            "Ku krížu čo privedie? Iba krv Ježiša Krista. ",
                            "Zbor. "
                        ],
                        [
                            "4. Čo mi obieli môj šat? Iba krv Ježiša Krista. ",
                            "Spásu čo mi môže dať? Iba krv Ježiša Krista. ",
                            "Zbor. "
                        ],
                        [
                            "5. Čistoty čo dá mi peľ? Iba krv Ježiša Krista. ",
                            "Čo mi dáva v nebi diel? Iba krv Ježiša Krista. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 117",
                            "Ako sa dieťa privinie",
                            "1. Ako sa dieťa privinie v náruč vždy otcovu, ",
                            "lodička ako za búrky náhli sa k prístavu, ",
                            "Tebe sa túžim, Otče môj, v náručie položiť, ",
                            "dušu ráč moju zomdlenú silou zas obnoviť. "
                        ],
                        [
                            "2. S dôverou ako dieťa zrie mamičke do očí, ",
                            "jeho strach, bázeň, bolesti pohľad ten umlčí, ",
                            "tak sa chcem Tebe, Jezu môj, do tvári zahľadieť. ",
                            "V pohľade tom sa rozplynú žiale, čo zasial svet. "
                        ],
                        [
                            "3. Pri nohách nežných rodičov oddá sa dieťa hrám,",
                            "nepozná0 strastí ani múk, láska ho chráni tam. ",
                            "Tebe tak, Pane, pri nohách v dôvere spočiniem, ",
                            "prijimať lásku, láskou žiť dľa vôľe Tvojej chcem. "
                        ],
                        [
                            "D. P. 118",
                            "Ako neľúbiť Ťa, Kriste",
                            "1. Ako neľúbiť Ťa Kriste, keď si všetko za mňa dal? ",
                            "Ako nevzdať chvály čisté, keď si hriech môj zo mňa sňal? ",
                            "Veď si z trónu nebeského zostúpil k nám na ten svet, ",
                            "obmyl srdce, zbavil zlého, stratený raj dobyl späť. "
                        ],
                        [
                            "2. Vyrval si ma z diabla ruky, dal si za mňa život svoj, ",
                            "pre mňa trpel kruté muky, s peklom viedol ťažký boj. ",
                            "Preťal putá v Božej sile, zlámal hriechu okovy a tak ",
                            "dieťa zablúdilé zaviedol späť k Otcovi. "
                        ],
                        [
                            "3. K Tebe prameň večnej spásy, s túžbou stále vyzerám;",
                            "keď sa vo mne mdloba hlási buď Ty mojou silou sám! ",
                            "Daj mi v Tvojej prítomnosti stále žiť a zotrvať! ",
                            "Volám, túžim po svätosti, Tebe chcem sa podobať! "
                        ],
                        [
                            "D. P. 119",
                            "Hospodin ráči Pastierom byť mojím. ",
                            "1. Hospodin ráči Pastierom byť mojím, nedostatku a biedy sa nebojím. ",
                            "Na pažitiach sám zelených ma pasie, ku vodám týchým vodí v každom čase. ",
                            "Mojej On duši občerstvenie dáva, na svojich cestách moje nohy stavia. "
                        ],
                        [
                            "2. Moja púť keď ma chladnou ríšou smrti, dolinou tône kráčať bude nútiť, ",
                            "nebudem sa báť ničoho tam zlého, spolieham verne na prítomnosť Jeho. ",
                            "Dušu Pán svojim prútom potešuje, pred nepriateľmi stôl mi pripravuje. "
                        ],
                        [
                            "3. Olejom Ducha kropíš moju hlavu, pohár mi plníš, vedieš v svoju slávu. ",
                            "Áno, len dobré, milosť, zľutovanie sprevádzajú ma deňne, dobrý Pane. ",
                            "Príbytok večný nik mi nepripraví iba Ty, Bože, v dome svojej slávy. "
                        ],
                        [
                            "D. P. 120",
                            "Blúdieval som ",
                            "Blúdieval som v hriecha noci, v neznalosti bez pomoci, ",
                            "do záhuby ponáhľal som v srdci vládol smútok a ston. "
                        ],
                        [
                            "2.  Rád by som bol v pokoji žil, márne som však po ňom túžil. ",
                            "Hrozná cesta vzdorovania priviedla ma do zúfania. "
                        ],
                        [
                            "3. Biedne by som bol tam zhynul, večný život navždy minul, ",
                            "ale Kristus, svetlo jasné, rozplašil tmy hriechu strašné. "
                        ],
                        [
                            "4. S Kristom žijem život nový, za ním kráčam ku Otcovi. ",
                            "On ma vedie v ríšu neba, v ňom mám všetko, čo mi treba. "
                        ],
                        [
                            "5. Môj Priateľ teba volá tiež, Poď, duša, inak zahynieš. ",
                            "Zdroj spasenia ti otvorí, raz príjme v neba priestory. "
                        ],
                        [
                            "D. P. 121",
                            "Ja som už len Tvojím",
                            "1. Ja som už len Tvojím, ó, Jezu, na večnosť, ",
                            "však so stavom svojím natrápil som sa dosť! "
                        ],
                        [
                            "Zbor: Tvojím som a chcem vždy byť, len pre Teba chcem žiť. ",
                            "V Tvojom svätom náručí mám svoj úkryt! "
                        ],
                        [
                            "2. Ja som už len Tvojím, vyznávam to smele! ",
                            "Božská Tvoja láska premohla ma cele! ",
                            "Zbor"
                        ],
                        [
                            "3. Ja som už len Tvojím, ó, dobrý Pastieru! ",
                            "Tvoju ku mne vernosť vážim si nad mieru! ",
                            "Zbor. "
                        ],
                        [
                            "4. Ja som už len Tvojim, Žriedlo večnej spásy, ",
                            "chcem plniť ochotne, vždy Tvoje rozkazy?!",
                            "Zbor. "
                        ],
                        [
                            "5. Ja som už len Tvojím, ó, Ozdoba neba! ",
                            "Veď kde by som našiel krajšieho nad Teba?!",
                            "Zbor:"
                        ],
                        [
                            "D. P. 122",
                            "Milovať chcem Ťa, ",
                            "1. Milovať chcem Ťa, moja sila, a Tebe, poklad môj, chcem žiť,",
                            "Kiež by sa láska prejavila Ti život v službe zasvätiť!",
                            "Milovať chcem Ťa, svetla zdroj, (: úprimne, verne za hrob svoj. :)"
                        ],
                        [
                            "2. Milovať chcem Ťa, moje žitie, som v Tvojej istej ochrane. ",
                            "Teba chcem sláviť v žiare, svite milosti Tvojej preslávnej. ",
                            "Milovať chcem Ťa stoj čo stoj, (: Baránku láskavý ty môj. :)"
                        ],
                        [
                            "3. Blúdil som, hriešne sny som sníval, hľadal som Ťa, no nepoznal,",
                            "bo odvrátený som vždy býval od Teba, preč od svetla stál. ",
                            "Ty spôsobils´ to milosťou, (: že kráčam k nebu za Tebou. :)"
                        ],
                        [
                            "4. Ďakujem Ti, ó, svetlo krásne, že žiara Tvoja svieti mi, ",
                            "Ďakujem Tebe, slnko jasné, že radosť spoznať dal si mi. ",
                            "Veď Slovo Tvoje jedine (: mi rany hojí predivne. :)"
                        ],
                        [
                            "D. P. 123",
                            "Jezu, jako Pastier voď nás",
                            "1. Jezu, jako Pastier voď nás; stádom Tvojim chceme byť. ",
                            "Púšťou sveta doprevaď nás ta, kde večne máme žiť. ",
                            "Ani jedna ovca Tvoja nikdy sa Ti neztratí, ",
                            "veď aj z posledného boja ruka Tvoja vychváti. "
                        ],
                        [
                            "2. V koho, Pane, tak jak v Teba, mohli by sme uveriť, ",
                            "však si pre nás prišiel z neba, pre nás dal sa umučiť. ",
                            "Pomoc svoju všetkým všade ponúkaš, hľa sám sebou;",
                            "tak my, Pane, v prvom rade ponáhľame za Tebou. "
                        ],
                        [
                            "3. S kým Ty kráčaš Pane tomu ani vlas sa neskrívi: ",
                            "sladká manna z Tvojho domu naveky ho obživí! ",
                            "Voď nás Tvoja berla smelá! S Tebou vždy je šťastná púť: ",
                            "všetky hrôzy nepriateľa nami nemôžu pohnúť!"
                        ],
                        [
                            "4. Tešíme sa bárs dnes tvárou, v tvár Ťa ešte nezrieme, ",
                            "že nás čuješ a že žiarou nebeskou Ťa uzrieme. ",
                            "Ó, až raz tam budeme stáť, Bohu kde nás odovzdáš. ",
                            "Ach, už i dnes daj nám poznať, Tvojí že sme a Ty náš! Amen. "
                        ],
                        [
                            "D. P. 124",
                            "Kriste, veď ma životom",
                            "1. Kriste, veď ma životom, istý iba s Tebou som. ",
                            "Pri tebe daj verne stáť, Tvoju lásku okúšať. "
                        ],
                        [
                            "Zbor: Veď ma, veď ma, Kriste, veď ma životom, ",
                            "v svete hriešnom, svete zlom iba s Tebou istý som. "
                        ],
                        [
                            "2. Duše skrýš len v Tebe je, sama v búrke zahynie, ",
                            "u Teba je v bezpečí, nik a nič ju nezničí. ",
                            "Zbor. "
                        ],
                        [
                            "3. Kriste, vodcom Ty si mi. Do nebeskej otčiny, ",
                            "kde niet bôle ani plač, bezpečne ma doviesť ráč! ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 125",
                            "Môj Jezu",
                            "1. Môj Jezu, jak Ťa milujem viac ako celý svet!",
                            "Keď mojím Spasiteľom si, znám nebies mieru kvet. "
                        ],
                        [
                            "Zbor: Ach, ani som to nevedel, jak slávny Pán si Ty, ",
                            "že Tvoja krv ma presvätá od hriechu očistí. "
                        ],
                        [
                            "2. Aj ľudskú lásku spoznal som, no Tvoja nad ňu je. ",
                            "Zvuk Tvojho mena v srdci mi vždy ako pieseň znie. ",
                            "Zbor. "
                        ],
                        [
                            "3. Ó, tíško v mojej duši dlie lúč nebies radosti, ",
                            "no nemať Tvojej lásky svit, tak zhyniem v temnosti!",
                            "Zbor. "
                        ],
                        [
                            "4. Ó, Jezu drahý, Pane Môj! Keď v pozemsky už čas ",
                            "je sladko s Tebou, o čo viac tam v ríši večných krás. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 126",
                            "Tak vezmi ruky moje",
                            "1. Tak vezmi ruky moje a veď ma Sám. ",
                            "Cez úzkosti a boje až k cieľu tam. ",
                            "Sám neviem ako chodiť, ó, Pane môj;",
                            "Ty ráč mňa, prosím, vodiť, vždy pri mne stoj. "
                        ],
                        [
                            "2. Stíš srdce slabé v šťastí a pomiluj;",
                            "keď klesá v bojoch v strasti, Ty posiluj. ",
                            "Pri nochách Tvojích Pane, keď spočinie, ",
                            "nech stane sa čo stane, už nezhynie. ",
                            " ",
                            "3. Bárs necítim, ó, Kriste, vždy Tvoju moc",
                            "viem, že povedieš iste mňa i cez noc. ",
                            "Tak vezmi ruky moje, a veď ma sám ",
                            "v nádherné ríše Svoje, ku cieľu tam. "
                        ],
                        [
                            "D. P. 127",
                            "Na Ježiša upri zrenie",
                            "1. Na Ježiša upri zrenie, zvoľ si Jeho za svoj vzor,",
                            "a čím sa mu nepodobáš, to premáhaj, nič a bor! "
                        ],
                        [
                            "Zbor: Hľaď na Krista vždy a všade, od Neho si príklad ber! ",
                            "Jeho život nech ti svieti cestou až do raja dvier!"
                        ],
                        [
                            "2. Hľaď na nízkosť a pokoru, v jakej prišiel do sveta, ",
                            "osvoj si ju, nech jej krása v tvojom srdci rozkvetá. ",
                            "Zbor. "
                        ],
                        [
                            "3. Nezabúdaj, že Boží Syn k blahu iných v svete žil, ",
                            "poslušnosťou a vernosťou Svojho Otca oslávil. ",
                            "Zbor. "
                        ],
                        [
                            "4. Chceš sa učiť pravej láske? Pozri Krista na kríži!",
                            "Šťastný, kto pre nepriateľov rád i život položí! ",
                            "Zbor. "
                        ],
                        [
                            "5. Ber si príklad horlivosti, jakou duše zhľadával, ",
                            "vzdor únavy vodne v noci slúžil, trpel, nereptal!",
                            "Zbor. "
                        ],
                        [
                            "D. P. 128",
                            "Kto poznal myseľ Pána",
                            "1. Kto poznal myseľ Pána? Kto radu Jemu dal? ",
                            "Ó, zverte sa Mu cele, spievajte žalmy chvál! ",
                            "Rád priznávam sa k tomu, že nerozumel som, ",
                            "keď vložil na mňa ruku, keď lkal som nocou, dňom. "
                        ],
                        [
                            "2. Myšlienky, cesty Božie nie tak, jak naše sú, ",
                            "Veď nás dľa rady Svojej, veď cestou k životu. ",
                            "Znám, Pane, znám sa k tomu, že Ty si videl diaľ, ",
                            "keď najviac som sa vzpieral a s Tebou ísť sa bál. "
                        ],
                        [
                            "3. Pod mocnou rukou Pána korme sa radostne, ",
                            "On časom Svojím v nebe vnesie nás slávnostne. ",
                            "Nech, čo chce, činí s nami, On náš i Svoj zná cieľ, ",
                            "Tí, kto už tu sú Jeho, s Ním v nebi majú diel. "
                        ],
                        [
                            "D. P. 129",
                            "Našiel si ma, ",
                            "1. Našiel si ma, Pastieru, našiel si mám pokoj;",
                            "Prestálo už blúdenie, prestal i srdca boj. ",
                            "Vrelou láskous´ ma ľúbil, tá ma najviac teší, ",
                            "vernosť večnú si slúbil, nikto ju nezruší. "
                        ],
                        [
                            "Zbor: Zato Ťa ja, ó, Pane, nad všetko milujem, ",
                            "srdce, lásku, schopnosti všetko Ti darujem. ",
                            "Vezmi teda, čo dávam, obete vďačnosti, ",
                            "nechže sú Ti príjemné a sú ku radosti!"
                        ],
                        [
                            "2. Čo Ti dať viac? Ježišu! Väčší poklad nemám, ",
                            "keď Ti srdce aj dušu cele navždy oddám. ",
                            "Nepohrdneš mnou, Pane, iste v žiadne časy, ",
                            "bárs je mnoho pri Tebe k okúzleniu krásy. ",
                            "Zbor. "
                        ],
                        [
                            "3. Nechcem viacej, ó, Pane, ja mám už na tom dosť;",
                            "Teba mať, večná krása, plní srdce radosť. ",
                            "Ó, Ty roskošná láska, srdca mojeho chrám, ",
                            "pre Teba sa zemského šťastia všetkého vzdám. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 130",
                            "Ty nás preveď",
                            "1. Ty nás preveď, Hospodine, púšťou sveta vypráhlou. ",
                            "Slabí sme, ó, Boe silný, zmocni duše posilou.",
                            "Na Teba sa spoliehame, spoliehame vo všetkom. "
                        ],
                        [
                            "2. Svetu zjav tú Skalu večnú, z ktorej život pramení, ",
                            "uhas Ty smäd zmierajúcich, vzkries ich Svojím spasením. ",
                            "Spasiteľu, Spasiteľu, zjav sa všetkým národom. "
                        ],
                        [
                            "3. Rozhojni sám v cirkvi Svojej dary Ducha sľúbené,",
                            "by sa k dielu hlásil každý, kto zrie lásky pramene. ",
                            "Víťazne a s chválospevom ku dňu Tvojmu spejeme. "
                        ],
                        [
                            "D. P. 131",
                            "Ó, Pane Ježiši",
                            "1. Ó, Pane Ježiši, radosť v mojej duši si spôsobil,",
                            "Keď si ma z hriešnosti, nešťastia, žalosti vyslobodil. ",
                            "Daj, vierou stáť, Svet a hriech premáhať, ",
                            "aby som žil tak, jak sluší vykúpenej duši!"
                        ],
                        [
                            "2. Ó, daj mi žiť stále k Tvojej cti a sláve, ó, Bože môj. ",
                            "Sýť slovom života! Nech Tvoja dobrota je k žitiu zdroj!",
                            "Nech s radosti cestou poslušnosti kráčam s Tebou, ",
                            "bárs súžením! Daj mi zostať verným! "
                        ],
                        [
                            "3. V živote i v smrti nič ma nezarmúti, keď Teba mám! ",
                            "Ježišu môj drahý, tys´ môj poklad blahý, tak všetko mám!",
                            "Život večný! S Tebou som bezpečný!",
                            "Cestou Tvojou ma z milosti veď v ríšu radosti. "
                        ],
                        [
                            "D. P. 132",
                            "Buď vôľa Tvoja",
                            "1. Buď vôľa Tvoja, ó, Pane môj, Ty si ma stvoril a ja som Tvoj.",
                            "Učiň ma takým, akým byť mám, rád svojej vôle navždy sa vzdám. "
                        ],
                        [
                            "2. Buď vôľa Tvoja, ó, Pane môj, skús ma a poznaj, že som len Tvoj. ",
                            "Očisť ma, by som belší než sneh slávil Ťa cestou na večný breh. "
                        ],
                        [
                            "3. Buď vôľa Tvoja, ó, Pane môj, premocný Lekár, pri mne vždy stoj!",
                            "Ranený som, ach, udeľ mi síl, ku Tvojej sláve aby som žil. "
                        ],
                        [
                            "4. Buď vôľa Tvoja, ó, Pane môj, zverujem navždy život Ti svoj. ",
                            "Plnosť mi Ducha Svätého daj, po žitia bojoch uveď ma v raj. "
                        ],
                        [
                            "D. P. 133",
                            "Priateľa som našiel ctného",
                            "1. Priateľa som našiel ctného, čo ma večne miloval, ",
                            "dávno, než som spoznal Jeho, život za mňa v obeť dal. ",
                            "Za mňa tiekla tá krv drahá, spasenie mi vydobyl, ",
                            "otvoril mi prameň blaha, pokoj, slasť mi spôsobil. "
                        ],
                        [
                            "2. Koho mal bych nad Priateľa, ktorý život za mňa dal? ",
                            "Za mňa dal sa, svätý, zcela, moje hriechy na kríž vzal. ",
                            "Nechcem už nič volať svojím, Jemu všetko oddať chcem, ",
                            "s vďačným srdcom pred Ním stojím, Jeho som a milujem. "
                        ],
                        [
                            "3. Ten môj Priateľ prežiadúci horí láskou velikou ku mne",
                            "v svojom božskom srdci, ktoré ľúbi hriešnikov: ",
                            "Nič ma tu už nepozbaví tejto lásky v Kristovi, ",
                            "odísť do nebeskej slávy a byť s Ním som hotový. "
                        ],
                        [
                            "4. Priateľ môj má velikú moc na nebi i na zemi, ",
                            "On mi dáva všetkom pomoc, radu, silu dáva mi. ",
                            "V Tvojej moci kráčam smele ku predu v tú slávnu ríš, ",
                            "tam kde žiari sláva skvelá, Spastieľu Ty sa skvieš. "
                        ],
                        [
                            "D. P. 134",
                            "Ó, Pane, ",
                            "1. Ó, Pane, Tebe cele chcem slúžiť z všetkých síl, ",
                            "Ty posväť ma sám Duchom, by Tebel len som žil. "
                        ],
                        [
                            "Zbor: Hľa srdce v obeť vďaky rád Tebe vydávam, ",
                            "túžim, prosím, verím, že zapáliš ju sám. "
                        ],
                        [
                            "2. Daj plnosť svojho Ducha, by k Tebe viedol ma, ",
                            "nech učí s Tebou chodiť, keď vôkol hriech a tma.",
                            "Zbor."
                        ],
                        [
                            "3. Ráč prúdmi svojho Ducha ma zvlažiť zas a zas, ",
                            "by plný som bol sily, keď príde sucha čas. ",
                            "Zbor. "
                        ],
                        [
                            "4. Ty, drahý Spasiteľu, vždy veď ma, pri mne stoj",
                            "a utvŕď svojim Duchom, že Tvoj som a Ty môj! ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 135",
                            "Tebe sa, Pane môj",
                            "1. Tebe sa, Pane môj, v prachu korím, pokorne v Teba sa cele norím. ",
                            "Bez Teba mal som len biedu a žiaľ, až si ma, Baránok, za ruku vzal. "
                        ],
                        [
                            "Zbor: Tebe vždy bližšie, bližšie chcem stáť, nešťastné duše k tebe chcem zvať. ",
                            "S svätému zápasu vystroj ma sám, urob si vo mne dôstojný chrám. "
                        ],
                        [
                            "2. Na Tebe spolieham, nesiem svoj kríž. Poteš ma, pozdvihni, srdce a stíš. ",
                            "Ty mi vždy rozumieš, dobre ma znáš, keby som zomdlieval, víťazstvo dáš. ",
                            "Zbor. "
                        ],
                        [
                            "3. Nevzdiaľuj odo mňa útechy žiar, slzy keď zmáčajú strápenú tvár. ",
                            "Ruku mi podaj a posilni v čas, doveď ma v nebeský domova jas. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 136",
                            "Len Tebe chcem",
                            "1. Len Tebe chcem, môj Pane, srdce dať, Ty ráč ho posvätiť. ",
                            "Chcem Tvojim byť, len Teba milovať a na Tvoju česť žiť. ",
                            "Ó, počuj moju prosbu, Pane, keď k Tebe dvíham prázdne dlane, ",
                            "ó, zmiluj sa, ó, zmiluj sa! "
                        ],
                        [
                            "2. Len Tebe chcem, žalm vďaky vyspievať, vždy sláviť Tvoju moc. ",
                            "Chcem, spásy kríž deň po dni vyhliadať, keď všade hriechu noc. ",
                            "Hoc cestu žitia slza zmáča, Ty pomôž veriť, ticho kráčať, ",
                            "ó, čuj môj hlas! Ó, čuj môj hlas! "
                        ],
                        [
                            "3. Len Teba chcem, vždy Pánom nazývať, ó Spasiteľu môj. ",
                            "Len v Tvojej chcem vždy službe verne stáť, hoc zúri vôkol boj. ",
                            "Len víťazi raz zdedia slávu, im vence budú zdobiť hlavu, ",
                            "chcem verný byť! Chcem verný byť! "
                        ],
                        [
                            "D. P. 137",
                            "V milosti, Bože náš",
                            "1. V milosti, Bože náš, kraľuješ, vesmír Svoj nádherne spravuješ, ",
                            "dobrotu Tvoju však, ó, Bože, nebo, zem obsiahnúť nemôže. "
                        ],
                        [
                            "2. Ty si ten Panovník jediný, vládu z rúk nedáš ni hodiny. ",
                            "Tvojou sa všemocnou pravicou spravujú životy tisícov. "
                        ],
                        [
                            "3. Ruka tá času, hľa, každého aj mňa sa ujíma biedneho. ",
                            "V radosti, smútku, či v nesnádzach na ceste zemou ma sprevádza. "
                        ],
                        [
                            "4. Pánovi chcem sa dať úplne, bez Neho duša mi zahynie,",
                            "ale s Ním biedy a súženia na pieseň chvály sa premenia. "
                        ],
                        [
                            "5. Života cestou chcem ísť len s Ním rovinou, tŕnim, či úskalím. ",
                            "S nádejou k Nemu keď pozerám, ľahšie sa kráča mi, hore tam. "
                        ],
                        [
                            "6. Ježiš je cestou mi jedine k nebeskej nádhernej otčine. ",
                            "On je vždy pomôcť mi hotový, duša by priamo šla k Otcovi. "
                        ],
                        [
                            "7. A keď v tých príbytkoch zastane, Božím čo deťom sú schystané, ",
                            "v mieste tom úžasnej premeny žalosť sa v chválospev premení. "
                        ],
                        [
                            "8. Vesmír Ťa obsiahnúť nemôže, dobrota bez hraníc, ",
                            "náš Bože, vesmíru nesmierne končiny ovládaš len Ty sám jediný!"
                        ],
                        [
                            "D. P. 138",
                            "Čuj cudzinca pri dverách!",
                            "1. Čuj cudzinca pri dverách! Vpusť Ho dnu! ",
                            "Lásku nesie nemaj strach! Vpusť Ho dnu! ",
                            "Ježiš to k tebe ide; otvor, kým neodíde, ",
                            "bo už viacej nepríde. Vpusť Ho dnu! "
                        ],
                        [
                            "2. Či nečuješ Jeho hlas? Vpusť Ho dnu!",
                            "Jak milostne volá zas: Vpusť Ho dnu!",
                            "„Rád by som ti radosť dal, Rád u teba večeral!“",
                            "Duša, nepôsob Mu žiaľ! Vpusť Ho dnu! "
                        ],
                        [
                            "3. Dávno stojí smutno tam. Vpusť Ho dnu! ",
                            "Pán Ježiš, Syn Boží sám! Vpusť Ho dnu! ",
                            "Vpusti hosťa vzácného; ťarchu hriechu strašného ",
                            "chce zňať z srdca tvojeho. Vpusť Ho dnu! "
                        ],
                        [
                            "4. On vždy ešte klope len. Vpusť Ho dnu! ",
                            "Otvor, kým nezajde deň! Vpusť Ho dnu! ",
                            "Pomohol by ti tak rád; ak necháš Ho ale stáť, ",
                            "raz čo sudcu máš Ho znať! Vpusť Ho dnu! "
                        ],
                        [
                            "D. P. 139",
                            "Ach, už sa raz rozhodnite",
                            "1. Ach, už sa raz rozhodnite, koho chcete milovať! ",
                            "Nemožno je svetu slúžiť, nemožno je svetu slúžiť ",
                            "i Kristu sa venovať!"
                        ],
                        [
                            "2. Buďto pustíš hriechy sveta a k Bohu sa pivinieš;",
                            "alebo si zvolíš rozkoš, alebo si zvolíš rozkoš",
                            "a v nej večne zahynieš. "
                        ],
                        [
                            "3. Celé srdce Boh si žiada, bo On celé podáva. ",
                            "Niet spasenia, niet pre toho, niet spasenia, ",
                            "niet pre toho, kto pol sebe necháva. "
                        ],
                        [
                            "4. Akú lásku tam na kríži Pán Ježiš ti venoval",
                            "Či si zato nezaslúži, či si zato nezaslúži, ",
                            "bys´ Mu srdce daroval? "
                        ],
                        [
                            "5. Ach, zaiste! On ťa volá, slávu nebies chce ti dať. ",
                            "Rozhodni sa, neodkladaj, rozhodni sa, ",
                            "neodkladaj, lebo budeš ľutovať. "
                        ],
                        [
                            "D. P. 140",
                            "Pri studnici Jakobovej",
                            "1. Pri studnici Jakobovej stojí žena presmutná, počúva reč Ježišovu, ktorý všetko zná. ",
                            "Cíti svätosť Ježišovu ale tým viac i svoj hriech svedomie ju odsudzuje, ťaží duše beh. "
                        ],
                        [
                            "Zbor: Počuj, duša, Pán ťa čaká, On má vodu života, ",
                            "pri studnici Jakobovej On ti spásu dá. "
                        ],
                        [
                            "2. Zrázu žene svetlo spásy myseľ, srdce ožiari, miesto smútku blaho, radosť zrieť jej na tvári: ",
                            "To je Mesiáš, Spasiteľ, ktorého svet nečakal, odpustí a neodsúdi, hoci všetko znal. ",
                            "Zbor. "
                        ],
                        [
                            "3. Počkaj, Pane žena prosí, svojich blízkych zavolám. Vodu živú, milosť, spásu udeľ všetkým nám, ",
                            "by z nás nikto nezahynul, ale večne s Tebou žil. Žena beží do mestečka, volá z plných síl. ",
                            "Zbor. "
                        ],
                        [
                            "4. Poď aj ty, ó, duša milá, ktorá smädom zomieraš. Vodu živú dá ti Ježiš, hneď to rozpoznáš. ",
                            "Smútok v radosť premení sa, bázeň v šťastnú istotu, že ťa prijal, hriechy obmyl, vrátil k životu. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 141",
                            "Jak bez Teba žiť",
                            "1. Jak bez Teba žiť, Ježišu, v svete, kde samí hriech je len, ",
                            "kde všetká rozkoš klamný sen? Ó, jako žiť mrieť bez Teba! "
                        ],
                        [
                            "2. Jak bez Teba žiť, Ježišu, a v pokušení nepadnúť! ",
                            "Jako nad sebou zavládnuť? Ó, jako žiť mrieť bez Teba! "
                        ],
                        [
                            "3. Jak bez Teba žiť, Ježišu, keď prídu noci trápenia, ",
                            "keď zhučia vlny súženia? Ó, jako žiť mrieť bez Teba!"
                        ],
                        [
                            "4. Jak bez Teba žiť Ježišu? Kto k bojom ťažkým vyzbrojí? ",
                            "Kto stíši srdce spokojí? Ó, jako žiť mrieť bez Teba! "
                        ],
                        [
                            "D. P. 142",
                            "Pre Ježiša žiť",
                            "1. Pre Ježiša žiť chceme my, pre Neho do smrti ",
                            "držíme hore zástavu, vpred za víťaztvami! "
                        ],
                        [
                            "Zbor: Naveky zvíťazime, napredujeme ďalej",
                            "roztúžení keď prídu, s nami sa radujú. ",
                            "Je krásne dietkom Božim byť, od hriechov slávne čisto žiť. ",
                            "Jak krásne všetko, dobre je, Ježiš keď kraľuje. "
                        ],
                        [
                            "2. Ide svet proti nám, teraz nebojíme sa my, ",
                            "keď nám je Ježiš na pomoc, vpred za víťazstvami! ",
                            "Zbor. "
                        ],
                        [
                            "3. Keď Božiu prácu konáme, anjeli hľadia sem, ",
                            "pomôžu sa nám radovať, keď hriešnik sa kajá. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 143",
                            "Kvitnúca mládež",
                            "1. Kvitnúca mládež, kvet života obetuj mladý Pánovi ",
                            "v láske čo oddanej nepozná zrady. ",
                            "Najlepšie On pochopí radosť a ston, iba On dobre ti radí. "
                        ],
                        [
                            "2. Ktorých Pán očistí od zloby, vyprostí z bludu, ",
                            "vzácny sťa drahokam v korune skvieť sa raz budú. ",
                            "Či aj ty chceš aby ťa učinil tiež ozdobou Božieho ľudu? "
                        ],
                        [
                            "3. Mnohí však hltavo po hriešnom ovocí siahne, ",
                            "dravý prúd do svojho zhubného víru ho stiahne. ",
                            "Aký to žiaľ, sveta si obľúbiť kal, premárniť vzácny čas v bahne. "
                        ],
                        [
                            "4. Z mladenca starec už stáva sa na svetskej ceste, ",
                            "zo smädu po slasti upadne v satanské kliešte. ",
                            "U Pána však človek je voľný sťa vták, mladý aj v šedinách ešte. "
                        ],
                        [
                            "5. Ježiš a druhí nik nech ti je vysoká méta, ",
                            "k plnému životu pre druhých za sebou zve ťa, Jeho si zvoľ,",
                            "aby si šťastný s Ním bol, veď On Je budúcnosť sveta. "
                        ],
                        [
                            "D. P. 144",
                            "Duša v hriechu ponorená",
                            "1. Duša v hriechu ponorená, ",
                            "blúdiac jak ovca stratená ",
                            "nemáš pokoj v svojom srdci. ",
                            "Ťarcha hriechu ťa len rmúti. "
                        ],
                        [
                            "2. Preto počuj, duša drahá, ",
                            "Pán Ježiš aj teba volá, ",
                            "ťarcha hriechu sa tam stratí, ",
                            "večný pokoj v srdce dá ti. "
                        ],
                        [
                            "3. Neodmietaj hlas ten ľúbi, ",
                            "čo ti pokoj duši sľúbi, ",
                            "prijmi dnes to, čo je dobré, ",
                            "Možno zajtra bude pozde. "
                        ],
                        [
                            "4. Dnes je chvíľa, duša drahá, ",
                            "by si mohla vziať dar blaha. ",
                            "Nežiada Pán tvojich vecí, ",
                            "len chce bývať v tvojom srdci. "
                        ],
                        [
                            "D. P. 145",
                            "K Ježišovým nohám ",
                            "1. K Ježišovým nohám ticho počúvať Mária si sadla, sýti duše hlad.",
                            "Vybrala si dobrý diel, On je pravý Spasiteľ. ",
                            "K nohám Spasiteľa túžim v každý čas sadnúť si a počuť Jeho milý hlas. "
                        ],
                        [
                            "2. Ježišove nohy s láskou Mária maže vzácnou masťou, vlasmi ovíja. ",
                            "Jej čín s vďakou prijal Pán, čo sa známym stal aj nám. ",
                            "K nohám Spasiteľa položiť sa chcem, dokazovať službou, že Ho milujem. "
                        ],
                        [
                            "3. K Ježišovým nohám ráno zavčasu Mária sa skláňala plná úžasu. ",
                            "Hrob je prázdny, môže niesť bratom zmŕtvychvstania zvesť. ",
                            "K nohám Spasiteľa padám s plesaním, Jeho lásku, milosť večne oslávim. "
                        ],
                        [
                            "D. P. 146",
                            "Teraz v tichej zbožnosti",
                            "1. Teraz v tichej zbožnosti, všetci v úctivosti ",
                            "k nohám Ježiša padáme v dôvernosti.",
                            "Vierou k Nemu ideme, požehnanie zrieme. "
                        ],
                        [
                            "Zbor: Ty si balzam zomdleným, pokoj unaveným. ",
                            "Teba chválime v Božej rodine. ",
                            "Ty si balzam zomdleným, pokoj unaveným. "
                        ],
                        [
                            "2. Teraz v tichej zbožnosti, Ježiš sám nás hostí, ",
                            "radu, pomoc nám pripravil na výsosti. ",
                            "Šťastný, kto ten pokoj má, čo nám Pán tu dáva. ",
                            "Zbor. "
                        ],
                        [
                            "3. Teraz v tichej zbožnosti, ustúpili zlosti, buďme verní, ",
                            "Pán skoro nás ťarchy sprostí. ",
                            "Blažený je každý čas, keď len Pán je pri nás. ",
                            "Zbor. "
                        ],
                        [
                            "4. V blahom zhromaždení tom piesni vzmáha sa tón. ",
                            "V srdci Svätý Duch pokoja obnovil trón. ",
                            "Za čo veriac prosíme, iste obdržíme. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 147",
                            "Tak, jak som ",
                            "1. Tak, jak som, idem, celkom tak, len k Tebe upieram svoj zrak, ",
                            "krv Tvoja zmyje viny mrak. Ó, idem, Boží Baránku!"
                        ],
                        [
                            "2. Tak, ja som, biedny, stratený a pochybnosťou zmorený",
                            "i nepriateľom strápený. Ó, idem, Boží Baránku!"
                        ],
                        [
                            "3. Tak, jak som, prázdne ruky mám, ja viem, že milosťou dáš mi sám. ",
                            "Zdroj svetla iba v Tebe znám. Ó, idem, Boží Baránku!"
                        ],
                        [
                            "4. Tak, jak som, vierou k Tebe zriem, že zhladils´ vinu, iste viem",
                            "bo slovám Tvojim veriť smiem. Ó, idem, Boží Baránku!"
                        ],
                        [
                            "5. Tak, jak som, idem Pane môj, chcem celý, navždy byť len Tvoj, ",
                            "mám v Tebe lásky, žitia zdroj. Ó, idem, Boží Baránku!"
                        ],
                        [
                            "6. Tak, jak som, a duša moja Tvojej milosti sa dávam ",
                            "a nech je Tvoja, vždy len Tvoja. Ó, idem, Boží Baránku!"
                        ],
                        [
                            "D. P. 148",
                            "S Ježišom chcem verne ",
                            "1. S Ježišom chcem verne v každej chvíli putovať vždy sveta údolím. ",
                            "Cestou k nebu mám v Ňom prameň, sily, do srdca mi pokoj vstúpi s Ním. "
                        ],
                        [
                            "2. S Ním chcem ísť, nech čokoľvek sa stane, veď ON večne dušu spokojí",
                            "a keď telom i strach smrti vanie, duch môj zlého s Ním sa nebojí. "
                        ],
                        [
                            "3. Hoci vrchy, lesy, more, skaly únavu mi cestou pôsobia, ",
                            "ruky Pána pozdvihnú ma v žiali, víťazstvom raz i mňa ozdobia. "
                        ],
                        [
                            "4. On keď vodcom je a radcom mojim, iste cieľ svoj nikdy neminiem",
                            "a keď v žiaľoch nečakaných stojím, vrúcnejšie sa k Nemu priviniem. "
                        ],
                        [
                            "5. Nezdobí vždy cestu vonné kvieťa, často ona tŕnim pokrytá. ",
                            "I tam Pán si vedie svoje dieťa, veď aj v tŕni ruža rozkvitá. "
                        ],
                        [
                            "6. A keď sa raz priblíži tá doba, že aj ja svoj časný skončím beh ",
                            "a keď na mňa príde smrti mdloba, daj mi šťastne uzrieť blaha breh. "
                        ],
                        [
                            "7. K Tebe nádej upiera sa smelá, Jezu môj, veď Tvojí nezhynú!",
                            "A keď zbavíš dušu stánku tela, prijmi si ma v nebies otčinu!"
                        ],
                        [
                            "D. P. 149",
                            "Chcem pre Ježiša ",
                            "1. Chcem pre Ježiša všetko opustiť, spomocník On je môj, zbroj i štít. ",
                            "Láska na kríži je rozpätá, miesto najdrahšie je Golgota. ",
                            "(: zriem tam vierou radosti svoj zdroj, večný zdroj :)"
                        ],
                        [
                            "2. Dám pre Ježiša všetko, On sám vie, ovečku jak Svoju povedie. ",
                            "Dáva dážď i slnko na nivy, Božím požehnaním obživí. ",
                            "(: Spolieham sa vierou na Neho deň čo deň. :)"
                        ],
                        [
                            "3. Dať pre Ježiša všetko vďačne chcem. Čokoľvek nech príde, dobre viem: ",
                            "Mojej viery základ je len v Ňom, Jeho láska lieči v svete zlom. ",
                            "(: Jeho svetlo dušu nádejou obživí. :)"
                        ],
                        [
                            "4. Ó, pre Ježiša všetko zanechaj, duši On dá spásu, večný raj. ",
                            "Svetská radosť, sláva pominie, Ježiš nezmení sa jedine. ",
                            "(: K Jeho hrudi viň sa, On ti sám pokoj dá. :)"
                        ],
                        [
                            "D. P. 150",
                            "Ži krásne ",
                            "1. Ži krásne v časnom živote, šír vôňu lásky kol seba. ",
                            "(: Putuješ ta, kde sĺz už niet, a lásky tvojej netreba. :)"
                        ],
                        [
                            "2. Na konci žitia všeličo márnosťou sa ti bude zdať. ",
                            "(: Nad časom v láske prežitým nebudeš nikdy ľutovať. :)"
                        ],
                        [
                            "3. Pokorne nos kríž za Kristom, prepáli oheň tvoje „ja“, ",
                            "(: Po bojoch v rúchu zbielenom s Ježišom vstúpiš do raja. :)"
                        ],
                        [
                            "4. Keď rozkazuje Pán, tak choď! Keď velí: stoj! Tak poslúchaj!",
                            "(: Bez Neho zblúdiš k priepasti s Ním do nebeských vojdeš brán. :)"
                        ],
                        [
                            "D. P. 151",
                            "Otvorené sú brány milosti",
                            "1. Otvorené sú brány milosti dokorán, ",
                            "nimi sa v blaha stany prechádza voľne nám. ",
                            "Šťastie je stretnúť Krista, Jeho kto zrie, má dosť:",
                            "Spasenie dozaista, pokoj a vzácny skvost. "
                        ],
                        [
                            "2. Prečo ty ešte stojíš? Zdráhaš sa k Nemu ísť? ",
                            "V svete si šťastie strojíš, zvädne sťa spadlý list. ",
                            "Ó, daj sa vyslobodiť z vášní a hriechu pút, ",
                            "z otroctva do slobody Pán ťa chce pozdvihnúť. "
                        ],
                        [
                            "3. Jemu daj srdce svoje, právo naň len On má, ",
                            "utíši nepokoje, hriešnikov prijíma. ",
                            "A keď mu svoju vôľu ochotne podrobíš, ",
                            "pôjdeš s Ním ďalej spolu po ceste v nebies ríš. "
                        ],
                        [
                            "C / Viera v Spasiteľa"
                        ],
                        [
                            "D. P. 152",
                            "Pane môj",
                            "1. Pane môj, Boží Baránku, vierou sa blížim k Tebe;",
                            "ó, skloň sa, prosím, k hriešnemu, tiahni ma láskou k Sebe. ",
                            "Šťastná duša jasá: Ty si moja spása, hriech môj si zmyl, ",
                            "v ranách ma skryl, všetko krv Tvoja zhojí verím, si môj, ",
                            "ja večne Tvoj, nič nás už nerozdvojí. "
                        ],
                        [
                            "2. Pane môj, Boží Baránku, slávim a chválim Teba;",
                            "z lásky si niesol za mňa kríž, na smrť si vydal seba. ",
                            "Celé žitie moje naveky je Tvoje. ",
                            "Posväť ho len na každý deň pre slávu mena svojho. ",
                            "Odstráň Ty sám, čo som a mám, čo nie je z Ducha Tvojho!"
                        ],
                        [
                            "3. Pane môj, Boží Baránku, ó, nech to ľudia znajú, ",
                            "všetkých že vrúcne miluješ, Tebe nech poctu vzdajú! ",
                            "Vystroj si ma Kriste, ako svetlo čisté, ",
                            "pošli ma tam, kde hriech a klam nádejné dusí vznety, ",
                            "prebuď si nás, nech skvitnú zas na púšti rajské kvety. "
                        ],
                        [
                            "4. Pane môj, Boží Baránku, osláv sa mocne znovu ",
                            "vo vlasti našej plnej krás, ľudu zjav milosť novú! ",
                            "Sláva Tvojho slova, láska Ježišova rozptýli tmu, ",
                            "ukáže mu, k žitiu čo dopomáha. ",
                            "Nech ľud náš zas čuje Tvoj hlas, v Tvojej, sa pravde vzmáha!"
                        ],
                        [
                            "D. P. 153",
                            "Ježiš, verný Priateľ môj",
                            "1. Ježiš, verný Priateľ môj, Jemu žiť chcem stoj čo stoj! ",
                            "Spásu v Ňom i všetko mám, za Ním idem k výšinám. ",
                            "Nad milosti Jeho kvet vzácnejšie nič nemá svet. "
                        ],
                        [
                            "2. Ježiš dobrý Pastier je, nad ovečkou Svojou bdie. ",
                            "Po pažitiach zelených, pri prameňoch studených",
                            "keď ma vodí Jeho hlas, plesám šťastím zas a zas. "
                        ],
                        [
                            "3. Ježiš, Radca jediný pozná srdca hlbiny, ",
                            "pomáha i lieči bôľ, v biede vždy mi pomohol. ",
                            "Aké blaho smieť byť s Ním, slávnym Pánom nebeským. "
                        ],
                        [
                            "4. Ježiš, Hviezda svitania, čo tmy žiarou rozháňa, ",
                            "otvára mi duše zrak, aby vzlietla ako vták hor´, ",
                            "kde On ju vedie sám k večným neba výšinám. "
                        ],
                        [
                            "D. P. 154",
                            "Bol som mŕtvy",
                            "1. Bol som mŕtvy v vinách, v hriechoch, bez nádej žitia. ",
                            "Teraz žijem v nebies ríšach s Kristom, bez umretia. ",
                            "Je pravda, že môj Spasiteľ na kríži za mňa pnel? ",
                            "Ja verím, žes´ ma vykúpil, bych večne s Tebou žil. "
                        ],
                        [
                            "2. Ó, Ty hĺbko lásky večnej, Teba nevyváži srdce vďačné za smrť Tvoju, ",
                            "ktorá tak ho blaží. Je pravda, žes´ ma miloval a za mňa život dal? ",
                            "Ja vidím Tvojej lásky div, verím, žes´ milostiv´..."
                        ],
                        [
                            "3. Plesám: „srdce zhojils´ moje!“ Tebe seba dávam. ",
                            "Svoj už nie som, celkom len Tvoj, Teba očakávam. ",
                            "Je pravda, že si zhojil ma, ó milosť bezodná...!",
                            "Ja verím Tebe; abych žil, po tom som zatúžil. "
                        ],
                        [
                            "4. Raz, ach, Pane, bol som v hriechoch; teraz želiem nad tým. ",
                            "Dnes len s Tebou v nebies ríšach žiť chcem srdcom svätým! ",
                            "Je pravda, že hlas čujem Tvoj: milujem ťa si môj!? ",
                            "Verím; slasťou sa zachvievam, veď v Bohu spočívam. "
                        ],
                        [
                            "D. P. 155",
                            "Viera Božia",
                            "1. Viera Božia, viera živá, ducha pravdy dar, ",
                            "Slovom Božím v srdce býva zasiaty jej žiar. ",
                            "Heslo naše: Vieru dáva duši zblúdenej ",
                            "Slovo Tvoje a zvesť pravá lásky Kristovej. "
                        ],
                        [
                            "2. Kde je viera, tam je k Bohu cesta dokorán, ",
                            "duša stráca ťarchu mnohú, uzdravil ju Pán.",
                            "Heslo naše: Viera istá, neopúšťaj nás,",
                            "aby duša bola čistá ako hviezdy jas. "
                        ],
                        [
                            "3. Kde je viera, tam i sila, tam je víťazstvo, ",
                            "tam sa daria Božie diela, hynie pohanstvo. ",
                            "Heslo naše: Viery sila nech sa vzmáha v nás, ",
                            "aby sa nám podarila práca Pána v čas. "
                        ],
                        [
                            "4. Kde je viera, tam i prosby, moc, čo zmáha svet, ",
                            "cúvnuť musia jeho hrozby pred jej silou hneď. ",
                            "Heslo naše: Viery hradba ducha zmocňuje, ",
                            "márna je tam zvodu kliatba, Pán kde kraľuje. "
                        ],
                        [
                            "5. Kde je viera, slabne starosť, úzkosť nadmerná, ",
                            "tam je v kvete svätá radosť. Pán zňal bremená. ",
                            "Heslo naše: Viery plnosť nech vždy v srdci je, ",
                            "zmizne starosť ako zlý hosť, čo rád sužuje. "
                        ],
                        [
                            "6. Kde je viera, tam tiež býva Ježiš, Boží Syn, ",
                            "tam sa človek priodieva rúchom nebeským. ",
                            "Heslo naše: Viera vlieva v dušu toľko krás, ",
                            "že Pán nebies rád chodieva, aby býval v nás. "
                        ],
                        [
                            "D. P. 156",
                            "Dobre stavia každá duša",
                            "1. Dobre stavia každá duša, ktorá verí Kristovi, ",
                            "On je skalou všetkých vekov, základ večnej budovy. ",
                            "Spasiteľ, Pán Ježiš Kristus uholným je kameňom, ",
                            "vo víchriciach, v búrkach žitia istá pomoc je len v Ňom. "
                        ],
                        [
                            "2. Hoc je boj a práca ťažká k zemi klesá staviteľ, ",
                            "odmenou mu nádej sladká, v nebesiach ho čaká diel. ",
                            "Všetky veci zeme zhoria, zlato lesk svoj utratí, ",
                            "v Kristovi, kto zloží nádej, nikdy diel svoj nestratí. "
                        ],
                        [
                            "3. Na čom na kom, nádej svoju dušu milá, zakladáš? ",
                            "Všetko časom stratí cenu, všetko tuná zanecháš! ",
                            "Základ večný, dokonalý je Pán Ježiš Kristus sám, ",
                            "na Ňom postav vieru, nádej v nebeský raz vojdeš chrám!"
                        ],
                        [
                            "D. P. 157",
                            "V Krista verím",
                            "1. V Krista verím, mám s Ním diel, silou je mi Spasiteľ, ",
                            "v bojoch pevnou záštitou, v bôli vzácnou útechou. "
                        ],
                        [
                            "2. Moju vinu na kríž vzal, preňho mi Boh milosť dal, ",
                            "On je viery základom, preto jasám vďačne v Ňom. "
                        ],
                        [
                            "3. Viem, to, že ma miluje, láskou lásku vzbudzuje, ",
                            "viem, že mi je Priateľom, za mňa platil životom. "
                        ],
                        [
                            "4. Hľadím k cieľu v radosti, Ježiš zve ma k plnosti, ",
                            "vždy len chce, by som viac bral, blahom neba oplýval. "
                        ],
                        [
                            "D. P. 158",
                            "Hlas Ježišov ",
                            "1. Hlas Ježišov som počul raz: „Poď\tty, čo klesáš už ",
                            "a hlavu svoju zomdlenú zlož u mňa a sa vzmuž.“",
                            "Išiel som, On ma privítal aj s ťarchou mojich bied. ",
                            "Tieň strachu láskou rozohnal a ja som okrial hneď. "
                        ],
                        [
                            "2. Hlas Ježišov ma oslovil: „Hľa voda spasenia, ",
                            "kto smädný je, nech načerpá si zdarma z prameňa.“",
                            "Išiel som, voda živá tá – ó, aký spásy div!",
                            "Mi bola žriedlom života a vôňou rajských nív. "
                        ],
                        [
                            "3. Hlas Ježišov som počul tiež: „Ja svetlo sveta som. ",
                            "Kto zblúdil, smie sa navrátiť a kráčať v svetle tom“. ",
                            "Išiel som, hneď nado mňou On sám zažal jasný žiar, ",
                            "v ňom idem k cieľu, kde mám zrieť Ho večne tvárou v tvár. "
                        ],
                        [
                            "D. P. 159",
                            "Čakaj, duša moja",
                            "1. Čakaj, duša moja, na Pána hľaď! Zlož mu starosť k nohám, pomôže ti rád. ",
                            "Nepochybuj! Príde ráno, znaj, po treskúcej zime skvitne krásny máj. ",
                            "Vo všetkých búrkach, v súženia čas ochráni ťa mocne Boh verný náš!"
                        ],
                        [
                            "2. Čakaj, duša moja, na Pána hľaď! Zlož mu všetko k nohám, pomôže ti rád. ",
                            "Neľakaj sa, bratu sestra len, po bojoch raz ťažkých svitne spásy deň. ",
                            "Všemocný Pane, Ochranca môj, pomôž, uzdrav, zachráň vždy pri mne stoj!"
                        ],
                        [
                            "D. P. 160",
                            "Že Pán Boh vo mne živý je",
                            "1. Že Pán Boh vo mne živý je už tu i na večnosť, ",
                            "tos´ urobil Ty, Ježišu, mám v Tvojej láske dosť. ",
                            "Falošný život, nepravý už nemá pri mne byť, ",
                            "bo taký Boha neslávi, vie ducha utrápiť. "
                        ],
                        [
                            "2. To najlepšie, čo zo mňa je, tieň hriechu narušil, ",
                            "len v Tvojej láske môžem žiť, len v nej mám žriedlo síl. ",
                            "Porúcaj staré základy, čo ešte vo mne sú, ",
                            "nech plody z Božej záhrady dni moje prinesú. "
                        ],
                        [
                            "3. Ó, Ježišu, ja Tvoj som len. Daj, nech môj každý čin",
                            "Tvoj Duch sám vo mne pôsobí, bo tak Ťa oslávim svedectvom,",
                            "žes´ mi všetkým Ty už teraz na zemi ",
                            "i keď raz domov zaletím žiť s Tebou blažený. "
                        ],
                        [
                            "D. P. 161",
                            "Keď Boží vánok veje",
                            "1. Keď Boží vánok veje k nám z trónu milosti, ",
                            "zem nádejou sa chveje, to doba radosti.",
                            "Keď spásu hľadá hriešny, by súd ho nestihol, ",
                            "ľud Boží k novej piesni hlas vďačne pozdvihol. "
                        ],
                        [
                            "2. Keď tu sa slzy ronia sŕdc v duchu zronených ",
                            "a tam sa duše klonia zas vierou zmierených. ",
                            "Keď hluchým sluch sa vráti a nemí volajú, ",
                            "Boh milosť neukráti a svätí jasajú. "
                        ],
                        [
                            "3. Keď chromí poskakujú a mŕtvi z hrobu vín sa k žitiu vyprosťujú, ",
                            "bo kriesi Hospodin, tu tela Pána údy ",
                            "v tú spásy hodinu hneď zhachránených ľudí si na hruď privinú. "
                        ],
                        [
                            "4. A zo sŕdc vďačných obeť sa vznáša k výšinám, ",
                            "že Otec z lásky opäť sa v Kristu sklaňa k nám, ",
                            "že v Ňom len otvorená je cesta k pokoju ",
                            "a duša privedená je spásy ku zdroju."
                        ],
                        [
                            "D. P. 162",
                            "Nevlastním nič",
                            "1. Nevlastním nič, len čo z milosti mám, ",
                            "tú mi z lásky dáva Spasiteľ sám. ",
                            "Bez pýchy v pokore vyznať chcem: ",
                            "Som z milosti spasený, to viem! "
                        ],
                        [
                            "Zbor: (: Spasený hriešnik z milosti! :)",
                            "To je moja správa, Bohu  buď sláva, ",
                            "som spasený iba z milosti!"
                        ],
                        [
                            "2. Hriechu som slúžieval, bez Boha žil, ",
                            "Ježiš ma vyhľadal, vyslobodil. ",
                            "Počuj to nebo, počuj to zem: ",
                            "Som z milosti spasený, to viem!",
                            "Zbor:"
                        ],
                        [
                            "3. Zásluh som nemal, len biedu a hriech, ",
                            "Ježiš ma obmyl z nich belšie než sneh. ",
                            "Hynúcim preto hlásať to chcem: ",
                            "Som z milosti spasený, to viem!",
                            "Zbor: "
                        ],
                        [
                            "4. Sláva buď Kristovi, spievam svoj žalm, ",
                            "velebím milosť, čo dal mi Boh sám. ",
                            "Ježiš ma našiel, v Ňom žijem len. ",
                            "Som z milosti spasený, to viem. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 163",
                            "Ja s vierou pozerám",
                            "1. Ja s vierou pozerám,  môj Pane, na kríž tam do Tvojích rán. ",
                            "Krv, čo z nich rinula, aj môj hriech obmyla, vstup voľný získala do večných brán. "
                        ],
                        [
                            "2. Ty posilňuj ma sám, nech v mdlobách neklesám, bych s Tebou žil. ",
                            "Ó, príjmi obeť chvál, žes´  za mňa život dal, daj by som miloval Ťa z všetkých síl. "
                        ],
                        [
                            "3. Keď cestou života mi kryje mrákota a žiaľu tieň, Ty slzy zotieraj, ",
                            "vojsť do slávy mi daj, kde pravú vlasť mám raj, kde večný deň. "
                        ],
                        [
                            "4. Až tmavý smrti mrak môj navždy zastrie zrak, Ty pri mne stoj. ",
                            "Z chvíľ ťažkých vyprosti a prijmi z milosti tam v ríšu radosti ma, Pane môj!"
                        ],
                        [
                            "D. P. 164",
                            "Ako šťastne duša dlie",
                            "1. Ako šťastne duša dlie si v jemnom Pána objatí, ",
                            "blažený, kto život celý Jeho službe zasvätí"
                        ],
                        [
                            "Zbor: Ticho si spočíva duša Kristu oddaná, ",
                            "životom ide vpred v sile Jeho žehnania. "
                        ],
                        [
                            "2. Ako včielke v krásnom kvete, u Ježiša duši je, ",
                            "v božskej vôni Jeho lásky pred bôľom sa ukryje.",
                            "Zbor: "
                        ],
                        [
                            "3. Ako slnko v kvapke vody dúhu farieb vyčarí, ",
                            "tak i Ježiš hriešne srdce čistotou zas obdarí. ",
                            "Zbor: "
                        ],
                        [
                            "4. Tu už z diaľky ako pútnik vánok vlasti okúšam, ",
                            "koľká krása ma však čaká, ke\tď raz noha vkročí tam. ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 165",
                            "Musím Ťa ja vždy mať",
                            "1. Musím Ťa ja vždy mať, ó, Darca milosti. ",
                            "V Tvojej krvi spása, v mene lúč radosti."
                        ],
                        [
                            "Zbor: Musím Ťa mať, ó, musím, Jezu, mať Ťa musím, ",
                            "Vždy ja Ťa potrebujem; žehnaj ma sám!"
                        ],
                        [
                            "2. Musím Ťa ja vždy mať, ó Jezu! Pri mne stoj, ",
                            "aby až do smrti žil ako verný Tvoj! ",
                            "Zbor:"
                        ],
                        [
                            "Musím Ťa ja vždy mať v šťastí i v žalosti.",
                            "Tys mi svetlom, schranou tu i vo večnosti.",
                            "Zbor:"
                        ],
                        [
                            "3. Musím Ťa ja vždy mať, veď ma, jak sám myslíš. ",
                            "Čakám, že i pri mne slovo Svoje splníš. ",
                            "Zbor:"
                        ],
                        [
                            "4. Musím Ťa ja vždy mať, Kriste Boží Synu! ",
                            "S Tebou dosiahnem raz nebeskú korunu. ",
                            "Zbor. "
                        ],
                        [
                            "D. P. 166",
                            "Nad horami vysoko ",
                            "1. Nad horami vysoko, v slávnej otčine, v slávnej nebies otčine, ",
                            "žije Ježiš, Ježiš môj, duše mojej blaho jediné. "
                        ],
                        [
                            "2. Milióny anjelov pred Ním kľakajú, pred Ním v túžbe kľakajú;",
                            "jeden pohľad láskavý z očí Jeho svätých čakajú. "
                        ],
                        [
                            "3. Ach, ten pohľad predrahý, plný milosti, plný lásky milosti",
                            "patrí aj mne; vysloviť neviem hĺbku jeho sladkosti. "
                        ],
                        [
                            "4. Zem i nebe v pokore ležia pri nohách, ležia Jemu pri nohách. ",
                            "V ríši pekla strašlivej meno „Ježiš“ budí hrozný strach. "
                        ],
                        [
                            "5. A mne vraví láskave: „Ty sa nič neboj; ty sa duša nič neboj!",
                            "Milujem ťa; naveky si ty moja a Ja celý tvoj!“"
                        ],
                        [
                            "D. P. 167",
                            "Moc lásky",
                            "1. Moc lásky svätej zvelebujem, ktorú Pán Ježiš zjavil nám;",
                            "bárs červ som, preds´ Ho oslavujem, celé Mu svoje srdce dám. ",
                            "Už nechcem sám sa s hriechom boriť, do Jeho lásky chcem sa vnoriť. "
                        ],
                        [
                            "2. Oj, spoznal som to, že len Tebe musím sa celkom odovzdať, ",
                            "bo v stvorení a zeme daroch nemožno pravé šťastie mať. ",
                            "Len keď sa stíšim v mieri Tvojom, uniknem zmätkom, márnym bojom. "
                        ],
                        [
                            "3. Ó, Pane, svätosť mena svojho do hlbín duše mojej vlož",
                            "a pravou láskou srdca môjho ochotu k novej službe zmnož. ",
                            "Nech z každého mi skutku, slova zračí sa bytosť Ježišova. "
                        ],
                        [
                            "4. Moc mena Tvojho, jeho sláva, zjavili lásku Otca k nám, ",
                            "v ňom prameň živý, radosť pravá, vzácny liek na bôľ naších rán! ",
                            "Tys´ za mňa čistý život vydal, presvätá láska, môj Boh i Kráľ! "
                        ],
                        [
                            "D. P. 168",
                            "Tam nad hviezdami v nebi ",
                            "1. Tam nad hviezdami v nebi Otca mám, ",
                            "na Jeho vernú lásku spolieham; ",
                            "On zve ma z tejto cudziny tam do nebeskej otčiny. "
                        ],
                        [
                            "Zbor: Ja hotový som ísť za Ním, ja hotový som ísť za Ním ",
                            "a v novom dome otčiny, žiť večný, svätý život s ním. "
                        ],
                        [
                            "2. Tam nad hviezdami Spasiteľa mám, ",
                            "rád denne na Neho si spomínam; ",
                            "On zve ma z tejto cudziny tam do nebeskej otčiny. ",
                            "Zbor:"
                        ],
                        [
                            "3. Tam nad hviezdami korunu tiež mám, ",
                            "tú pripravil a dá mi Ježiš sám; ",
                            "On zve ma z tejto cudziny vojsť do nebeskej otčiny. ",
                            "Zbor: "
                        ],
                        [
                            "4. Tam nad hviezdami stretneme sa raz, ",
                            "keď všetkých verných zvolá Boží hlas! ",
                            "Ó, kto tú radosť vysloví, až padnem k nohám Kristovi!",
                            "Zbor. "
                        ],
                        [
                            "D. P. 169",
                            "Blesk zlatý ",
                            "1. Blesk zlatý slnka milého lúč do sŕdc naších dal, ",
                            "keď jeho svetlo vo mne je, bôľ utíchne i žiaľ; ",
                            "noc ustúpi, aj mrákava, keď slnko svieti nám. ",
                            "Dá život, radosť, pokoj svoj a srdce vyrve tmám. "
                        ],
                        [
                            "Zbor: (: Ten lásky prúd bezhraničnej sa rinie k nám ustavične. ",
                            "v nej norím sa, aj ty sa smieš, ňou objal tiež Boh všetkých nás. :)"
                        ],
                        [
                            "2. Len z čistej lásky na kríži i za môj hriech mrel Pán. ",
                            "Ja lúčom Jeho otvoriť chcem dušu dokorán, ",
                            "bo viem, kto ma tak miloval, že na smrť za mňa šiel. ",
                            "Nech v mojom srdci prebýva môj drahý Spasiteľ. ",
                            "Zbor: "
                        ],
                        [
                            "3. To Slnko, čo mi svieti vždy a život večný dá, ",
                            "je Imanuel, Ježiš môj, On večne zostáva. ",
                            "Ja spievať Mu chcem s plesaním tu, v zemskom údolí,",
                            "i večne, keď Ho uzriem tam, kde už nič nebolí. ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 170",
                            "Ó, Jezu",
                            "1. Ó, Jezu hriechy svoje smiem zložiť pod Tvoj kríž, ",
                            "Ty plač môj, vzdychy moje tam iste utíšiš. ",
                            "Hoc veľká vina moja a ťažký je môj hriech, ",
                            "keď zmyla ho krv Tvoja, som čistejší než sneh. "
                        ],
                        [
                            "2. Ach, žila duša moja tak dlho v mrákote, sťa v púšti, ",
                            "bez pokoja a svetla v temnote. ",
                            "Dnes žiara kríža svätá jej osvecuje púť. ",
                            "Je s Tebou večne spätá a nemôž´ zahynúť. "
                        ],
                        [
                            "3. Ó, Jezu, spása moja, čo Ti ja biedny dám, ",
                            "že celú ťarchu boja si niesol za mňa sám?!",
                            "Ty nechceš striebra, zlata, len srdcia túžiš mať. ",
                            "Aj moje prijmi, Pane, chcem Ti ho vďačne dať. "
                        ],
                        [
                            "D. P. 171",
                            "Ó, šťastný",
                            "1.  Ó, šťastný deň, čo dals´ mi Ty, bol môj hriech krvou obmytý. ",
                            "Môj Pane, teraz na zemi žiť môžem v Tebe spasený. "
                        ],
                        [
                            "Zbor: Krásny deň, slávny deň, keď Kristus odňal hriechu tieň. ",
                            "On obmyl ma a vykúpil, mňa z diabolských pút vyprostil. ",
                            "Krásny deň, slávny deň, ja Kristovi už patriť smiem. (Amen)"
                        ],
                        [
                            "2.  Je dokonané spasenie, som Pánov, nech to všade znie. ",
                            "On je môj a ja Jeho som, s Ním nebeským som dedičom. "
                        ],
                        [
                            "3. Poď, kto sa zmietaš v slabosti, aj Teba Pán chce vyprostiť, ",
                            "chce zmeniť úzkosť v blaha svit, tvoj život celkom premeniť. ",
                            "Zbor: "
                        ],
                        [
                            "4. Ó, šťastný deň smieš aj ty mať, kto v nešťastí sa zmietaš snáď. ",
                            "Len pozri s vierou na Krista a skončí doba neistá. ",
                            "Zbor: "
                        ],
                        [
                            "Kiež zo všektkých sŕdc jasot znie: Aj mne dal Ježiš spasenie, ",
                            "som spasený, som spasený smiem s Pánom žiť už na zemi. ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 172",
                            "Ó, ako nežiť radosťou",
                            "Ó, ako nežiť radosťou, zrieť k nebu s veľkou vďačnosťou ",
                            "keď vidím predivnosť tých ciest, čo Pán ma nimi ráčil viesť. "
                        ],
                        [
                            "Ja žil som biedne v svete tom jak neúrodný, planý strom, ",
                            "hriech hlodal duše základy a s nikým som sa neradil. "
                        ],
                        [
                            "Tu Pán ma s láskou oslovil: „Ja ľutujem ťa, chcem bys´ žil!“",
                            "a dušu moju kajúcu sám prijal v Svoju vinicu. "
                        ],
                        [
                            "Vzal do vinice sionskej, kde kvitnú ruže sáronské, ",
                            "tam k živým vodám zasadil a kliatbu hriechu zahladil. "
                        ],
                        [
                            "Tam často ku mne chodieva a s láskou na mňa hľadieva,",
                            "raz orezáva, prečistí, zas vlaží rosou z výsosti. "
                        ],
                        [
                            "Ó, keby mi On ráčil dať sa na Jeho česť zelenať ",
                            "a svedčiť chutným ovocím, že Jemu večne náležím. "
                        ],
                        [
                            "Môj Jezu, čo si začal Ty, sa z Tvojej ruky nestratí, ",
                            "Ty dovedieš ma do neba, kde vždy už budem u Teba. "
                        ],
                        [
                            "D. P. 173",
                            "Už zbavený som",
                            "Už zbavený som klamných úkladov, krv Kristova je mi už náhradou. ",
                            "Pod krížom Jeho korí sa duch môj, ó, Spasiteľu drahý chcem byť večne Tvoj. "
                        ],
                        [
                            "Zbor: Milujem Ježiša On prv mňa miloval, ",
                            "a na kríži spasenie i život mi dal!\n"
                        ],
                        [
                            "Raz v hriechu bol som tiež ponorený, jako otrok v ňom vždy premožený. ",
                            "Pred súdom Božím hrôzu a strach mal, keď ma z hriechu Pán očistil a pokoj dal!",
                            "Zbor: "
                        ],
                        [
                            "Bol som jatý teraz som slobodný. Bol som slepí, teraz mi svitnul deň. ",
                            "Bol som mŕtvy a teraz život mám. A preto všade hlásam, Ježiš je môj Pán!",
                            "Zbor: "
                        ],
                        [
                            "D. P. 174",
                            "Mne všetkým je sám Hospodin",
                            "Mne všetkým je sám Hospodin, On skalou je v prívale zlom, ",
                            "keď čelím búrkam zúrivým, On skalou je v prívale zlom. "
                        ],
                        [
                            "Zbor: Ja Kristu dôverujem, On skala je, On skala je, On skala je, ",
                            "ja Kristu dôverujem, On skala je, mne skalou je v prívale zlom. "
                        ],
                        [
                            "V čas horúčav ma zatôni, On skalou je mi v čase zlom, ",
                            "a nepriateľ keď číha z tmy, On skalou je mi v čase zlom. ",
                            "Zbor: "
                        ],
                        [
                            "On more slovom utíši, On skalou je v prívale zlom,",
                            "aj z hlbín k Sebe povýši, On skalou je v prívale zlom. ",
                            "Zbor: "
                        ],
                        [
                            "Ty, drahý Spasiteľu môj, čo skalou si v prívale zlom, ",
                            "sám po boku mi stále stoj, buď skalou mi v prívale zlom. ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 175",
                            "Smieť žiť pre Krista ",
                            "Smieť žiť pre Krista, pre Neho mrieť, ó, to je blaho, nad ktoré niet. ",
                            "(: Hodno zaň trpieť, hodno bojovať, ach, hodno cele opustiť svet! :)"
                        ],
                        [
                            "Smieť žiť pre Krista, niesť hanu, strasť, smieť raz čo víťaz vnísť v nebies vlasť. ",
                            "(: V korune slávy zastať pred Bohom a žiť tam večne, ó, to je slasť! :)"
                        ],
                        [
                            "Smieť žiť pre Krista, kým trvá deň, no i keď žiaľny zapadol tieň. ",
                            "(: Vždy smieť Mu slúžiť a neochladnúť: tú milosť verným Boh dáva len. :)"
                        ],
                        [
                            "D. P. 176. ",
                            "Teba, drahý Spasiteľu",
                            "Teba, drahý Spasiteľu, zvolil som si za Pána. ",
                            "Moja cesta za Tebou je plná Tvojho žehnania. "
                        ],
                        [
                            "Zbor: Ty si môj a ja Tvoj, Spasiteľu drahý môj. "
                        ],
                        [
                            "Jedine Ty mojej duši prameňom si radosti. ",
                            "Keď mám Teba, Boží Synu, stojím pevne v milosti.",
                            "Zbor: "
                        ],
                        [
                            "Ty mi, Pane, naveky buď Priateľom sám najbližším. ",
                            "Pre tú lásku všetko iné vďačne a rád opustím. ",
                            "Zbor: "
                        ],
                        [
                            "K výšinám spej, duša moja, tam Ho uzrieš tvárou v tvár, ",
                            "kde už slnko nie je treba – svieti Jeho slávy žiar. ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 177",
                            "Za mňa si, Pane môj",
                            "Za mňa si, Pane môj, život svoj dal, za mňa si viedol boj, drahú krv lial. ",
                            "Od Teba odlúčiť nemôže ma už nič: šťastie, však ani kríž! s Tebou chcem žiť! "
                        ],
                        [
                            "Tebe sa Ježišu, poddávam rád, v Tebe mám najvyššiu bezpečnosť, hrad! ",
                            "Daný sľub vyplním, službe sa zasvätím z Tvojich ciest nezblúdim, Ty, Strážca môj!"
                        ],
                        [
                            "V dôvere k Tebe sa priviniem len, skiaď prúd síl rinie sa na každý deň. ",
                            "Pomáhaš kríž môj niesť, k úžitku život viesť, šíriť tak Tvoju česť, kým je môj čas! "
                        ],
                        [
                            "Chcem sa Ti podobať, pokorný byť, lásku vždy zvestovať, v nej verne žiť! ",
                            "Kráľovstvo budovať, v Tebe sa radovať, život svoj dokonať pri diele tom! "
                        ],
                        [
                            "D. P. 178",
                            "Šťastne je, ",
                            "Šťastne je, byť spaseným v krvi Tvojej! Ó, Ježišu, hlboko vnor ma do nej! ",
                            "Uvoľnený, od hriecha očistený, jasám plný radosti: „Pán je verný!“ "
                        ],
                        [
                            "Zbor: Ó, chváľ Jeho lásky moc, chváľ Jeho lásky moc, ",
                            "chváľ Jeho lásky moc, ona spasi!"
                        ],
                        [
                            "Šťastne je, byť spaseným v krvi Tvojej! Ó, Ježišu, zmužilosť čerpám len z nej. ",
                            "Svetlo novej milosti svieti i mne! Viacej nepochybujem, veď tys´ pri mne! ",
                            "Zbor: "
                        ],
                        [
                            "Šťastne je, byť spaseným v krvi Tvojej! Všetkých chorôb lekárstvo spočíva v nej. ",
                            "Starosť Ty v blaho zmeníš, ó Ježiši! Pokoj v Tvojom náručí kynie duši. ",
                            "Zbor: "
                        ],
                        [
                            "Jezu, na kríž pribytý, k Tebe jasám; u Teba, môj Boh a Pán, pokoj hľadám. ",
                            "S Tebou zmôžem smrti noc v slávne ráno. Ó, slovo preblažené: „Dokonáno!“",
                            "Zbor: "
                        ],
                        [
                            "D. P. 179",
                            "Som spasený",
                            "Som spasený a dobre o tom viem; spasený krvou v nebe putujem. ",
                            "Som spasený; že Boh je verný, znám, a v zemi kde všetko nové, diel mám. "
                        ],
                        [
                            "Som spasený, už putá nenosím, satanu slúžiť viacej nemusím. ",
                            "Som spasený; a dobre o tom znám, že v zemi kde všetko nové, diel mám. "
                        ],
                        [
                            "Som spasený bez zásluh, milosťou, Kristu slúžiť chcem za to s radosťou. ",
                            "Som spasený; a blažene vyznám, že v zemi kde všetko nové, diel mám. "
                        ],
                        [
                            "Som spasený a tebe tiež volám; „Poď k Ježišovi, On je spása Sám. ",
                            "Že miluje ťa, tak jak mňa, poznáš, zvieš, v novej zemi, že i ty diel máš!“"
                        ],
                        [
                            "D. P. 180",
                            "Verným zostaň",
                            "Verným zostaň, bo len verných čaká veniec života. ",
                            "Verným buď a Kristus v sláve pred trónom ťa privíta. "
                        ],
                        [
                            "Živo ver, bo živá viera s Bohom už tu spája ťa. ",
                            "Živo ver, kým On ťa prijme do večného objatia. "
                        ],
                        [
                            "Miluj len, bo iba láske ozvena sŕdc tlkoce. ",
                            "Miluj len a uzrieš v nebi svojej lásky ovocie. "
                        ],
                        [
                            "Vyznaj smelo svojho Pána slovom, skutkom v každý čas. ",
                            "Pred Otcom a pred anjelmi, ver, že On ťa vyzná zas. "
                        ],
                        [
                            "D. P. 181",
                            "V náručí Ježišovom ",
                            "V náručí Ježišovom sladko si spočívam; na srdci Jeho svätom slasť lásky požívam. ",
                            "Čuj, anjelské tie spevy jak ku mne letia blíž, cez more krištáľové mňa nesú výš a výš!",
                            "V náručí Ježišovom sladko si spočívam; na srdci Jeho svätom slasť lásky požívam. "
                        ],
                        [
                            "V náručí Ježišovom skrytý, bez starosti, bez ťarchy pokušenia, bez hriechu žalosti, ",
                            "mrazných som smútkov prostý, keď zmizla pochybnosť. Len málo ešte skúšok, len málo sĺz, a dosť! ",
                            "V náručí Ježišovom skrytý, bez starosti, bez ťarchy pokušenia, bez hriechu žalosti. "
                        ],
                        [
                            "Skrýš srdca drahá, Ježiš, On zomrel za mňa sám. Na skalu vekov pevne sa navždy spolieham. ",
                            "Tu ticho budem čakať, ach, čakať cez noc len, kým nový uzriem svitať na zlatom brehu deň!",
                            "Skrýš srdca drahá, Ježiš, On zomrel za mňa sám, Na skalu vekov pevne sa navždy spolieham. "
                        ],
                        [
                            "D. P. 182",
                            "Patrím Kristu",
                            "Patrím Kristu, Pánovi, vyznať to som hotový. ",
                            "Hriechu, svetu nechcem žiť, Kristu chcem sa zasvätiť. "
                        ],
                        [
                            "Ježiš, Priateľ ponajprv prelial za mňa drahú krv, ",
                            "aby syn, čo poblúdil, k Otcovi sa navrátil! "
                        ],
                        [
                            "Pane, v Tebe všetko mám, z biedy moje srdce ",
                            "sám očisti a vyprosti, dosť mám v Tvojej milosti! "
                        ],
                        [
                            "Verím, že ma počuješ, tak už vopred volám tiež: ",
                            "Amen, chválu, vďak Ti vzdám, istú pomoc v Tebe mám. "
                        ],
                        [
                            "D. P. 183",
                            "Ježiša viac chcem poznávať",
                            "Ježiša viac chcem poznávať, o ňom viac vedieť rozprávať, ",
                            "viacej brať z Jeho plnosti, viacej Ho chváliť z vďačnosti. "
                        ],
                        [
                            "Zbor: Viac Ježiša poznať, viac Ježiša poznať, ",
                            "veď je On Boh, môj, Pán a Kráľ, z lásky sa za mňa v obeť dal. "
                        ],
                        [
                            "Viac svojím blížnym svedčiť chcem, že On je láska, keď to viem. ",
                            "Nech každý hriešnik o tom zvie, Pán Ježiš, že ho miluje. ",
                            "Zbor: "
                        ],
                        [
                            "Dozvedieť sa ja túžim viac, ako On k sebe volá nás, ",
                            "uzdraviť všetkých chorých vie: život je On i vzkriesenie. ",
                            "Zbor: "
                        ],
                        [
                            "Počuť chcem ako z vlasti krás príde On na zem druhý raz, ",
                            "kráľovstvo svoje zaujať, spasených k sebe v nebo vziať. ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 184",
                            "V úzkosti duše som ku krížu šiel",
                            "V úzkosti duše som ku krížu šiel, Ježiš ma uzdravil hneď. ",
                            "V chorobe hriechu keď biedne som mrel, Ježiš ma uzdravil hneď. "
                        ],
                        [
                            "Zbor: Poď a prijmi vierou istou drahú obeť a kríž Kristov,",
                            "hriechy ti budú odpustené, dostaneš večné spasenie. "
                        ],
                        [
                            "Liečivej vody prúd hľadával som, Ježiš ma uzdravil hneď, ",
                            "v cisterny bez vody dúfaval som, Ježiš ma uzdravil hneď. ",
                            "Zbor: "
                        ],
                        [
                            "Chcel som sa vyliečiť z duchovných bied, Ježiš ma uzdravil hneď, ",
                            "keď mi liek nepodal mámivý svet, Ježiš ma uzdravil hneď. ",
                            "Zbor: "
                        ],
                        [
                            "Malomoc vrhla ma do kliatby múk, Ježiš ma uzdravil hneď. ",
                            "Keď som sa uchopil prebitých rúk, Ježiš ma uzdravil hneď. ",
                            "Zbor: "
                        ],
                        [
                            "Láskavo riekol mi: „Ver v krvi zdroj!“ Ježiš ma uzdravil hneď, ",
                            "obmyje, očistí každý hriech tvoj. Ježiš ma uzdravil hneď. ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 185",
                            "Tu, zo zemského údolia",
                            "Tu, zo zemského údolia sa vierou nahor nesie duch, ",
                            "tam srdcia nikdy nebolia, kde vanie lásky vzduch. "
                        ],
                        [
                            "Buď sláva Tebe, Baránok, že snímaš bôľ a hriechu mráz. ",
                            "Tvoj kríž a otvorený hrob hor k Bohu vedú nás."
                        ],
                        [
                            "Len v Tvojom nežnom objatí Tvoj pokoj duša spoznáva, ",
                            "tam znovu sa Ti zasvätí a láske vydáva. "
                        ],
                        [
                            "D. P. 186",
                            "V hlbokej norím sa pokore",
                            "V hlbokej norím sa pokore do mora Božej milosti ",
                            "a zvestiam pokoja načúvam; ktoré dá hlásať z výsosti. "
                        ],
                        [
                            "Zbor: Hriech môj zniesol Pán na kríž, krv Jeho ma obmyla. ",
                            "Ja vôľu svoju Bohu dal, Ježišovi dôverujem. "
                        ],
                        [
                            "Prez roky márne som bojoval a stonal v hriecha boľastiach. ",
                            "No, keď som sa Bohu prenechal, tu svitnul pokoj, zmiznul strach. ",
                            "Zbor: "
                        ],
                        [
                            "Rúk Jeho dotyk je sotva znať, tak nežný. Zdravý On vraví. ",
                            "Ja zachytil len presvätých šiat, a s ním síl prameň jasavý. ",
                            "Zbor: "
                        ],
                        [
                            "Kňaz pokoja tak blízko mi je, ľúbezne svieti Jeho tvár. ",
                            "Ó, čuj hlas svätý, jak sladko znie: „Ja pokoj dám ti, blaha žiar.“ ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 187",
                            "Z neistoty vyvedený ",
                            "Z neistoty vyvedený, vyvolenia diel mám; ",
                            "zo tmy k svetlu privedený, na česť Bohu spievam. ",
                            "Z Jeho slova prúd istoty mocne pre mňa plynie: ",
                            "Koho Ježiš raz vyvolil, ten už nezahynie. "
                        ],
                        [
                            "Duchom síce slúžim Bohu, ale telom klesám, ",
                            "On uznáva moju snahu, pozdvihuje ma sám. ",
                            "Duša bojom unavená v Ňom si odpočinie,",
                            "koho Ježiš raz vyvolil, ten už nezahynie. "
                        ],
                        [
                            "V Kristu moja spravodlivosť ustavične skrytá",
                            "šťastnejší som nad boháča i nad kráľov sveta;",
                            "svet zahynie, hviezdy zhasnú, nebe sa rozplynie",
                            "koho Ježiš raz vyvolil, ten už nezahynie. "
                        ],
                        [
                            "D. P. 188",
                            "Otvorená je mne brána ",
                            "Otvorená je mne brána a moja duša plesá, ",
                            "keď vidím život z Krista rán, čo láskou lásky zve sa. "
                        ],
                        [
                            "Zbor: Jak milosť srdcom poňať mám, ",
                            "že brána tá je dokorán pre mňa, pre mňa je otvorená tam. "
                        ],
                        [
                            "Vojsť môžu všetci bránou tou, čo v jedinom sa združia, ",
                            "že spásu Krista obeťou a v pokání nájsť túžia. ",
                            "Zbor: "
                        ],
                        [
                            "Ó, snaž sa vkročiť do brány a nedbaj nepriateľa, ",
                            "čo chel by ti to zabrániť, bys´ našiel Spasiteľa. ",
                            "Zbor: "
                        ],
                        [
                            "Keď zložíš v smrti Jordáne kríž, čo ťa tu tak ťažil;",
                            "z rúk Pána veniec dostaneš, čo víťazov má blažiť. ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 189",
                            "Neboj sa, ó neboj",
                            "Neboj sa, ó neboj, Pánov znie mi hlas, na cestu mi žiari ako hviezdy jas. ",
                            "Polnočnými tmami mocne preniká zasľúbenie slávne: nikdy ma nezanechá. "
                        ],
                        [
                            "Zbor: Nie, nezanechá. Nie, nezanechá. ",
                            "On sľúbil, že so mnou bude, nikdy ma nezanechá. "
                        ],
                        [
                            "Ruže môžu zvädnúť, spŕchne vonný kvet, sklamú všetky sľuby, ktoré dáva svet. ",
                            "Nezvädne však Jeho slávna útecha, nesklame môj Vodca, nikdy ma nezanechá. ",
                            "Zbor: "
                        ],
                        [
                            "Šípy pokušenia keď mi mieria v hruď, Pán ma povzbudzuje: Dobrej mysle buď! ",
                            "Sťa keď spieva slávik, hájov potecha, zvučí v srdci radosť, že ma On nezanechá. ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 190",
                            "Pozri duša, ",
                            "Pozri duša, pozri späť Hallelujah, Amen! ",
                            "Na ten hriešny, biedny svet, Hallelujah, Amen!",
                            "Boh ťa z neho vyvolil, ku spaseniu predzriadil, ",
                            "krvou Krista vykúpil! Hallelujah, Amen!"
                        ],
                        [
                            "V neba sláve plesanie, Hallelujah, Amen!",
                            "Znie nad tebou, jasanie. Hallelujah, Amen!",
                            "Anjel druhom zvestuje, že ťa Boh tvoj miluje, ",
                            "miesto, že ti hotuje. Hallelujah, Amen!"
                        ],
                        [
                            "Čím sa duša, odmeníš? Hallelujah, Amen!",
                            "Čím tú lásku odplatíš? Hallelujah, Amen!",
                            "Srdce k nohám Božím zlož, život v ruky Božie vlož, ",
                            "česť Kristovu v zemi množ! Hallelujah, Amen!"
                        ],
                        [
                            "Váž si obeť presvätú, Hallelujah, Amen!",
                            "Getsemane, Golgotu. Hallelujah, Amen!",
                            "Váž korunu tŕňovú, ťažkú cestu krížovú, ",
                            "poznáš lásku Kristovu. Hallelujah, Amen!"
                        ],
                        [
                            "D. P. 191",
                            "Sione nádherný",
                            "Sione nádherný, zlatý, ty sidlo pokoja! ",
                            "Tužieva po tebe srdce tu v ríši rozbroja! "
                        ],
                        [
                            "Zbor: Ó, mesto nádherné, sväté, sľúbený domov môj! ",
                            "Jak často vídavam vo snách vytúžený obraz tvoj! "
                        ],
                        [
                            "Tu dušiam trúchlivým, chorím slniečko vychádza;",
                            "v nebeských zboroch tu pútnik cieľ púti dochádza. ",
                            "Zbor: "
                        ],
                        [
                            "Ach, tu trón Ježišov žiari, a kúzli slávou On! ",
                            "Čo viac, až združil sa k nemu novej tam piesne tón!",
                            "Zbor: "
                        ],
                        [
                            "D. P. 192",
                            "Jak milostne",
                            "Jak milostne, lásky plne znie sladká zvesť o Ježišovi,",
                            "že z lásky svoj život položil za celý ten svet stratený. "
                        ],
                        [
                            "Zbor: Ó, nádherná a blažená zvesť, ktorú som i ja počuť smel. ",
                            "Raz nadšene to z úst mi nebom slávne zaznie: Baránku, Tys´ aj za mňa mrel! "
                        ],
                        [
                            "Zostúpil z tých nebeských výšin; dobrovoľne krv svoju dal. ",
                            "Za nás biedných, hriešných, stratených On sám seba obetoval. ",
                            "Zbor: "
                        ],
                        [
                            "Dokonané je dielo spásy, prúd milosti z neba plynie. ",
                            "Kto milosť tú vierou pochopí, Ježiš ho k sebe privinie. ",
                            "Zbor: "
                        ],
                        [
                            "D. P. 193",
                            "Vzácny dar svoj",
                            "Vzácny dar svoj, živú vieru, Pane môj, mi zachovaj, ",
                            "doplň čo mi ešte chýba, plnosť viery, lásky daj. ",
                            "Čo som bez viery a lásky?! Iba chabý zúfalec, ",
                            "na zemi nič neteší ma, nemá cenu žiadna vec. "
                        ],
                        [
                            "Ale keď mám živú vieru, v každom čase hojnosť mám, ",
                            "osteň smrti nebodá má, veď Tys´  Pane so mnou sám. ",
                            "Verím, že raz každé dielo v Tvojom mene konané, ",
                            "Pane, nezabudneš iste, odplatu raz dostane. "
                        ],
                        [
                            "Nechcem hviezdy na blankyte, slávy nevábi ma klam, ",
                            "ani zlata nežiadam si, len nech živú vieru mám. ",
                            "Vzácny dar svoj, živú vieru, Pane môj, mi zachovaj, ",
                            "prosím, doplň, čo mi chýba, plnosť viery, lásky daj! "
                        ],
                        [
                            "D. P. 194",
                            "Znám prameň",
                            "Znám prameň nádherný čistý; večného žitia v ňom zdroj, ",
                            "proti nemocniam liek istý: Či ho poznáš, priateľ môj? ",
                            "Z Božieho on tečie trónu, vlaží nebesia aj svet. ",
                            "Taký život nemá vôňu, nebeskej kde rosy niet! ",
                            "Prameň zlato skvúci, čistý Božie slovo je, to viem, ",
                            "do neho keď dušu vnorím, záblesk večnej slávy zriem. "
                        ],
                        [
                            "Zrkadlo poznám ja skvelé, zo zlatožiare má rám, ",
                            "do neho keď pozriem smele, Boha zriem i seba tam. ",
                            "Áno svoj hriech vidím tmavý, však aj lásku bohatú, ",
                            "ktorá stála Pána Slávy Getsemane, Golgotu! ",
                            "Vzácny poklad, Božie slovo, pravdy jasný v ňom je svit!",
                            "Na cestu kto ním si svieti, ten vždy blažene vie žiť! "
                        ],
                        [
                            "Kráľovského poznám zváča, neobíde chatku, trón;",
                            "aj dnes ticho svetom kráča, všetkých k svadbe volá on. ",
                            "Radostné nám nesie správy; Hľa už ide Ženích náš! ",
                            "Pochybnosti oblak tmavý rozoženie jeho hlas. ",
                            "Poznám ťa, ó, nosič mieru! Ku mne zaznel tiež hlas Tvoj! ",
                            "Všemocného Boha Slovo! v tebe len mám sily zdroj. "
                        ],
                        [
                            "D. P. 195",
                            "Pútnikom som ",
                            "Pútnikom som v svete a na mojej ceste ",
                            "obraciam oči k nebesiam, kde večne bývať mám. "
                        ],
                        [
                            "Tam na tróne skvúcom, svetle nehasnúcom ",
                            "vládne Baránok v mocnosti, v láske a milosti. "
                        ],
                        [
                            "Zástup v bielom rúchu volá v jednom Duchu",
                            "„Požehnanie, sláva múdrosť, Pánovi na večnosť!“"
                        ],
                        [
                            "I ja tam prídem raz, s anjelmi spojím hlas. ",
                            "Môj Spasiteľ volá z neba: „Prídem si pre teba!“"
                        ],
                        [
                            "Domov ťa prenesiem, slzy z líc ti zotriem, ",
                            "dám ti za kríž, posmech, hanu života korunu!"
                        ],
                        [
                            "Ó, Pane, so mnou choď, cestou cnosti, ma voď, ",
                            "a preveď z tejto cudziny do nebies otčiny! "
                        ],
                        [
                            "Kde na harfách zlatých s milionmi svätých ",
                            "sláviť budem žitia prameň, až na veky. Amen."
                        ],
                        [
                            "D. P. 196. ",
                            "Zákona prostý",
                            "Zákona prostý, život ten šťastný u Pána najde, kto ho chce vlastniť. ",
                            "Vykúpil nás Pán od moci zla, krv Jeho platnosť plnú má. "
                        ],
                        [
                            "Zbor: Platnosť má plnú! Hriešniku vedz to: platnosť má plnú!",
                            "Bratu môj, ver to! Vykúpil nás Pán od moci zla, krv Jeho platnosť plnú má. "
                        ],
                        [
                            "V Ježišovi sa životy menia, opierať smú sa o zasľúbenia, ",
                            "volá zvesť k Nemu tá radostná: krv Jeho platnosť plnú má. ",
                            "Zbor: "
                        ],
                        [
                            "Spasenia deti, vy ste pozvané v nadhviezdnu radosť, večné plesanie, ",
                            "spieva v Ňom duša preblažená: krv Jeho platnosť večnú má!",
                            "Zbor: "
                        ],
                        [
                            "D. P. 197",
                            "Pod ochranou Najvyššieho",
                            "Pod ochranou Najvyššieho, duša moja, radosť maj, ",
                            "že ťa stráži oko Jeho, na to vždy sa spoliehaj, na to vždy sa spoliehaj!"
                        ],
                        [
                            "Pod ochranou Najviššieho, domov vedie tvoja púť. ",
                            "V búrkach žitia pozemského On ti nedá utonúť, On ti nedá utonúť. "
                        ],
                        [
                            "Keď je v Bohu svetlo tvoje, tvoja zbraň i záštita, ",
                            "víťazne sa skončia boje, triumf teba uvíta, triumf teba uvíta. "
                        ],
                        [
                            "Upokoj sa a buď smelá, vrúcna obeť vďaky stroj! ",
                            "Nikto z ruky Spasiteľa nevyrve ti podiel tvoj, nevyrve ti podiel tvoj. "
                        ],
                        [
                            "D. P. 198",
                            "Akí sú blahoslovení ",
                            "Akí sú blahoslovení tí, čo sú v Krista vštepení. ",
                            "Na kmeni sú ratolesti, ovocie nesú Mu ku cti. "
                        ],
                        [
                            "Z Neho majú rozvlaženie, nezlomní stoja v súžení, ",
                            "nemôžu ich blesky hromy z pravého kmeňa odlomiť. "
                        ],
                        [
                            "Nádejou sa zelenajú, cnosťami kvitnú, voňajú ",
                            "a chuť plodov požehnaná prinášaná je pred Pána. "
                        ],
                        [
                            "Kriste Ty náš vinič pravý, očistiť ráč nás, uzdraviť. ",
                            "Zakvitne, a dozrie v Tebe ovocie naše spanilé. "
                        ],
                        [
                            "D. P. 199",
                            "Ježišu, môj drahokam",
                            "Ježišu, môj drahokam, v Tebe nový život mám ",
                            "drahší si než každý skvost pre časnosť i pre večnosť. "
                        ],
                        [
                            "Všetka rozkoš zemských ciest, všetok striebra, zlata lesk ",
                            "k hodnote tej nesiaha, čo krv Tvoja predrahá. "
                        ],
                        [
                            "Keď som slabý v nemoci, nezriem ľudskej pomoci, ",
                            "ty, môj lekár najvyšší, každú bolesť utíšiš. "
                        ],
                        [
                            "V chudobe a v núdze čas i keď bieda stihne nás, ",
                            "vôkol zúri ľudská zášť, samého ma nenecháš. "
                        ],
                        [
                            "Vprostred zloby, posmechu istú mám vždy útechu, ",
                            "žes´ Ty mojím priateľom najlepším tu v svete zlom. "
                        ],
                        [
                            "V skrýši Tvojej pravice stíchnu búrky, víchrice. ",
                            "Ako vtáča v lone brál zapejem Ti piesne chvál. "
                        ]
                    ]
                },
                {
                    "name": "Čo činí Boh, vždy dobre je",
                    "number": 200,
                    "lang": "sk",
                    "url": "co-cini-boh-vzdy-dobre-je",
                    "author": "",
                    "verses": [
                        [
                            "1. Čo činí Boh, vždy dobre je, v tom svätá vôľa Jeho,",
                            "čo určí On to chcem rád niesť a veriť iba v Neho.",
                            "Veď len On sám, ten dobrý Pán, ma vyrve z moci zlého,",
                            "ja dúfam iba v Neho."
                        ],
                        [
                            "2. Čo činí Boh, vždy dobre je, On milosťou ma hreje,",
                            "a od zlého preč odvedie, keď vôkol zloba zreje.",
                            "Ak padnem raz, On zdvihne zas, veď lekár je On pravý,",
                            "liek v nemoci včas zjaví."
                        ],
                        [
                            "3. Čo činí Boh, vždy dobre je, hoc mám piť horký kalich,",
                            "preds´ v Ňom sú moje nádeje, ja staviam všetko na nich.",
                            "Už teraz viem a dúfať smiem, že stíši bôle zlosti,",
                            "ma zbaví úbohosti."
                        ],
                        [
                            "4. Čo činí Boh, vždy dobre je, chcem na Ňom všetko stavať,",
                            "bo Jeho meno mocné je aj z útrob smrti vyrvať.",
                            "Aj smrti mráz On zmení včas, keď zaznie povel Jeho.",
                            "Ja verím iba v Neho."
                        ]
                    ]
                },
                {
                    "name": "1. Aké šťastie Ježiša mať a s istotou smieť povedať.",
                    "number": 201,
                    "lang": "sk",
                    "url": "1-ake-stastie-jezisa-mat-a-s-istotou-smiet-povedat",
                    "author": "",
                    "verses": [
                        [
                            "Boh mi všetko s Ním daroval bych tu blaho, v nebi vlasť mal."
                        ],
                        [
                            "REF.: Vlasť ty večná, vlasť ty moja, sídlo blaha a pokoja!",
                            "Môj záujem to jediný do tvojej skôr prísť tíšiny."
                        ],
                        [
                            "2. Zasnúbil si ma na večnosť, a hľa aká to blaženosť!",
                            "On ma nikdy neopustí, chcem Mu veriť a byť istý. "
                        ],
                        [
                            "REF.: Vlasť ty večná..."
                        ],
                        [
                            "3. Tak úzko sa so mnou spojil, nikto by nás nerozdvojil.",
                            "Preto duša plesá v slasti a túži po nebies vlasti. "
                        ],
                        [
                            "REF.: Vlasť ty večná..."
                        ],
                        [
                            "4. Diabol ktorý raz otročil, v tom záujme, aby zničil;",
                            "vždy obchádza a sa zlostí, nepraje mi tej milosti. "
                        ],
                        [
                            "REF.: Vlasť ty večná..."
                        ]
                    ]
                },
                {
                    "name": "Smieť k Ježišovi vzlietať",
                    "number": 202,
                    "lang": "sk",
                    "url": "smiet-k-jezisovi-vzlietat",
                    "author": "",
                    "verses": [
                        [
                            "1. Smieť k Ježišovi vzlietať, to blaho najvyššie. ",
                            "Už nechcem šťastie sveta, keď v Ňom sa kochať smiem. ",
                            "Nič iné nechcem konať, mám túžbu jednu len:",
                            "Vždy Krista nasledovať, byť bližšie k Nemu chcem."
                        ],
                        [
                            "2. Ja šťastný z lôžka vstávam, keď priateľ mi je On",
                            "a vierou sa Mu dávam viesť týmto životom. ",
                            "Svoj pokrm, nápoj vďačne z rúk Jeho prijímam",
                            "a keď kríž tlačiť začne, to liek; čo dal on sám."
                        ],
                        [
                            "3. Keď k večeru sa kloní a spánok vítať mám,",
                            "tu v srdci túžba zvoní, mňa priviň, Pane sám.",
                            "Aj na lôžku chcem duchom byť s Tebou spojený.",
                            "Ty prenikni tmy rúchom aj do sna ozveny."
                        ],
                        [
                            "4. Tak dňom i nocou vzlieta môj duch len k Pánovi",
                            "a márnych túžob sveta sa vzdať je hotový.",
                            "Čo vidím, čujem, cítim, sa v opar premení.",
                            "Keď Ježiš je mi žitím, je všetko bez ceny."
                        ],
                        [
                            "5. Ó, iste, komu hriechy sám Kristus krvou zmyl,",
                            "kto prv žil bez útechy a našiel žriedlo síl,",
                            "ten prekrásnu má cestu vzdor všetkým útrapám,",
                            "bo vedie k sláve mestu ho Spasiteľ a Pán."
                        ]
                    ]
                },
                {
                    "name": "Čo mal by som",
                    "number": 203,
                    "lang": "sk",
                    "url": "co-mal-by-som",
                    "author": "",
                    "verses": [
                        [
                            "1. Čo mal by som, ó, Pane môj, ak nemal by som Teba?",
                            "Ach, ktože by ma v búrkach skryl a mocnou rukou",
                            "otvoril mi jasné brány neba, mi jasné brány neba, ach, neba?"
                        ],
                        [
                            "2. Čo by mi mohol tento svet dať miesto Teba, Pane?",
                            "Hoc by som celý svojím zval i tak by som len v biede lkal",
                            "a dvíhal prázdne dlane, a dvíhal prázdne dlane, ach, dlane?"
                        ],
                        [
                            "3. Kto v bôľoch dá mi útechu? Kto v smrti k boku stane?",
                            "Kto ujme sa ma v súdny deň? Ach, biedny je, aj bude ten,",
                            "kto nemá Teba, Pane, kto nemá Teba, Pane, ach, Pane!"
                        ],
                        [
                            "4. Oj, ale v Tebe hojnosť mám a blaho nekonečné, ",
                            "veď nebo, celý svet je Tvoj, ja s Tebou tiež mám v nich diel svoj,",
                            "ó, Jezu svetlo večné, ó, Jezu, svetlo večné, ach večné!"
                        ]
                    ]
                },
                {
                    "name": "Spasiteľu, Pane môj",
                    "number": 204,
                    "lang": "sk",
                    "url": "spasitelu-pane-moj",
                    "author": "",
                    "verses": [
                        [
                            "1. Spasiteľu, Pane môj, k Tebe len sa utiekam, ",
                            "v hrôze búrok pri mne stoj, loďku žitia veď Ty sám. ",
                            "Skry ma, Pane, zachovaj, dokiaľ trvá búrky čas,",
                            "do prístavu vojsť mi daj, kde je večný mier a jas."
                        ],
                        [
                            "2. Na Teba sa spolieham, keď ma stíha satan hriech, ",
                            "útočišťom buď mi sám, popraj uzrieť spásy breh.",
                            "Prikry, Pane krídlami, keď sa chveje celá zem;",
                            "moje meno na dlani Ty si vyryl, iste viem!"
                        ],
                        [
                            "3. Ty máš plnosť všetkého, Tvoje slovo mocná zbroj,",
                            "obdar silou slabého, do srdca vlej pokoj svoj.",
                            "Ty si svätý, ja však lkám v mnohej biede, úzkosti, ",
                            "vzhliadni na mňa, Pane, sám, dušu z biedy vyprosti."
                        ],
                        [
                            "4. Milosti aj lásky dosť pre každého, Jezu, máš,",
                            "odpusť viny, zahlaď zlosť, Pane, čuj môj vrúcny hlas.",
                            "Duše smäd Ty uhasíš, Ty si živej vody zdroj.",
                            "Tvoje meno istá skrýš, naveky chcem zostať Tvoj!"
                        ],
                        [
                            "D. P. 205",
                            "Pane Kriste, spása moja",
                            "1. Pane Kriste, spása moja, v náruč svätú priviň ma, ",
                            "vzdutých vôd keď prúdy hučia, srdce mi chce schvátiť tma."
                        ],
                        [
                            "2. Skry ma v ťažkých búrkach žitia, kým svoj nedosiahnem cieľ,",
                            "v bezpečný ma uveď prístav s Tebou večný daj mi diel."
                        ],
                        [
                            "3. Zacloň štítom krídel svojich dieťa bezbranné Ty sám.",
                            "Keď ma prízrak strachu desí, v Tebe záchranu nech mám."
                        ],
                        [
                            "4. Milosť, plné odpustenie v Tebe sú ó, Pane môj.",
                            "Utíš, uzdrav dušu, srdce, daj mi uzrieť domov svoj."
                        ],
                        [
                            "5. Dobre je Ti dôverovať! Ó, ja chcem vždy Tvojím byť,",
                            "v nebi chcem Ťa vidieť večne, tu i tam len s Tebou žiť. "
                        ],
                        [
                            "D. P. 206",
                            "Som spasený, je napísané",
                            "1. Som spasený, je napísané, mňa kúpil Bohu Ježiš, Pán.",
                            "On krvou splatil hriechu dane a uňho blažene sa mám."
                        ],
                        [
                            "REF.: Kúpil, kúpil, kúpil ma Bohu Ježiš Pán, ",
                            "kúpil, kúpil a uňho blažene sa mám."
                        ],
                        [
                            "2. Som spasený, mňa Ježiš kúpil, ó, ako všetko vysloviť,",
                            "že do čoho som zdarma vstúpil, len z lásky, čo je v Pánovi. "
                        ],
                        [
                            "REF.: Kúpil, kúpil, kúpil ma..."
                        ],
                        [
                            "3. Vždy myslím na Vykupiteľa, v Ňom je môj spasiteľný diel",
                            "a jasám, že mám Spasiteľa, čo z lásky za mňa zomrieť šiel."
                        ],
                        [
                            "REF.: Kúpil, kúpil, kúpil ma..."
                        ],
                        [
                            "4. Raz uvidím Ho ako Kráľa, už tu Mu slúžiť slasťou je,",
                            "On čuje prosby a On dáva vždy silu, čo ma zmocňuje."
                        ],
                        [
                            "REF.: Kúpil, kúpil, kúpil ma..."
                        ],
                        [
                            "5. Keď dobojujem svoj boj verne a beh svoj s vierou dokonám,",
                            "mňa vezme v nebo nedozierne a korunu dá Ježiš sám. "
                        ],
                        [
                            "REF.: Kúpil, kúpil, kúpil ma..."
                        ]
                    ]
                },
                {
                    "name": "Kto dá mi silu k púti",
                    "number": 207,
                    "lang": "sk",
                    "url": "kto-da-mi-silu-k-puti",
                    "author": "",
                    "verses": [
                        [
                            "1. Kto dá mi silu k púti v ďalekú blaha ríš?",
                            "Kto osvieti mi cestu, úskalie, zrady skrýš?",
                            "Kto nahradí mi svojeť v mrazivej cudzine?",
                            "Môj Pán a môj Boh, Ježiš! On svetlo jediné."
                        ],
                        [
                            "2. Kto postaví sa k boku v hrozivých búrok čas?",
                            "Kto útechu dá srdcu, keď šťastie spálil mráz?",
                            "V hodinách tvrdej skúšky na koho zavolám?",
                            "Kto privinie ma k sebe? Môj Ženích, Ježiš sám!"
                        ],
                        [
                            "3. Kto posilní ma k práci, keď nieto uznania?",
                            "Kto zotrie horké slzy bolesti sklamania?",
                            "Kto naučí tam veriť, kde nezrieť pomoci?",
                            "Môj Spasiteľ Pán Ježiš, mocný i v nemoci."
                        ],
                        [
                            "4. Kto otvorí mi bránu; až púť raz skončená?",
                            "V čích rukách leží vzácna vernosti odmena?",
                            "Kto položí ma s láskou ta v náruč Otcovu?",
                            "Pán Ježiš cesta jasná k večnému domovu."
                        ]
                    ]
                },
                {
                    "name": "Musím mať vždy Spasiteľa",
                    "number": 208,
                    "lang": "sk",
                    "url": "musim-mat-vzdy-spasitela",
                    "author": "",
                    "verses": [
                        [
                            "1. Musím mať vždy Spasiteľa, bojím sa ísť svetom sám,",
                            "mnoho nástrah, pokušenia stojí v ceste k nebesiam."
                        ],
                        [
                            "REF.: S Ním keď kráčam životom nebojím sa, istý som,",
                            "perlové že uzriem brány, vojdem v nebies večný stan."
                        ],
                        [
                            "2. Musím mať vždy Spasiteľa, On je mojou nádejou,",
                            "hoc je moja viera slabá, mocnou je mi posilou. "
                        ],
                        [
                            "REF.: S Ním keď kráčam životom..."
                        ],
                        [
                            "3. Musím mať vždy Spasiteľa, Jemu veriť cele smiem,",
                            "najlepší On pastier duše, zahanbený nebudem. "
                        ],
                        [
                            "REF.: S Ním keď kráčam životom..."
                        ],
                        [
                            "4. Musím mať vždy Spasiteľa, pokladom On jediným,",
                            "keď sa skončia boje, smrti prevedie ma údolím. "
                        ],
                        [
                            "REF.: S Ním keď kráčam životom..."
                        ]
                    ]
                },
                {
                    "name": "Môj poklad je v nebi",
                    "number": 209,
                    "lang": "sk",
                    "url": "moj-poklad-je-v-nebi",
                    "author": "",
                    "verses": [
                        [
                            "1. Môj poklad je v nebi a srdce tiež s ním,",
                            "môj poklad je v nebi, ó, jak sa teším; ó jak sa teším.",
                            "Nebo je už so mnou, môj Spasiteľ v ňom,",
                            "mne je blahom všade, bo s Ježišom som.",
                            "Môj poklad je v nebi, ja istotne viem;",
                            "/: môj poklad je v nebi, kde s Ježišom dliem.:/"
                        ],
                        [
                            "2. I nocou keď kráčam, jasný mi je cieľ:",
                            "Pán osvieti cestu, by som šťastne šiel, by som šťastne šiel.",
                            "On je v boji silou, šťastne zvíťazí;",
                            " nepriateľa mocne slovom porazí.",
                            "I v chvíli smrti, keď bôľny odznie ston,",
                            "/: zostane mi verný navždy, večne On.:/"
                        ],
                        [
                            "3. Mňa radostne víta už večnosti svit; v tele a či ináč,",
                            "mne je blahom žiť, mne je blahom žiť.",
                            "Či v pálčivých sférach, či v práci, kde shon,",
                            "mne je zdrojom blaha Ježiš a len On.",
                            "Mňa radostne víta už večnosti svit,",
                            "/: v tele a či ináč, mne je blahom žiť.:/"
                        ]
                    ]
                },
                {
                    "name": "Nič večité v zemskej ríši",
                    "number": 210,
                    "lang": "sk",
                    "url": "nic-vecite-v-zemskej-risi",
                    "author": "",
                    "verses": [
                        [
                            "1. Nič večité v zemskej ríši nenájdeš k videniu.",
                            " Dľa písma sa koniec blíži všetkému stvoreniu.",
                            "Ale cirkev Ježišova potrvá na veky,",
                            "stvrdzujú to Jeho slova, svedkov zbor veliký."
                        ],
                        [
                            "REF: Kristov sľub je skalopevný, na tom nikto nič nezmení!",
                            "On si cirkev živí, chráni, nezvládzu ju pekla brány!"
                        ],
                        [
                            "2. Ježiš Kristus je tá skala i kameň základný.",
                            "Na Ňom sa cirkev počala, je “prvý, posledný”.",
                            "Jak by mohla cirkev padnúť za ktorú život dal?",
                            "Jej odporcov vidím hynúť, kým ona vzrastá diaľ."
                        ],
                        [
                            "REF: Kristov sľub je skalopevný..."
                        ],
                        [
                            "3. Táto cirkev pozostáva len z duší spasených,",
                            "skrz prijatie Jeho slova znovunarodených.",
                            "Pán pridáva do nej denne zo všetkých národov,",
                            "má v nej zvláštne zaľúbenie, uzavrel zmluvu s ňou."
                        ],
                        [
                            "REF: Kristov sľub je skalopevný..."
                        ],
                        [
                            "4. Dnes cirkev dľa Božích plánov je ešte na svete,",
                            "je mu svetlom, zeme soľou, svedčí im o pravde.",
                            "No príde deň – už sa blíži – miesto jej pripraví,",
                            "na svoj trón si ju povýši a v nej sa oslávi!"
                        ],
                        [
                            "REF: Kristov sľub je skalopevný..."
                        ]
                    ]
                },
                {
                    "name": "My chválime ten nebeský kraj",
                    "number": 211,
                    "lang": "sk",
                    "url": "my-chvalime-ten-nebesky-kraj",
                    "author": "",
                    "verses": [
                        [
                            "1. My chválime ten nebeský kraj, kde svetlo Božie nehasne,",
                            "tam cieľ svoj pravý, jediný maj, ó, duša, v časy nejasné."
                        ],
                        [
                            "REF.: /:Prekrásne, prekrásne, má duša miesto prejasné.:/"
                        ],
                        [
                            "2. My chválime ten Jeruzalem a naše večné bývanie,",
                            "tam v bránach z periel, v sadoch páliem raz naša noha zastane."
                        ],
                        [
                            "REF.: /:Prekrásne, prekrásne..."
                        ],
                        [
                            "3. My chválime ten pokoj Boží, trón s riekou večne živých vôd,",
                            "kde víťazom Kráľ vence vloží, keď svitne Jeho svadby hod."
                        ],
                        [
                            "REF.: /:Prekrásne, prekrásne..."
                        ]
                    ]
                },
                {
                    "name": "Ó, ty nádej, svetlo v tmavej noci",
                    "number": 212,
                    "lang": "sk",
                    "url": "o-ty-nadej-svetlo-v-tmavej-noci",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, ty nádej, svetlo v tmavej noci, túžobne tvoj zásvit  ",
                            "sledujem, keď mnou ako cudzincom svet zhŕda, hoc preň",
                            "často sa i sužujem. Čo na tom, že teraz v púšti som! Po púti ",
                            "si odpočiniem v raji nebeskom. "
                        ],
                        [
                            "2. Ó, ty nádej, Tvoje hviezdy mieru už mi svietia z brehov ",
                            "večnosti. S túžbou hľadím na tie krásne kraje, bez smrti",
                            "však nieto radosti. Zomrieť s Kristom pre tento chcem svet, ",
                            "by som v nebi pravý domov mohol uvidieť."
                        ],
                        [
                            "3. Ešte jeden odpočinok kynie tým, čo smelo niesli ťažký kríž. ",
                            "Veď On vedie bojovníkov verných po víťazstvách slávnych v nebies ríš. ",
                            "Napriek biedam viera jasať smie. Ó, ty nádej! Zažiariš tam, ",
                            "najviac kde sa tmie."
                        ],
                        [
                            "4. Oj, vlasť večná! Moja duša túži po tej  krásnej tvojej tíšine, ",
                            "kde sa skončila všetky bôle, stony, po  bojoch, kde srdce ",
                            "spočinie. Kde už večné ráno svitne mi, vzdám česť Bohu za ",
                            "nádeje zásvit blažený.  "
                        ]
                    ]
                },
                {
                    "name": "Netúžim po pokladoch",
                    "number": 213,
                    "lang": "sk",
                    "url": "netuzim-po-pokladoch",
                    "author": "",
                    "verses": [
                        [
                            "1. Netúžim po pokladoch, po striebre a zlate, len po Kristu ",
                            "túžievam, po Jeho odplate. O tom žiadam známosť mať, ",
                            "ó, blahá istota, či mám meno vpísané do knihy života! "
                        ],
                        [
                            "REF.: Ó, blahá istota, drahšia nad lesk zlata, zapísané ",
                            "meno mám do knihy života.  ",
                            " ",
                            "2. Ako piesku morského, toľko som hriechov mal, od všetkých ",
                            "ma očistil môj Spasiteľ a Kráľ! Srdce nad sneh zbielila Kristova ",
                            "krv svätá; ňou mi meno zapísal do knihy života!"
                        ],
                        [
                            "REF.: Ó, blahá istota..."
                        ],
                        [
                            "3. Bárs svet zo mňa posmech má, Pán ma v srdci nosí, On vždy ",
                            "za mňa u Otca oroduje, prosí! V Ňom som Božím dieťaťom, ó, ",
                            "aká výhoda! Kto mi uprie dedičstvo večného života?!"
                        ],
                        [
                            "REF.: Ó, blahá istota..."
                        ],
                        [
                            "4. I ty duša hynúca v biednej neistote neskladaj si nádeje vo striebre",
                            "a zlate! K Baránkovi Božiemu vráť sa z púšte sveta! On i teba zapíše ",
                            "do knihy života!"
                        ],
                        [
                            "REF.: Ó, blahá istota..."
                        ]
                    ]
                },
                {
                    "name": "Pán Boh sila moja",
                    "number": 214,
                    "lang": "sk",
                    "url": "pan-boh-sila-moja",
                    "author": "",
                    "verses": [
                        [
                            "1. Pán Boh sila moja, On obrana moja: tak ",
                            "bezpečne mám stáť, nebudem sa ľakať v čas boja."
                        ],
                        [
                            "2. By vojsko povstalo, proti mne sa bralo, ",
                            "by ich bolo mnoho, nebojím sa toho za málo!"
                        ],
                        [
                            " 3. Lebo pri sebe mám, v Neho silne dúfam, ",
                            "bojovníka toho, čo je mocný všeho, nazúfam!"
                        ],
                        [
                            "4. Jednej veci žiadam a to vždy si hľadám, aby",
                            "v Pána dome prebýval v ochrane večne tam!"
                        ],
                        [
                            "5. Pane, ach, počuj ma, ohliadni sa na mňa: utiekam ",
                            "sa k Tebe, rád Ťa mám pri sebe, chráň Ty mňa!"
                        ]
                    ]
                },
                {
                    "name": "Znám v nebi mesto veľké",
                    "number": 215,
                    "lang": "sk",
                    "url": "znam-v-nebi-mesto-velke",
                    "author": "",
                    "verses": [
                        [
                            "1. Znám v nebi mesto veľké a sväté; z periel má brány,",
                            "ulice zlaté. Nemocí, žiaľov žiadnych tam nieto; tam ",
                            "pokoj, svetlo žiari bez zmeny."
                        ],
                        [
                            "2. Synovi svadbu. Kráľ si tam strojí; rytierstvo krásne ",
                            "pred trónom stojí. Nádherné rúcha na všetkých svietia. ",
                            "Bárs´ by ho ja mal, blúdiace dieťa!"
                        ],
                        [
                            "3. Rád svetom týmto trebárs sám pôjdem, keď len raz ",
                            "šťastne ta hore dôjdem, k onomu mestu Jeruzalemu, ",
                            "k rytierstvu Pána vyvolenému."
                        ],
                        [
                            "4. Rád znesiem posmech, biedu i hanu, keď len mi Pán",
                            "dá nebeskú mannu. Bárs´ priazeň, zdravie, statok sa stratí;",
                            "jediným slovom Pán to zas vráti."
                        ],
                        [
                            "5. Prečo mám hynúť v núdzi a v kríži? Cesta sa kráti,",
                            "domov sa blíži. Z ďaleka vidno jordánske stráne a ",
                            "zlatožiarne, sionské bane."
                        ]
                    ]
                },
                {
                    "name": "Nech plynie",
                    "number": 216,
                    "lang": "sk",
                    "url": "nech-plynie",
                    "author": "",
                    "verses": [
                        [
                            "1. Nech plynie v tom svete si rozkoší prúd, v nich duša ",
                            "nežiadaj si odpočinúť, no s radosťou lásky zdroj túžim zrieť",
                            "tam. Kde príbytok Pán Ježiš sľúbil mi sám. "
                        ],
                        [
                            "REF.: Vlasť, vlasť, večná vlasť, mne najrozkošnejšia ",
                            "je nebeská vlasť."
                        ],
                        [
                            "2. Keď niekto paláce i dať by mi chcel, v nich srdce nenájde ",
                            "si domovský diel; len domove môžem čuť ľúbezný tón, hľa",
                            "z príbytkov neba mi zaznieva on."
                        ],
                        [
                            "REF.: Vlasť, vlasť..."
                        ]
                    ]
                },
                {
                    "name": "Zvuk Tvojho Mena",
                    "number": 217,
                    "lang": "sk",
                    "url": "zvuk-tvojho-mena",
                    "author": "",
                    "verses": [
                        [
                            "1. Zvuk Tvojho Mena, Ježišu, mi slasťou plní hruď,",
                            "veď v Tebe duša skrýšu má, keď víchre začnú duť."
                        ],
                        [
                            "2. Ó, veľkosť Pána Ježiša, či pochopiť ju viem?",
                            "Chcem lásku Jeho ospievať, slov pre ňu nenájdem!"
                        ],
                        [
                            "3. Je balzam v Jeho dotyku, keď srdce ranil bôľ, ",
                            "liek výborný je v trápení, čo vždy mi pomohol."
                        ],
                        [
                            "4. V ňom duše nájdu zas i radosť po žiali a stroskotanci ",
                            "z bahna vín s Ním k sláve povstali. "
                        ],
                        [
                            "5. Ty kohos´ našiel, život má a stály prameň síl. ",
                            "Z tej duše, Pane, chválim Ťa, žes´ aj mňa vykúpil."
                        ]
                    ]
                },
                {
                    "name": "Ó, jak ma blaží tá prevzácna zvesť",
                    "number": 218,
                    "lang": "sk",
                    "url": "o-jak-ma-blazi-ta-prevzacna-zvest",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, jak ma blaží tá prevzácna zvesť: Boh mi je Otcom,",
                            "chce s láskou ma viesť! Srdce mi poskočí nad slovom tým,",
                            "že i mňa miluje sám Boží Syn.  "
                        ],
                        [
                            "REF.: Čuj to svet: Ježiš miluje mňa, miluje ma: miluje ma. ",
                            "Čuj to svet: Ježiš miluje mňa, miluje ma, mňa, mňa."
                        ],
                        [
                            "2. Od Neho z prachu čo pozdvihol ma, neraz už zblúdil ",
                            "som vo hriechu tmách, predsa však duša lnie ku Nemu zas,",
                            "Ježiš ma miluje po celý čas."
                        ],
                        [
                            "REF.: Čuj to svet..."
                        ],
                        [
                            "3. Mojou to piesňou je preblaženou, cez hory, doly chcem ",
                            "stále ísť s ňou, kiež by sa k piesni tej pripojil svet. Nad lásku ",
                            "Kristovu väčšej už niet."
                        ],
                        [
                            "REF.: Čuj to svet..."
                        ],
                        [
                            "4. Odvekú slávu, čo u Otca mal, opustil, potupne zabiť sa dal, ",
                            "vyrval ma z diablových zvodov a tiem, Ježiš ma miluje, ",
                            "iste to viem  "
                        ],
                        [
                            "REF.: Čuj to svet..."
                        ],
                        [
                            "5. Pýtaš sa, skadiaľ tú istotu mám, odpoviem: Jeho Duch ",
                            "svedčí mi sám za dňa i za noci, v bdení aj v snoch. Večne ",
                            "ťa miluje Ježiš, tvoj Boh."
                        ],
                        [
                            "REF.: Čuj to svet..."
                        ],
                        [
                            "6. Preto si radostne zaspievať smiem, V pánu mám blaho,",
                            "čo nemôž dať zem. Nadarmo diabol má úskočnú zbraň, ",
                            "Ježiš ma miluje, silu v Ňom mám."
                        ],
                        [
                            "REF.: Čuj to svet..."
                        ]
                    ]
                },
                {
                    "name": "Ježiš, to meno znie",
                    "number": 219,
                    "lang": "sk",
                    "url": "jezis-to-meno-znie",
                    "author": "",
                    "verses": [
                        [
                            "1. Ježiš to meno znie na svete najkrajšie, pre nás Boh spasenie ",
                            "zjavuje v ňom. Napĺňa blahom zem pred ním sa skláňam len, ",
                            "meno to vzývať chcem nocou i dňom."
                        ],
                        [
                            "2. Na cestách života, búrka keď dvíha sa, nie som ja sirota, ",
                            "so mnou je Pán. Verne ma chráni On, čuje môj každý ston, ",
                            "keď bije blesk a hrom, pokoj v ňom mám.  "
                        ],
                        [
                            "3. Ježišu predrahý, Tebe som oddaný, svojimi cestami Ty ",
                            "veď ma vpred. Tvoju chcem vôľu znať, na seba kríž svoj ",
                            "vziať, Teba vždy milovať nad celý svet."
                        ],
                        [
                            "4. Posväť ma úplne, svetlo čo z Teba je, šíriť chcem po svete",
                            "ľuďom ho dám. Kým sa raz nočnou tmou zableskne domov môj,",
                            "večný kde podiel svoj u Teba mám."
                        ]
                    ]
                },
                {
                    "name": "Prídi, Jezu, Pane milý",
                    "number": 220,
                    "lang": "sk",
                    "url": "pridi-jezu-pane-mily",
                    "author": "",
                    "verses": [
                        [
                            "1. Prídi, Jezu, Pane milý, svojim verným pridať ",
                            "sily uniesť bolesť, kríž a boj, prosím Ťa, ó, Jezu ",
                            "môj, ó, Jezu môj."
                        ],
                        [
                            "2. Cestami veď pozemskými k môjmu cieľu dôjsť ",
                            "daj Ty mi, vieru spevňuj, môj žiaľ zhoj, prosím Ťa, ",
                            "ó, Jezu môj, ó, Jezu môj."
                        ],
                        [
                            "3. Ty si nado všetko duši, bez Teba sa trápiť musí, ",
                            "víťazstvo jej Ty sám stroj, prosím Ťa, ó, Jezu môj, ",
                            "ó, Jezu môj."
                        ],
                        [
                            "4. Zdob ma rúchom svojej krásy, keď sa srdce k Tebe ",
                            "hlási, nech zrieť na mne obraz Tvoj, prosím ťa, ó, Jezu ",
                            "môj, ó, Jezu môj."
                        ],
                        [
                            "5. Ty, čo miluješ ma večne, daj mi v časy nebezpečné, ",
                            "vidieť Tvojej lásky zdroj, prosím Ťa, ó, Jezu môj, ó, ",
                            "Jezu môj."
                        ]
                    ]
                },
                {
                    "name": "Aké  nádherné sú zvesti plné spásy",
                    "number": 221,
                    "lang": "sk",
                    "url": "ake-nadherne-su-zvesti-plne-spasy",
                    "author": "",
                    "verses": [
                        [
                            "1. Aké nádherné sú zvesti plné spásy, života, ",
                            "Boží Syn že čistý svätý mrel na vrchu Golgota. ",
                            "Pre moje On neprávosti svoju dušu v obeť dal,",
                            "navrátil ma z cesty zlosti, Božím dietkom som sa stal. "
                        ],
                        [
                            "2. Viac než východ od západu od Boha súc vzdialený, ",
                            "vystavený smädu, hladu, môj duch hynul v trápení. Dnes ",
                            "pre drahú obeť kríža, stojím v Božej blízkosti, obživený",
                            "duch i duša spieva pieseň radosti."
                        ]
                    ]
                },
                {
                    "name": "Viem, že Ježiš miluje mňa",
                    "number": 222,
                    "lang": "sk",
                    "url": "viem-ze-jezis-miluje-mna",
                    "author": "",
                    "verses": [
                        [
                            "1. Viem, že Ježiš miluje mňa, čo by tedy žiadal viac?",
                            "Z Jeho zdroja sa pramenia rieky blaha nadostač. ",
                            "A čo je svet, vábna rozkoš, proti láske Kristovej? ",
                            "Všetko len mám, nemá pre mňa radosti opravdovej. "
                        ],
                        [
                            "2. Bárs by šiel aj cestou tŕnia, strasťou, smútkom pokrytou, ",
                            "Pán to všetko popremieňa s vôňou, ružou rozkvitlou.",
                            "Žlč keď svet mi v nápoj vlieva, On ju v sladkosť zmeňuje, ",
                            "a keď zlosti sa svet, hnevá, Ježiš mňa vždy miluje."
                        ],
                        [
                            "3. Keď ma hrôza obkľučuje, On mňa silou podpiera;",
                            "On mňa mocne obhajuje, nepriateľ keď dotiera. ",
                            "Čo svet vraví: Nešťastie, strasť! To mi k dobru smeruje, ",
                            "len Jemu vždy rád sa dám viesť lebo On mňa miluje."
                        ],
                        [
                            "4. Oj, pamätná je mi chvíľa, v nej som poznal Ježiša.",
                            "Ó, to doba veľmi milá, s Ním, čo strávila duša. Veselo ",
                            "i v smrti chladnej, jazyk môj už zapeje: Nemáš pre mňa",
                            "hrôzy žiadnej, Ježiš mňa vždy miluje."
                        ]
                    ]
                },
                {
                    "name": "Príbytok prekrásny",
                    "number": 223,
                    "lang": "sk",
                    "url": "pribytok-prekrasny",
                    "author": "",
                    "verses": [
                        [
                            "1. Príbytok prekrásny, kráľovský stan pripravil pre verných ",
                            "v nebesiach Pán. Hlasy tam tisícov slávia triumf Ježišov",
                            "s radosťou najvyššou zo všetkých strán.     "
                        ],
                        [
                            "2. Nový tam zaskvie sa jasnejší deň, pominú bolesti, nočný",
                            "sťa sen. V Otcovom náručí nikto sa už nelúči radostne zazvučí",
                            "chválospev len."
                        ],
                        [
                            "3. Aký si biedny len pyšný ty svet! Nemôžeš ani len porozumieť,",
                            "aký ja podiel mám, tvojich síl sa neľakám, ponúkaš iba klam, ",
                            "podvod a lesť."
                        ],
                        [
                            "4. Tvoj som už, Ježišu, verný môj Pán! Premieňaj život môj, ",
                            "ako chceš sám, túžby a žiadosti, z nástrah zlých ma vyprosti, ",
                            "prenes ma z milosti v nebeský stan."
                        ]
                    ]
                },
                {
                    "name": "Vstaň srdce a poď",
                    "number": 224,
                    "lang": "sk",
                    "url": "vstan-srdce-a-pod",
                    "author": "",
                    "verses": [
                        [
                            "1. Vstaň srdce a poď zvesela pieť žalmy na Spasiteľa, ",
                            "nech znejú tóny radosti len láske Pána z výsosti. Láska ",
                            "Pána, láska Pána len láska Pána z výsosti."
                        ],
                        [
                            "2. On videl môj hriech, moju zlosť, no z lásky prijal ",
                            "na milosť, zňal bremä z ramien hriešnika. Ó, láska Pána veliká.",
                            "Láska Pána, láska Pána. Ó, láska Pána veliká."
                        ],
                        [
                            "3. Hoc povstali by proti mne i vojská pekla protivné,",
                            "Pán je mi pevnosť prepevná; hľa, láska Pána nesmierna.",
                            "Láska Pána, láska Pána, hľa, láska Pána nesmierna."
                        ],
                        [
                            "4. Keď prídu časy zápasov a búrnych sveta otrasov, ",
                            "On pre mňa silu, pokoj má; je láska Pána prehojná.",
                            "Láska Pána, láska Pána, je láska Pána prehojná."
                        ]
                    ]
                },
                {
                    "name": "Môj základ viery",
                    "number": 225,
                    "lang": "sk",
                    "url": "moj-zaklad-viery",
                    "author": "",
                    "verses": [
                        [
                            "1. Môj základ viery je len v tom, čo Kristus dáva hriešnikom;",
                            "cit, radosť, žiaľ sú prechodné, len Ježiš skalou vekov je."
                        ],
                        [
                            "REF.: Smiem na tej Skale spočívať, keď zúri búrka hrozivá,",
                            "keď zúri búrka hrozivá."
                        ],
                        [
                            "2. Hoc´ občas tvár si zahalí, je s láskou ku mne prestály, ",
                            "keď búrka hrozí, duní hrom, ja Skalu istú mám len v Ňom."
                        ],
                        [
                            "REF.: Smiem na tej Skale..."
                        ],
                        [
                            "3. Krv Jeho zmluvy podobne ma chráni vždy v čas povodne,",
                            "čo všetko ničí podvracia. Len Ježiš Skala trváca."
                        ],
                        [
                            "REF.: Smiem na tej Skale..."
                        ],
                        [
                            "4. Keď príde súdiť Boží Syn a všetko vojsko neba s Ním,",
                            "tam spravedlivosť Kristova ma ozdobí a zachová."
                        ],
                        [
                            "REF.: Smiem na tej Skale..."
                        ]
                    ]
                },
                {
                    "name": "Za Tebou, Pane môj",
                    "number": 226,
                    "lang": "sk",
                    "url": "za-tebou-pane-moj",
                    "author": "",
                    "verses": [
                        [
                            "Za Tebou, Pane môj, letí túžby let.",
                            "Za Tebou do slávy v ten prekrásny svet,",
                            "kam si mi odišiel prijať moc a česť,",
                            "tam si cieľ dostihol svojich tvrdých ciest."
                        ],
                        [
                            "Ach, v Otcovom  lone teraz spočívaš,",
                            "za vernosť odmenu sladkú požívaš.",
                            "Zaujals kráľovstvo prestol večný sám,",
                            "podmaní Boh ľudstvo Tebe k nohám, znám."
                        ],
                        [
                            "Viem, že vzdor velebe, ktorú v nebi máš",
                            "i na mňa v nízkosti s láskou spomínaš.",
                            "Viem, že mňa miluješ, že i tam si môj,",
                            "že so mnou rozdeliť chceš raz podiel svoj."
                        ],
                        [
                            "Viem, žes nás samotných v svete nenechal,",
                            "žes Ducha vlastného vnútro naše dal.",
                            "V Ňom Ťa mám i svetla lásky mieru zdroj.",
                            "Či v práci, či v snení pri mne si a môj."
                        ],
                        [
                            "A predsa za Tebou letí túžby let",
                            "ta domov k Otcovi v ten nebeský svet.",
                            "Veď tu mám iba lúč, tam je svetla žiar;",
                            "tu verím a tam Ťa uzriem tvárou v tvár."
                        ]
                    ]
                },
                {
                    "name": "Ja neviem, prečo milosti zdroj",
                    "number": 227,
                    "lang": "sk",
                    "url": "ja-neviem-preco-milosti-zdroj",
                    "author": "",
                    "verses": [
                        [
                            "1. Ja neviem, prečo milosti zdroj Boh mi otvoril,",
                            "ni prečo z lásky Pán Ježiš ma sebe vyvolil."
                        ],
                        [
                            "REF.: Ale komu uveril som, viem, presvedčený som, ",
                            "že On je mocný ma sebe zachovať verným, až kým ",
                            "príde Jeho deň! "
                        ],
                        [
                            "2. Ja neviem, ako viery dar mi k spáse požehnal a ",
                            "v Jeho Slovo dôverou mier v srdci vyvolal."
                        ],
                        [
                            "REF.: Ale komu uveril som, viem..."
                        ],
                        [
                            "3. Ja neviem, ako človeka Duch z hriechov usvedčí,",
                            "jak zjaví Pána Ježiša a dušu vylieči."
                        ],
                        [
                            "REF.: Ale komu uveril som, viem..."
                        ],
                        [
                            "4. Ja neviem, či mám určený bôľ a či slasti žiar,",
                            "či jasné dni, či úzkosti, kým uzriem Jeho tvár."
                        ],
                        [
                            "REF.: Ale komu uveril som, viem..."
                        ],
                        [
                            "5. Ja neviem, či v čas poludnia, či nocou príde Pán,",
                            "či s Ním ísť smrti dolinou, či tu Ho vítať mám."
                        ],
                        [
                            "REF.: Ale komu uveril som, viem..."
                        ]
                    ]
                },
                {
                    "name": "Som Boží syn",
                    "number": 228,
                    "lang": "sk",
                    "url": "som-bozi-syn",
                    "author": "",
                    "verses": [
                        [
                            "1. Som Boží syn, v tom chlúbu mám, kto sa mi v šťastí vyrovná? ",
                            "Ó, ja som v Kristu bohatý, mám blaho čo sa nestratí.",
                            "/: Ó, Ježišu, Ty´s poklad môj, chcem celým srdcom byť len Tvoj! :/",
                            " ",
                            "2. Som Boží syn, niet väčšia slasť, než pre večnú sa zrodiť vlasť",
                            "a večné mať v nej dedičstvo, zvať svojím to, čo Kristovo.",
                            "/: Ó, Ježišu, Tys´ vekov Pán ja v Tebe brata svojho mám. :/"
                        ],
                        [
                            "3. Som Boží syn, smiem heslo mať a na štít svoj ho napísať. ",
                            "V tom hesle  hriech smiem premáhať, bo víťazstvo mi Pán chce dať.",
                            "/: Ó, Ježišu, Ty prameň síl si aj mne v Sebe otvoril. :/"
                        ],
                        [
                            "4. Som Boží syn, to šepká mi šum borovíc, kvet voňavý i žblnkot vôd,",
                            "spev slávika, svit diaľnych hviezd keď zabliká.",
                            "/: Ó, Ježišu, už bronie deň, keď láska Tvoja zmení zem. :/"
                        ]
                    ]
                },
                {
                    "name": "Raj zasľúbil Boh",
                    "number": 229,
                    "lang": "sk",
                    "url": "raj-zaslubil-boh",
                    "author": "",
                    "verses": [
                        [
                            "1. Raj zasľúbil Boh slávny nám, ó, šťastie! Ó, šťastie! ",
                            "Hriech a zlo nemá miesto tam, ó šťastie! Ó, šťastie!",
                            "Tam spevy znejú anjelské, tón harfy, žalmy nebeské.",
                            "Ctia meno Božie nadzemské.  ó šťastie! Ó, šťastie!"
                        ],
                        [
                            "2. Tam nevojde smrť, nestriedmosť, nie, oj nie!",
                            "Nie, oj nie! Nič pôsobiace ohyzdnosť, nie, oj, nie!",
                            "Nie, oj, nie! Kto v Ježišovej krvi v čas tu  nemá",
                            "rúcho zbielené, ten nesmie v slávu neba raz,",
                            "nie, oj, nie! Nie, oj, nie!"
                        ],
                        [
                            "3. Nás všetkých kliatba stíhala určite, určite, však ",
                            "láska milosť získala, určite, určite. Prv korunu sme ",
                            "stratili, no hriechy keď sú obmyté, nám vrátil ju Pán",
                            "premilý určite, určite."
                        ],
                        [
                            "4. Keď s Ježišom sme spojení naozaj, naozaj, nás Otec ",
                            "slávou odmení, naozaj, naozaj. Čas milosti však pominie, ",
                            "ó, spásu prijať nemeškaj. Kto spozdí sa, ten zahynie naozaj,",
                            "naozaj."
                        ]
                    ]
                },
                {
                    "name": "Naša pomoc je len z Teba",
                    "number": 230,
                    "lang": "sk",
                    "url": "nasa-pomoc-je-len-z-teba",
                    "author": "",
                    "verses": [
                        [
                            "1. Naša pomoc je len z Teba, Stvoriteľu zeme, neba, ",
                            "ovládaš vôd hlbiny, v skutkoch svojich predivný.      ",
                            " ",
                            "2. Každé hnutie máme z Teba, silu, dych i čo nám treba.",
                            "Ak Ty stiahneš ruku späť, v prach sa zrúti celý svet."
                        ],
                        [
                            "3. Ty však verný si, ó, Pane, Tvoja milosť neprestane,",
                            "raduje sa v nás duch náš, samých že nás nenecháš."
                        ],
                        [
                            "4. V neprístupnom svetle bývaš, ale Tvoja dobrotivá ",
                            "ruka všetko tvorstvo, má, Otče náš milostivý."
                        ]
                    ]
                },
                {
                    "name": "Lásko večná",
                    "number": 231,
                    "lang": "sk",
                    "url": "lasko-vecna",
                    "author": "",
                    "verses": [
                        [
                            "1. Lásko večná, čistá, Ježišu môj, nádejo ty istá len vždy",
                            "pri mne stoj! Keď súžba, boj rozrýva pokoj, daj útechu ",
                            "duši, myseľ upokoj! Ó, Jezu milý, nádej moja, priveď šťastne ",
                            "k cieľu, do pokoja!"
                        ],
                        [
                            "2. Lásko večná, čistá, Ježišu môj, útecho ty istá, len vždy pri mne ",
                            "stoj! Žiaľ, bôľ, neresť, uč tichúčko niesť, ráč ma v blaho ",
                            "svoje milostne uviesť, kde žiadne boje, kde žiaden hriech, kde ",
                            "radosti zdroje, blažený smiech!"
                        ],
                        [
                            "3. Lásko večná, čistá, Ježišu môj, pomoc vždycky istá, ó, len ",
                            "pri mne stoj! Rád nechám svet, bo v ňom blaha niet, ó, Darca",
                            "života, k Sebe ma priveď; ta k trónu slávy, v ríšu nebies, ta, ",
                            "kde pokoj pravý a večný ples!"
                        ]
                    ]
                },
                {
                    "name": "Duša, ó, nič sa neľakaj",
                    "number": 232,
                    "lang": "sk",
                    "url": "dusa-o-nic-sa-nelakaj",
                    "author": "",
                    "verses": [
                        [
                            "1. Duša, ó, nič sa neľakaj, nad tebou bdie tvoj Pán. Na Neho ",
                            "sa vždy sa spoliehaj, nad tebou bdie tvoj Pán."
                        ],
                        [
                            "REF.: Nad tebou bdie tvoj Pán, po celý deň tvoj riadi krok,",
                            "nad tebou bdie On sám, verný a mocný Pán."
                        ],
                        [
                            "2. Zo všetkých strán keď hrozí boj, posilní ťa tvoj Pán,",
                            "utíši každý nepokoj, posilní ťa tvoj Pán."
                        ],
                        [
                            "REF.: Nad tebou bdie tvoj Pán..."
                        ],
                        [
                            "3. Všetko ti dáva v pravý čas láskavý nebies Pán,",
                            "modlitieb tvojich čuje hlas láskavý nebies Pán."
                        ],
                        [
                            "REF.: Nad tebou bdie tvoj Pán..."
                        ],
                        [
                            "4. A keď raz príde smrti tieň, prevedie ťa tvoj Pán,",
                            "ta, kde ti svitne večný deň, prevedie ťa tvoj Pán."
                        ],
                        [
                            "REF.: Nad tebou bdie tvoj Pán..."
                        ]
                    ]
                },
                {
                    "name": "Vpred, volá Kristus",
                    "number": 233,
                    "lang": "sk",
                    "url": "vpred-vola-kristus",
                    "author": "",
                    "verses": [
                        [
                            "1. Vpred, volá Kristus na ľud Svoj, vpred za mnou,",
                            "húf môj malý, daj svetu výhosť, pri mne stoj, buď ",
                            "v ťažkých bojoch stály. Mňa ako Vodcu nasleduj",
                            "a zvodom diabla odporuj."
                        ],
                        [
                            "2. Ja svetlo som a svätými môj život darmi svieti. ",
                            "Von z temnej hriechu doliny chcem vyviesť svetla ",
                            "deti a každého, kto z Boha je, vpred vedú moje šľapaje."
                        ],
                        [
                            "3. Keď vy ste mdlí, Ja vpredu som a za vás v boji stojím, ",
                            "Ja dokonám, som Víťazom a vaše rany zhojím, len neverný ",
                            "sa vracia späť, keď Vodca pevne kráča vpred."
                        ],
                        [
                            "4. Kto zradí Ma, by zachoval si dušu, ten ju stratí, no kto ju",
                            "za mňa v obeť dal, Boh v sláve mu ju vráti, keď za Mnou  ",
                            "nenesieš svoj kríž, či Moje meno netupíš?"
                        ],
                        [
                            "5. Nuž k láskavému Pánovi aj my sa verne znajme, kríž",
                            "pre Neho niesť hotoví vždy za výsadu majme. Len dbalí ",
                            "Božích príkazov vziať majú palmy víťazov."
                        ]
                    ]
                },
                {
                    "name": "Keď sa minie tento svet",
                    "number": 234,
                    "lang": "sk",
                    "url": "ked-sa-minie-tento-svet",
                    "author": "",
                    "verses": [
                        [
                            "1. Keď sa minie tento svet, slnko nebudeme zrieť ",
                            "a ja budem s Kristom tam, všetko bude známe nám. ",
                            "Spoznám svoju podlžnosť za ten lásky Božej skvost."
                        ],
                        [
                            "2. K trónu Tvojej milosti v rúchu večnej svätosti",
                            "keď ma pozveš, by som zrel Tvojej slávy plný diel, ",
                            "spoznám svoju podlžnosť za ten lásky Božej skvost."
                        ],
                        [
                            "3. S harfami až zlatými, s chválospevmi rajskými ",
                            "anjelský zbor uvidím, vtedy plne pochopím: spoznám",
                            "svoju podlžnosť za ten lásky Božej skvost."
                        ]
                    ]
                },
                {
                    "name": "Pane, v kríža blízkosti záchrana je moja",
                    "number": 235,
                    "lang": "sk",
                    "url": "pane-v-kriza-blizkosti-zachrana-je-moja",
                    "author": "",
                    "verses": [
                        [
                            "1. Pane, v kríža blízkosti záchrana je moja. ",
                            "Tam sa v zdroji milosti rany hriechu zhoja.      "
                        ],
                        [
                            "REF.: V kríži len, v kríži len, všetka moja sláva, ",
                            "cestou k Tomu, ktorý mi život z kríža dáva."
                        ],
                        [
                            "2. Láska Božia pod krížom raz ma v biede našla, ",
                            "presvietila srdce mi, hrôza noci zašla."
                        ],
                        [
                            "REF.: V kríži len..."
                        ],
                        [
                            "3. Spasiteľu, spod kríža nedaj mi sa vzdialiť,",
                            "v Jeho tôni uč ma žiť, Tvoju obeť chváliť."
                        ],
                        [
                            "REF.: V kríži len..."
                        ],
                        [
                            "4. Blízko kríža zostať chcem, plný vďaky, viery,",
                            "prv než v jas ma dovedieš, čomu nieto miery."
                        ],
                        [
                            "REF.: V kríži len..."
                        ]
                    ]
                },
                {
                    "name": "Teš sa v Bohu",
                    "number": 236,
                    "lang": "sk",
                    "url": "tes-sa-v-bohu",
                    "author": "",
                    "verses": [
                        [
                            "1. Teš sa v Bohu, ó, duša, spievaj jemu vďačne! Bo On ",
                            "za dietko ťa má, miluje srdečne; dáva všetky potreby, ",
                            "vždy ťa pred zlým chráni, na zemi i na nebi prichystal ti stany."
                        ],
                        [
                            "2. Ja na Bohu všetko mám, po čom srdce túži; On mi ",
                            "všetko dáva sám čo mi k dobru slúži: Chlieb pre dočasné telo,",
                            "slovo mojej duši, a či mi Ho, nad všetko milovať nesluší?"
                        ],
                        [
                            "3. A keď Ho tam milujem, ako Otca svojho, a čo dieťa obcujem ",
                            "vždy dľa slova Jeho: tú moc Božej milosti v svojom srdci cítim, ",
                            "pokojom tým z výsosti, nebeským sa sýtim."
                        ],
                        [
                            "4. A keď ma On ráči viesť, kto mi škodiť môže? Veď On vždy ",
                            "pre svoju česť, v všetkom mi pomôže. Nech sa ten svet plný múk ",
                            "vztekle na mňa vrhne, z Božích všemocných ma rúk nikto nevytrhne."
                        ]
                    ]
                },
                {
                    "name": "Veď ma, mocný Hospodine",
                    "number": 237,
                    "lang": "sk",
                    "url": "ved-ma-mocny-hospodine",
                    "author": "",
                    "verses": [
                        [
                            "1. Veď ma, mocný Hospodine, púšťou sveta k nebesám ",
                            "slabý som, Ty Všemohúci, drž ma, nech viac neklesám. ",
                            "Mannou z neba, mannou z neba, mannou z neba, živ ma, ",
                            "viacej nežiadam, živ ma viacej nežiadam. ",
                            " ",
                            "2. Krištáľové zjav mi žriedlo, z ktorého liek pramení;",
                            "Tvoj stĺp nech mi razí cestu v mraku ohňa znamení. Ó,",
                            "Ty mocný, ó, Ty mocný, ó, Ty mocný buď mi štítom ",
                            "prepevným, buď mi štítom prepevným."
                        ],
                        [
                            "3. A keď ku Jordánu prídem, opustím vlasť pozemskú, ",
                            "Ty ma šťastne jeho prúdmi preveď v radosť nebeskú; tam",
                            "Ti chvály, tam Ti chvály, tam Ti chvály spievať budem na veky, spievať ",
                            "budem na veky."
                        ],
                        [
                            "Úzkosti a súženia"
                        ]
                    ]
                },
                {
                    "name": "Keby som nemal Teba",
                    "number": 238,
                    "lang": "sk",
                    "url": "keby-som-nemal-teba",
                    "author": "",
                    "verses": [
                        [
                            "1. Keby  som nemal Teba, svojho Pána, spásy zdroj v krvi,",
                            "skrýšu v Tvojich ranách, kde by som našiel útočište isté,",
                            "Ježišu Kriste?"
                        ],
                        [
                            "2. V súžení, v žiali ktože privinie ma? Odpočinutia duša ",
                            "inde nemá. Len Ty si, Pane, moja pevná skala, bezpečná, stála. "
                        ],
                        [
                            "3. Myšlienky Tvoje, večné, bez skonania, milosti lásky plné, ",
                            "zhovievania, koria v prach dušu v prostried žitia bojov ",
                            "veľkosťou svojou. "
                        ],
                        [
                            "4. Dobre viem, že som z hriešnych najhriešnejší, za mňa že´s muky ",
                            "trpel, Najsvätejší. Denne čo beriem, je len milosť samá, ",
                            "nebeská manna."
                        ],
                        [
                            "5. Ježišu, keby nebol si ma hľadal, milosti Tvojej nebol ",
                            "by som žiadal. Svetom som blúdil, Ty´s ma našiel v biede, ",
                            "Duch Tvoj ma vedie."
                        ]
                    ]
                },
                {
                    "name": "Keď búrky, vetry zúria",
                    "number": 239,
                    "lang": "sk",
                    "url": "ked-burky-vetry-zuria",
                    "author": "",
                    "verses": [
                        [
                            "1. Keď i búrky, vetry zúria kol teba, keď si strachom bez vlády",
                            "a bez seba, dobrodenia sčítaj, čo stali sa ti, zadivíš sa aký´s ",
                            "veľmi bohatý."
                        ],
                        [
                            "REF.: Sčítaj dobro Bohom činené, na životnú dráhu zložené.",
                            "Dobrodenia, čo stali sa ti, zadivíš sa aký´s veľmi bohatý."
                        ],
                        [
                            "2. Tlačí ťa až k zemi ťarcha starostí, kríž tvoj zdá sa k nezneseniu ",
                            "v tvrdosti; dobrodenia sčítaj, zmizne pochybnosť, s ľahkým srdcom",
                            "ponesie ťa zmužilosť.    "
                        ],
                        [
                            "REF.: Sčítaj dobro Bohom činené..."
                        ],
                        [
                            "3. Zdá sa, že svet žiari darmi krajšími. A čo mesto s ulicami ",
                            "zlatými? Dobrodenia sčítaj, márnosť uhynie, v nebi tvoja ",
                            "odmena ťa  neminie."
                        ],
                        [
                            "REF.: Sčítaj dobro Bohom činené..."
                        ],
                        [
                            "4. Keď i mnohú ranu v boji utŕžiš, netrať nádej s tebou ide ",
                            "Pán Ježiš. Dobré veci sčítaj, anjel prichádza vzniesť ťa ta,",
                            "kde domov tvoj sa nachádza."
                        ],
                        [
                            "REF.: Sčítaj dobro Bohom činené..."
                        ]
                    ]
                },
                {
                    "name": "Či nájde srdce mi pokoj?",
                    "number": 240,
                    "lang": "sk",
                    "url": "ci-najde-srdce-mi-pokoj",
                    "author": "",
                    "verses": [
                        [
                            "1. Či nájde srdce mi pokoj? Či sa skončí ten smutný boj?",
                            "Ponáhľam Ježišu k Tebe. Ty mne môžeš pomôcť, Ty ",
                            "mne môžeš pomôcť! Jezu v tento čas."
                        ],
                        [
                            "2. Spytuj a skús ma Bože môj, čuj môj plač, a zbav ma",
                            "ťarchy, v biede veziaceho ochráň, vytrhni zo všetkého ",
                            "trápenia kríža! Jezu v tento čas."
                        ],
                        [
                            "3. Vrhám aj už modly svoje, samému Tebe slúžiť chcem,",
                            "milosť Tvoja v mne sa vzmáha. len Ducha svätého, len v ",
                            "Jeho vždy moci. Jezu v tento čas."
                        ]
                    ]
                },
                {
                    "name": "Ó,  vzývaj ma!",
                    "number": 241,
                    "lang": "sk",
                    "url": "o-vzyvaj-ma",
                    "author": "",
                    "verses": [
                        [
                            "4. Môj Jezu splň slovo svoje, Ty pravdivý a verný si, umývaj",
                            "ma v krvi Svojej; Tvoja spása je mnohá,  zdarma ju dať chceš!",
                            "Jezu v tento čas.",
                            "   ",
                            "1. Ó, vzývaj ma! Pán všetkým dáva hlásať. Ó, vzývaj ma ",
                            "v súžení zlom! /: Zachránim rád ťa, nad čím budeš jasať. ",
                            "Ó, vzývaj ma, ja Boh tvoj som! :/"
                        ],
                        [
                            "2. Ó, vzývaj Ho, kým tvoji nepriatelia nezaujmú ti zem",
                            "spod nôh. /: Nedes sa hrozby, strach pusť zo zreteľa!",
                            "Ó, vzývaj Ho, On tvoj je Boh.:/"
                        ],
                        [
                            "3. Dôveruj mi! Som po tvojom vždy boku! Neľakaj sa, ",
                            "ja Boh som tvoj! /: Nenechám svojich na žiadnom ich",
                            "kroku, len smelo zver mi život svoj! :/"
                        ],
                        [
                            "4. Ó, vzývaj Ho! On neopustí teba, že ľúbi ťa, nezabúdaj!",
                            "/: Dedičstvo krásne v slávnej ríši neba pripravil ti. Ó,",
                            "česť mu vzdaj. :/"
                        ],
                        [
                            "5. Vzdaj Bohu česť! On život dal aj tebe, chváliť Ho vždy, ",
                            "patrí tu nám. /: Zasľúbil Boh len vďačným deťom nebe,",
                            "ony len smú vojsť v slávy stan. :/"
                        ]
                    ]
                },
                {
                    "name": "V zármutku, ťažkom súžení",
                    "number": 242,
                    "lang": "sk",
                    "url": "v-zarmutku-tazkom-suzeni",
                    "author": "",
                    "verses": [
                        [
                            "1. V zármutku, ťažkom súžení deň čo deň v strastiach plynie,",
                            "nikde už nezrieť premeny, srdce keď žiaľom hynie, pýta sa Pán,",
                            "ó, čuj ten hlas, pýta sa Pán, ó, čuj ten hlas: Miluješ ma i v tento ",
                            "čas? Miluješ ma i v tento čas?"
                        ],
                        [
                            "2. Zavrhnutý si od sveta? Pozri sa nad oblaky! Rajská slasť zhora ",
                            "prilieta, pretŕhajú sa mraky. Vraví ti Pán, ó, hlás ten čuj: Vraví ti Pán, ",
                            "ó, hlas ten čuj: Milujem ťa, tak dôveruj! Milujem ťa, tak dôveruj!"
                        ]
                    ]
                },
                {
                    "name": "Nechcem reptať ani žialiť",
                    "number": 243,
                    "lang": "sk",
                    "url": "nechcem-reptat-ani-zialit",
                    "author": "",
                    "verses": [
                        [
                            "1. Nechcem reptať ani žialiť, že kríž denne musím niesť, ",
                            "Pán mi nim chce k blahu slúžiť, buď Mu zato večná česť."
                        ],
                        [
                            "REF.: On tiež kráčal utrpením, užil horkosť všetkých bied,",
                            "len kto s krížom ide za Ním, uzrie nový, krásny svet."
                        ],
                        [
                            "2. Dietky Božie v svete šírom cestou kríža putujú, v stálom",
                            "boji s hriecha vírom svojho Vodcu sledujú."
                        ],
                        [
                            "REF.: On tiež kráčal utrpením..."
                        ],
                        [
                            "3. Môj Spasiteľ privoláva: „Nech ťa kríž tvoj neľaká!",
                            "Trpiaceho očakáva sláva večná veliká!“"
                        ],
                        [
                            "REF.: On tiež kráčal utrpením..."
                        ],
                        [
                            "4. Pri potoku krištáľovom žijú mnohí po boji. V krátkom",
                            "čase, milým slovom i mňa Pán k ním pripojí."
                        ],
                        [
                            "REF.: On tiež kráčal utrpením..."
                        ]
                    ]
                },
                {
                    "name": "Ó, žije Vykupiteľ môj",
                    "number": 244,
                    "lang": "sk",
                    "url": "o-zije-vykupitel-moj",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, žije Vykupiteľ môj, mne miesto v nebi prichystal.",
                            "Keď skončí sa môj zemský boj, On korunu mi v sláve dá."
                        ],
                        [
                            "REF.: Keď svet ma trápi, sužuje a cestu k nebu sťažuje,",
                            "/: mne novú silu nádej dá: Pán skoro domov pozve ma. :/"
                        ],
                        [
                            "2. Ja dôveru v Ňom pevnú mám, môj hriech krv Jeho obmyla.",
                            "Vlasť večná uňho čaká tam, kde Jeho hlas ma povolá."
                        ],
                        [
                            "REF.: Keď svet ma trápi..."
                        ],
                        [
                            "3. Div lásky, kto ho pochopí? Ja užasnutý hľadím naň,",
                            "že za mňa na kríž potupy šiel zomrieť z lásky nebies Pán."
                        ],
                        [
                            "REF.: Keď svet ma trápi..."
                        ],
                        [
                            "4. Už skoro príde Ježiš, viem. Čas letí, koniec blíži sa až ",
                            "svitne nádherný ten deň, keď v Jeho sláve zaplesám."
                        ],
                        [
                            "REF.: Keď svet ma trápi..."
                        ]
                    ]
                },
                {
                    "name": "Do hlbín padám",
                    "number": 245,
                    "lang": "sk",
                    "url": "do-hlbin-padam",
                    "author": "",
                    "verses": [
                        [
                            "1. Do hlbín padám, do tmy súženia, nikde už v svete",
                            "nieto spasenia. Za blahom zašlým márne pozerám, ",
                            "po ľuďom márne náruč vystieram, u Teba už len,",
                            "Jezu pomoc mám.    "
                        ],
                        [
                            "2. Tvoja krv svätá i mňa obmyla, moje tiež hriechy nad ",
                            "sneh zbielila. Podávaš ruku klincom ranenú, Ty i dnes",
                            "môžeš dušu zmorenú potešiť, uviesť v ríšu blaženú."
                        ],
                        [
                            "3. Vyveď ma zo tmy k svetlu nádeje, Tvojho nech Slova ",
                            "moc sa zaskveje. Noci a žiaľne chvíle trápenia nech sa mi ",
                            "v slávne ráno premenia, uzriem v nich slávu Tvojho spasenia. "
                        ],
                        [
                            "4. Na teba vždy sa pevne spolieham, naplníš sľuby, veď si ",
                            "pravda sám. Dokonals´ za mňa, ešte dokonáš, ach, veď Ty ",
                            "dobre biedu moju znáš, nesmiernu lásku k svojmu ľudu máš."
                        ]
                    ]
                },
                {
                    "name": "Nedaj zviesť sa hriechu",
                    "number": 246,
                    "lang": "sk",
                    "url": "nedaj-zviest-sa-hriechu",
                    "author": "",
                    "verses": [
                        [
                            "1. Nedaj zviesť sa hriechu, keď vášní znie hlas, kým zbadáš,",
                            "zdolá ťa, si v okovách zas. Brat môj, odolávaj v pokušení zlom,",
                            "hľaď vždy na Ježiša, spása je len v Ňom."
                        ],
                        [
                            "REF.: Spasiteľ ťa čuje, teší, ochraňuje. Dôveruj len Jemu,",
                            "Vodcu vernému!"
                        ],
                        [
                            "2. Spoločnosť zlú opusť, nepravú tiež reč, nech ťa z úzkej cesty ",
                            "neodvedú preč. Hľadaj pravdu Božiu, daj sa viesť len jej úzkou ",
                            "cestou žitia, svetlo máš len v nej. "
                        ],
                        [
                            "REF.: Spasiteľ ťa čuje..."
                        ],
                        [
                            "3. Tým, čo zvíťazili, korunu dá Pán. Nepriateľ už ničím neuškodí ",
                            "nám. Nepovoľuj hriechu, príval zvodov zlom, ver vždy Ježišovi, ",
                            "spása je len v Ňom."
                        ],
                        [
                            "REF.: Spasiteľ ťa čuje..."
                        ]
                    ]
                },
                {
                    "name": "Ľude Boží, Božích právd praví milovníci",
                    "number": 247,
                    "lang": "sk",
                    "url": "lude-bozi-bozich-pravd-pravi-milovnici",
                    "author": "",
                    "verses": [
                        [
                            "1. Ľude Boží, Božích právd praví milovníci, pre Kristovo",
                            "učenie útlak znášajúci, potešenie čerpajte v Jeho svätých ",
                            "sľuboch, by ste boli stálymi v pokušeniach, v súdoch. "
                        ],
                        [
                            "2. Nech vám slúži príkladom, Jeho život svätý, nebeskej ",
                            "sa slávy vzdal, aby náš dlh splatil, núdzu, bolesť, chudobu ",
                            "- prijal dobrovoľne, z hriešnikov by urobil Božie deti voľné."
                        ],
                        [
                            "3. Nebojme sa neverných a ich všetkej zloby klebiet, hany, ",
                            "trápenia, ktoré chcú nám robiť. Ak raz máme s Kristom žiť,",
                            "bývať vo večnosti, musíme zniesť pohanu od horkosti prostí."
                        ],
                        [
                            "4. Hoc by naše imanie pre vieru nám vzali, stokrát väčšiu ",
                            "odmenu má Boh v sľuboch stály. Veď kto preňho prijať vie ",
                            "časné škody, straty, vo večnosti náhradu trvalú mu vráti."
                        ],
                        [
                            "5. Buďme verní na ceste, kde nás Kristus vedie, držme",
                            "pevné vyznanie napriek mnohej biede, aj keď by to prinieslo ",
                            "bolesť utrpenia, všetky rany pre Pána v slasti zdroj sa zmenia."
                        ],
                        [
                            "6. Nielen v Neho uveriť od Boha nám dané, no i trpieť pre ",
                            "Jeho meno požehnané, Jemu kto sa podobá v borbe, utrpení,",
                            "bude v nebi vedno s Ním večne oslávený."
                        ]
                    ]
                },
                {
                    "name": "Na búrnom mori",
                    "number": 248,
                    "lang": "sk",
                    "url": "na-burnom-mori",
                    "author": "",
                    "verses": [
                        [
                            "1. Na búrnom mori keď sa kýva žitia loď, dušu strach morí ",
                            "pred prívalom vôd, zakrýva jej pochýb noc Ježišovu prítomnosť, ",
                            "zúfalý keď zo srdca výkrik vychádza:"
                        ],
                        [
                            "REF.: Ó, Ty, Majstre nebeský, zachovaj nás, hynieme, ",
                            "ku kormidlu zastaň si, lebo tonieme."
                        ],
                        [
                            "2. Ó, máloverný, prečože sa bojíte? Hľadiac na vlny mňa ",
                            "nevidíte? Kde som ja, tam žiadnu loď nepohltí priepasť vôd. ",
                            "Ja som dal i búrky čas, by som skúšal vás.  "
                        ],
                        [
                            "REF.: Ó, Ty, Majstre nebeský..."
                        ],
                        [
                            "3. Keď On pohrozil búrke a zlej víchrici, odrazu zjavil sa div ",
                            "divúci: nastalo hneď po búrke utíšenie veliké, loď cieľ mohla ",
                            "dostihnúť, do prístavu vplať. "
                        ],
                        [
                            "REF.: Ó, Ty, Majstre nebeský..."
                        ],
                        [
                            "4. Úžasom jatí ctíme Tvoju velebu, Kto splní jak Ty každú ",
                            "potrebu? Ty si všemohúci Pán, čo sám velí búrkam, tmám.",
                            "Prijmi chválu zo srdca, Ty náš Ochranca. "
                        ],
                        [
                            "REF.: Ó, Ty, Majstre nebeský..."
                        ]
                    ]
                },
                {
                    "name": "Boh je s nami",
                    "number": 249,
                    "lang": "sk",
                    "url": "boh-je-s-nami",
                    "author": "",
                    "verses": [
                        [
                            "1. Boh je s nami, Boh je s nami, znel v6dy svedkov Boží hlas, ",
                            "v prácach, v krivdách, v bojovaní Boh ich viedol v každý čas.",
                            "Hoc sa chveli, nezapreli, ale každý spieval rád: „Boh je s nami,",
                            "Boh je s nami, Kristus musí kraľovať!“",
                            "  ",
                            "2. Boh je s nami, Boh je s nami, šepkali ich bôľne rty, pre Krista keď ",
                            "vydávali na smrť svoje životy. Poznával ich vernosť každý, ako sudca ",
                            "tak i kat: „Boh je s nimi, Boh je s nimi, Kristus bude kraľovať.“"
                        ],
                        [
                            "3. Veľký odkaz od nich máme, po ich stopách kráčať vpred, víťazne ísť ",
                            "k nebies bráne. tvárou tvár tam Pána zrieť. Zaznej, zaznej zvučná pieseň,",
                            "spievajme ju sestra, brat: „Boh je s nami, Boh je s nami, Kristus musí kraľovať.“   "
                        ],
                        [
                            "4. Rozhlásme zvesť o spasení, nech sa dozvie celý svet, hriech, že je už ",
                            "odpustený, odsúdenia pre nás niet. Prídi, prídi, slávna doba, by sme mohli ",
                            "zavolať: „Boh je s nami,, Boh je s nami, Kristus prišiel kraľovať!“"
                        ]
                    ]
                },
                {
                    "name": "Blažený kto premohol lesť",
                    "number": 250,
                    "lang": "sk",
                    "url": "blazeny-kto-premohol-lest",
                    "author": "",
                    "verses": [
                        [
                            "1. Blažený kto premohol lesť, zvody satana, ",
                            "kto veselo smie volať: mne je milosť daná!",
                            "Raz koruna zažiari aj  na jeho hlave. Šťastný ",
                            "kto Bohu verí, on skvieť sa má v sláve."
                        ],
                        [
                            "2. Blažený kto premohol každú bázeň, starosť;",
                            "na srdci Ježišovom našiel potechy dosť. Ó, bárs ",
                            "by každý spiechal v objem Spasiteľov, ta, kde ",
                            "raz zísť sa máme, rodina víťazov!"
                        ],
                        [
                            "3. Blažený kto premohol smrti moc desivú, ",
                            "kto v ranách Ježišových zložil nádej živú. ",
                            "Ten za bránami raja vzbudí sa radostne, kde ",
                            "navždy už zatíchli zástony žalostné. "
                        ],
                        [
                            "4. Blažený kto premohol márne túhy sveta,",
                            "mysľou kto ustavične v stán nebies zalieta. ",
                            "Ó, až ten raz zastane pred svojim Ježišom, ",
                            "tam pozná, komu slúžil, a všetko stíchne v ňom!"
                        ]
                    ]
                },
                {
                    "name": "Ó, čo by sme sa báli",
                    "number": 251,
                    "lang": "sk",
                    "url": "o-co-by-sme-sa-bali",
                    "author": "",
                    "verses": [
                        [
                            "Ó, čo by sme sa báli, keď Ježiš s nami je,",
                            "On bremeno dňa ťažké nám znášať pomôže.",
                            "Pán k víťazstvám nás vedie a cestu razí nám",
                            "i v najkrutejšom boji je Vodcom svojich sám."
                        ],
                        [
                            "Ó, čo by sme sa báli, keď svätý je náš cieľ,",
                            "štít pravda, láska zdobí, nás vedie Spasiteľ.",
                            "Oj, šťastne za Ním kráčať či mier je a či boj!",
                            "Pán v nebi zhojí rany, tam stíší nepokoj."
                        ],
                        [
                            "Tak smelo, bratia, sestry, sa k dielu postavme ",
                            "a pod práporom Krista hlas k chvále nalaďme.",
                            "Hoc maličké sme stádo, Pán stojí na čele,",
                            "nuž zložme každú bázeň a poďme vesele."
                        ],
                        [
                            "Pán Ježiš Kristus iste raz bude kraľovať",
                            "a každý jazyk chválu, česť Jeho zvestovať.",
                            "Nuž zvime k Nemu všetkých dom má sa naplniť,",
                            "kto vierou k Nemu príde, ten večne bude žiť. "
                        ]
                    ]
                },
                {
                    "name": "Daj Pán, by sme verní zostali",
                    "number": 252,
                    "lang": "sk",
                    "url": "daj-pan-by-sme-verni-zostali",
                    "author": "",
                    "verses": [
                        [
                            "1. Daj Pán, by sme verní zostali, pred trónom raz ",
                            "Jeho zlatým, pred rytierstvom Božím, svätým veniec",
                            "víťazov sme dostali."
                        ],
                        [
                            "REF.: Verne zotrvaj! Verný zostaň! Bratu sestro, ",
                            "verne zotrvaj! Verne zotrvaj! Verný zostaň! Na ",
                            "odmenu večnú pamätaj!  "
                        ],
                        [
                            "2. Úzka je tá cesta spasenia, šťastný kto z nej nevykročí,",
                            "k nebu upiera vždy oči, nezablúdi v noci súženia."
                        ],
                        [
                            "REF.: Verne zotrvaj! Verný zostaň..."
                        ],
                        [
                            "3. Nech ťa zloba sveta neľaká, bolesť z cesty nevyrazí. ",
                            "Kto sa bojí nezvíťazí. Sláva zbabelého nečaká."
                        ],
                        [
                            "REF.: Verne zotrvaj! Verný zostaň..."
                        ],
                        [
                            "4. Vzhliadni k slávnym nebies výšinám. Hľa, tam ",
                            "Otec mocný býva, s láskou na teba sa díva. Pomocníkom ",
                            "verným On je nám."
                        ],
                        [
                            "REF.: Verne zotrvaj! Verný zostaň..."
                        ]
                    ]
                },
                {
                    "name": "Len lístie máš",
                    "number": 253,
                    "lang": "sk",
                    "url": "len-listie-mas",
                    "author": "",
                    "verses": [
                        [
                            "1. Len lístie máš, to málo je! Pán žiada ovocie. ",
                            "Tak málo si ho miloval, tak malú vernosť dokázal, ",
                            "že nič si nezískal! Len lístie máš! Len lístie máš."
                        ],
                        [
                            "2. Len lístie máš? Kde ovocie je tvojho života?",
                            "Boh dlho čakal, presvätý, snáď zvolá dnes buď vyťatý! ",
                            "Keď iba lístie máš! Len lístie máš! Len lístie máš!"
                        ],
                        [
                            "3. Len lístie máš? Oj, hanba, žiaľ a život uniká! Svoj ",
                            "čas si hriešne premrhal, vstup do večnosti zameškal ",
                            "a hrivny zakopal. Len lístie máš! Len lístie máš.  "
                        ],
                        [
                            "4. Len lístie máš! Či tak to chceš sa pred súd postaviť?",
                            "Hľa, hrozná páľa, plameňa je plevám navždy určená!",
                            "Ó, učiň pokánie! Len lístie máš! Len lístie máš!"
                        ]
                    ]
                },
                {
                    "name": "Radosť blažená, v nebi domov mám",
                    "number": 254,
                    "lang": "sk",
                    "url": "radost-blazena-v-nebi-domov-mam",
                    "author": "",
                    "verses": [
                        [
                            "1. Radosť blažená, v nebi domov mám, hriech môj ",
                            "Baránok obmyl krvou sám, večná záhuba už mi nehrozí, ",
                            "srdce Pánovi k nohám položím."
                        ],
                        [
                            "REF.: Radosť mám, v duši nadšenie, mám už v nebi spasenie. ",
                            "So mnou poď, ruku mi daj, spolu poďme v nebeský ten raj."
                        ],
                        [
                            "2. Cestou života domov putujem, z mesta Sodomy ",
                            "k nebu smerujem. Bežím dopredu v šťastnej radosti, ",
                            "Ježiš spasil ma z púhej milosti."
                        ],
                        [
                            " REF.: Radosť mám, v duši nadšenie..."
                        ],
                        [
                            "3. Vojská Kristove idú do boja proti hriechu a ",
                            "s Ním sa neboja, v sile Kristovej smú byť víťazi, ",
                            "útok diabolský môžu odraziť."
                        ],
                        [
                            "REF.: Radosť mám, v duši nadšenie..."
                        ],
                        [
                            "4. A keď v boji tom príde smrti deň, srdce dotlčie,",
                            "vtedy veriť smiem, že ma Ženích môj rukou prebitou",
                            "vezme  k domovu večných príbytkov."
                        ],
                        [
                            "REF.: Radosť mám, v duši nadšenie..."
                        ],
                        [
                            "5. Keď tam pred trónom stanem v nadšení, Pán ma ",
                            "korunou žitia odmení a k nej pripojí palmu víťaza, ",
                            "Hallelujah! Česť! Vďačne zajasám."
                        ],
                        [
                            "REF.: Radosť mám, v duši nadšenie..."
                        ]
                    ]
                },
                {
                    "name": "Je život ľudský",
                    "number": 255,
                    "lang": "sk",
                    "url": "je-zivot-ludsky",
                    "author": "",
                    "verses": [
                        [
                            "1. Je život ľudský na svete jak z rána rosa na kvete,",
                            "na ktorú slnko posvieti a rosa v paru uletí, a rosa v paru uletí."
                        ],
                        [
                            "2. Je život ako ruže kvet, raz uvädne a už ho niet; je ako tráva ",
                            "zelená pod ostrou kosou usychá, pod ostrou kosou usychá. "
                        ],
                        [
                            "3. Je život ako letný čas, len čo sa rozvil a už mráz mu kazí ",
                            "krásu deň, čo deň, je život ľudský ako sen, je život ľudský ako sen."
                        ],
                        [
                            "4. Ak život je sťa letný čas, nech pestrou krásou blaží nás;",
                            "a život dobre strávený naveky bude blažený! Naveky bude blažený!"
                        ]
                    ]
                },
                {
                    "name": "Pán je mocný",
                    "number": 256,
                    "lang": "sk",
                    "url": "pan-je-mocny",
                    "author": "",
                    "verses": [
                        [
                            "1. Pán je mocný ochraňovať dušu sebe oddanú bez úrazu, ",
                            "bez úhony previesť hrobu za bránu. Naňho spoliehaj sa smelo ",
                            "v každom kroku v každý čas. Jeho plnosť nemení sa, či je tma, ",
                            "či slnka jas."
                        ],
                        [
                            "REF.: Požehnaný Spasiteľu, veď ma, až kým u Teba ",
                            "privíta ma veniec žitia, Tvojej slávy veleba. "
                        ],
                        [
                            "2. Otec mu dal do rúk všetko, na zem hriešnu poslal Ho, aby hľadal ",
                            "vydedených, volal domov každého. On aj teba hľadá, volá, čuj hlas ",
                            "nebies domova, na Golgote k Tebe tiež sa skláňa láska Kristova. "
                        ],
                        [
                            "REF.: Požehnaný Spasiteľu, veď ma..."
                        ],
                        [
                            "3. Príde Kristus v sláve Otca a s Ním Jeho anjeli, zjaví pravých ",
                            "vyznávačov i tých, čo Ho zapreli. Vydaj svetlo, vyznaj pravdu ako ",
                            "svedok Ježišov, pominie svet a ty prejdeš k zboru večných víťazov."
                        ],
                        [
                            "REF.: Požehnaný Spasiteľu, veď ma..."
                        ]
                    ]
                },
                {
                    "name": "Zľutovníku milý",
                    "number": 259,
                    "lang": "sk",
                    "url": "zlutovniku-mily",
                    "author": "",
                    "verses": [
                        [
                            "Zľutovníku milý, Ježišu môj, nemám žiadnej sily a blíži sa boj!",
                            "Vždy húf väčší na mňa útočí, bez Tvojej pomoci ľahko ma zničí:",
                            "Ó, pomôž , Pane, hriech poraziť, v skúšobnej hodine daj zvíťaziť!"
                        ],
                        [
                            "V pancier spravednosti ma obliekaj, viac lásky, svätosti, silnej viery daj!",
                            "Žiadosti zlé, túžby telesné nech sú štítom viery vždy uhasené!",
                            "Ó, pomôž, Pane, hriech poraziť, v skúšobnej hodine daj zvíťaziť!"
                        ],
                        [
                            "Čo potrebné neviem, buď mi Radcom! Až idem sám, hyniem, buď mojím Vodcom!",
                            "Nemoce lieč, na cestu mi svieť, jasné brány neba kým nebudem zrieť!",
                            "Ó, pomôž, Pane, hriech poraziť, v skúšobnej hodine daj zvíťaziť."
                        ]
                    ]
                },
                {
                    "name": "Ku Tebe lne duša slabá",
                    "number": 258,
                    "lang": "sk",
                    "url": "ku-tebe-lne-dusa-slaba",
                    "author": "",
                    "verses": [
                        [
                            "1. Ku Tebe lne duša slabá, k útočišťu zomdlených. ",
                            "Trstinu Ty nedolomíš, tlejúci knôt nezhasíš. Keď aj ",
                            "srdce bôľom puká, v Tebe nájde stíšenie, Tvoja láska ",
                            "vzdych môj čuje, v skrytosti hoc iba znie."
                        ],
                        [
                            "2. Keď by sa mi mdlobách zdalo, žes´ ma navždy opustil,",
                            "predsa len sa k Tebe viniem, Tys´ mi skalou, zdrojom síl,",
                            "Ty to dielo ďalej konáš, čo si vo mne započal. Povedieš ma ",
                            "iste k cieľu, by som v boji vytrval. "
                        ]
                    ]
                },
                {
                    "name": "Hotoví sme všetci",
                    "number": 259,
                    "lang": "sk",
                    "url": "hotovi-sme-vsetci",
                    "author": "",
                    "verses": [
                        [
                            "1. Hotoví sme všetci prápor Krista niesť a so zbraňou Ducha slávne boje ",
                            "viesť za nebeskú ríšu a za Božiu česť. Nepoddáme sa po smrť!   "
                        ],
                        [
                            "REF.: Slávu, česť, slávu, česť, silu, moc, silu, moc, prijmi Pán,",
                            "prijmi Pán, teraz a až naveky! K Ježišovým čatám sa pridávame, ",
                            "radostne a s vierou v Kannán kráčame; po víťazstve blesk koruny",
                            "čakáme. Nepoddáme sa po smrť!"
                        ],
                        [
                            "2. V škole krížovej je naša príprava. Moc Ducha ku bojom silu podáva;",
                            "v nej smele tiahneme vždy von do boja. Nepoddáme sa po smrť!"
                        ],
                        [
                            "REF.: Slávu, česť, slávu..."
                        ],
                        [
                            "3. Neopustí Ježiš nás v ohni boja, prekazí, keď pád nám temnosti stroja, ",
                            "tak vesele jasáme: „Hallelujah. Nepoddáme sa po smrť!“ "
                        ],
                        [
                            "REF.: Slávu, česť, slávu..."
                        ],
                        [
                            "4. Po skončení borby radosť večitá v sálemských rovinách i nás uvíta.",
                            "Ó, tam srdcia samu rozkoš pocítia. Nepoddajme sa po smrť!"
                        ],
                        [
                            "REF.: Slávu, česť, slávu..."
                        ]
                    ]
                },
                {
                    "name": "Oblak svedkov chváli Pána",
                    "number": 260,
                    "lang": "sk",
                    "url": "oblak-svedkov-chvali-pana",
                    "author": "",
                    "verses": [
                        [
                            "1. Oblak svedkov chváli Pána, v nebies svätej radosti; ",
                            "pálma radosti im daná za odmenu stálosti: rozhodni sa, ",
                            "pristúp k ním, k zástupom tým nebeským! "
                        ],
                        [
                            "2. Vierou ten svet premáhali, a svet nebol hoden ich;",
                            "Spasiteľa vyznávali, On má zasľúbenie v nich. Rozhodni sa, ",
                            "pristúp k ním, k zástupom tým nebeským!"
                        ],
                        [
                            "3. Teraz sú v nebeskom stane Božou láskou poctení, hoc",
                            "prv putovali v hane a v tuzemskom trápení. Rozhodni sa,",
                            "pristúp k ním, k zástupom tým nebeským!"
                        ],
                        [
                            "4. I dnes svetom pohanení zástup svedkov putuje; zrak má ",
                            "k Bohu obrátený, znajúc, že ich miluje. Rozhodni sa, pristúp ",
                            "k ním, k zástupom tým nebeským!"
                        ],
                        [
                            "5. Ale blaho večné majú: odpustený je im hriech! Pána svojho ",
                            "lásku znajú. Ó, bys´ k ním obrátil beh! Rozhodni sa, pristúp k ",
                            "ním, k svedkom Krista blaženým! "
                        ]
                    ]
                },
                {
                    "name": "Tešte sa, tešte sa, spasení",
                    "number": 261,
                    "lang": "sk",
                    "url": "teste-sa-teste-sa-spaseni",
                    "author": "",
                    "verses": [
                        [
                            "1. Tešte sa, tešte sa, spasení, slávnu nám otvoril cestu Pán. ",
                            "Hviezdy lúč betlemskej na zemi vedie nás istotne k nebesám."
                        ],
                        [
                            "REF.: Do zeme slávnej tej vykročme v jednote! ",
                            "Ježiša láska nás dovedie, pieseň kde radosti večne znie."
                        ],
                        [
                            "2. Vôkol nás zhubca, lev blíži sa, nástrah a zvodov má arzenál,",
                            "s nami je pravica Ježiša, aby nás pred zhubou zachoval. "
                        ],
                        [
                            "REF.: Do zeme slávnej..."
                        ],
                        [
                            "3. Nesmierne zástupy spasených: proroci, martýri, svedkovia ",
                            "pred Božím oltárom v nadšení víťazným spevom nás oslovia. "
                        ],
                        [
                            "REF.: Do zeme slávnej..."
                        ]
                    ]
                },
                {
                    "name": "Bojuj dobrý boj!",
                    "number": 262,
                    "lang": "sk",
                    "url": "bojuj-dobry-boj",
                    "author": "",
                    "verses": [
                        [
                            "1. „Bojuj dobrý boj!“ Velí Vodca tvoj. Nehľadaj pokoja v svete, ",
                            "nemaj ľúbosť v Jeho kvete! Ten rýchle vädne, krása mu spadne.",
                            "„Bojuj dobrý boj!“   "
                        ],
                        [
                            "2. „Bojuj dobrý boj!“ Proti hriechu stoj! Žiadaj duchovné odenie, ",
                            "spravednosti oblečenie, uhášaj strely so štítom viery! „Bojuj dobrý boj!“"
                        ],
                        [
                            "3. „Bojuj dobrý boj!“ Láskou sa ozbroj: Dobre čiň i nepriateľom, slúž ",
                            "Kráľovi dušou telom! Porúčaj krivdu Božiemu súdu! „Bojuj dobrý boj!“"
                        ],
                        [
                            "4. „Bojuj dobrý boj!“ O chválu nestoj! Jej ovocím býva pýcha, kto ju ",
                            "ľúbi ten pospiecha smrti  pod vládu, k večnému pádu. „Bojuj dobrý boj!“"
                        ],
                        [
                            "5. „Bojuj dobrý boj!“ Maj v nebi cieľ svoj! Tam, kde bude víťaz pravý ",
                            "ozdobený vencom slávy, tam vyzná duch tvoj, že bol ľahký boj! „Bojuj ",
                            "dobrý boj!“"
                        ]
                    ]
                },
                {
                    "name": "Pod zástavou Krista",
                    "number": 263,
                    "lang": "sk",
                    "url": "pod-zastavou-krista",
                    "author": "",
                    "verses": [
                        [
                            "1. Pod zástavou Krista kráča každý rád, kto sa Božím dietkom stal, ",
                            "kto si zvolil heslo: bratov milovať, ako Pán to prikázal."
                        ],
                        [
                            "REF.: Napred len, napred len, ó, bratia, sestry, za Kristom,",
                            "smelo pod Jeho len zástavou a každý bude víťazom.    "
                        ],
                        [
                            "2. My sa neľakáme hrozieb, pohany, nepriateľskej odvety. ",
                            "Všade Kráľ náš Ježiš kráča pred nami, večnosť kynie v ústrety."
                        ],
                        [
                            "REF.: Napred len, napred len..."
                        ],
                        [
                            "3. Nech to každý čuje, že je Kristus Pán pre svet celý Spasiteľ,",
                            "hriešnikov že volá z jeho všetkých strán, by nik na súd neprišiel."
                        ],
                        [
                            "REF.: Napred len, napred len..."
                        ],
                        [
                            "4. Hľa, už v diaľke svitá nový jasný deň, príde Božie kráľovstvo tam, ",
                            "kde pre Ježiša mali hany blen, skvitne Jeho víťazstvo."
                        ],
                        [
                            "REF.: Napred len, napred len..."
                        ]
                    ]
                },
                {
                    "name": "Synu milý, dcéro drahá",
                    "number": 264,
                    "lang": "sk",
                    "url": "synu-mily-dcero-draha",
                    "author": "",
                    "verses": [
                        [
                            "1. Synu milý, dcéro drahá, pod Božou sa rukou skloň, aj keď švihá, aj keď karhá, ",
                            "nemýli sa nikdy On. Jeho kázeň, trestanie zbytočne sa nestane. "
                        ],
                        [
                            "2. Ak ťa tvrdou cestou vedie, keď hrom v búrke buráca, pamätaj si",
                            "vždy a všade, vedomie to nestrácaj: dobré je, čo robí Pán, aj keď ",
                            "bremä zošle nám."
                        ],
                        [
                            "3. Hospodin vie, čo ti treba, On ti slzy spočíta, všade doprevádza teba,",
                            "v Ňom je tvoja záštita. Jeho láska veliká nebo krížom odmyká!"
                        ]
                    ]
                },
                {
                    "name": "Čuj, kto meno Krista nosíš",
                    "number": 265,
                    "lang": "sk",
                    "url": "cuj-kto-meno-krista-nosis",
                    "author": "",
                    "verses": [
                        [
                            "1. Čuj, kto meno Krista nosíš, kresťanom sa menuješ, skúmaj seba: ",
                            "komu slúžiš, koho najviac miluješ? To je kresťan opravdivý, smie ",
                            "to drahé meno mať, kto má za cieľ Ježišovi vo všetkom sa podobať.     "
                        ],
                        [
                            "2. Kto je z Boha narodený, vládne v ňom duch Ježišov, prejaví to ",
                            "v milovaní bratstva, aj nepriateľov. Čistá láska kresťanovi najväčšia",
                            "je ozdoba, v tom nech sa náš život nový Ježišovi podobá."
                        ],
                        [
                            "3. Vždy sa snažme prejavovať život hodný kresťana, Kristovu tvár",
                            "zobrazovať, v obeť dať sa pre Pána. Nedúfajme v žiadnom mene, ",
                            "nový život, žiada Pán, tým bude v nás spečatené: meno kresťan patrí nám."
                        ]
                    ]
                },
                {
                    "name": "Duša draho vykúpená",
                    "number": 266,
                    "lang": "sk",
                    "url": "dusa-draho-vykupena",
                    "author": "",
                    "verses": [
                        [
                            "1. Duša draho vykúpená z krutej moci satana, ",
                            "ó, rozvažuj, aká sláva je ti v Kristu zložená!  "
                        ],
                        [
                            "REF.: Máš pozvanie ku plnosti, vstup voľný k trónu milosti!",
                            "Ó, využi tú možnosť! Ó, využi tú možnosť!"
                        ],
                        [
                            "2. Boh ťa v Kristu omilostil a prijal ťa za dieťa, ",
                            "s Ním vzkriesil a v Ňom ti priznal právo spoludediča.  "
                        ],
                        [
                            "REF.: Máš pozvanie ku plnosti..."
                        ],
                        [
                            "3. No, znaj! Máš i závistníka, má na teba veľký hnev, ",
                            "chcel by zničiť vyvolených obchádza ich ako lev."
                        ],
                        [
                            "REF.: Máš pozvanie ku plnosti..."
                        ],
                        [
                            "4. Preto, stále stoj na stráži, bdej a trvaj v modlení!",
                            "Ježiš je Pán všemohúci, s Ním buď vierou spojený."
                        ],
                        [
                            "REF.: Máš pozvanie ku plnosti..."
                        ],
                        [
                            "5. Nepovoľuj v ničom telu, Duchom ho vždy premáhaj!",
                            "Až do Pánovho príchodu bdej, na stráži zotrvaj."
                        ],
                        [
                            "REF.: Máš pozvanie ku plnosti..."
                        ],
                        [
                            "6. A až príde, ako sľúbil, svätým Písmom dal stvŕdiť, ",
                            "služobníka vsadí za stôl a On mu bude slúžiť."
                        ],
                        [
                            "REF.: Máš pozvanie ku plnosti..."
                        ]
                    ]
                },
                {
                    "name": "Zmužilo si počínajte",
                    "number": 267,
                    "lang": "sk",
                    "url": "zmuzilo-si-pocinajte",
                    "author": "",
                    "verses": [
                        [
                            "1. Zmužilo si počínajte, Božie deti, zmužilo! ",
                            "Vierou smelo premáhajte, v odpore čo ožilo.",
                            " ",
                            "REF.: V zmužilej viere len, v zmužilej viere len,",
                            "verný Pánovi deň čo deň!"
                        ],
                        [
                            "2. Na úsekoch cesty tvrdých, kde vás čaká krutý boj, ",
                            "s odvahou len choďte v hrudi napred k cieľu stoj čo stoj!"
                        ],
                        [
                            "REF.: V zmužilej viere len..."
                        ],
                        [
                            "3. Na Boha sa spoliehajte, keď vám hrozí nepriateľ, ",
                            "na Krista zrak upierajte, On je verný Spasiteľ!"
                        ],
                        [
                            "REF.: V zmužilej viere len..."
                        ],
                        [
                            "4. K víťazstvu sa náš boj chýli, odpočinku bronie čas, ",
                            "večný domov, bratia milí, náruč Otca čaká nás."
                        ],
                        [
                            "REF.: V zmužilej viere len..."
                        ]
                    ]
                },
                {
                    "name": "Zmocnite sa, bratia",
                    "number": 268,
                    "lang": "sk",
                    "url": "zmocnite-sa-bratia",
                    "author": "",
                    "verses": [
                        [
                            "1. Zmocnite sa, bratia, v sile vlády Kristovej! Stojte silní, ",
                            "mužní v Slove Pánovom, za nás vedie náš boj Pán, rozohnal ",
                            "tmu noci zlej. Naše víťazstvo je hotové v Ňom."
                        ],
                        [
                            "REF.: V rade stoj! Pravdy boj za Kráľa, čo vedie vždy ",
                            "ľud Svoj! Za česť Pána slávneho, za vec Boha večného ",
                            "v sile svojho Pána v rade stoj!"
                        ],
                        [
                            "2. Zmocnite sa, bratia, v sile vlády Kristovej! Stojte pevne v boji ",
                            "ako jeden muž; smelo napred vykroč len, nádejou si srdce hrej,",
                            "Božou mocou v borbe každý sa vzmuž."
                        ],
                        [
                            "REF.: V rade stoj! Pravdy boj..."
                        ],
                        [
                            "3. Zmocnite sa, bratia, v sile vlády Kristovej! Slovo Hospodina ",
                            "stojí bezo zmien, v ňom je naša ochrana, pomoc v krvi golgotskej, ",
                            "verný Vodca vedie k víťazstvám len."
                        ],
                        [
                            "REF.: V rade stoj! Pravdy boj..."
                        ]
                    ]
                },
                {
                    "name": "Prúdy živé plynú",
                    "number": 269,
                    "lang": "sk",
                    "url": "prudy-zive-plynu",
                    "author": "",
                    "verses": [
                        [
                            "1. Prúdy živé plynú z trónu milosti, zemou šum ich volá ",
                            "mnohých k plnosti. Plným dúškom chcem piť i ja z týchto ",
                            "vod, by im smrti dravej nemohol ublížiť hrot."
                        ],
                        [
                            "REF.: Za pravdou chcem ísť, podľa pravdy žiť a pravdu ",
                            "vyznávať smelo, Kristovým svedkom chcem byť."
                        ],
                        [
                            "2. Svet si vence slávy kladie na hroby, zlatom chcel by odiať ",
                            "biedu poroby. Mňa však pravda vábi, pravda jediná: cieľom ",
                            "je mi život, trvať čo naveky má."
                        ],
                        [
                            "REF.: Za pravdou chcem ísť..."
                        ],
                        [
                            "3. S pravdou pôjdem smelo, nebudem sa chvieť, môjho",
                            "Pána musí spoznať celý svet. Ten sa zaňho hanbí, kto Ho ",
                            "nechce znať. Mne by hanbou bolo Ježiša nemilovať."
                        ],
                        [
                            "REF.: Za pravdou chcem ísť..."
                        ]
                    ]
                },
                {
                    "name": "Vodcom našej čaty",
                    "number": 270,
                    "lang": "sk",
                    "url": "vodcom-nasej-caty",
                    "author": "",
                    "verses": [
                        [
                            "1. Vodcom našej čaty, Kristus Ježiš sám, nebudeme váhať,",
                            "keď vpred velie nám. Bárs válečné plány jeho neznáme, ",
                            "hotoví sme ísť za Ním."
                        ],
                        [
                            "REF.: Ty poď za mnou, to je Jeho hlas; Ty poď za mnou! ",
                            "Čujte Jeho hlas: Ty poď za mnou! Nuž tak chceme ísť, ",
                            "s naším Vodcom, Kristom zvíťaziť."
                        ],
                        [
                            "2. Slávny prápor lásky, hore, nech vlaje! Pod ním ",
                            "stroskocú sa diabolské voje. Vodca našej čaty bude ",
                            "víťazom, aj my budeme razom."
                        ],
                        [
                            "REF.: Ty poď za mnou..."
                        ],
                        [
                            "3. Nech si bitva zúri, dlhá nebude, víťazstvo len naše ",
                            "konečné bude. Pán vezme nás k sebe, v nebeský svoj stan, ",
                            "oj, víťazstvo patrí nám."
                        ],
                        [
                            "REF.: Ty poď za mnou..."
                        ]
                    ]
                },
                {
                    "name": "Ó, Kráľu milosti",
                    "number": 271,
                    "lang": "sk",
                    "url": "o-kralu-milosti",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, Kráľu milosti, Pane Ježiši, môj duch sa do prachu ",
                            "pred Tebou níži! Mňa Tvoja Božská moc láska veliká, vzkriesila ",
                            "mŕtveho v duchu, hriešnika."
                        ],
                        [
                            "2. Milosť, samá milosť mne sa dostala, ktorú mi svätá krv",
                            "Tvoja získala. Preto si nebeskú slávu opustil, by si ma z rúk ",
                            "večnej smrti vyprostil."
                        ],
                        [
                            "3. Ľutujem, že som tak Tebou pohŕdal, že som sa ešte skôr Tebe",
                            "neoddal! U Teba bohatstvo, slávu duša má, o jakej biedny svet ",
                            "tušenia nemá."
                        ],
                        [
                            "4. Odpusť mi, ó, odpusť, Pane z milosti, že mnoho ráz žijem",
                            "Tebe k ľútosti! Požehnaj a posväť mňa si celého, vystroj ma ",
                            "za  sluhu Tebe,  verného."
                        ],
                        [
                            "5. V živote pri smrti, keď len Teba mám čistú rozkoš raja ",
                            "už tu požívam! Súc v Tvojej blízkosti, koho by sa bál? Ja ",
                            "som Tvoj slabý tvor, Ty´s môj mocný Kráľ!"
                        ]
                    ]
                },
                {
                    "name": "So spevom ideme",
                    "number": 272,
                    "lang": "sk",
                    "url": "so-spevom-ideme",
                    "author": "",
                    "verses": [
                        [
                            "1. So spevom ideme do tej vlasti, ktorú nám Pán schystal ",
                            "na výsosti. Zdroj blaha je nám zem zasľúbená, v nej bude ",
                            "obťažná púť skončená."
                        ],
                        [
                            "REF.: Zástupy anjelov zostupujú, nebeských pútnikov ",
                            "pozdravujú. Pútnické rúcho mám tu zanechať, Pán ma ",
                            "chce nádherne tam zaodiať."
                        ],
                        [
                            "2. Už mnohí cez Jordán prekročili, boj s diablom a telom ",
                            "zakončili. Nás oni čakajú  nad hviezdami, s roztvorenými ",
                            "k nám náručiami."
                        ],
                        [
                            "REF.: Zástupy anjelov zostupujú..."
                        ],
                        [
                            "3. Pán Vodcom je, svetlom nám, i silou poráža pred nami",
                            "nepriateľov. On nám chlieb i nápoj pripravuje, a nás vždy ",
                            "milosťou zatieňuje."
                        ],
                        [
                            "REF.: Zástupy anjelov zostupujú..."
                        ],
                        [
                            "4. Ó, bratia, dedičia zasľúbenia, účastní vrchného povolania,",
                            "na Vodcu Ježiša pozerajte, lásku a vernosť Mu zachovajte. "
                        ],
                        [
                            "REF.: Zástupy anjelov zostupujú..."
                        ]
                    ]
                },
                {
                    "name": "Pán vodca môj",
                    "number": 273,
                    "lang": "sk",
                    "url": "pan-vodca-moj",
                    "author": "",
                    "verses": [
                        [
                            "1. Pán vodca môj, to krásna zvesť, bezpečne On ma ráči viesť, ",
                            "On cestu určil i môj cieľ; vo večnej sláve je môj diel.",
                            "/: Ó, Ježišu, len veď ma sám, doveď ma k neba výšinám. :/"
                        ],
                        [
                            "2. Pán vodcom je. S Ním smelo diaľ kráčam hoc svet by v ceste ",
                            "stál. Svoj ľud keď vedie vodca náš ustúpiť musí satanáš.",
                            "/: Ó, Ježišu, len pri mne stoj, silu mi daj, keď zúri boj. :/"
                        ],
                        [
                            "3. Pán vodca môj. Tmy zaniknú, slnka kde lúče preniknú. ",
                            "V ústrety žiari jasný cieľ, za ktorým vykročiť som smel.",
                            "/: Ó, Ježišu, buď svetlo sám, vo tmách nech viac už neklesám. :/"
                        ],
                        [
                            "4. Pán vodcom je. Leť, loďka v diaľ, vietor hoc more rozpútal! ",
                            "Vždycky On búrku utíšil, prichystal prístav nových síl.",
                            "/: Ó, Ježišu, Ty loďku riaď a daj jej k cieľu doplávať. :/"
                        ]
                    ]
                },
                {
                    "name": "So zbraňou oceľovou",
                    "number": 274,
                    "lang": "sk",
                    "url": "so-zbranou-ocelovou",
                    "author": "",
                    "verses": [
                        [
                            "1. So zbraňou oceľovou náš nie je boj, v moci však Ducha ",
                            "kráča Boží voj. Kráľovstvo Božie krv si nežiada, lásky",
                            "a milosti Boh v ňom prestol má."
                        ],
                        [
                            "REF.: Vykročme do boja za Ježišom, víťazstvo získame ",
                            "istotne v Ňom. /: Kniežatstvá všetky On má zaujať, na ",
                            "celej zemi bude kraľovať. :/"
                        ],
                        [
                            "2. So svetlom do tmy, bratu, zmužilo vpred, od pravdy ",
                            "Božej nikdy neodstúp. Premáhaj zlobu Duchom zmocnený, ",
                            "Ježiša vyznávaj verne na zemi.            "
                        ],
                        [
                            "REF.: Vykročme do boja za Ježišom..."
                        ],
                        [
                            "3. Slávne sa z boja domov vrátime zas, stvorenstvo začne",
                            "jasať vôkol nás. Víťazom vence žitia chystá Pán, verným ",
                            "sú večnosti brány dokorán."
                        ],
                        [
                            "REF.: Vykročme do boja za Ježišom..."
                        ]
                    ]
                },
                {
                    "name": "Kým žije Ježiš môj",
                    "number": 275,
                    "lang": "sk",
                    "url": "kym-zije-jezis-moj",
                    "author": "",
                    "verses": [
                        [
                            "1. Kým žije Ježiš môj, nesie ma sily zdroj; ",
                            "srdce láskou horieť musí, bo zmiznul strach i boj!"
                        ],
                        [
                            "2. On dobrý Pastier je, ovce svoje pasie, na trávičkách ",
                            "na zelených, rosičkou skropuje."
                        ],
                        [
                            "3. Keď slnce sa skryje, lev rve šakal vyje, ó, znám ",
                            "že v tej strašnej noci môj Ježiš pri mne bdie."
                        ],
                        [
                            "4. Ak poklesne krok môj, svet strhne mňa v svoj boj,",
                            "náhlim k srdcu Ježišovmu, veď v Ňom lekárstva zdroj."
                        ],
                        [
                            "5. Ach, k Nemu len hľadím so srdcom blaženým.",
                            "Môj Ježiš mňa ľúbi iste; raj celý je mojim."
                        ]
                    ]
                },
                {
                    "name": "Chcem byť v srdci dobrý kresťan",
                    "number": 276,
                    "lang": "sk",
                    "url": "chcem-byt-v-srdci-dobry-krestan",
                    "author": "",
                    "verses": [
                        [
                            "1. Chcem byť v srdci dobrý kresťan, Pane môj. Pane môj.",
                            "Chcem byť v srdci dobrý kresťan Pane môj. Pane môj.",
                            "Pane môj. Chcem byť v srdci dobrý kresťan, Pane môj.  "
                        ],
                        [
                            "2. Chcem mať v srdci viacej lásky, Pane môj. Pane môj. ",
                            "Chcem ma v srdci viacej lásky, Pane môj. Pane môj,",
                            "Pane môj. Chcem mať v srdci viacej lásky, Pane môj."
                        ],
                        [
                            "3. Chcem byť v srdci úprimnejší, Pane môj. Pane môj. ",
                            "Chcem byť v srdci úprimnejší, Pane môj, Pane môj, ",
                            "Pane môj. Chcem byť v srdci úprimnejší, Pane môj."
                        ],
                        [
                            "4. Chcem byť v srdci ako Ježiš, Pane môj. Pane môj.",
                            "Chcem byť v srdci ako Ježiš, Pane môj. Pane môj, ",
                            "Pane môj. Chcem byť v srdci ako Ježiš, Pane môj."
                        ],
                        [
                            "5. Chcem Ťa v srdci oslavovať, Pane môj, Pane môj. ",
                            "Chcem Ťa v srdci oslavovať, Pane môj. Pane môj, ",
                            "Pane môj. Chcem Ťa v srdci oslavovať, Pane môj."
                        ]
                    ]
                },
                {
                    "name": "Hospodine Zástupov",
                    "number": 277,
                    "lang": "sk",
                    "url": "hospodine-zastupov",
                    "author": "",
                    "verses": [
                        [
                            "1. Hospodine Zástupov, Bože nekonečný, kto vstúpi ",
                            "v Tvoj svätý stan? Kto uzrie raj večný? Na hore kto ",
                            "nebeskej v sláve bude bývať, a v presvätú Tvoju tvár ",
                            "s jasotom sa dívať?"
                        ],
                        [
                            "2. Ten, kto vždy len úprimne, spravodlive chodí, komu ",
                            "v srdci pravda dlie, kto sa lžou nezvodí; blížnemu ",
                            "kto jazykom krivdy neučiní, dobrovoľne na ľuďoch kto ",
                            "sa nepreviní."
                        ],
                        [
                            "3. Kto vzdor škode sľub daný drží nepremenný, peniazmi ",
                            "kto z úžery pošpinený není, daru proti nevine kto sa verne ",
                            "stráni: ten vstup istý, vraví Boh, má v tie večné stany."
                        ],
                        [
                            "4. No, som ja ním, ó, Bože? Smiem mať tú istotu? Je pri ",
                            "mne dosť svätosti? Mám pravú čistotu? Ach, ak ja len pri ",
                            "sebe spravedlnosť hľadám, tu vzdor všetkej námahe len ",
                            "klesám a padám."
                        ],
                        [
                            "5. Duša moja, akože pred Bohom obstojíš? Čím sa voči ",
                            "prístrachom smrti raz vyzbrojíš? Kto podá ti istotu zhladenia ",
                            "všetkých vín? Ach, zajasaj! On to dá! Spasiteľ, Boží Syn."
                        ]
                    ]
                },
                {
                    "name": "Pevne stoj",
                    "number": 278,
                    "lang": "sk",
                    "url": "pevne-stoj",
                    "author": "",
                    "verses": [
                        [
                            "1. Pevne stoj, pevne stoj, ó, ľud Boží! Pevne stoj, pevne stoj, ",
                            "ó, ľud Boží! Pozri hviezda z Jakoba v tmavej noci svieti! Ak ",
                            "ti nepriateľ hrozí, vzmuž sa; Ježiš zvíťazí! Ježiš, Ježiš tebe po",
                            "pravici! Pevne stoj, pevne stoj, pevne stoj, pevne stoj, ľude Boží, ",
                            "ľude Boží!"
                        ],
                        [
                            "2. Buď verný, buď verný, ó, ľud Boží! Buď verný, buď verný, ",
                            "ó, ľud Boží! Oddeľ sa od všetkého, čo ťa poškvrňuje, čo ťa s ",
                            "tvojim Ježišom s tvojim nebeským svetlom, vrúcne, verne, ",
                            "pevne nespojuje! Buď verný, buď verný, buď, verný, buď verný,",
                            "ľude Boží, ľude Boží!"
                        ],
                        [
                            "3. Pracuj, bdej, pracuj, bdej, ó, ľud Boží! Pracuj bdej, pracuj bdej, ",
                            "ó, ľud Boží! Ten deň nie je ďaleko, kde svojim k radosti, skončiac boj,",
                            "premáhanie, v moci a v sláve príde, Ježiš, Ježiš znova sa objaví! Pracuj,",
                            "bdej, pracuj, bdej, pracuj, bdej, pracuj, bdej, ľude Boží, ľude Boží!"
                        ]
                    ]
                },
                {
                    "name": "Kto nechodí dľa rady bezbožných",
                    "number": 279,
                    "lang": "sk",
                    "url": "kto-nechodi-dla-rady-bezboznych",
                    "author": "",
                    "verses": [
                        [
                            "1. Kto nechodí dľa rady bezbožných, kto opúšťa cesty ľudí zlých,",
                            "s posmievačmi v spolku netrvá, v Božom slove zvláštnu ľúbosť má: ",
                            "Ten je za múdreho uznaný, chválený, od Boha je blahoslavený, ",
                            "bez zmeny."
                        ],
                        [
                            "2. Je ako strom ovocný, štepený, rastúci pri živom prameni. Tam",
                            "i nával skúšok vydrží, i kríž mu len k dobru poslúži. Vieru javí v ",
                            "dobrom ovocí, v Božej cti, a čokoľvek kedy podniká, šťastie má."
                        ],
                        [
                            "3. Neobstoja hriešnici na súde, ich zväz s nami trvať nebude. Nič",
                            "nemožno ukryť pred Bohom, pred Ním je i pol noc jasným dňom. ",
                            "On pokrytcov základ podvráti, zatratí. No úprimný vierou obstojí i",
                            "v boji. "
                        ],
                        [
                            "4. Znajúc vôľu Pánovu, čiňme ju, vyhýbajme vlivu škodnému,",
                            "opatrujme svoje spasenie, ozdobujme Božie učenie! V tom je ",
                            "dôkaz pravej múdrosti, vernosti, tak získame plnú blaženosť pre ",
                            "večnosť. "
                        ]
                    ]
                },
                {
                    "name": "Raz príde Pán!",
                    "number": 280,
                    "lang": "sk",
                    "url": "raz-pride-pan",
                    "author": "",
                    "verses": [
                        [
                            "1. Raz príde  Pán! On príde, to je isté, vziať verných svojich ",
                            "v slávny nebies stan. Tam ozdobí sám vencom čelá čisté, ",
                            "umyté krvou svätých Jeho rán. Ó, aká radosť čaká ich tam, ",
                            "/: kde v cti a sláve na tróne dlie Boh sám! :/ "
                        ],
                        [
                            "2. Raz príde Pán! On sľúbil, sľub nezruší; anjelské ústa to ",
                            "potvrdili, bárs tej pravdy svet nezná a netuší, ba nechce jej ",
                            "znať ni brat zblúdilý. Ó, aká radosť, smieť raz Ho zrieť",
                            "/: a s Ním ta hore ku trónu zaletieť! :/"
                        ],
                        [
                            "3. Raz príde Pán! On rýchlo sa už blíži! Nad svetom vždy hĺb ",
                            "padá hriechu mrak, a súženia deň vždy viacej sa níži, zem, ",
                            "more ľudstvu strašný dáva znak. Ó, aká žalosť čaká tých raz;",
                            "/: čo neposlúchli výstrahy vážny hlas! :/"
                        ],
                        [
                            "4. Raz príde Pán! On príde, to je isté. Ó, bratu, sestro, čím Ho ",
                            "privítaš? Si hotový už vnísť v tie ríše čisté, kde zoči voči Bohu ",
                            "zastať máš? Ó, aká žalosť, veriť tu v klam",
                            "/: a nikdy nesmieť ku svetlu vzniesť sa tam! :/"
                        ]
                    ]
                },
                {
                    "name": "Ide noc, strašná noc",
                    "number": 281,
                    "lang": "sk",
                    "url": "ide-noc-strasna-noc",
                    "author": "",
                    "verses": [
                        [
                            "1. Ide noc, strašná noc; svetom vládne klamu moc, ",
                            "v sen uvádza Božích ľudí. Ó, ktože ich z neho vzbudí,",
                            "kto tu príde na pomoc?"
                        ],
                        [
                            "2. Smútky čas, vážny čas! Osláv, spevov tíchne hlas.",
                            "Dietky Božie žijú sebe, zabúdajú sväté nebe; v hriech",
                            "sa zapletajú zas."
                        ],
                        [
                            "3. Aj hľa, On, Ježiš! On opúšťa už zlatý trón. Cherubíny",
                            "pochod hrajú, k svadbe hosťov zvolávajú: „Rýchle,",
                            "rýchle na Sion!“"
                        ],
                        [
                            "4. Pane môj, Jezu môj, vzbuď si Ty sám Sion svoj!",
                            "Satanovi z rúk ho vymaň! Duchom Svätým mocne ",
                            "povaň; znova svetla rozžni zdroj!"
                        ]
                    ]
                },
                {
                    "name": "Po čom túžiš",
                    "number": 282,
                    "lang": "sk",
                    "url": "po-com-tuzis",
                    "author": "",
                    "verses": [
                        [
                            "1. Po čom túžiš, čo sa chveješ? Srdce povedz úprimne!",
                            "Boha hľadám v tejto zemi, Jeho žiadam jedine. Hoc´ mať ",
                            "všetko, bez Boha len bedárom však zostávam, nespokojný ",
                            "žíznim ďalej, v zmätku nezriem prístav tam."
                        ],
                        [
                            "2. Bohatstvo a radovánky, sláva krása, umenia vypráhlu",
                            "púšť môjho srdca v prameň vody nezmenia. Silu k žitiu ",
                            "v milovaní, v posmechu a v žalosti, radosť v smútku,",
                            "v umieraní len Boh dáva z milosti."
                        ],
                        [
                            "3. Kedy budem iba Božím milovaním milovať a mať ",
                            "vôľu iba jednu: Božiu vôľu vykonať? Kedy všetky moje ",
                            "túžby splynú v prianie jediné: Nástrojom byť Božej služby, ",
                            "svetlom  duši zblúdilej?!"
                        ],
                        [
                            "4. Kedy vkročím tam, kde budem Krista vidieť tvárou v tvár,",
                            "rúchu sveta pozbavený uzriem Jeho trónu žiar? Jeho mať to ",
                            "slávu, cenu, hodnotu má najvyššiu. Nechcem nič, tak volám",
                            "k Nemu, „Teba len ó, Ježišu!“"
                        ],
                        [
                            "5. Viem, že túžba zanietená naplnenie dostane, prosbu srdca ",
                            "úprimného neodmietneš, môj Pane! Ty si pravda, život, cesta, ",
                            "Svetlo sveta jedine prostred nebeského mesta, kde raz i ja spočiniem."
                        ]
                    ]
                },
                {
                    "name": "Pokračuj, pokračuj, Sion",
                    "number": 283,
                    "lang": "sk",
                    "url": "pokracuj-pokracuj-sion",
                    "author": "",
                    "verses": [
                        [
                            "1. Pokračuj, pokračuj, Sion, v svetle nebeskom! Nech ",
                            "sa zaskvie svieca tvoja prvej lásky plameňom, zo živého ",
                            "čerpaj zdroja, úzkou cestou verne napreduj! Pokračuj, ",
                            "pokračuj!"
                        ],
                        [
                            "2. Neváhaj, neváhaj, Sion, kríž svoj verne niesť! Bieda,",
                            "žiale úzkosť, hana od pravdy ťa nesmú zviesť! Vzhliadaj ",
                            "ku korune Pána! Do smrti mu vernosť zachovaj! Neváhaj, ",
                            "neváhaj!"
                        ],
                        [
                            "3. Vyhýbaj, vyhýbaj, Sion, zvodom sveta včas! On ťa k pýche ",
                            "priviesť hľadí, nepočúvaj zvodcov hla! Never diablovi! On ",
                            "zradí práve keď ti núka samí raj! Vyhýbaj, vyhýbaj!"
                        ],
                        [
                            "4. Preskúmaj, preskúmaj, Sion duchov neznámych! Neprijímaj",
                            "hneď ich slovo, skúmaj, či je pravda v nich! Večné slovo Ježišovo ",
                            "vždy a všade vďačne poslúchaj! Preskúmaj, preskúmaj!"
                        ],
                        [
                            "5. Vytrvaj, vytrvaj, Sion, vernosť zachovaj! Nebuď zbabelým, ",
                            "ni zradným! Korunu a večný raj dá Pán bojovníkom chrabrým! ",
                            "Nato, Sion, stále pamätaj! Vytrvaj, vytrvaj!"
                        ]
                    ]
                },
                {
                    "name": "Hriech je zhladený",
                    "number": 284,
                    "lang": "sk",
                    "url": "hriech-je-zhladeny",
                    "author": "",
                    "verses": [
                        [
                            "1. Hriech je zhladený, aby si sväto stál? Ak ťa zbielila ",
                            "Kristova krv? Znovuzrodený  telu si výhosť dal, ak ťa ",
                            "obmyla Kristova krv?"
                        ],
                        [
                            "REF.: Čistý si skrze krv. Čistý, obmytý skrz Pána krv? Rúcho ",
                            "svetlé máš, biele je ako sneh? Ak ťa obmyla Kristova krv? "
                        ],
                        [
                            "2. Verne pod krížom bdieš, vie to Najvyšší, ak ťa zbielila ",
                            "Kristova krv? Vierou detinskou pri Ježišovi vždy, ak ťa ",
                            "obmyla Kristova krv?"
                        ],
                        [
                            "REF.: Čistý si skrze krv. Čistý..."
                        ],
                        [
                            "3. Ženích blíži sa, hotové srdce máš, ak ťa zbielila Kristova krv? ",
                            "Svätú ozdobu na nové rúcho dáš, ak ťa obmyla Kristova krv?"
                        ],
                        [
                            "REF.: Čistý si skrze krv. Čistý..."
                        ],
                        [
                            "4. Preto odlož hriech, nečisté žiadosti, znova ponor sa v Kristovu krv! ",
                            "Žriedlo bohaté rinie sa v hojnosti, čistým spraví ťa Kristova krv. "
                        ],
                        [
                            "REF.: Čistý si skrze krv. Čistý..."
                        ]
                    ]
                },
                {
                    "name": "Ach, či musím s prázdnou rukou v ústrety ísť Pánovi?",
                    "number": 285,
                    "lang": "sk",
                    "url": "ach-ci-musim-s-prazdnou-rukou-v-ustrety-ist-panovi",
                    "author": "",
                    "verses": [
                        [
                            "1. Ach, či musím s prázdnou rukou v ústrety ísť Pánovi? ",
                            "Dňa som službe nezasvätil, k práci  nebol hotový."
                        ],
                        [
                            "REF.: Ach, či musím s prázdnou rukou Pánovi ísť v ústrety, ",
                            "neviesť ani jednu dušu, nič Mu neniesť oproti."
                        ],
                        [
                            "2. Neľakám sa dychu smrti, veď som v Kristu spasený. ",
                            "No, že Ho mám prázdny vítať, zármutkom som skľúčený."
                        ],
                        [
                            "REF.: Ach, či musím s prázdnou rukou..."
                        ],
                        [
                            "3. Ako mnohé vzácne roky v hriechu som len premárnil, ",
                            "keby sa mi vrátiť mohli, verne by som v službe žil. "
                        ],
                        [
                            "REF.: Ach, či musím s prázdnou rukou..."
                        ],
                        [
                            "4. Skôr, než smrti noc ťa schváli, duše k spáse viesť sa snaž!",
                            "Pracuj každý, pokiaľ k dielu milosť od Ježiša máš."
                        ],
                        [
                            "REF.: Ach, či musím s prázdnou rukou..."
                        ]
                    ]
                },
                {
                    "name": "Kto bude v Tvojom stánku prebývať",
                    "number": 286,
                    "lang": "sk",
                    "url": "kto-bude-v-tvojom-stanku-prebyvat",
                    "author": "",
                    "verses": [
                        [
                            "1. Kto bude v Tvojom stánku prebývať a na vrchu ",
                            "tom svätom kto smie stáť? Kto chodí bezúhonne, ",
                            "spravedlivosť činí hojne, pravdu chce vždy v srdci",
                            "skromne vravievať."
                        ],
                        [
                            "2. Kto bude v Tvojom stánku prebývať a na vrchu ",
                            "tom svätom kto smie stáť? Kto klebety sa stráni, ",
                            "priateľa česť, prospech chráni, nepotupí blížnych ",
                            "ani jeden krát."
                        ],
                        [
                            "3. Kto bude v Tvojom stánku prebývať a na vrchu",
                            "tom svätom kto smie stáť? Kto ctí tých, čo sa boja ",
                            "Boha a sám v sľuboch stojac, vie ich hoc mu škodu ",
                            "stroja dodržať."
                        ],
                        [
                            "4. Kto bude v Tvojom stánku prebývať a na vrchu",
                            "tom svätom kto smie stáť? Kto lakomstva sa desí,",
                            "úplatný dar nevezme si, toho nikdy nepredesí zvrat ",
                            "ni pád."
                        ]
                    ]
                },
                {
                    "name": "Poď, Záhradník, vziať tento fík",
                    "number": 287,
                    "lang": "sk",
                    "url": "pod-zahradnik-vziat-tento-fik",
                    "author": "",
                    "verses": [
                        [
                            "1. Poď, Záhradník, vziať tento fík a vyhoď zo záhrady, ",
                            "bo osoh nemá z neho nik, vždy na neplodnosť hľadím.",
                            "Už prichádzam sem od troch liet a plodov na ňom nikdy niet",
                            "a plodov na ňom nikdy niet."
                        ],
                        [
                            "2. No trpezlivý záhradník tak začal prosiť Pána: nech ",
                            "ešte rok má tento fík, nech mu je milosť daná, len mne",
                            "oň starosť pridajte, snáď vydá plody šťavnaté, snáď ",
                            "vydá plody šťavnaté."
                        ],
                        [
                            "3. Ó, Synu Boží, láskavý, Ty sám sa modlitbami za prázdne",
                            "stromy privravíš ráč milosť mať aj s nami. Keď čujeme Tvoj ",
                            "milý hlas, ó prihovor sa v prospech nás ó, prihovor sa ",
                            "v prospech nás."
                        ],
                        [
                            "4. Ty Jezu Kriste, Záhradník, ráč zošľachtiť nás teraz, by ",
                            "hojnosť plodov duchovných z nás mohols´ znova zberať, ",
                            "nech cirkev Tvoja záhrada, Ti chutné plody znova dá. Ti ",
                            "chutné plody znova dá."
                        ],
                        [
                            "5. Keď príde posledná tá žeň a s ňou aj rozdelenie, kde",
                            "v pekla noc, či v neba deň Ty určíš deti zeme, daj po ",
                            "Tvojej stáť pravici nám s večne chutným ovocím. ",
                            "Nám s večne chutným ovocím"
                        ]
                    ]
                },
                {
                    "name": "Tak často myslievam",
                    "number": 288,
                    "lang": "sk",
                    "url": "tak-casto-myslievam",
                    "author": "",
                    "verses": [
                        [
                            "1. Tak často myslievam, ako to bude raz, až budem ",
                            "tvárou tvár Pána zrieť, z Jeho rúk korunu prijmem ",
                            "v tom meste krás, či sa v nej aj hviezdy budú skvieť? "
                        ],
                        [
                            "REF.: Či sa mi po boji v nebeskom pokoji, blaženosť ",
                            "kde bude storaká, za každú nájdenú za dušu v odmenu",
                            "hviezdička v korune zajagá?"
                        ],
                        [
                            "2. Na svojej vinici nauč ma pracovať, nad bratmi, sestrami",
                            "verne bdieť, aby sa v korune mojej mohli zajagať hviezdy, ",
                            "až chvála Ti bude znieť."
                        ],
                        [
                            "REF.: Či sa mi po boji..."
                        ],
                        [
                            "3. Až k nohám zložím Ti živé drahokamy, duše, čo ľúbosť",
                            "v nich večnú máš, s anjelmi radostne zaspievam Ti žalmy, ",
                            "keď za ne hviezdy mi darom dáš."
                        ],
                        [
                            "REF.: Či sa mi po boji..."
                        ]
                    ]
                },
                {
                    "name": "Až sa všetci pred trón Kristov postavíme",
                    "number": 289,
                    "lang": "sk",
                    "url": "az-sa-vsetci-pred-tron-kristov-postavime",
                    "author": "",
                    "verses": [
                        [
                            "1. /: Až sa všetci pred trón Kristov postavíme, :/",
                            "/: bratia, sestry, či aj my tam obstojíme? :/",
                            " ",
                            "2. /: Kde sú hrivny svätým Bohom darované? :/",
                            "/: Získali dač a či boli zakopané? :/"
                        ],
                        [
                            "3. /: Koľko sĺz sme vlastnou rukou usušili, :/",
                            "/: od záhuby koľké duše zachránili? :/"
                        ],
                        [
                            "4. /: Či tam v nebi niekto na nás nežaluje? :/",
                            "/: A či za nás dakto Bohu poďakuje? :/"
                        ],
                        [
                            "5. /: A čo lampy? Je v nich olej? Skúmaj seba! :/",
                            "/: Nevyhasnú pred samými bránmi neba? :/"
                        ],
                        [
                            "6. /: Až sa všetci pred trón Kristov postavíme, :/",
                            "/: bratia, sestry, skúmajme sa obstojíme? :/"
                        ]
                    ]
                },
                {
                    "name": "Otče, daj nám požehnanie",
                    "number": 290,
                    "lang": "sk",
                    "url": "otce-daj-nam-pozehnanie",
                    "author": "",
                    "verses": [
                        [
                            "1. Otče, daj nám požehnanie prv než príde lúčenie, ",
                            "Svojou cestou voď nás, Pane, kým sa znova zídeme."
                        ],
                        [
                            "REF.: Žehnaj slovo zvestované, keď sa rozísť musíme, ",
                            "aby sme sa znova stretli v mene Tvojom jedine."
                        ],
                        [
                            "2. Pane, Ty nám pokrm dávaš, sýtiš slovom života, ",
                            "klesajúcich narovnávaš, sila v nich zas kolotá."
                        ],
                        [
                            "REF.: Žehnaj slovo zvestované..."
                        ],
                        [
                            "3. Duch Tvoj svätý, čo v nás býva, premieňa nás na Tvoj chrám.",
                            "Duši zrak sa vierou díva k cieľu, k neba výšinám."
                        ],
                        [
                            "REF.: Žehnaj slovo zvestované..."
                        ]
                    ]
                },
                {
                    "name": "Ráč požehnať nás",
                    "number": 291,
                    "lang": "sk",
                    "url": "rac-pozehnat-nas",
                    "author": "",
                    "verses": [
                        [
                            "1. Ráč požehnať nás, Pane, ó, žehnaj z výsosti, nech ",
                            "nad nami vždy planie lúč Tvojej milosti. Ó, daj nech ",
                            "všetkým ľuďom sa Tvoja pravda skvie, nech nesklamú ",
                            "sa bludom a príjmu spasenie, a príjmu spasenie."
                        ],
                        [
                            "2. Ó, daj, nech národ každý v tom svetle zaplesá a jazykmi ",
                            "nech navždy žalm chvály ozve sa, keď vidia Tvoju radu že ",
                            "o svet starosť máš a nad všetkým máš vládu Ty, večný Pane ",
                            "náš, Ty večný Pane náš.    "
                        ],
                        [
                            "3. Nech teda hlas náš vďačne vždy k Tebe nesie sa, že sýtiš ",
                            "ústa lačné, nás vedieš k nebesám. Ó, sláva Tu buď,  Pane, že ",
                            "Tvoje meno je nám ľuďom k spáse dané, nech vždy Ti chvála ",
                            "znie, nech vždy Ti chvála znie."
                        ]
                    ]
                },
                {
                    "name": "Milosť nášho Pána",
                    "number": 292,
                    "lang": "sk",
                    "url": "milost-nasho-pana",
                    "author": "",
                    "verses": [
                        [
                            "Milosť nášho Pána, Krista, láska Božia večná čistá ",
                            "dar tiež Ducha svätého blaž a žehnaj každého, dar tiež ",
                            "Ducha Svätého blaž a žehnaj každého. "
                        ]
                    ]
                },
                {
                    "name": "Amen, Otče",
                    "number": 293,
                    "lang": "sk",
                    "url": "amen-otce",
                    "author": "",
                    "verses": [
                        [
                            "Amen, Otče, daj to isté, pokorne Ťa vzývame, prihovor sa za nás, ",
                            "Kriste, odpusť hriechy spáchané. Duchu svätý, spravuj nás svetlom ",
                            "pravdy v každý čas, by sme dušou, telom celým Bohu večne patriť smeli! "
                        ]
                    ]
                },
                {
                    "name": "Na Pána vždy očakáva duša  moja",
                    "number": 294,
                    "lang": "sk",
                    "url": "na-pana-vzdy-ocakava-dusa-moja",
                    "author": "",
                    "verses": [
                        [
                            "1. Na Pána vždy očakáva duša moja túžobne, čo mi treba,",
                            "On mi dáva, hoc som dieťa nehodné. Tisíc krát mi dôkaz dal, ",
                            "že ma stále miloval. Milovať Ho ja chcem zase dnes i zajtra,",
                            "v každom čase. "
                        ],
                        [
                            "2. Daj mi svojho Ducha, Bože, by jak Tvoj Syn smel som žiť ",
                            "ktorý z lásky k Tebe môže vôľu Tvoju naplniť. Nedaj sa mi ",
                            "uchýliť, na úskalie naraziť. veď ma stále k Svojmu cieľu, k ",
                            "môjmu nebeskému dielu."
                        ]
                    ]
                },
                {
                    "name": "Ako Jeleň vodu hľadá",
                    "number": 295,
                    "lang": "sk",
                    "url": "ako-jelen-vodu-hlada",
                    "author": "",
                    "verses": [
                        [
                            "1. Ako Jeleň vodu hľadá vodu v čase svojej únavy,",
                            "moja duša dá sa rada Tvojmu Duchu zaplaviť. Bez ",
                            "Jeho ja pomoci nemám svetla ni moc, moja myseľ ",
                            "prirodzená ani cestu spásy nezná."
                        ],
                        [
                            "2. Ó, nech príde Duch Tvoj Svätý, Bože mocný, znovu ",
                            "k nám. S Otcom, Synom On je spätý, kliesni cestu k ",
                            "nebesám, posväcuje, riadi nás dnes i celý žitia čas, otvára",
                            "nám darov prameň na spasenie večné. Ameň."
                        ]
                    ]
                },
                {
                    "name": "S Duchom svojím príď",
                    "number": 296,
                    "lang": "sk",
                    "url": "s-duchom-svojim-prid",
                    "author": "",
                    "verses": [
                        [
                            "1. S Duchom svojím príď ó, Pane, srdcia naše osvecuj",
                            "slabosťami doráňané, sám ich silou naplňuj! Svetlo ",
                            "sveta zostaň s nami, v nekonečnej múdrosti. Uč nás ",
                            "pravej zbožnosti. Život z Boha medzi nami Svojou ",
                            "mocou roznecuj, k službe lásky posväcuj."
                        ],
                        [
                            "2. Uč nás hlásať lásku Tvoju dušiam v hriechu hynúcim, ",
                            "vystroj zvať ich k spásy zdroju, k prúdom žitia preskvúcim.",
                            "Oči, sŕdc a úst sa dotkni mocou, čo ich premení; nový život",
                            "na zemi prebuď v dušiach neochotných, ktoré svetom blúdia ",
                            "v tme mocou diabla spútané."
                        ],
                        [
                            "3. Vylej na vypráhlu hrudu prúdy Ducha Svätého, zavlaž ",
                            "srdcia Svojho ľudu, zobuď k práci každého. Chceme Teba",
                            "sláviť s tými, čo sú v Teba vštepení, z Ducha znovuzrodení.",
                            "Chcem obetovať s nimi službe lásky život svoj. Ty nás k ",
                            "dielu Svojmu spoj!"
                        ]
                    ]
                },
                {
                    "name": "Ó, Ty Vládca nad vesmírom",
                    "number": 297,
                    "lang": "sk",
                    "url": "o-ty-vladca-nad-vesmirom",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, Ty Vládca nad vesmírom všetkých svetov hviezdnych ",
                            "Pán, z lásky svojej v Ježišovi dávaš milosť hriešnym nám! ",
                            "Vzbuď nás, Pane, k Tvojej sláve spievať zvučnej chvály žalm!"
                        ],
                        [
                            "2. Z plnosti nám novú milosť udeľ v Kristu v tento čas! Vylej ",
                            "prúdy Svojho Ducha, z driemot spánku prebuď nás! Ty, ó, Pane, k ",
                            "Tvojej sláve obživ mŕtve kosti zas!"
                        ],
                        [
                            "3. Svojim deťom slovom pravdy krásu Krista osvecuj, v jednotu",
                            "nás ducha spájaj, k pravej láske roznecuj! Loďky našich zborov",
                            "Pane, riaď Ty sám a ochraňuj!"
                        ]
                    ]
                },
                {
                    "name": "Ach, príď, ach, príď",
                    "number": 298,
                    "lang": "sk",
                    "url": "ach-prid-ach-prid",
                    "author": "",
                    "verses": [
                        [
                            "1. Ach, príď, ach, príď, Duchu Svätý, v daroch spásy prebohatý ",
                            "láskou svojou spravuj nás! Uč nás cesty Tvoje vždy znať vo",
                            "vernosti pri Tebe stáť vo zlý, tiež i v dobrý čas! Osvieť, rozneť",
                            "srdce každé, aby v pravde verne stálo a bludov sa varovalo!"
                        ],
                        [
                            "2. Kde niet Tvojho požehnania, tam daromné namáhania, ",
                            "márne všetky starosti! Buďže teda našou silou, pomocou ",
                            "vždy istou, milou dušiam našim k radosti! Chceme večne ",
                            "Ti svojemu nebeskému Pánu chválu vzdávať v nebi neskonalú! "
                        ]
                    ]
                },
                {
                    "name": "Zavítaj, Kráľu náš",
                    "number": 299,
                    "lang": "sk",
                    "url": "zavitaj-kralu-nas",
                    "author": "",
                    "verses": [
                        [
                            "1. Zavítaj, Kráľu náš, ktorý moc všetku máš, požehnaj nám!",
                            "Zmocni nás pravdu niesť, šíriť vždy Tvoju česť, nezblúdiť ",
                            "z Tvojich ciest, voď nás Ty sám."
                        ],
                        [
                            "2. Slovo daj v hojnosti, rieky by milosti zvlažili nás. ",
                            "Rozožeň smrti sen, nech skvie sa slávy deň, keď už ",
                            "znieť bude len Ježišov hlas! "
                        ],
                        [
                            "3. Obživ, oj, Duchom Ty Otče nás presvätý, vypráhlu zem.",
                            "Pomôž nám pracovať, milosť, súd zvestovať, v Tvojej vždy ",
                            "službe stáť, pokým je deň."
                        ],
                        [
                            "4. Od vekov na veky, Bože náš veliký, stojí Tvoj trón. ",
                            "Preveď nás z milosti ta, kde niet úzkosti, do večnej ",
                            "radosti hor na Sion."
                        ]
                    ]
                },
                {
                    "name": "Bože, vylej požehnanie",
                    "number": 300,
                    "lang": "sk",
                    "url": "boze-vylej-pozehnanie",
                    "author": "",
                    "verses": [
                        [
                            "Bože, vylej požehnanie na nás všetkých z výsosti,",
                            "pomôž nám ctiť prikázanie Tvojho slova z radosti.",
                            "Apoštolské učenie hlása Tvoje spasenie, by sme ",
                            "Krista vodcom zvali, na hlas Jeho poslúchali. "
                        ]
                    ]
                },
                {
                    "name": "Bože, vylej požehnanie",
                    "number": 300,
                    "lang": "sk",
                    "url": "boze-vylej-pozehnanie",
                    "author": "",
                    "verses": [
                        [
                            "Bože, vylej požehnanie na nás všetkých z výsosti, ",
                            "pomôž nám ctiť prikázanie tvojho slova z radosti. ",
                            "Apoštolské učenie hlása Tvoje spasenie, by sme ",
                            "Krista vodcom zvali, na hlas Jeho poslúchali."
                        ]
                    ]
                },
                {
                    "name": "Kráľu Večný",
                    "number": 301,
                    "lang": "sk",
                    "url": "kralu-vecny",
                    "author": "",
                    "verses": [
                        [
                            "1. Kráľu Večný, udeľ nám svoje požehnanie, ",
                            "počuj naše modlitby, vyslyš tiché lkanie. ",
                            "Drahé slová semeno daj nech v srdci rastie, ",
                            "v Tebe nech je pokoj náš, plná radosť, šťastie."
                        ],
                        [
                            "2. Myseľ, srdce posväcuj k vernej službe Tebe, ",
                            "by sme ako víťazi vošli v slávne nebe. ",
                            "Tam ťa večne chválili, svojho blaha prameň, ",
                            "Spasiteľu, Pane náš. Chvála Ti, česť! Amen."
                        ]
                    ]
                },
                {
                    "name": "Požehnaj nás",
                    "number": 302,
                    "lang": "sk",
                    "url": "pozehnaj-nas",
                    "author": "",
                    "verses": [
                        [
                            "1. Požehnaj nás v tejto chvíli, Hospodine, Otče milý! ",
                            "[: Synu Boha živého, daj nám Ducha svätého!:]"
                        ],
                        [
                            "2. Požehnaj a prospech dávaj, v milosti sám k nám sa skláňaj",
                            "[: k malým, veľkým zas a zas, požehnaj nás v každý čas! :]"
                        ]
                    ]
                },
                {
                    "name": "Ó, príďže, doba nášho Pána",
                    "number": 303,
                    "lang": "sk",
                    "url": "o-pridze-doba-nasho-pana",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, príďže, doba nášho Pána, veď od vekov si sľúbená, ",
                            "nech v jasnom svite Tvojho rána vlasť naša skvitne milená, ",
                            "nech roľa skvie sa mája krásou a nádejami nových klasov."
                        ],
                        [
                            "2. Ó, príď len, príď, ty rosa zhora, zem našu zavlaž žíznivú! ",
                            "Nech rozplynie sa smrti kôra a suché kosti ožijú, by všetko dobré, ",
                            "krásne, milé zas vypučalo v novej sile."
                        ],
                        [
                            "3.  Ó, príďže, príď už, oheň z neba, a naplň vôkol celú zem, ",
                            "nech v našich dušiach bleskom z Teba noc premení sa v nový deň, ",
                            "nech srdcia v sile Spasiteľa sa znova chopia lásky diela."
                        ],
                        [
                            "4. Ó, príď Ty sám, náš milý Pane, hľa, čaká Tvoja vinica. ",
                            "Daj i nám nové  požehnanie, čo nesie lásky pravica, ",
                            "by celý svet  to videl jasne, že oheň Tvoj v nás nevyhasne."
                        ],
                        [
                            "5. Daj, nech sme v Teba vkorenení sťa jedno telo, jeden duch, ",
                            "nech Tvojou pravdou naplnený brat bratovi je verný druh, ",
                            "kým večné leto, prosté tône nás privíta raz v Tvojom lone."
                        ]
                    ]
                },
                {
                    "name": "Vo tvojom mene",
                    "number": 304,
                    "lang": "sk",
                    "url": "vo-tvojom-mene",
                    "author": "",
                    "verses": [
                        [
                            "Vo tvojom mene len prišli sme, Pane, sem, žehnal si nám. ",
                            "Požehnaj ďalej zas, rozchodu keď je čas. Ty nás veď sám ",
                            "z bojov zemských do siení nebeských, tam kde Tvoj ľud ",
                            "v slávy žiare do Tvojej zrie tváre."
                        ]
                    ]
                },
                {
                    "name": "Sláva Ti buď",
                    "number": 305,
                    "lang": "sk",
                    "url": "slava-ti-bud",
                    "author": "",
                    "verses": [
                        [
                            "Sláva Ti buď, Bože svätý, prijmi našu pieseň chvál, ",
                            "že Ty v daroch prebohatých hojnosti stôl si nám dal. ",
                            "Chlebom slova večného nás ráč  sýtiť každého až kým ",
                            "v nebeskej radosti dáš nám jesť chlieb v blaženosti."
                        ]
                    ]
                },
                {
                    "name": "Pane prúdmi požehnania",
                    "number": 306,
                    "lang": "sk",
                    "url": "pane-prudmi-pozehnania",
                    "author": "",
                    "verses": [
                        [
                            "1. Pane prúdmi požehnania meníš mŕtve púšte v raj. ",
                            "V množstve svojho zľutovania mňa tiež prosím, požehnaj. ",
                            "Požehnaj, požehnaj, mňa tiež, Pane, požehnaj!"
                        ],
                        [
                            "2. Neobchádzaj svoje dieťa, k jeho úzkostiam sa znaj! ",
                            "Biedne je, však miluje Ťa, volá: Otče, požehnaj! Požehnaj, ",
                            "požehnaj, i mňa, Otče, požehnaj!"
                        ],
                        [
                            "3. Pane, v Duchu Tvojom vanú živé vetry z nebies hôr. ",
                            "Hladnej duši zošli mannu, mocne ku mne prehovor! ",
                            "Prehovor, prehovor, mocne ku mne prehovor!"
                        ],
                        [
                            "4. Bože večný, nepremenná Tvoja láska žiari v noc. ",
                            "Trstina, hľa, nalomená, prosím dokáž pri mne moc! ",
                            "Dokáž moc, dokáž moc, dokáž pri mne svoju moc!"
                        ],
                        [
                            "5. K svojmu boku, Spasiteľu, úzko primknúť sa mi daj, ",
                            "vyslyš moju prosbu vrelú, k službe si ma povolaj! ",
                            "Povolaj, povolaj i mňa k službe povolaj!"
                        ]
                    ]
                },
                {
                    "name": "Láska k Ježišovi",
                    "number": 307,
                    "lang": "sk",
                    "url": "laska-k-jezisovi",
                    "author": "",
                    "verses": [
                        [
                            "1.Láska v Ježišovi jak je vznešená, nad zväzkami ",
                            "krvi slávne zvýšená. Bratom srdcia plní duchom ",
                            "svornosti, účastenstvo dáva v Božej milosti."
                        ],
                        [
                            "2. Kde je mliekom lásky duša kojená, nemá miesto ",
                            "zloba s pýchou spojená, brat sa s bratom teší v jeho ",
                            "radostiach, neopúšťa ani v bôľoch, žalostiach."
                        ],
                        [
                            "3. Ten kto spoznal Krista, pozná lásky taj, ktorá ",
                            "bratov ľúbi verne, naozaj, bo ich všetkých spája ",
                            "pevne dovedna Ježišov Duch, láska jeho bezodná!"
                        ]
                    ]
                },
                {
                    "name": "Aké je to utešené s bratmi",
                    "number": 308,
                    "lang": "sk",
                    "url": "ake-je-to-utesene-s-bratmi",
                    "author": "",
                    "verses": [
                        [
                            "1. Aké je to utešené s bratmi v láske prebývať, ",
                            "v jednom duchu s vďačným srdcom svojho Pána vyznávať. ",
                            "Hojné požehnanie dáva Pán tam z nebies výsosti, ",
                            "kde sa srdce k srdcu pojí s vrúcnou láskou v radosti."
                        ],
                        [
                            "2. V srdciach vrele milujúcich, v ktorých horí lásky plam, ",
                            "nemá miesta zlosť, hnev, závisť, nich si stavia Pán svoj chrám. ",
                            "Rosu svojho požehnania, mannu z nebies daruje, tomu, ",
                            "kto vždy s čistým srdcom bratov sestry miluje."
                        ],
                        [
                            "3. Pane spoj nás v bratskej láske v nerozbornú jednotu, ",
                            "Tvoj Duch svätý nech nás spája, dáva silu, istotu. ",
                            "Pomôž diabla ostré šípy štítom viery odraziť, ",
                            "láskou premôcť všetky krivdy, v tvojom mene víťaziť."
                        ],
                        [
                            "4. Drahý Pane, pridaj viery, roznieť v srdciach lásku sám, ",
                            "keď je cesta púšťou dlhá, pochod ťažký k nebesiam. ",
                            "S Tebou chceme, Spasiteľu, v duchu vždy byť spojení, ",
                            "vrele ľúbiť tvoje deti, naveky byť spasený."
                        ]
                    ]
                },
                {
                    "name": "Aké máš milé príbytky",
                    "number": 309,
                    "lang": "sk",
                    "url": "ake-mas-mile-pribytky",
                    "author": "",
                    "verses": [
                        [
                            "1. Aké máš milé príbytky, ó, Pane, ",
                            "zbory cirkvi Tebou požehnané, ",
                            "Pane, v nich máš meno slávne."
                        ],
                        [
                            "2. Prebývaš Ty tam, Pane prežiadúci, ",
                            "rozkoš máš v nich Pane všemohúci,  ",
                            "vrúcich, vernosťou sa skvúcich."
                        ],
                        [
                            "3. Na miesta tie sa verní zhromažďujú ",
                            "sťa keď hviezdam vtáci priletujú radi, ",
                            "starí ako mladí."
                        ],
                        [
                            "4. Kristove dary, milosť, požehnanie sú ",
                            "vždy z pokladov tam rozdieľané zlatých, ",
                            "spoločenstve svätých."
                        ],
                        [
                            "5. Po tom len túžim, jediný  môj Bože, ",
                            "účasť na nich prijímať nech môžem; ",
                            "žialim, keď sa od nich vzdialim."
                        ],
                        [
                            "6. Pohliadni v láske na nás v tieto časy, ",
                            "Bože, počuj nášho lkania hlasy v bdení ",
                            "nech sme zjednotení."
                        ],
                        [
                            "7. Prebývať daj nám v príbytkoch tých ",
                            "svätých, v zboroch svojej cirkvi láskou ",
                            "spätých, Kriste, svetlo pravdy čisté."
                        ]
                    ]
                },
                {
                    "name": "Slúžme len láske pravej",
                    "number": 310,
                    "lang": "sk",
                    "url": "sluzme-len-laske-pravej",
                    "author": "",
                    "verses": [
                        [
                            "1. Slúžme len láske pravej, svätej, v Kristovi sa nám zjavuje, ",
                            "zomrieme každej zlobe kliatej, ľudské čo srdcia sužuje."
                        ],
                        [
                            "2. Človeka nikdy neodmietaj, Hoci by najbiednejším bol, ",
                            "pre takých prišla spása sveta, nuž aj ty láskou zmierňuj bôľ."
                        ],
                        [
                            "3. Blížnemu lásku dokazujeme, príklad nám aj v tom Kristus dal. ",
                            "Nepriateľov tiež pomilujme, za svojich vrahov Ježiš lkal."
                        ],
                        [
                            "4. Boh si aj teba zamiloval, lásky hoc‘  nehodný si bol, ",
                            "v Kristovi k synovstvu ťa pojal, do ríše svetla uviedol."
                        ],
                        [
                            "5. Tak aj ty miluj obetave, Kristu slúž verne; On, tvoj Pán ",
                            "v Otcovej keď sa zjaví sláve otvorí ti vstup dokorán."
                        ]
                    ]
                },
                {
                    "name": "Ak ti blížny",
                    "number": 311,
                    "lang": "sk",
                    "url": "ak-ti-blizny",
                    "author": "",
                    "verses": [
                        [
                            "1. Ak ti blížny v hneve ľútom potupy šíp v srdce vryl, ",
                            "krehký sme, nuž lásky putom priviň ho bárs ublížil. ",
                            "Úprimne mu na zmierenie podaj svoju pravicu, ",
                            "ty tiež čakáš odpustenie, keď raz prídeš pred Sudcu."
                        ],
                        [
                            "2. Aj keď by sa blížny znova zachoval sťa protivník, ",
                            "odpusť zase. Ježišova vôľa to je, ktorú nik nezruší. To ",
                            "Jeho rada: Snaž sa čím prv zmieriť s ním a nech slnko",
                            "nezapadá nad kresťana hnevaním."
                        ],
                        [
                            "3. Blížny v zlobe neustáva? Odpusť zas a pamätaj, ",
                            "že tvoj Pán má sudcu práva, Jemu patrí odplata. ",
                            "Nedaj premáhať sa zlému, duch nech stráži telo mdlé, ",
                            "k Pánovi poď jedinému hľadať silu poznove."
                        ],
                        [
                            "4. A keď škodca nezomdlieva, sužuje ťa blenom hán, Ten, ",
                            "čo balzam do rán vlieva, zve ťa zaňho k modlitbám. ",
                            "Arzenál hoc hnevu celí protivník chce vystrieľať, ",
                            "odpusť ako Pán ti velí, sedemdesiat sedemkrát."
                        ]
                    ]
                },
                {
                    "name": "Ó, tá láska Tvoja",
                    "number": 312,
                    "lang": "sk",
                    "url": "o-ta-laska-tvoja",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, tá láska Tvoja , Pane, silná v moci nádhernej; ",
                            "a jak morské valy pevná, ó, rozlej sa v sile ctnej! ",
                            "Nechže moje srdce plní tej ľúbosti, živý zdroj, ",
                            "nesie tam, kde bronie sláva, vznesie v raj nebeský môj."
                        ],
                        [
                            "2. Ó, tá Tvoja láska, Pane, je kráľovským zdrojom nám. ",
                            "Ľúbiť všetkých ten je  vstave, kto prijal ju v srdce chrám. ",
                            "Tys‘  ľúbosťou, tou ó Jezu, čo tak oblažila nás, prelials’  ",
                            "svoju krv na kríži, chválený buď v každý čas!"
                        ],
                        [
                            "3. Ó, tá láska Tvoja, Pane, nik neľúbi tak jak Ty! ",
                            "Žriedlom ona lásky večnej, spočinutím sladkým vždy. ",
                            "Ó, tá láska, Tvoja Pane, nebom zemskom žití je; ",
                            "tam v tie nesie ona kraje, kde česť, chvála večne znie."
                        ]
                    ]
                },
                {
                    "name": "Je dobre v spoločnosti",
                    "number": 313,
                    "lang": "sk",
                    "url": "je-dobre-v-spolocnosti",
                    "author": "",
                    "verses": [
                        [
                            "1. Je dobre v spoločnosti nám s deťmi Božími ",
                            "[: Zrieť zdroje blaženosti a plesať nad nimi.:]"
                        ],
                        [
                            "2. Jak rosa ovlažuje smäd lúky za svitu, ",
                            "[: Pán s nami vedno tu je a žehná jednotu. :]"
                        ],
                        [
                            "3. My všetci tvoriť máme raz v nebi živý chrám, ",
                            "[: boj z hriechom dokonáme, bo svätosť sídli tam. :]"
                        ],
                        [
                            "4. Až Pán si svojich zvolá, On vládca nad všetkým, ",
                            "[: tu vzlietne cirkev zdola hor k bránam perlovým. :]"
                        ],
                        [
                            "5. Dnes celá cirkev má v tom len pripravená žiť, ",
                            "[: že nad jedným tam stádom má jeden Pastier byť. :]"
                        ]
                    ]
                },
                {
                    "name": "Po tom kresťania sa vždy poznajú",
                    "number": 314,
                    "lang": "sk",
                    "url": "po-tom-krestania-sa-vzdy-poznaju",
                    "author": "",
                    "verses": [
                        [
                            "1. Po tom kresťania sa vždy poznajú, ako v Kristovej láske bývajú. ",
                            "Len tí do vlasti prídu nebeskej a nájdu si duši slasť v nej."
                        ],
                        [
                            "REF.: [:  Krásna vlasť,  ty drahá, ty drahá duše slasť! ",
                            "Krásna vlasť, krásna vlasť ty predrahá nebeská slasť! :]"
                        ],
                        [
                            "2. Slnka páľavu často znášajú, ruky v návale práce klesajú, ",
                            "vždy ich osvieži Pastier z neba sám, spev anjelov čaká ich tam. "
                        ],
                        [
                            "REF.: [:  Krásna vlasť..."
                        ],
                        [
                            "3. Neraz vedie ich cesta hlbinou, kde sa istotou tešia jedinou: ",
                            "Ježiš všade ich verne povedie, kým večnú vlasť oko ich zrie. "
                        ],
                        [
                            "REF.: [:  Krásna vlasť... "
                        ],
                        [
                            "4. Pán keď na tróne Svojom pokynie: » Poďte, blažený! ",
                            "V novej otčine večné kráľovstvo je vám schystané« ",
                            "Spev radosti tam bude znieť. "
                        ],
                        [
                            "REF.: [:  Krásna vlasť..."
                        ]
                    ]
                },
                {
                    "name": "Milujte sa každej dobe",
                    "number": 315,
                    "lang": "sk",
                    "url": "milujte-sa-kazdej-dobe",
                    "author": "",
                    "verses": [
                        [
                            "1. »Milujte sa!« v každej dobe svojím verným káže Pán. ",
                            "Láska i vám otvorila bránu nebies dokorán. ",
                            "Láskou obklop brata brat, pomôž bremä prenášať!"
                        ],
                        [
                            "2. »Milujte sa!« Tak znie odkaz mučeníkov z plameňov. ",
                            "Vieru svoju potvrdzujte láskou čistou, nemennou. ",
                            "Káže to i Boží Syn : Nepriateľom dobre čiň!"
                        ],
                        [
                            "3. »Milujme sa!« To je heslo Božích detí všetkých čias. ",
                            "Cestou  k nebu k bratskej láske Slovo Božie volá nás. ",
                            "Láskou objať druha druh, zmocňuje nás Boží Duch."
                        ]
                    ]
                },
                {
                    "name": "Kto sú bratia moji?",
                    "number": 316,
                    "lang": "sk",
                    "url": "kto-su-bratia-moji",
                    "author": "",
                    "verses": [
                        [
                            "1. Kto sú bratia moji? Ktože sestry sú? ",
                            "Tí, Pán ktorých pojí v cirkev jedinú."
                        ],
                        [
                            "2. Húfoček ten malý k Pastierovi ľne, ",
                            "z blízka ich aj z diali láska spojuje."
                        ],
                        [
                            "3. Božie dcéry, synov zlý svet nemá rád, ",
                            "keď chcú celou silou Boha milovať."
                        ],
                        [
                            "4. To sú bratia moji, sestry, rodina, ",
                            "čo nás v Kristu pojí láska úprimná."
                        ]
                    ]
                },
                {
                    "name": "Ó, hľaďte akú lásku dal Otec",
                    "number": 317,
                    "lang": "sk",
                    "url": "o-hladte-aku-lasku-dal-otec",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, hľaďte, akú lásku dal Otec nám, Syn Jeho ",
                            "zomrieť za nás šiel na kríž sám a každý, ",
                            "kto sa vierou len k nemu zná, nie záhubu, ",
                            "no život v Ňom večný má."
                        ],
                        [
                            "2. My Jeho lásku spoznať tak smeli sme, ",
                            "že On dal Svoju dušu jak výkupné. ",
                            "Aj my tak máme duše klásť za bratov ",
                            "a slávy veniec bude nám odplatou."
                        ],
                        [
                            "3. Ó, Pane, nech nás všetkých Tvoj pojí Duch, ",
                            "že láskou k druhom bude sa vinúť druh, ",
                            "by v Tvojich šľapajach sme šli stále vpred, ",
                            "kde v službe ľuďom každý má šťastie zrieť."
                        ],
                        [
                            "4. Keď do nebeskej slávy raz pozveš nás ",
                            "a víťazom tam vence sám budeš klásť, ",
                            "nech naše Hallelujah Ti večne znie, ",
                            "že v Tvojej smrti našli sme spasenie."
                        ]
                    ]
                },
                {
                    "name": "Tu v našom bratskom stretnutí",
                    "number": 318,
                    "lang": "sk",
                    "url": "tu-v-nasom-bratskom-stretnuti",
                    "author": "",
                    "verses": [
                        [
                            "1. Tu v našom bratskom stretnutí sme v dome Pána nadchnutí, ",
                            "a spoločenstvo svätých je, Duch pravdy čo ho spojuje."
                        ],
                        [
                            "2. Smie v Bohu svojom radovať sa každý, tešiť, zaplesať; ",
                            "prúd lásky, viery, nádeje sa v zjednotení zaskveje."
                        ],
                        [
                            "3. Druh z druha sa tu raduje, že Pán ich s nimi spolu je, ",
                            "brat k bratovi sa s úctou má a od zlých slov ho zachováva."
                        ],
                        [
                            "4. Bôľ, žalosť koho navštívi, tu bratskú účasť obživí, ",
                            "hoc´ rôzny diel náš na zemi, preds´ v jednote sme spojení."
                        ]
                    ]
                },
                {
                    "name": "Ó, poďme bratia milí",
                    "number": 319,
                    "lang": "sk",
                    "url": "o-podme-bratia-mili",
                    "author": "",
                    "verses": [
                        [
                            "1.Ó, poďme bratia milí, vpred s Krista zástavou, ",
                            "On k boju sám dá sily, keď satan hrozí tmou. ",
                            "On k boju sám dá sily, keď satan hrozí tmou."
                        ],
                        [
                            "2.Veď život v Ňom len máme a prameň pokoja. ",
                            "Tí, ktorým je to známe, sa diabla neboja. ",
                            "Tí, ktorým je to známe, sa diabla neboja."
                        ],
                        [
                            "3. Nuž ruka v ruke poďme, nech láska viaže nás, ",
                            "On žehnať v noci, vo dne nás bude zas a zas. ",
                            "On žehnať v noci, vo dne nás bude zas a zas."
                        ],
                        [
                            "4. Kde bratia milujú sa vždy v láske od Pána, ",
                            "tam nádej, viera vrúcna sa druží k žehnaniam. ",
                            "Tam nádej, viera vrúcna sa druží k žehnaniam."
                        ]
                    ]
                },
                {
                    "name": "Ó, Ty hĺbka večnej lásky",
                    "number": 320,
                    "lang": "sk",
                    "url": "o-ty-hlbka-vecnej-lasky",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, Ty hĺbka večnej lásky v Kristu zjavenej, ",
                            "čuj hlas mojej hladnej duše, túžbou zomdlenej."
                        ],
                        [
                            "REF.: Otče v Kristu, Ty si láska sám! ",
                            "Naplň sebou moje srdce, v Tebe všetko mám."
                        ],
                        [
                            "2. Sľúbil si, že dary Tvoje vierou môžem vziať, ",
                            "pomôž mi v tom chladnom svete zrnká lásky siať."
                        ],
                        [
                            "REF.: Otče v Kristu..."
                        ],
                        [
                            "3. Daj mi lásku, čo vie v blížnom dobrým premôcť zlo, ",
                            "ktorá bdie, by nepriateľstvo v ľuďoch nevzniklo. "
                        ],
                        [
                            "REF.: Otče v Kristu..."
                        ],
                        [
                            "4. Ako kvapka nesie odlesk slnka veľkého, ",
                            "tak svieť tvoja láska z môjho žitia celého. "
                        ],
                        [
                            "REF.: Otče v Kristu..."
                        ]
                    ]
                },
                {
                    "name": "Jeden život máme",
                    "number": 321,
                    "lang": "sk",
                    "url": "jeden-zivot-mame",
                    "author": "",
                    "verses": [
                        [
                            "1. [: Jeden život máme ach, aj ten je krátky,:] ",
                            "ani jedna chvíľa, ani jedna chvíľa späť sa nenavráti, ",
                            "späť sa nenavráti, nenavráti."
                        ],
                        [
                            "2. [: Neprišli sme na svet žiť len svojmu blahu, :] ",
                            "slúžiť máme blížnym, slúžiť máme blížnym,",
                            "šíriť Božiu slávu, šíriť Božiu slávu, Božiu slávu."
                        ],
                        [
                            "3. [: Svieťme ako zora svieti nad obzorom, :] ",
                            "čiňme skutky lásky, čiňme skutky lásky v mene ",
                            "Ježišovom, v mene Ježišovom, Ježišovom."
                        ],
                        [
                            "4. [: Milujme vždy verne, láska neustáva, :] ",
                            "ona svoje dielo, ona svoje dielo smrťou dokonáva, ",
                            "smrťou dokonáva, dokonáva."
                        ],
                        [
                            "5. [: Príde Pán náš, príde, svojich vyhľadá si :] ",
                            "Odmení ich vernosť, odmení ich vernosť blahom večnej spásy, ",
                            "blahom večnej spásy, večnej spási."
                        ]
                    ]
                },
                {
                    "name": "Ó, brat môj predrahý",
                    "number": 322,
                    "lang": "sk",
                    "url": "o-brat-moj-predrahy",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, brat môj predrahý, hynúcich hľadaj v priepasti ",
                            "zúfalstva biedy a tmy! Blúdiacim záchrannú pravicu podaj, ",
                            "ku Spasiteľovi hriešnikov zvi."
                        ],
                        [
                            "REF.: Hynúcich volaj dnes, blúdiacich hľadaj ",
                            "povedz im, Ježiš že Spasiteľ je."
                        ],
                        [
                            "2. Hoci ním zhŕdajú, predsa On čaká, domov či niektorí ",
                            "vrátia sa z nich. Choď, vrav im dôrazne o láske Božej, ",
                            "Otec že synov zve márnotratných. "
                        ],
                        [
                            "REF.: Hynúcich volaj..."
                        ],
                        [
                            "3. V nečistom srdci, kde satan má domov, zúfalstvo, bieda, ",
                            "hriech zavláda len. Ku Spasiteľovi pozývaj takých, aby im ",
                            "zasvitol záchranný deň. "
                        ],
                        [
                            "REF.: Hynúcich volaj...",
                            " ",
                            "4. Hynúcich volaj dnes, Pán ti tak velí, k práci ti silu ",
                            "dá Spasiteľ tvoj. Rozprávaj hriešnikom bez bázne, ",
                            "s láskou, za nich, že Ježiš raz dal život svoj. "
                        ],
                        [
                            "REF.: Hynúcich volaj..."
                        ]
                    ]
                },
                {
                    "name": "Márnotratných synov",
                    "number": 323,
                    "lang": "sk",
                    "url": "marnotratnych-synov",
                    "author": "",
                    "verses": [
                        [
                            "1. Márnotratných synov, dcéry vyhľadávaj, bratu môj! ",
                            "Putá väzňov rozväzovať v Božej sile dnes sa stroj! Lúčom ",
                            "buď vždy v temnotách, mnohí hynú v hriechu tmách. ",
                            "Nesmieš márne postávať, počet budeš vydávať."
                        ],
                        [
                            "REF.: Nemeškaj! Nemeškaj! Nemeškaj! Nemeškaj! ",
                            "Práce veľa čaká nás, rýchlo letí žitia čas."
                        ],
                        [
                            "2. Nezlož ani na okamih ruky svoje nečinné, volaj spiacich ",
                            "k prebudeniu, inak každý zahynie. K Pánovi veď stratených, ",
                            "ťarchou hriechu zlomených. Vo zlom leží celý svet, ",
                            "príde Pán čo nevidieť! "
                        ],
                        [
                            "REF.: Nemeškaj! Nemeškaj!...",
                            " ",
                            "3. Radostnú zvesť ľudstvu hlásaj, každý môž´ byť spasený, ",
                            "Pán ti velí všetkých pozvať: Nech sa môj dom naplní! ",
                            "Kristovým máš svedkom byť, na Jeho česť, slávu žiť, ",
                            "žatva blízko, zreje klas, pracuj a svedč, kým je čas! "
                        ]
                    ]
                },
                {
                    "name": "Otče náš",
                    "number": 324,
                    "lang": "sk",
                    "url": "otce-nas",
                    "author": "",
                    "verses": [
                        [
                            " REF.: Nemeškaj! Nemeškaj!...",
                            " ",
                            "1. Otče náš, ktorý v nebi svoj trón máš, modlitby dietok svojich ",
                            "vyslýchaš, skloň sa i k nám, čuj prosieb vrúcny hlas, na pastvy ",
                            "svieže ľud svoj voď a pas."
                        ],
                        [
                            "2. Bohatá žatva, končí sa jej deň. Ešte kým čas je, k práci napomeň; ",
                            "ženci nech zvú, by všetko stvorenie prijalo v Kristu svoje spasenie."
                        ],
                        [
                            "3. Kráľu, veď k cieľu, sily k púti daj, víťaziť nad tmou v bojoch ",
                            "pomáhaj. Na hradbách sionských daj verne stáť, pomôž zlosť sveta ",
                            "láskou premáhať."
                        ],
                        [
                            "4. S cirkvou buď svojou, aj keď zúri boj, priprav ju k svadbe, ",
                            "rany bôle zhoj. Tvoju moc, slávu, nech tu uzrieme, prv nech ",
                            "stáť tvárou v tvár Ti budeme.       "
                        ]
                    ]
                },
                {
                    "name": "Pane Bože, vezmi nás",
                    "number": 325,
                    "lang": "sk",
                    "url": "pane-boze-vezmi-nas",
                    "author": "",
                    "verses": [
                        [
                            "1. Pane Bože, vezmi nás, vystroj k práci srdce, hlas, ",
                            "oči, ruky, nohy tiež, reč i spev, jak Ty sám chceš. "
                        ],
                        [
                            "REF.: Mocou Ducha vystroj nás svedčiť mocne v každý čas, ",
                            "aby vznietil celú zem Tvojej lásky plameň ten! Zmocni nás, ",
                            "Pane náš, mocou Ducha vystroj nás."
                        ],
                        [
                            "2. Toľko duší blúdi, mrie! Kto im svetlo prinesie? ",
                            "Kto im povie , čo je svet? Kde je koniec klamu, bied? "
                        ],
                        [
                            "REF.: Mocou Ducha vystroj nás...",
                            " ",
                            "3. Sám som hľadal, blúdil, lkal, plno žiaľu v duši mal, ",
                            "v Kristovi som  našiel však silu vzlietnuť ako vták. "
                        ],
                        [
                            "REF.: Mocou Ducha vystroj nás..."
                        ],
                        [
                            "4. Ako že by som mal kľud, dokiaľ hynie aj môj ľud? ",
                            "Dokiaľ slúži fetišom, pohŕda však Ježišom. "
                        ],
                        [
                            "REF.: Mocou Ducha vystroj nás..."
                        ],
                        [
                            "5. Viem že ľudské želania nepomôžu, nezmenia, ",
                            "k Pánovi však vierou zriem, prosím Ho a ďakujem. "
                        ]
                    ]
                },
                {
                    "name": "Učiň ma Bože svetielkom",
                    "number": 326,
                    "lang": "sk",
                    "url": "ucin-ma-boze-svetielkom",
                    "author": "",
                    "verses": [
                        [
                            "REF.: Mocou Ducha vystroj nás...",
                            " ",
                            "1. Učiň ma, Bože, svetielkom, čo vôkol do tmy ríš ",
                            "vždy žiari jasným plamienkom, kde Ty ho postavíš."
                        ],
                        [
                            "2. Učiň ma, Bože, kvetinou, čo vonia na vôkol, ",
                            "nech mojou snahou jedinou je tíšiť ľudský bôľ."
                        ],
                        [
                            "3. Učiň ma, Bože, hviezdičkou, čo vodí zblúdených. ",
                            "Aj mňa veď úzkou cestičkou v cieľ v bránach nebeských."
                        ],
                        [
                            "4. Učiň ma, Bože, čím chceš sám, len keď viem, že som Tvoj, ",
                            "že Duch Tvoj napriek sveta tmám je mi vždy svetla zdroj."
                        ]
                    ]
                },
                {
                    "name": "Pomôžte nám stavať Sion",
                    "number": 327,
                    "lang": "sk",
                    "url": "pomozte-nam-stavat-sion",
                    "author": "",
                    "verses": [
                        [
                            "1. Pomôžte nám stavať Sion, bo je málo sily v nás. ",
                            "Ježišovi verte a On pomoc dá nám v pravý čas. ",
                            "My však s chuťou do práce dajme sa tak, jak Pán chce."
                        ],
                        [
                            "REF.: Hosanna Pánovi nášmu, spievajte Mu z všetkých síl, ",
                            "ctite Ho že tak nás ľúbil, že krv za nás vycedil."
                        ],
                        [
                            "2. Na zlé pastvy idú mnohí, dobré miesta nechcú znať, ",
                            "kde Pán svoje ovce vodí Jeho slovo počúvať. ",
                            "Všemožne sa starajme, domy Božie stavajme. "
                        ],
                        [
                            "REF.: Hosanna Pánovi...",
                            " ",
                            "3. Kiež by po celej už zemi, všade, kde len ľudia sú, ",
                            "Boží chrám bol postavený, v ňom zvesť pravdy prinesú. ",
                            "Pane, v moci pri nás buď, by ťa spoznal všetok ľud. "
                        ],
                        [
                            "REF.: Hosanna Pánovi... "
                        ]
                    ]
                },
                {
                    "name": "Rozsievajme, bratia dobré semä",
                    "number": 328,
                    "lang": "sk",
                    "url": "rozsievajme-bratia-dobre-sema",
                    "author": "",
                    "verses": [
                        [
                            "1. Rozsievajme, bratia, dobré semä pravdy; to je vôľa Božia; ",
                            "sejme v každý čas! Kristus nám pomôže; semeno vyrastie; ",
                            "úžitok prinesie, lebo dnes je čas!"
                        ],
                        [
                            "REF.: [: Ježiš má nás rád! Ježiš má nás rád. ",
                            "Rozsievajme pravdu, nemárnime čas! : ]"
                        ],
                        [
                            "2. Rozsievajme smelo aj na plané role, na nešťastné srdcia, ",
                            "sejme v každý čas! Boh dá požehnanie, keď si nás vyvolil, ",
                            "a k sejbe povolal v tento vážny čas. "
                        ],
                        [
                            "REF.: [: Ježiš má nás rád!...",
                            " ",
                            "3. Rozsievajme stále, žiadny strach nemajme, nám je to poznaté, ",
                            "že je ťažký čas! Keď sa práca skončí prijmeme pozvanie tam ",
                            "v tie kraje krásne! To je Kristov hlas! "
                        ],
                        [
                            "REF.: [: Ježiš má nás rád!... "
                        ]
                    ]
                },
                {
                    "name": "Ó, povedz mi, bratu, kam spiechaš",
                    "number": 329,
                    "lang": "sk",
                    "url": "o-povedz-mi-bratu-kam-spiechas",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, povedz mi, bratu, kam spiechaš, dáš tŕnistou cestou sa viesť? ",
                            "Ty sestra, čo vďačne svet necháš, kde cieľ je tých obtiažných ciest? ",
                            "Nám cieľom je nebeská krása, už ďaleko nemáme tam, ",
                            "kde budeme pri tróne jasať, že zvíťazil Baránok sám."
                        ],
                        [
                            "REF.: Nám cieľom je nebeský stan, už ďaleko nemáme tam, ",
                            "kde budeme pri tróne jasať, že zvíťazil Baránok sám."
                        ],
                        [
                            "2. Vrav, bratu, mi o vlasti krásnej, tak rád by som prebýval tam.  ",
                            "Ó, sestra, či ku cieľu šťastne dôjsť s vami tiež ja možnosť mám? ",
                            "My povoľní budeme Duchu, vždy hojne ho udieľa Pán, On k práci, ",
                            "v boj nás v sily rúchu vpred vedie až do nebies brán..."
                        ],
                        [
                            "REF.: Nám cieľom je nebeský stan ..."
                        ],
                        [
                            "3. Ó, bratia a sestry, ja s vami si zvoliť cieľ nebeský chcem a verím, ",
                            "že Spasiteľ dá mi, že verne boj dobojujem. Buď vítaná, spasená duša, ",
                            "už pôjdeme spoločne vpred aj v bojoch, kde viera sa skúša, ",
                            "kým víťazom Kráľ sa dá zrieť. "
                        ],
                        [
                            "REF.: Nám cieľom je nebeský stan..."
                        ]
                    ]
                },
                {
                    "name": "Pri cieli blízko",
                    "number": 330,
                    "lang": "sk",
                    "url": "pri-cieli-blizko",
                    "author": "",
                    "verses": [
                        [
                            "1. Pri cieli  blízko, nechýba moc, hriechu by navždy ",
                            "zmizla už noc. V tvojom však srdci znie: ",
                            "» Odídi ešte nie! Neskôr dám zvolenie k obráteniu.« "
                        ],
                        [
                            "2. Pri cieli blízko, dnes je tvoj čas! Ježiš chce srdce ",
                            "dostať už raz. Čakajú anjeli, spásu by videli Bratov ",
                            "hlas posmelí: » Duša ó, poď!«"
                        ],
                        [
                            "3. Pri cieli blízko, preblaženom, na srdci takmer ",
                            "Ježišovom. Len tam je záchrana! S vierou hľaď ",
                            "na Pána, ovečka zranená poď kým je čas!"
                        ],
                        [
                            "4. Pri cieli blízko! Príde raz súd! Od hrôzy kde sa ",
                            "duša má hnúť?! Sklamali nádeje, vrátiť sa pozde je. ",
                            "Kdeže sa podeje? Zahynie v tmách."
                        ]
                    ]
                },
                {
                    "name": "Teskný hlas počuť Pastiera",
                    "number": 331,
                    "lang": "sk",
                    "url": "teskny-hlas-pocut-pastiera",
                    "author": "",
                    "verses": [
                        [
                            "1. Teskný hlas počuť Pastiera, k ovečkám čo sa poberá. ",
                            "Vidí ich v biednom nešťastí bezmocne ležať v priepasti."
                        ],
                        [
                            "REF.: Hľadajte, hľadajte, moje ovečky, hľadajte! ",
                            "Hľadajte, hľadajte, zahynúť im nedajte."
                        ],
                        [
                            "2. Pastier sám nechce oviec tuk, vyprostiť chce ich iba z múk. ",
                            "Pre ne On prišiel, pre ne žil, pre ne aj život položil. "
                        ],
                        [
                            "REF.: Hľadajte, hľadajte..."
                        ],
                        [
                            "3. Spasený kto si, pomáhaj, nie len slasť sladkú užívaj. ",
                            "Čestne plň veľké úlohy! Či hriech ťa druhých nebolí? "
                        ],
                        [
                            "REF.: Hľadajte, hľadajte...",
                            " ",
                            "4. Pred Boží súd raz prídeme, súdený láskou budeme. ",
                            "Kto urobí tu kedy dosť? Kto splní lásky povinnosť? "
                        ],
                        [
                            "REF.: Hľadajte, hľadajte..."
                        ]
                    ]
                },
                {
                    "name": "Posolstvo čujte nádherné",
                    "number": 332,
                    "lang": "sk",
                    "url": "posolstvo-cujte-nadherne",
                    "author": "",
                    "verses": [
                        [
                            "1. Posolstvo čujte nádherné, na kríži Kristom kúpené: ",
                            "zomrel tam za mňa, za teba, aby nás vniesol do neba."
                        ],
                        [
                            "REF.: [: Posolstvu tomu kto len verí, ",
                            "vkročiť smie iste raz do nebies dverí. :]   "
                        ],
                        [
                            "2. Evanjelia prijmi zvesť, Kristovi daj sa k nebu viesť, ",
                            "nasleduj verne Pastiera, za nás čo v mukách zomieral. "
                        ],
                        [
                            "REF.: [: Posolstvu tomu..."
                        ],
                        [
                            "3. Človeče, srdce kamenné Kristovej otvor premene. ",
                            "Milosti doba pominie, čo spravíš v súdu hodine? "
                        ],
                        [
                            "REF.: [: Posolstvu tomu..."
                        ],
                        [
                            "4. Neváhaj, ale s radosťou uchop sa Ježišových slov. ",
                            "Vieru on tvoju odmení, korunuje ťa spasením. "
                        ],
                        [
                            "REF.: [: Posolstvu tomu..."
                        ]
                    ]
                },
                {
                    "name": "Vďačne Ťa velebíme",
                    "number": 333,
                    "lang": "sk",
                    "url": "vdacne-ta-velebime",
                    "author": "",
                    "verses": [
                        [
                            "1. Vďačne Ťa velebíme, Vykupiteľu náš, celým Ťa srdcom ctíme, ",
                            "k ľudstvu že lásku máš. Cirkev si chránil svoju, dodnes až s ňou si bol, ",
                            "svetlom i silou k boju, ohňa val navôkol."
                        ],
                        [
                            "2. Cez prekážky sťa hory, cez bolesť, hnev i zášť, vo vzdutom zloby mori, ",
                            "v zúrivom vrení zvlášť. Pravicou Svojou silnou šťastie Svoj vodíš ľud, ",
                            "radou sám neomylnou premieňaš búrky v kľud."
                        ],
                        [
                            "3. Zástupom pokoj hlásať. Svojich si poslov stroj, aby tak mohol jasať ",
                            "vykúpený zbor Tvoj. V svete nech šírom žiari spasenia tvojho svit, ",
                            "pravda nech bludy zmarí, čo svet chcú podmaniť."
                        ],
                        [
                            "4. Všetkých nás k vyznávaniu Duchom sám Svätým vzbuď, k práci ",
                            "a obrábaniu vinice dávaj chuť. Prosby a naše dary nech Tvoj chrám ",
                            "stavajú, nech Tvoj ľud čulý, jarý kráča vpred ku raju.       "
                        ]
                    ]
                },
                {
                    "name": "Tu je miesto",
                    "number": 334,
                    "lang": "sk",
                    "url": "tu-je-miesto",
                    "author": "",
                    "verses": [
                        [
                            "1. Tu je miesto, sem ich doveďte k stolu u Boha živého. ",
                            "Len pozývajte, môj dom naplňte! Príkaz Kráľa znie samého."
                        ],
                        [
                            "REF.: Na cesty choďte, zvite a voďte, donúťte ich k stolu prísť. ",
                            "Len oddane neste pozvanie a prinúťte ich sem prísť."
                        ],
                        [
                            "2. Tu je miesto, sem ich doveďte! Poďme, srdcia hoc slabnú nám, ",
                            "veď mnohí čujú, predsa vzdorujú, bo ich omámil sveta klam. "
                        ],
                        [
                            "REF.: Na cesty choďte..."
                        ],
                        [
                            "3. Tu je miesto, sem ich doveďte! My sme poslovia Pánoví; ",
                            "kiež  každý by šiel, Ježiš zaňho mrel, Otec láskou ho osloví. "
                        ],
                        [
                            "REF.: Na cesty choďte..."
                        ]
                    ]
                },
                {
                    "name": "To Tvoje dielo, Pane náš",
                    "number": 335,
                    "lang": "sk",
                    "url": "to-tvoje-dielo-pane-nas",
                    "author": "",
                    "verses": [
                        [
                            "1. To Tvoje dielo, Pane náš, čo pri ňom stojíme! ",
                            "A keď Ty sám oň starosť máš, oj, isto nezhynie! ",
                            "No, aj to semä zasiate skôr, než dá klasy bohaté, ",
                            "a v lone zeme zomiera a vlastného sa bytia vzdá, ",
                            "sa v smrti vzdá, sa svojho bytia vzdá."
                        ],
                        [
                            "2. Ty šiel si, Jezu, k nebesiam a poznal ťarchu bied. ",
                            "Ty každého, kto verí, sám tou cestou vedieš vpred. ",
                            "Tak i nám na tom podiel daj: smieť z utrpenia vstúpiť v raj! ",
                            "Veď bránou svojej smrti nás i s Tvojím dielom v svetla jas, ",
                            "tam v svetla jas veď bránou smrti nás."
                        ]
                    ]
                },
                {
                    "name": "Vezmi, Pane, život môj",
                    "number": 336,
                    "lang": "sk",
                    "url": "vezmi-pane-zivot-moj",
                    "author": "",
                    "verses": [
                        [
                            "3. Raz ako semä zasiate si v hrobe spočíval. Oj, otvor ",
                            "žriedla bohaté, bys' ľud svoj požehnal. A pošli poslov, ",
                            "nech čím skôr už ohlasuje verných zbor zvesť spásy ",
                            "všetkým krajinám. V tú službu dovoľ vojsť i nám. ",
                            "V boj, v službu tam, ó, dovoľ vstúpiť nám!                                                                                                                                                                                                                                                                                                                                                                                                                  ",
                            " ",
                            "1. Vezmi, Pane, život môj, posväť ma, som večne Tvoj! ",
                            "Čas môj, dni a hodiny vezmi, Jezu jediný."
                        ],
                        [
                            "2. Vezmi ruky moje sám, ukáž ako slúžiť mám! ",
                            "Vezmi nohy, nauč ich kráčať cestách po Tvojich!"
                        ],
                        [
                            "3. Vezmi hlas, nech Teba len oslavuje deň čo deň. ",
                            "Do úst mojich vlož si sám, čo ako vravieť mám."
                        ],
                        [
                            "4. Vezmi zlato, striebro tiež, nič si nechcem nechať, ",
                            "vieš, rozum, silu, schopnosti riaď, Ty, Pane, z milosti!"
                        ],
                        [
                            "5. Vezmi vôle mojej let, v svojej stíš ju, nad ňu niet! ",
                            "Sprav si v mojom srdci chrám a tak veď ma k výšinám."
                        ],
                        [
                            "6. Vezmi mojej lásky kvet, vezmi, čo je Tvoje späť! ",
                            "Pane, nech je život môj, navždy, večne, cele Tvoj."
                        ]
                    ]
                },
                {
                    "name": "Ó, ľud Boží, vykúpený",
                    "number": 337,
                    "lang": "sk",
                    "url": "o-lud-bozi-vykupeny",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, ľud Boží, vykúpený, vážna práca čaká vás; ",
                            "dal ju vám Pán oslávený, čo posledný Jeho vzkaz: ",
                            "Nad priepasťou ste už stáli, tieňom smrti prikrytí, ",
                            "by ste pomoc obdržali, bol som na kríži pribitý."
                        ],
                        [
                            "2. Choďte celým sveta kruhom, od juhu až k severu, ",
                            "vystrojený mojím Duchom ničte hriešnu neveru! ",
                            "Oznámte to každej duši, že s jej biedou súcit mám, ",
                            "keď sa ktorá ku mne blíži, že jej život, zdravie dám."
                        ],
                        [
                            "3. Pán nám všetkým zveril dary a vyslal nás pracovať; ",
                            "raz pred súdom Jeho tvári s nami bude účtovať. ",
                            "Tam sa zjaví každé dielo, úmysly a pohnútky; ",
                            "jedni s hanbou, iní smelo uzrú z práce výsledky."
                        ],
                        [
                            "4. Znajúc Pána spravodlivosť, slúžme hriešnym ",
                            "k spaseniu! Berme k službe Jeho milosť a nám ku posväteniu! ",
                            "Čo svedčíme aj slovami, to potvrďme životom! Tak Pán ",
                            "Ježiš bude s nami, posadí nás na svoj trón."
                        ]
                    ]
                },
                {
                    "name": "Tam z diaľných sveta krajov",
                    "number": 338,
                    "lang": "sk",
                    "url": "tam-z-dialnych-sveta-krajov",
                    "author": "",
                    "verses": [
                        [
                            "1. Tam z diaľných sveta krajov, kde večný ľad a sneh, ",
                            "i od palmových hájov, kde páli slnko, smäd, cez hory, ",
                            "lesy, pláne, hlas mocný zaznieva » Nech Slovo Tvoje, ",
                            "Pane, i nám sa rozsieva!«"
                        ],
                        [
                            "2. Sem, kde žatva mnohá, nech ženci prídu žať, my chceli ",
                            "by sme Boha tiež v pravde ctiť a znať. Kde klam a bludy hrozné ",
                            "až dosiaľ panujú, tam čisté Slovo Božie nech v pravde zvestujú."
                        ],
                        [
                            "3. Vám, kresťania, sa hlása to Slovo života, nech roznáša sa spása, ",
                            "kde hriechu temnota. Nech svetlo pravdy žiari, by svitol jasný deň! ",
                            "Nech Krista ctí a slávi ľud každý, celá zem!"
                        ],
                        [
                            "4. Čo, že tam krása rastie a múdrosť mnohá je, keď neznáme je ",
                            "šťastie, len smrti kročaje! Ach darmo Božie dary sú rozsypané tam, ",
                            "keď nepriateľ ten starý ľud učí veriť v klam."
                        ],
                        [
                            "5. No a my s svetlom v hrudi či mohli by sme zniesť, že ľudia ",
                            "ctia tam bludy, ich večný čaká trest? Nie! Ešte je tu spása, a Boh ",
                            "má všetkých rád! Kde blaho zvesť sa hlása, svet možno odokliať."
                        ],
                        [
                            "6. Nuž nesme prápor Boží až v sveta končiny, tam nech sa množí ",
                            "sťa morské hlbiny. Len tam sa pokoj začne, moc hriechu poľaví, ",
                            "kde ľudstvo Krista vďačne jak Pána oslávi."
                        ]
                    ]
                },
                {
                    "name": "To meno Ježiš sladké je",
                    "number": 339,
                    "lang": "sk",
                    "url": "to-meno-jezis-sladke-je",
                    "author": "",
                    "verses": [
                        [
                            "1. To meno Ježiš sladké je a srdce občerstvuje, ",
                            "v ňom prameň všetkej nádeje, On vesmír pohybuje."
                        ],
                        [
                            "REF.: Ó, Jezu všetkým poznať daj tú sladkosť v Tvojom mene, ",
                            "nech v šírošíry sveta kraj je vďačne zvelebené!"
                        ],
                        [
                            "2. V tom mene Ježiš na zemi už hriešnych milióny ",
                            "sa zakotvili v spasení , hoc ich reč rôzne tóni. "
                        ],
                        [
                            "REF.: Ó, Jezu všetkým poznať daj..."
                        ],
                        [
                            "3. Veď iné meno nepočuť, čo ľuďom k spáse dané, ",
                            "len v mene Ježiš Boží ľud má svojho blaha prameň. "
                        ],
                        [
                            "REF.: Ó, Jezu všetkým poznať daj..."
                        ],
                        [
                            "4. Kto najkrásnejšiu krásu chceš tu v tomto svete vlastniť, ",
                            "ó, snaž sa meno Ježiš tiež mať v srdci a byť šťastný! "
                        ],
                        [
                            "REF.: Ó, Jezu všetkým poznať daj..."
                        ]
                    ]
                },
                {
                    "name": "Koho pošlem?",
                    "number": 340,
                    "lang": "sk",
                    "url": "koho-poslem",
                    "author": "",
                    "verses": [
                        [
                            "1. Koho pošlem? Pán sa pýta, mojej žatvy nastal čas. ",
                            "Kraj sa belie, kto sa chytá kôs a srpov, zbierať klas? ",
                            "Pán ťa volá, Pán ti velí hriešnych volať k spaseniu, ",
                            "pomôž mnohým zastať v cieli, On ti chystá odmenu."
                        ],
                        [
                            "2. Keď sa nedá v cudzie kraje za more ísť k pohanom, ",
                            "žeň aj doma bohatá je, do nej zve ťa vlastný dom. ",
                            "Aj keď nevieš cudzie reči prorocký hoc' nemáš dar, ",
                            "predsa môžeš verne svedčiť, dať sa služby na oltár."
                        ],
                        [
                            "3. Pokým duše v hriechu hynú, buď vždy k práci hotový, ",
                            "neodčiní svoju vinu, kto stráž nedal bratovi. Pán keď volá ",
                            "k žatvy dielo, čuj to, duša úprimná! Kiež by vždy a všade ",
                            "znelo: » Tu som, Pane, pošli mňa!«"
                        ]
                    ]
                },
                {
                    "name": "Vstaň, lebo noc sa blíži",
                    "number": 341,
                    "lang": "sk",
                    "url": "vstan-lebo-noc-sa-blizi",
                    "author": "",
                    "verses": [
                        [
                            "1. Vstaň, lebo noc sa blíži, nespi, keď k práci čas! ",
                            "Povstaň, kým Pána nášho láskavý zneje hlas. Pracuj, ",
                            "kým slnko svieti, čoskoro padne tieň. Povstaň, ",
                            "už noc sa blíži, a minie spásy deň!"
                        ],
                        [
                            "2. Vstaň, lebo noc sa blíži, tvor, kým jas poludnia! ",
                            "Nemá sa v obeť dať len už sila posledná. Pracuj, ",
                            "ó, dieťa Božie! Premáhaj nechuť lieň! Povstaň už, ",
                            "noc sa blíži, a minie spási deň!"
                        ],
                        [
                            "3. Vstaň, lebo noc sa blíži, slnko už zapadá. Pán ",
                            "diela velí: Pracuj! Veď On ti silu dá. Pracuj kým ",
                            "nezastrie ťa posledný smrti sen. Povstaň už, ",
                            "noc sa blíži a minie spási deň!"
                        ]
                    ]
                },
                {
                    "name": "Nočný už zmizol tieň",
                    "number": 342,
                    "lang": "sk",
                    "url": "nocny-uz-zmizol-tien",
                    "author": "",
                    "verses": [
                        [
                            "1. Nočný už zmizol tieň, nový nám svitol deň, ",
                            "čaká nás vznešená úloha; viesť smädných ku zdroju, ",
                            "zomdlených k pokoju, zasvätiť životy pre Boha!"
                        ],
                        [
                            "REF.: Odplatou bohatou Syn Boží poctí nás, ",
                            "tých, ktorí nemárnia drahý čas, namiesto únavy ",
                            "večne ich oslávi, uvedie do zeme večných krás."
                        ],
                        [
                            "2. Združte sa ku práci, ó, Boží delníci! Rozličný úkol ",
                            "vám zverený: Čo jeden rozsieva, nech iný zalieva! ",
                            "Pracujte v duchovnom spojení! "
                        ],
                        [
                            "REF.: Odplatou bohatou..."
                        ],
                        [
                            "3. Už sa deň znižuje, Pán sa prísť hotuje, prichádza od ",
                            "sluhov počet brať! Ó, duša milená, či budeš schválená? ",
                            "Budeš môcť s úžitkom hrivnu dať? "
                        ],
                        [
                            "REF.: Odplatou bohatou..."
                        ]
                    ]
                },
                {
                    "name": "Náš život ako letný deň",
                    "number": 343,
                    "lang": "sk",
                    "url": "nas-zivot-ako-letny-den",
                    "author": "",
                    "verses": [
                        [
                            "1. Náš život ako letný deň, má tieň i slnka jas, ",
                            "sa míňa rýchlo ako sen a nevráti sa zas. "
                        ],
                        [
                            "REF.: Ako sen sa míňa čas, ktorým Pán žehná nás, ",
                            "ranných kvetov nádhera vädne v chlade večera."
                        ],
                        [
                            "2. Hoc krátko iba žijeme, je prevzácny to čas, ",
                            "v ňom všetci semä sejeme, čo rozdielny dá klas. "
                        ],
                        [
                            "REF.: Ako sen sa míňa čas...",
                            " ",
                            "3. Ó, pracuj každý za rána a neseď nečinne, ",
                            "by práca bola zdolaná, kým život pominie. "
                        ],
                        [
                            "REF.: Ako sen sa míňa čas..."
                        ],
                        [
                            "4. Je šťastný, kto si práce čas tu verne naplní, ",
                            "keď pán ho pozve k Sebe raz, On sám ho odmení. "
                        ],
                        [
                            "REF.: Ako sen sa míňa čas..."
                        ]
                    ]
                },
                {
                    "name": "S radosťou chcem svedčiť",
                    "number": 344,
                    "lang": "sk",
                    "url": "s-radostou-chcem-svedcit",
                    "author": "",
                    "verses": [
                        [
                            "1. S radosťou chcem svedčiť ja o Kristu, že dal život ",
                            "za mňa hriešneho, vyvyšovať chcem tú lásku čistú, ",
                            "ktorá mňa spasila biedneho."
                        ],
                        [
                            "REF.: Pracuj pre Krista, slúž Mu z radosti, slúž Mu ",
                            "z radosti, pracuj pre Krista, šťastný život On dá ti."
                        ],
                        [
                            "2. Vždy chcem viacej Ježiša milovať, zasvätiť sa len ",
                            "v Jeho službu, pomoc svoju sľubuje mi dávať, to mi ",
                            "dodáva novú silu. "
                        ],
                        [
                            "REF.: Pracuj pre Krista...",
                            " ",
                            "3. Všetci, čo ste hriešni, poďte k Nemu, ktorí hriechu ",
                            "dosiaľ slúžite, u Neho nájdete milosť istú. Radosť ",
                            "v srdci mávať budete. "
                        ],
                        [
                            "REF.: Pracuj pre Krista..."
                        ],
                        [
                            "4. Šťastné a blažené sú tie duše, ktoré krv Pána vykúpila. ",
                            "Rád svedčia o Kristu v každom čase. Chvália vždy ",
                            "svojho Spasiteľa. "
                        ],
                        [
                            "REF.: Pracuj pre Krista... "
                        ]
                    ]
                },
                {
                    "name": "Ó, dielo Svoje sám, náš Pane, rozhojni",
                    "number": 345,
                    "lang": "sk",
                    "url": "o-dielo-svoje-sam-nas-pane-rozhojni",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, dielo Svoje sám, náš Pane, rozhojni ",
                            "a horlivosti plamene v nás všetkých rozohni."
                        ],
                        [
                            "REF.: Vystroj, vystroj sám žencov do práce ",
                            "a zažni v našom národe si svetlá žiariace."
                        ],
                        [
                            "2. Ráč, Pane, k dielu nám dať z Ducha Svojho síl, ",
                            "by každý verným svedkom bol a v tom sa rozhojnil. "
                        ],
                        [
                            "REF.: Vystroj, vystroj..."
                        ],
                        [
                            "3. V tom diele, Pane, Ty sa ujmi nemocných ",
                            "a deti Svoje pozdvihni, čo dochádza im dych. "
                        ],
                        [
                            "REF.: Vystroj, vystroj...",
                            " ",
                            "4. Nech Tebe za dielo znie spev náš nadšený, ",
                            "bo všetka milosť, všetok zdar len z teba pramení. "
                        ],
                        [
                            "REF.: Vystroj, vystroj..."
                        ]
                    ]
                },
                {
                    "name": "Sione, povstaň",
                    "number": 346,
                    "lang": "sk",
                    "url": "sione-povstan",
                    "author": "",
                    "verses": [
                        [
                            "1. Sione, povstaň, svetlo už svitá, ozdob sa ",
                            "slávne Pána si vítať. Prišla chvíľa radostná, ",
                            "blíži sa Pán Ježiš k nám! "
                        ],
                        [
                            "REF.: [ : Kristovou krvou máme ",
                            "hriechy obmyté víťazný chválospev znie. :]"
                        ],
                        [
                            "2. Duša, čo vzdycháš strápená celá, zmorená ",
                            "biedou, nemeškaj veľa, v Spasiteľa náručí ",
                            "nový život vypučí. "
                        ],
                        [
                            "REF.: [ : Kristovou krvou..."
                        ],
                        [
                            "3. Pokračuj, pútnik, dopredu smelo po ceste ",
                            "spásy za Spasiteľom. On ťa vedie k domovu, ",
                            "odmenu má hotovú. "
                        ],
                        [
                            "REF.: [ : Kristovou krvou ..."
                        ],
                        [
                            "4. Sione, viery pochodeň vyvýš, Pán tvoj sa blíži, ",
                            "v sláve Ho vidíš, chváľ Ho spevom jasavým, ",
                            "čoskoro už budeš s Ním. "
                        ],
                        [
                            "REF.: [ : Kristovou krvou..."
                        ]
                    ]
                },
                {
                    "name": "Napred, bratia",
                    "number": 347,
                    "lang": "sk",
                    "url": "napred-bratia",
                    "author": "",
                    "verses": [
                        [
                            "1. Napred, bratia, smelo ďalej, za Ježišom k nebesiam! ",
                            "Po bolesti, dobe žiaľnej večná radosť kynie nám. Napred! ",
                            "Z výšin nebies volá lásky plný Otcov hlas: Satana kto ",
                            "hrozby zdolá, uzrie mojej slávy jas!"
                        ],
                        [
                            "2. Napred, bratia! Pamätajme na preslávny v nebi cieľ. ",
                            "Na zemi už nehľadajme blaženosti, šťastia diel. Napred! ",
                            "Len tam nad horami čaká  na nás otčina. Tu sme iba ",
                            "cudzincami, tam Brat, Otec, Rodina."
                        ],
                        [
                            "3. Napred, bratia, verne k dielu, vykupujme krátky čas!",
                            "Požehná Pán snahu smelú, zdarom korunuje nás. Napred! ",
                            "Chvíle premrhané nikdy sa viac nevrátia. A tie hrivny ",
                            "zakopané nejedného zatratia."
                        ],
                        [
                            "4. Napred, napred! K domovine! Koruna už skvie sa tam, ",
                            "až sa doba bojov minie, dá ju verným Otec sám. Napred! ",
                            "Víťazstvo je isté! V Tvojom kríži spásy zdroj, v krvi Tvojej, ",
                            "Jezu Kriste, Spasiteľu, Kráľu môj!"
                        ]
                    ]
                },
                {
                    "name": "Príď, ó spása Siona",
                    "number": 348,
                    "lang": "sk",
                    "url": "prid-o-spasa-siona",
                    "author": "",
                    "verses": [
                        [
                            "1. Príď, ó, spása Siona k ľudu zmluvy, zákona, ",
                            "Bože svätý, nebeský, Svoje ruky rozprestri, navráť ",
                            "k Sebe Izrael, nedaj, aby v púšti mrel."
                        ],
                        [
                            "2. Hriechy ich Ty, Bože, zhlaď, Svoju milosť ráč im dať. ",
                            "Izraela zblúdenie bolo sveta zmierenie, kiež ľud Boží ",
                            "v pokání z nevery sa vymaní."
                        ],
                        [
                            "3. Prídže, plnosť pohanov, Izraela záchranou, aby starej ",
                            "zmluvy ľud v novú dal sa zahrnúť a tak v kruhu národov ",
                            "ožil novou slobodou."
                        ]
                    ]
                },
                {
                    "name": "Zvesť spásy preradostná znie",
                    "number": 349,
                    "lang": "sk",
                    "url": "zvest-spasy-preradostna-znie",
                    "author": "",
                    "verses": [
                        [
                            "1. Zvesť spásy preradostná znie po sveta končinách: ",
                            "vykúpenie dokonané je na kríža výšinách. Tak miloval ",
                            "Boh svet, že až na smrť Syna dal, aby ten kto v Neho ",
                            "verí, život večný iste mal. "
                        ],
                        [
                            "REF.: Spasenie Ježiš dá. Nech to čuje celý svet. ",
                            "Poď a ber, kto len chceš, spásy bez kríža však niet."
                        ],
                        [
                            "2. Hlas Spasiteľov volá k slávnej nebies večeri. ",
                            "Nezavrhuj lásku svätú. Šťastný, kto jej uverí. ",
                            "Ja som chlieb života, hladu trpieť nebude, kto je ",
                            "mojím, kto mi verí, obstojí aj na súde. "
                        ],
                        [
                            "REF.: Spasenie Ježiš dá...",
                            " ",
                            "3. Čuj výstražný hlas Boží, nepohŕdaj milosťou. ",
                            "Rýchlo letí čas, ty musíš rátať s hroznou večnosťou. ",
                            "Ó, zachráň, zachráň sa. Nepozeraj nikdy späť. ",
                            "Sudca ti je za pätami, zľutovania uňho niet. "
                        ],
                        [
                            "REF.: Spasenie Ježiš dá ..."
                        ],
                        [
                            "4. Tak vážne priateľ večný privoláva z výšin nám: ",
                            "v ranách mojich odpustenie duše drahé kynie vám. ",
                            "Kto sluch máš, počúvaj, v Ježišovi nájdeš mier, ",
                            "pokoj srdcu, spásu duši. K Nemu poď len, Jemu ver. "
                        ],
                        [
                            "REF.: Spasenie Ježiš dá..."
                        ]
                    ]
                },
                {
                    "name": "Ešte raz v mladosti čas",
                    "number": 350,
                    "lang": "sk",
                    "url": "este-raz-v-mladosti-cas",
                    "author": "",
                    "verses": [
                        [
                            "1. Ešte teraz  v mladosti čas, keď nás všetko tešiť vie, ",
                            "do služby Pán pozýva nás, pokiaľ v nás dosť sily je."
                        ],
                        [
                            "REF.: Pre Ježiša, nášho Pána, pracujeme hneď za svitu, ",
                            "by sme boli hotoví, kým zájde slnko z blankytu."
                        ],
                        [
                            "2. Kto má lásku k Ježišovi, nech ju skutkom prejaví: ",
                            "pracuj snažne tam, kde stojíš, snaž sa ľúbiť Pánovi. "
                        ],
                        [
                            "REF.: Pre Ježiša..."
                        ],
                        [
                            "3. Choré duše opatrovať podľa rady Pánovej, tých, ",
                            "čo hynú zachraňovať, šťastím tým si srdce hrej! "
                        ],
                        [
                            "REF.: Pre Ježiša..."
                        ]
                    ]
                },
                {
                    "name": "Nadchni, Pane, aj nás",
                    "number": 351,
                    "lang": "sk",
                    "url": "nadchni-pane-aj-nas",
                    "author": "",
                    "verses": [
                        [
                            "1. Nadchni, Pane, aj nás láskou vrelou, Hlava cirkvi, ",
                            "počuj i náš hlas! Opáš Svoj ľud novou mocou Ducha, ",
                            "rozvlaženia daj nám znova čas! Rozvlaženia daj nám ",
                            "znova čas!"
                        ],
                        [
                            "2. Jezu, nadchni horlivosťou pravou Svojich sluhov, ",
                            "čo Ťa hlásajú, daj im vrúcnosť, Ducha silu svätú, ",
                            "Tvoju česť nech stále hľadajú. Tvoju česť nech stále hľadajú."
                        ],
                        [
                            "3. Daj, nech nový život v cirkvi Tvojej zakvitne tam, ",
                            "mráz kde spálil kvet, obrň ľud Svoj celou Božou zbrojou, ",
                            "vieru daj, nech nedôvery niet. Vieru daj, nech nedôvery niet."
                        ],
                        [
                            "4. Počuj cirkev, ktorá Teba čaká, daj viac lásky srdciam zovretým, ",
                            "v jednom duchu vykročíme Tebe, Ženíchovi nášmu, v ústrety. ",
                            "Ženíchovi nášmu, v ústrety."
                        ]
                    ]
                },
                {
                    "name": "Hľadá Ježiš",
                    "number": 352,
                    "lang": "sk",
                    "url": "hlada-jezis",
                    "author": "",
                    "verses": [
                        [
                            "1. Hľadá Ježiš ovce stratené, volá vo dne, v noci zblúdené ",
                            "po horách i dolinách, po mestách i dedinách. Ach, či nájde, ",
                            "či dovolá duše zničené?"
                        ],
                        [
                            "2. Vráť sa, duša! Ó, vráť sa už raz! Počuj, prosí sladký Jeho hlas: ",
                            "Všetci hriechom zmorení, a pod ťarchou zomdlení, poďte ku Mne, ",
                            "poďte ku Mne; vyslobodím vás!"
                        ],
                        [
                            "3. Až prehrozný svitne deň súdu, hriechy ľudské súdené budú, ",
                            "čože duša, odpovieš, pred Sudcom keď zastaneš? Čím zaplašíš ",
                            "večnej muky ukrutnú biedu?"
                        ],
                        [
                            "4. Tak poď ku Mne; so Mnou obstojíš, ak si Mňa a spásu osvojíš, ",
                            "za teba som zomieral, na Golgote život dal! Smrťou Mojou, ",
                            "Mojím krížom Sudcu spokojíš."
                        ],
                        [
                            "5. Ako že Mu, duša odpovieš? Ako Jeho prosbu odoprieš? ",
                            "Božia láska zjavená, náruč z kríža vystrená teba volá. Ach, ",
                            "poď, ach, poď prv, než zahynieš!"
                        ]
                    ]
                },
                {
                    "name": "Blažené sú tie duše",
                    "number": 353,
                    "lang": "sk",
                    "url": "blazene-su-tie-duse",
                    "author": "",
                    "verses": [
                        [
                            "1. Blažené sú tie duše, pred Božím čo trónom sú ",
                            "v biele rúcha odiate, na Jeho tvár hľadieť smú."
                        ],
                        [
                            "REF.: Jasajú, spievajú, Ježiš sám je ich Pán. ",
                            "Do tej slávy, cti, a krás, Jezu, priveď nás."
                        ],
                        [
                            "2. Tí sú večne žehnaní, ktorí išli s Ježišom, ",
                            "týmto svetom zaznaní v protivenstve storakom. "
                        ],
                        [
                            "REF.: Jasajú, spievajú..."
                        ],
                        [
                            "3. Pán ich verným vodcom bol, v pokušeniach silu dal, ",
                            "krvou hriech zmyl, stíšil bôľ, večnú spásu daroval. "
                        ],
                        [
                            "REF.: Jasajú, spievajú ..."
                        ],
                        [
                            "4. Z tejto strany hrobu brán odložili bolesti, ",
                            "slzy im už zotrel Pán, prijal v pravej radosti. "
                        ],
                        [
                            "REF.: Jasajú, spievajú..."
                        ]
                    ]
                },
                {
                    "name": "Kto sú tí v rúchu bielom?",
                    "number": 354,
                    "lang": "sk",
                    "url": "kto-su-ti-v-ruchu-bielom",
                    "author": "",
                    "verses": [
                        [
                            "1. Kto sú tí v rúchu bielom? ( To sú tí, to sú tí,) ",
                            "Kto sú tí v rúchu bielom,( to sú tí,) ",
                            "[: čo sú v krvi Baránka :] [: obmytí. :] ",
                            "[: čo sú v krvi Baránka : ] [: omytí, obmytí :] ",
                            "[ : Teraz sú pred trónom Božím, stále pejú sláva, múdrosť, ",
                            "sila i česť buď vzdávaná Bohu, vzdávaná Večne Bohu. :] ",
                            "Nebudú už poznať hlad, ani duše smäd, v Baránkovej láske ",
                            "budú skrytí. Pri vodách života budú stále bývať, Baránok ",
                            "ich bude vodiť, sýtiť. [: Baránok ich bude vodiť, sýtiť : ]"
                        ]
                    ]
                },
                {
                    "name": "Haleuja! Haleluja!",
                    "number": 355,
                    "lang": "sk",
                    "url": "haleuja-haleluja",
                    "author": "",
                    "verses": [
                        [
                            "1. Haleluja! Haleluja! Haleluja!"
                        ]
                    ]
                },
                {
                    "name": "Či už vieš, kde spásy je zdroj",
                    "number": 356,
                    "lang": "sk",
                    "url": "ci-uz-vies-kde-spasy-je-zdroj",
                    "author": "",
                    "verses": [
                        [
                            "1. Či už vieš, kde spásy je zdroj, že je to kríž na Golgote? ",
                            "Na ňom Ježiš pre pokoj tvoj výkupné dal prevysoké. Hoc ",
                            "môj žiaľ sa zdvihol sťa vrch, šarlátovej farby môj hriech, ",
                            "Pán už dávno zaplatil dlh, krv Jeho ma zbieli jak sneh."
                        ],
                        [
                            "REF.: [: Zbieli ma jak sneh, :] v potrebe chce ",
                            "Pán pomoc dať, krv Jeho ma zbieli jak sneh."
                        ],
                        [
                            "2. Kríž a bolesť prenesmierna, z tŕňov dostal korunu Pán, ",
                            "ťarchu niesla láska verná, za mňa zomrel Boží Syn sám. ",
                            "K Nemu svoje túžby niesť chcem, keď je v ceste úzkosti breh, ",
                            "márna moja námaha, viem, krv Jeho ma zbieli jak sneh. "
                        ],
                        [
                            "REF.: [: Zbieli ma jak sneh..."
                        ],
                        [
                            "3. Zablúdil som, pomýlený, šťastie, pokoj hľadal som tiež. ",
                            "Návrat domov nekynie mi okrem teba, Pane môj, vieš. ",
                            "Chcem sa dívať do Tvojich rán, preto pod kríž obraciam beh, ",
                            "na iné sa nespolieham, krv Tvoja ma zbieli jak sneh. "
                        ],
                        [
                            "REF.: [: Zbieli ma jak sneh..."
                        ]
                    ]
                },
                {
                    "name": "Krv Kristova",
                    "number": 357,
                    "lang": "sk",
                    "url": "krv-kristova",
                    "author": "",
                    "verses": [
                        [
                            "1. Krv  Kristova je spásy zdroj, je mojím rúchom svadobným, ",
                            "to vo viere si oblečiem a pred Bohom raz obstojím."
                        ],
                        [
                            "2. Ty, Jezu, Boží Baránku, raz na kríži si dokonal, krv ",
                            "Tvoja môj hriech prikryla, ja spievam Tebe hymnu chvál."
                        ],
                        [
                            "3. Krv Tvoja mojou nádejou, či žijem a či zomieram, ",
                            "keď diabol desí, pokúša, len na kríž zrak svoj upieram."
                        ],
                        [
                            "4. Dnes dobrorečím Pánovi a v srdci znie hlas radosti, ",
                            "chcem večne chváliť Baránka, že prijal som dar milosti."
                        ],
                        [
                            "5. Ó, Spasiteľu presvätý, Ty v nebi s Otcom prebývaš, ",
                            "ľud Tvoj Ťa oslavuje dnes, buď Tebe sláva, Pane náš!"
                        ]
                    ]
                },
                {
                    "name": "V Tvojom mene, Otče",
                    "number": 358,
                    "lang": "sk",
                    "url": "v-tvojom-mene-otce",
                    "author": "",
                    "verses": [
                        [
                            "1. V Tvojom mene, Otče, syna i Ducha Svätého ",
                            "vnorím skrze krst v hrob vody človeka starého."
                        ],
                        [
                            "REF.: S Kristom sme zomreli, s Kristom žiť budeme ",
                            "na zemi a potom vo večnosti; Božiemu súdu navždy ujdeme, ",
                            "ó, prijmi naše chvály z vďačnosti."
                        ],
                        [
                            "2. Ako Kristus vstal z mŕtvych raz, ó, krása, čistota! ",
                            "Tak aj my už chceme chodiť v novote života. "
                        ],
                        [
                            "REF.: S Kristom sme..."
                        ],
                        [
                            "3. On zomrel za hriech, raz navždy a žije len Bohu. ",
                            "Zjavil nám v tom lásku, milosť a dobrotu mnohú. "
                        ],
                        [
                            "REF.: S Kristom sme..."
                        ],
                        [
                            "4. Tak aj my už máme za to, že sme mŕtvi hriechu ",
                            "a živí Bohu skrz Krista na radosť potechu. "
                        ],
                        [
                            "REF.: S Kristom sme..."
                        ]
                    ]
                },
                {
                    "name": "Bratia, sestry, ponáhľajme",
                    "number": 359,
                    "lang": "sk",
                    "url": "bratia-sestry-ponahlajme",
                    "author": "",
                    "verses": [
                        [
                            "1. Bratia, sestry, ponáhľajme k Pánovi sa zbaviť pút. ",
                            "Česť a chválu Jemu vzdajte! Povstaň k práci, Boží ľud! ",
                            "Hlava On, my údy Jeho, Slnko On, my Jeho svit! Deti ",
                            "Otca nebeského, poďte sa Mu pokloniť!"
                        ],
                        [
                            "2. Vstaňte, bratia, poďte znova v Kristu vernosť upevniť, ",
                            "šíriť slávu, duše k žitiu, duše k žitiu zobudiť! A keď oheň ",
                            "milovania zhášal by vám sveta mráz, proste Pána bez prestania, ",
                            "by vás v láske zmocnil zas!"
                        ],
                        [
                            "3. Radujte sa, milujte sa, v láske tvorte zemský raj! ",
                            "Ustatý tvoj brat keď klesá, potešuj ho podpieraj! ",
                            "Pán tvoj v láske, v odpúšťaní predchádza ťa príkladom, ",
                            "neodsúdi, nepohaní, zdroje lásky nájdeš v Ňom."
                        ],
                        [
                            "4. Spoj nás láskou, Pane milý, odstráň, čo nás delí tu, ",
                            "pridaj plnosť svetla, sily, s trpiacimi súcitu! Uč nás oheň ",
                            "lásky z Teba každú chvíľu vierou brať, nech svet, ",
                            "vidiac v nás časť neba, učí sa Ťa milovať."
                        ]
                    ]
                },
                {
                    "name": "Prúd krvi jeden presvätý",
                    "number": 360,
                    "lang": "sk",
                    "url": "prud-krvi-jeden-presvaty",
                    "author": "",
                    "verses": [
                        [
                            "1. Prúd krvi jeden presvätý z rán tiekol Kristových, ",
                            "kto jej svoj život skropiť dal, je čistý z poškvŕn zlých. ",
                            "[: Je čistý od všetkých, :] kto v nej svoj život obmyť dal, ",
                            "je čistý z poškvŕn zlých."
                        ],
                        [
                            "2. Kto len k tej studni uprie zrak, zrie lásky zázraky, ",
                            "smie hriešnik tak byť ako ja od hriechov obmytý. ",
                            "[: Od hriechu obmytý, :] smie hriešnik tak byť ako ja ",
                            "od hriechov obmytý."
                        ],
                        [
                            "3. Keď ten prúd som smel vierou zrieť na vrchu golgotskom, ",
                            "môj duch rád hľadí ku krížu, kde s Kristom zomrel som. ",
                            "[: Tam s Kristom zomrel som, :] môj duch rád hľadí ku krížu, ",
                            "kde s Kristom zomrel som."
                        ],
                        [
                            "4. Smrť a krv Tvoju, Baránku, nič moci nezbaví, ",
                            "v nich čistotu a silu mám ísť k cieľu do slávy. ",
                            "[: Ísť k cieľu do slávy :] V nich čistotu a silu mám ",
                            "ísť k cieľu do slávy."
                        ],
                        [
                            "5. Tam potom v pravom pokoji spev chvály zaspievam, ",
                            "kde po bojoch a zápasoch Ty dovedieš ma sám. ",
                            "[: Ty dovedieš ma sám :] Tam po bojoch a zápasoch ",
                            "Ty dovedieš ma sám."
                        ]
                    ]
                },
                {
                    "name": "Ozdobže sa, duša",
                    "number": 361,
                    "lang": "sk",
                    "url": "ozdobze-sa-dusa",
                    "author": "",
                    "verses": [
                        [
                            "1. Ozdobže sa, duša milá, hľaď bys' viac už nehrešila! ",
                            "Prijmi Svetlo z neba jasné, večne skvieť sa budeš krásne. ",
                            "Hľa náš Pán vždy v láske verný, zve ťa, bo ťa ľúbi veľmi; ",
                            "hoc Mu slúži vesmír, nebo, chce byť pri večeri s tebou."
                        ],
                        [
                            "2. Ó, jak túži duša moja, aj keď znáša trpkosť boja, ",
                            "po pokrme z Tvojho tela, svojho Pána Spasiteľa. ",
                            "Často túži po nápoji z Tvojej krvi, čo ma pojí s Tebou, ",
                            "s bratmi, so sestrami Ducha lásky spojivami."
                        ],
                        [
                            "3. Stále myslieť musím Pane, keď začína stolovanie, ",
                            "na tajomstvo chleba, vína, jak mi odpustená vina. ",
                            "Milosti zriem Tvojej divy, Ježišu môj, dobrotivý. ",
                            "Bez viery nik nepochopí Tvojej lásky jasné stopy."
                        ],
                        [
                            "4. Jezu, Ty chlieb opravdivý, daj, nech vždy som Tebou živý. ",
                            "Keď ten pokrm jem a pijem, nech Ti ku cti stále žijem. ",
                            "Keď znám Tvoju lásku svätú, nech ju v pravde hlásam svetu, ",
                            "by som hody lásky pravé slávil aj tam v neba sláve."
                        ]
                    ]
                },
                {
                    "name": "Ó, Baránku môj",
                    "number": 362,
                    "lang": "sk",
                    "url": "o-baranku-moj",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, Baránku môj, Tys' slávne zvíťazil, k trónu ",
                            "milosti cestu si prerazil. Za to moc trpieť, musels' ",
                            "aj ťažko mrieť, ale si vyzískal spásu pre celý svet. ",
                            "Na koniec zavolal slabým hlasom: » Dokonano, ",
                            "dokonal som!«"
                        ],
                        [
                            "2. Slovo života, na ňom ja spočívam a na tej skale ",
                            "prepevný základ mám. Tu som bezpečný a spasenia ",
                            "istý; » v krvi Jeho cele už od hriechu čistý.« ",
                            "Žiadnych zásluh pri tom ja nemal som. On vraví:",
                            "» Ja dokonal som!«"
                        ],
                        [
                            "3. Keď satan zúri proti mne bojuje, náhlim len k Pánu, ",
                            "lebo mňa miluje. Uňho mám záchranu, miesto útočištné; ",
                            "a skrýšu bezpečnú; sú rany boľastné: Tu slávne víťazstvo ",
                            "je mi dané, tam na kríži dokonané."
                        ],
                        [
                            "4. Tebe, ó, Jezu, za to vďaka vrúcna letí z mojeho už vďačného ",
                            "srdca. Nechcem zabudnúť na to až naveky, jak mocný Spasiteľ, ",
                            "a darcas' veliký, i na to posledné, vážne slovo : » Dokonal som, ",
                            "Dokonáno!«"
                        ]
                    ]
                },
                {
                    "name": "Ó, duša pamätaj si",
                    "number": 363,
                    "lang": "sk",
                    "url": "o-dusa-pamataj-si",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, duša pamätaj si: kríž lásku zjavil nám ",
                            "a nikdy nezabúdaj jak na ňom zomrel Pán. ",
                            "Ty v hriechu zlorečená si žila vo strachu, ",
                            "no v obeti tej drahej si našla útechu."
                        ],
                        [
                            "2. A teraz zvestuj spásu, je Kristom zjavená. ",
                            "Vrav, prečo hlava svätá tak bola zranená ",
                            "a vtelená tá láska niesť išla toľkú tiaž. Choď, ",
                            "hlásaj, že Syn Boží smrť prijal za hriech náš."
                        ],
                        [
                            "3. Aj svoje srdce skúmaj, či k bratom, sestrám ľne, ",
                            "či za nich obetovať sa vie vždy úprimne. Tak vezmi ",
                            "chlieb a kalich, smrť Pána vyznávaj a za diel večný ",
                            "v Kristu vďak svojmu Bohu vzdaj."
                        ]
                    ]
                },
                {
                    "name": "V tú noc",
                    "number": 364,
                    "lang": "sk",
                    "url": "v-tu-noc",
                    "author": "",
                    "verses": [
                        [
                            "1. V tú noc, keď sveta Spasiteľ Pán Ježiš zradu trpieť šiel, ",
                            "vzal chlieb a Bohu ďakoval, chlieb lámal, učeníkom dal."
                        ],
                        [
                            "2. »Vezmite, jedzte«, riekol im, » ja vaše duše nasýtim: ",
                            "chlieb tento moje telo je, na kríži za vás mučené.«"
                        ],
                        [
                            "3. A po večeri kalich vzal, zaň Otcovi tiež vďaku vzdal. ",
                            "Dal učeníkom z neho piť a znovu začal hovoriť:"
                        ],
                        [
                            "4. »Hľa tento kalich zmluvou je, čo sa dnes krvou skropuje. ",
                            "Krv Svoju za vás vylievam, by odpustil som hriechy vám.«"
                        ],
                        [
                            "5. »Tak sväťte moju pamiatku a potešte sa v zarmútku, ",
                            "smrť moju zvestujete, kým v sláve k vám sa navrátim!«"
                        ],
                        [
                            "6. Pán aj ten zápis odstránil, čo proti mne bol vystavil, ",
                            "krv kríža všetko obmyla a staré veci zrušila."
                        ],
                        [
                            "7. Baránok čistý, presvätý, na dreve kríža rozpätý sa za môj ",
                            "hriech tiež v obeť dal, On je môj Boh, môj Pán i Kráľ."
                        ],
                        [
                            "8. Viem, že krv Jeho predrahá je večne vzácna u Boha, ",
                            "že pre jej moc a prednosti On čuje naše žiadosti."
                        ]
                    ]
                },
                {
                    "name": "Ó, spomínaj s vďakou",
                    "number": 365,
                    "lang": "sk",
                    "url": "o-spominaj-s-vdakou",
                    "author": "",
                    "verses": [
                        [
                            "9. Tej svätej krvi kropaje sú zdrojom mojej nádeje. ",
                            "Či žijem a či zomieram, zrak na krv kríža upieram.",
                            " ",
                            "1. Ó, spomínaj s vďakou spomínaj že Ježiš vyzískal ti stratený raj: ",
                            "na kraj priepasti keď si sa blížil, v záujme tvojom na zem sa znížil. ",
                            "Ó, spomínaj s vďakou spomínaj že Ježiš vyzískal ti stratený raj:"
                        ],
                        [
                            "2. On ma hľadal, zhynúť mi nedal, v náručie Otcovo vložiť ma žiadal. ",
                            "Ako keď pastier ovcu si hľadá vzdialenú výhod šťastného stáda. ",
                            "On ma hľadal, zhynúť mi nedal, v náručie Otcovo vložiť ma žiadal."
                        ],
                        [
                            "3. Hľa, Baránok! Boží Baránok! Od vekov určený Boží Baránok! ",
                            "Bremeno hriechov celého sveta celého zložil Boh svätý na bedrá Jeho. ",
                            "Hľa, Baránok! Boží baránok! Od vekov určený Boží Baránok."
                        ],
                        [
                            "4. Ó, smrť drahá, ty dielo vraha, tys' my zdroj večného života blaha! ",
                            "Boh preťal skalu pre mrúcich smädom, pod jej som tieňom skrytý pred ",
                            "súdom. Ó, smrť drahá, ty dielo vraha, tys' mi zdroj večného života blaha!"
                        ],
                        [
                            "5. Oslavuj Ho, Pána dobrého, Baránka za náš hriech v obeť daného! ",
                            "Až raz pred trónom Jeho staneme, tam velebiť Ho neprestaneme. ",
                            "Oslavuj Ho, Pána dobrého, Baránka za náš hriech v obeť daného!"
                        ]
                    ]
                },
                {
                    "name": "Nezabudni, nezabudni",
                    "number": 366,
                    "lang": "sk",
                    "url": "nezabudni-nezabudni",
                    "author": "",
                    "verses": [
                        [
                            "1. Nezabudni, nezabudni, že ťa Ježiš kúpil draho! ",
                            "By ťa s Otcom zmieriť mohol, by si získal večné blaho, ",
                            "vzdal sa slávy, neľutoval, radosť nebies pre teba On obetoval."
                        ],
                        [
                            "2. Nezabudni, nezabudni, na noc bojov v Getsemane. ",
                            "Pre hriech tvoj Ho stihla zrada, výsmechy a bičovanie. ",
                            "Taká úzkosť, také boje vo večnosti trápiť mali srdce tvoje."
                        ],
                        [
                            "3. Nezabudni, nezabudni, koľko tvoja duša stála utrpenia, ",
                            "poníženia na Golgote nebies Kráľa! By ťa vyrval z moci pekla, ",
                            "z Jeho rán krv na potupnom kríži tiekla."
                        ],
                        [
                            "4. Nezabudni, nezabudni! Z lásky obetoval seba, on ťa ",
                            "dieťa porušenia, určil za dediča neba. Vo tmách hynie, ",
                            "mrie svet bludný, Ježiš vymanil ťa z neho, nezabudni!"
                        ]
                    ]
                },
                {
                    "name": "Vzácna hora, Golgota",
                    "number": 367,
                    "lang": "sk",
                    "url": "vzacna-hora-golgota",
                    "author": "",
                    "verses": [
                        [
                            "1. Vzácna hora, Golgota, duša moja dojatá hľadí vierou ",
                            "na ten kríž, kde umieral Pán Ježiš. On, nevinný Boží Syn, ",
                            "niesol kliatbu mojich vín; Boh ho za mňa v obeť dal, ",
                            "On je predmet mojich chvál."
                        ],
                        [
                            "2. Opustený svojimi, odsúdený všetkými, sám nad diablom ",
                            "zvíťazil, na hlavu ho porazil. Mňa z otroctva vyviedol, ku ",
                            "Otcovi priviedol, tak že v Jeho blízkosti slávim dielo milosti."
                        ],
                        [
                            "3. Nebyť Jeho obeti, niet mi pomoc vo svete; blúdil by som ",
                            "v mrakotách, zhynul by som v temnotách. Ale z kríža Golgoty bol ",
                            "som svetlom objatý. To zničilo každý tieň, prinieslo mi spásy deň."
                        ],
                        [
                            "4. Údy hrebmi prebité, telo krvou previté, svedčia mocne s dôrazom, ",
                            "že lekárstvo mám len v Ňom. Za Jeho plášť červený mám ja rúcho ",
                            "nevinny, za korunu tŕňovú prilbu spásy mám danú."
                        ],
                        [
                            "5. Premožený údivom, Tvojej lásky pod vlivom, nemôžem ju vyplatiť, ",
                            "ani dosť sa odvďačiť; kladiem seba na oltár v obeť živú, vonný dar; ",
                            "sláviť chcem div milosti tu i v celej večnosti."
                        ]
                    ]
                },
                {
                    "name": "Môj Ježiš je mi žitím",
                    "number": 368,
                    "lang": "sk",
                    "url": "moj-jezis-je-mi-zitim",
                    "author": "",
                    "verses": [
                        [
                            "1. Môj Ježiš je mi žitím, môj diel a môj zisk je, Ním duša ",
                            "vždy sa sýti a vzdáva Jemu česť, a vzdáva Jemu česť."
                        ],
                        [
                            "2. Je najvyšším On darom čo Otec môj mi dal a pred Jeho ",
                            "sa tvárou skryť musí bôľ i žiaľ, skryť musí bôľ i žiaľ."
                        ],
                        [
                            "3. Len On keď v mojej duši sám s láskou prebýva, nič nemôž´ ",
                            "pokoj rušiť, ni búrka zúrivá, ni búrka zúrivá."
                        ],
                        [
                            "4. V Ňom pokrm môj i žriedlo, On svetlom v temnotách, čo k nebu ",
                            "vždy ma viedlo a rozptyľuje strach, a rozptyľuje strach."
                        ],
                        [
                            "5. Čo mohol by som žiadať, čo v ňom by nemal som? V Ňom ",
                            "rajských ruží vnáda s Ním v boji víťazom, s Ním v boji víťazom."
                        ],
                        [
                            "6. V Ňom nebo mi je dané, kde večne budem s Ním, v Ňom, ",
                            "duše mojej schrane, sa večne nasýtim, sa večne nasýtim."
                        ]
                    ]
                },
                {
                    "name": "Svätá chvíľa",
                    "number": 369,
                    "lang": "sk",
                    "url": "svata-chvila",
                    "author": "",
                    "verses": [
                        [
                            "1. Svätá chvíľa Pán ju dal, zaspievaj Mu pieseň chvál! ",
                            "On deň dnešný oddelil, požehnal a posvätil. I ja prácu ",
                            "odkladám, dušu Jemu oddávam."
                        ],
                        [
                            "2. Ticho vôkol, svätý čas, z neba volá nežný hlas: Poďte, ",
                            "hladní, žízniví, Ja som Otec láskavý, biedu vašu dobre znám, ",
                            "mannu z nebies zošlem vám."
                        ],
                        [
                            "3. Teraz, volá Boží Syn: pod ťarchou kto klesáš vín, hriechy ",
                            "tvoje, biedny prach, obmyť chcem, už nemaj strach. Spasenie ",
                            "som vydobyl, poď bys' so Mnou večne žil!"
                        ],
                        [
                            "4. K Tebe, Pane, vrúcne lkám, veď Ty kroky moje sám. Srdce ",
                            "láskou posväcuj, telo, dušu ochraňuj. Túžim s Tebou pospolu ",
                            "sláviť večnú nedeľu!"
                        ]
                    ]
                },
                {
                    "name": "Deň Pánov dnes",
                    "number": 370,
                    "lang": "sk",
                    "url": "den-panov-dnes",
                    "author": "",
                    "verses": [
                        [
                            "1. Deň Pánov dnes. K výšinám sa, duch môj, vznes! ",
                            "K trónu svojho Stvoriteľa zaleť s vrúcnou vďačnosťou, ",
                            "pre všetky nech Tvoje diela obdarí ťa milosťou. Rosu, ",
                            "čo tak sviežo vlaží, silí v mdlobe, v smútku blaží, sám Pán ",
                            "z neba nesie ti, vyjdi Mu hneď v ústrety!"
                        ],
                        [
                            "2. Deň Pánov dnes. Oslavný spev, duša, nes! Zlož to, čo ťa ",
                            "viaže k zemi, opusť sveta márnosti, po Pánovi v roztúžení čuj ",
                            "hlas Jeho milosti:» Poďte ku Mne, obťažení, mnohou prácou ",
                            "umorení, odpočinok pre vás mám.« To aj teba volá Pán."
                        ],
                        [
                            "3. Ísť, Pane, chcem. Srdce hľadá Teba len. Tvoje svetlo nech ",
                            "mi žiari, Kriste, slnko života, ktoré nedokáže zmariť ani hrobu ",
                            "temnota, by som po zápase časnom v stánku neba svätom, ",
                            "jasnom, s Tebou večnosť po celú slávil pravú nedeľu."
                        ]
                    ]
                },
                {
                    "name": "Skloňže sa k nám",
                    "number": 371,
                    "lang": "sk",
                    "url": "sklonze-sa-k-nam",
                    "author": "",
                    "verses": [
                        [
                            "1. Skloňže sa k nám v milosti, Hospodine, z výsosti, ",
                            "Tvoja svätá, jasná tvár nech nám dá zrieť lásky žiar!"
                        ],
                        [
                            "2. Daj, nech cestou ku raju ešte mnohí spoznajú, ",
                            "duše k sláve stvorené aby našli spasenie."
                        ],
                        [
                            "3. Každý jazyk vyzná tiež, že ty večne kraľuješ a súd ",
                            "v pravde vykonáš, svätý, verný Pane náš."
                        ],
                        [
                            "4. Aj zem v plnej hojnosti úrodou nás uhostí, ",
                            "dažde Tvojho žehnania z mŕtvoty púšť vymania."
                        ],
                        [
                            "5. Požehnaj nás z výsosti, Bože, hojný v milosti. ",
                            "Pred tebou sa pokorí zem i neba priestory. "
                        ]
                    ]
                },
                {
                    "name": "Boh je nám prítomný!",
                    "number": 372,
                    "lang": "sk",
                    "url": "boh-je-nam-pritomny",
                    "author": "",
                    "verses": [
                        [
                            "1. Boh je nám prítomný! Pokloňme sa Jemu!",
                            "pokorne pristúpme k Nemu. Boh je medzi nami;",
                            "umĺkni všetko v nás a skloň sa pred Ním tento čas. ",
                            "Kto Ho znáš, menuješ, sklopže oči svoje, ",
                            "daj Mu srdce svoje."
                        ],
                        [
                            "2. Boh je nám prítomný, Jemu Cherubínov vo dne v noci ",
                            "zástup slúži. „Svätý, svätý, svätý!“ anjelskými hlasy ",
                            "k hudbe trúb a hárf sa druží. Pane, čuj aj náš hlas, ",
                            "keď Teba vzývame, chválu Ti vzdávame."
                        ],
                        [
                            "3. Zriekame sa vďačne sveta a márnosti i zeme tejto radosti. ",
                            "Vôľu, srdce, dušu, všetko, čo je naše, prijmi ó, Pane z milosti.",
                            "Ty len sám buď náš Pán, Boh, Kráľ, svetlo, spása; k Tebe srdce jasá. "
                        ]
                    ]
                },
                {
                    "name": "Otče Krista Ježiša",
                    "number": 373,
                    "lang": "sk",
                    "url": "otce-krista-jezisa",
                    "author": "",
                    "verses": [
                        [
                            "1. Otče Krista Ježiša, svätý prameň mieru, do Svojho ",
                            "veď zátišia, utvrď moju vieru. Dušu zbav od obáv, ",
                            "v objatí len Tvojom uniknúť smie bojom."
                        ],
                        [
                            "2. Otče v Kristu v Tebe mi utíšenie kynie, keď som ",
                            "v mysli strápený, tam si odpočiniem. Čo má svet? ",
                            "Pokoj niet inde okrem Teba, Panovníka neba."
                        ],
                        [
                            "3. Od toho ma osloboď čo nie Ti je ľúbe, veď ma nie raz ",
                            "diablov zvod spútal v prázdnej chlúbe. S tichosťou, ",
                            "radosťou Teba zrieť si žiadam, Tvoju chválu hľadám."
                        ],
                        [
                            "4. Nad márnosťou premnohou k víťazstvu daj sily, túžby zlé ",
                            "bych premohol, keď by útočili. Žiadosti, starosti keď sa ",
                            "na mňa valia, pred Tebou sa vzdialia."
                        ],
                        [
                            "5. Túžim pravý pokoj mať, čo Ty dávaš Svojim, Baránka ",
                            "chcem poslúchať, v Ňom sa upokojím. Keď by žiaľ dušu rval, ",
                            "v každom žitia boji pokoj Tvoj je mojim."
                        ]
                    ]
                },
                {
                    "name": "Spasiteľu, Jezu drahý",
                    "number": 374,
                    "lang": "sk",
                    "url": "spasitelu-jezu-drahy",
                    "author": "",
                    "verses": [
                        [
                            "1. Spasiteľu, Jezu drahý, čuj náš vrúcny hlas! ",
                            "Iných keď si požehnávaš, požehnaj i nás!"
                        ],
                        [
                            "REF.: Jezu Kriste, čuj náš vrúcny hlas! ",
                            "Iných keď si požehnávaš, požehnaj i nás!"
                        ],
                        [
                            "2. Túžobne sa zrak náš nesie k trónu milosti;",
                            "spomôž našej nedôvere, z hriechov vyprosti."
                        ],
                        [
                            "REF.: Jezu Kriste..."
                        ],
                        [
                            "3. Úkryt máme v Tvojich ranách, keď nás desí noc, ",
                            "hľadáme Ťa celým srdcom, príď nám na pomoc!"
                        ],
                        [
                            "REF.: Jezu Kriste..."
                        ],
                        [
                            "4. Koho by sme mali v svete, koho na nebi?",
                            "Nad život si duši drahší, Teba velebí. "
                        ],
                        [
                            "REF.: Jezu Kriste..."
                        ]
                    ]
                },
                {
                    "name": "Chcem Ťa viac milovať",
                    "number": 375,
                    "lang": "sk",
                    "url": "chcem-ta-viac-milovat",
                    "author": "",
                    "verses": [
                        [
                            "1. Chcem Ťa viac milovať. Lásky viac len daruj mi,",
                            "Pane môj, na každý deň! Lásky daj nebeskej do duše studenej,",
                            "mocne ju rozohrej! Viac lásky daj!"
                        ],
                        [
                            "2. Po zemských radostiach túžieval som, teraz však prosím Ťa ",
                            "nocou i dňom: Svoju tvár neskrývaj, prosieb hlas vyslýchaj, ",
                            "lásky mi viacej daj, viac lásky daj!"
                        ],
                        [
                            "3. Posielaš radosti alebo žiaľ – vždy si im jedno len určenie dal,",
                            "by sme Ťa hľadali, na Teba volali, lásky viac žiadali. Viac lásky daj!"
                        ],
                        [
                            "4. A keď mi pokynieš odložiť kríž, duša keď poletí v nebeskú výš,",
                            "pokorne zašepkám jedinú vďaku tam, že lásku dals´ mi sám vždy viac a viac."
                        ]
                    ]
                },
                {
                    "name": "Bližšie vždy k Tebe len",
                    "number": 376,
                    "lang": "sk",
                    "url": "blizsie-vzdy-k-tebe-len",
                    "author": "",
                    "verses": [
                        [
                            "1. Bližšie vždy k tebe len, ó, Bože môj, hoc by ma tlačil kríž, ",
                            "síl zbavil boj. V najťažších chvíľach dňa spev srdca dvíha ma ",
                            "bližšie vždy k Tebe len, ó, Bože môj!"
                        ],
                        [
                            "2. Na púšti života desí ma noc, poklesnem na kameň, ",
                            "strácajúc moc. Jakubov sen mi daj, v nebeský povznes kraj, ",
                            "bližšie vždy k tebe len, ó, Bože môj.  "
                        ],
                        [
                            "3. Anjelským rebríkom za krokom krok blížiť sa Tebe chcem,",
                            "po ňom ma voď. Nedaj mi upadnúť, riaď spravuj moju púť ",
                            "bližšie vždy k Tebe len, ó, Bože môj!"
                        ],
                        [
                            "4. Nádherný svitne deň, koniec už tmám, z tvrdých skál ",
                            "skúšok Ti postavím chrám. V plameňoch obetí duch môj ",
                            "rád zaletí bližšie vždy k Tebe len, ó, Bože môj!"
                        ],
                        [
                            "5. Keď raz púť ukončím, posledný ston túžobne zašepká:",
                            "Ku mne sa skloň. Pomôž mi v smrti dni, k sebe ma pozdvihni, ",
                            "bližšie vždy k Tebe len, ó, Bože môj!"
                        ]
                    ]
                },
                {
                    "name": "Boh je blízko",
                    "number": 377,
                    "lang": "sk",
                    "url": "boh-je-blizko",
                    "author": "",
                    "verses": [
                        [
                            "1. Boh je blízko, hovor k Nemu, Boh je blízko pri tebe,",
                            "Boh je blízko, zver sa Jemu, vrúcne túži po tebe."
                        ],
                        [
                            "2. Boh je blízko; prišiel spasiť, Boh je blízko s milosťou.",
                            "Boh je blízko, chce odpustiť:",
                            "nepohŕdaj večnosťou!"
                        ],
                        [
                            "3. Boh je blízko, chce vnísť k tebe; otvor srdce dokorán.",
                            "Boh je blízko, celé nebe prináša ti nebies Pán."
                        ],
                        [
                            "4. Boh je dobrý, to je isté, Boh je dobrý v každý čas.",
                            "Boh je dobrý je, dôverivo povznes k Nemu prosieb hlas. "
                        ],
                        [
                            "5. Boh je všade, nezabudni; On ťa vidí vždy i dnes!",
                            "On je svätý; boj sa hriechu, k nebies výši srdce vznes."
                        ]
                    ]
                },
                {
                    "name": "Prosba kľúče má",
                    "number": 378,
                    "lang": "sk",
                    "url": "prosba-kluce-ma",
                    "author": "",
                    "verses": [
                        [
                            "1. Prosba kľúče má, keď na kolenách brány neba otváram.",
                            "Vstup do svätyne v každej hodine v mene môjho Pána mám."
                        ],
                        [
                            "2. Idem k Pánovi, tak ho oslovím tým, čo v hĺbke duše mám,",
                            "skladám bremená, Jeho ramená hor´ ma nesú k nebesám."
                        ],
                        [
                            "3. Nieto takého príliš hriešneho, čo by nesmel zavzdychať.",
                            "Boh je blízky tým, čo Ho úprimným srdcom túžia poslúchať."
                        ]
                    ]
                },
                {
                    "name": "Pán Boh prosby vyslýcha",
                    "number": 379,
                    "lang": "sk",
                    "url": "pan-boh-prosby-vyslycha",
                    "author": "",
                    "verses": [
                        [
                            "1. Pán Boh prosby vyslýcha, verím tomu, že vyslýcha, ",
                            "skúsil som, že vyslýcha, nech je Bohu česť.   "
                        ],
                        [
                            "2. Slovo Božie pravda je, verím tomu, že pravda je",
                            "skúsil som, že pravda je, nech je Bohu česť."
                        ],
                        [
                            "3. Pán Boh slovo dodrží, verím tomu, že dodrží",
                            "skúsil som, že dodrží, nech je Bohu česť."
                        ],
                        [
                            "4. Verím skoro príde Pán, verím tomu, že príde Pán ",
                            "isté je, že príde Pán, nech je Bohu česť."
                        ]
                    ]
                },
                {
                    "name": "„Ó, vzývaj ma!“",
                    "number": 380,
                    "lang": "sk",
                    "url": "o-vzyvaj-ma",
                    "author": "",
                    "verses": [
                        [
                            "1. „Ó, vzývaj ma!“ Pán všetkým dáva hlásať. Ó, vzývaj ma",
                            " v súžení zlom. Ja ťa zachránim a ty budeš jasať! Ó, vzývaj ma;",
                            "Ja Boh tvoj som. Ja ťa zachránim a ty budeš jasať. Ó, vzývaj ma;",
                            "Ja Boh tvoj som."
                        ],
                        [
                            "2. Ó, vzývaj Ho, kým útok nepriateľa nezaujal ti zem spod nôh.",
                            "/: Nepochybuj, pusť bázeň so zreteľa, ó, vzývaj Ho; On tvoj je Boh :/"
                        ],
                        [
                            "3. Spusť sa na mňa! Ja vždy so ti po boku, neľakaj sa; Ja Boh tvoj som.",
                            "/: Ver, neopustím ťa pri žiadnom kroku, len prenechaj mi život tvoj! :/"
                        ],
                        [
                            "4. Ó, vzývaj Ho; On nemôž´ zaprieť teba, že ľúbi ťa, nezabúdaj. ",
                            "/: Dedičstvo krásne v slávnej ríši neba odložil ti; ó, zajasaj! :/"
                        ],
                        [
                            "5. Chváľ Boha, chváľ! Ó, neži život sebe; už tu Mu česť vzdať patrí nám.",
                            "/: Len vďačným dietkam otvorí sa nebe, len ony v slávu vnídu tam. :/"
                        ]
                    ]
                },
                {
                    "name": "V srdca svojho pokore k Tebe",
                    "number": 381,
                    "lang": "sk",
                    "url": "v-srdca-svojho-pokore-k-tebe",
                    "author": "",
                    "verses": [
                        [
                            "1. V srdca svojho pokore k Tebe, Kriste, prichádzam, ",
                            "posilni ma čím skorej, nech sám v mdlobe neklesám.  "
                        ],
                        [
                            "2. Neviem, ako niesť svoj kríž, plecia moje slabé sú, ",
                            "ak ma Ty sám posilníš, nohy vpred ma ponesú."
                        ],
                        [
                            "3. V biede svojej k tebe lkám, čo ma tiahne do noci, ",
                            "neodolal by som tmám bez Tvojej len pomoci."
                        ],
                        [
                            "4. Pomôž, Pane, v ťažký deň, prosím Teba s pokorou,",
                            "do duše mier vtedy len príde z neba priestorov."
                        ]
                    ]
                },
                {
                    "name": "Stvor srdce čisté, Bože mi",
                    "number": 382,
                    "lang": "sk",
                    "url": "stvor-srdce-ciste-boze-mi",
                    "author": "",
                    "verses": [
                        [
                            "1. Stvor srdce čisté, Bože mi, a ducha priameho, ",
                            "uč v pokoji žiť na zemi a zbav ma od zlého.  "
                        ],
                        [
                            "2. Daj srdce, ktoré v pokore Ti bije v ústrety,",
                            "nech lásky Tvojej za more Ti láskou odvetí."
                        ],
                        [
                            "3. Sám, Pane, krvou obmy ho, by nad sneh zbelelo,",
                            "Svoj obraz vry sám do neho, vpíš meno na čelo!"
                        ],
                        [
                            "4. Ó, z Ducha rosu milosti mi do srdca sám daj,",
                            "nech pokoj v ňom sa uhostí a zriem Tvoj obličaj."
                        ]
                    ]
                },
                {
                    "name": "Bože, Otče, v nebi",
                    "number": 383,
                    "lang": "sk",
                    "url": "boze-otce-v-nebi",
                    "author": "",
                    "verses": [
                        [
                            "1. Bože, Otče, v nebi zas počuj našich prosieb hlas, ",
                            "žehnaj slová spasenia, nech nám život premenia. "
                        ],
                        [
                            "2. Duchom i nás obnovuj, k činom lásky posilňuj,",
                            "by sme rástli v múdrosti, v nádeji a v milosti. "
                        ],
                        [
                            "3. Amen, milý Otče náš, vieme, že nám všetko dáš",
                            "pre Ježiša milého, Spasiteľa verného"
                        ]
                    ]
                },
                {
                    "name": "Miesto Tvojho prebývania",
                    "number": 384,
                    "lang": "sk",
                    "url": "miesto-tvojho-prebyvania",
                    "author": "",
                    "verses": [
                        [
                            "1. Miesto Tvojho prebývania, Bože jasné nebo je, ",
                            "kde Tvoju česť, lásky Pána, vojsko neba zvestuje.",
                            "Tvárou v tvár Ťa vídavajú, poctu piesňou Tebe vzdajú:",
                            "Svätý, svätý Boh je náš.  "
                        ],
                        [
                            "2. Nebo Ťa však neobsiahne, nekonečnú ríšu máš, ",
                            "na zemi kto Ťa ctiť práhne, toho láskou požehnáš.",
                            "Teraz naše zhromaždenie ku Tebe má svoje zrenie, ",
                            "milostivo vyslyš nás!"
                        ]
                    ]
                },
                {
                    "name": "Náš Otče na nebi",
                    "number": 385,
                    "lang": "sk",
                    "url": "nas-otce-na-nebi",
                    "author": "",
                    "verses": [
                        [
                            "1. Náš Otče na nebi, cti plný, veleby, čuj z lásky ",
                            "našich prosieb hlas a vypočuť ráč nás."
                        ],
                        [
                            "2. Ó, pomôž svetom niesť nám Tvojho mena česť,",
                            "ho v srdciach, v mysliach posväcuj, nás od zla ochraňuj."
                        ],
                        [
                            "3. Nech stíchnu rozbroje a kráľovstvo Tvoje nech príde",
                            "v moci svojej k nám i k zeme končinám."
                        ],
                        [
                            "4. Nech ako v nebesiach i v svete deje sa len ",
                            "Tvoja vôľa presvätá a láskou bohatá."
                        ],
                        [
                            "5. Chlieb daj nám každý deň a naše viny tieň ",
                            "nám odpusť, silu ráč nám dať zas iným odpúšťať."
                        ],
                        [
                            "6. Chráň v pokušeniach nás, zbav zlého v každý čas,",
                            "veď Ty máš prestol odveký i dnes i na veky."
                        ]
                    ]
                },
                {
                    "name": "Bože náš, my roztúžení",
                    "number": 386,
                    "lang": "sk",
                    "url": "boze-nas-my-roztuzeni",
                    "author": "",
                    "verses": [
                        [
                            "1. Bože náš, my roztúžení, prosiac k Tebe voláme,",
                            "žehnaj Svoj ľud zhromaždený, úprimne Ťa žiadame.",
                            "Žehnaj nás, žehnaj nás! V mene Syna prosíme.  "
                        ],
                        [
                            "2. Sprevádzaj nás, Strážca verný, ďalšou púťou ",
                            "pozemskou súženia keď oblak čierny robí cestu hrozivou.",
                            "Sprevádzaj, sprevádzaj! V mene Syna prosíme."
                        ],
                        [
                            "3. Nepriateľ keď tmavé mraky rozprestiera nad nami",
                            "k Tebe upierame zraky s túžobnými prosbami: ",
                            "S nami buď, s nami buď! V mene Syna prosíme."
                        ],
                        [
                            "4. Bez pomoci Tvojej, Pane márne všetky námahy, ",
                            "neisté je putovanie, pomôž, Pane predrahý! ",
                            "Pomáhaj, pomáhaj! V mene Syna prosíme."
                        ]
                    ]
                },
                {
                    "name": "Aké je to vzácne šťastie",
                    "number": 387,
                    "lang": "sk",
                    "url": "ake-je-to-vzacne-stastie",
                    "author": "",
                    "verses": [
                        [
                            "1. Aké je to vzácne šťastie, Ježiš mi je Priateľom! ",
                            "Keď mi v srdci úzkosť rastie, s modlitbou sa stíšim v Ňom.",
                            "Márne som si jatril rany, márne trpel mnohý bôľ preto,",
                            "že som s modlitbami k Pánovi ísť zabudol."
                        ],
                        [
                            "2. Čokoľvek ťa tlačí, rmúti, jarmo tvojich, cudzích bied,",
                            "smelo prines v srdca hnutí na modlitbe k Nemu hneď.",
                            "Kde sa nájde v svete šírom priateľ, ako Ježiš je? ",
                            "Šťastný, kto aj strasti vírom v prosbách k Nemu smeruje."
                        ],
                        [
                            "3. „Poďte ku Mne, obtiažení!“ Lkajúcim a plačúcim volá Pán. ",
                            "Ó, smutní v zemi, na modlitbách vravte s Ním. Oslovte Ho, ",
                            "On vás chráni ako Priateľ priateľa. Vravte s Nim a mnohé rany ",
                            "modlitbou sa zacelia."
                        ]
                    ]
                },
                {
                    "name": "Prichystaj sa, duchu môj",
                    "number": 388,
                    "lang": "sk",
                    "url": "prichystaj-sa-duchu-moj",
                    "author": "",
                    "verses": [
                        [
                            "1. Prichystaj sa, duchu môj, na modlitby v bdení, ",
                            "škodca strojí nepokoj v nočný čas i denný.",
                            "Jeho lesť z pravdy ciest zvodom hrozí dušiam skôr, ",
                            "než ony tušia."
                        ],
                        [
                            "2. Vzbuď sa zo sna hriešneho, vstaň a chyť sa ruky,",
                            "ktorá môže každého zbaviť večnej muky. Biedny ten,",
                            "koho sen smrti nečakaný nájde v hriešnom spaní."
                        ],
                        [
                            "3. Bdej, by ti svet neškodil svojou lsťou a zbrojou. S tým, ",
                            "kto v pravde nechodí, nechoď cestou svojou. Chcel by ",
                            "svet strhnúť späť tých, čo v jeho priazni dávajú sa väzniť."
                        ],
                        [
                            "4. K bdelosti a modleniu, vyzbroj i mňa, Pane! Nepoddať sa",
                            "súženiu, nech sa čo chce, stane. Neklesnem, dobre viem, ",
                            "svet hoc vôkol hynie, keď mi Pán môj kynie."
                        ]
                    ]
                },
                {
                    "name": "Ó, vitaj, sladká hodino",
                    "number": 389,
                    "lang": "sk",
                    "url": "o-vitaj-sladka-hodino",
                    "author": "",
                    "verses": [
                        [
                            "Ó, vitaj, sladká hodino, v nej skláňam svoje koleno",
                            "pred trónom Otca v nebesách vzývajúc Ho na modlitbách;",
                            "v strasti, biedach a v súžení tu útecha mi pramení,",
                            "tu pokušeniam unikám, keď k modlitbe sa utiekam."
                        ],
                        [
                            "Ó, sladká prosieb hodina, v nej túžba moja vtržená",
                            "až pred trón Otca na nebi, ktorý zná moje potreby;",
                            "k sebe mile ma pozýva a mi požehnanie dáva:",
                            "tu pred Ním skladám každý kríž a v modlitbe ľnem k Nemu blíž."
                        ],
                        [
                            "Sladká chvíľa prosieb mojich! Nech požívam útech tvojich",
                            "až z hory Nébo zahliadnem vlasť ľúbeznú a zalietnem tu",
                            "rúcho tela nechajúc a k nebesám sa vznášajúc Ti žehnať chcem v čas lúčenia",
                            "ty, sladká chvíľa modlenia!"
                        ]
                    ]
                },
                {
                    "name": "Kráľu nebies",
                    "number": 390,
                    "lang": "sk",
                    "url": "kralu-nebies",
                    "author": "",
                    "verses": [
                        [
                            "1. Kráľu nebies, ako vyriecť mena Tvojho moc?! ",
                            "Kto Ti k dielu, ktoré konáš, príde na pomoc? ",
                            "Len ten žije na koho Ty v láske pohliadneš.",
                            "Svety vstali, svety padnú, keď Ty rozkážeš."
                        ],
                        [
                            "2. Panovníku milovaný, kto Ťa pochopí? ",
                            "Ty si stál raz nad hrôzami sveta potopy, Ty raz",
                            "ešte pohneš nebom, zeme základy, ",
                            "dych úst Tvojich bezbožníkov razom zahladí."
                        ],
                        [
                            "3. Kráľu slávny, nezmerná je mena Tvojho moc!",
                            "Predsa vytrpel si bolesť, smrti strašnú noc.",
                            "Pohanením dietok Tvojich vždy Ťa tupí svet, ",
                            "všetkým vládneš na zemi však mesta Tebe niet. "
                        ],
                        [
                            "4. Kriste, Kráľu, vyvýšený, Teba vzývame, ",
                            "srdcia v láske k nohám Tvojim svätým  skladáme.",
                            "Tebe slúžiť, za Teba mrieť na zemi náš diel,",
                            "s Tebou večne v sláve tróni žitia nášho cieľ."
                        ]
                    ]
                },
                {
                    "name": "Úchvatná nádhera vysokých hôr",
                    "number": 391,
                    "lang": "sk",
                    "url": "uchvatna-nadhera-vysokych-hor",
                    "author": "",
                    "verses": [
                        [
                            "1. Úchvatná nádhera vysokých hôr, hviezdnatá obloha, ",
                            "svit ranných zôr, všetko to tlmočí pozdravný tón ",
                            "Tvorcovi vesmíru, pred Boží trón."
                        ],
                        [
                            "REF.: Boh láska je, nás miluje Otcovskou láskou ",
                            "o všetko tvorstvo pečuje. "
                        ],
                        [
                            "2. Malebný haj i les, vtáctva tam chór, žblnkanie ",
                            "potôčkov, aj každý tvor, príroda odiata do pestrých šiat, ",
                            "Tvorcovu velebu učí nás znať."
                        ],
                        [
                            "REF.: Boh láska je..."
                        ],
                        [
                            "3. Zbúrený oceán, hromový tresk, šumenie vetríka, ",
                            "slniečka lesk. Ruže dych, slávikov ľúbezný hlas,",
                            "k oslave mocného vyzýva nás."
                        ],
                        [
                            "REF.: Boh láska je..."
                        ],
                        [
                            "4. Chválu Ti vysiela vďačný Tvoj ľud, Bože náš",
                            "za mocný  života prúd, za všetko čo si nám  s Ježišom dal,",
                            "prijmi dnes oddané obete chvál."
                        ],
                        [
                            "REF.: Boh láska je..."
                        ]
                    ]
                },
                {
                    "name": "Pri svite slnka",
                    "number": 392,
                    "lang": "sk",
                    "url": "pri-svite-slnka",
                    "author": "",
                    "verses": [
                        [
                            "1. Pri svite slnka hneď za rána náhlim sa s obeťou pred Pána, ",
                            "so srdom preveľkej vďačnosti vznášam sa ku trónu milosti.  "
                        ],
                        [
                            "2. Chválim Ťa, Bože môj láskavý, že si ma zachoval vo zdraví,",
                            "že si ma občerstvil sladkým snom, potešil zase ma novým dňom."
                        ],
                        [
                            "3. Nesmierna Tvoja len dobrota prameňom môjho je života,",
                            "vo Tvojom premúdrom riadení mám čas i žitia cieľ určený."
                        ],
                        [
                            "4. Učíš nás pracovať, kým je deň, vysielaš žencov na Svoju žeň.",
                            "Chcem i ja snahy viac na to dať, trpieť a slúžiť a milovať."
                        ],
                        [
                            "5. Múdro chcem dnešný deň prežívať, kdekoľvek budem dnes pracovať, ",
                            "doma, či s ľuďmi, či na poli, všade chcem Tebe byť po vôli."
                        ]
                    ]
                },
                {
                    "name": "Hneď zrána ďakuj",
                    "number": 393,
                    "lang": "sk",
                    "url": "hned-zrana-dakuj",
                    "author": "",
                    "verses": [
                        [
                            "1. Hneď zrána ďakuj, duchu môj, že ti je blízky Otec tvoj,",
                            "čo vládne celým vesmírom aj v tvojom srdci má Svoj dom. "
                        ],
                        [
                            "2. Už zrána k Tebe mysle let sa na modlitbe nesie hneď.",
                            "Už zrána z Tvojej plnosti ráč nasýtiť ma z milosti."
                        ],
                        [
                            "3. Hneď zrána Tvojmu ku dielu daj mannu duši, posilu,",
                            "by celý deň som v službe stál a Tvojou láskou oplýval."
                        ]
                    ]
                },
                {
                    "name": "Daj, nech sa nám dobre darí",
                    "number": 394,
                    "lang": "sk",
                    "url": "daj-nech-sa-nam-dobre-dari",
                    "author": "",
                    "verses": [
                        [
                            "1. Daj, nech sa nám dobre darí, Ježišu, dňa nového ",
                            "a nech v svetle Tvojej tvári konáme, čo dobrého.",
                            "Oddávame sa ti zas so všetkým, ráč prijať nás,",
                            "nad nami sa zmiluj zase obživ duše k novej kráse."
                        ],
                        [
                            "2. Daj nám s Tebou prežiť šťastne, Pane, započatý deň.",
                            "Milosti zdroj nevyhasne, keď si prítomný Ty len. ",
                            "V radostiach i v žalostiach samotu vzdiaľ, rozptýľ strach, ",
                            "aby sme aj v smrti tieni boli k Tebe prenesení."
                        ]
                    ]
                },
                {
                    "name": "Hospodine, počuj môj hlas",
                    "number": 395,
                    "lang": "sk",
                    "url": "hospodine-pocuj-moj-hlas",
                    "author": "",
                    "verses": [
                        [
                            "1. Hospodine, počuj môj hlas, predôstojnú ",
                            "svoju tvár zas nakloň ku mne v priazni novej, ",
                            "vypočuj sám prosby moje. "
                        ],
                        [
                            "2. Poznáš túžby môjho ducha, do nového svetla ",
                            "rúcha keď zem slnko zahaľuje, zlým i dobrým posluhuje."
                        ],
                        [
                            "3. Pred Tebou sa postavujem, Tvoju milosť ospevujem,",
                            "žes´ ma chránil v tmavej noci pred úkladmi diabla moci."
                        ],
                        [
                            "4. Hrádze staviaš jeho ľsti sám, zabraňuješ neprávostiam.",
                            "Tvoja ruka preveliká krotí trestá bezbožníka."
                        ],
                        [
                            "5. Buď Ty naším pevným hradom, veď znáš zlobu pyšných ",
                            "radom. Ráč nás vodiť cestou svojou v radosti i v prostred bojov."
                        ]
                    ]
                },
                {
                    "name": "Jezu, ráč Ty sám cestu raziť nám",
                    "number": 396,
                    "lang": "sk",
                    "url": "jezu-rac-ty-sam-cestu-razit-nam",
                    "author": "",
                    "verses": [
                        [
                            "1. Jezu, ráč Ty sám cestu raziť nám. My len s Tebou",
                            "kráčať chceme, že si dobrý Vodca vieme; priveď, Jezu,",
                            "nás v ríšu večných krás."
                        ],
                        [
                            "2. V biede, úzkosti pomôž k vernosti. Vždy Ťa chceme ",
                            "nasledovať, na zlé dni sa nežalovať. Vieme, že nás kríž ",
                            "k Tebe vedie blíž."
                        ],
                        [
                            "3. Už či vlastný žiaľ srdce rozorval a či trápi ",
                            "cudzia neresť, pomôž trpezlivo preniesť. ",
                            "Nauč myslieť nás na posledný čas."
                        ],
                        [
                            "4. Osvieť, Jezu, sám, cestu žitia nám. Hoc by ",
                            "viedla priepasťami, ak Ty vždycky pôjdeš snami, ",
                            "skonči iste tam, kde si Kráľom sám."
                        ]
                    ]
                },
                {
                    "name": "Prespevujte, hviezdy rána",
                    "number": 397,
                    "lang": "sk",
                    "url": "prespevujte-hviezdy-rana",
                    "author": "",
                    "verses": [
                        [
                            "1. Prespevujte, hviezdy rána, radujte sa, anjeli, ",
                            "jasaj zem a všetci ľudia /: vzdajte poctu veselí. :/"
                        ],
                        [
                            "2. Vykúpený ľude Boží, povstaň v speve jasavom,",
                            "osláv svojho Spasiteľa /: každým srdca záchvevom. :/"
                        ],
                        [
                            "3. Pejte pieseň Božej lásky, väzňom hlása slobodu ",
                            "radostná zvesť Jeho slova /: od západu k východu. :/"
                        ],
                        [
                            "4. Oslavujte, slávte Pána, všetky sveta jazyky. ",
                            "Chválospevy zvučné znejú /: Tebe, Bože veliký. :/"
                        ]
                    ]
                },
                {
                    "name": "Ó, poďme s chválou pred Pána",
                    "number": 398,
                    "lang": "sk",
                    "url": "o-podme-s-chvalou-pred-pana",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, poďme s chválou pred Pána, že miluje nás od dávna,",
                            "tak Jeho meno slávme zas! On pred vekmi nás miloval,",
                            "nám Svojho Syna daroval, by všetkých hriechov zbavil nás.",
                            "Vďak v piesni vyspievaj a Bohu chválu vzdaj, Haleluja!",
                            "Pán z výsosti nás vyprostil, sme Jeho deťmi z milosti."
                        ],
                        [
                            "2. Pán Ježiš Kristus, Boží Syn vzal z lásky ťarchu našich vín",
                            "a za nás trest už podstúpil. Nám život Svojou smrťou dal ",
                            "a milovať už neprestal, čo z moci diabla vykúpil. Krv svätá ",
                            "z Jeho rán bôľ duše hojí nám, Hallejuja! Duch zaplesá, ",
                            "On Kráľ je sám, v Ňom radujú sa nebesá."
                        ],
                        [
                            "3. Nám od Otca je poslaný Duch, Utešiteľ nazvaný, ",
                            "On život, nový vytvorí, v nás pravdu, vieru rozmnoží a svedčí, ",
                            "že sme ľud Boží i bratia, sestry v Kristovi. On posväcuje nás",
                            "a vedie k sláve zas, Haleluja! Tam vedie nás, kde Kristus ",
                            "raz dá život večný plný krás."
                        ],
                        [
                            "4. Boh Otec, Syn a Svätý Duch, ten Trojjediný jeden Boh nech ",
                            "na veky je slávený! On všetko živí. spravuje, mňa stvoril spasil, ",
                            "hotuje, bych došiel večnej odmeny. A potom na nebi Ho budem ",
                            "velebiť, Haleluja. Ja spievať mám Mu vďaky žalm, tam s anjelmi ",
                            "ho zaspievam."
                        ]
                    ]
                },
                {
                    "name": "Keď za hory slniečko",
                    "number": 399,
                    "lang": "sk",
                    "url": "ked-za-hory-slniecko",
                    "author": "",
                    "verses": [
                        [
                            "1. Keď za hory slniečko padá a zorami zružovie svet, ",
                            "tak milo znie pesnička vtáka. Tak dobre je v prírode dlieť, ",
                            "keď všetko je utíšené, sťa v modlitbe ponorené.       "
                        ],
                        [
                            "2. Hľa, farbami jasajú kvietky, veď nemajú vzácny dar;",
                            "reč, však sklonené hlavičky všetkých len Tvorcovi vzdávajú ",
                            "česť. Ich vôňa to hymna je chvál, keď vznáša sa ku nebesám."
                        ],
                        [
                            "3. Tak vzácna je súmraku chvíľa, keď každý tvor stíšiť sa vie, ",
                            "keď duša, čo večne je živá, tú Božiu reč porozumie a vďačnosťou ",
                            "naplnená je v modlitbách ponorená."
                        ]
                    ]
                },
                {
                    "name": "Keď k hviezdam za večera",
                    "number": 400,
                    "lang": "sk",
                    "url": "ked-k-hviezdam-za-vecera",
                    "author": "",
                    "verses": [
                        [
                            "  ",
                            "1. Keď k hviezdam za večera zrak vďačne upriem ",
                            "svoj, strach mizne, čo ma zvieral, i smútok, nepokoj,",
                            "i smútok, nepokoj. "
                        ],
                        [
                            "2. Ten pohľad k nebu vlieva mi v dušu útechu",
                            "a srdce s túžbou spieva: Tam dôjdem k oddychu! ",
                            "Tam dôjdem k oddychu!"
                        ],
                        [
                            "3. Tam pokoj čaká teba a nič ho nezruší, tam ",
                            "čistá rozkoš neba nám vstúpi do duší. ",
                            "Nám vstúpi do duší. "
                        ],
                        [
                            "4. Tam nový Jeruzalem, kde večný svitne deň,",
                            "Tam v tôni rajských paliem svoj nový domov zriem.",
                            "Svoj nový domov zriem. "
                        ],
                        [
                            "5. Rád ponesiem to bremä, čo verným chystá",
                            "svet, viem, že to strasti semä Pán zmení v blaha",
                            "kvet. Pán zmení v blaha kvet. "
                        ],
                        [
                            "6. Kto rozsieva tu v plači, žať bude s plesaním,",
                            "keď Pán mu kríž sňať ráči, by večne žil tam",
                            "s Ním. By večne žil tam s Ním."
                        ],
                        [
                            "7. Ó, pomáhaj mi, Pane, buď so mnou vo dňoch",
                            "zlých, nech dušou pokoj vanie, čo chystáš pre",
                            "verných. Čo chystáš pre verných. "
                        ],
                        [
                            "8. Keď prestane mi žiariť svit hviezd, čo teraz",
                            "zriem, lúč svetla z Tvojej tvári ma navždy",
                            "zbaví tiem. Ma navždy zbaví tiem."
                        ],
                        [
                            "9. Čuj, Pane, prosby vrúce, svieť mi aj hrobu ",
                            "tmou, buď Svetlo nehasnúce, mne Hviezdou",
                            "jedinou! Mne Hviezdou jedinou!"
                        ]
                    ]
                },
                {
                    "name": "Zapadá slnko a deň sa níži",
                    "number": 401,
                    "lang": "sk",
                    "url": "zapada-slnko-a-den-sa-nizi",
                    "author": "",
                    "verses": [
                        [
                            "1. Zapadá slnko a deň sa níži, Jemu v zápätí",
                            "tmavá noc beží. Ó, duša pováž Božiu dobrotu, ",
                            "ktorou ti prispel i dnes k životu! "
                        ],
                        [
                            "2. Boh mi tento deň v zdraví prežiť dal, chránil ",
                            "od škody, v práci pomáhal. A hoc’ nepriateľ ",
                            "mocne útočil, nedopustil Boh, by ma on zničil. "
                        ],
                        [
                            "3. Ó, Hospodine, Kráľu večnosti, čím sa odmeniť",
                            "Tvojej milosti? Srdcom skrúšeným predchádzam ",
                            "Teba: Prijmi tú obeť, hoc’ je i slabá!"
                        ]
                    ]
                },
                {
                    "name": "Jak slnka jasnosť",
                    "number": 402,
                    "lang": "sk",
                    "url": "jak-slnka-jasnost",
                    "author": "",
                    "verses": [
                        [
                            "1. Jak slnka jasnosť keď pod večer zapadne, ",
                            "za dňom tmavá noc vôkol zavládne, tak do ",
                            "mora večnosti zájde doba milosti s ňou čas ",
                            "hriešnym k záchrane daný prestane. "
                        ],
                        [
                            "ZBOR: Pracuj, ó, dieťa Božie, kým nezájde ",
                            "práce čas. Jednaj v živote vážne, žiješ ho len raz. "
                        ],
                        [
                            "2. Pamätaj, že svet rýchlo k súdu dozrieva, ",
                            "žencov dosť nieto a žatva mnohá! Zbieraj snopy",
                            "na poli, znes do Božej stodoly! Sú to duše lkajúce, ",
                            "k Bohu idúce. "
                        ],
                        [
                            "ZBOR: Pracuj, ó dieťa Božie, kým nezájde ",
                            "práce čas. Jednaj v živote vážne, žiješ ho len raz. "
                        ],
                        [
                            "3. Sú zotročený, ktorý majú kraľovať, tých k ",
                            "Ježišovi treba povolať. Ako trúba povýš hlas, ",
                            "zvestiam spásy klaď dôraz, priveď dušu zmorenú",
                            "k žitia prameňu. "
                        ],
                        [
                            "ZBOR: Pracuj, ó dieťa Božie, kým nezájde ",
                            "práce čas. Jednaj v živote vážne, žiješ ho len raz. "
                        ],
                        [
                            "4. Ó, pracuj snažne! Slovom, skutkom, životom",
                            "ži sväte, vážne pred Bohom, svetom, Pán hneď",
                            "povie: „Bolo dosť, skončená je povinnosť, vojdi",
                            "v radosť, sluha môj, užívať diel svoj.“"
                        ],
                        [
                            "ZBOR: Pracuj, ó dieťa Božie, kým nezájde ",
                            "práce čas. Jednaj v živote vážne, žiješ ho len raz. "
                        ]
                    ]
                },
                {
                    "name": "Noc tmavá tichá",
                    "number": 403,
                    "lang": "sk",
                    "url": "noc-tmava-ticha",
                    "author": "",
                    "verses": [
                        [
                            "1. Noc tmavá tichá závojom zem vôkol",
                            "Zastiera a všetko tvorstvo s pokojom ",
                            "[: sa k spánku poberá. :]"
                        ],
                        [
                            "2. Len Ty, ó, Strážca z výsosti, si nad Svojimi",
                            "bdieš a v prenesmiernej milosti [: ich pred ",
                            "zlým ukryješ. :]"
                        ],
                        [
                            "3. Aj mňa, môj Otče láskavý, drž v Svojej ",
                            "ochrane a keď sa ráno dostaví, [: kiež zdravý",
                            "povstanem. :]"
                        ],
                        [
                            "4. Mňa ťarchy hriechu oprosti, daj taký život",
                            "žiť, že zložím skutky temnosti [: zrúc Tvojho",
                            "svetla svit. :]"
                        ],
                        [
                            "5. Ak posledná noc ide snáď, mám skončiť zemský",
                            "beh, daj z milosti tam znova vstať, [: kde",
                            "uzriem večný breh. :]"
                        ]
                    ]
                },
                {
                    "name": "Slnka keď žiara",
                    "number": 404,
                    "lang": "sk",
                    "url": "slnka-ked-ziara",
                    "author": "",
                    "verses": [
                        [
                            "1. Slnka keď žiara, svetlo hviezd hasnú nám, ",
                            "hasnú nám. Túžime svojho ducha vzniesť",
                            "k nebesám, k nebesám. Noci kde viac už ",
                            "nebýva, radosť a mier tam prebýva, tam ",
                            "hviezda večná žiarivá: Ježiš sám, Ježiš sám!"
                        ],
                        [
                            "2. Vôkol nás keď sa zmáha hriech, lesť a klam, ",
                            "lesť a klam, vtedy duch dvíha mysle let k nebesám, ",
                            "k nebesám, kde mier už večný po boji naveky",
                            "búrky spokojí i všetky rany zahojí Ježiš sám, ",
                            "Ježiš sám!"
                        ],
                        [
                            "3. Priateľ keď pozdrav posledný dáva nám, ",
                            "dáva nám, vtedy zrak hľadí bolestný k nebesám, ",
                            "k nebesám, tam kde už stíchol každý ston, ",
                            "dosiahnutý je spásy trón, kde stiera slzy z očí On, ",
                            "Ježiš sám, Ježiš sám!"
                        ]
                    ]
                },
                {
                    "name": "Doteraz nám, pomáhal Pán Boh",
                    "number": 405,
                    "lang": "sk",
                    "url": "doteraz-nam-pomahal-pan-boh",
                    "author": "",
                    "verses": [
                        [
                            "1. Doteraz nám, pomáhal Pán Boh dobrotivý, ",
                            "preto k nebu obráťme zrak svoj dúfanlivý, ",
                            "odkiaľ pomoc prichádza nám vždy v pravej dobe, ",
                            "tam, kde duša nachádza nové sily v mdlobe. "
                        ],
                        [
                            "2. Dosiaľ nie je prikrátka ruka Hospodina, veď ",
                            "On z lásky k hriešnikom poslal svojho Syna. ",
                            "A či s Ním by nedával všetko, čo nám treba, ",
                            "ako otec láskavý dáva deťom chleba?"
                        ],
                        [
                            "3. Pomáhal i pomôže Pán Boh svojim ďalej, ",
                            "preto v Neho skladajme stále všetku nádej. ",
                            "O potrebách našich vie prv, než o ne lkáme a ",
                            "že rád nám pomáha, z Jeho slova známe. "
                        ],
                        [
                            "4. Hoci neraz pochybnosť s úzkosťou sa snúbi, ",
                            "že Pán splniť zabúda slávne svoje sľuby, no On ",
                            "sám vie najlepšie, čo nám môže škodiť, ako ",
                            "vyhnúť priepastiam, ako nás má vodiť. "
                        ],
                        [
                            "5. Hospodin, čo s nami bol, bude všade s nami, ",
                            "do skonania sveta až nebudeme sami. On nás ",
                            "cestou života verne podopiera, privedie raz ",
                            "ku cieľu, ktorý zrela viera."
                        ]
                    ]
                },
                {
                    "name": "Rok starý v more vekov",
                    "number": 406,
                    "lang": "sk",
                    "url": "rok-stary-v-more-vekov",
                    "author": "",
                    "verses": [
                        [
                            "1. Rok starý v more vekov sa norí zas. ",
                            "Ó, prijmi obeť s vďakou, čuj prosby hlas. ",
                            "Ty, večný vekov Kráľu, si bezo zmien, ",
                            "čuj našich žalmov chválu i v tento deň. "
                        ],
                        [
                            "2. Ty otváral si ruku a žehnal nás, Tys’ chránil ",
                            "v sveta hluku nás v každý čas, Ty sirotu i vdovu",
                            "si zachoval, deň za dňom stále znovu nás ",
                            "láskou hrial. "
                        ]
                    ]
                },
                {
                    "name": "Niesli sme ťažkosti veľa",
                    "number": 407,
                    "lang": "sk",
                    "url": "niesli-sme-tazkosti-vela",
                    "author": "",
                    "verses": [
                        [
                            "3. Buď za to Tebe chvála, čo dal si nám, že ",
                            "v štedrosti je stála vždy Tvoja dlaň. Tys’ dobre ",
                            "vedel, Pane, čo chcel si dať. Ó, Meno, požehnané",
                            "buď tisíckrát!  ",
                            "1. Niesli sme ťažkostí veľa, neminuli sa ",
                            "docela, pominul rok, nový nastal, borba aj",
                            "v ňom bude častá. "
                        ],
                        [
                            "2. Tys’ nás roky chránil, Kriste, Ty si naše ",
                            "útočište, zachovaj nás v novom roku, ",
                            "keď svet ide do útoku."
                        ],
                        [
                            "3. Vidíš prítomný chvat celý, skoro bude v ",
                            "svojom cieli, všetko berie rozklad, zmenu, ",
                            "búrky zániku sa ženú. "
                        ],
                        [
                            "4. Blížia sa už Božie súdy pomstiť verných, ",
                            "strestať bludy, preto, Kriste, Ty sám bráň nás ",
                            "v tento rok i na každý čas.  "
                        ],
                        [
                            "5. Od všetkého škodlivého, Tebe, Pane, ",
                            "nemilého diabla, pekla, zatratenia, antikrista ",
                            "pokušenia. "
                        ],
                        [
                            "6. Daj rok začať požehnaný, ruka Tvoja nech ",
                            "nás chráni cestou večnej ku odmene, kým ju ",
                            "v nebi dostaneme. "
                        ]
                    ]
                },
                {
                    "name": "S Bohom! S Bohom",
                    "number": 408,
                    "lang": "sk",
                    "url": "s-bohom-s-bohom",
                    "author": "",
                    "verses": [
                        [
                            "1. [: „S Bohom! S Bohom!“ Rok starý ",
                            "privoláva nám. :] Leto k pokániu darované, ",
                            "ak bolo hriešne rozmŕhané, už je, už je tam!"
                        ],
                        [
                            "2. [: „S Bohom! S Bohom!“ Rok starý ",
                            "privoláva nám. :] Príležitosť ku milovaniu, ",
                            "k práci, víťazstvu, odpúšťaniu už je, už je tam!"
                        ],
                        [
                            "3. [: „S Bohom! S Bohom!“ Rok starý ",
                            "privoláva nám. :] Čas, ktorý ste nepoužili a v ",
                            "službe Pána nestrávili, už je, už je tam!"
                        ]
                    ]
                },
                {
                    "name": "Čas mizne, letia hodiny",
                    "number": 409,
                    "lang": "sk",
                    "url": "cas-mizne-letia-hodiny",
                    "author": "",
                    "verses": [
                        [
                            "4. [: „S Bohom! S Bohom!“ Rok starý ",
                            "privoláva nám. :] Dvanásta hodina odbila, ",
                            "s ňou vzácna, k spáse daná chvíľa už je, už je tam! ",
                            "1. Čas mizne letia hodiny, ktože ich zastaví?",
                            "Tvoj život, krátky, jediný sa skoro odplaví. ",
                            " ",
                            "ZBOR: Posledný zájde žitia deň a noc sa priblíži.",
                            "Sťa svetlo večné žiary len Spasiteľ na kríži, ",
                            "Spasiteľ na kríži. "
                        ],
                        [
                            "2. Svet ťa už sklamal, poranil a srdce krváca. ",
                            "Dosť si už hriešnym zvodom žil, späť k Bohu",
                            "navráť sa!"
                        ],
                        [
                            "ZBOR: Posledný zájde žitia deň a noc sa priblíži.",
                            "Sťa svetlo večné žiary len Spasiteľ na kríži, ",
                            "Spasiteľ na kríži. "
                        ],
                        [
                            "3. I teba čaká lásky Kráľ, On zomrel za teba. ",
                            "On všetky tvoje viny vzal, On cesta do neba. "
                        ],
                        [
                            "ZBOR: Posledný zájde žitia deň a noc sa priblíži.",
                            "Sťa svetlo večné žiary len Spasiteľ na kríži, ",
                            "Spasiteľ na kríži. "
                        ]
                    ]
                },
                {
                    "name": "Nový nastal rok",
                    "number": 410,
                    "lang": "sk",
                    "url": "novy-nastal-rok",
                    "author": "",
                    "verses": [
                        [
                            "1. Nový nastal rok, riaď Ty sám náš krok, ",
                            "riaď i všetky naše snahy, Spasiteľu, Jezu drahý, ",
                            "zbav v dňoch budúcich všetkých vplyvov zlých. "
                        ],
                        [
                            "2. Prijmi chválu, česť za moc Tvojich ciest, po ",
                            "nich viedli Tvoje ruky, dal’s nám radosť, zmiernil",
                            "muky a tak v obojom žehnal pokojom. "
                        ],
                        [
                            "3. Povedie nás v diaľ Vodca náš a Kráľ, všetko",
                            "vidia oči Jeho, neznajú nič ukrytého, istá Jeho ",
                            "dlaň. Spoliehame naň. "
                        ],
                        [
                            "4. Korunuj nás v Ňom milosrdenstvom, Bože",
                            "svätý, Hospodine, s dôverou keď vykročíme",
                            "v započatý rok, riaď náš každý krok. "
                        ]
                    ]
                },
                {
                    "name": "Šťastní sú tí",
                    "number": 411,
                    "lang": "sk",
                    "url": "stastni-su-ti",
                    "author": "",
                    "verses": [
                        [
                            "1. Šťastní sú tí, ktorých sväté sľuby sám",
                            "Boh posvätí, ktorých city láskou vzňaté splynú",
                            "Jemu  v obeti. Šťastní sú tí, ktorým vená v nebesiach",
                            "sa skladajú, šťastní tam, kde muž i žena ",
                            "v duchovný dom vzrastajú. "
                        ],
                        [
                            "2. Tam len pravé blaho kvitne, Pán kde radí",
                            "vo všetkom, i keď bôľny deň nám svitne, potešenie",
                            "máme v ňom. Tam len čistá rozkoš blaží, ",
                            "Pán kde všetko spravuje každý za Ním ísť ",
                            "sa snaží, nad všetko Ho miluje."
                        ],
                        [
                            "3. Nože teda i vy dvaja za hosťa Ho pozvite,",
                            "v rodine s Ním kus je raja, bez Neho v tmách",
                            "zblúdite. Nech len vaša láska stála ohňom k Nemu",
                            "plápolá, k večnej svadbe nebies Kráľa i vás ",
                            "Boh raz zavolá. "
                        ]
                    ]
                },
                {
                    "name": "Váš sňatok Bohom zriadený",
                    "number": 412,
                    "lang": "sk",
                    "url": "vas-snatok-bohom-zriadeny",
                    "author": "",
                    "verses": [
                        [
                            "1. Váš sňatok Bohom zriadený dnes posvätený je, ",
                            "nech život manželský váš ctný Boh ",
                            "no aj človek zrie. "
                        ],
                        [
                            "ZBOR: Ježiš Pán ráč žehnať vám, ",
                            "spravuj vás v každý čas, vy na svätých ",
                            "modlitbách trvajte v každých dobách."
                        ],
                        [
                            "2. Pán Ježiš nech sám vo váš dom v deň každý",
                            "prístup má, s Ním raďte sa vždy o všetkom, ",
                            "v Ňom pomoc hotová."
                        ],
                        [
                            "ZBOR: Ježiš Pán ráč žehnať vám, ",
                            "spravuj vás v každý čas, vy na svätých ",
                            "modlitbách trvajte v každých dobách."
                        ],
                        [
                            "3. Len bohabojným manželom Boh ",
                            "požehnanie dá, čo pevní budú v svete",
                            "zlom a cirkvi ozdoba. "
                        ],
                        [
                            "ZBOR: Ježiš Pán ráč žehnať vám, ",
                            "spravuj vás v každý čas, vy na svätých ",
                            "modlitbách trvajte v každých dobách."
                        ],
                        [
                            "4. Nuž, choďte v mene Pánovom nech Ježiš ",
                            "je váš hosť a Boh spasenia podielom raz ",
                            "prijme na večnosť. "
                        ],
                        [
                            "ZBOR: Ježiš Pán ráč žehnať vám, ",
                            "spravuj vás v každý čas, vy na svätých ",
                            "modlitbách trvajte v každých dobách."
                        ]
                    ]
                },
                {
                    "name": "Blažený dom",
                    "number": 413,
                    "lang": "sk",
                    "url": "blazeny-dom",
                    "author": "",
                    "verses": [
                        [
                            "1. Blažený dom, kde teba prijať smeli, ",
                            "Priateľu duší, Pane Ježišu, nad hostí všetkých, ",
                            "ktorý u nich dleli, vzdávajú Tebe úctu najvyššiu, ",
                            "kde každé srdce sa Ti odovzdáva, na Teba",
                            "hľadia oči s radosťou, otázka z úst kde letí ",
                            "nedočkavá: Čo žiadaš, Pane, dáme s vďačnosťou. "
                        ],
                        [
                            "2. Blažený je ten dom, kde muž a žena rovnakým",
                            "duchom v Tebe spojený s nádejou kľačia",
                            "vedno na kolenách, základ ich viery nikto nezmení",
                            "kde oba pevne vždy sa Teba držia v láske",
                            "i v žiali, v blahu, úzkosti, pri Tebe verne stále ",
                            "zostať túžia, hoc ich deň zlým či dobrým uhostí. "
                        ],
                        [
                            "3. Blažený dom kde dietky svoje malé v modlitbách",
                            "kladú na Pánovu hruď. Priateľu detí, ",
                            "kde ich učia stále s úctou a láskou hlas Tvoj vypočuť. ",
                            "Kde radi sa Ti k nohám zhromažďujú",
                            "Sýtiť sa slovom Tvojím ľúbezným, s radosťou",
                            "Tvoju veľkosť ospevujú a Ty sa  láske pravej",
                            "skláňaš k nim. "
                        ],
                        [
                            "4. Blažený dom, kde každý pozná Teba, vie, že ",
                            "Tvoj zrak je naňho uprený, že každé dielo",
                            "verne konať treba, úlohy svoje plniť s nadšením. ",
                            "Tam ako Tebe každý hospodári, v pokore, ",
                            "láske nezrie príťaže, pracuje rád, niet chmúry",
                            "v Jeho tvári, aj v malom veľkú vernosť dokáže."
                        ],
                        [
                            "5. Blažený dom, kde každú radosť strojíš a Ty sa, ",
                            "Pane, na nej podieľaš. Blažený dom, kde ",
                            "všetky rany hojíš v strasti a smútku slzy zotieraš, ",
                            "kým všetci úlohy dňa nesplnili. Odídu potom",
                            "domov z cudziny. Vovedieš ich tam, Spasiteľu milý, ",
                            "do veľkej, voľnej, krásnej otčiny. "
                        ]
                    ]
                },
                {
                    "name": "Ó, Bože, zošli požehnanie",
                    "number": 414,
                    "lang": "sk",
                    "url": "o-boze-zosli-pozehnanie",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, Bože, zošli požehnanie aj tejto novej ",
                            "rodine, nech láska Tvoja z neba planie v ich ",
                            "srdciach v každej hodine. Tvoj pokoj, vzácny",
                            "nebies dar, nech sprevádza i tento pár. "
                        ],
                        [
                            "2. Kde prídeš Ty, tam sídli radosť, tam nebeský ",
                            "mier vládne tiež, zlo mizne a s ním svár i starosť,",
                            "Ty Svojich k cieľu povedieš. Čo treba dušiam,",
                            "telám ich, dáš z darov Svojich prehojných. "
                        ],
                        [
                            "3. Nech je i váš dom požehnaný, kde s ľuďmi",
                            "Pán Boh  býva sám a radosť ako vánok jarný ",
                            "nech kliesni pohľad k nebesám, nech Ježišov ",
                            "Duch pojí vás vždy v zväzku lásky plnom krás. "
                        ]
                    ]
                },
                {
                    "name": "Boh žehnaj zväzok ten",
                    "number": 415,
                    "lang": "sk",
                    "url": "boh-zehnaj-zvazok-ten",
                    "author": "",
                    "verses": [
                        [
                            "1. Boh žehnaj zväzok ten, čo v Kristu ",
                            "viaže nás, náš kruh buď užší deň čo deň, jak",
                            "v nebi bude raz. "
                        ],
                        [
                            "2. My vrúcnych prosieb hlas tam pred trón ",
                            "chceme vzniesť, veď jedna snaha vedie nás,",
                            "cieľ jeden: Božia česť. "
                        ],
                        [
                            "3. Tiež svorní chceme byť, niesť spolu bremä, ",
                            "žiaľ a vedno slzu vyroniť s tým z nás, čo zaplakal."
                        ],
                        [
                            "4. Keď rozchod nastáva, nám v srdci clivo je, ",
                            "však nesmúťme, nám zostáva lúč večnej nádeje. "
                        ],
                        [
                            "5. Tá nádej blaží nás tu, cestu života, veď vieme, ",
                            "že sa blíži čas, keď Pán nás privíta. "
                        ],
                        [
                            "6. Tam vedie naša púť, kde pokoj, blaženosť, ",
                            "náš kruh i všetok Boží ľud sa spojí na večnosť. "
                        ]
                    ]
                },
                {
                    "name": "Boh buď s vami",
                    "number": 416,
                    "lang": "sk",
                    "url": "boh-bud-s-vami",
                    "author": "",
                    "verses": [
                        [
                            "1. Boh buď s vami, kým sa stretneme! Nech vám ",
                            "Svoju múdrosť dáva, v stáde Svojom zachováva, ",
                            "Boh buď s vami, kým sa stretneme! "
                        ],
                        [
                            "ZBOR: Stretneme sa, stretneme sa, pri nohách ",
                            "tam Ježiša. Stretneme sa, stretneme sa, ",
                            "Boh buď s vami, kým sa stretneme! "
                        ],
                        [
                            "2. Boh buď s vami, kým sa stretneme! Skryje ",
                            "v krídel svojich tieni, dáva chlieb vám každodenný, ",
                            "Boh buď s vami, kým sa stretneme!"
                        ],
                        [
                            "ZBOR: Stretneme sa, stretneme sa, pri nohách ",
                            "tam Ježiša. Stretneme sa, stretneme sa, ",
                            "Boh buď s vami, kým sa stretneme!"
                        ],
                        [
                            "3. Boh buď s vami, kým sa stretneme! Zachráni ",
                            "vás v nebezpečí, bôle, rany bude liečiť, ",
                            "Boh buď s vami, kým sa stretneme!"
                        ],
                        [
                            "ZBOR: Stretneme sa, stretneme sa, pri nohách ",
                            "tam Ježiša. Stretneme sa, stretneme sa, ",
                            "Boh buď s vami, kým sa stretneme!"
                        ],
                        [
                            "4. Boh buď s vami, kým sa stretneme! Nech ",
                            "vás v láske zachováva, v zhubných víchroch ",
                            "pokoj dáva, Boh buď s vami, kým sa stretneme!"
                        ],
                        [
                            "ZBOR: Stretneme sa, stretneme sa, pri nohách ",
                            "tam Ježiša. Stretneme sa, stretneme sa, ",
                            "Boh buď s vami, kým sa stretneme!"
                        ]
                    ]
                },
                {
                    "name": "Hodina už odbila",
                    "number": 417,
                    "lang": "sk",
                    "url": "hodina-uz-odbila",
                    "author": "",
                    "verses": [
                        [
                            "1. Hodina už odbila; ach, lúčenia prišiel ",
                            "čas! Čo Pán Boh spolu zviedol, to On sám ",
                            "rozvádza zas. Elim nie je nebe, z neho musíme von; ",
                            "cezeň iba vedie tá cesta na Sion. "
                        ],
                        [
                            "2. Blaženosť bez skončenia a radosť bez premeny ",
                            "čaká na nás už až tam, pri palmách a v ich tieni. ",
                            "Bratia, sestry, už sa my zas rozídeme!",
                            "Už každý na svojej dráhe zastaneme!"
                        ],
                        [
                            "3. V tom chladnom, šírom svete spomínajte si ",
                            "na nás i na tento spoločne strávený prekrásny čas, ",
                            "v ktorom sme pri nohách Pána svorne žili a z ",
                            "prameňa vody živej si ťažili. "
                        ],
                        [
                            "4. Svetlo nás zahrievalo a láska nás blažila; ",
                            "jedna krásna chvíľočka ku druhej sa družila. ",
                            "Ej, dobre nám bolo, dobre tak spolu žiť; preto ",
                            "padá ťažko, musieť sa rozlúčiť!"
                        ],
                        [
                            "5. Lež načo kloniť hlavy? Však zase: „Do videnia!“",
                            "Pre nás, bratia a sestry, nieto už rozlúčenia!",
                            "Veď srdce od srdca diaľka nerozdvojí! ",
                            "Verné dietky Božie večná láska pojí. "
                        ]
                    ]
                },
                {
                    "name": "Rozchodu čas už prišiel zas",
                    "number": 418,
                    "lang": "sk",
                    "url": "rozchodu-cas-uz-prisiel-zas",
                    "author": "",
                    "verses": [
                        [
                            "1. Rozchodu čas už prišiel zas, my musíme ",
                            "sa rozhádzať, do videnia privolávať. S Bohom, ",
                            "s Bohom do videnia. My musíme sa rozchádzať, dovidenia ",
                            "privolávať. S Bohom, s Bohom dovidenia. "
                        ],
                        [
                            "2. Požehnanie od Boha je. Duchom Jeho posilnení ",
                            "ideme zas na cestu my. S Bohom, s Bohom dovidenia. ",
                            "Duchom Jeho posilnení ideme zas na cestu my. ",
                            "S Bohom, s Bohom dovidenia. "
                        ],
                        [
                            "3. Je u Boha radosť veľká. Do Jeho dajme sa ",
                            "rukou. Povedie nás Jeho cestou. S Bohom, s Bohom do ",
                            "videnia. Do Jeho dajme sa rukou. Povedie nás Jeho",
                            "cestou. S Bohom, s Bohom dovidenia. "
                        ],
                        [
                            "4. K nebu hore zrak obráťme, bo vraví Spasiteľ ",
                            "náš Pán: Verný zostaň, ja prídem sám, ",
                            "S Bohom, s Bohom dovidenia. Bo vraví Spasiteľ ",
                            "náš Pán: Verný zostaň, ja prídem sám. ",
                            "S Bohom, s Bohom dovidenia. "
                        ],
                        [
                            "5. Čas prichádza, pripravme sa. Ak je teraz ",
                            "posledný krát, čo sa vidíme spolu tak. S Bohom, ",
                            "s Bohom v novom nebi. Ak je teraz posledný ",
                            "krát, čo sa vidíme spolu tak. S Bohom, ",
                            "s Bohom v novom nebi. "
                        ]
                    ]
                },
                {
                    "name": "Duša drahá, s Bohom buď",
                    "number": 419,
                    "lang": "sk",
                    "url": "dusa-draha-s-bohom-bud",
                    "author": "",
                    "verses": [
                        [
                            "1. [: Duša drahá, s Bohom buď! :] Na zemi ",
                            "už nezažiari radosti svit v tvojej tvári, ",
                            "s Bohom buď, ach, s Bohom buď!"
                        ],
                        [
                            "2. [: Odchodu ti nastal čas, :] skončená je práca ",
                            "tvoja, víťazne sa vraciaš z boja, slza kanie ",
                            "z našich rias. "
                        ],
                        [
                            "3. [: Často kráčal krutý žiaľ :] ako druh tvoj ",
                            "medzi nami s tebou, bôľu šľapajami, Pán ti ",
                            "všetko uniesť dal. "
                        ],
                        [
                            "4. [: Ale teraz v inú vlasť :] odvolal ťa anjel Boží, ",
                            "kde sa večne bude množiť s novou slávou",
                            "nová slasť. "
                        ],
                        [
                            "5. [: Nad hviezdami teraz dlieš, :] pre Božím ",
                            "tam trónom stojíš, pri nezmernom pravdy zdroji, ",
                            "z neho čerpať aj piť smieš. "
                        ],
                        [
                            "6. [: S Bohom buď, ach, s Bohom buď! :] A keď ",
                            "nám tu sviece zhasnú, uvidíme si vlasť krásnu, ",
                            "teba tiež, nuž, s Bohom бuď!"
                        ]
                    ]
                },
                {
                    "name": "Až zdvihne smrti vlna hlas",
                    "number": 420,
                    "lang": "sk",
                    "url": "az-zdvihne-smrti-vlna-hlas",
                    "author": "",
                    "verses": [
                        [
                            "1. Až zdvihne smrti vlna hlas žalostný, ",
                            "desný raz a ty sa budeš poberať pred Boha zas, ",
                            "ako tam činy zodpovieš, priestupky, pády svoje?",
                            "Ako v tvár Sudcu pohliadneš, ktorý zná dielo tvoje?"
                        ],
                        [
                            "2. Posledná chvíľa plná múk, posledný srdca zvuk ",
                            "odznie a dielo konané vypadne z rúk. Čímže sa ",
                            "potom potešíš, až všetko, všetko stratíš a nikdy, nikdy, ",
                            "nikdy viac v svet sa už nenavrátiš?"
                        ],
                        [
                            "3. Až Sudca prestol zaujal, vinníkov predvolal a ",
                            "knihu skutkov v ruky vzal, aký to žiaľ! Všetko ",
                            "tam nájde značené, čo činili raz v svete. To ukryté ",
                            "a tajené bude Ním odostreté. "
                        ],
                        [
                            "4. Ukáže kniha verne čas, kedy a koľko ráz Božieho ",
                            "Ducha, svedomia umlčals’ hlas. Kedy si milosť ",
                            "odhodil, pošliapal krv presvätú, čo tiekla abys’ ",
                            "večne žil, kropiac kríž i Golgotu. "
                        ],
                        [
                            "5. Až tvojho Sudcu svätý hlas vyriekne smutne ",
                            "raz: „Odo Mňa choďte v záhubu, Ja neznám vás!“ ",
                            "Pôjdeš, so sebou nevezmeš nádeje vo zmierenie ",
                            "trestu, bo niet viac milosti, keď prišlo odsúdenie. "
                        ]
                    ]
                },
                {
                    "name": "Krásnu vlasť pripravil",
                    "number": 421,
                    "lang": "sk",
                    "url": "krasnu-vlast-pripravil",
                    "author": "",
                    "verses": [
                        [
                            "1. Krásnu vlasť pripravil pre svoj ľud milý náš ",
                            "Spasiteľ na nebi, radosť len vládne tam, večný kľud, ",
                            "Tvorcu húf spasených velebí. "
                        ],
                        [
                            "ZBOR: . [: Krásnu vlasť na nebi pripravil pre verných Spasiteľ. :]"
                        ],
                        [
                            "2. Efata! Otvorže sa aj nám, brána ty nebeská, ",
                            "z milosti. Pane náš, k nadhviezdnej vlasti sám veď ",
                            "a nás nebesky uhosti. "
                        ],
                        [
                            "ZBOR: . [: Krásnu vlasť na nebi pripravil pre verných Spasiteľ. :]"
                        ],
                        [
                            "3. Až sa náš pozemský zborí stan, príbytok od Boha ",
                            "v nebesiach pre Svoju krv drahú dá nám Pán,",
                            "žiť kde s Ním budeme v plesaniach. "
                        ],
                        [
                            "ZBOR: . [: Krásnu vlasť na nebi pripravil pre verných Spasiteľ. :] "
                        ]
                    ]
                },
                {
                    "name": "Kde duša si hľadať má trvalú vlasť",
                    "number": 422,
                    "lang": "sk",
                    "url": "kde-dusa-si-hladat-ma-trvalu-vlast",
                    "author": "",
                    "verses": [
                        [
                            "1. Kde duša si hľadať má trvalú vlasť? ",
                            "Kde nájde si pokoj a žiadúcu slasť? Ach, tento ",
                            "svet nie je môj trvalý byt, kde hriechu už nieto, ",
                            "kde blahom je žiť. [: Nie, nie, :] nie je to zem, ",
                            "tam domov je duší, kde večný je deň!"
                        ],
                        [
                            "2. Ach, opusti zem, by si uzrel tú vlasť, kde ",
                            "duša si oblieka krásu a slasť! Len Jeruzalem",
                            "zlatý na nebesiach je domovom duší, kde nevládne ",
                            "strach. [: Áno, :] jedine tam mier na veky ",
                            "pre dušu schystaný mám. "
                        ],
                        [
                            "3. Je presladký pokoj tam u Ježiša, kde smrť, ",
                            "hriech, bôľ k duši sa nepriblížia, kde zvučiace",
                            "harfy a radostný jas tam vo vlasti neba už čakajú ",
                            "nás. [: Pokoj, :] nekonečný v Ježišovom ",
                            "lone nás čaká večný."
                        ],
                        [
                            "4. Je blažené v nebesiach u Krista žiť, kde ",
                            "spasených ožiari večnosti svit, kde svätosti ",
                            "rúchom si odeje Pán tých, svetom čo čakajú ",
                            "do nebies brán. [: Voľný :] od svojich vín tam ",
                            "jasajú radosťou vykúpení."
                        ],
                        [
                            "5. Ó, predrahý Ježišu, ráč nás vziať tam, kde ",
                            "Hallelujah Ti znie zo všetkých strán, kde v srdciach",
                            "má horieť len jediný plam: krv osláviť, ",
                            "život čo vrátila nám  [: Ticho :] krátky len čas",
                            "a domov nás povolá Ježišov hlas."
                        ],
                        [
                            "6. Nuž, duša, len vytrvaj vo vernosti, kým z bojov ",
                            "ťa navždy Pán nevyprostí. Česť sveta a zlata ",
                            "si nežiadaj lesk, z rúk Pánových žiari ti ",
                            "koruny blesk. [: Radosť :] vo večnosti ti bude ",
                            "raz odmenou za úzkosti. "
                        ]
                    ]
                },
                {
                    "name": "Lepšiu mám domovinu",
                    "number": 423,
                    "lang": "sk",
                    "url": "lepsiu-mam-domovinu",
                    "author": "",
                    "verses": [
                        [
                            "1. Lepšiu mám domovinu, ako svet môže ",
                            "dať, čakám vlasť celkom inú bez hriechov, bôľov,",
                            "zrád. Naplnia sa tam túžby, srdce si utíšim, ",
                            "po zemských cestách služby Ježiša uvidím. "
                        ],
                        [
                            "2. Lepšiu mám domovinu, ktorá ma čaká tam, ",
                            "s láskou kde vždy sa vinú verný keď vládne ",
                            "Pán. Čaká ma veniec slávy, s Pánom kde tróniť ",
                            "mám, tu je len príval dravý, duša zrie lož a klam. "
                        ],
                        [
                            "3. Lepšiu mám domovinu, do nej že dôjdem, ",
                            "viem. Ktože Ti, Boží Synu, odníme slávy deň?!",
                            "Kráľom si v tamtej vlasti, milý Ty Pane môj, ",
                            "pozbavíš aj mňa strastí, pomôžeš vyhrať boj. "
                        ]
                    ]
                },
                {
                    "name": "Domov môj tam je na výsostiach",
                    "number": 424,
                    "lang": "sk",
                    "url": "domov-moj-tam-je-na-vysostiach",
                    "author": "",
                    "verses": [
                        [
                            "1. Domov môj tam je na výsostiach, kde ",
                            "nič nevedia o bolestiach, svätých zástup kde ",
                            "nespočetný hymnus Baránkov spieva vzletný. "
                        ],
                        [
                            "ZBOR: V nebesiach, v nebesiach domov môj ",
                            "tam je na výsostiach, v nebesiach, v nebesiach, ",
                            "v nebesiach domov môj tam je na výsostiach. "
                        ],
                        [
                            "2. Mnohých priateľov na výsostiach vídam s radosťou ",
                            "často vo snách. Raz k nim zaletím z tejto ",
                            "zeme, pieseň Baránka zapejeme. "
                        ],
                        [
                            "ZBOR: V nebesiach, v nebesiach domov môj ",
                            "tam je na výsostiach, v nebesiach, v nebesiach, ",
                            "v nebesiach domov môj tam je na výsostiach. "
                        ],
                        [
                            "3. Pane, teším sa, na výsosti s tými, ktorých si ",
                            "omilostil, aj mňa privíta svadobný šat, v ktorom",
                            "pred trónom budem smieť stáť. "
                        ],
                        [
                            "ZBOR: V nebesiach, v nebesiach domov môj ",
                            "tam je na výsostiach, v nebesiach, v nebesiach, ",
                            "v nebesiach domov môj tam je na výsostiach. "
                        ],
                        [
                            "4. Verím: budem tam na výsosti, prosím teraz ",
                            "však v pozemskosti, mojich priateľov priviesť ",
                            "ráč tam, kde Ti, Pane môj, večnú česť vzdám. "
                        ],
                        [
                            "ZBOR: V nebesiach, v nebesiach domov môj ",
                            "tam je na výsostiach, v nebesiach, v nebesiach, ",
                            "v nebesiach domov môj tam je na výsostiach. "
                        ]
                    ]
                },
                {
                    "name": "Ja viem, že na zemi",
                    "number": 425,
                    "lang": "sk",
                    "url": "ja-viem-ze-na-zemi",
                    "author": "",
                    "verses": [
                        [
                            "1. Ja viem, že na zemi mám žiť krátko len, ",
                            "a že krom nazdania padnem v smrti sen. No keď",
                            "Ježiša mám nič sa nebojím! On bude i v smrti",
                            "životom mojím.  "
                        ],
                        [
                            "2. Keď mi vládu tela zlomí bôľu moc a môj ",
                            "zrak až zastrie chladná smrti noc: Ježiš, sila moja, ",
                            "mňa sa zastane, On mi svietiť bude i v smrti bráne. "
                        ],
                        [
                            "3. Ó, prijď smrti dravá, volám nadšený, tvoj osteň ",
                            "je pre mňa navždy zničený! Veď Baránok ",
                            "Boží moje hriechy sňal, ja vstanem k životu,",
                            "ako čo On vstal! "
                        ],
                        [
                            "4. Po časnom trápení v jakom tu mám dieľ, žiť ",
                            "v ríši života je môj jasný cieľ. Pomôž mi, ó, Pane, ",
                            "Tebe verným byť, životom i smrťou Teba osláviť!"
                        ]
                    ]
                },
                {
                    "name": "Hľa, už sa poberám",
                    "number": 426,
                    "lang": "sk",
                    "url": "hla-uz-sa-poberam",
                    "author": "",
                    "verses": [
                        [
                            "1. Hľa, už sa poberám, mať moja, otec, ",
                            "tam k Otcovi večnému, Bohu všemocnému",
                            "odchádzam. "
                        ],
                        [
                            "2. Preč z miesta bolestí, kde plač a neresti, do ",
                            "slávnej tej vlasti, kde žiť budem v šťastí, ",
                            "v prelesti. "
                        ],
                        [
                            "3. Ó, prešťastný je ten, kto opustí raz zem, ",
                            "k brehu bezpečnému pláva nebeskému  ",
                            "každý deň. "
                        ],
                        [
                            "4. Nuž, do videnia tam, kde si ma volá Pán, ",
                            "On plač v nádej zmení, že vás po vzkriesení ",
                            "uzriem tam. "
                        ]
                    ]
                },
                {
                    "name": "Nieto stálosti",
                    "number": 427,
                    "lang": "sk",
                    "url": "nieto-stalosti",
                    "author": "",
                    "verses": [
                        [
                            "1. Nieto stálosti v zemskej márnosti, duša ",
                            "drahá! Pravé blaho je len v milosti. "
                        ],
                        [
                            "2. Šťastie pominie, zdravie uhynie: v chvíli žiaľu, ",
                            "v dobách straty kto ťa privinie?"
                        ],
                        [
                            "3. Čo dnes vzácne máš, v čom si zakladáš, príde ",
                            "chvíľa, duša milá, všetko tu necháš. "
                        ],
                        [
                            "4. Čo ti nastane, až v smrti bráne noha tvoja ",
                            "v prostred boja s hrôzou zastane?"
                        ],
                        [
                            "5. Pre svet si žila, telu slúžila, len po zemskej ",
                            "márnej chvále verne túžila. "
                        ],
                        [
                            "6. Svet sa ti stratí, telo smrť skláti, chvála ľudská ",
                            "ani chvíľu žitia nevráti. "
                        ],
                        [
                            "7. Čože urobíš, všetko utratíš? Čímže pustú, dlhú ",
                            "večnosť, čím si ukrátiš?"
                        ],
                        [
                            "8. Život bez Krista, duša nečistá, srdce hriechom ",
                            "pokalené; večná smrť istá. "
                        ],
                        [
                            "9. Dnes, duša milá, je deň a chvíľa, keď Boh ",
                            "svätý teba volá, bys’ sa vrátila. "
                        ],
                        [
                            "10. Nebeská sláva tých očakáva, ktorí milosť ",
                            "vtedy prijmú, keď Boh podáva. "
                        ],
                        [
                            "11. Ježišova krv zmieri Boží hnev! Len tí, ",
                            "čo v nej srdce zmyli, pejú chválospev! "
                        ],
                        [
                            "12. Nieto v márnosti stálej radosti, a bez krvi ",
                            "Baránkovej nieto milosti!"
                        ]
                    ]
                },
                {
                    "name": "Kristus mi je životom",
                    "number": 428,
                    "lang": "sk",
                    "url": "kristus-mi-je-zivotom",
                    "author": "",
                    "verses": [
                        [
                            "1. Kristus mi je životom a smrť mi je ziskom, ",
                            "chválim Boha s jasotom v tomto svete nízkom. "
                        ],
                        [
                            "2. Kristu patrím, Jemu len žijem aj mrieť budem, ",
                            "cudzinou je táto zem, domov čakám v kľude. "
                        ],
                        [
                            "3. Tam je večnej slávy čas a deň bez prestania, ",
                            "príbytok tam čaká nás, radosť neslýchaná. "
                        ],
                        [
                            "4. Tam Boh slzy zotrie sám z očí Svojich svätých, ",
                            "nepriateľ vojsť nesmie tam, smrť, ni diabol kliaty. "
                        ],
                        [
                            "5. Duch môj sa už prechádza v nebeskom tom meste, ",
                            "kým sa telo nachádza na úzkej tu ceste. "
                        ],
                        [
                            "6. Ach, už rád zem opustím, zvody nebezpečné, ",
                            "s Kristom byť a vkročiť s Ním do radosti večnej. "
                        ]
                    ]
                },
                {
                    "name": "Dosť už, dosť už som tu žil",
                    "number": 429,
                    "lang": "sk",
                    "url": "dost-uz-dost-uz-som-tu-zil",
                    "author": "",
                    "verses": [
                        [
                            "1. Dosť už, dosť už som tu žil, po vlasti ",
                            "som zatúžil, cudzom kraji ako hosť bývam ",
                            "v stánku dosť už, dosť. "
                        ],
                        [
                            "2. Príď, ó, Pane Ježišu, útechu mám najvyššiu, ",
                            "že si za mňa prelial krv, chcem Ťa uzrieť ach, ",
                            "čím prv. "
                        ],
                        [
                            "3. Prenes ma v tú večnú vlasť, kde už neprebýva ",
                            "strasť, tam kde Tvoj dom veliký a Tvoj ",
                            "trón je odveký. "
                        ],
                        [
                            "4. Spasiteľu, nemeškaj, otvor mi vstup vo Svoj ",
                            "raj, aby som smel vkročiť tam, kde si Pánom ",
                            "večne sám. "
                        ],
                        [
                            "5. Hľa, už z otvorených brán s láskou kynie my ",
                            "môj Pán, Ježišu môj, nemeškaj, domov si ma ",
                            "povolaj. "
                        ]
                    ]
                },
                {
                    "name": "Cudzia zem",
                    "number": 430,
                    "lang": "sk",
                    "url": "cudzia-zem",
                    "author": "",
                    "verses": [
                        [
                            "1, Cudzia zem, cudzia zem, v ktorej biedne ",
                            "teraz dliem; v krutej službe zapriahnutý hladom",
                            "mriem a žialim, smútim – hojnosti mi ",
                            "zhasol deň. Hojnosti mi zhasol deň. "
                        ],
                        [
                            "2. Krásny diel, krásny diel, Otec mi bol predostrel. ",
                            "V Jeho dome život skvelý, voľnosť, česť ma ",
                            "zdobiť chceli, svetom som ich zmrhať šiel. ",
                            "Svetom som ich zmrhať šiel. "
                        ],
                        [
                            "3. Aký žiaľ, aký žiaľ, že ma hriech tak opantal!",
                            "K Otcovi, čo od kolísky chránil ma a láskou",
                            "istil, spurne som sa zachoval. Spurne som",
                            "sa zachoval. "
                        ],
                        [
                            "4. Viem už, viem, viem, už viem, čo tu biedny, ",
                            "spraviť chcem! Vrátim sa a vyznám viny. Čo ",
                            "chce Otec, nech tak činí, keď len uňho bývať ",
                            "smiem. Keď len uňho bývať smiem. "
                        ],
                        [
                            "5. Otče môj, Otče môj, odpusť mi a žiaľ môj ",
                            "zhoj! Nie som hoden byť ti synom, sprav ma ",
                            "aspoň čeľadínom, budem plniť príkaz Tvoj. ",
                            "Budem plniť príkaz Tvoj. "
                        ],
                        [
                            "6. Z výsosti, z výsosti znejú tóny radosti: Syn ",
                            "čo hynul v cudzej zemi, Otcovi je navrátený,",
                            "sláva Božej milosti! Sláva Božej milosti. "
                        ]
                    ]
                },
                {
                    "name": "Ľud verný, nádeje plný",
                    "number": 431,
                    "lang": "sk",
                    "url": "lud-verny-nadeje-plny",
                    "author": "",
                    "verses": [
                        [
                            "1. Ľud verný, nádeje, plný i v hodine",
                            "smrti ani hrobu sa nebojí. Ktože ho zarmúti?"
                        ],
                        [
                            "ZBOR: Smrť našim ziskom je, Kristus život i",
                            "vzkriesenie! On nás bránou hrobu vedie priamo k nebu. "
                        ],
                        [
                            "2. Telo vezme porušenia, Duch zaletí k Bohu, ",
                            "tam kde bude bez skončenia cítiť lásku mnohú. "
                        ],
                        [
                            "ZBOR: Smrť našim ziskom je, Kristus život i",
                            "vzkriesenie! On nás bránou hrobu vedie priamo k nebu. "
                        ],
                        [
                            "3. Niet pre mňa už odsúdenia, Ježiš za mňa zomrel. ",
                            "Za môj hriech obeť zmierenia je môj Vykupiteľ. "
                        ],
                        [
                            "ZBOR: Smrť našim ziskom je, Kristus život i",
                            "vzkriesenie! On nás bránou hrobu vedie priamo k nebu. "
                        ],
                        [
                            "4. Stánok tela rád opúšťam, v ňom som obťažený, ",
                            "a o ten nebeský vzdychám, v ňom byť oblečený. "
                        ],
                        [
                            "ZBOR: Smrť našim ziskom je, Kristus život i",
                            "vzkriesenie! On nás bránou hrobu vedie priamo k nebu. "
                        ],
                        [
                            "5. Tu len skrze vieru chodím, ale tam tvárou ",
                            "v tvár slávu Ježiša uvidím, krásu nad slnka žiar. "
                        ],
                        [
                            "ZBOR: Smrť našim ziskom je, Kristus život i",
                            "vzkriesenie! On nás bránou hrobu vedie priamo k nebu. "
                        ],
                        [
                            "6. Moja duša odpočinie, prostá bojov kríža, tam, ",
                            "kde radosť nepominie v náručí Ježiša. "
                        ]
                    ]
                },
                {
                    "name": "Neumrela, neumrela",
                    "number": 432,
                    "lang": "sk",
                    "url": "neumrela-neumrela",
                    "author": "",
                    "verses": [
                        [
                            "ZBOR: Smrť našim ziskom je, Kristus život i",
                            "vzkriesenie! On nás bránou hrobu vedie priamo k nebu. ",
                            "1. Neumrela, neumrela, spí len sladký, tichý ",
                            "sen, duša z tela zaletela tam, kde trvá večný deň. "
                        ],
                        [
                            "2. V hrobe telo, hoc’ by stlelo, duch šiel domov k ",
                            "Pánovi. Blahé chvíle, dieťa milé, pri večnom máš Otcovi. "
                        ],
                        [
                            "3. Otec, matka, chvíľa krátka, v láske verný Spasiteľ ",
                            "čas váš skráti a tam vráti poklad, čo vás predišiel. "
                        ],
                        [
                            "4. Spasiteľu, veď nás k cieľu, spravuj Ty sám časný beh, ",
                            "by sme smeli s Tebou v cieli uzrieť večnej spásy breh. "
                        ]
                    ]
                },
                {
                    "name": "Smieť usnúť v Pánu",
                    "number": 433,
                    "lang": "sk",
                    "url": "smiet-usnut-v-panu",
                    "author": "",
                    "verses": [
                        [
                            "1. Smieť usnúť v Pánu, sladký sen, kde pokoj ",
                            "sídli, blaho len, keď v dome Otca s Ježišom ",
                            "už duša ušla búrnym dňom. "
                        ],
                        [
                            "2. Smieť usnúť v Pánu, aká slasť, v Ňom napriek ",
                            "peklu život nájsť a smieť Mu spievať tam žalm",
                            "svoj, ó, krutá smrť, kde osteň tvoj?"
                        ],
                        [
                            "3. Smieť usnúť v Pánu, žiadny tieň vo vlasti duší ",
                            "neuzriem, len lásky tam a pravdy svit, len",
                            "radosti a vďaky cit. "
                        ],
                        [
                            "4. Smieť usnúť v Pánu, vždy som chcel mať s ",
                            "ľudom Božím tam svoj diel, keď zborí sa môj",
                            "časný stan, tam nájdem večný, kde môj Pán. "
                        ],
                        [
                            "5. Smieť usnúť v Pánu, nemám strach, hoc’ ",
                            "v cudzine sa zmením v prach, Pán o ňom vie",
                            "a vo Svoj čas ho k žitiu v sláve zbudí zas!"
                        ]
                    ]
                },
                {
                    "name": "Smieť domov ísť",
                    "number": 434,
                    "lang": "sk",
                    "url": "smiet-domov-ist",
                    "author": "",
                    "verses": [
                        [
                            "1. Smieť domov ísť, tam do príbytkov Božích ",
                            "ma tiahne srdce otcovské, svet opustiť a z ",
                            "klamov jeho hrozných ísť v sladké kraje nebeské!",
                            "Už tisíc ráz sa v duši túžba vzňala, by v domove ",
                            "už večnom prebývala. Tá túžba v srdci chveje sa ",
                            "sťa list: [: smieť domov ísť! :]"
                        ],
                        [
                            "ZBOR: Smieť domov ísť, smieť domov ísť, smieť ",
                            "domov ísť a vkročiť v Otcov dom! Smieť domov ",
                            "ísť, tam hore s Otcom bývať. [: Smieť domov ísť! :]"
                        ],
                        [
                            "2. Smieť domov ísť! Zriem v blaženom už snení tú ",
                            "inú, krajšiu, lepšiu vlasť. Tam je môj diel, v tom ",
                            "večnom vykúpení, tu nemá duša pokoj, slasť. ",
                            "Ó, keby už som smel byť za Jordánom, mať orla ",
                            "let, vlasť uzrieť v svite rannom a k nohám Otcovi",
                            "sa položiť! [: Smieť domov ísť! :]"
                        ],
                        [
                            "ZBOR: Smieť domov ísť, smieť domov ísť, smieť ",
                            "domov ísť a vkročiť v Otcov dom! Smieť domov ",
                            "ísť, tam hore s Otcom bývať. [: Smieť domov ísť! :]"
                        ],
                        [
                            "3. Smie domov ísť, loď blíži sa už v prístav, stav ",
                            "duše zemský borí sa. Jak deťom mať, nám Ježiš ",
                            "skrýšu chystá, keď sila z tela tratí sa. Tak často ",
                            "som pel v radosti či v smútku, v dňoch slnečných ",
                            "i v bôli od zármutku, že najlepšie je domov ísť k",
                            "Nemu. [: Smieť domov ísť! :]"
                        ],
                        [
                            "ZBOR: Smieť domov ísť, smieť domov ísť, smieť ",
                            "domov ísť a vkročiť v Otcov dom! Smieť domov ",
                            "ísť, tam hore s Otcom bývať. [: Smieť domov ísť! :]"
                        ]
                    ]
                },
                {
                    "name": "Rád by šiel",
                    "number": 435,
                    "lang": "sk",
                    "url": "rad-by-siel",
                    "author": "",
                    "verses": [
                        [
                            "1. [: Rád by šiel, :] rád by skorej Pána zrel. ",
                            "Duša moja túži po Ňom, túži stáť pred Jeho trónom",
                            "[: túži večný s Ním mať diel. :]   "
                        ],
                        [
                            "2. [: Svetla jas, :] svieti spoza mrákav zas. Ó, kedy ",
                            "sa vznesiem k Nemu, k ľudu v nebi blaženému?",
                            "[: Kedy zriem ríš večných krás? :]  "
                        ],
                        [
                            "3. [: Prekrásny, :] je anjelov spev jasný. Ó, keby ",
                            "mal krídla zlaté, ešte dnes by v sídlo sväté",
                            "[: vzlietnul, nechal byt časný! :] "
                        ],
                        [
                            "4. [: V krásny raj, :] vedie nás betlemská staj; ",
                            "kvety Jeho keď uzrieme, tam nám bude ako vo ",
                            "sne: [: tam, tam, blaží večný máj! :] "
                        ]
                    ]
                },
                {
                    "name": "Človeče! Človeče",
                    "number": 436,
                    "lang": "sk",
                    "url": "clovece-clovece",
                    "author": "",
                    "verses": [
                        [
                            "1. Človeče! Človeče! Stroj sa, kým čas utečie, ",
                            "bys’ bol na smrť pripravený, keď Pán povie",
                            "oslávený; „Poď a vydaj počet svoj!“ „Poď a ",
                            "vydaj počet svoj!“  "
                        ],
                        [
                            "2. Pamätaj! Pamätaj! Krátky život nemrhaj!",
                            "Nevrav: „Ruky mám dosť silné, imanie a dielo ",
                            "pilné,“ všetko zmizne ako sen. Všetko zmizne ",
                            "ako sen. "
                        ],
                        [
                            "3. Ako hneď, ako hneď, vädne veniec mladých ",
                            "liet. Kto dnes ako ruža kvitne, môže prv než ",
                            "zajtra svitne, ležať smrťou podťatý. Ležať ",
                            "smrťou podťatý. "
                        ],
                        [
                            "4. Ako tieň, ako tieň pominie sa žitia deň, mnohú ",
                            "starosť, biedy veľa, ochabnú ti sily kriela, na tej",
                            "púti časných ciest. Na tej púti časných ciest. "
                        ],
                        [
                            "5. Čuj však zvesť, čuj však zvesť, do neba ťa ",
                            "Pán chce viesť. Kto je silný vierou v Neho, neľaká",
                            "sa hrobu zlého, je to brána do nebies. Je to brána ",
                            "do nebies.  "
                        ],
                        [
                            "6. Pane môj, Pane môj, veď ma Ty a dušu zhoj, ",
                            "nech som na smrť pripravený, keď ma pozveš, ",
                            "oslávený: „Poď a vydaj počet svoj!“ „Poď a vydaj",
                            "počet svoj!“"
                        ]
                    ]
                },
                {
                    "name": "Aká to slasť, keď príde koniec boju",
                    "number": 437,
                    "lang": "sk",
                    "url": "aka-to-slast-ked-pride-koniec-boju",
                    "author": "",
                    "verses": [
                        [
                            "1. Aká to slasť, keď príde koniec boju, ",
                            "chválospev mieru zemou bude znieť. Z cudziny",
                            "zaletíme vo vlasť svoju, v prekrásny domov, ",
                            "v nový lepší svet. Tam privíta nás rajská krása",
                            "skvelá, po zemskej púti cieľ svoj uzrieme, padneme ",
                            "k nohám svojho Spasiteľa, vďačne Ho oslavovať budeme. "
                        ],
                        [
                            "2. Aká to slasť, keď v rúchu slávy večnej pred ",
                            "Božím trónom budeme sa skvieť, radostne spievať ",
                            "v slasti nekonečnej, zbavený navždy všetkých zemských ",
                            "bied. Tam hriechu moc nám viacej neuškodí, hoci dnes ",
                            "mnohý zvádzame s ňou boj. Navždy sa skončia všetky ",
                            "sveta zvody, strasti a žiale, strach i nepokoj. ",
                            "3. Aká to slasť, keď v rozochvení slávnom  budeme ",
                            "počuť hlasy zborov tých, zápale čo sa svätom, ",
                            "neúnavnom žalmami chvály rinú zo sŕdc ich. Po ",
                            "celom nebi chválospev ten zneje ako vĺn mora ",
                            "rozbúrených tón a zas, jak vánok ľúbezných keď ",
                            "veje, nesie sa vrúcne pred Ježišov trón. "
                        ],
                        [
                            "4. Aká to slasť, keď svätej lásky plný budeme ",
                            "navždy s Pánom Ježišom. Najvyššia túžba srdca ",
                            "sa nám splní v objatí Jeho v svetle najvyššom. ",
                            "Tam naplní sa všetka nádej naša, Pána keď uvidíme",
                            "tvárou v tvár, oslní nás tam večnej slasti krása, ",
                            "premení i nás Jeho slávy žiar. "
                        ],
                        [
                            "5. Aká to slasť! Dnes o nej málo vieme, nezrie ",
                            "ju oko, nečul o nej sluch, nechápe myseľ, ale ",
                            "veriť smieme, v Písme čo verne svedčí Svätý",
                            "Duch. Spejeme cestou Božou napred stále, zasvitne ",
                            "nám raz odpočinku deň, stíšenie pravé, večné, ",
                            "dokonalé, po ťažkej púti zasľúbená zem. "
                        ]
                    ]
                },
                {
                    "name": "Nie, to mrieť neznamená",
                    "number": 438,
                    "lang": "sk",
                    "url": "nie-to-mriet-neznamena",
                    "author": "",
                    "verses": [
                        [
                            "1. Nie, to mrieť neznamená, zájsť k Bohu svojemu, ",
                            "letieť zo zeme tmavej tam, do otčiny pravej, ",
                            "k okružiu hviezdnemu!"
                        ],
                        [
                            "2. Nie, to mrieť neznamená, byť nebies občanom, ",
                            "zo žiaľov vyprostený, nádherou oslnený, žiť v ",
                            "mieri blaženom!"
                        ],
                        [
                            "3. Nie, to mrieť neznamená, počuť has milosti, ",
                            "jak veličensky vraví: „Poď, dieťa večnej slávy, ",
                            "ku mne do radosti!“"
                        ],
                        [
                            "4. Nie, to mrieť neznamená, za Pastierom tam ",
                            "ísť, kde nás po ťažkom boji On večne pásť sa ",
                            "strojí, tam k zdrojom žitia prísť!"
                        ],
                        [
                            "5. Nie, to mrieť neznamená, cťou korunovaný ",
                            "k ľudu Božiemu v nebe vzniesť sa, vzdať chválu",
                            "Tebe, Jezu milovaný!"
                        ]
                    ]
                },
                {
                    "name": "V údolí plačlivom",
                    "number": 439,
                    "lang": "sk",
                    "url": "v-udoli-placlivom",
                    "author": "",
                    "verses": [
                        [
                            "1. V údolí plačlivom, pri tele bezdušnom ",
                            "zhromaždení, v tvár smrti stojíme, na jej čin",
                            "hľadíme zarmútený. Priznávame, že tiež umrieť ",
                            "máme. Aj kto sa najsilnejším zdá, tiež smrti podlieha! "
                        ],
                        [
                            "2. Ó, kto tu poradí, cieľ správne označí? Kto nám ",
                            "povie? Čo treba podniknúť, jak smrti uniknúť, má",
                            "stvorenie? Či osvieti lúč žitia noc smrti? ",
                            "Či je niečo čo poteší, čo slzy usuší?"
                        ],
                        [
                            "3. Uvážme, čo vraví nám ten Boh láskavý, jak ",
                            "teší nás: Ja vám smrť neprajem, jej ostňa zbaviť ",
                            "chcem, ó, duše, vás! Vám k pomoci v ríšu tône ",
                            "smrti, poslal som Syna milého, jednorodeného! "
                        ],
                        [
                            "4. Ježiš, Kráľ života, tá večná dobrota, trón opustil, ",
                            "z lásky k nám hriešnikom, stal sa tu človekom a ",
                            "nám slúžil. Keď nás chcel mať, šiel za nás bojovať, ",
                            "vytrhol nás z diabla moci, vzal mu vládu smrti. "
                        ],
                        [
                            "5. Šťastný a bezpečný, kto vierou spojený je s Ježišom!",
                            "Ten v srdci pokoj má, smrti sa neľaká, má nádej v ",
                            "Ňom. Živá viera smrťou neumiera; Smrť je jej zisk ",
                            "a hrob tmavý dvermi v ríšu slávy. "
                        ]
                    ]
                },
                {
                    "name": "Žije Ježiš, život môj",
                    "number": 440,
                    "lang": "sk",
                    "url": "zije-jezis-zivot-moj",
                    "author": "",
                    "verses": [
                        [
                            "1. Žije Ježiš, život môj, moja nádej, svetlo spása. ",
                            "Istotu keď o tom mám, moje srdce neľaká sa. ",
                            "Nebude môcť ani smrť nad ním večne zavládnuť. "
                        ],
                        [
                            "2. Kristus žije, i ja s Ním večne mám žiť v neba sláve, ",
                            "smrti sa už neľakám, budem tam, kde On je v práve. ",
                            "On je hlava a ja člen, ratolesť, On vínny kmeň.  "
                        ],
                        [
                            "3. Moja viera s nádejou, s láskou ma vždy k Nemu viaže, ",
                            "On ma z biedy vytrhne, On ma zbaví hriechov tiaže. ",
                            "Smrť ni hrobu temnota nezbaví ma života. "
                        ],
                        [
                            "4. Hoci moje telo v prach v tmavom hrobe premení sa, ",
                            "predsa potom v Jeho deň príde povel od Ježiša; ",
                            "pre zásluhy Jeho, viem, vzkriesenia svit čakať smiem. "
                        ],
                        [
                            "5. Duša si hneď spozná tam neba stane svojho Kráľa.",
                            "Od radosti, že Ho zrie, či by žalmy nespievala?! ",
                            "Dieťa zemskej chudoby sláva nebies ozdobí."
                        ],
                        [
                            "6. Žije Ježiš, ten môj Pán, On je slávnym neba Kráľom ",
                            "a ja svoju zemskú púť v čakaní chcem prežiť stálom, ",
                            "večného kým žitia diel aj mne dá môj Spasiteľ. "
                        ]
                    ]
                },
                {
                    "name": "Nuž pochovajme telo tu",
                    "number": 441,
                    "lang": "sk",
                    "url": "nuz-pochovajme-telo-tu",
                    "author": "",
                    "verses": [
                        [
                            "1. Nuž pochovajme telo tu, veď vstane znova k životu, ",
                            "bo nie je večne stratené, čo bolo Kristom kúpené. "
                        ],
                        [
                            "2. Je duša živá v Pánovi a telo spať sa hotoví, kým ho",
                            "Boh v slávu premení, keď vstanú Jeho vzkriesení. "
                        ],
                        [
                            "3. Čo zem je a čo zemský prach, to mizne v hrobu hlbinách, ",
                            "by vstalo ku životu zas, keď zaznie mocný Pánov hlas. "
                        ],
                        [
                            "4. Tu znášal mnohé úzkosti a teraz v Božej blízkosti ",
                            "dľa svätej viery, nádeje ho vánok žitia zohreje. "
                        ],
                        [
                            "5. Je po dočasnom súžení, čo v slávu sám Boh premení, ",
                            "kto ticho nesie žitia kríž, aj cez hrob k nebu ide blíž. "
                        ],
                        [
                            "6. Je pochovaná bieda dňa tam s telom v hrobe schovaná, ",
                            "no duša pozbavená pút smie u Pána si spočinúť. "
                        ],
                        [
                            "7. Nech telo spí svoj tichý sen, kým zabroneje žitia deň ",
                            "a my sa strojme v bdelosti ísť za Ním k bránam večnosti. "
                        ],
                        [
                            "8. Sám Kristus dá nám sily v boj, v Ňom máme pomoc aj diel",
                            "svoj, kým smrti tmavým údolím nás prevedie žiť večne s Ním. "
                        ]
                    ]
                },
                {
                    "name": "Čuj, ó čuj",
                    "number": 442,
                    "lang": "sk",
                    "url": "cuj-o-cuj",
                    "author": "",
                    "verses": [
                        [
                            "1. Čuj, ó, čuj, čuj, ó, čuj zobuď sa, a prihotuj! ",
                            "Konaj, čo je tvoja práca, bo čas letí, deň sa stráca",
                            "na odchod sa pripravuj. Na odchod sa pripravuj."
                        ],
                        [
                            "2. Dnes, ó, dnes, dnes, ó, dnes srdce Bohu v obeť nes!",
                            "On ho celé sám chce vlastniť, Jemu zasväť život časný, ",
                            "večný za to dá ti ples. Večný za to dá ti ples. ",
                            "3. Čo bys’ dlel, čo bys’ dlel, v púšti sveta biedne mrel?",
                            "Jeruzalem v nebi zlatý, doňho vstup ti Ježiš splatil, to ",
                            "nech je tvoj pravý cieľ. To nech je tvoj pravý cieľ. "
                        ],
                        [
                            "4. Zajtra snáď, zajtra snáď bude koniec Božích rád, ",
                            "ktorými ťa volá k Sebe, zajtra môže zavrieť nebe, ",
                            "kde je večnej spásy hrad. Kde je večnej spásy hrad. "
                        ],
                        [
                            "5. Tak jak som, tak jak som, chcem byť Tvojim dieťaťom. ",
                            "Príjmi ma a veď ma hore, kde Ti v oslávencov zbore ",
                            "spievať budem s jasotom. Spievať budem s jasotom. "
                        ]
                    ]
                },
                {
                    "name": "Môj Pane Tvoja dobrota",
                    "number": 443,
                    "lang": "sk",
                    "url": "moj-pane-tvoja-dobrota",
                    "author": "",
                    "verses": [
                        [
                            "1. Môj Pane, Tvoja dobrota je svetlo môjho života; ja ",
                            "na zemi som iba hosť, ó, väzby hriechu Ty ma sprosť!"
                        ],
                        [
                            "2. Je úzka cesta predo mnou hor k Tebe, neraz vedie tmou, ",
                            "kým uzriem domov sľúbený a Tvojou krvou kúpený. "
                        ],
                        [
                            "3. Tou cestou telo zomdlieva, duch neraz málo sily má. ",
                            "Čuj, ako pod bremenom lkám, ó, poď a veď ma ďalej sám!"
                        ],
                        [
                            "4. Tvoj nápoj žlčou zhorčený je i mne silou zomdlení, Tvoj ",
                            "výkrik plný bolesti ma zbavil pekla priepastí. "
                        ],
                        [
                            "5. V deň súdu keď sa precitnem, kiež po pravici Ti stáť smiem. ",
                            "Krv Tvoja, za mňa preliata, nech tam je moja výplata. "
                        ],
                        [
                            "6. Keď na veky už slobodný zbor verných v nekonečnom dni ",
                            "pieť bude v hymnách oslavných, smieť budem patriť medzi nich. "
                        ]
                    ]
                },
                {
                    "name": "Tvoja cesta",
                    "number": 444,
                    "lang": "sk",
                    "url": "tvoja-cesta",
                    "author": "",
                    "verses": [
                        [
                            "1. Tvoja cesta nie je istá, dokiaľ v srdci nemáš Krista. ",
                            "Len tí ľudia pevne stoja, zo spásy čo pijú zdroja. "
                        ],
                        [
                            "2. Vstaň a vyznaj pokorený, spasenie že inde neni, iba v ",
                            "Kristu Boh sa skláňa v moci svojho zľutovania. "
                        ],
                        [
                            "3. Povedz: Drahý Spasiteľu, odstráň moju biedu celú, ",
                            "nech môj život, práca snaha do večného vedú blaha. "
                        ],
                        [
                            " "
                        ]
                    ]
                },
                {
                    "name": "Odísť do tých lepších krajov",
                    "number": 445,
                    "lang": "sk",
                    "url": "odist-do-tych-lepsich-krajov",
                    "author": "",
                    "verses": [
                        [
                            "1. Odísť do tých lepších krajov z pozemského ",
                            "domova, do tej ríše večných tajov, duša chce byť ",
                            "hotová.  Túžim, túžim vzlietnuť hore k hviezdam večne ",
                            "žiarivým ta, kde v Božej lásky more na veky sa ponorím. "
                        ],
                        [
                            "2. Koľko prišlo požehnania, keď tu s učeníkmi žil. ",
                            "Jeho hlas jak rosa ranná ľudské srdcia občerstvil. ",
                            "Teraz, v sláve povýšený, dielo konať neprestal a raz ",
                            "bude celej zemi vládnuť ako večný Kráľ. "
                        ],
                        [
                            "3. Vďaka Ti, že započal si, ó, môj Pane, vo mne ",
                            "tiež konať Svoje dielo spásy aj ho ďalej buduješ. ",
                            "Otváram Ti život celý k Tvojej službe dokorán. ",
                            "Daj by život, ústa peli: Iba Ježiš – On je Pán. "
                        ]
                    ]
                },
                {
                    "name": "V nebeskej sláve, tam Ježiš môj",
                    "number": 446,
                    "lang": "sk",
                    "url": "v-nebeskej-slave-tam-jezis-moj",
                    "author": "",
                    "verses": [
                        [
                            "1. V nebeskej sláve, tam Ježiš môj; uňho mám ",
                            "skrytý útechy zdroj. On lieči srdcia, ach, ranené, ",
                            "On silí duše, ach, zomdlené. V nebeskej sláve, tam ",
                            "Ježiš môj; v Ňom, v Ňom mám skrytý útechy zdroj. "
                        ],
                        [
                            "2. V nebeskej sláve, tam Ježiš môj; On šťastia svetla ",
                            "živý je zdroj. V náručí Jeho slasť jediná, v Ňom skrytá",
                            "moja česť, nevinná. V nebeskej sláve, tam Ježiš môj; ",
                            "On šťastia môjho jediný zdroj. "
                        ],
                        [
                            "3. Pri sklennom mori, tam otčina: tam udrie slávna ",
                            "mne hodina. Tam väzby hriecha už sprostený, ",
                            "slobodou večnou zas darený, zaplesám, zjasám, ",
                            "že Ježiš môj je večnej spásy jediný zdroj. "
                        ]
                    ]
                },
                {
                    "name": "Nás v nebesiach radosti veľa čaká",
                    "number": 447,
                    "lang": "sk",
                    "url": "nas-v-nebesiach-radosti-vela-caka",
                    "author": "",
                    "verses": [
                        [
                            "1. Nás v nebesiach radosti veľa čaká i dobrota, ",
                            "nádhera mnohoraká. Tam povie Pán: Kráľovstvo ",
                            "zaujmite, čo Otec vám prichystá preurčite. "
                        ],
                        [
                            "ZBOR: Baránkovi česť pocty chceme niesť, veď ",
                            "On získal nám spásu večnú sám. Nech sú chválospevy",
                            "hotové v slávy domove. K nemu vzlietneme vďačne",
                            "zo zeme, z mnohých úzkostí do blaženosti. Hallelujah!",
                            "Baránkovi česť pocty chceme niesť. "
                        ],
                        [
                            "2. Čo oko tu nevidí, to má tam zrieť, čo srdce tu nepozná, ",
                            "skúsi tam hneď. Čo ucho tu nečuje, počuť má tam, čo pre ",
                            "Svojích v Kristovi schystal Boh sám. "
                        ],
                        [
                            "ZBOR: Baránkovi česť pocty chceme niesť, veď ",
                            "On získal nám spásu večnú sám. Nech sú chválospevy",
                            "hotové v slávy domove. K nemu vzlietneme vďačne",
                            "zo zeme, z mnohých úzkostí do blaženosti. Hallelujah!",
                            "Baránkovi česť pocty chceme niesť. "
                        ],
                        [
                            "3. Tón oslavnej hudby tam stále má znieť a chválospev ",
                            "tisíce jazykov pieť. Ó, pri tróne krása je nevýslovná, česť ",
                            "Tomu, čo bol a je a čo prísť má. "
                        ],
                        [
                            "ZBOR: Baránkovi česť pocty chceme niesť, veď ",
                            "On získal nám spásu večnú sám. Nech sú chválospevy",
                            "hotové v slávy domove. K nemu vzlietneme vďačne",
                            "zo zeme, z mnohých úzkostí do blaženosti. Hallelujah!",
                            "Baránkovi česť pocty chceme niesť. "
                        ],
                        [
                            "4. V Tom zástupe pred trónom radostne dlieť a k spevu ",
                            "sa pripojiť budem tiež smieť: Nech Baránkovi česť, moc, ",
                            "večná sláva sa od vykúpených nás vďačne vzdáva!"
                        ],
                        [
                            "ZBOR: Baránkovi česť pocty chceme niesť, veď ",
                            "On získal nám spásu večnú sám. Nech sú chválospevy",
                            "hotové v slávy domove. K nemu vzlietneme vďačne",
                            "zo zeme, z mnohých úzkostí do blaženosti. Hallelujah!",
                            "Baránkovi česť pocty chceme niesť. "
                        ]
                    ]
                },
                {
                    "name": "Buď vítaná milá večnosť",
                    "number": 448,
                    "lang": "sk",
                    "url": "bud-vitana-mila-vecnost",
                    "author": "",
                    "verses": [
                        [
                            "1. Buď vítaná milá večnosť! Ty pôsobíš vo mne radosť.",
                            "Zlatojasné ríše tvoje, majú pre mňa blaha zdroje. "
                        ],
                        [
                            "ZBOR: Ó, ty večnosť preblažená, tys’ mi v Kristu zaistená, ",
                            "bo večnosti On je Otcom, On je mojím do nej vodcom. ",
                            " ",
                            "2. Na zemi keď by človek aj dosiahol ten najvyšší vek to ",
                            "k večnosti prirovnané je kvapôčka v oceáne. "
                        ],
                        [
                            "ZBOR: Ó, ty večnosť preblažená, tys’ mi v Kristu zaistená, ",
                            "bo večnosti On je Otcom, On je mojím do nej vodcom. "
                        ],
                        [
                            "3. Nech vôkol mňa zlo sa šíri, nech tma hustne, satan zúri, ",
                            "netrápim sa o budúcnosť, bo si mojou, sláva večnosť. "
                        ],
                        [
                            "ZBOR: Ó, ty večnosť preblažená, tys’ mi v Kristu zaistená, ",
                            "bo večnosti On je Otcom, On je mojím do nej vodcom. "
                        ],
                        [
                            "4. Tam, kde večný prameň žitia, srdcia, bôľ už nepocítia: ",
                            "zmizli strachy, jak nočný sen, svitnul pravý bezpečný deň. "
                        ],
                        [
                            "ZBOR: Ó, ty večnosť preblažená, tys’ mi v Kristu zaistená, ",
                            "bo večnosti On je Otcom, On je mojím do nej vodcom. "
                        ],
                        [
                            "5. V spolku svätých Božích stále, tam budem žiť neskonale, ",
                            "skončila púť v meste večnom, v slasti, v blahu nekonečnom. "
                        ],
                        [
                            "ZBOR: Ó, ty večnosť preblažená, tys’ mi v Kristu zaistená, ",
                            "bo večnosti On je Otcom, On je mojím do nej vodcom. "
                        ]
                    ]
                },
                {
                    "name": "V tejto cudzine pokoj nekynie",
                    "number": 449,
                    "lang": "sk",
                    "url": "v-tejto-cudzine-pokoj-nekynie",
                    "author": "",
                    "verses": [
                        [
                            "1. V tejto cudzine pokoj nekynie, túžba pnie sa v srdci nám ",
                            "k jasným výšinám. Šťastný ten, kto sám nezná bied a bôľov",
                            "klam. Radosť sotva zrieť, žiaľu plný svet a boj zúri vôkol nás. ",
                            "Príkrou cestou vpred vierou smieme zrieť že je blízko domov krás. "
                        ],
                        [
                            "ZBOR: Domov vpred, ó, čuj nemeškaj. Domov vpred, ó, čuj, ",
                            "nemeškaj. Napriek víchrom, tmám napred k nebesám, už je ",
                            "blízko, už je blízko domov nám. "
                        ],
                        [
                            "2. Cudzinou v ten čas verne vedie vás Vodca náš, náš Jozua. ",
                            "V tmách zrieť Jeho tvár ako svetla žiar, na všetko On silu má.",
                            "Preto hore zrak tam, kde spásy znak, už je blízko Kanaán. Srdce, ",
                            "vzdychy stíš, za Pánom poď výš, vyššie, vyššie v neba stan. "
                        ],
                        [
                            "ZBOR: Domov vpred, ó, čuj nemeškaj. Domov vpred, ó, čuj ",
                            "nemeškaj. Napriek víchrom, tmám napred k nebesám, už je ",
                            "blízko, už je blízko domov nám. "
                        ],
                        [
                            "3. Ten náš Kanaán dobyl pre nás Pán, keď sa vzniesol k Otcovi. ",
                            "Každý cherubín, každý serafín k službe Mu je hotový. Tam kde ",
                            "Jeho trón, našej harfy tón sláviť bude spásy skvost, daný od ",
                            "Pána. Zaznie Hossana bez konca až na večnosť. "
                        ],
                        [
                            "ZBOR: Domov vpred, ó, čuj nemeškaj. Domov vpred, ó, čuj ",
                            "nemeškaj. Napriek víchrom, tmám napred k nebesám, už je ",
                            "blízko, už je blízko domov nám. "
                        ]
                    ]
                },
                {
                    "name": "Nové nebo i zem novú",
                    "number": 450,
                    "lang": "sk",
                    "url": "nove-nebo-i-zem-novu",
                    "author": "",
                    "verses": [
                        [
                            "1. Nové nebo i zem novú čaká verný Boží ľud, ríšu večnú",
                            "Ježišovu, kde je láska, radosť, kľud. "
                        ],
                        [
                            "ZBOR: Smrti tam už nebude, smrti tam už nebude, smrti ",
                            "tam už nebude v krásnych krajoch tých, plaču ani kriku, ",
                            "zmätky, kvílenie už nebude, Boh sám zotrie slzy všetky z ",
                            "očí spasených. "
                        ],
                        [
                            "2. Jeruzalem, sväté mesto pre ľud Boží schystané, Boží stan ",
                            "v ňom s ľuďmi jesto, ktorý večne zostane. "
                        ],
                        [
                            "ZBOR: Smrti tam už nebude, smrti tam už nebude, smrti ",
                            "tam už nebude v krásnych krajoch tých, plaču ani kriku, ",
                            "zmätky, kvílenie už nebude, Boh sám zotrie slzy všetky z ",
                            "očí spasených. "
                        ]
                    ]
                },
                {
                    "name": "Do blahej zeme došiel som",
                    "number": 451,
                    "lang": "sk",
                    "url": "do-blahej-zeme-dosiel-som",
                    "author": "",
                    "verses": [
                        [
                            "1. Do blahej zeme došiel som, kde chodím s Pánom Ježišom. ",
                            "Jej bohatstvo ja mojím zvem. Mne svieti krásny blahý deň. "
                        ],
                        [
                            "ZBOR: Ó, blahá zem, prekrásna zem, na vrchu tvojom zastanem ",
                            "a pohliadnem za more tam, kde príbytok hotový mám a vidím ",
                            "onen slávny breh, tam môj je dom, tam môj je spech. "
                        ],
                        [
                            "2. Môj Spasiteľ so mnou chodí, za ruku ma nežne vodí. ",
                            "S Ním sladké chvíle prežívam. Keď duchom v nebi prebývam. "
                        ],
                        [
                            "ZBOR: Ó, blahá zem, prekrásna zem, na vrchu tvojom zastanem ",
                            "a pohliadnem za more tam, kde príbytok hotový mám a vidím ",
                            "onen slávny breh, tam môj je dom, tam môj je spech. "
                        ],
                        [
                            "3. Vzduch plný sladkej vône je. Od zelených lúčin veje. Tam ",
                            "rajsky kvet vždy prekvitá, tam tečie rieka života. "
                        ]
                    ]
                },
                {
                    "name": "Nič neisté nevstúpi",
                    "number": 452,
                    "lang": "sk",
                    "url": "nic-neiste-nevstupi",
                    "author": "",
                    "verses": [
                        [
                            "ZBOR: Ó, blahá zem, prekrásna zem, na vrchu tvojom zastanem ",
                            "a pohliadnem za more tam, kde príbytok hotový mám a vidím ",
                            "onen slávny breh, tam môj je dom, tam môj je spech. ",
                            "1. Nič nečisté nevstúpi tam, kde Boh prebýva. ",
                            "Jeho oči presväté vidia, kto čo skrýva. "
                        ],
                        [
                            "ZBOR: Nič nečisté nevstúpi, pred Boha svätého. ",
                            "Preto si srdce čisté žiadam, od Boha samého. "
                        ],
                        [
                            "2. Nič nečisté nesmie mať, v sebe pred Ježišom. ",
                            "Očisť mi Bože srdce, abych spočinul v Ňom. "
                        ],
                        [
                            "ZBOR: Nič nečisté nevstúpi, pred Boha svätého. ",
                            "Preto si srdce čisté žiadam, od Boha samého. "
                        ],
                        [
                            "3. Nič nečisté nebude ukryté v súdu deň. ",
                            "Obmy mňa Jezu krvou Svojou, hriech, každý tieň. "
                        ],
                        [
                            "ZBOR: Nič nečisté nevstúpi, pred Boha svätého. ",
                            "Preto si srdce čisté žiadam, od Boha samého. "
                        ]
                    ]
                },
                {
                    "name": "Boží Syn svetom zneuctený",
                    "number": 453,
                    "lang": "sk",
                    "url": "bozi-syn-svetom-zneucteny",
                    "author": "",
                    "verses": [
                        [
                            "1. Boží Syn svetom zneuctený, nad všetko Otcom ",
                            "zveličený, záväzným sľubom potešil nás, že zjaví",
                            "sa nám o krátky čas. Blíži sa deň ten, je pred nami, ",
                            "zvuk archanjelov ho oznámi. Preň chystajme sa, ",
                            "myslime naň, na stráži stojme jak radí Pán. "
                        ],
                        [
                            "2. Ó, preslávne to okamženie, keď prežiť máme ",
                            "premenenie, smrteľnosť bude premožená a od ",
                            "života pohltená. Nádhera neba hviezdnatého je ",
                            "čiastočný len obraz toho, jak skvieť sa budú ",
                            "vykúpení, od porušenia vyprostení! "
                        ],
                        [
                            "3. Nádej tam zmizne i viery dar až uvidíme ",
                            "Kráľovu tvár, a až jej leskom ožiari nás, splesáme ",
                            "v rúchu nádherných krás. Ó, neodkladaj, príď už, ",
                            "Pane, my čakáme Ťa roztúžene! Loď cirkvi uveď ",
                            "do prístavu, Siona daruj večnú slávu!"
                        ]
                    ]
                },
                {
                    "name": "Tam z druhej strany tieňov hrobu",
                    "number": 454,
                    "lang": "sk",
                    "url": "tam-z-druhej-strany-tienov-hrobu",
                    "author": "",
                    "verses": [
                        [
                            "1. Tam z druhej strany tieňov hrobu domov máme tam, ",
                            "kde vôňa kvetov nevädnúcich, večnej slávy stan. ",
                            "ZBOR: Ten ako sneh musí mať vždy svoj šat a ",
                            "v krvi Krista obmytý, kto tam chce prebývať. "
                        ],
                        [
                            "2. Ja túžim tam tiež mať svoj domov, v meste blaženom, ",
                            "a k tebe náhlim sa, vlasť drahá, v tomto svete zlom. "
                        ],
                        [
                            "ZBOR: Ten ako sneh musí mať vždy svoj šat a ",
                            "v krvi Krista obmytý, kto tam chce prebývať. "
                        ],
                        [
                            "3. Ó, Ježišu, mňa krvou obmy, hriechov mojich sprosť ",
                            "a príjmi ma raz v Svojej ríši, to mi bude dosť. "
                        ],
                        [
                            "ZBOR: Ten ako sneh musí mať vždy svoj šat a ",
                            "v krvi Krista obmytý, kto tam chce prebývať. "
                        ]
                    ]
                },
                {
                    "name": "Odpočinok pravý čaká",
                    "number": 455,
                    "lang": "sk",
                    "url": "odpocinok-pravy-caka",
                    "author": "",
                    "verses": [
                        [
                            "1. Odpočinok pravý čaká, kresťanov kde slávna vlasť, ",
                            "tam už Pán môj odobral sa domov i mne prichystať."
                        ],
                        [
                            "ZBOR: Zomdlený odpočinú, majú tam domovinu. ",
                            "Zomdlený odpočinú aj ty spočinieš. Tam, kde šumí ",
                            "rajská tráva na tom brehu života, žitia strom kde ",
                            "plody zrejú aj ty spočinieš. "
                        ],
                        [
                            "2. Pán mi príbytok tam chystá, má on večné trvanie, ",
                            "bo v tej svätej, šťastnej zemi navždy, doma zostanem. "
                        ],
                        [
                            "ZBOR: Zomdlený odpočinú, majú tam domovinu. ",
                            "Zomdlený odpočinú aj ty spočinieš. Tam, kde šumí ",
                            "rajská tráva na tom brehu života, žitia strom kde ",
                            "plody zrejú aj ty spočinieš. "
                        ],
                        [
                            "3. Smrť už bude porazená a jej osteň zlomený. ",
                            "Vítajte ten preslávny deň, radujte sa, spasení. "
                        ],
                        [
                            "ZBOR: Zomdlený odpočinú, majú tam domovinu. ",
                            "Zomdlený odpočinú aj ty spočinieš. Tam, kde šumí ",
                            "rajská tráva na tom brehu života, žitia strom kde ",
                            "plody zrejú aj ty spočinieš. "
                        ],
                        [
                            "4. Pejte, dedičia tej slávy, svojou cestou po svete, ",
                            "Sion otvorí raz bránu, ktorou domov vojdete. "
                        ],
                        [
                            "ZBOR: Zomdlený odpočinú, majú tam domovinu. ",
                            "Zomdlený odpočinú aj ty spočinieš. Tam, kde šumí ",
                            "rajská tráva na tom brehu života, žitia strom kde ",
                            "plody zrejú aj ty spočinieš. "
                        ]
                    ]
                },
                {
                    "name": "Prekrásne miesto znám",
                    "number": 456,
                    "lang": "sk",
                    "url": "prekrasne-miesto-znam",
                    "author": "",
                    "verses": [
                        [
                            "1. Prekrásne miesto znám bez časov zmien, svätý sú v ",
                            "sláve tam, večný kde deň. Počuj ich zvučný spev: Hoden ",
                            "Kráľ náš, z Júdu lev, Boží čo stíšil hnev, ctený byť len. "
                        ],
                        [
                            "2. S nami poď v neba ríš, v nádhernú vlasť; ó, poď a ",
                            "uvidíš čo môž’ tam nájsť! Bremä zlož svojich vín, s láskou ",
                            "zve ťa Boží Syn. S pohľadom do výšin budeš tu rásť. "
                        ],
                        [
                            "3. Čakajú anjeli v oblastiach tých. V radosti, veselí už ",
                            "znie spev ich. Víťazom po boji tam Pán túžby ukojí ",
                            "radostí vo zdroji nekonečných. "
                        ]
                    ]
                },
                {
                    "name": "K horám Božím",
                    "number": 457,
                    "lang": "sk",
                    "url": "k-horam-bozim",
                    "author": "",
                    "verses": [
                        [
                            "1. K horám Božím, kde deň nový svitá, kde hriech nebude, ",
                            "kde viac bolesť nezavládne, pokušenie nepríde. Išiel ",
                            "Kristus, Vykupiteľ slávne miesto schystať nám. On nás ",
                            "za mzdu drahú kúpil nášmu Bohu navždy sám. "
                        ],
                        [
                            "2. Temnosť bludu rozostretá svetlu neba odstúpa, z rabstva ",
                            "hriechu vykúpil nás, Ježiš Kristus z moci zla. Všetky ostne ",
                            "krívd a biedy našich sŕdc už pominú v novej zemi, v novom ",
                            "nebi duše v Bohu spočinú. "
                        ],
                        [
                            "3. Nebudeme zotročení, vzkriesenia zvon Jeho znie. Blaho ",
                            "spásy srdcia hreje. Navždy máme spasenie! Otvoria sa ",
                            "brány z periel, nebo zjasá v dojatí, v žiare slávy Baránkovej ",
                            "verných húf sa navráti. "
                        ],
                        [
                            "4. Vstaňte sestry, vstaňte bratia, tiene padnú k priepastiam! ",
                            "Ježiš, Kráľ náš už dnes v sláve, večné stany schystal nám! ",
                            "Neste zvesť tú šírim svetom k horám, k moriam zeme strán. ",
                            "Kristus Kráľ náš v sláve tróni, budúcnosť že patrí nám. "
                        ]
                    ]
                },
                {
                    "name": "Tu som ja iba hosť",
                    "number": 458,
                    "lang": "sk",
                    "url": "tu-som-ja-iba-host",
                    "author": "",
                    "verses": [
                        [
                            "1. Tu som ja iba hosť, čo prišiel v cudziu zem, ja patrím na ",
                            "výsosť, môj domov tam je len. Som poslom z výšin tých, ",
                            "zvesť nesiem pre mnohých, to poslal ma sem neba Kráľ. ",
                            "ZBOR: Radostnú zvesť, hľa, nesiem vám, čo anjel rád by ",
                            "niesol sám: „Ó, buďte zmierený,“ tak volá nebies Pán ",
                            "„Ó, buďte s Bohom zmierený!“"
                        ],
                        [
                            "2. To vôľa Božia je, by každý, ktokoľvek hriech vyzná, ľutuje, ",
                            "smel začať nový vek. Kto poslušný chce byť, smie život večný ",
                            "žiť. To dal mi hlásať nebies Kráľ. "
                        ],
                        [
                            "ZBOR: Radostnú zvesť, hľa, nesiem vám, čo anjel rád by ",
                            "niesol sám: „Ó, buďte zmierený,“ tak volá nebies Pán ",
                            "„Ó, buďte s Bohom zmierený!“"
                        ],
                        [
                            "3. Je krásna naša zem a nádherný náš kraj, no tieňom toho ",
                            "len, kde večný kvitne máj. Pán mi ten rozkaz dal, by som ",
                            "ho zvestoval, že život dáva Kristus Kráľ. "
                        ],
                        [
                            "ZBOR: Radostnú zvesť, hľa, nesiem vám, čo anjel rád by ",
                            "niesol sám: „Ó, buďte zmierený,“ tak volá nebies Pán ",
                            "„Ó, buďte s Bohom zmierený!“"
                        ]
                    ]
                },
                {
                    "name": "Ó, či stretneme sa zasa",
                    "number": 459,
                    "lang": "sk",
                    "url": "o-ci-stretneme-sa-zasa",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, či stretneme sa zasa, anjelských kde spevov ton, ",
                            "žitia strom kde zelená sa, Pán kde má Svoj zlatý trón. "
                        ],
                        [
                            "ZBOR: Áno, stretneme sa zasa, anjelských kde spevov tón, ",
                            "žitia strom kde zelená sa, Pán kde má svoj zlatý trón. "
                        ],
                        [
                            "2. Tam, kde potok vody živej z trónu Pána pramení, ",
                            "či aj nás raz milostive Božia ruka odmení? "
                        ],
                        [
                            "ZBOR: Áno, stretneme sa zasa, anjelských kde spevov tón, ",
                            "žitia strom kde zelená sa, Pán kde má svoj zlatý trón. "
                        ],
                        [
                            "3. Tam, kde slnka lúčov jasných už nebude potreba, či ",
                            "nás zbaví Boh sĺz časných, ked nás príjme do neba? "
                        ],
                        [
                            "ZBOR: Áno, stretneme sa zasa, anjelských kde spevov tón, ",
                            "žitia strom kde zelená sa, Pán kde má svoj zlatý trón. "
                        ],
                        [
                            "4. Stretneme sa? V Kristu áno, kúpil nás On za ľud Svoj. ",
                            "Ver, čo z Písma nám je známo: Kde som ja, tam sluha Môj!"
                        ],
                        [
                            "ZBOR: Áno, stretneme sa zasa, anjelských kde spevov tón, ",
                            "žitia strom kde zelená sa, Pán kde má svoj zlatý trón. "
                        ]
                    ]
                },
                {
                    "name": "Znám miesto vzácne",
                    "number": 460,
                    "lang": "sk",
                    "url": "znam-miesto-vzacne",
                    "author": "",
                    "verses": [
                        [
                            "1. Znám miesto vzácne, milostné, kde hriech netlačí žalostne; ",
                            "chvál vždy kde zneje sladký tón: ó, milosti to Božej trón. "
                        ],
                        [
                            "ZBOR: Ó, Boží trón, ó, Boží trón, milosti svätý trón, ó, ",
                            "Boží trón, ó, Boží trón, tu dal mi spásu On!"
                        ],
                        [
                            "2. Tu Pán olejom radosti pokropí dušu, vyprostí, a je ",
                            "jej štítom, odmenou pred trónom Božím zloženou. "
                        ],
                        [
                            "ZBOR: Ó, Boží trón, ó, Boží trón, milosti svätý trón, ó, ",
                            "Boží trón, ó, Boží trón, tu dal mi spásu On!"
                        ],
                        [
                            "3. Tu nepriatelia priateľmi stanú sa, v Pánu víťazmi; ",
                            "a diablov voj už zďaleka pred mocou krvi uteká. "
                        ],
                        [
                            "ZBOR: Ó, Boží trón, ó, Boží trón, milosti svätý trón, ó, ",
                            "Boží trón, ó, Boží trón, tu dal mi spásu On!"
                        ],
                        [
                            "4. Na krídlach orla srdca let nesie sa tam kde bôľov niet, ",
                            "vysoko, hore na Sion, pred drahý večný, Boží trón. "
                        ],
                        [
                            "ZBOR: Ó, Boží trón, ó, Boží trón, milosti svätý trón, ó, ",
                            "Boží trón, ó, Boží trón, tu dal mi spásu On!"
                        ]
                    ]
                },
                {
                    "name": "Nezajde už slnce tvoje",
                    "number": 461,
                    "lang": "sk",
                    "url": "nezajde-uz-slnce-tvoje",
                    "author": "",
                    "verses": [
                        [
                            "1. Nezajde už slnce tvoje, mesiac tvoj sa neschová, ",
                            "až ti brány otvorí raz, až ti brány otvorí raz večná ",
                            "ríša Kristova. "
                        ],
                        [
                            "2. Hospodin Boh Trojjediný, kde je svetlom večným sám, ",
                            "skončia sa dni smútku tvojho, skončia sa dni smútku tvojho, ",
                            "skončia sa ti navždy tam. "
                        ],
                        [
                            "3. Nezaznie tam slovo zradné, ani krivdy ťažký ston, ",
                            "spievať bude srdce tvoje, spievať bude srdce tvoje ",
                            "večnej hymny krásny tón. "
                        ],
                        [
                            "4. Mraky žiaľu zaleteli, zmĺkli ako letný sen, pred ",
                            "trónom tam Baránkovým, pred trónom tam Baránkovým ",
                            "zabronie ti blaha deň. "
                        ],
                        [
                            "5. Nezajde už slnce tvoje, mesiac tvoj sa neschová, ",
                            "vo večnosti, kde ťa čaká, vo večnosti, kde ťa čaká ",
                            "svätá náruč Otcova.  "
                        ],
                        [
                            "6. Spasiteľ kde pokoj dáva, On kde svetlom večným sám, ",
                            "zakončia dni smútku tvojho, zakončia dni smútku tvojho ",
                            "ver, zakončia navždy tam. "
                        ]
                    ]
                },
                {
                    "name": "Až bude Boh súdiť svet",
                    "number": 462,
                    "lang": "sk",
                    "url": "az-bude-boh-sudit-svet",
                    "author": "",
                    "verses": [
                        [
                            "1. Až bude Boh súdiť svet v ten deň posledný, svätý s ",
                            "Kristom stretnú sa v povetrí. Pútnici unavený v nebies ",
                            "vlasť vojdu, Pána sláviť tam naveky budú. "
                        ],
                        [
                            "ZBOR: Tam budeme aj my v ten veľký deň a slávny, ",
                            "keď mŕtvi povstanú a všetci Kristu chválu česť vzdajú. "
                        ],
                        [
                            "2. Raz sa náš spev spojí s tým anjelským chórom, ktorý ",
                            "spieva tam pred nebies trónom. A na harfách zlatých, keď",
                            "zazvučia struny, tam Pána sláviť budeme aj my. "
                        ],
                        [
                            "ZBOR: Tam budeme aj my v ten veľký deň a slávny, ",
                            "keď mŕtvi povstanú a všetci Kristu chválu česť vzdajú. "
                        ],
                        [
                            "3. Snáď už rýchlo duša s telom sa rozlúči a v príbytok ",
                            "ten večný zaletí. Len tí budú šťastní, ktorých privíta Pán. ",
                            "Či, duša milá, budeš aj ty tam?"
                        ],
                        [
                            "ZBOR: Tam budeme aj my v ten veľký deň a slávny, ",
                            "keď mŕtvi povstanú a všetci Kristu chválu česť vzdajú. "
                        ]
                    ]
                },
                {
                    "name": "Čas rýchlo sa už kráti",
                    "number": 463,
                    "lang": "sk",
                    "url": "cas-rychlo-sa-uz-krati",
                    "author": "",
                    "verses": [
                        [
                            "1. Čas rýchlo sa už kráti, tma dozrie v svitaní, my piesňou ",
                            "privítame deň dávno čakaný. Noc čierna dlho vládla, no ",
                            "ráno blízko je. V ňom sláva privíta nás v ríši Kristovej. "
                        ],
                        [
                            "2. Hľa prameň večnej lásky mi Ježiš otvoril, smiem denne ",
                            "čerpať z neho, v ňom je zdroj nových síl. Kto plnosť Jeho",
                            "skúsil, ten život isto má. Mne lúčom slávy žiari ríša Kristova. "
                        ],
                        [
                            "3. Čas mieru i čas boja bol môj diel na zemi, no nikdy neopustil ",
                            "ma Pán môj v súžení. Raz uzriem Jeho ruku, čo milosť bral som ",
                            "z nej, keď privíta ma sláva ríše Kristovej. "
                        ],
                        [
                            "4. V oči nevesty nie v šat; v Ženícha v jasnú tvár, ja budem ",
                            "sa vždy dívať na Kráľa slávy žiar. Nie na žitia korunu, lež ",
                            "preklatú ruku, keď prejdem v ríšu slávnu, v ríšu nebeskú. "
                        ]
                    ]
                },
                {
                    "name": "Blíži sa deň s leskom zlatým",
                    "number": 464,
                    "lang": "sk",
                    "url": "blizi-sa-den-s-leskom-zlatym",
                    "author": "",
                    "verses": [
                        [
                            "1. Blíži sa deň s leskom zlatým a Pán volá hlasom svätým: ",
                            "Bdej a čakaj v každom čase: „Prídem skoro zase!“ "
                        ],
                        [
                            "ZBOR: A ja v tej preslávnej chvíli, s tými, ktorí zvíťazili, ",
                            "sláviť budem večne, hojne meno predôstojné.  "
                        ],
                        [
                            "2. Bárs to milióny duší teraz ani len netuší, že zaskvie sa ",
                            "nad obzorom a zaznie tam zborom: "
                        ],
                        [
                            "ZBOR: A ja v tej preslávnej chvíli, s tými, ktorí zvíťazili, ",
                            "sláviť budem večne, hojne meno predôstojné.  "
                        ],
                        [
                            "3. Ój, víťazná hymna, pieseň, bo zmizne strach, žiaľ a tieseň. ",
                            "Potom, večná láska neba, dá mi vidieť seba. "
                        ],
                        [
                            "ZBOR: A ja v tej preslávnej chvíli, s tými, ktorí zvíťazili, ",
                            "sláviť budem večne, hojne meno predôstojné.  "
                        ],
                        [
                            "4. Zmeníš telo ponížené v slávne a neporušené, podobný že ",
                            "budem Tebe? Nad tým splesá nebe. "
                        ],
                        [
                            "ZBOR: A ja v tej preslávnej chvíli, s tými, ktorí zvíťazili, ",
                            "sláviť budem večne, hojne meno predôstojné.  "
                        ]
                    ]
                },
                {
                    "name": "Hľa, tvoj Kráľ sa k tebe berie",
                    "number": 465,
                    "lang": "sk",
                    "url": "hla-tvoj-kral-sa-k-tebe-berie",
                    "author": "",
                    "verses": [
                        [
                            "1. Hľa, tvoj Kráľ sa k tebe berie, jasaj, dcéra ",
                            "Siona, hynie v pýche, sprenevere dcéra už Babylona. ",
                            "Slávy Kráľ sa ku nám blíži v pokore a tichosti, nebo ",
                            "dáva v Svojom kríži aj nám z Božej milosti. "
                        ],
                        [
                            "2. Ó, tie slová utešené, duše v hriechu hynúce s ",
                            "Bohom budú uzmierené, v nebo vojdú preskvúce. ",
                            "Otvor dvere svojho srdca, On aj k tebe blíži sa, ",
                            "prosba tvoja nech nie vrúca, príjmi Pána Ježiša. "
                        ],
                        [
                            "3. Príď, ó, Pane dobrotivý, v mojom srdci sprav si ",
                            "chrám, nech sa ti už neprotiví, celé Ti ho oddávam. ",
                            "Pomôž vprostred sveta strastí v dôvere vždy hľadieť ",
                            "hor ku nebeskej večnej vlasti, anjelský kde spieva zbor. "
                        ],
                        [
                            "4. Sion Tvoj Ti skladal palmy, rúchami ti cestu stlal, i ",
                            "ja chcem Ti spievať žalmy vrúcnej vďaky, piesne chvál. ",
                            "Sláva Ti buď, Synu Boží, mojím žitím vzdávaná, príchod ",
                            "Tvoj nám radosť množí. Na výsostiach Hossana!"
                        ]
                    ]
                },
                {
                    "name": "Hore zraky, ľude Boží",
                    "number": 466,
                    "lang": "sk",
                    "url": "hore-zraky-lude-bozi",
                    "author": "",
                    "verses": [
                        [
                            "1. Hore zraky, ľude Boží; ide spásy hodina!",
                            "Nič nám svet už neublíži, Božia sme my rodina!",
                            "Nech si búria vlny žiaľov, pokrývajú žitia loď; padnú ",
                            "v priepasť zabudnutia, keď nastane večný hod. "
                        ],
                        [
                            "2. Nad horami sionskými zlaté zore vstávajú, bleskom ",
                            "svojím zvesti slávne srdciam našim hlásajú. Skončené je ",
                            "dielo príprav; stvorená je zem nová. Chystajme sa, ženích ",
                            "ide; svadba je už hotová. "
                        ],
                        [
                            "3. Otvárajú Cherubíni brány nebies dokorán; ladia ",
                            "harfy Serafíni, obstúpili Boží stan, Starci tróny opustili, ",
                            "ústa plné večných chvál; hotujú sa k slávnej chvíli, ",
                            "keď zvíťazí Ježiš Kráľ. "
                        ],
                        [
                            "4. Zem sa trasie, hviezdy letia, slnce tratí tepla moc. ",
                            "Dietky Božie, zaplesajte; posledná už vládne noc. ",
                            "Krivdy sveta, bolesť, žiale prejdú jako ťažký sen. ",
                            "Nad horami novej zeme večný pre nás svitá deň. "
                        ]
                    ]
                },
                {
                    "name": "Z mesta skazy",
                    "number": 467,
                    "lang": "sk",
                    "url": "z-mesta-skazy",
                    "author": "",
                    "verses": [
                        [
                            "1. Z mesta skazy na vrch Sion vykroč, duša milená. ",
                            "Zem čo na nej prebývame, bude ohňom zničená. ",
                            "Nezdržuj sa, neobzeraj, k Ježišovi čím skôr poď! On ",
                            "sám zachrániť len môže, vyrvať z pekla zhubných vôd. "
                        ],
                        [
                            "2. Našu zem aj celý vesmír čaká zánik, spálenie. ",
                            "Že ten deň sa rýchlo blíži, svedčí mnohé znamenie: ",
                            "zem sa trasie, hriech sa šíri k zeme všetkým končinám. ",
                            "Ó, ľud, Boží ponáhľaj sa za Ježišom k výšinám. "
                        ],
                        [
                            "3. Kde sa skryješ, duša drahá, keď ti zaznie novina: ",
                            "Vydať počet Boh ťa volá prišla súdu hodina. Neunikneš, ",
                            "neskryješ sa nikde v sveta končinách. Ruka Pána dostihne",
                            "ťa čo aj v mora hlbinách. "
                        ]
                    ]
                },
                {
                    "name": "Ej, nejednu ešte slzu",
                    "number": 468,
                    "lang": "sk",
                    "url": "ej-nejednu-este-slzu",
                    "author": "",
                    "verses": [
                        [
                            "1. Ej, nejednu ešte slzu dieťa Božie vyroní, kým zasvitne ",
                            "večné ráno. Kým zasvitne večné ráno. A zvon slávy zazvoní.  "
                        ],
                        [
                            "2. Ej, nejednu ešte krivdu ticho musí pretrpieť, kým príde Pán, ",
                            "a ono s Ním, kým príde Pán, a ono s Ním. Bude smieť v raj zaletieť. "
                        ],
                        [
                            "3. Ej, nejedna ešte chvíľa bolestného sklamania, čaká naň, kým okúsi ",
                            "slasť, čaká naň, kým okúsi slasť. Nebeského plesania."
                        ],
                        [
                            "4. Ale potom, aká radosť, aká sláva veliká! Príde Ježiš – vziať v Svoj ",
                            "domov, príde Ježiš vziať v Svoj domov. Zomdleného pútnika. "
                        ]
                    ]
                },
                {
                    "name": "Aký slávny bude príchod",
                    "number": 469,
                    "lang": "sk",
                    "url": "aky-slavny-bude-prichod",
                    "author": "",
                    "verses": [
                        [
                            "1. Aký slávny bude príchod Kráľa vekov Ježiša, lebo nebies blaho ",
                            "príjme Jeho zemská veľríša. Keď tu stane Jeho noha, zmiznú ",
                            "zdroje trápenia, Jeho pravda, láska mnohá zem zas na raj premenia. ",
                            "Nadarmo svet bojuje proti Jeho príchodu, isto príde, už sa hotuje ",
                            "zmariť dielo podvodu. "
                        ],
                        [
                            "2. Ako všetci zajasáme v onej dobe blaženej a sa znova k dielu ",
                            "dáme, čo Pán chystá pre nás v nej. Budeme Mu služobníkmi, ",
                            "Jeho vlády údami, urobí nás prostredníkmi ríše mieru na zemi. ",
                            "Dnes len napred v radosti, hľaď, by si bol hotový, keď nám svitne ",
                            "deň ten milosti, vzdávať poctu Kráľovi. "
                        ],
                        [
                            "3. Časy sú to veľmi vážne, pokým Kráľa čakáme, dokiaľ v zemi ",
                            "viery prázdnej cestu Jemu rovnáme. Tu nám Kráľ náš hrivny zveril,",
                            "tu ich káže zveľadiť, tu je miesto, kde boj viery máme viesť a víťaziť. ",
                            "Buďme preto vernými v tomto časnom živote, keď Pán príde s vojmi ",
                            "svätými, bude slávny v odplate. "
                        ]
                    ]
                },
                {
                    "name": "Daj Pane, bych bol uveden",
                    "number": 470,
                    "lang": "sk",
                    "url": "daj-pane-bych-bol-uveden",
                    "author": "",
                    "verses": [
                        [
                            "1. Daj, Pane, bych bol uveden, kde tisíc liet jak jeden deň, ",
                            "[: kde láska Tvoja dobrota rozdáva vence života. :]"
                        ],
                        [
                            "2. No, pred tým miestom, Bože môj, zavaruj, ochráň, pri mne ",
                            "stoj, [: až povoláš ma tam v ten svet, kde jeden deň jak tisíc liet. :]"
                        ],
                        [
                            "3. Ó, Ježišu, len u Teba je istá cesta do neba. [: Nikto k Otcovi nevchádza, ",
                            "kto milosť Tvoju obchádza. :]"
                        ],
                        [
                            "4. Na Tvojom srdci, Ježiši, sa časná bolesť utíši, [: bo v svätom",
                            "Tvojom objatí hriech už moc navždy utratí. :]"
                        ]
                    ]
                },
                {
                    "name": "Hľa, z neba sa už poberá",
                    "number": 471,
                    "lang": "sk",
                    "url": "hla-z-neba-sa-uz-pobera",
                    "author": "",
                    "verses": [
                        [
                            "1. Hľa, z neba sa už poberá Ten, ktorý za svet zomieral a dobil ",
                            "spásu pre ľudí, čo vlastný hriech ich odsúdil. "
                        ],
                        [
                            "2. Už na oblaku nesie sa. Svet kvíli, pejú nebesá, že večný víťaz",
                            "prichádza a verných zbor Ho sprevádza. "
                        ],
                        [
                            "3. Už blíži sa a nemešká, zrieť má Ho zloba pozemská, čo nemala ",
                            "preň prístrešok a v zášti prebodla Mu bok. "
                        ],
                        [
                            "4. Už počuť kviľbu, nárek, des tých, čo v Ňom Sudcu vidia dnes ",
                            "a hrôzu trasie sa im hlas: Ó, vrchy, hory, skryte nás! ",
                            " ",
                            "5. Už vpravo, vľavo tisícom smer dáva Sudca pravicou. Len k ",
                            "jedným ako ku druhým sa i ja iste zaradím. "
                        ],
                        [
                            "6. Ó, Pane, čo máš v rukách súd, v ten deň mne milostivý buď ",
                            "a zaradenie vtedy mi daj po pravici s vernými. "
                        ]
                    ]
                },
                {
                    "name": "Kráľ nebeský svojmu Synu",
                    "number": 472,
                    "lang": "sk",
                    "url": "kral-nebesky-svojmu-synu",
                    "author": "",
                    "verses": [
                        [
                            "1. Kráľ nebeský svojmu Synu pripravuje nevestu, On si skoro ",
                            "príde pre ňu, už sa chystá na cestu. Z diaľky znie už trúby hlas, ",
                            "je nadmieru vážny čas: "
                        ],
                        [
                            "ZBOR: „Ženích ide!?“ Čuť volania „Výjdite mu v ústrety!“ ",
                            "Blíži sa deň povýšenia Baránkovej nevesty. "
                        ],
                        [
                            "2. Ona, svetom zneuznaná, vystavená pohane, v svätožiaru ",
                            "oblečená má s Ním vládnuť na tróne. V tom stave ju uvidia",
                            "všetci jej nepriatelia. "
                        ],
                        [
                            "ZBOR: „Ženích ide!?“ Čuť volania „Výjdite mu v ústrety!“ ",
                            "Blíži sa deň povýšenia Baránkovej nevesty. "
                        ],
                        [
                            "3. Ó, jaká to pieseň nová v deň ten bude spievaná, aj nevesta ",
                            "Baránkova bude v nebi vítaná. Až jej výjdu v ústrety ",
                            "všetci slávou odiati. "
                        ],
                        [
                            "ZBOR: „Ženích ide!?“ Čuť volania „Výjdite mu v ústrety!“ ",
                            "Blíži sa deň povýšenia Baránkovej nevesty. "
                        ],
                        [
                            "4. Zbory všetkých nebešťanov deň ten s túžbou čakajú, v ňom, ",
                            "s nevestou oslávenou, Kráľa vidieť žiadajú. To Jeho s ňou spojenie",
                            "je ich túžob splnenie. "
                        ],
                        [
                            "ZBOR: „Ženích ide!?“ Čuť volania „Výjdite mu v ústrety!“ ",
                            "Blíži sa deň povýšenia Baránkovej nevesty. "
                        ],
                        [
                            "5. Vzdychaj, pros a volaj smelo celá cirkev Kristova: Ježišu náš, ",
                            "zjav sa skoro, splň nám sľuby do slova! Zakonč naše čakanie, ",
                            "zmeň nám smútok v jasanie!"
                        ],
                        [
                            "ZBOR: „Ženích ide!?“ Čuť volania „Výjdite mu v ústrety!“ ",
                            "Blíži sa deň povýšenia Baránkovej nevesty. "
                        ],
                        [
                            "6. Vtedy bude celé dielo plánov Božích skončené, až Kristovo ",
                            "sväté telo s Hlavou bude spojené. A až všetko skončené, večný ",
                            "sviatok nastane. "
                        ],
                        [
                            "ZBOR: „Ženích ide!?“ Čuť volania „Výjdite mu v ústrety!“ ",
                            "Blíži sa deň povýšenia Baránkovej nevesty. "
                        ]
                    ]
                },
                {
                    "name": "Blíži sa vek, ten blažený",
                    "number": 473,
                    "lang": "sk",
                    "url": "blizi-sa-vek-ten-blazeny",
                    "author": "",
                    "verses": [
                        [
                            "1. Blíži sa vek, ten blažený, v ktorom evanjelium, tie spasiteľné ",
                            "noviny, vniknú k všetkým národom, zaplesá zem i kvet v púšti, ",
                            "raj sa všade vyjavý, more vydá od radosti hromový zvuk oslavy!"
                        ],
                        [
                            "ZBOR: Temno noci mizne už! Ustupuje dennici! Ó, ľud ",
                            "Boží, ako strážny muž vítaj deň sa blížiaci!"
                        ],
                        [
                            "2. Blíži sa vek, ten blažený, čakali naň otcovia, slávu jeho predvídali ",
                            "mnohý Boží mužovia. K národom tam, kde smrť vládne, nepravda i ",
                            "všetko zlo, príde z neba požehnanie, príde Božie kráľovstvo. "
                        ],
                        [
                            "ZBOR: Temno noci mizne už! Ustupuje dennici! Ó, ľud ",
                            "Boží, ako strážny muž vítaj deň sa blížiaci!"
                        ],
                        [
                            "3. Blíži sa vek, ten blažený, nebude v ňom vojen ruch, z vlády diabla ",
                            "vypostený v mieri bude s druhom druh. Každý vidieť bude Pána, ",
                            "každý sa s Ním zoznámi: celá zem Ho bude plná, ako more vodami. "
                        ],
                        [
                            "ZBOR: Temno noci mizne už! Ustupuje dennici! Ó, ľud ",
                            "Boží, ako strážny muž vítaj deň sa blížiaci!"
                        ],
                        [
                            "4. Blíži sa vek, ten blažený, čakáme ho v radosti s Kristom máme ",
                            "vládnuť v zemi žezlom spravodlivosti. Nič nás tam už nezastraší, ",
                            "nič nevzdiali od Neho! Sme dedičmi v nebies ríši, deťmi Boha večného! "
                        ],
                        [
                            "ZBOR: Temno noci mizne už! Ustupuje dennici! Ó, ľud ",
                            "Boží, ako strážny muž vítaj deň sa blížiaci!"
                        ]
                    ]
                },
                {
                    "name": "Nevesta sa pripravuje",
                    "number": 474,
                    "lang": "sk",
                    "url": "nevesta-sa-pripravuje",
                    "author": "",
                    "verses": [
                        [
                            "1. Nevesta sa pripravuje vítať Kráľa z výsosti, krášli sa a ozdobuje ",
                            "skvostom pravej svätosti. „Už sa chystá, už sa blíži Ženích, už je ",
                            "na ceste“, oznamujú nočný strážni Jeho šťastnej neveste. "
                        ],
                        [
                            "2. Jeho rúcho slnko skvúce, hudbou neba Jeho hlas. Z Jeho tvári ",
                            "prežiadúcej žiaria státisíce krás. Cherubíni, serafíni v žiare nebies",
                            "pochodní Ženíchovi tvoria sprievod nespočetný – svadobný. "
                        ],
                        [
                            "3. Tisíc rokov zemské nivy svadbu Kráľa oslávia, zatiaľ v nebi žiadostivý ",
                            "prestol preňho pripravia. Potom cirkev premenená so Ženíchom ",
                            "nebeským v jasnom svite Jeho slávy vzlietne k svetom nadzemským. "
                        ]
                    ]
                },
                {
                    "name": "Ó, poďte cez Jordán",
                    "number": 475,
                    "lang": "sk",
                    "url": "o-podte-cez-jordan",
                    "author": "",
                    "verses": [
                        [
                            "Ó, poďte cez Jordán uzrieť zem, uzrieť zem, víta nás Kanaán, ",
                            "to Božích sľubov zem. (koniec)"
                        ],
                        [
                            "1. Mňa k nebu tiahne vždy môj Pán, to je tá spásy zem, kde ",
                            "s nebešťanmi zajasám: Ó, zriem úž blaha zem. Ó, poďte ",
                            "cez Jordán uzrieť zem . . . "
                        ],
                        [
                            "2. Nech satan zúri, šťastný som víta ma spásy zem, čo našiel ",
                            "som ju s Ježišom, Ó, zriem už blaha zem. Ó, poďte cez Jordán ",
                            "uzrieť zem . . . "
                        ],
                        [
                            "3. Svet nemá stále trvanie, no ja zriem spásy zem, kde s Kristom ",
                            "večne zostanem. Ó, zriem už blaha zem. Ó, poďte cez Jordán ",
                            "uzrieť zem . . . "
                        ],
                        [
                            "4. Kto vraví, že má v Bohu diel, uvidí spásy zem, kto zvodmi ",
                            "sveta zhrdnúť smel, ten zrie už blaha zem, Ó, poďte cez Jordán ",
                            "uzrieť zem . . . "
                        ]
                    ]
                },
                {
                    "name": "Kedy bude Ježiš vládnuť zemi",
                    "number": 476,
                    "lang": "sk",
                    "url": "kedy-bude-jezis-vladnut-zemi",
                    "author": "",
                    "verses": [
                        [
                            "1. Kedy bude Ježiš vládnuť zemi Izraela dedičnej? Kedy ",
                            "prestanú byť zatvrdení muži, ženy v zemi tej? Kedy príde ",
                            "doba vytúžená s trónom pravdy Ježišovho mena, v slobode ",
                            "a svornosti národy čo uhostí? "
                        ],
                        [
                            "2. Zaujmi svoj prestol, vláda Božia, v moci Ducha prídi k nám, ",
                            "svedkovia nech Kristovi sa množia ku najďalším končinám. ",
                            "Pokoja zvesť nech sa šíri tvoja, spraví koniec nenávisti, boja, ",
                            "aby zeme stvorenie našlo s nebom zmierenie. "
                        ]
                    ]
                },
                {
                    "name": "Ó, vykročte v ten nový svet",
                    "number": 477,
                    "lang": "sk",
                    "url": "o-vykrocte-v-ten-novy-svet",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, vykročte v ten nový svet, kde núdze, biedy nevidieť, bo ",
                            "mliekom, medom oplýva, tam každá duša hojnosť má. "
                        ],
                        [
                            "ZBOR: Vykročme tam do Kanaán, to naša vlasť, má krásu, slasť! ",
                            "Zmužilo vpred vykročme hneď, Pán Ježiš sám je Vodcom nám!"
                        ],
                        [
                            "2. Boh Spasiteľa poslal nám, by z púšte viedol nás vpred sám, ",
                            "hľa, za Ním kráča s dôverou ta k Jordánu zbor víťazov. "
                        ],
                        [
                            "ZBOR: Vykročme tam do Kanaán, to naša vlasť, má krásu, slasť! ",
                            "Zmužilo vpred vykročme hneď, Pán Ježiš sám je Vodcom nám!"
                        ],
                        [
                            "3. Raz suchou nohou viedol Pán i cez dno mora ľud svoj tam, tak ",
                            "aj nám týmto Jordánom prejsť pomôže v náš večný dom. "
                        ],
                        [
                            "ZBOR: Vykročme tam do Kanaán, to naša vlasť, má krásu, slasť! ",
                            "Zmužilo vpred vykročme hneď, Pán Ježiš sám je Vodcom nám!"
                        ],
                        [
                            "4. Tak poďme s vierou v radosti až k bránam blahej večnosti zem ",
                            "zaujať si s piesňou chvál, čo Kristus pre nás vyzískal. "
                        ],
                        [
                            "ZBOR: Vykročme tam do Kanaán, to naša vlasť, má krásu, slasť! ",
                            "Zmužilo vpred vykročme hneď, Pán Ježiš sám je Vodcom nám!"
                        ],
                        [
                            "5. Tam neprenikne nepriateľ, len Ježišov ľud má tam cieľ a v preslávnej ",
                            "tej hodine Pán si ho na hruď privinie. "
                        ],
                        [
                            "ZBOR: Vykročme tam do Kanaán, to naša vlasť, má krásu, slasť! ",
                            "Zmužilo vpred vykročme hneď, Pán Ježiš sám je Vodcom nám!"
                        ]
                    ]
                },
                {
                    "name": "Naveky u Pána",
                    "number": 478,
                    "lang": "sk",
                    "url": "naveky-u-pana",
                    "author": "",
                    "verses": [
                        [
                            "1. Naveky u Pána svoj podiel slávy mám, tam vodne večer, za rána ",
                            "zrak viery upieram. Ja idem cez ten svet, som pútnikom len v ňom, ",
                            "no väčšie šťastie pre mňa niet keď bližšie k Pánu som. Bližšie som, ",
                            "bližšie som vždy k Nemu bližšie som. "
                        ],
                        [
                            "2. Hor k nebu vyzerám, zriem vierou večnú vlasť a k domovu sa ",
                            "poberám, ó, nevýslovná slasť! Už skoro zavítam, kde radosť ",
                            "odveká a nový Jeruzalem tam ma víta z ďaleka. Z ďaleka, ",
                            "z ďaleka, ma víta z ďaleka. "
                        ],
                        [
                            "3. Viem, neraz tu i tam sa pohľad zakalí a v úzkosti sa navraciam ",
                            "sťa vtáča do skaly. No mračná stratia sa a smútok pominie, smie ",
                            "srdce znova zajasať, zas oblúk dúhy zrie. Dúhu zrie, dúhu zrie, ",
                            "zas oblúk dúhy zrie."
                        ],
                        [
                            "4. Keď príde smrti sen, Boh domov pozve ma, to prejdem v iný ",
                            "život len, ó, vzácna premena! Tam v svetle budem žiť preč z ",
                            "pozemských už nív a večne Pána velebiť za Jeho lásky div, ",
                            "lásky div, lásky div, za Jeho lásky div. "
                        ]
                    ]
                },
                {
                    "name": "Ó, čujte strážcov mocný hlas",
                    "number": 479,
                    "lang": "sk",
                    "url": "o-cujte-strazcov-mocny-hlas",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, čujte strážcov mocný hlas, jak z výšin hradieb budí nás: ",
                            "Ó, Jeruzalem, povstaň včas! Je polnoc, zomdlel Boží ľud. Hľa, ",
                            "ženích ide! Strážcov čuť a na zem padá svetla prúd. Čo múre ",
                            "panny ste, jas lámp si pripravte! Hallelujah! Mu spievajte! Váš ",
                            "ide Kráľ, keď miesto svojím prichystal. "
                        ],
                        [
                            "2. Čuj, Sion, zvuky fanfár k nám, zrak s túžbou obráť ku hviezdam ",
                            "a plesaj: v Bohu spásu mám! Tvoj priateľ slávny z výsosti sa blíži ",
                            "v Božskej bytosti, Syn plný pravdy, milosti! Tam v svetla oblakoch",
                            "tvoj ide Pán a Boh! Hosianna! Čuť Jeho krok. Syn Boží sám už ",
                            "všetky sľuby splnil nám. "
                        ],
                        [
                            "3. Česť, chválu vzdávajme Mu dnes; tu ľudský, anjelský tam ples, ",
                            "nech vrúcne letí do nebies! Ej, do perlových, skvúcich brán, kde ",
                            "pripravil nám večný stan, nás vedie milosrdný Pán. – Nik zrakom ",
                            "nevídal, ni sluchom neslýchal o radosti, kde prestal žiaľ! Tam Bohu ",
                            "len vzdá česť, moc, slávu nebo, zem!"
                        ]
                    ]
                },
                {
                    "name": "Darmo sa ty vymlúvaš",
                    "number": 480,
                    "lang": "sk",
                    "url": "darmo-sa-ty-vymluvas",
                    "author": "",
                    "verses": [
                        [
                            "1. Darmo sa ty vymlúvaš, duša v hriechu zblúdilá, že pre teba ",
                            "pokánia hodina vraj nebila, že sa raz kedysi k Bohu vrátiš ešte,",
                            "ale teraz mladosť a svet stojí v ceste!"
                        ],
                        [
                            "2. Dnes si živá, plná síl; ach, pamätaj, zajtra snáď ovanie ťa smrti ",
                            "dych, koniec bude Božích rád. Časný život v hriechoch márnych",
                            "biedne stratíš, k Otcovi sa nikdy viac už nenavrátiš. "
                        ],
                        [
                            "3. Dnes ťa dobrý Pastier sám, v šírom svete zhľadáva, „Vráť sa ku ",
                            "Mne; poď, ach, poď!“ Túžobne ťa zvoláva. Srdce Jeho plné k tebe ",
                            "Je ľútosti; no, keď stíchne volať, zhynieš bez milosti. "
                        ]
                    ]
                },
                {
                    "name": "Raduj sa, ty malé stádo detí Pána",
                    "number": 481,
                    "lang": "sk",
                    "url": "raduj-sa-ty-male-stado-deti-pana",
                    "author": "",
                    "verses": [
                        [
                            "1. Raduj sa, ty malé stádo detí Pána, bo už pučí, strom tvoj ",
                            "figový, oznamuje, že je blízko krásne leto, ktoré všetko obnoví. "
                        ],
                        [
                            "ZBOR: , [: Pozrite! :] Pozdvihnite hlavy hor už príde Pán. ",
                            "[: Pozrite! :] Vykúpenie blízko je nám! "
                        ],
                        [
                            "2. Mnohý teraz vravia, Pán že omeškáva splniť to, čo sám dať sľúbil",
                            "On. Ako keď žil Noe, vládla žiadosť tela, aj dnes taký vládne zhon. "
                        ],
                        [
                            "ZBOR: , [: Pozrite! :] Pozdvihnite hlavy hor už príde Pán. ",
                            "[: Pozrite! :] Vykúpenie blízko je nám! "
                        ],
                        [
                            "3. Iný zase hrdo s faraónom volá: akému že Bohu slúžiť mám? Teraz ",
                            "pyšne hlavou svojou potriasajú, súdiť bude ich Boh sám. "
                        ],
                        [
                            "ZBOR: , [: Pozrite! :] Pozdvihnite hlavy hor už príde Pán. ",
                            "[: Pozrite! :] Vykúpenie blízko je nám! "
                        ],
                        [
                            "4. Pán Boh ovce Svoje všetky oddelí si, postaví ich k prúdu živých vôd. ",
                            "Figovníky kvetom jar nám oznamujú, zdvihni hlavy, Boží rod!"
                        ],
                        [
                            "ZBOR: , [: Pozrite! :] Pozdvihnite hlavy hor už príde Pán. ",
                            "[: Pozrite! :] Vykúpenie blízko je nám! "
                        ]
                    ]
                },
                {
                    "name": "Ó, pripravuj sa, Boží ľud",
                    "number": 482,
                    "lang": "sk",
                    "url": "o-pripravuj-sa-bozi-lud",
                    "author": "",
                    "verses": [
                        [
                            "1. Ó, pripravuj sa, Boží ľud, Pán blízko, čakaj, bdelý buď. ",
                            "Tvoj ženích, cirkev nevesta, svoj príchod nezmešká. "
                        ],
                        [
                            "ZBOR: Slávny deň to bude raz, keď sa Ježiš zjaví zas. ",
                            "Tvoj ľud Ťa čaká, Pane náš, príď, slávny Mesiáš!"
                        ],
                        [
                            "2. Ó, Sion, vstaň a nedriemaj, hneď do pilnej sa práce daj, ",
                            "by v diele tvoj ťa našiel Pán, keď príde v sláve k nám. "
                        ],
                        [
                            "ZBOR: Slávny deň to bude raz, keď sa Ježiš zjaví zas. ",
                            "Tvoj ľud Ťa čaká, Pane náš, príď, slávny Mesiáš!"
                        ],
                        [
                            "3. Ó, Božia cirkev, pamätaj, vždy na hlas Pánov pozor daj. ",
                            "Bdej, modli sa a pracuj len, kým príde Pánov deň. "
                        ],
                        [
                            "ZBOR: Slávny deň to bude raz, keď sa Ježiš zjaví zas. ",
                            "Tvoj ľud Ťa čaká, Pane náš, príď, slávny Mesiáš!"
                        ]
                    ]
                },
                {
                    "name": "Rýchlosťou vtáka",
                    "number": 483,
                    "lang": "sk",
                    "url": "rychlostou-vtaka",
                    "author": "",
                    "verses": [
                        [
                            "1. Rýchlosťou vtáka letí čas nejednu slzu zvábi z rias, ",
                            "[: v nejednom srdci vyvolá žiaľ, ktorý nik už nezdolá. :]"
                        ],
                        [
                            "2. Rýchlosťou vtáka letí čas, nejedno šťastie pochová. ",
                            "[: Čo platný život plný krás, keď zhasla nádej ružová? :]"
                        ],
                        [
                            "3. Rýchlosťou vtáka letí čas, so sebou nesie svetla jas, ",
                            "[: života, zdravia jarú moc, ale i smrti temnú noc. :]"
                        ],
                        [
                            "4. Rýchlosťou vtáka letí čas. Kto jeho moci odolá? ",
                            "[: Vyhasnúť musí žitia jas, keď prísne „Dosť!“ on zavolá. :]"
                        ],
                        [
                            "5. Rýchlosťou vtáka letí čas, zo zeme preč on nesie nás. ",
                            "[: Nič to, veď až raz zaletíš, čaká ťa večná blaha ríš! :]"
                        ]
                    ]
                },
                {
                    "name": "Amen",
                    "number": 484,
                    "lang": "sk",
                    "url": "amen",
                    "author": "",
                    "verses": [
                        [
                            "Amen! Amen! Amen! Amen!"
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

