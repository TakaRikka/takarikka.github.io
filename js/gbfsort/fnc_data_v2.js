// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie';
str_CenterB = 'Undo last choice';

str_ImgPath = 'images/gbfsort/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 5;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 2;
var ary_TitleData = [
   "Female Playable Characters",
   "Male Playable Characters",
   "Female Collabs",
   "Male Collabs",
   "Female NPCs",
   "Male NPCs",
   "Female Summons",
   "Male Summons",
   "Djeeta Classes",
   "Gran Classes"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 0, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
   //Female Characters
   [0, "Fighter Djeeta","",        [0,0,0,0,0,0,0,0,1,0], "Djeeta.png"],

   [0, "Abby",	         "",        [1,0,0,0,0,0,0,0,0,0], "Abby.png"],
   [0, "Alexiel",       "",        [1,0,0,0,0,0,1,0,0,0], "Alexiel.png"],
   [0, "Aliza",		   "",        [1,0,0,0,0,0,0,0,0,0], "Aliza.png"],
   [0, "Almeida",	      "",	     [1,0,0,0,0,0,0,0,0,0], "Almeida.png"],
   [0, "Amira",		   "",	     [1,0,0,0,0,0,0,0,0,0], "Amira.png"],
   [0, "Andira",		   "",	     [1,0,0,0,0,0,0,0,0,0], "Andira.png"],
   [0, "Ange",	         "",	     [1,0,0,0,0,0,0,0,0,0], "Ange.png"],
   [0, "Anila",         "",        [1,0,0,0,0,0,0,0,0,0], "Anila.png"],
   [0, "Anna",          "",        [1,0,0,0,0,0,0,0,0,0], "Anna.png"],
   [0, "Anne",          "",        [1,0,0,0,0,0,0,0,0,0], "Anne.png"],
   [0, "Anthuria",      "",        [1,0,0,0,0,0,0,0,0,0], "Anthuria.png"],
   [0, "Arriet",        "",        [1,0,0,0,0,0,0,0,0,0], "Arriet.png"],
   [0, "Arulumaya",     "",        [1,0,0,0,0,0,0,0,0,0], "Arulumaya.png"],
   [0, "Arusha",        "",        [1,0,0,0,0,0,0,0,0,0], "Arusha.png"],
   [0, "Aster",         "",        [1,0,0,0,0,0,0,0,0,0], "Aster.png"],
   [0, "Athena",        "",        [1,0,0,0,0,0,1,0,0,0], "Athena.png"],
   [0, "Augusta",       "",        [1,0,0,0,0,0,0,0,0,0], "Augusta.png"],
   [0, "Balurga",       "",        [1,0,0,0,0,0,0,0,0,0], "Balurga.png"],
   [0, "Beatrix",       "",        [1,0,0,0,0,0,0,0,0,0], "Beatrix.png"],
   [0, "Black Knight",  "",        [1,0,0,0,0,0,0,0,0,0], "BlackKnight.png"],
   [0, "Bridgette",     "",        [1,0,0,0,0,0,0,0,0,0], "Bridgette.png"],
   [0, "Cagliostro",    "",        [1,0,0,0,0,0,0,0,0,0], "Cagliostro.png"],
   [0, "Cailana",       "",        [1,0,0,0,0,0,0,0,0,0], "Cailana.png"],
   [0, "Camieux",       "",        [1,0,0,0,0,0,0,0,0,0], "Camieux.png"],
   [0, "Carmelina",     "",        [1,0,0,0,0,0,0,0,0,0], "Carmelina.png"],
   [0, "Carren",        "",        [1,0,0,0,0,0,0,0,0,0], "Carren.png"],
   [0, "Catherine",     "",        [1,0,0,0,0,0,0,0,0,0], "Catherine.png"],
   [0, "Cecile",        "",        [1,0,0,0,0,0,0,0,0,0], "Cecile.png"],
   [0, "Cerberus",      "",        [1,0,0,0,0,0,1,0,0,0], "Cerberus.png"],
   [0, "Charlotta",     "",        [1,0,0,0,0,0,0,0,0,0], "Charlotta.png"],
   [0, "Chloe",         "",        [1,0,0,0,0,0,0,0,0,0], "Chloe.png"],
   [0, "Christina",     "",        [1,0,0,0,0,0,0,0,0,0], "Christina.png"],
   [0, "Clarisse",      "",        [1,0,0,0,0,0,0,0,0,0], "Clarisse.png"],
   [0, "Claudia",       "",        [1,0,0,0,0,0,0,0,0,0], "Claudia.png"],
   [0, "Cordelia",      "",        [1,0,0,0,0,0,0,0,0,0], "Cordelia.png"],
   [0, "Cucouroux",     "",        [1,0,0,0,0,0,0,0,0,0], "Cucouroux.png"],
   [0, "Daetta",        "",        [1,0,0,0,0,0,0,0,0,0], "Daetta.png"],
   [0, "Danua",         "",        [1,0,0,0,0,0,0,0,0,0], "Danua.png"],
   [0, "De La Fille",   "",        [1,0,0,0,0,0,0,0,0,0], "DeLaFille.png"],
   [0, "Diantha",       "",        [1,0,0,0,0,0,0,0,0,0], "Diantha.png"],
   [0, "Dorothy",       "",        [1,0,0,0,0,0,0,0,0,0], "Dorothy.png"],
   [0, "Drusilla",      "",        [1,0,0,0,0,0,0,0,0,0], "Drusilla.png"],
   [0, "Ejaeli",        "",        [1,0,0,0,0,0,0,0,0,0], "Ejaeli.png"],
   [0, "Elmelaura",     "",        [1,0,0,0,0,0,0,0,0,0], "Elmelaura.png"],
   [0, "Erin",          "",        [1,0,0,0,0,0,0,0,0,0], "Erin.png"],
   [0, "Europa",        "",        [1,0,0,0,0,0,1,0,0,0], "Europa.png"],
   [0, "Farrah",        "",        [1,0,0,0,0,0,0,0,0,0], "Farrah.png"],
   [0, "Feena",         "",        [1,0,0,0,0,0,0,0,0,0], "Feena.png"],
   [0, "Ferry",         "",        [1,0,0,0,0,0,0,0,0,0], "Ferry.png"],
   [0, "Fif",           "",        [1,0,0,0,0,0,0,0,0,0], "Fif.png"],
   [0, "Forte",         "",        [1,0,0,0,0,0,0,0,0,0], "Forte.png"],
   [0, "Fraux",         "",        [1,0,0,0,0,0,0,0,0,0], "Fraux_NPC.png"],
   [0, "Freesia",       "",        [1,0,0,0,0,0,0,0,0,0], "Freesia.png"],
   [0, "Gayne",         "",        [1,0,0,0,0,0,0,0,0,0], "Gayne.png"],
   [0, "Goblin Mage",   "",        [1,0,0,0,0,0,0,0,0,0], "GoblinMage.png"],
   [0, "Grea",          "",        [1,0,0,0,0,0,0,0,0,0], "Grea.png"],
   [0, "Haaselia",      "",        [1,0,0,0,0,0,0,0,0,0], "Haaselia.png"],
   [0, "Hallessena",    "",        [1,0,0,0,0,0,0,0,0,0], "Hallessena.png"],
   [0, "Heles",         "",        [1,0,0,0,0,0,0,0,0,0], "Heles.png"],
   [0, "Herja",         "",        [1,0,0,0,0,0,0,0,0,0], "Herja.png"],
   [0, "Ilsa",          "",        [1,0,0,0,0,0,0,0,0,0], "Ilsa.png"],
   [0, "Io",            "",        [1,0,0,0,0,0,0,0,0,0], "Io.png"],
   [0, "Izmir",         "",        [1,0,0,0,0,0,0,0,0,0], "Izmir.png"],
   [0, "Jasmine",       "",        [1,0,0,0,0,0,0,0,0,0], "Jasmine.png"],
   [0, "Jeanne d'Arc",  "",        [1,0,0,0,0,0,0,0,0,0], "JeanneDarc.png"],
   [0, "Jessica",       "",        [1,0,0,0,0,0,0,0,0,0], "Jessica.png"],
   [0, "Juliet",        "",        [1,0,0,0,0,0,0,0,0,0], "Juliet.png"],
   [0, "Karteira",      "",        [1,0,0,0,0,0,0,0,0,0], "Karteira.png"],
   [0, "Karva",         "",        [1,0,0,0,0,0,0,0,0,0], "Karva.png"],
   [0, "Katalina",      "",        [1,0,0,0,0,0,0,0,0,0], "Katalina.png"],
   [0, "Kolulu",        "",        [1,0,0,0,0,0,0,0,0,0], "Kolulu.png"],
   [0, "Korwa",         "",        [1,0,0,0,0,0,0,0,0,0], "Korwa.png"],
   [0, "Kuvira",        "",        [1,0,0,0,0,0,0,0,0,0], "Kuvira.png"],
   [0, "LaCoiffe",      "",        [1,0,0,0,0,0,0,0,0,0], "LaCoiffe.png"],
   [0, "Lady Grey",     "",        [1,0,0,0,0,0,0,0,0,0], "LadyGrey.png"],
   [0, "Laguna",        "",        [1,0,0,0,0,0,0,0,0,0], "Laguna.png"],
   [0, "Lamretta",      "",        [1,0,0,0,0,0,0,0,0,0], "Lamretta.png"],
   [0, "Lecia",         "",        [1,0,0,0,0,0,0,0,0,0], "Lecia.png"],
   [0, "Lennah",        "",        [1,0,0,0,0,0,0,0,0,0], "Lennah.png"],
   [0, "Leona",         "",        [1,0,0,0,0,0,0,0,0,0], "Leona.png"],
   [0, "Leonora",       "",        [1,0,0,0,0,0,0,0,0,0], "Leonora.png"],
   [0, "Lilele",        "",        [1,0,0,0,0,0,0,0,0,0], "Lilele.png"],
   [0, "Lily",          "",        [1,0,0,0,0,0,0,0,0,0], "Lily.png"],
   [0, "Ludmila",       "",        [1,0,0,0,0,0,0,0,0,0], "Ludmila.png"],
   [0, "Luna",          "",        [1,0,0,0,0,0,0,0,0,0], "Luna.png"],
   [0, "Lunalu",        "",        [1,0,0,0,0,0,0,0,0,0], "Lunalu.png"],
   [0, "Lyria",         "",        [1,0,0,0,0,0,0,0,0,0], "Lyria.png"],
   [0, "Magisa",        "",        [1,0,0,0,0,0,0,0,0,0], "Magisa.png"],
   [0, "Mahira",        "",        [1,0,0,0,0,0,0,0,0,0], "Mahira.png"],
   [0, "Maria",         "",        [1,0,0,0,0,0,0,0,0,0], "Maria.png"],
   [0, "Mariah",        "",        [1,0,0,0,0,0,0,0,0,0], "Mariah.png"],
   [0, "Mary",          "",        [1,0,0,0,0,0,0,0,0,0], "Mary.png"],
   [0, "Medusa",        "",        [1,0,0,0,0,0,0,0,0,0], "Medusa.png"],
   [0, "Melissabelle",  "",        [1,0,0,0,0,0,0,0,0,0], "Melissabelle.png"],
   [0, "Melleau",       "",        [1,0,0,0,0,0,0,0,0,0], "Melleau.png"],
   [0, "Mena",          "",        [1,0,0,0,0,0,0,0,0,0], "Mena_NPC.png"],
   [0, "Metera",        "",        [1,0,0,0,0,0,0,0,0,0], "Metera.png"],
   [0, "Milleore",      "",        [1,0,0,0,0,0,0,0,0,0], "Milleore.png"],
   [0, "Mimlemel",      "",        [1,0,0,0,0,0,0,0,0,0], "Mimlemel.png"],
   [0, "Mina",          "",        [1,0,0,0,0,0,0,0,0,0], "Mina.png"],
   [0, "Mirin",         "",        [1,0,0,0,0,0,0,0,0,0], "Mirin.png"],
   [0, "Mishra",        "",        [1,0,0,0,0,0,0,0,0,0], "Mishra.png"],
   [0, "Mona",          "",        [1,0,0,0,0,0,0,0,0,0], "Mona_NPC.png"],
   [0, "Monika",        "",        [1,0,0,0,0,0,0,0,0,0], "Monika.png"],
   [0, "Narumeia",      "",        [1,0,0,0,0,0,0,0,0,0], "Narumeia.png"],
   [0, "Nier",          "",        [1,0,0,0,0,0,0,0,0,0], "Nier.png"],
   [0, "Nemone",        "",        [1,0,0,0,0,0,0,0,0,0], "Nemone.png"],
   [0, "Nene",          "",        [1,0,0,0,0,0,0,0,0,0], "Nene.png"],
   [0, "Nina Drango",   "",        [1,0,0,0,0,0,0,0,0,0], "NinaDrango.png"],
   [0, "Niyon",         "",        [1,0,0,0,0,0,0,0,0,0], "Niyon.png"],
   [0, "Novei",         "",        [1,0,0,0,0,0,0,0,0,0], "Novei.png"],
   [0, "Olivia",        "",        [1,0,0,0,0,0,0,0,0,0], "Olivia.png"],
   [0, "Orchid",        "",        [1,0,0,0,0,0,0,0,0,0], "Orchid.png"],
   [0, "Pamela",        "",        [1,0,0,0,0,0,0,0,0,0], "Pamela.png"],
   [0, "Pengy",         "",        [1,0,0,0,0,0,0,0,0,0], "Pengy.png"],
   [0, "Petra",         "",        [1,0,0,0,0,0,0,0,0,0], "Petra.png"],
   [0, "Philosophia",   "",        [1,0,0,0,0,0,0,0,0,0], "Philosophia.png"],
   [0, "Pholia",        "",        [1,0,0,0,0,0,0,0,0,0], "Pholia.png"],
   [0, "Predator",      "",        [1,0,0,0,0,0,0,0,0,0], "Predator.png"],
   [0, "Razia",         "",        [1,0,0,0,0,0,0,0,0,0], "Razia.png"],
   [0, "Rita",          "",        [1,0,0,0,0,0,0,0,0,0], "Rita.png"],
   [0, "Robertina",     "",        [1,0,0,0,0,0,0,0,0,0], "Robertina.png"],
   [0, "Rosamia",       "",        [1,0,0,0,0,0,0,0,0,0], "Rosamia.png"],
   [0, "Rosetta",       "",        [1,0,0,0,0,0,0,0,0,0], "Rosetta.png"],
   [0, "Rosine",        "",        [1,0,0,0,0,0,0,0,0,0], "Rosine.png"],
   [0, "Sahli Lao",     "",        [1,0,0,0,0,0,0,0,0,0], "SahliLao.png"],
   [0, "Sara",          "",        [1,0,0,0,0,0,0,0,0,0], "Sara.png"],
   [0, "Sarya",         "",        [1,0,0,0,0,0,0,0,0,0], "Sarya.png"],
   [0, "Scathacha",     "",        [1,0,0,0,0,0,0,0,0,0], "Scathacha.png"],
   [0, "Selfira",       "",        [1,0,0,0,0,0,0,0,0,0], "Selfira.png"],
   [0, "Sen",           "",        [1,0,0,0,0,0,0,0,0,0], "Sen.png"],
   [0, "Sig",           "",        [1,0,0,0,0,0,0,0,0,0], "Sig.png"],
   [0, "Silva",         "",        [1,0,0,0,0,0,0,0,0,0], "Silva.png"],
   [0, "Societte",      "",        [1,0,0,0,0,0,0,0,0,0], "Societte.png"],
   [0, "Sophia",        "",        [1,0,0,0,0,0,0,0,0,0], "Sophia.png"],
   [0, "Sturm",         "",        [1,0,0,0,0,0,0,0,0,0], "Sturm.png"],
   [0, "Suframare",     "",        [1,0,0,0,0,0,0,0,0,0], "Suframare.png"],
   [0, "Sutera",        "",        [1,0,0,0,0,0,0,0,0,0], "Sutera.png"],
   [0, "Tanya",         "",        [1,0,0,0,0,0,0,0,0,0], "Tanya.png"],
   [0, "Teena",         "",        [1,0,0,0,0,0,0,0,0,0], "Teena.png"],
   [0, "Therese",       "",        [1,0,0,0,0,0,0,0,0,0], "Therese.png"],
   [0, "Threo",         "",        [1,0,0,0,0,0,0,0,0,0], "Threo.png"],
   [0, "Tiamat",        "",        [1,0,0,0,0,0,1,0,0,0], "Tiamat.png"],
   [0, "Tien",          "",        [1,0,0,0,0,0,0,0,0,0], "Tien.png"],
   [0, "Tweyen",        "",        [1,0,0,0,0,0,0,0,0,0], "Tweyen.png"],
   [0, "Vajra",         "",        [1,0,0,0,0,0,0,0,0,0], "Vajra.png"],
   [0, "Vania",         "",        [1,0,0,0,0,0,0,0,0,0], "Vania.png"],
   [0, "Vira",          "",        [1,0,0,0,0,0,0,0,0,0], "Vira.png"],
   [0, "Volenna",       "",        [1,0,0,0,0,0,0,0,0,0], "Volenna.png"],
   [0, "Yaia",          "",        [1,0,0,0,0,0,0,0,0,0], "Yaia.png"],
   [0, "Yggdrasil",     "",        [1,0,0,0,0,0,1,0,0,0], "Yggdrasil.png"],
   [0, "Yuel",          "",        [1,0,0,0,0,0,0,0,0,0], "Yuel.png"],
   [0, "Yuisis",        "",        [1,0,0,0,0,0,0,0,0,0], "Yuisis.png"],
   [0, "Zahlhamelina",  "",        [1,0,0,0,0,0,0,0,0,0], "Zahlhamelina.png"],
   [0, "Zeta",          "",        [1,0,0,0,0,0,0,0,0,0], "Zeta.png"],
   [0, "Zooey",         "",        [1,0,0,0,0,0,0,0,0,0], "Zooey.png"],

   //Female NPCs
   [0, "Alicia",        "",        [0,0,0,0,1,0,0,0,0,0], "Alicia_NPC.png"],  //NPC
   [0, "Anissida",      "",        [0,0,0,0,1,0,0,0,0,0], "Anissida_NPC.png"], //NPC
   [0, "Ardora",        "",        [0,0,0,0,1,0,0,0,0,0], "Ardora_NPC.png"], //NPC
   [0, "Bishop",        "",        [0,0,0,0,1,0,0,0,0,0], "Bishop_NPC.png"], //NPC
   [0, "Canna",         "",        [0,0,0,0,1,0,0,0,0,0], "Canna_NPC.png"], //NPC
   [0, "Constance",     "",        [0,0,0,0,1,0,0,0,0,0], "Constance_NPC.png"], //NPC
   [0, "Crystalia",     "",        [0,0,0,0,1,0,0,0,0,0], "Crystalia_NPC.png"], //NPC
   [0, "Diola",         "",        [0,0,0,0,1,0,0,0,0,0], "Diola_NPC.png"], //NPC
   [0, "Echinda",       "",        [0,0,0,0,1,0,0,0,0,0], "Echidna_NPC.png"], //NPC
   [0, "Fenrir",        "",        [0,0,0,0,1,0,0,0,0,0], "Fenrir_NPC.png"], //NPC
   [0, "Gabriel",       "",        [0,0,0,0,1,0,0,0,0,0], "Gabriel_NPC.png"], //NPC
   [0, "Hanna",         "",        [0,0,0,0,1,0,0,0,0,0], "Hanna_NPC.png"], //NPC
   [0, "Harie",         "",        [0,0,0,0,1,0,0,0,0,0], "Harie_NPC.png"], //NPC
   [0, "Isabella",      "",        [0,0,0,0,1,0,0,0,0,0], "Isabella_NPC.png"], //NPC
   [0, "Keralbarra",    "",        [0,0,0,0,1,0,0,0,0,0], "Keralbarra_NPC.png"], //NPC
   [0, "Linaria",       "",        [0,0,0,0,1,0,0,0,0,0], "Linaria_NPC.png"], //NPC
   [0, "Mama Gunsmith", "",        [0,0,0,0,1,0,0,0,0,0], "Mama_Gunsmith_NPC.png"], //NPC
   [0, "Michael",       "",        [0,0,0,0,1,0,0,0,0,0], "Michael_NPC.png"], //NPC
   [0, "Mika",          "",        [0,0,0,0,1,0,0,0,0,0], "Mika_NPC.png"], //NPC
   [0, "Oneiros",       "",        [0,0,0,0,1,0,0,0,0,0], "Oneiros_NPC.png"], //NPC
   [0, "Promethia",     "",        [0,0,0,0,1,0,0,0,0,0], "Promethia_NPC.png"], //NPC
   [0, "Shitori",       "",        [0,0,0,0,1,0,0,0,0,0], "Shitori_NPC.png"], //NPC
   [0, "Unar",          "",        [0,0,0,0,1,0,0,0,0,0], "Unar_NPC.png"], //NPC

   //Female Summons
   [0, "Anat",          "",        [0,0,0,0,0,0,1,0,0,0], "Anat_SMN.png"], //SMN
   [0, "Aphrodite",     "",        [0,0,0,0,0,0,1,0,0,0], "Aphrodite_SMN.png"], //SMN
   [0, "Bellringer Angel","",      [0,0,0,0,0,0,1,0,0,0], "BellRinger_SMN.png"], //SMN
   [0, "Celeste",       "",        [0,0,0,0,0,0,1,0,0,0], "Celeste_SMN.png"], //SMN
   [0, "Corow",         "",        [0,0,0,0,0,0,1,0,0,0], "Corow_SMN.png"], //SMN
   [0, "Cybele",        "",        [0,0,0,0,0,0,1,0,0,0], "Cybele_SMN.png"], //SMN
   [0, "Garuda",        "",        [0,0,0,0,0,0,1,0,0,0], "Garuda_SMN.png"], //SMN
   [0, "Grani",         "",        [0,0,0,0,0,0,1,0,0,0], "Grani_SMN.png"], //SMN
   [0, "Halluel & Malluel","",     [0,0,0,0,0,0,1,0,0,0], "HalluelMalluel_SMN.png"], //SMN
   [0, "Kaguya",        "",        [0,0,0,0,0,0,1,0,0,0], "Kaguya_SMN.png"], //SMN
   [0, "Luminiera",     "",        [0,0,0,0,0,0,1,0,0,0], "Lumi_SMN.png"], //SMN
   [0, "Macula Marius", "",        [1,0,0,0,0,0,1,0,0,0], "Macula.png"], //SMN
   [0, "Mammon",        "",        [0,0,0,0,0,0,1,0,0,0], "Mammon_SMN.png"], //SMN
   [0, "Manawydan",     "",        [0,0,0,0,0,0,1,0,0,0], "Manawydan_SMN.png"], //SMN
   [0, "Morrigna",      "",        [1,0,0,0,0,0,1,0,0,0], "Morrigna.png"], //SMN
   [0, "Nacht",         "",        [0,0,0,0,0,0,1,0,0,0], "Nacht_SMN.png"], //SMN
   [0, "Nephthys",      "",        [0,0,0,0,0,0,1,0,0,0], "Nephthys_SMN.png"], //SMN
   [0, "Neptune",       "",        [0,0,0,0,0,0,1,0,0,0], "Neptune_SMN.png"], //SMN
   [0, "Oceanus",       "",        [0,0,0,0,0,0,1,0,0,0], "Oceanus_SMN.png"], //SMN
   [0, "Prometheus",    "",        [0,0,0,0,0,0,1,0,0,0], "Prometheus_SMN.png"], //SMN
   [0, "Queen Bee",     "",        [0,0,0,0,0,0,1,0,0,0], "QueenBee_SMN.png"], //SMN
   [0, "Satyr",         "",        [0,0,0,0,0,0,1,0,0,0], "Satyr_SMN.png"], //SMN
   [0, "Siren",         "",        [0,0,0,0,0,0,1,0,0,0], "Siren_SMN.png"], //SMN
   [0, "Snow White",    "",        [0,0,0,0,0,0,1,0,0,0], "SnowWhite_SMN.png"], //SMN
   [0, "Sylph",         "",        [0,0,0,0,0,0,1,0,0,0], "Sylph_SMN.png"], //SMN
   [0, "Tsukuyomi",     "",        [0,0,0,0,0,0,1,0,0,0], "Tsukuyomi_SMN.png"], //SMN
   [0, "Twin Elements", "",        [0,0,0,0,0,0,1,0,0,0], "TwinEle_SMN.png"], //SMN
   [0, "Typhon",        "",        [0,0,0,0,0,0,1,0,0,0], "Typhon_SMN.png"], //SMN
   [0, "Varuna",        "",        [0,0,0,0,0,0,1,0,0,0], "Varuna_SMN.png"], //SMN
   [0, "Vohu Manah",    "",        [0,0,0,0,0,0,1,0,0,0], "Vohu_SMN.png"], //SMN

   //Male Characters
   [0, "Gran",          "",        [0,0,0,0,0,0,0,0,0,1], "Gran.png"],

   [0, "Agielba",       "",        [0,1,0,0,0,0,0,0,0,0], "Agielba.png"],
   [0, "Aglovale",      "",        [0,1,0,0,0,0,0,0,0,0], "Aglovale.png"], 
   [0, "Alanaan",       "",        [0,1,0,0,0,0,0,0,0,0], "Alanaan.png"],
   [0, "Albert",        "",        [0,1,0,0,0,0,0,0,0,0], "Albert.png"],
   [0, "Alec",          "",        [0,1,0,0,0,0,0,0,0,0], "Alec.png"],
   [0, "Aletheia",      "",        [0,1,0,0,0,0,0,0,0,0], "Aletheia.png"],
   [0, "Alistair",      "",        [0,1,0,0,0,0,0,0,0,0], "Alistair.png"],
   [0, "Altair",        "",        [0,1,0,0,0,0,0,0,0,0], "Altair.png"],
   [0, "Anre",          "",        [0,1,0,0,0,0,0,0,0,0], "Anre.png"],
   [0, "Aoidos",        "",        [0,1,0,0,0,0,0,0,0,0], "Aoidos.png"],
   [0, "Arthur",        "",        [0,1,0,0,0,0,0,0,0,0], "Arthur.png"], 
   [0, "Ayer",          "",        [0,1,0,0,0,0,0,0,0,0], "Ayer.png"],
   [0, "Azazel",        "",        [0,1,0,0,0,0,0,0,0,0], "Azazel.png"], 
   [0, "Bakura",        "",        [0,1,0,0,0,0,0,0,0,0], "Bakura.png"],
   [0, "Baotorda",      "",        [0,1,0,0,0,0,0,0,0,0], "Baotorda.png"],
   [0, "Barawa",        "",        [0,1,0,0,0,0,0,0,0,0], "Barawa.png"],
   [0, "Cain",          "",        [0,1,0,0,0,0,0,0,0,0], "Cain.png"],
   [0, "Caim",          "",        [0,1,0,0,0,0,0,0,0,0], "Caim.png"],
   [0, "Ceylan",        "",        [0,1,0,0,0,0,0,0,0,0], "Ceylan.png"],
   [0, "Charioce XVII", "",        [0,1,0,0,0,0,0,0,0,0], "Charioce.png"], 
   [0, "Chat Noir",     "",        [0,1,0,0,0,0,0,0,0,0], "ChatNoir.png"],
   [0, "Dante",         "",        [0,1,0,0,0,0,0,0,0,0], "Dante.png"],
   [0, "Deliford",      "",        [0,1,0,0,0,0,0,0,0,0], "Deliford_.png"],
   [0, "Drang",         "",        [0,1,0,0,0,0,0,0,0,0], "Drang.png"],
   [0, "Eahta",         "",        [0,1,0,0,0,0,0,0,0,0], "Eahta.png"],
   [0, "Elmott",        "",        [0,1,0,0,0,0,0,0,0,0], "Elmott.png"],
   [0, "Elta",          "",        [0,1,0,0,0,0,0,0,0,0], "Elta.png"],
   [0, "Eso",           "",        [0,1,0,0,0,0,0,0,0,0], "Eso.png"],
   [0, "Estarriola",    "",        [0,1,0,0,0,0,0,0,0,0], "Estarriola.png"],
   [0, "Eugen",         "",        [0,1,0,0,0,0,0,0,0,0], "Eugen.png"],
   [0, "Eustace",       "",        [0,1,0,0,0,0,0,0,0,0], "Eustace.png"],
   [0, "Ezecrain",      "",        [0,1,0,0,0,0,0,0,0,0], "Ezecrain.png"],
   [0, "Feather",       "",        [0,1,0,0,0,0,0,0,0,0], "Feather.png"],
   [0, "Feower",        "",        [0,1,0,0,0,0,0,0,0,0], "Feower.png"],
   [0, "Flesselles",    "",        [0,1,0,0,0,0,0,0,0,0], "Flesselles.png"],
   [0, "Galadar",       "",        [0,1,0,0,0,0,0,0,0,0], "Galadar.png"],
   [0, "Garma",         "",        [0,1,0,0,0,0,0,0,0,0], "Garma.png"],
   [0, "Gawain",        "",        [0,1,0,0,0,0,0,0,0,0], "Gawain.png"],
   [0, "Geisenborger",  "",        [0,1,0,0,0,0,0,0,0,0], "Geisenborger.png"],
   [0, "Ghandagoza",    "",        [0,1,0,0,0,0,0,0,0,0], "Ghandagoza.png"],
   [0, "Haohmaru",      "",        [0,1,0,0,0,0,0,0,0,0], "Haohmaru.png"],
   [0, "Hazen",         "",        [0,1,0,0,0,0,0,0,0,0], "Hazen.png"],
   [0, "Helnar",        "",        [0,1,0,0,0,0,0,0,0,0], "Helnar.png"],
   [0, "Ippatsu",       "",        [0,1,0,0,0,0,0,0,0,0], "Ippatsu.png"],
   [0, "J.J.",          "",        [0,1,0,0,0,0,0,0,0,0], "JJ.png"],
   [0, "Jamil",         "",        [0,1,0,0,0,0,0,0,0,0], "Jamil.png"],
   [0, "Jin",           "",        [0,1,0,0,0,0,0,0,0,0], "Jin.png"],
   [0, "Joel",          "",        [0,1,0,0,0,0,0,0,0,0], "Joel.png"],
   [0, "Johann",        "",        [0,1,0,0,0,0,0,0,0,0], "Johann.png"],
   [0, "Juri",          "",        [0,1,0,0,0,0,0,0,0,0], "Juri.png"],
   [0, "Katzelia",      "",        [0,1,0,0,0,0,0,0,0,0], "Katzelia.png"],
   [0, "Keehar",        "",        [0,1,0,0,0,0,0,0,0,0], "Keehar.png"],
   [0, "Krugne",        "",        [0,1,0,0,0,0,0,0,0,0], "Krugne.png"],
   [0, "Lancelot",      "",        [0,1,0,0,0,0,0,0,0,0], "Lancelot.png"],
   [0, "Lobelia",       "",        [0,1,0,0,0,0,0,0,0,0], "Lobelia.png"],
   [0, "Lowain",        "",        [0,1,0,0,0,0,0,0,0,0], "Lowain.png"],
   [0, "Lucio",         "",        [0,1,0,0,0,0,0,0,0,0], "Lucio.png"],
   [0, "Lucius",        "",        [0,1,0,0,0,0,0,0,0,0], "Lucius.png"],
   [0, "Marquiares",    "",        [0,1,0,0,0,0,0,0,0,0], "Marquiares.png"],
   [0, "Meteon",        "",        [0,1,0,0,0,0,0,0,0,0], "Meteon.png"],
   [0, "Mordred",       "",        [0,1,0,0,0,0,0,0,0,0], "Mordred.png"], 
   [0, "Naoise",        "",        [0,1,0,0,0,0,0,0,0,0], "Naoise.png"],
   [0, "Nezahualpilli", "",        [0,1,0,0,0,0,0,0,0,0], "Nezahualpilli.png"],
   [0, "Noa",           "",        [0,1,0,0,0,0,0,0,0,0], "Noa.png"],
   [0, "Norcel",        "",        [0,1,0,0,0,0,0,0,0,0], "Norcel.png"],
   [0, "Owen",          "",        [0,1,0,0,0,0,0,0,0,0], "Owen.png"], 
   [0, "Paris",         "",        [0,1,0,0,0,0,0,0,0,0], "Paris.png"],
   [0, "Pavidus",       "",        [0,1,0,0,0,0,0,0,0,0], "Pavidus.png"],
   [0, "Percival",      "",        [0,1,0,0,0,0,0,0,0,0], "Percival.png"],
   [0, "Rackam",        "",        [0,1,0,0,0,0,0,0,0,0], "Rackam.png"],
   [0, "Randall",       "",        [0,1,0,0,0,0,0,0,0,0], "Randall.png"],
   [0, "Redluck",       "",        [0,1,0,0,0,0,0,0,0,0], "Redluck.png"],
   [0, "Reinhardtzar",  "",        [0,1,0,0,0,0,0,0,0,0], "Reinhardtzar.png"], 
   [0, "Richard",       "",        [0,1,0,0,0,0,0,0,0,0], "Richard.png"], 
   [0, "Romeo",         "",        [0,1,0,0,0,0,0,0,0,0], "Romeo.png"],
   [0, "Ryan",          "",        [0,1,0,0,0,0,0,0,0,0], "Ryan.png"],
   [0, "Sandalphon",    "",        [0,1,0,0,0,0,0,0,0,0], "Sandalphon.png"],
   [0, "Sarunan",       "",        [0,1,0,0,0,0,0,0,0,0], "Sarunan.png"],
   [0, "Seofon",        "",        [0,1,0,0,0,0,0,0,0,0], "Seofon.png"],
   [0, "Seox",          "",        [0,1,0,0,0,0,0,0,0,0], "Seox.png"],
   [0, "Seruel",        "",        [0,1,0,0,0,0,0,0,0,0], "Seruel.png"],
   [0, "Sevastien",     "",        [0,1,0,0,0,0,0,0,0,0], "Sevastien.png"],
   [0, "Sevilbarra",    "",        [0,1,0,0,0,0,0,0,0,0], "Sevilbarra.png"],
   [0, "Shao",          "",        [0,1,0,0,0,0,0,0,0,0], "Shao.png"],
   [0, "Siegfried",     "",        [0,1,0,0,0,0,0,0,0,0], "Siegfried.png"],
   [0, "Skull",         "",        [0,1,0,0,0,0,0,0,0,0], "Skull.png"], 
   [0, "Soriz",         "",        [0,1,0,0,0,0,0,0,0,0], "Soriz.png"],
   [0, "Spinnah",       "",        [0,1,0,0,0,0,0,0,0,0], "Spinnah.png"], 
   [0, "Stan",          "",        [0,1,0,0,0,0,0,0,0,0], "Stan.png"],
   [0, "Syr",           "",        [0,1,0,0,0,0,0,0,0,0], "Syr.png"],
   [0, "Thelonim",      "",        [0,1,0,0,0,0,0,0,0,0], "Thelonim.png"],
   [0, "Tsubasa",       "",        [0,1,0,0,0,0,0,0,0,0], "Tsubasa.png"], 
   [0, "Tyre",          "",        [0,1,0,0,0,0,0,0,0,0], "Tyre.png"],
   [0, "Ulamnuran",     "",        [0,1,0,0,0,0,0,0,0,0], "Ulamnuran.png"],
   [0, "Vane",          "",        [0,1,0,0,0,0,0,0,0,0], "Vane.png"],
   [0, "Vanzza",        "",        [0,1,0,0,0,0,0,0,0,0], "Vanzza.png"],
   [0, "Vaseraga",      "",        [0,1,0,0,0,0,0,0,0,0], "Vaseraga.png"],
   [0, "Veight",        "",        [0,1,0,0,0,0,0,0,0,0], "Veight.png"],
   [0, "Vermeil",       "",        [0,1,0,0,0,0,0,0,0,0], "Vermeil.png"],
   [0, "Viceroy",       "",        [0,1,0,0,0,0,0,0,0,0], "Viceroy.png"],
   [0, "Walder",        "",        [0,1,0,0,0,0,0,0,0,0], "Walder.png"],
   [0, "Will",          "",        [0,1,0,0,0,0,0,0,0,0], "Will.png"],
   [0, "Yngwie",        "",        [0,1,0,0,0,0,0,0,0,0], "Yngwie.png"],
   [0, "Yodarha",       "",        [0,1,0,0,0,0,0,0,0,0], "Yodarha.png"],
   [0, "Yurius",        "",        [0,1,0,0,0,0,0,0,0,0], "Yurius.png"],
   [0, "Zaja",          "",        [0,1,0,0,0,0,0,0,0,0], "Zaja.png"],
   [0, "Zehek",         "",        [0,1,0,0,0,0,0,0,0,0], "Zehek.png"],

   //Male NPC Characters
   [0, "Arma",          "",        [0,0,0,0,0,1,0,0,0,0], "ArmaNPC.png"], //NPC
   [0, "Abel",          "",        [0,0,0,0,0,1,0,0,0,0], "Abel.png"], //NPC
   [0, "Al-Khalid",     "",        [0,0,0,0,0,1,0,0,0,0], "AlKhalid.png"], //NPC
   [0, "Christophe",    "",        [0,0,0,0,0,1,0,0,0,0], "Christophe.png"], //NPC

   //Female Collab
   [0, "Airi Totoki",   "",        [0,0,1,0,0,0,0,0,0,0], "Airi.png"],
   [0, "Anastasia",     "",        [0,0,1,0,0,0,0,0,0,0], "Anastasia.png"],
   [0, "Anzu Futaba",   "",        [0,0,1,0,0,0,0,0,0,0], "Anzu.png"],
   [0, "Aqours 1st Years",   "",   [0,0,1,0,0,0,0,0,0,0], "Anzu.png"],
   [0, "Aqours 2nd Years",   "",   [0,0,1,0,0,0,0,0,0,0], "Anzu.png"],
   [0, "Aqours 3rd Years",   "",   [0,0,1,0,0,0,0,0,0,0], "Anzu.png"],
   [0, "Arisa",         "",        [0,0,1,0,0,0,0,0,0,0], "Arisa.png"],
   [0, "Chun-Li",       "",        [0,0,1,0,0,0,0,0,0,0], "ChunLi.png"],
   [0, "Cure Black & Cure White","",[0,0,1,0,0,0,0,0,0,0], "CureBlackWhite.png"],
   [0, "Elize Lutus",   "",        [0,0,1,0,0,0,0,0,0,0], "ElizeLutus.png"],
   [0, "Erica Fontaine","",        [0,0,1,0,0,0,0,0,0,0], "EricaFontaine.png"],
   [0, "Gemini Sunrise","",        [0,0,1,0,0,0,0,0,0,0], "GeminiSunrise.png"],
   [0, "Kanako Mimura", "",        [0,0,1,0,0,0,0,0,0,0], "KanakoMimura.png"],
   [0, "Karin",         "",        [0,0,1,0,0,0,0,0,0,0], "Karin.png"],
   [0, "Karyl",         "",        [0,0,1,0,0,0,0,0,0,0], "Karyl.png"],
   [0, "Koume Shirasaka","",       [0,0,1,0,0,0,0,0,0,0], "KoumeShirasaka.png"],
   [0, "Lina Inverse",  "",        [0,0,1,0,0,0,0,0,0,0], "LinaInverse.png"],
   [0, "Mika Jougasaki","",        [0,0,1,0,0,0,0,0,0,0], "MikaJougasaki.png"],
   [0, "Mikasa",        "",        [0,0,1,0,0,0,0,0,0,0], "Mikasa.png"],
   [0, "Miku Maekawa",  "",        [0,0,1,0,0,0,0,0,0,0], "MikuMaekawa.png"],
   [0, "Milla Maxwell", "",        [0,0,1,0,0,0,0,0,0,0], "MillaMaxwell.png"],
   [0, "Minami Nitta",  "",        [0,0,1,0,0,0,0,0,0,0], "MinamiNitta.png"],
   [0, "Mio Honda",     "",        [0,0,1,0,0,0,0,0,0,0], "MioHonda.png"],
   [0, "Miria Akagi",   "",        [0,0,1,0,0,0,0,0,0,0], "MiriaAkagi.png"],
   [0, "Mizuki Kawashima","",      [0,0,1,0,0,0,0,0,0,0], "MizukiKawashima.png"],
   [0, "Naga",          "",        [0,0,1,0,0,0,0,0,0,0], "Naga.png"],
   [0, "Nakoruru",      "",        [0,0,1,0,0,0,0,0,0,0], "Nakoruru.png"],
   [0, "Ranko Kanzaki", "",        [0,0,1,0,0,0,0,0,0,0], "Ranko.png"],
   [0, "Rika Jougasaki","",        [0,0,1,0,0,0,0,0,0,0], "RikaJougasaki.png"],
   [0, "Rin Shibuya",   "",        [0,0,1,0,0,0,0,0,0,0], "RinShibuya.png"],
   [0, "Robomi",        "",        [0,0,1,0,0,0,0,0,0,0], "Robomi.png"],
   [0, "Sachiko Koshimizu","",     [0,0,1,0,0,0,0,0,0,0], "SachikoKoshimizu.png"],
   [0, "Sakura Kinomoto","",       [0,0,1,0,0,0,0,0,0,0], "SakuraKinomoto.png"],
   [0, "Sakura Shinguji","",       [0,0,1,0,0,0,0,0,0,0], "SakuraShinguji.png"],
   [0, "Shiki Ichinose","",        [0,0,1,0,0,0,0,0,0,0], "ShikiIchinose.png"],
   [0, "Sophie",        "",        [0,0,1,0,0,0,0,0,0,0], "Sophie.png"],
   [0, "Tear Grants",   "",        [0,0,1,0,0,0,0,0,0,0], "TearGrants.png"],
   [0, "Uzuki Shimamura","",       [0,0,1,0,0,0,0,0,0,0], "UzukiShimamura.png"],

   //Male Collab
   [0, "Nicholas",      "",        [0,0,0,1], "Nicholas.png"],
   [0, "Skull",         "",        [0,0,0,1], "Skull.png"],
   [0, "Teru Tendo",    "",        [0,0,0,1], "TeruTendo.png"],
   [0, "Tsubasa Kashiwagi","",     [0,0,0,1], "TsubasaKashiwagi.png"],

];
