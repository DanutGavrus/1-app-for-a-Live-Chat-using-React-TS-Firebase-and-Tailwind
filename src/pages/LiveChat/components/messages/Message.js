import { useOutletContext } from "react-router-dom";

export default function Message({ message }) {
  const context = useOutletContext();
  const user = context.user;

  let pClassName = "block w-fit max-w-[80%] bg-gradient-to-br from-secondary to-primary px-3 py-1 rounded-2xl";
  let liClassName = "mb-1 mx-3";
  if (user.uid === message?.userId) {
    pClassName += " ml-auto";
  }

  return (
    <li className={liClassName}>
      <p className={pClassName}><img src={message.userIcon} alt="User icon." className="w-4 h-4 mb-0.5 inline-block rounded-3xl" /> <a href={`mailto:${message.userEMail}`} target="_blank" rel="noreferrer" className="underline font-bold text-accent">{message.userDisplayName.split(" ")[0]}</a>{": " + message.content}</p>
    </li>
  );
}