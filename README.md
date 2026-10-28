# Johan Blomdahl – Portfolio

Svensk portfolio byggd med Next.js App Router, React och TypeScript. Elva projekt med kategorifilter, sökning och separata projektsidor. Ljus design med olivgröna accenter och responsiv mobilmeny.

## Kör lokalt

Kräver Node.js 24 och npm.

```sh
npm install
npm run dev
```

Öppna http://127.0.0.1:3000.

## Redigera innehållet

- `src/data/projects.ts`: namn, kontakt, projekttexter, teknikval, ordning, GitHub-länkar och resultat. Lägg till en e-postadress i `profile.email` för att visa mejlkontakt.
- `src/components/project-visual.tsx`: kodritade illustrationer som ersätts med riktiga skärmdumpar när sådana finns. De är märkta **Gränssnittsskiss** och gör inga anspråk på att visa produkternas verkliga gränssnitt.
- `src/app/globals.css`: färger, typografi och responsiv layout.
- `src/app/layout.tsx`: sidtitel och sökmetadata.

Tekniker har verifierats mot åtkomliga paketfiler och README där det varit möjligt. Slowlax-repot gick inte att läsa via den anslutna GitHub-åtkomsten. Projektbeskrivningar utgår även från Johans underlag. Garageexpertens omsättningsresultat är lämnat av Johan. Säkerhets-, betalnings- och medicinska certifieringar påstås inte. Naturas README beskriver ett offline-register för skulder och signerade händelser, inte bankbetalningar.

Inga GitHub-nycklar eller runtime-anslutningar behövs. Privata repo-länkar märks på projektsidorna. Nya projekt läggs till i datafilen; projektantalet i huvudnavigationen följer listan.

## Kontrollera och bygg

```sh
npm run typecheck
npm run build
```

Bygget genererar statiska HTML-sidor i `out/`, inklusive alla projektsidor. Webbplatsen kan köras på valfri statisk hosting. Kör `npm start` efter bygget för lokal förhandsgranskning på http://127.0.0.1:3000, eller `npm run dev` för utveckling.

Typsnitten hämtas vid byggtid via `next/font/google` och levereras lokalt. Inga externa bildtjänster används.
