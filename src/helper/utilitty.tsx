export function getFormattedDate() {
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return now.toLocaleDateString("en-US", options);
}

export function getInitials(firstName: string, lastName: string) {
  return firstName.trim()[0].toUpperCase() + lastName.trim()[0].toUpperCase();
}