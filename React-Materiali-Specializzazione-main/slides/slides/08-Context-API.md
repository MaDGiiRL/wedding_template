---
revealOptions:
  transition: 'fade'
---

---

<img src="https://aulab.it/img/logo-aulab-horizontal-white.png">
<h3 class="r-fit-text">SPECIALIAZZAZIONE REACT</h3>

---

# Global state management

---

## Obiettivi del modulo

* Comprendere la condivisione di dati tra componenti <!-- .element: class="fragment" -->
* Come Creare una instanza dati da condividere tra i componenenti <!-- .element: class="fragment" -->
* Definire useContext hook <!-- .element: class="fragment" -->

---

## Creare un context

Dobbiamo definire un AppContext in modo da avere i dati a disposizione in ogni componente senza uso di props 

----

### ``` createContext() ```

* Set Initial value <!-- .element: class="fragment" -->
* Esporta il createContext <!-- .element: class="fragment" -->



----

### ``` AppContext.Provider ```

* Richiamare il componenti dove vogliamo condividere il context <!-- .element: class="fragment" -->
* Assicurarci richiamare un Provider <!-- .element: class="fragment" -->
* Set Initial value come props del provider <!-- .element: class="fragment" -->

----

## Esempio

```js

export default function App() {
  const [data, setData] = useState([]);
  
  return (
    <AppContext.Provider value={{ data, setData }}>
      <App />
    </AppContext.Provider>
  )

}

```

---

## Hook ``` useContext ```

----

Richiamare l'hook ```useContext()``` nei componenti dove usare i dati 


----

### Esempio 

```js
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export default function HomePage() {
  const appContext = useContext(AppContext);
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {appContext.data.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </>
  )
}

```

---

## Vantaggi di un Context 

* Global Data Sharing, condivisione dati <!-- .element: class="fragment" -->
* Avoids Prop Drilling, evito uso di props eccessive <!-- .element: class="fragment" -->
* Cleaner and More Maintainable Code, migliore manuntenzione del codice <!-- .element: class="fragment" -->

----

### Inconvenienti nell'uso del Context API 

Per gestione dello state globale, nel caso volessimo migliorare le performance, evitando eccessivi re-renders, migliorando la leggibiltá e la praticitá del codice, ci sono librerie nell'ecosistema React adatte a questi scopi. 

----

## Global state management Solutions

* [Redux 🪄](https://redux.js.org/)
* [MobX 🚀](https://mobx.js.org/react-integration.html)
* [React-Query ⏳](https://tanstack.com/query/latest/docs/framework/react/overview)
* [Zustand 👏🏻](https://docs.pmnd.rs/zustand/getting-started/introduction)
* [Easy-peasy 🎉](https://easy-peasy.vercel.app/)

---

## Obiettivi modulo recap

* Passare dati attraverso componenti 
* Creare una instanza dati da condividere tra i componenenti
* Definire useContext hook 