# Deploy App on Vercel

In questo capitolo vedremo come mettere online su un servizio serverless la nostra applicazione React con Vite.

## Come funziona Vercel

Vercel è una piattaforma di hosting serverless ottimizzata per framework frontend (React, Next.js, Vite, Astro, SvelteKit, ecc.). 

Funziona così:

* Ogni volta che fai un push su Git, Vercel:
* Esegue il comando di build
* Pubbica i file statici su una CDN globale
* Crea un URL per il progetto (può anche gestire domini personalizzati)
* Non devi gestire server, CDN o deploy manuali: è tutto automatizzato.

## Preparare il progetto

💡 Se usi funzionalità particolari (come ```import.meta.env```), verifica che le variabili siano settate correttamente per l’ambiente di produzione.

## Versionare il progetto su Git

Vercel lavora con repository Git (GitHub, GitLab o Bitbucket). Quindi:
Crea un repo (es. su GitHub)
Fai il push del tuo progetto:

```sh
git init
git add .
git commit -m "Deploy React + Vite app"
git remote add origin https://github.com/tuo-username/tuo-progetto.git
git push -u origin main
```

## Creare un account su Vercel

Vai su https://vercel.com e registrati. Usa il tuo account GitHub per semplificare l’integrazione.

Dopo esserti registrato scarica github App in modo da connettere i profili vercel con quello github.

## Importare il progetto su Vercel

Clicca su ```import tuo-progetto``` per selezionare il repository da pubblicare

Autorizza Vercel ad accedere al tuo GitHub o sei hai precedentemente scaricato github App l'accesso non è piu richiesto.

## Configurare il progetto

Durante l’importazione:

Vercel rileva automaticamente che stai usando Vite e propone:

Build Command: vite build

Output Directory: dist

Puoi configurare variabili d’ambiente se ne usi

Premi ```Deploy```

## ✅ Il sito è online

Dopo qualche secondo, Vercel ti fornirà un link del tipo:

```https://nome-progetto.vercel.app```

Ogni push su Git aggiornerà automaticamente il sito con una nuova build.