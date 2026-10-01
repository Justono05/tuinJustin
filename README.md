# Model

Het staat model voor digitale tuintjes welke bij 'Het web is voor iedereen' door studenten worden gemaakt.

## Learning Log

### 31 - toegankelijkheid test verder uitwerken

Bij de screenreader heb ik kunnen oplossen dat de knoppen wel duidelijk worden aangegeven wat het doet, zonder dat de tekst visueel te zien is.
<img src="./Afbeeldingen/Arialabel.png">
Dit heb is gedaan door Aria-label toe te voegen aan de button, zo kan ik daarin zetten wat ik wil dat de screenreader voorleest aan de gebruiker over wat de knop doet. Nu ziet de formuliersregelaar tab er zo uit:
<img src="./Afbeeldingen/formulierregelaars3.png">

En op deze manier heb ik ook de links gefixed:
<img src="./Afbeeldingen/linkbefore.png">
Dit was voorheen, omgetoverd naar:
<img src="./Afbeeldingen/linkafter.png">
en zo ziet het link menu er in de screanreader uit:
<img src="./Afbeeldingen/linkmenu2.png">

Ook om het contrast te fixen heb ik bij het donker thema de gradient iets donkerder gemaakt. Helaas heb ik geen tijd meer gehad om een high contrast mode en een text 200% mode toe te passen.

### 30 sept - Toegankelijkheid testen

1. Aleen toetsenbord test:
   Alles van de pagina is te bereiken met alleen het gebruik van een toetsenbord. De knoppen van de cookie dialog zijn ook indrukbaar met spatie:
   <img src="./Afbeeldingen/toetsenbordTestIngedrukt.png">

Ook zijn er duidelijke focus states, zodat je met tab kan zien op welke link je staat:
<img src="./Afbeeldingen/TabLight.png">
<img src="./Afbeeldingen/TabDark.png">

Skip to content link niet nodig aangezien alle content al op de homepagina staat. Er zijn ook geen meerdere paginas

2. screenreader:
   Als je de lijst opent staat het meeste duidelijk aangegeven over wat het inhoud of doet:
   <img src="./Afbeeldingen/Formulierregelaars.png">
   Nog niet bij elke knop staat goed uitgelegd wat het doet, zoals bij de light-dark knoppen.
   <img src="./Afbeeldingen/koppen.png">
   Koppen staan goed met de juiste header getal, ook worden er geen header nummers geskipt.
   <img src="./Afbeeldingen/linkws.png">
   Links staan er ook goed in, alleen omdat de links in verhalende stijl in de tekst staat is het soms onduidelijk wat de link precies doet.
   <img src="./Afbeeldingen/orientatiepunt.png">
   Hier staan de stappen goed in chronologische volgorde uitgelegd, zoals ook de bedoeling is.

   Alleen als de cookie dialog is uitgeklapt staat in de screenreader niet bij welke knop voor welke cookie is:
   <img src="./Afbeeldingen/formulierregelaars2.png">

   Als je door alle elementen van de pagina scrolt door ctrl + opt + < of >, dan wordt alles netjes op volgorde voorgelezen. Dus eerst de heading, dan wat de afbeelding is, dan de tekst, dan link, dan weer tekst en daarna vermeld de screanreader wanneer het kopje is afgelopen. Is zal alleen wel wat alt-teksten moeten aanpassen zodat er beter vermeld wordt wat de afbeeldingen inhoud.
   <img src="./Afbeeldingen/fotonaambefore.png">
   aangepast naar :
   <img src="./Afbeeldingen/fotonaamafter.png"> 3. WCAG-checklist:
   <img src="./Afbeeldingen/wcagchecklist1.png">
   <img src="./Afbeeldingen/wcagchecklist2.png">
   <img src="./Afbeeldingen/wcagchecklist3.png">
   <img src="./Afbeeldingen/wcagchecklist4.png">
   <img src="./Afbeeldingen/wcagchecklist5.png">
   <img src="./Afbeeldingen/wcagchecklist6.png">
   <img src="./Afbeeldingen/wcagchecklist7.png">
   <img src="./Afbeeldingen/wcagchecklist8.png">
   Aan bijna alles voldoet mijn webpagina aan in de wcag-checklist. Ook is de contrast op mijn webpagina groot genoeg voor kleurenblinden:
   <img src="./Afbeeldingen/Kleurenblind1.png">
   <img src="./Afbeeldingen/Kleurenblind2.png">
   <img src="./Afbeeldingen/Kleurenblind3.png">
   <img src="./Afbeeldingen/Kleurenblind4.png">

### 28 sept - checkout vragen

1. Wat bedoelt Vasilis met de uitspraak: Semantiek doet mij niet zo veel, ik ben liever bezig met de UX van HTML?
   Wat een element (h1, p, main etc) betekent boeit hem niet zoveel, maar meer wat het doet.

2. Wat voor type beperkingen hebben invloed op het gebruiken van websites?
   Visueel, motorisch, auditief en cognitief.

3. Noem drie manieren om door een website te navigeren met jouw screenreader.
   Ctrl + Opt + U = lijst openen van headings, links, kopjes, etc. Ctrl + Opt + Cmd + pijltjes = selecteer een catagorie in de rotor. Ctrl + Opt + A = hele website voorlezen.

### 28 sept - werken met alleen toetsenbord en screenreader

Vandaag hebben we geoefend met de screenreader. Dit was mijn spiekbriefje:
<img src="./Afbeeldingen/screanreaderspiekbrief.png">
Het ging met best goed af en het is me gelukt om de ns opdracht uit te voeren:
<img src="./Afbeeldingen/nsopdracht.png">

### 26 sept - html validatie opdracht + deepdive positions + dialogs

Vandaag heb ik de html validatie opdracht gedaan, dit is wat eruit kwam bij de eerste poging:
<img src="./Afbeeldingen/htmlvalidatie1.png">
Kleine taalinstellingsfout, deze gelijk gefixed.
<img src="./Afbeeldingen/htmlvalidatie2.png">
Hier had ik perongeluk een sluitende h2 gebruikt bij een h3 element:
<img src="./Afbeeldingen/verkeerdeh2.png">
dit ook gefixed.
<img src="./Afbeeldingen/htmlvalidatie3.png">
Hier had ik perongeluk een target=\_blank toegevoegd aan een afbeelding:
<img src="./Afbeeldingen/targetblank.png">
Dit weggehaald.
<img src="./Afbeeldingen/htmlvalidatie4.png">
Ook had ik bij beide afbeeldingen spaties in de naam zitten, wat niet mag. Ik heb de spaties vervangen met -'s:
<img src="./Afbeeldingen/afbeeldingspatiesbefore.png">
Dit was de before.
<img src="./Afbeeldingen/afbeeldingspatiesafter.png">
En dit is hoe het hoort.

<img src="./Afbeeldingen/wcagvalidatieafter.png">
Dit is nu wat er nog overblijft, de docent zij zelf dat een /> als sluiting niet nodig is na een img element, maar wel fijn is. Dus dit laat ik zo. Het heeft voorderest geen effect op wat de html doet.

Ook heb ik een deel gedaan van de deepdive postions + dialogs, alleen ben ik vergeten screenshots te maken, ook heb ik de deepdive nog niet helemaal afgerond.

### 25 sept - checkout vragen

1. Wat is HTML validatie, waarom is het belangrijk en hoe heb je dat vandaag uitgevoerd?
   Met html validatie kun je zien of je je html correct hebt geschreven. Dit zorgt ervoor dat de browser niet gaat "gokken" wat je met een lijn code bedoeld, zodat er geen foutjes komen in wat jij de gebruiker wilt laten zien vs wat zij op hun scherm te zien krijgen. Vandaag, omdat ik wat achterliep, ben ik meer bezig geweest met een html structuur voor mijn cookie popup te maken. Ik zal de validatie morgen uitvoeren.

2. Welke dingen vielen je op?
   Kleine foutjes, zoals spaties in mijn image links, taal stond verkeerd bij de lang element en ik had per ongeluk een /h2 als sluiting gebruikt bij een h3 element.

3. Welke feedback heb je ontvangen tijdens het gesprek met je docenten?
   • Maak diverse schetsen
   • Maak een passende popup, zorg voor vorm, hiërarchie, bepaalde kleuren etc
   • Begin paragraaf anders maken, meer uitspringend dan de andere paragraven
   • Tekst naast de afbeelding plaatsen ipv onder.
   • “detail” tag voor overlappende tekst

### 24 sept - deepdive buttons en dialogs

Vandaag heb ik de deepdive buttons en dialogs gedaan:
<img src="./Afbeeldingen/buttonsoefening11.png">
<img src="./Afbeeldingen/buttonsoefening12.png">
<img src="./Afbeeldingen/buttonsoefening13.png">
<img src="./Afbeeldingen/buttonsoefening14.png">
Dit was oefening 1 van de buttons en dialogs deepdive.
<img src="./Afbeeldingen/buttonsoefening21.png">
<img src="./Afbeeldingen/buttonsoefening22.png">
<img src="./Afbeeldingen/buttonsoefening23.png">
Dit is oefening 2 van de buttons en dialogs deepdive, hiermee kon je een poppetje laten springen als je op de knop drukt. Op de afbeelding zie je het niet, maar het poppetje sprong echt!
<img src="./Afbeeldingen/buttonsoefening3.png">
Dit was de laatste oefening van de deepdive buttons.
<img src="./Afbeeldingen/dialogsoefening1.png">
<img src="./Afbeeldingen/dialogsoefening2.png">
<img src="./Afbeeldingen/dialogsoefening3.png">
<img src="./Afbeeldingen/dialogsoefening4.png">
Dit zijn enkele afbeeldingen van de oefening met de dialogs.

Helaas vandaag geen tijd gehad om alvast aan mijn html te werken, dit zal ik de volgende keer doen.

### 23 sept - checkout vragen

1. Wat is een wireflow en wat heb je er aan?
   Een Wireflow toont een aantal schermen van een interactie. Het is nuttig zo op papier te zetten wat de gebruiker te zien krijgt.
2. Wat zijn dark UX patterns? Geef drie voorbeelden...
   dark ux patterns zijn ontwerpkeuzes in websites of apps die gebruikers bewust sturen naar iets wat ze waarschijnlijk niet zouden kiezen als alle opties even duidelijk en eerlijk waren. Het werkt dus in voordeel van de organisatie en niet van de gebruiker. 1. verborgen kosten, pas bij de checkout blijkt dat de prijs duurder is geworden omdat er niet vermelde kosten bijkomen. 2. Stiekem verlenging, een gratis proefperiode gaat geruisloos door in een bataald abonnement. 3. Valse schaartse of urgentie, dit zijn nep aftellers of de gebruiker onder tijdsdruk zetten terwijl er niks aan de hand is.
3. Waar moet je als ontwerper rekening mee houden bij het maken van een human consent component?
   Je moet de gebruiker goed informeren en zonder druk toestemming kunnen laten geven.

### 23 sept - mijn human consent ontwerp + onderzoek

Onderzoek gedaan naar hoe je om cookies kan vragen, wat voor info erbij moet komen te staan en hoe andere webpagina's om cookies vragen:
<img src="./Afbeeldingen/humanconsent1.png">
Hier zie je rechts 10 voorbeelden van hoe een cookie popup eruit kan komen te zien. Links staat wat voor informatie ik moet geven en wat voor cookies mijn tuintje gebruikt.
<img src="./Afbeeldingen/humanconsent2.png">
Hier zie je mijn eigen gemaakte popup op papier, die ik wil proberen na te maken op mijn website.

### 22 sept

Vandaag heb ik de artikelen als huiswerk gelezen en de deepdive button, states en selectors gedaan:
<img src="./Afbeeldingen/buttondeepdive1.png">
<img src="./Afbeeldingen/buttondeepdive2.png">
<img src="./Afbeeldingen/buttondeepdive3.png">

### 21 sept - checkout vragen

1. Wat zijn HTML landmark role elements?
   Dit zijn elementen die een belangrijke plek aanduiden op de html pagina, denk aan nav voor navigation elementen, header en footer voor de boven en onderkant van de webpagina etc.

2. Wat zijn heading elementen en hoe horen deze 'genest' te worden?
   Heading elementen geven aan hoe belangrijk een stukje tekst is, je begint altijd met h1 voor het belangrijkste of grootste stukje, dan h2, h3 etc.

3. Hoe ga jij met cookies om? Beschrijf jouw beweegredenen en of die zijn veranderd na het volgen van dit college.
   Ik zal nogsteeds klikken op "alles accepteren" omdat dit het kortste duurt. Maar dankzij dit college weet ik wel meer over wat voor data er gedeeld wordt aan wat voor soort bedrijven.

   ### 21 sept - cookie consent form

   Vandaag hebben we een cookie consent form moeten invullen adhv 3 webpaginas. Hier de resultaten:
   <img src="./Afbeeldingen/Cookieconsentform.png">

### 17 sept

Laatste aanpassingen website gemaakt + web fluid verfijnd.

### 16 sept checkout vragen

1. Noem 3 Gestaltprincipes op en laat de ander uitleggen wat ze betekenen en doen.
   symetrie: objecten zien er symetrisch uit als ze om het middenpunt heen staan. Objecten die dichtbij elkaar liggen: wordt gezien als één gezamelijk object/groep. Closure: een connectie vormen terwijl en een stuk van een object ontbreekt.

2. Een grid biedt ruimte om te spelen (vrijheid), maar tegelijkertijd ook eenheid en structuur (vastigheid). Wat wordt hiermee bedoeld?
   Je kan de grids plaatsen hoe je ze wilt, en je kan ook tekst over meerdere columns of rows laten gaan. Maar grids zijn vaste blokjes waar content in kan, je browser deelt in eerste instatie zelf in waar de grids staan.

3. Welk principe neem je mee in een laatste iteratie van je ontwerp?
   Ik ga symmetry toepassen en goed gebruik maken van witruimte.

### 16 sept

Veel aan mijn digital garden gewerkt:
<img src="/Afbeeldingen/website.png">
<img src="/Afbeeldingen/website2.png">
<img src="/Afbeeldingen/website3.png">

### 14 sept checkout vragen

1. Leg uit wanneer een website 'lelijk' wordt en geef voorbeelden wat je kan doen om deze 'lelijke' onderdelen te fixen?
   Als afbeeldingen te groot zijn waardoor ze niet goed op de webpagina passen, of als tekst op een te klein scherm te groot wordt afgebeeld.
   Dit kun je fixen door media queries toe te voegen zodat je pagina vloeiend aanpast op schermgrootte. Bij afbeeldingen kun je een max-width intellen zodat die op de pagina past.

2. Vertel welke volgende stap je neemt om je website responsive te maken.
   Media queries toevoegen, maar dan met verschillende groottes als stappen zodat het meer aanpast op basis van schermgrootte. Deep dives toepassen en toevoegen aan mijn eigen design

3. Kun je het ontwerp en de bouw van je eigen Garden (zo uit je hoofd) onderbouwen in Webby vocabulair?
   Nog niet echt van toepassing, ik ben nu nog content aan het toevoegen in html en daarna ga ik met css aan de slag.

   ### 14 sept

   eerste aanpassingen digital garden gemaakt, helaas hier geen foto van gemaakt :/, is terug te vinden in github versie geschiedenis.
   <img src="/Afbeeldingen/github.png">

   ### 12 sept

   deepdive grid 101 + media queries gemaakt:
   <img src="/Afbeeldingen/grid.png">
   <img src="/Afbeeldingen/grid2.png">
   <img src="/Afbeeldingen/grid3.png">
   <img src="/Afbeeldingen/grid4.png">
   <img src="/Afbeeldingen/grid5.png">
   <img src="/Afbeeldingen/grid6.png">
   <img src="/Afbeeldingen/grid7.png">
   <img src="/Afbeeldingen/grid8.png">
   <img src="/Afbeeldingen/grid9.png">
   <img src="/Afbeeldingen/grid10.png">
   <img src="/Afbeeldingen/grid11.png">
   <img src="/Afbeeldingen/grid12.png">

   ### 11 sept - feedback visilis

- Gradients kunnen goed werken in je ontwerp. 3D effecten kan je maken met gradients
- De header interactief maken, zoals een linkje naar een andere pagina, animatie, tekst uitklappen. Simpel beginnen.
- Website stap voor stap opbouwen, eerst html voor werkende website, dan css om het mooier te maken.
- Meer conceptualiseren om de competentie te verbeteren vergeleken met vorig jaar
- Wat netter kunnen schetsen, zoals een netter vierkantje of wat meer op tekst te laten lijken. Aanleren om in die korte tijd iets te schetsen waar je wat aan hebt en goed terug kunt bekijken.

### 10 sept

5 mobile schetsen gemaakt:
<img src="/Afbeeldingen/schets.png">
<img src="/Afbeeldingen/schets2.png">
en deepdive mooie kleuren, gradients en patronen gedaan:
<img src="/Afbeeldingen/kleur.png">
<img src="/Afbeeldingen/kleur2.png">
<img src="/Afbeeldingen/kleur3.png">
<img src="/Afbeeldingen/kleur4.png">
<img src="/Afbeeldingen/gradient.png">
<img src="/Afbeeldingen/gradient2.png">
<img src="/Afbeeldingen/gradient3.png">
<img src="/Afbeeldingen/gradient4.png">
<img src="/Afbeeldingen/gradient5.png">
<img src="/Afbeeldingen/gradient6.png">
<img src="/Afbeeldingen/gradient7.png">
<img src="/Afbeeldingen/gradient8.png">
<img src="/Afbeeldingen/gradient9.png">
<img src="/Afbeeldingen/gradient10.png">
<img src="/Afbeeldingen/gradient11.png">
<img src="/Afbeeldingen/gradient12.png">
<img src="/Afbeeldingen/gradient13.png">

### 9 sept - checkout vragen

1. Leg uit waar het Visual Research in 3 stappen naartoe werkt
   Eerst zoek je naar een sfeerwoord die je vervolgends uitwerkt in directe beelden en abstracte vertaling, als laatst zoek je naar posters of beelden waarin je de directe en abstracte vertalingen terugziet.

2. Vertel in 2 zinnen waar jouw Garden over gaat, en met welke content je dat gaat doen (beeld, tekst, sound, animatie enz).
   Mijn garden gaat over het bouwen en samenstellen van computers. Ik ga dit doen met eigen content (fotos en fotos van internet), en scrollable animaties met knoppen.

3. Vertel kort welk idee van de Crazy 8 je het liefst zou willen uitvoeren/ verder zou willen onderzoeken.
   Het idee wat ik het liefst zou willen uitvoeren is idee 7 of 8. Idee 7 heeft een donker contrast en naarmate je scrolt komen de onderdelen "tevoorschijn" en idee 8 is een soort grote folderdoos waarin je kan bladeren, en elk blad is een component waarover je iets kan lezen.

   ### 9 sept

<img src="/Afbeeldingen/Scherm­afbeelding 2026-09-10 om 22.51.00.png" >

<img src="/Afbeeldingen/Scherm­afbeelding 2026-09-10 om 22.51.05.png" >

<img src="/Afbeeldingen/Scherm­afbeelding 2026-09-10 om 22.51.10.png">

<img src="/Afbeeldingen/Scherm­afbeelding 2026-09-10 om 22.51.14.png">

<img src="/Afbeeldingen/Scherm­afbeelding 2026-09-10 om 22.51.19.png">

Visual research en crazy 8 gedaan.

### 8 sept

Presentatie gemaakt, <a href="./oefeningen/presentatie/">hier </a> te zien.
deepdive Light & dark theme gedaan:
<img src="/Afbeeldingen/lightdark.png">
<img src="/Afbeeldingen/lightdark2.png">
<img src="/Afbeeldingen/lightdark3.png">

### 7 sept - checkout vragen

1. Leg uit wat een digital garden is en waarom dat anders is dan een reguliere website.
   Ze volgen geen tijdlijn of hebben een upload datum. Je kan het heel persoonlijk maken, het is niet perfect en het is echt een stukje van jezelf. Een digital garden maakt ook gebruik van code snippets, schetsen, animaties en stukjes geluid en video ipv alleen maar tekst.

2. Leg uit wat een website 'webby' maakt en welke websites jou het meeste inspireren.
   Het is interactief, het past zich aan op beeldgrote. Ze hebben goeie animaties en button states. Zit goeie leesbaarheid en contrast in. En het gebruikt veel css en onderdelen van het web.

3. Vertel waar jij mee aan de slag wilt gaan bij het maken van jouw eigen digital garden (let op: dit zijn jouw eerste ideeën, dit kan en mag veranderen in de loop van het programma.
   Ik wil aan de slag gaan met het uitleggen van hoe je een computer moet bouwen, in chronologische volgorde terwijl ik iets vertel over elk onderdeel. Een leuk idee dat ik heb is dat ik een afbeelding plaats over een onderdeel en daar dan buttons omheen zet om zo tekst uit te klappen die iets verteld over subonderdelen van de afbeelding.

   ### 7 sept - verkenning onderwerp opdracht 2

- Ik ga mijn onderwerp houden over het bouwen van computers en de onderdelen ervan. Wat mij interessant lijkt is bijvoorbeeld een afbeelding plaatsen met daaromheen clickable knopjes die elk een subonderdeel aanwijzen van de afbeelding, zodat als je op een van de knopjes klikt er een stukje tekst uitklapt die wat uitlegt over het subonderdeel. Wat ik ook vet vind is scrollable animaties, waarbij er dingen over het beeld bewegen wanneer je scrolt. Dit zie je ook bij bijvoorbeeld apple's website.

- Webby dingen die ik wil gaan gebruiken zijn dus leuke animaties, een goed contrast en vooral experimenteren met css.

- Ik zou een stukje kunnen schrijven over mijn eigen ervaring met computers bouwen, of wat mijn in de weg zat. Waar je op moet letten en het hele process van spullen bij elkaar zoeken opschrijven.

  ### 4 sept

  deepdives praktische css en html en css basics gevolgd.

  ### 2 sept

Deepdives CSS: fonts met kleur en effecten en interactie: MMD, micro-interacties, forms gevolgd.
<img src="/Afbeeldingen/deepdivefonts.png">
<img src="/Afbeeldingen/deepdivesfonts2.png">
<img src="/Afbeeldingen/deepdivesfonts3.png">

### 31 aug checkout vragen

1. Leg uit wat een source hosting platform is en voor welke jij gekozen hebt.
   Een source hosting platform zorgt ervoor dat je jouw code (in dit geval een website) kunt uploaden op het internet. Het platform dat ik heb gekozen is Github.

2. Vertel welke domeinnaam jij gekozen hebt en hoe je die hebt gekoppeld aan jouw pagina.
   De domeinnaam die ik gekozen heb is: Porjecttuinjustin. Ik heb dit gekoppeld aan github via custom domain name in de instellingen van mijn repository.

3. Beschrijf hoe je aanpassingen aan jouw pagina kunt maken en hoe je er voor zorgt dat die op het web gepubliceerd worden.
   Ik kan de aanpassingen via VSCodium doorvoeren omdat deze in verbinding staat met mijn github pagina.

### 31 aug - Kickoff

Een fork van de model repository gemaakt en gepubliceerd via mijn eigen Github omgeving.
