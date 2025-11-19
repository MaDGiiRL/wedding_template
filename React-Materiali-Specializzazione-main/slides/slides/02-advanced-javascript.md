---
revealOptions:
  transition: 'fade'
---

---

<img src="https://aulab.it/img/logo-aulab-horizontal-white.png">
<h3 class="r-fit-text">SPECIALIZZAZIONE REACT</h3>


---

# Advanced javascript

---

## OBIETTIVI DI QUESTO MODULO 

* Comprensione e uso della programmazione orientata alle funzioni in JavaScript <!-- .element: class="fragment" -->
* Utilizzare le funzionalità di JavaScript per la gestione delle operazioni asincrone<!-- .element: class="fragment" -->
* Utilizzare le funzionalità di JavaScript per fare chiamate api  <!-- .element: class="fragment" -->

---

# Functional Programming 

----

> In computer science, functional programming is a programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values, rather than a sequence of imperative statements which update the running state of the program. 

----

### Perchè imparere questo paradigma di programmazione?

* Paradigma con il quale si basa lo sviluppo web in React. <!-- .element: class="fragment" -->
* Riuscire ad esprimere la nostra logica attraverso funzioni e solo funzioni <!-- .element: class="fragment" -->
* Riuscire a limitare effetti di risposta che non siano computazionalmente il risultato di una elaborazione degli input in ingresso. <!-- .element: class="fragment" -->
* Riuscire a trattare le funzioni come qualsiasi altro tipo di variabile <!-- .element: class="fragment" -->

----

### Architettura software fatta da pure, stateless, reusable functions

* Evita mutabilità e side-effects, I dati sono immutabili => data-in, new data-out <!-- .element: class="fragment" -->
* Non esiste una dipendenza rispetto allo stato del programma, il quale include variabili globali che sono soggette ad aggiornamenti. <!-- .element: class="fragment" -->
* Usa funzioni che garantiscano l'immutabilità dello stato dell’applicazione. <!-- .element: class="fragment" -->
* Higher order function è una funzione che accetta una funzione come argomento, restituisce una funzione o entrambi! Puoi utilizzare funzioni di ordine superiore per smettere di ripeterti nel codice. <!-- .element: class="fragment" -->

----

## Approccio Functional 

```js [1-4|7-13|16-19]
    const name = "Ana";
    const greet = "Hello";
    
    console.log(greet + ' ' + name);


    const name = "Ana";
    const greet = "Hello";

    function greet() {
      return greet + ' ' + name;
    }
    console.log(greet());


    function greet(name) {
      return 'Hello ' + name;
    }
    console.log(greet('Ana'));
```

----

## Javascript per il functional programming

* higher order function
* closures
* pure functions

----

## higher order function

----

```js [1-3|5-7|9|1-9]
    function callbackFn() {
      console.log("I'm a callback running...");
    } 
    
    function HighOrderFn(callback) {
      callback();
    }

    HighOrderFn(callbackFn)
```

----

Le funzioni sugli array integrate in JavaScript _.map_, _.reduce_ e _.filter_ accettano tutte una funzione. Sono ottimi esempi di funzioni di ordine superiore, poiché eseguono l'iterazione su un array e chiamano la funzione ricevuta per ciascun elemento dell'array.

---

# Javascript Asincrono
----

> Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

----

### Async Operations in JavaScript

* Operazioni che non si eseguono secondo un flusso sequeziale  <!-- .element: class="fragment" -->
* Richiedono un certo tempo di esecuzione <!-- .element: class="fragment" -->
* Operazioni che annulano i tempi di attesa, eseguendo il resto del codice in background <!-- .element: class="fragment" -->
* Spesso ricorrenti quando dobbiamo consumare delle APIs  <!-- .element: class="fragment" -->

----

### Gestione delle Op. Asincrone

* Event Handlers  <!-- .element: class="fragment" -->
* Particolari tipologie di Event Handlers: Callback  <!-- .element: class="fragment" -->
* Promise <!-- .element: class="fragment" -->

---

# HTTP REQUESTS

----

## Working On HTTP requests

* XMLHTTPrequest <!-- .element: class="fragment" -->
* Fetch API <!-- .element: class="fragment" -->
* Axios <!-- .element: class="fragment" -->
* altri ?? <!-- .element: class="fragment" -->

----

## Async/Await 

Quando dovrei usare async / await operations 

---

# Javascript Asincrono *Recap*

---

## Obiettivi di questo modulo

* Comprensione e uso della programmazione orientata alle funzioni in JavaScript <!-- .element: class="fragment" -->
* Utilizzare le funzionalità di JavaScript per la gestione delle operazioni asincrone<!-- .element: class="fragment" -->
* Utilizzare le funzionalità di JavaScript per fare chiamate api  <!-- .element: class="fragment" -->
