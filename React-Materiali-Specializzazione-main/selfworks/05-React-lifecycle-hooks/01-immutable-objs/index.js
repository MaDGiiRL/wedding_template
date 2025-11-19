const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    publisher: "J. B. Lippincott & Co.",
    genres: ["Southern Gothic", "Coming-of-age", "Historical Fiction"],
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    publisher: "Secker & Warburg",
    genres: ["Dystopian", "Political Fiction", "Social Science Fiction"],
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    publisher: "Charles Scribner's Sons",
    genres: ["Modernist Literature", "Jazz Age", "Tragedy"],
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
    publisher: "T. Egerton, Whitehall",
    genres: ["Romance", "Satire", "Regency Romance"],
  },
  {
    id: 5,
    title: "Brave New World",
    author: "Aldous Huxley",
    publicationYear: 1932,
    publisher: "Chatto & Windus",
    genres: ["Dystopian Fiction", "Social Science Fiction", "Science Fiction"],
  },
];

// 4. Aggiungi un nuovo book all'array:
const newBook = {
  id: 6,
  title: 'The Catcher in the Rye',
  author: 'J. D. Salinger',
  publicationYear: 1951,
  publisher: 'Little, Brown and Company',
  genres: ['Bildungsroman', 'Realistic Fiction']
};
const updatedBooks1 = [ /* your code here */ ];


// 5. aggiorna l'anno di pubblicazione del book con ID 3 al 1922:
const updatedBooks2 = books.map((book) => {
  // your code here
});


// 6. Aggiungi un nuovo genere, "Romantic Novel", al book con ID 4:
const updatedBooks3 = books.map((book) => {
  // your code here
});

// 7. Aggiungi l'autore al book con ID 2 di nome "Eric Blair" (George Orwell's real name):
const updatedBooks4 = books.map((book) => {
  // your code here
});


// 8. Rimuovi il genere "Coming-of-age" dal book con ID 1:
const updatedBooks5 = books.map((book) => {
  // your code here
});