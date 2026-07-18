interface ViewProfileButtonProps {
  onClick: () => void;
}

export default function ViewProfileButton({
  onClick,
}: ViewProfileButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
    >
      View Profile
    </button>
  );
}