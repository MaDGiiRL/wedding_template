---
revealOptions:
  transition: 'fade'
---

---

<img src="https://aulab.it/img/logo-aulab-horizontal-white.png">
<h3 class="r-fit-text">SPECIALIZZAZIONE REACT</h3>


---

# INTRO ALLO SVILUPPO WEB MODERNO

---

## OBIETTIVI DI QUESTO MODULO 

* Descrivere l' ecosistema moderno di sviluppo web utilizzando parole come Node.js, npm, Transpiler e Bundler <!-- .element: class="fragment" -->
* Utilizzare le funzionalità di JavaScript moderno per costruire applicazioni front-end <!-- .element: class="fragment" -->
* Utilizzare Node.js e npm per gestire le dipendenze delle applicazioni <!-- .element: class="fragment" -->

---

# Il moderno ecosistema di sviluppo web

----

> Per capire perché usiamo gli strumenti che usiamo oggi, dovremmo dare un'occhiata a quello che abbiamo fatto _prima_ che questi nuovi strumenti esistessero.

----

### Static File Development

* Solo file HTML, CSS e JavaScript (gli unici 3* linguaggi che il browser capisce...)  <!-- .element: class="fragment" -->
* Le librerie (come jquery, lodash o bootstrap) sono incluse da un CDN o servite direttamente dalla stessa cartella  <!-- .element: class="fragment" -->
* Nessun tempo di run time server (come PHP, Python, Java o C#)  <!-- .element: class="fragment" -->
* Nessun pre-build o post-build process  <!-- .element: class="fragment" -->
* Solo sviluppo dei file per poi aprirli in un browser web o ospitarli su un file server statico o CDN  <!-- .element: class="fragment" -->
* Il codice che gli utenti stanno eseguendo nel loro browser web è esattamente il codice che viene scritto  <!-- .element: class="fragment" -->

----

### Discutiamo: Quali sono alcuni aspetti negativi per la costruzione di siti web in questo modo?

----

### Aspetti da considerare


* Gestione file - Cosa succede alla nostra code base quando abbiamo 10+ file html, 20+ file javascript e 10+ file css?  <!-- .element: class="fragment" -->
* Riutilizzo del codice - Come possiamo condividere codice comune / elementi / stili / layout senza duplicazione (copia incolla)?  <!-- .element: class="fragment" -->
* Gestione delle dipendenze - Come gestiamo tutte le nostre dipendenze (cose come jquery, lodash, bootstrap ecc.)?  <!-- .element: class="fragment" -->
* Supporto del browser - Che cosa succede se alcuni dei nostri utenti utilizzano browser più vecchi, o un browser web non abbiamo testato con? Sarà il nostro sito funziona ancora?  <!-- .element: class="fragment" -->
* Tempo di caricamento della pagina - Con oltre 30 file da scaricare, il sito verrà caricato abbastanza velocemente? Metteremo a dura prova la larghezza di banda dei nostri utenti?  <!-- .element: class="fragment" -->

----

## Come gestiamo queste cose nello sviluppo Web moderno? 

----

### Gestione dei file

Possiamo trattare tutti i nostri file come *moduli* e condividerli nella nostra code base. Creiamo e li definiamo una volta, quindi li importiamo e li usiamo dove necessario. (Strumenti come [Vite](https://vitejs.dev/)/[Parcel](https://parceljs.org/)/[Webpack](https://webpack.js.org/)/[Rollup](https:/rollupjs.org/guide/en/) ci aiutano con questo)

----

### Riutilizzo del codice

Se suddividiamo la nostra interfaccia utente in singoli componenti unici, questi componenti possono essere condivisi e riutilizzati nella nostra code base. (Aiuto per le librerie di componenti come React, Vue, Angular, Lit)

----

### Gestione delle dipendenze

Possiamo facilmente gestire quale versione di una data dipendenza è necessaria per il nostro progetto, e importare quelle dipendenze come necessario (npm usa il file package.json per questo)

----

### Browser Support

Strumenti come [Babel](https://babeljs.io/) ci permettono di scrivere codice che usa le ultime caratteristiche di JavaScript o linguaggi personalizzati come [JSX](https://react.dev/learn/writing-markup-with-jsx), il codice che scriviamo è quindi *transpiled* in codice che è attualmente [supportato da tutti i browser web](https://caniuse.com/). CSS ha strumenti simili come [SASS](https://sass-lang.com/), [Less](https://lesscss.org/) o [Stylus](https://stylus-lang.com/) e [Post-CSS](https://postcss.org/) che aggiunge automaticamente i prefissi del browser alle nostre proprietà CSS se necessario.

----

### Page Load Time

Dopo aver [*transpiled*](https://en.wikipedia.org/wiki/Source-to-source_compiler) il nostro codice può essere [*minified*](https://en.wikipedia.org/wiki/Minification_(programming)) e [*bundled*](https://altcademy.com/blog/what-is-bundling-in-javascript/) per produrre il minor numero di file e la dimensione del file più piccola possibile per i nostri utenti finali.

---

# Utilizzare le funzionalità di JavaScript moderno per costruire applicazioni front-end

----

### JavaScript -> ECMAScript

* JS ha una lunga storia ed è stato inizialmente introdotto nel 1995.  <!-- .element: class="fragment" -->
* Il supporto delle funzionalità tra i browser web era notoriamente incoerente (i browser web concorrenti come Netscape e Internet Explorer supportavano solo alcune funzionalità o avevano implementazioni diverse)  <!-- .element: class="fragment" -->
* Il comitato standard ECMAScript (TC39) è stato formato per unificare il linguaggio  <!-- .element: class="fragment" -->
* Il comitato è composto da veterani del settore provenienti da molte delle migliori aziende. Si incontrano e decidono su quali nuove caratteristiche saranno implementate nel linguaggio. <!-- .element: class="fragment" -->

----

### ECMAScript

* ECMAScript 3 è stato rilasciato nel 1999  <!-- .element: class="fragment" -->
* ECMAScript 4 non esiste...  <!-- .element: class="fragment" -->
* ECMAScript 5 è stato rilasciato nel 2009  <!-- .element: class="fragment" -->
* ECMAScript 2015 (versione 6) o ES6 o ES2015 ha portato un ampio elenco di modifiche al linguaggio. Questi cambiamenti furono accolti favorevolmente dalla comunità JS e portarono anche sviluppatori di altri linguaggi nella comunità JS.  <!-- .element: class="fragment" -->
* Con il rilascio di ES2015, il comitato ECMAScript si è impegnato a rilasciare una nuova versione di ECMAScript ogni anno! Siamo ora a ES2023! Ogni release successiva è stata molto più piccola nel numero di caratteristiche che sono state aggiunte  <!-- .element: class="fragment" -->

----

## ECMAScript 2015 Features

* [Arrow Functions](https://ponyfoo.com/articles/es6-arrow-functions-in-depth)  
  * Lexical `this` binding  
* [Template Strings](http://ponyfoo.com/articles/es6-template-strings-in-depth)  
* [Destructuring](http://ponyfoo.com/articles/es6-destructuring-in-depth)  
* [Modules](https://ponyfoo.com/articles/es6-modules-in-depth)  
* [let and const variable declarations](http://ponyfoo.com/articles/es6-let-const-and-temporal-dead-zone-in-depth)  
  * Block Scope  
* [Object literal features](http://ponyfoo.com/articles/es6-object-literal-features-in-depth) (property assignment and computed property assignment)  
* [Spread and Rest Operators](http://ponyfoo.com/articles/es6-spread-and-butter-in-depth)  
* [Functions - Default parameter assignment](https://ponyfoo.com/articles/es6-spread-and-butter-in-depth#default-operator)  
* [Map](https://ponyfoo.com/articles/es6-maps-in-depth) and [Set](https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth) Data Structures  
* [Classes](http://ponyfoo.com/articles/es6-classes-in-depth)  
* [Symbols](https://ponyfoo.com/articles/es6-symbols-in-depth), [Iterators](https://ponyfoo.com/articles/es6-iterators-in-depth) and [Generators](https://ponyfoo.com/articles/es6-generators-in-depth)  
* Tail Calls  
* [Proxies](https://ponyfoo.com/articles/es6-proxies-in-depth) and the [Reflect API](https://ponyfoo.com/articles/es6-reflection-in-depth)  

----

## Caratteristiche utilizzate pesantemente in React

* [Modules](https://ponyfoo.com/articles/es6-modules-in-depth)
* [let and const variable declarations](http://ponyfoo.com/articles/es6-let-const-and-temporal-dead-zone-in-depth)
  * Block Scope
* [Arrow Functions](https://ponyfoo.com/articles/es6-arrow-functions-in-depth)
  * Lexical `this` binding
* [Destructuring](http://ponyfoo.com/articles/es6-destructuring-in-depth)

---

# Utilizzare Node.js e npm per gestire le dipendenze delle applicazioni

----

## Node.js

* Creato nel 2009 da Ryan Dahl <!-- .element: class="fragment" -->
* JavaScript runtime environment <!-- .element: class="fragment" -->
* Può essere utilizzato per eseguire JavaScript lato server <!-- .element: class="fragment" -->
  * Sviluppo APIs
  * Accesso Databases
  * Process files
  * General scripting
* Lo useremo per eseguire le nostre attività di compilazione (scripting generale!) (il codice di reazione che scriviamo non sarà in esecuzione su un server, sarà solo in esecuzione nel browser come file statici!) <!-- .element: class="fragment" -->
* Possiamo eseguire programmi node direttamente dalla riga di comando. <!-- .element: class="fragment" -->

----

## NPM

* Package manager - gestire le dipendenze della nostra code base
* Useremo npm per installare react come una dipendenza più tardi!
* [npmjs.com](https://www.npmjs.com/) - un repository per le dipendenze JavaScript, chiunque può pubblicare un modulo qui
* Possiamo installare i pacchetti e aggiungerli automaticamente al nostro file `package.json` con `npm install <nome-pacchetto>`

----

## package.json

Questo file include informazioni sul nostro progetto ed elenca tutte le dipendenze che abbiamo installato. Questo file dovrebbe essere inviato al nostro repo.

```json [2|3|5|10-11]
{
  "name": "01-the-modern-web",
  "version": "1.0.0",
  "description": "",
  "scripts": {},
  "keywords": [],
  "author": "",
  "type": "module",
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {}
}
```

----

## `node_modules` cartella

Tutte le dipendenze che installiamo sono memorizzate in questa cartella (per ogni progetto che creiamo!). Questa cartella non dovrebbe essere aggiunta in git (assicurati di aggiungerla al tuo file `.gitignore` ).

---

# SVILUPPO WEB MODERNO *Recap*

---

## Obiettivi di questo modulo

* Descrivere l' ecosistema moderno di sviluppo web utilizzando parole come Node.js, npm, Transpiler e Bundler <!-- .element: class="fragment" -->
* Utilizzare le funzionalità di JavaScript moderno per costruire applicazioni front-end <!-- .element: class="fragment" -->
* Utilizzare Node.js e npm per gestire le dipendenze delle applicazioni <!-- .element: class="fragment" -->
