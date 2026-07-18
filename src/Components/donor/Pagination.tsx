interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-40"
      >
        Previous
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              onPageChange(index + 1)
            }
            className={`h-10 w-10 rounded-lg ${
              page === index + 1
                ? "bg-red-600 text-white"
                : "border"
            }`}
          >
            {index + 1}
          </button>
        )
      )}

      <button
        disabled={page === totalPages}
        onClick={() =>
          onPageChange(page + 1)
        }
        className="rounded-lg border px-4 py-2 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}