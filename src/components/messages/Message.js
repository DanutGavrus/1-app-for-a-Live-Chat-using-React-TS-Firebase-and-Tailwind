export default function Message({ message }) {
  // TODO: create a link which redirect user to sending an email to the author
  // TODO: pass the link from the profile picture provided by Firebase
  let pClassName = "w-fit max-w-[75%] bg-gradient-to-br from-color-second-to-main px-3 py-1 rounded-2xl";
  let liClassName = "mb-1 mx-3";
  if (message.user === "Danut Gavrus") {
    pClassName += " ml-auto";
  }
  return (
    <li className={liClassName}>
      <p className={pClassName}>{message.tempIcon + " " + message.user + ": " + message.content}</p>
    </li>
  );
}