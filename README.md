#Webbdesign
Här kommer kravlistan för den gemensamma delen; projektarbetet samt presentationen längst ned /Gustav


---<HTML> KRAV---
HTML-dokumenten ska följa en standard och validera enligt den. De ska vara välstrukturerade, koden ska
vara indenterad så att det är lätt att se relationerna. Det får inte finnas CSS i HTML-dokumenten (bara inlänkningen av den fristående filen). Att lägga CSS i HTML-dokumenten görs ”i verkligheten” och det
kommer ni att se, men i den här kursen lär vi oss att separera för att få sidor som är lätta att underhålla, en
effektiv kod som inte upprepas i onödan, möjligheterna att styra vårt utseende helt och hållet beroende på
förutsättningarna etc. Det är även för er skull för att ni inte ska få för komplexa dokument inledningsvis.

vvv Validering HTML vvv
https://validator.w3.org/



---CSS KRAV---
• Responsiv layout
Layouten ska vara responsiv med minst kravet att sidan skalar om så att allt innehåll blir tillgängligt för
besökaren. Tillgängligt är aningen oprecist så tänk logiskt, att t ex behöva scrolla sidledes för att läsa en
text är inte tillgängligt och användarvänligt. Sätter ni storlekar i fasta värden, säkerställ att dessa värden
fungerar både för breda och smala viewports. Fasta värden kan användas för att definiera t ex en kolumns
storlek och sedan kan flexbox används för att avgöra hur många kolumner som får plats.

• Två olika menyutseenden
Det ska finnas två olika meny-utseenden. För mobil skall menyn visas som en
navicon (se bild). När man klickar på naviconen ska en meny med innehållet i
rader visas. Detta skall ske utan att sidan behöver laddas om. För varianten
med högre upplösning (t ex min-width: 768px) skall menyn och länkarna
presenteras utan att användaren behöver klicka för att visa.

vvv Validering CSS vvv
https://jigsaw.w3.org/css-validator/



---JAVASCRIPT KRAV---
Realtidsvalidering av formulär är grundläggande JavaScript. Denna grundläggande uppgift möjliggör för er
att gemensamt komma fram till en lösning på hur man använder JavaScript för att påverka feedback till
användaren baserat på vad användaren gör, att ge användaren feedback i realtid när den behövs. Genom
att lösa denna uppgift i grupp får ni den kunskap ni behöver för att kunna göra lite mer avancerade
funktioner i den individuella uppgiften.
Det som ska valideras är att fältet Namn innehåller tillräckligt många tecken, består av text, att
telefonnummer är korrekt angivet (kan bestå av både siffror och +- men inte av bokstäver), att epostadressen är skriven i rätt format (@ och . måste ingå), att obligatoriska fält är ifyllda. Formuläret behöver
inte kunna skickas. För att validera i realtid ska ni använda JavaScript och reagera på vad användaren
skriver och ge feedback utifrån det. Det räcker således inte att validera formuläret enbart genom HTMLattribut för formulär ( t ex required). Ge användaren visuell feedback, t ex röd/grön text beroende på om
inmatningen är korrekt utförd eller ej.



---VUE.JS KRAV---
Inga egentliga krav på Vue.js på den gemensamma delen, däremot är det bra att öva till den individuella delen. Jag säger implementera Vue.js //Gustav



---Presentationen---
Det som skall presenteras på den gemensamma delen av projektet är följande:

• Presentation av företaget – här presenterar ni företaget, vad ni heter, vad ni gör, vad ni kan
erbjuda. Har ni svårt att komma på lämplig text, fråga något lämpligt generativt AI-verktyg om
hjälp. Ni ska inte lägga mycket tid på att komma på bra texter även om det gör mycket för
intrycket av projektet att det faktiskt finns ett någorlunda vettigt innehåll (dock ej det som
bedöms!). Innehåll är valfritt men minst en rubrik samt en paragraf.

• Anställda/konsulter – här presenterar ni företagets ”anställda”, dvs. er själva (eller påhittade
personer). ”Ni” är ert företags personal i den form och med den roll ni själva väljer. På denna sida
skall samtliga anställda presenteras med bild och kort text. Bilden behöver givetvis inte föreställa
er själva och texten kan vara helt påhittad. I princip är detta alltså en presentationssida över er
gruppmedlemmar fast i egenskap av anställda på ert fiktiva företag. Från denna presentation
skall man sedan kunna klicka sig till varje anställds personliga sida (individuell del av projektet).

• Kontaktsida – det ska finnas en kontaktsida innehållande ett formulär. I formuläret skall
besökaren kunna skriva in namn, telefonnummer, e-postadress samt ett meddelande. Formuläret
ska realtidsvalideras när användaren matar in information, det ska ske en kontroll att det som
matas in är i enlighet med det förväntade och användaren ska få feedback INNAN den klickar på
skicka-knappen. 