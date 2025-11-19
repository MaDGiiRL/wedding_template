

function getAverageRating(reviews) {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + (r.rating || 0), 0);
  return Number((sum / reviews.length).toFixed(1));
}

function RatingStars({ value }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.round(value);
    stars.push(
      <span
        key={i}
        className={`inline-block text-sm ${
          filled ? "text-yellow-400" : "text-slate-300"
        }`}
      >
        ★
      </span>
    );
  }
  return <span>{stars}</span>;
}

export default function UserReviewsWidget({ reviews = [] }) {
  const average = getAverageRating(reviews);
  const total = reviews.length;
  const lastReviews = reviews.slice(0, 3);

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-slate-900 md:text-lg">
            Le tue recensioni
          </h2>
          <p className="text-xs text-slate-500 md:text-sm">
            Panoramica della soddisfazione dei tuoi utenti
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 px-3 py-2 text-right">
          <div className="flex items-center justify-end gap-2">
            <span className="text-lg font-semibold text-slate-900 md:text-xl">
              {average.toFixed(1)}
            </span>
            <RatingStars value={average} />
          </div>
          <p className="text-[11px] text-slate-500 md:text-xs">
            Basato su {total} recensioni
          </p>
        </div>
      </div>

      {/* Lista recensioni */}
      {total === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center">
          <p className="mb-1 text-sm font-medium text-slate-700">
            Nessuna recensione ancora
          </p>
          <p className="text-xs text-slate-500">
            Quando inizierai a ricevere feedback, li vedrai comparire qui.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {lastReviews.map((review) => (
            <div
              key={review.id}
              className="flex items-start justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3 text-sm md:px-4 md:py-4"
            >
              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <RatingStars value={review.rating} />
                  {review.title && (
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                      {review.title}
                    </span>
                  )}
                </div>
                {review.comment && (
                  <p className="text-xs text-slate-700 md:text-sm">
                    {review.comment}
                  </p>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-500 md:text-xs">
                  {review.date && <span>{review.date}</span>}
                  {review.source && (
                    <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      {review.source}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      {total > 3 && (
        <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 md:text-xs">
          <span>Mostrate le ultime {lastReviews.length} recensioni</span>
          <button
            type="button"
            className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-700 transition hover:bg-slate-100 md:text-xs"
          >
            Vedi tutte
          </button>
        </div>
      )}
    </div>
  );
}
