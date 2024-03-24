export default function formatDateHive(fechaCreacion) {
  const createdDate = new Date(fechaCreacion);
  const now = new Date();

  // Calcular el tiempo transcurrido
  const diffInMilliseconds = now - createdDate;
  const diffInSeconds = diffInMilliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;
  const diffInWeeks = diffInDays / 7;
  const diffInMonths = diffInDays / 30.44; // Aproximación
  const diffInYears = diffInDays / 365.25; // Aproximación

  let timeElapsed;

  if (diffInYears >= 1) {
    timeElapsed = `Creada hace ${Math.floor(diffInYears)} año(s)`;
  } else if (diffInMonths >= 1) {
    timeElapsed = `Creada hace ${Math.floor(diffInMonths)} mes(es)`;
  } else if (diffInWeeks >= 1) {
    timeElapsed = `Creada hace ${Math.floor(diffInWeeks)} semana(s)`;
  } else {
    timeElapsed = `Creada hace ${Math.floor(diffInDays)} día(s)`;
  }

  return timeElapsed;
}
