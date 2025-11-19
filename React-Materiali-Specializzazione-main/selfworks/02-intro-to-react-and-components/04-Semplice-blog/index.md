# Intro React e Components
## Selfwork 2.4 - Semplice Blog

--- 

- Usa vite per generare un'app react  in questa cartella
- Aggiungi picocss al file `index.html`
- Utilizzando i dati definiti in `posts.js` :
- Importa i dati nel componente dell'app
- Crea una gerarchia di componenti per un blog per il rendering dei dati:
            - App
                - Elenco dei post (PostList )
                - Inviare (Post)
                    - Immagine
                    - Contenuto
                    - Elenco commenti (Comments List)
                    - *Commento
- L'elenco dei post deve essere definito con useState nel componente App. Lo Stato non cambierà.
  - `const [posts] = useState(postsJSON)`
- Passa l'elenco dei post al componente PostList
- Il componente PostList dovrebbe iterare  sui post ed eseguire il rendering di un componente Post per ciascuno
- Il componente PostList dovrebbe passare un singolo post al componente Post
- Il componente Post dovrebbe eseguire il rendering dell'immagine e del contenuto
- Il componente Post dovrebbe passare i commenti al componente CommentList
- Il componente CommentList dovrebbe eseguire un'iterazione sui commenti ed eseguire il rendering di un componente Comment per ciascuno
- Il componente CommentList deve passare un singolo commento al componente Comment
- Il componente Comment dovrebbe restituire il nome utente e il testo del commento