/*http://api.gios.gov.pl/pjp-api/rest/station/findAll */

const data1 = [
  {
    id: 114,
    stationName: "Wrocław - Bartnicza",
    gegrLat: "51.115933",
    gegrLon: "17.141125",
    city: {
      id: 1064,
      name: "Wrocław",
      commune: {
        communeName: "Wrocław",
        districtName: "Wrocław",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Bartnicza"
  },
  {
    id: 117,
    stationName: "Wrocław - Korzeniowskiego",
    gegrLat: "51.129378",
    gegrLon: "17.029250",
    city: {
      id: 1064,
      name: "Wrocław",
      commune: {
        communeName: "Wrocław",
        districtName: "Wrocław",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Wyb. J.Conrada-Korzeniowskiego 18"
  },
  {
    id: 129,
    stationName: "Wrocław - Wiśniowa",
    gegrLat: "51.086225",
    gegrLon: "17.012689",
    city: {
      id: 1064,
      name: "Wrocław",
      commune: {
        communeName: "Wrocław",
        districtName: "Wrocław",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "al. Wiśniowa/ul. Powst. Śląskich"
  },
  {
    id: 52,
    stationName: "Legnica - Rzeczypospolitej",
    gegrLat: "51.204503",
    gegrLon: "16.180513",
    city: {
      id: 453,
      name: "Legnica",
      commune: {
        communeName: "Legnica",
        districtName: "Legnica",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "al. Rzeczypospolitej 10/12"
  },
  {
    id: 109,
    stationName: "Wałbrzych - Wysockiego",
    gegrLat: "50.768729",
    gegrLon: "16.269677",
    city: {
      id: 998,
      name: "Wałbrzych",
      commune: {
        communeName: "Wałbrzych",
        districtName: "Wałbrzych",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Wysockiego 11"
  },
  {
    id: 11,
    stationName: "Czerniawa",
    gegrLat: "50.912475",
    gegrLon: "15.312190",
    city: {
      id: 142,
      name: "Czerniawa",
      commune: {
        communeName: "Świeradów-Zdrój",
        districtName: "lubański",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Strażacka 7"
  },
  {
    id: 14,
    stationName: "Działoszyn",
    gegrLat: "50.972167",
    gegrLon: "14.941319",
    city: {
      id: 192,
      name: "Działoszyn",
      commune: {
        communeName: "Bogatynia",
        districtName: "zgorzelecki",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 16,
    stationName: "Dzierżoniów - Piłsudskiego",
    gegrLat: "50.732817",
    gegrLon: "16.648050",
    city: {
      id: 198,
      name: "Dzierżoniów",
      commune: {
        communeName: "Dzierżoniów",
        districtName: "dzierżoniowski",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Piłsudskiego 26"
  },
  {
    id: 38,
    stationName: "Kłodzko - Szkolna",
    gegrLat: "50.433493",
    gegrLon: "16.653660",
    city: {
      id: 368,
      name: "Kłodzko",
      commune: {
        communeName: "Kłodzko",
        districtName: "kłodzki",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Szkolna 8"
  },
  {
    id: 67,
    stationName: "Nowa Ruda - Srebrna",
    gegrLat: "50.579914",
    gegrLon: "16.514422",
    city: {
      id: 602,
      name: "Nowa Ruda",
      commune: {
        communeName: "Nowa Ruda",
        districtName: "kłodzki",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Srebrna 1a"
  },
  {
    id: 70,
    stationName: "Oława - Żołnierzy AK",
    gegrLat: "50.942073",
    gegrLon: "17.291333",
    city: {
      id: 642,
      name: "Oława",
      commune: {
        communeName: "Oława",
        districtName: "oławski",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Żołnierzy AK 9"
  },
  {
    id: 74,
    stationName: "Osieczów",
    gegrLat: "51.317630",
    gegrLon: "15.431719",
    city: {
      id: 648,
      name: "Osieczów",
      commune: {
        communeName: "Osiecznica",
        districtName: "bolesławiecki",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 84,
    stationName: "Śnieżka",
    gegrLat: "50.736389",
    gegrLon: "15.739722",
    city: {
      id: 346,
      name: "Karpacz",
      commune: {
        communeName: "Karpacz",
        districtName: "jeleniogórski",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "Śnieżka"
  },
  {
    id: 132,
    stationName: "Ząbkowice Śląskie",
    gegrLat: "50.592325",
    gegrLon: "16.819786",
    city: {
      id: 1090,
      name: "Ząbkowice Śląskie",
      commune: {
        communeName: "Ząbkowice Śląskie",
        districtName: "ząbkowicki",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Powstańców Warszawy 5"
  },
  {
    id: 134,
    stationName: "Zgorzelec - Bohaterów Getta",
    gegrLat: "51.150391",
    gegrLon: "15.008175",
    city: {
      id: 1101,
      name: "Zgorzelec",
      commune: {
        communeName: "Zgorzelec",
        districtName: "zgorzelecki",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Bohaterów Getta 1a"
  },
  {
    id: 9153,
    stationName: "Jelenia Góra - Ogińskiego",
    gegrLat: "50.913433",
    gegrLon: "15.765608",
    city: {
      id: 319,
      name: "Jelenia Góra",
      commune: {
        communeName: "Jelenia Góra",
        districtName: "Jelenia Góra",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "ul. Ogińskiego 6"
  },
  {
    id: 10007,
    stationName: "Lądek-Zdrój",
    gegrLat: "50.341864",
    gegrLon: "16.889899",
    city: {
      id: 450,
      name: "Lądek-Zdrój",
      commune: {
        communeName: "Lądek-Zdrój",
        districtName: "kłodzki",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "Św. Królowej Jadwigi"
  },
  {
    id: 10008,
    stationName: "Lubań",
    gegrLat: "51.118412",
    gegrLon: "15.285835",
    city: {
      id: 482,
      name: "Lubań",
      commune: {
        communeName: "Lubań",
        districtName: "lubański",
        provinceName: "DOLNOŚLĄSKIE"
      }
    },
    addressStreet: "Łączna"
  },
  {
    id: 156,
    stationName: "Bydgoszcz Plac Poznański",
    gegrLat: "53.121764",
    gegrLon: "17.987906",
    city: {
      id: 90,
      name: "Bydgoszcz",
      commune: {
        communeName: "Bydgoszcz",
        districtName: "Bydgoszcz",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: "Plac Poznański"
  },
  {
    id: 158,
    stationName: "Bydgoszcz Warszawska",
    gegrLat: "53.134083",
    gegrLon: "17.995708",
    city: {
      id: 90,
      name: "Bydgoszcz",
      commune: {
        communeName: "Bydgoszcz",
        districtName: "Bydgoszcz",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: "ul. Warszawska 10"
  },
  {
    id: 295,
    stationName: "Łódź-Widzew",
    gegrLat: "51.758050",
    gegrLon: "19.529786",
    city: {
      id: 516,
      name: "Łódź",
      commune: {
        communeName: "Łódź",
        districtName: "Łódź",
        provinceName: "ŁÓDZKIE"
      }
    },
    addressStreet: "ul. Czernika 1/3"
  },
  {
    id: 296,
    stationName: "Łódź-Gdańska 16",
    gegrLat: "51.775411",
    gegrLon: "19.450900",
    city: {
      id: 516,
      name: "Łódź",
      commune: {
        communeName: "Łódź",
        districtName: "Łódź",
        provinceName: "ŁÓDZKIE"
      }
    },
    addressStreet: "ul. Gdańska 16"
  },
  {
    id: 314,
    stationName: "Pabianice-Polfa",
    gegrLat: "51.667981",
    gegrLon: "19.368683",
    city: {
      id: 667,
      name: "Pabianice",
      commune: {
        communeName: "Pabianice",
        districtName: "pabianicki",
        provinceName: "ŁÓDZKIE"
      }
    },
    addressStreet: "ul. Konstantynowska"
  },
  {
    id: 355,
    stationName: "Zgierz-Śródmieście",
    gegrLat: "51.856692",
    gegrLon: "19.421231",
    city: {
      id: 1100,
      name: "Zgierz",
      commune: {
        communeName: "Zgierz",
        districtName: "zgierski",
        provinceName: "ŁÓDZKIE"
      }
    },
    addressStreet: "ul. Mielczarskiego 1"
  },
  {
    id: 10058,
    stationName: "Łódź-Jana Pawła II 15",
    gegrLat: "51.754613",
    gegrLon: "19.434925",
    city: {
      id: 516,
      name: "Łódź",
      commune: {
        communeName: "Łódź",
        districtName: "Łódź",
        provinceName: "ŁÓDZKIE"
      }
    },
    addressStreet: "al. Jana Pawła II 15"
  },
  {
    id: 291,
    stationName: "Gajew",
    gegrLat: "52.143250",
    gegrLon: "19.233225",
    city: {
      id: 209,
      name: "Gajew",
      commune: {
        communeName: "Witonia",
        districtName: "łęczycki",
        provinceName: "ŁÓDZKIE"
      }
    },
    addressStreet: "Ujęcie wody"
  },
  {
    id: 319,
    stationName: "Parzniewice",
    gegrLat: "51.291175",
    gegrLon: "19.517556",
    city: {
      id: 673,
      name: "Parzniewice",
      commune: {
        communeName: "Wola Krzysztoporska",
        districtName: "piotrkowski",
        provinceName: "ŁÓDZKIE"
      }
    },
    addressStreet: "Ujęcie wody"
  },
  {
    id: 322,
    stationName: "Piotrków Tryb.-Krakowskie Przedmieście",
    gegrLat: "51.404406",
    gegrLon: "19.696956",
    city: {
      id: 703,
      name: "Piotrków Trybunalski",
      commune: {
        communeName: "Piotrków Trybunalski",
        districtName: "Piotrków Trybunalski",
        provinceName: "ŁÓDZKIE"
      }
    },
    addressStreet: "ul. Krakowskie Przedmieście 13"
  },
  {
    id: 331,
    stationName: "Radomsko-Rolna2",
    gegrLat: "51.067439",
    gegrLon: "19.448694",
    city: {
      id: 773,
      name: "Radomsko",
      commune: {
        communeName: "Radomsko",
        districtName: "radomszczański",
        provinceName: "ŁÓDZKIE"
      }
    },
    addressStreet: "ul. Rolna 2"
  },
  {
    id: 562,
    stationName: "Żyrardów-Roosevelta",
    gegrLat: "52.053811",
    gegrLon: "20.429892",
    city: {
      id: 1130,
      name: "Żyrardów",
      commune: {
        communeName: "Żyrardów",
        districtName: "żyrardowski",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Roosevelta 2"
  },
  {
    id: 9913,
    stationName: "Guty Duże",
    gegrLat: "52.943172",
    gegrLon: "21.288167",
    city: {
      id: 2181,
      name: "Guty Duże",
      commune: {
        communeName: "Czerwonka",
        districtName: "makowski",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "Guty Duże 4"
  },
  {
    id: 10434,
    stationName: "Konstancin-Jeziorna-Wierzejewskiego",
    gegrLat: "52.080625",
    gegrLon: "21.111186",
    city: {
      id: 395,
      name: "Konstancin-Jeziorna",
      commune: {
        communeName: "Konstancin-Jeziorna",
        districtName: "piaseczyński",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "Wierzejewskiego 12"
  },
  {
    id: 590,
    stationName: "Opole manualna 4",
    gegrLat: "50.676856",
    gegrLon: "17.950278",
    city: {
      id: 645,
      name: "Opole",
      commune: {
        communeName: "Opole",
        districtName: "Opole",
        provinceName: "OPOLSKIE"
      }
    },
    addressStreet: "os. Armii Krajowej"
  },
  {
    id: 10374,
    stationName: "Opole automat 5",
    gegrLat: "50.666736",
    gegrLon: "17.899137",
    city: {
      id: 645,
      name: "Opole",
      commune: {
        communeName: "Opole",
        districtName: "Opole",
        provinceName: "OPOLSKIE"
      }
    },
    addressStreet: "ul. Koszyka"
  },
  {
    id: 568,
    stationName: "K-Koźle automat 1",
    gegrLat: "50.349608",
    gegrLon: "18.236575",
    city: {
      id: 355,
      name: "Kędzierzyn-Koźle",
      commune: {
        communeName: "Kędzierzyn-Koźle",
        districtName: "kędzierzyńsko-kozielski",
        provinceName: "OPOLSKIE"
      }
    },
    addressStreet: "ul. Bolesława Śmiałego 5"
  },
  {
    id: 584,
    stationName: "Olesno automat 4",
    gegrLat: "50.876983",
    gegrLon: "18.416878",
    city: {
      id: 636,
      name: "Olesno",
      commune: {
        communeName: "Olesno",
        districtName: "oleski",
        provinceName: "OPOLSKIE"
      }
    },
    addressStreet: "ul. Słowackiego"
  },
  {
    id: 600,
    stationName: "Zdzieszowice automat 2",
    gegrLat: "50.423533",
    gegrLon: "18.120739",
    city: {
      id: 1097,
      name: "Zdzieszowice",
      commune: {
        communeName: "Zdzieszowice",
        districtName: "krapkowicki",
        provinceName: "OPOLSKIE"
      }
    },
    addressStreet: "ul. Piastów 6"
  },
  {
    id: 671,
    stationName: "Rzeszów-Nowe Miasto",
    gegrLat: "50.024242",
    gegrLon: "22.010575",
    city: {
      id: 810,
      name: "Rzeszów",
      commune: {
        communeName: "Rzeszów",
        districtName: "Rzeszów",
        provinceName: "PODKARPACKIE"
      }
    },
    addressStreet: "Rejtana"
  },
  {
    id: 638,
    stationName: "Jaslo-Sikorskiego-WIOS",
    gegrLat: "49.744886",
    gegrLon: "21.454617",
    city: {
      id: 306,
      name: "Jasło",
      commune: {
        communeName: "Jasło",
        districtName: "jasielski",
        provinceName: "PODKARPACKIE"
      }
    },
    addressStreet: "Sikorskiego"
  },
  {
    id: 659,
    stationName: "Nisko-Szklarniowa-WIOS",
    gegrLat: "50.529892",
    gegrLon: "22.112467",
    city: {
      id: 600,
      name: "Nisko",
      commune: {
        communeName: "Nisko",
        districtName: "niżański",
        provinceName: "PODKARPACKIE"
      }
    },
    addressStreet: "Szklarniowa"
  },
  {
    id: 665,
    stationName: "Przemysl-Grunwaldzka-WIOS",
    gegrLat: "49.784339",
    gegrLon: "22.756239",
    city: {
      id: 748,
      name: "Przemyśl",
      commune: {
        communeName: "Przemyśl",
        districtName: "Przemyśl",
        provinceName: "PODKARPACKIE"
      }
    },
    addressStreet: "Grunwaldzka"
  },
  {
    id: 870,
    stationName: "WIOŚ Gołdap ul. Jaćwieska",
    gegrLat: "54.305908",
    gegrLon: "22.307681",
    city: {
      id: 241,
      name: "Gołdap",
      commune: {
        communeName: "Gołdap",
        districtName: "gołdapski",
        provinceName: "WARMIŃSKO-MAZURSKIE"
      }
    },
    addressStreet: "ul. Jaćwieska 15"
  },
  {
    id: 882,
    stationName: "KMŚ Puszcza Borecka",
    gegrLat: "54.124819",
    gegrLon: "22.038056",
    city: {
      id: 167,
      name: "Diabla Góra",
      commune: {
        communeName: "Kruklanki",
        districtName: "giżycki",
        provinceName: "WARMIŃSKO-MAZURSKIE"
      }
    },
    addressStreet: "Diabla Góra"
  },
  {
    id: 10005,
    stationName: "WIOŚ Ełk",
    gegrLat: "53.828455",
    gegrLon: "22.348450",
    city: {
      id: 203,
      name: "Ełk",
      commune: {
        communeName: "Ełk",
        districtName: "ełcki",
        provinceName: "WARMIŃSKO-MAZURSKIE"
      }
    },
    addressStreet: "Piłsudskiego 27"
  },
  {
    id: 10030,
    stationName: "WIOŚ Ostróda Piłsudskiego",
    gegrLat: "53.694628",
    gegrLon: "19.968892",
    city: {
      id: 657,
      name: "Ostróda",
      commune: {
        communeName: "Ostróda",
        districtName: "ostródzki",
        provinceName: "WARMIŃSKO-MAZURSKIE"
      }
    },
    addressStreet: "Piłsudskiego 4"
  },
  {
    id: 943,
    stationName: "Poznan-Polanka",
    gegrLat: "52.398175",
    gegrLon: "16.959519",
    city: {
      id: 729,
      name: "Poznań",
      commune: {
        communeName: "Poznań",
        districtName: "Poznań",
        provinceName: "WIELKOPOLSKIE"
      }
    },
    addressStreet: "ul. Polanka"
  },
  {
    id: 944,
    stationName: "Poznan-Dabrowskiego",
    gegrLat: "52.420319",
    gegrLon: "16.877289",
    city: {
      id: 729,
      name: "Poznań",
      commune: {
        communeName: "Poznań",
        districtName: "Poznań",
        provinceName: "WIELKOPOLSKIE"
      }
    },
    addressStreet: "ul. Dąbrowskiego 169"
  },
  {
    id: 952,
    stationName: "Kalisz-Wyszynskiego",
    gegrLat: "51.749053",
    gegrLon: "18.048389",
    city: {
      id: 336,
      name: "Kalisz",
      commune: {
        communeName: "Kalisz",
        districtName: "Kalisz",
        provinceName: "WIELKOPOLSKIE"
      }
    },
    addressStreet: "ul. Hanki Sawickiej"
  },
  {
    id: 902,
    stationName: "Konin-Wyszynskiego",
    gegrLat: "52.225633",
    gegrLon: "18.269036",
    city: {
      id: 393,
      name: "Konin",
      commune: {
        communeName: "Konin",
        districtName: "Konin",
        provinceName: "WIELKOPOLSKIE"
      }
    },
    addressStreet: "ul. Wyszyńskiego 3"
  },
  {
    id: 920,
    stationName: "Pila, ul. Kusocinkiego",
    gegrLat: "53.154408",
    gegrLon: "16.759572",
    city: {
      id: 699,
      name: "Piła",
      commune: {
        communeName: "Piła",
        districtName: "pilski",
        provinceName: "WIELKOPOLSKIE"
      }
    },
    addressStreet: "ul. Kusocińskiego"
  },
  {
    id: 946,
    stationName: "Piaski-Krzyzowka",
    gegrLat: "52.501389",
    gegrLon: "17.773464",
    city: {
      id: 441,
      name: "Krzyżówka",
      commune: {
        communeName: "Witkowo",
        districtName: "gnieźnieński",
        provinceName: "WIELKOPOLSKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 950,
    stationName: "Borowiec-Drapalka",
    gegrLat: "52.276794",
    gegrLon: "17.074114",
    city: {
      id: 62,
      name: "Borówiec",
      commune: {
        communeName: "Kórnik",
        districtName: "poznański",
        provinceName: "WIELKOPOLSKIE"
      }
    },
    addressStreet: "ul. Drapałka 4"
  },
  {
    id: 10834,
    stationName: "Kozieglowy-os.Lesne",
    gegrLat: "52.449331",
    gegrLon: "16.999683",
    city: {
      id: 2163,
      name: "Koziegłowy",
      commune: {
        communeName: "Czerwonak",
        districtName: "poznański",
        provinceName: "WIELKOPOLSKIE"
      }
    },
    addressStreet: "osiedle Leśne 22"
  },
  {
    id: 986,
    stationName: "Szczecin_Andrzejewskiego",
    gegrLat: "53.380975",
    gegrLon: "14.663347",
    city: {
      id: 917,
      name: "Szczecin",
      commune: {
        communeName: "Szczecin",
        districtName: "Szczecin",
        provinceName: "ZACHODNIOPOMORSKIE"
      }
    },
    addressStreet: "ul. Andrzejewskiego 23"
  },
  {
    id: 987,
    stationName: "Szczecin_Piłsudskiego",
    gegrLat: "53.432169",
    gegrLon: "14.553900",
    city: {
      id: 917,
      name: "Szczecin",
      commune: {
        communeName: "Szczecin",
        districtName: "Szczecin",
        provinceName: "ZACHODNIOPOMORSKIE"
      }
    },
    addressStreet: "ul. Piłsudskiego 1"
  },
  {
    id: 989,
    stationName: "Szczecin_Łączna",
    gegrLat: "53.470889",
    gegrLon: "14.556250",
    city: {
      id: 917,
      name: "Szczecin",
      commune: {
        communeName: "Szczecin",
        districtName: "Szczecin",
        provinceName: "ZACHODNIOPOMORSKIE"
      }
    },
    addressStreet: "ul. Łączna"
  },
  {
    id: 966,
    stationName: "Koszalin_ArmiiKrajowej",
    gegrLat: "54.193986",
    gegrLon: "16.172544",
    city: {
      id: 402,
      name: "Koszalin",
      commune: {
        communeName: "Koszalin",
        districtName: "Koszalin",
        provinceName: "ZACHODNIOPOMORSKIE"
      }
    },
    addressStreet: "ul. Armii Krajowej"
  },
  {
    id: 961,
    stationName: "Widuchowa",
    gegrLat: "53.122325",
    gegrLon: "14.382222",
    city: {
      id: 1025,
      name: "Widuchowa",
      commune: {
        communeName: "Widuchowa",
        districtName: "gryfiński",
        provinceName: "ZACHODNIOPOMORSKIE"
      }
    },
    addressStreet: "ul. Bulwary Rybackie 1"
  },
  {
    id: 983,
    stationName: "Szczecinek_Przemysłowa",
    gegrLat: "53.698900",
    gegrLon: "16.704572",
    city: {
      id: 918,
      name: "Szczecinek",
      commune: {
        communeName: "Szczecinek",
        districtName: "szczecinecki",
        provinceName: "ZACHODNIOPOMORSKIE"
      }
    },
    addressStreet: "ul. Przemysłowa 5"
  },
  {
    id: 805,
    stationName: "Dąbrowa Górnicza, ul. Tysiąclecia 25a",
    gegrLat: "50.329111",
    gegrLon: "19.231222",
    city: {
      id: 157,
      name: "Dąbrowa Górnicza",
      commune: {
        communeName: "Dąbrowa Górnicza",
        districtName: "Dąbrowa Górnicza",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. 1000-lecia 25 a"
  },
  {
    id: 809,
    stationName: "Gliwice, ul. Mewy 34",
    gegrLat: "50.279333",
    gegrLon: "18.655764",
    city: {
      id: 221,
      name: "Gliwice",
      commune: {
        communeName: "Gliwice",
        districtName: "Gliwice",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Mewy 34"
  },
  {
    id: 813,
    stationName: "Katowice, ul. Plebiscytowa/A4",
    gegrLat: "50.246795",
    gegrLon: "19.019469",
    city: {
      id: 350,
      name: "Katowice",
      commune: {
        communeName: "Katowice",
        districtName: "Katowice",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "al. Górnośląska"
  },
  {
    id: 814,
    stationName: "Katowice, ul. Kossutha 6",
    gegrLat: "50.264611",
    gegrLon: "18.975028",
    city: {
      id: 350,
      name: "Katowice",
      commune: {
        communeName: "Katowice",
        districtName: "Katowice",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Kossutha 6"
  },
  {
    id: 837,
    stationName: "Sosnowiec, ul. Lubelska 51",
    gegrLat: "50.285956",
    gegrLon: "19.184399",
    city: {
      id: 862,
      name: "Sosnowiec",
      commune: {
        communeName: "Sosnowiec",
        districtName: "Sosnowiec",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Lubelska 51"
  },
  {
    id: 841,
    stationName: "Tychy, ul. Tołstoja 1",
    gegrLat: "50.099903",
    gegrLon: "18.990236",
    city: {
      id: 988,
      name: "Tychy",
      commune: {
        communeName: "Tychy",
        districtName: "Tychy",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Tołstoja 1"
  },
  {
    id: 848,
    stationName: "Zabrze, ul. M. Curie-Skłodowskiej 34",
    gegrLat: "50.3165",
    gegrLon: "18.772375",
    city: {
      id: 1073,
      name: "Zabrze",
      commune: {
        communeName: "Zabrze",
        districtName: "Zabrze",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. M. Skłodowskiej-Curie 34"
  },
  {
    id: 834,
    stationName: "Rybnik, ul. Borki 37 d",
    gegrLat: "50.111181",
    gegrLon: "18.516139",
    city: {
      id: 804,
      name: "Rybnik",
      commune: {
        communeName: "Rybnik",
        districtName: "Rybnik",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Borki 37 d"
  },
  {
    id: 10554,
    stationName: "Żory, Os. Gen. Władysława Sikorskiego 52_(2)",
    gegrLat: "50.029416",
    gegrLon: "18.689527",
    city: {
      id: 1123,
      name: "Żory",
      commune: {
        communeName: "Żory",
        districtName: "Żory",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Sikorskiego 52"
  },
  {
    id: 789,
    stationName: "Bielsko-Biała, ul. Kossak-Szczuckiej 19",
    gegrLat: "49.813464",
    gegrLon: "19.027318",
    city: {
      id: 41,
      name: "Bielsko-Biała",
      commune: {
        communeName: "Bielsko-Biała",
        districtName: "Bielsko-Biała",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Kossak-Szczuckiej"
  },
  {
    id: 10158,
    stationName: "Bielsko-Biała, ul.Partyzantów",
    gegrLat: "49.802075",
    gegrLon: "19.048610",
    city: {
      id: 41,
      name: "Bielsko-Biała",
      commune: {
        communeName: "Bielsko-Biała",
        districtName: "Bielsko-Biała",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Partyzantów"
  },
  {
    id: 798,
    stationName: "Częstochowa, ul. AK/Jana Pawła II",
    gegrLat: "50.817676",
    gegrLon: "19.117426",
    city: {
      id: 146,
      name: "Częstochowa",
      commune: {
        communeName: "Częstochowa",
        districtName: "Częstochowa",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Armii Krajowej 2"
  },
  {
    id: 800,
    stationName: "Częstochowa, ul. Baczyńskiego 2",
    gegrLat: "50.836389",
    gegrLon: "19.130111",
    city: {
      id: 146,
      name: "Częstochowa",
      commune: {
        communeName: "Częstochowa",
        districtName: "Częstochowa",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Baczyńskiego 2"
  },
  {
    id: 795,
    stationName: "Cieszyn, ul. Mickiewicza 13",
    gegrLat: "49.738136",
    gegrLon: "18.639069",
    city: {
      id: 124,
      name: "Cieszyn",
      commune: {
        communeName: "Cieszyn",
        districtName: "cieszyński",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Mickiewicza 13"
  },
  {
    id: 842,
    stationName: "Ustroń, ul. Sanatoryjna 7",
    gegrLat: "49.719731",
    gegrLon: "18.826722",
    city: {
      id: 993,
      name: "Ustroń",
      commune: {
        communeName: "Ustroń",
        districtName: "cieszyński",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Sanatoryjna 7"
  },
  {
    id: 845,
    stationName: "Wodzisław Śląski, ul. Gałczyńskiego 1",
    gegrLat: "50.007629",
    gegrLon: "18.455548",
    city: {
      id: 1050,
      name: "Wodzisław Śląski",
      commune: {
        communeName: "Wodzisław Śląski",
        districtName: "wodzisławski",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Gałczyńskiego 1"
  },
  {
    id: 853,
    stationName: "Złoty Potok, Leśniczówka",
    gegrLat: "50.710889",
    gegrLon: "19.458797",
    city: {
      id: 1111,
      name: "Złoty Potok",
      commune: {
        communeName: "Janów",
        districtName: "częstochowski",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "Leśniczówka Kamienna Góra"
  },
  {
    id: 856,
    stationName: "Żywiec, ul. Kopernika  83 a",
    gegrLat: "49.671602",
    gegrLon: "19.234446",
    city: {
      id: 1131,
      name: "Żywiec",
      commune: {
        communeName: "Żywiec",
        districtName: "żywiecki",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Kopernika 83 a"
  },
  {
    id: 9000,
    stationName: "Czerwionka-Leszczyny, ul. Kopalniana",
    gegrLat: "50.16385",
    gegrLon: "18.659977",
    city: {
      id: 145,
      name: "Czerwionka-Leszczyny",
      commune: {
        communeName: "Czerwionka-Leszczyny",
        districtName: "rybnicki",
        provinceName: "ŚLĄSKIE"
      }
    },
    addressStreet: "ul. Kopalniana"
  },
  {
    id: 11195,
    stationName: "Kielce, ul. Targowa",
    gegrLat: "50.878998",
    gegrLon: "20.633692",
    city: {
      id: 360,
      name: "Kielce",
      commune: {
        communeName: "Kielce",
        districtName: "Kielce",
        provinceName: "ŚWIĘTOKRZYSKIE"
      }
    },
    addressStreet: "ul. Targowa 3"
  },
  {
    id: 769,
    stationName: "Nowiny, ul. Parkowa",
    gegrLat: "50.823108",
    gegrLon: "20.533506",
    city: {
      id: 616,
      name: "Nowiny",
      commune: {
        communeName: "Sitkówka-Nowiny",
        districtName: "kielecki",
        provinceName: "ŚWIĘTOKRZYSKIE"
      }
    },
    addressStreet: "ul. Parkowa"
  },
  {
    id: 778,
    stationName: "Połaniec, ul. Ruszczańska",
    gegrLat: "50.429014",
    gegrLon: "21.277367",
    city: {
      id: 723,
      name: "Połaniec",
      commune: {
        communeName: "Połaniec",
        districtName: "staszowski",
        provinceName: "ŚWIĘTOKRZYSKIE"
      }
    },
    addressStreet: "ul. Ruszczańska 23"
  },
  {
    id: 785,
    stationName: "Starachowice, ul. Złota",
    gegrLat: "51.050611",
    gegrLon: "21.084175",
    city: {
      id: 872,
      name: "Starachowice",
      commune: {
        communeName: "Starachowice",
        districtName: "starachowicki",
        provinceName: "ŚWIĘTOKRZYSKIE"
      }
    },
    addressStreet: "ul. Złota"
  },
  {
    id: 10441,
    stationName: "Końskie, MOBILNA",
    gegrLat: "51.189524",
    gegrLon: "20.408892",
    city: {
      id: 397,
      name: "Końskie",
      commune: {
        communeName: "Końskie",
        districtName: "konecki",
        provinceName: "ŚWIĘTOKRZYSKIE"
      }
    },
    addressStreet: "ul. ks. Józefa Granata"
  },
  {
    id: 10794,
    stationName: "Małogoszcz, ul. Słoneczna",
    gegrLat: "50.809563",
    gegrLon: "20.266099",
    city: {
      id: 531,
      name: "Małogoszcz",
      commune: {
        communeName: "Małogoszcz",
        districtName: "jędrzejowski",
        provinceName: "ŚWIĘTOKRZYSKIE"
      }
    },
    addressStreet: "ul. Słoneczna 18"
  },
  {
    id: 877,
    stationName: "WIOŚ Olsztyn ul. Puszkina",
    gegrLat: "53.789233",
    gegrLon: "20.486075",
    city: {
      id: 639,
      name: "Olsztyn",
      commune: {
        communeName: "Olsztyn",
        districtName: "Olsztyn",
        provinceName: "WARMIŃSKO-MAZURSKIE"
      }
    },
    addressStreet: "ul. Puszkina 16"
  },
  {
    id: 861,
    stationName: "WIOŚ Elbląg ul. Bażyńskiego",
    gegrLat: "54.167847",
    gegrLon: "19.410942",
    city: {
      id: 202,
      name: "Elbląg",
      commune: {
        communeName: "Elbląg",
        districtName: "Elbląg",
        provinceName: "WARMIŃSKO-MAZURSKIE"
      }
    },
    addressStreet: "ul. Bażyńskiego 6"
  },
  {
    id: 400,
    stationName: "Kraków, Aleja Krasińskiego",
    gegrLat: "50.057678",
    gegrLon: "19.926189",
    city: {
      id: 415,
      name: "Kraków",
      commune: {
        communeName: "Kraków",
        districtName: "Kraków",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "al. Krasińskiego"
  },
  {
    id: 401,
    stationName: "Kraków, ul. Bujaka",
    gegrLat: "50.010575",
    gegrLon: "19.949189",
    city: {
      id: 415,
      name: "Kraków",
      commune: {
        communeName: "Kraków",
        districtName: "Kraków",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "ul. Bujaka"
  },
  {
    id: 402,
    stationName: "Kraków, ul. Bulwarowa",
    gegrLat: "50.069308",
    gegrLon: "20.053492",
    city: {
      id: 415,
      name: "Kraków",
      commune: {
        communeName: "Kraków",
        districtName: "Kraków",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "ul. Bulwarowa"
  },
  {
    id: 10121,
    stationName: "Kraków, ul. Dietla",
    gegrLat: "50.057447",
    gegrLon: "19.946008",
    city: {
      id: 415,
      name: "Kraków",
      commune: {
        communeName: "Kraków",
        districtName: "Kraków",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "ul. Dietla"
  },
  {
    id: 10123,
    stationName: "Kraków, ul. Złoty Róg",
    gegrLat: "50.081197",
    gegrLon: "19.895358",
    city: {
      id: 415,
      name: "Kraków",
      commune: {
        communeName: "Kraków",
        districtName: "Kraków",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "Złoty Róg"
  },
  {
    id: 10139,
    stationName: "Kraków, os. Piastów",
    gegrLat: "50.098508",
    gegrLon: "20.018269",
    city: {
      id: 415,
      name: "Kraków",
      commune: {
        communeName: "Kraków",
        districtName: "Kraków",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "os. Piastów"
  },
  {
    id: 10447,
    stationName: "Kraków, os. Wadów",
    gegrLat: "50.100569",
    gegrLon: "20.122561",
    city: {
      id: 415,
      name: "Kraków",
      commune: {
        communeName: "Kraków",
        districtName: "Kraków",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "Wadów"
  },
  {
    id: 444,
    stationName: "Tarnów, ul. Bitwy pod Studziankami",
    gegrLat: "50.020169",
    gegrLon: "21.004167",
    city: {
      id: 958,
      name: "Tarnów",
      commune: {
        communeName: "Tarnów",
        districtName: "Tarnów",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "ul. Bitwy pod Studziankami"
  },
  {
    id: 10120,
    stationName: "Tarnów, ul. Ks. Romana Sitko",
    gegrLat: "50.018253",
    gegrLon: "20.992578",
    city: {
      id: 958,
      name: "Tarnów",
      commune: {
        communeName: "Tarnów",
        districtName: "Tarnów",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "ul. Ks. Romana Sitko"
  },
  {
    id: 426,
    stationName: "Nowy Sącz, ul. Nadbrzeżna",
    gegrLat: "49.619281",
    gegrLon: "20.714403",
    city: {
      id: 623,
      name: "Nowy Sącz",
      commune: {
        communeName: "Nowy Sącz",
        districtName: "Nowy Sącz",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "ul. Nadbrzeżna"
  },
  {
    id: 9175,
    stationName: "Krempna-MPN-WIOS",
    gegrLat: "49.511297",
    gegrLon: "21.498606",
    city: {
      id: 421,
      name: "Krempna",
      commune: {
        communeName: "Krempna",
        districtName: "jasielski",
        provinceName: "PODKARPACKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 10414,
    stationName: "Rymanów-Zdrój-Samorząd",
    gegrLat: "49.546539",
    gegrLon: "21.851006",
    city: {
      id: 805,
      name: "Rymanów-Zdrój",
      commune: {
        communeName: "Rymanów",
        districtName: "krośnieński",
        provinceName: "PODKARPACKIE"
      }
    },
    addressStreet: "Parkowa 5"
  },
  {
    id: 10438,
    stationName: "Mielec-Biernackiego-WIOS",
    gegrLat: "50.299128",
    gegrLon: "21.440942",
    city: {
      id: 548,
      name: "Mielec",
      commune: {
        communeName: "Mielec",
        districtName: "mielecki",
        provinceName: "PODKARPACKIE"
      }
    },
    addressStreet: "Biernackiego"
  },
  {
    id: 605,
    stationName: "Białystok-Miejska",
    gegrLat: "53.126689",
    gegrLon: "23.155869",
    city: {
      id: 35,
      name: "Białystok",
      commune: {
        communeName: "Białystok",
        districtName: "Białystok",
        provinceName: "PODLASKIE"
      }
    },
    addressStreet: "ul. Waszyngtona 16"
  },
  {
    id: 609,
    stationName: "Białystok-Warszawska",
    gegrLat: "53.129306",
    gegrLon: "23.181744",
    city: {
      id: 35,
      name: "Białystok",
      commune: {
        communeName: "Białystok",
        districtName: "Białystok",
        provinceName: "PODLASKIE"
      }
    },
    addressStreet: "ul. Warszawska 75 A"
  },
  {
    id: 612,
    stationName: "Borsukowizna-Wiejska",
    gegrLat: "53.215492",
    gegrLon: "23.642153",
    city: {
      id: 63,
      name: "Borsukowizna",
      commune: {
        communeName: "Krynki",
        districtName: "sokólski",
        provinceName: "PODLASKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 618,
    stationName: "Lomza Sikorskiego 48/94",
    gegrLat: "53.181394",
    gegrLon: "22.054381",
    city: {
      id: 513,
      name: "Łomża",
      commune: {
        communeName: "Łomża",
        districtName: "Łomża",
        provinceName: "PODLASKIE"
      }
    },
    addressStreet: "ul. Sikorskiego 48/94"
  },
  {
    id: 10054,
    stationName: "Augustów - mobilne ",
    gegrLat: "53.859528",
    gegrLon: "23.000750",
    city: {
      id: 8,
      name: "Augustów",
      commune: {
        communeName: "Augustów",
        districtName: "augustowski",
        provinceName: "PODLASKIE"
      }
    },
    addressStreet: "ul. Zdrojowa"
  },
  {
    id: 729,
    stationName: "AM1 Gdańsk Śródmieście",
    gegrLat: "54.353336",
    gegrLon: "18.635283",
    city: {
      id: 218,
      name: "Gdańsk",
      commune: {
        communeName: "Gdańsk",
        districtName: "Gdańsk",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Powstańców Warszawskich"
  },
  {
    id: 730,
    stationName: "AM2 Gdańsk Stogi",
    gegrLat: "54.367778",
    gegrLon: "18.701111",
    city: {
      id: 218,
      name: "Gdańsk",
      commune: {
        communeName: "Gdańsk",
        districtName: "Gdańsk",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Kaczeńce"
  },
  {
    id: 731,
    stationName: "AM3 Gdańsk Nowy Port",
    gegrLat: "54.400833",
    gegrLon: "18.657497",
    city: {
      id: 218,
      name: "Gdańsk",
      commune: {
        communeName: "Gdańsk",
        districtName: "Gdańsk",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Wyzwolenia"
  },
  {
    id: 732,
    stationName: "AM4 Gdynia Pogórze",
    gegrLat: "54.560836",
    gegrLon: "18.493331",
    city: {
      id: 219,
      name: "Gdynia",
      commune: {
        communeName: "Gdynia",
        districtName: "Gdynia",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Porębskiego"
  },
  {
    id: 733,
    stationName: "AM5 Gdańsk Szadółki",
    gegrLat: "54.328336",
    gegrLon: "18.557781",
    city: {
      id: 218,
      name: "Gdańsk",
      commune: {
        communeName: "Gdańsk",
        districtName: "Gdańsk",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Ostrzycka"
  },
  {
    id: 734,
    stationName: "AM6 Sopot",
    gegrLat: "54.431667",
    gegrLon: "18.579722",
    city: {
      id: 861,
      name: "Sopot",
      commune: {
        communeName: "Sopot",
        districtName: "Sopot",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Bitwy pod Płowcami"
  },
  {
    id: 736,
    stationName: "AM8 Gdańsk Wrzeszcz",
    gegrLat: "54.380279",
    gegrLon: "18.620274",
    city: {
      id: 218,
      name: "Gdańsk",
      commune: {
        communeName: "Gdańsk",
        districtName: "Gdańsk",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Leczkowa"
  },
  {
    id: 738,
    stationName: "AM9 Gdynia Dąbrowa",
    gegrLat: "54.465758",
    gegrLon: "18.464911",
    city: {
      id: 219,
      name: "Gdynia",
      commune: {
        communeName: "Gdynia",
        districtName: "Gdynia",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Szafranowa"
  },
  {
    id: 739,
    stationName: "AM10 Gdynia Śródmieście",
    gegrLat: "54.525274",
    gegrLon: "18.536382",
    city: {
      id: 219,
      name: "Gdynia",
      commune: {
        communeName: "Gdynia",
        districtName: "Gdynia",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Wendy"
  },
  {
    id: 725,
    stationName: "AM11 Słupsk Kniaziewicza",
    gegrLat: "54.463611",
    gegrLon: "17.046722",
    city: {
      id: 846,
      name: "Słupsk",
      commune: {
        communeName: "Słupsk",
        districtName: "Słupsk",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Kniaziewicza 30"
  },
  {
    id: 740,
    stationName: "AM12 Kościerzyna Targowa",
    gegrLat: "54.120694",
    gegrLon: "17.975861",
    city: {
      id: 406,
      name: "Kościerzyna",
      commune: {
        communeName: "Kościerzyna",
        districtName: "kościerski",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Targowa"
  },
  {
    id: 741,
    stationName: "AM15 Malbork Mickiewicza",
    gegrLat: "54.031247",
    gegrLon: "19.032899",
    city: {
      id: 527,
      name: "Malbork",
      commune: {
        communeName: "Malbork",
        districtName: "malborski",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Mickiewicza"
  },
  {
    id: 742,
    stationName: "AM16 Lębork Malczewskiego",
    gegrLat: "54.546167",
    gegrLon: "17.746194",
    city: {
      id: 464,
      name: "Lębork",
      commune: {
        communeName: "Lębork",
        districtName: "lęborski",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: "ul. Malczewskiego"
  },
  {
    id: 743,
    stationName: "AM17 Liniewko Kościerskie",
    gegrLat: "54.104111",
    gegrLon: "18.182972",
    city: {
      id: 469,
      name: "Liniewko Kościerskie",
      commune: {
        communeName: "Nowa Karczma",
        districtName: "kościerski",
        provinceName: "POMORSKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 437,
    stationName: "Skawina, os. Ogrody",
    gegrLat: "49.971047",
    gegrLon: "19.830422",
    city: {
      id: 834,
      name: "Skawina",
      commune: {
        communeName: "Skawina",
        districtName: "krakowski",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "os. Ogrody"
  },
  {
    id: 443,
    stationName: "Szymbark",
    gegrLat: "49.633714",
    gegrLon: "21.116833",
    city: {
      id: 930,
      name: "Szymbark",
      commune: {
        communeName: "Gorlice",
        districtName: "gorlicki",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 449,
    stationName: "Trzebinia, os. Związku Walki Młodych",
    gegrLat: "50.159406",
    gegrLon: "19.477464",
    city: {
      id: 974,
      name: "Trzebinia",
      commune: {
        communeName: "Trzebinia",
        districtName: "chrzanowski",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "os. Związku Walki Młodych"
  },
  {
    id: 459,
    stationName: "Zakopane, ul. Sienkiewicza",
    gegrLat: "49.293564",
    gegrLon: "19.960083",
    city: {
      id: 1076,
      name: "Zakopane",
      commune: {
        communeName: "Zakopane",
        districtName: "tatrzański",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "ul. Sienkiewicza"
  },
  {
    id: 9179,
    stationName: "Szarów, ul. Spokojna",
    gegrLat: "50.007500",
    gegrLon: "20.259167",
    city: {
      id: 913,
      name: "Szarów",
      commune: {
        communeName: "Kłaj",
        districtName: "wielicki",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "ul. Spokojna"
  },
  {
    id: 10119,
    stationName: "Kaszów",
    gegrLat: "50.025028",
    gegrLon: "19.726833",
    city: {
      id: 2042,
      name: "Kaszów",
      commune: {
        communeName: "Liszki",
        districtName: "krakowski",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "Bory"
  },
  {
    id: 10124,
    stationName: "Sucha Beskidzka, ul. Nieszczyńskiej",
    gegrLat: "49.743131",
    gegrLon: "19.600339",
    city: {
      id: 897,
      name: "Sucha Beskidzka",
      commune: {
        communeName: "Sucha Beskidzka",
        districtName: "suski",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "ul. Nieszczyńskiej"
  },
  {
    id: 10254,
    stationName: "Nowy Targ, Plac Słowackiego",
    gegrLat: "49.483597",
    gegrLon: "20.028992",
    city: {
      id: 626,
      name: "Nowy Targ",
      commune: {
        communeName: "Nowy Targ",
        districtName: "nowotarski",
        provinceName: "MAŁOPOLSKIE"
      }
    },
    addressStreet: "Plac Słowackiego"
  },
  {
    id: 530,
    stationName: "Warszawa-Komunikacyjna",
    gegrLat: "52.219298",
    gegrLon: "21.004724",
    city: {
      id: 1006,
      name: "Warszawa",
      commune: {
        communeName: "Warszawa",
        districtName: "Warszawa",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "al. Niepodległości 227/233"
  },
  {
    id: 531,
    stationName: "Warszawa-Podleśna",
    gegrLat: "52.280939",
    gegrLon: "20.962156",
    city: {
      id: 1006,
      name: "Warszawa",
      commune: {
        communeName: "Warszawa",
        districtName: "Warszawa",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Podleśna 61"
  },
  {
    id: 538,
    stationName: "Warszawa-Tołstoja",
    gegrLat: "52.285073",
    gegrLon: "20.933018",
    city: {
      id: 1006,
      name: "Warszawa",
      commune: {
        communeName: "Warszawa",
        districtName: "Warszawa",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Tołstoja 2"
  },
  {
    id: 550,
    stationName: "Warszawa-Ursynów",
    gegrLat: "52.160772",
    gegrLon: "21.033819",
    city: {
      id: 1006,
      name: "Warszawa",
      commune: {
        communeName: "Warszawa",
        districtName: "Warszawa",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Wokalna 1"
  },
  {
    id: 552,
    stationName: "Warszawa-Targówek",
    gegrLat: "52.290864",
    gegrLon: "21.042458",
    city: {
      id: 1006,
      name: "Warszawa",
      commune: {
        communeName: "Warszawa",
        districtName: "Warszawa",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Kondratowicza 8"
  },
  {
    id: 497,
    stationName: "Płock-Gimnazjum",
    gegrLat: "52.556279",
    gegrLon: "19.687672",
    city: {
      id: 707,
      name: "Płock",
      commune: {
        communeName: "Płock",
        districtName: "Płock",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Królowej Jadwigi 4"
  },
  {
    id: 501,
    stationName: "Płock-Reja",
    gegrLat: "52.550938",
    gegrLon: "19.709791",
    city: {
      id: 707,
      name: "Płock",
      commune: {
        communeName: "Płock",
        districtName: "Płock",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Reja 28"
  },
  {
    id: 515,
    stationName: "Radom-Tochtermana",
    gegrLat: "51.399084",
    gegrLon: "21.147474",
    city: {
      id: 771,
      name: "Radom",
      commune: {
        communeName: "Radom",
        districtName: "Radom",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Tochtermana 1"
  },
  {
    id: 460,
    stationName: "Belsk-IGFPAN",
    gegrLat: "51.835120",
    gegrLon: "20.791556",
    city: {
      id: 19,
      name: "Belsk Duży",
      commune: {
        communeName: "Grójec",
        districtName: "grójecki",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "Osiedle PAN 1"
  },
  {
    id: 466,
    stationName: "Granica-KPN",
    gegrLat: "52.285858",
    gegrLon: "20.454653",
    city: {
      id: 259,
      name: "Granica",
      commune: {
        communeName: "Kampinos",
        districtName: "warszawski zachodni",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Kampinoski Park Narodowy"
  },
  {
    id: 471,
    stationName: "Legionowo-Zegrzyńska",
    gegrLat: "52.407578",
    gegrLon: "20.955928",
    city: {
      id: 452,
      name: "Legionowo",
      commune: {
        communeName: "Legionowo",
        districtName: "legionowski",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Zegrzyńska 38"
  },
  {
    id: 485,
    stationName: "Otwock-Brzozowa",
    gegrLat: "52.115725",
    gegrLon: "21.237297",
    city: {
      id: 662,
      name: "Otwock",
      commune: {
        communeName: "Otwock",
        districtName: "otwocki",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Brzozowa 2"
  },
  {
    id: 488,
    stationName: "Piastów-Pułaskiego",
    gegrLat: "52.191728",
    gegrLon: "20.837489",
    city: {
      id: 685,
      name: "Piastów",
      commune: {
        communeName: "Piastów",
        districtName: "pruszkowski",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Pułaskiego 6/8"
  },
  {
    id: 517,
    stationName: "Siedlce-Konarskiego",
    gegrLat: "52.172145",
    gegrLon: "22.282001",
    city: {
      id: 823,
      name: "Siedlce",
      commune: {
        communeName: "Siedlce",
        districtName: "Siedlce",
        provinceName: "MAZOWIECKIE"
      }
    },
    addressStreet: "ul. Konarskiego 11"
  },
  {
    id: 266,
    stationName: "Lublin ul. Obywatelska",
    gegrLat: "51.259431",
    gegrLon: "22.569133",
    city: {
      id: 489,
      name: "Lublin",
      commune: {
        communeName: "Lublin",
        districtName: "Lublin",
        provinceName: "LUBELSKIE"
      }
    },
    addressStreet: "ul. Obywatelska 13"
  },
  {
    id: 236,
    stationName: "BiałaP-Orzechowa",
    gegrLat: "52.029194",
    gegrLon: "23.149389",
    city: {
      id: 26,
      name: "Biała Podlaska",
      commune: {
        communeName: "Biała Podlaska",
        districtName: "Biała Podlaska",
        provinceName: "LUBELSKIE"
      }
    },
    addressStreet: "ul. Orzechowa"
  },
  {
    id: 248,
    stationName: "IMGW-Jarczew",
    gegrLat: "51.814367",
    gegrLon: "21.972375",
    city: {
      id: 301,
      name: "Jarczew",
      commune: {
        communeName: "Wola Mysłowska",
        districtName: "łukowski",
        provinceName: "LUBELSKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 282,
    stationName: "Lublin-Podmiejska",
    gegrLat: "51.163542",
    gegrLon: "22.598608",
    city: {
      id: 1035,
      name: "Wilczopole",
      commune: {
        communeName: "Głusk",
        districtName: "lubelski",
        provinceName: "LUBELSKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 285,
    stationName: "Zamość ul. Hrubieszowska 69A",
    gegrLat: "50.716628",
    gegrLon: "23.290247",
    city: {
      id: 1081,
      name: "Zamość",
      commune: {
        communeName: "Zamość",
        districtName: "Zamość",
        provinceName: "LUBELSKIE"
      }
    },
    addressStreet: "ul. Hrubieszowska 69A"
  },
  {
    id: 9593,
    stationName: "Puławy ul. Karpińskiego",
    gegrLat: "51.419047",
    gegrLon: "21.961089",
    city: {
      id: 764,
      name: "Puławy",
      commune: {
        communeName: "Puławy",
        districtName: "puławski",
        provinceName: "LUBELSKIE"
      }
    },
    addressStreet: "ul. Karpińskiego 5"
  },
  {
    id: 10874,
    stationName: "Florianka RPN",
    gegrLat: "50.551894",
    gegrLon: "22.982861",
    city: {
      id: 2201,
      name: "Florianka",
      commune: {
        communeName: "Józefów",
        districtName: "biłgorajski",
        provinceName: "LUBELSKIE"
      }
    },
    addressStreet: "-"
  },
  {
    id: 361,
    stationName: "Gorzów Wlkp. ul. Kosynierów Gdyńskich",
    gegrLat: "52.738214",
    gegrLon: "15.228667",
    city: {
      id: 246,
      name: "Gorzów Wielkopolski",
      commune: {
        communeName: "Gorzów Wielkopolski",
        districtName: "Gorzów Wielkopolski",
        provinceName: "LUBUSKIE"
      }
    },
    addressStreet: "ul. Kosynierów Gdyńskich"
  },
  {
    id: 387,
    stationName: "Zielona Góra ul. Krótka",
    gegrLat: "51.939783",
    gegrLon: "15.518861",
    city: {
      id: 1103,
      name: "Zielona Góra",
      commune: {
        communeName: "Zielona Góra",
        districtName: "Zielona Góra",
        provinceName: "LUBUSKIE"
      }
    },
    addressStreet: "ul. Krótka"
  },
  {
    id: 374,
    stationName: "Smolary Bytnickie",
    gegrLat: "52.172222",
    gegrLon: "15.206667",
    city: {
      id: 848,
      name: "Smolary Bytnickie",
      commune: {
        communeName: "Bytnica",
        districtName: "krośnieński",
        provinceName: "LUBUSKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 376,
    stationName: "Sulęcin ul. Dudka",
    gegrLat: "52.437722",
    gegrLon: "15.122444",
    city: {
      id: 903,
      name: "Sulęcin",
      commune: {
        communeName: "Sulęcin",
        districtName: "sulęciński",
        provinceName: "LUBUSKIE"
      }
    },
    addressStreet: "ul. Dudka"
  },
  {
    id: 379,
    stationName: "Wschowa ul. Kazimierza Wielkiego",
    gegrLat: "51.799722",
    gegrLon: "16.317500",
    city: {
      id: 1066,
      name: "Wschowa",
      commune: {
        communeName: "Wschowa",
        districtName: "wschowski",
        provinceName: "LUBUSKIE"
      }
    },
    addressStreet: "ul. Kazimierza Wielkiego"
  },
  {
    id: 382,
    stationName: "Żary, ul. Szymanowskiego 8",
    gegrLat: "51.642656",
    gegrLon: "15.127808",
    city: {
      id: 1119,
      name: "Żary",
      commune: {
        communeName: "Żary",
        districtName: "żarski",
        provinceName: "LUBUSKIE"
      }
    },
    addressStreet: "ul. Szymanowskiego 8"
  },
  {
    id: 145,
    stationName: "Toruń Airpointer",
    gegrLat: "53.012261",
    gegrLon: "18.606203",
    city: {
      id: 966,
      name: "Toruń",
      commune: {
        communeName: "Toruń",
        districtName: "Toruń",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: "ul. Wały Gen. Sikorskiego 12"
  },
  {
    id: 206,
    stationName: "Toruń POLICJA",
    gegrLat: "53.028647",
    gegrLon: "18.666103",
    city: {
      id: 966,
      name: "Toruń",
      commune: {
        communeName: "Toruń",
        districtName: "Toruń",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: "ul. Dziewulskiego 1"
  },
  {
    id: 208,
    stationName: "Toruń, KASZOWNIK",
    gegrLat: "53.017628",
    gegrLon: "18.612808",
    city: {
      id: 966,
      name: "Toruń",
      commune: {
        communeName: "Toruń",
        districtName: "Toruń",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: "ul. Przy Kaszowniku"
  },
  {
    id: 9794,
    stationName: "Toruń, ul. Storczykowa",
    gegrLat: "53.041945",
    gegrLon: "18.595036",
    city: {
      id: 966,
      name: "Toruń",
      commune: {
        communeName: "Toruń",
        districtName: "Toruń",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: "ul. Storczykowa 124"
  },
  {
    id: 225,
    stationName: "Włocławek OKRZEI",
    gegrLat: "52.658467",
    gegrLon: "19.059314",
    city: {
      id: 1046,
      name: "Włocławek",
      commune: {
        communeName: "Włocławek",
        districtName: "Włocławek",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: "ul. Okrzei"
  },
  {
    id: 142,
    stationName: "Grudziądz Airpointer",
    gegrLat: "53.493550",
    gegrLon: "18.762139",
    city: {
      id: 269,
      name: "Grudziądz",
      commune: {
        communeName: "Grudziądz",
        districtName: "Grudziądz",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: "ul. Piłsudskiego 51"
  },
  {
    id: 143,
    stationName: "Inowrocław Airpointer",
    gegrLat: "52.793122",
    gegrLon: "18.241044",
    city: {
      id: 287,
      name: "Inowrocław",
      commune: {
        communeName: "Inowrocław",
        districtName: "inowrocławski",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: "ul. Solankowa"
  },
  {
    id: 164,
    stationName: "Ciechocinek",
    gegrLat: "52.888422",
    gegrLon: "18.780908",
    city: {
      id: 122,
      name: "Ciechocinek",
      commune: {
        communeName: "Ciechocinek",
        districtName: "aleksandrowski",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: "ul. Tężniowa - Park Tężniowy"
  },
  {
    id: 190,
    stationName: "Koniczynka",
    gegrLat: "53.080647",
    gegrLon: "18.684258",
    city: {
      id: 391,
      name: "Koniczynka",
      commune: {
        communeName: "Łysomice",
        districtName: "toruński",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: null
  },
  {
    id: 232,
    stationName: "Bory Tucholskie",
    gegrLat: "53.662117",
    gegrLon: "17.934017",
    city: {
      id: 1104,
      name: "Zielonka",
      commune: {
        communeName: "Tuchola",
        districtName: "tucholski",
        provinceName: "KUJAWSKO-POMORSKIE"
      }
    },
    addressStreet: null
  }
]

export {data1}