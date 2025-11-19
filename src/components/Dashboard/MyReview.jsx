
import UserReviewsWidget from "./UserReviewsWidget";

const MOCK_REVIEWS = [
  {
    id: 1,
    title: "Esperienza perfetta",
    comment: "Servizio rapido e assistenza clienti impeccabile.",
    rating: 5,
    date: "18/11/2025",
    source: "App",
  },
  {
    id: 2,
    title: "Tutto ok",
    comment: "Prodotto come da descrizione, spedizione nei tempi.",
    rating: 4,
    date: "15/11/2025",
    source: "Shop",
  },
  {
    id: 3,
    title: "Molto soddisfatta",
    comment: "Organizzazione semplice e intuitiva, consigliato.",
    rating: 5,
    date: "10/11/2025",
    source: "MaCasatoresc",
  },
];

export default function MyReview() {
  return (
    <section className="space-y-4">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
        <h1 className="text-lg font-semibold text-slate-900 mb-1">
          Le mie recensioni
        </h1>
        <p className="text-xs text-slate-500">
          Qui trovi una panoramica di cosa pensano gli utenti dei tuoi servizi.
        </p>
      </div>

      <UserReviewsWidget reviews={MOCK_REVIEWS} />
    </section>
  );
}
