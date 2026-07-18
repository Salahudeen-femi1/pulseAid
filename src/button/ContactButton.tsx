interface ContactButtonProps {
  onClick: () => void;
}

export default function ContactButton({
  onClick,
}: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
    >
      Contact
    </button>
  );
}