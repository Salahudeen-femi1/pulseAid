interface BadgeProps {
  text: string;
  variant?: "blood" | "success";
}

export default function Badge({
  text,
  variant = "blood",
}: BadgeProps) {
  const styles =
    variant === "blood"
      ? "bg-red-100 text-red-600"
      : "bg-green-100 text-green-700";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles}`}
    >
      {text}
    </span>
  );
}