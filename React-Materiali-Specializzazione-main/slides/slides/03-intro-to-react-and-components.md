---
revealOptions:
  transition: 'fade'
---

---

<img src="https://aulab.it/img/logo-aulab-horizontal-white.png">
<h3 class="r-fit-text">SPECIALIZZAZIONE REACT</h3>

---

# Introduzione a React e gerarchie tra componenti

<img class="md-lg-img center" src="./assets/images/REACT_LOGO.png">

---

## Obiettivi di questo modulo

* Spiegare che cosa è React <!-- .element: class="fragment" -->
* Descrivere como funzionano parole come Virtual DOM, Render e State  <!-- .element: class="fragment" -->
* Modi di generare una React app  <!-- .element: class="fragment" -->
* Spigare lo scopo di ogni file in un'app react generata  <!-- .element: class="fragment" -->
* Utilizzare JSX per costruire componenti React  <!-- .element: class="fragment" -->
* Elencare i modi in cui JSX è diverso da HTML normale  <!-- .element: class="fragment" -->
* Usare l'hook useState per gestire lo stato del componente  <!-- .element: class="fragment" -->
* Utilizzare array map per iterare sui dati in React  <!-- .element: class="fragment" -->
* Gestire gli eventi DOM su elementi React  <!-- .element: class="fragment" -->
* Usare React per scomporre un'interfaccia utente in componenti chiaramente definiti  <!-- .element: class="fragment" -->
* Usare React per costruire gerarchie tra componenti  <!-- .element: class="fragment" -->
* Gestire lo state tra i componenti  <!-- .element: class="fragment" -->
* Creare componenti di React che comunicano tra loro utilizzando state props  <!-- .element: class="fragment" -->
* Utilizzare React Developer Tools per eseguire debug efficace delle app React  <!-- .element: class="fragment" -->

---

## Spiegare cos'é React

----

* Front-end JavaScript library / framework <!-- .element: class="fragment" -->
* Una libreria per creare interfacce web <!-- .element: class="fragment" -->
* React è dichiarativo (jQuery / Vanilla DOM è imperativo) <!-- .element: class="fragment" -->
* React consente di creare interfacce utente da singoli pezzi chiamati componenti <!-- .element: class="fragment" -->
* Per scrivere componenti React, usiamo un linguaggio chiamato JSX per scrivere HTML all'interno del nostro JavaScript <!-- .element: class="fragment" -->

----

<img src="./assets/images/video-component.png">

----

## Vanilla JS Esempio

----

```html
<div id="video">
  <img id="video-img" />
  <a id="video-link">
    <h3 id="video-title"></h3>
    <p id="video-description"></p>
  </a>
  <button id="video-like-button">
    <img id="video-like-button-image" />
  </button>
</div>
```

----

```js [1-5|7-11]
const videoImage = document.querySelector('#video-img');
const videoLink = document.querySelector('#video-link');
const videoTitle = document.querySelector('#video-title');
const videoDescription = document.querySelector('#video-description');
const videoLikeButtonImage = document.querySelector('#video-like-button-image');

videoImage.src = 'https://coolimage.com/image.png';
videoLink.setAttribute('href', 'https://coolvideo.com/video')
videoTitle.textContent = 'Cool Video';
videoDescription.textContent = 'A very cool video';
videoLikeButtonImage.src = 'https://heartimage.com/heart.png';
```

----

```html
<div id="video">
  <img id="video-img" src="https://coolimage.com/image.png">
  <a id="video-link" href="https://coolvideo.com/video">
    <h3 id="video-title">Cool Video</h3>
    <p id="video-description">A very cool video</p>
  </a>
  <button id="video-like-button">
    <img id="video-like-button-image" src="https://heartimage.com/heart.png" />
  </button>
</div>
```

----

```js [1|3-5|7-8|9-11|12-14|15|17-20|21]
const videoElement = document.createElement('div');

const thumbnailElement = document.createElement('img');
thumbnailElement.src = 'https://coolimage.com/image.png';
videoElement.appendChild(thumbnailElement);

const linkElement = document.createElement('a');
linkElement.setAttribute('href', 'https://coolvideo.com/video')
const titleElement = document.createElement('h3');
titleElement.textContent = 'Cool Video';
linkElement.appendChild(titleElement);
const descriptionElement = document.createElement('p');
descriptionElement.textContent = 'A very cool video';
linkElement.appendChild(descriptionElement);
videoElement.appendChild(linkElement);

const buttonElement = document.createElement('button');
const buttonImageElement = document.createElement('img');
buttonImageElement.setAttribute('src', 'https://heartimage.com/heart.png');
buttonElement.appendChild(buttonImageElement);
videoElement.appendChild(buttonImageElement);
```

----

```html
<div>
  <img src="https://coolimage.com/image.png">
  <a href="https://coolvideo.com/video">
    <h3>Cool Video</h3>
    <p>A very cool video</p>
  </a>
  <button>
    <img src="https://heartimage.com/heart.png" />
  </button>
</div>
```

----

## React Esempio


```jsx [1-3|5-15|5|8|9-12|13|5-15]
import Thumbnail from './Thumbnail';
import LikeButton from './LikeButton';

function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
```

[via react.dev homepage](https://react.dev/)

---

## Descrivi come funzionano parole come Virtual DOM, Render e State

----

## State

> In informatica e computer science, un sistema è descritto come stateful se è progettato per ricordare eventi precedenti o interazioni degli utenti; l'informazione ricordata è chiamata lo stato del sistema.  <!-- .element: class="fragment" -->

* Tutti i dati della nostra applicazione in un determinato momento <!-- .element: class="fragment" -->
* Modifica dello stato mentre l'utente interagisce con l'applicazione <!-- .element: class="fragment" -->

----

## Virtual DOM

* Il virtual (JSON) rapprensentazione del DOM (Document Object Model) <!-- .element: class="fragment" -->
* React confronta gli alberi VDOM precedenti e successivi per aggiornare in modo efficiente il DOM reale <!-- .element: class="fragment" -->

----

## Render

* Il processo di applicazione delle ultime modifiche di stato all'interfaccia utente. <!-- .element: class="fragment" -->

----

### Come funziona il tutto

1. Quando lo stato cambia, react esegue nuovamente la nostra funzione di rendering per ottenere un nuovo albero VDOM.  <!-- .element: class="fragment" -->
2. React confronta quindi questo nuovo albero VDOM con l'attuale VDOM.  <!-- .element: class="fragment" -->
3. Tutte le modifiche rilevate vengono poi applicate al DOM reale.  <!-- .element: class="fragment" -->

---

## Usa vite per generare applicazioni react

---

## Spiega lo scopo di ogni file in un'app react generata

---

## Utilizzare JSX per costruire componenti React

---

## Elenca i modi in cui JSX è diverso da HTML normale

----

Vedi questo articolo [here](https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/)

---

## Usa useState per gestire lo stato dei componenti

---

## Usa array map per iterare sui dati in React

---

## Gestire gli eventi DOM su elementi React

---

## Usa React per scomporre un'interfaccia utente in componenti chiaramente definiti

---

## Usa React per costruire gerarchie tra componenti

---

## Gestire lo stato tra componenti

---

## Creare componenti di React che comunicano tra loro utilizzando lo stato e le props

---

## Utilizzare React Developer Tools per eseguire debug efficace delle app React

---

## Obiettivi del modulo *Recap*

* Spiega cos'é React
* Descrivi come funzionano parole come Virtual DOM, Render e State 
* Usa vite per generare applicazioni React
* Spiega lo scopo di ogni file in un'app React generata 
* Utilizza JSX per creare componenti React
* Elenca i modi in cui JSX è diverso da HTML normale 
* Usa useState per gestire lo stato dei componenti 
* Utilizza array map per iterare sui dati in React
* Gestisci gli eventi DOM su elementi React
* Usa React per scomporre un'interfaccia utente in componenti chiaramente definiti 
* Usa React per costruire gerarchie di componenti 
* Gestisci lo stato di componenti e applicazioni 
* Crea componenti di React che comunicano tra loro utilizzando lo stato e le props
* Utilizza React Developer Tools per eseguire debug efficace delle app React 
