export default function Loading({ classNameToAdd }) {
  let className = "text-3xl text-center font-bold text-accent";
  if (classNameToAdd) {
    className += " " + classNameToAdd;
  }

  return (
    <p className={className}>Loading...</p>
  );
}

// TODO: Replace loading text with a spinner.