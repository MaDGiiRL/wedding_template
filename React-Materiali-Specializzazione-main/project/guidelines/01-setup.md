# Setup Rehacktor

## Generazione Vite + React app

Assicuriamoci di essere nella cartella working area o development e lanciamo il comando sul terminale:

```sh
npm create vite@latest
```

Una volta generata la cartella di progetto “rehacktor-specializzazione” o qualsiasi nome abbiate assegnato al progetto entriamo nella cartella di progetto:

```sh
cd rehacktor-specializzazione
```

Installiamo le dipendenze:

```sh
npm install
```

Eseguiamo il progetto in dev mode, assicurandoci che tutto funzioni:

```sh
npm run dev
```

## Setup files

Iniziamo creando un basic setup, con un semplice file global.css e un App.jsx component.

Questa sará la nostra struttura di files e cartelle nella cartella src

```.
└─ src/                   # source dir
   ├─ assets/
   ├─ App.jsx
   ├─ global.css
   └─ main.jsx
```

Nel nostro App.jsx questo dovrebbe essere il risultato dopo la semplificazione del file

![An image](../../assets/code.png)

## Installa Style Framework o setup custom CSS

Ci sono varie opzioni a scelta dello studente per il CSS

- Custom CSS modules
- CSS in JS
- Utility Class based CSS
    - Tailwind CSS
    - Bootstrap CSS
- React Component libraries
    - Material UI
    - Chakra UI
    - Shadcn UI
    - React-bootstrap
    - Mantine

## Tailwind CSS installation

Per questo esempio useremo tailwind CSS. Un utility-first classes CSS framework che semplificherà la scrittura del CSS all'interno dei nostri componenti, fornendo inoltre i vantaggi dello scoped component style.

Consigliamo allo studente di seguire la documentazione ufficiale di [tailwind CSS](https://tailwindcss.com/)

Dal terminale, nella cartella di progetto eseguiamo l'installazione:

```sh
npm install tailwindcss @tailwindcss/vite
```

dopo aver controllato che la libreria sia presente tra le nostre dipendenze, andiamo nel file ```vite.config.js``` aggiungendo il plugin di tailwindcss:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

Dopo di che aggiungeremo ```@import``` al nostro file CSS globale importanto Tailwind CSS:

```css
@import "tailwindcss";

```

Da questo momento in poi dovremmo essere in grado di usare le utility classes di tailwind.

```jsx
function App() {
  return (
    <main className="flex justify-center p-5">
      <h1 className="text-4xl font-bold text-sky-600">Rehacktor</h1>
    </main>
  )
}

export default App;

```
