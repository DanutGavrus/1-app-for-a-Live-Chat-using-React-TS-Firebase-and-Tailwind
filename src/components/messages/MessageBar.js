import { useState } from "react";

export default function MessageBar() {
  // TODO: Send message functionality
  const [messageContent, setMessageContent] = useState("");
  const sendBtnClassName = "h-10 bg-[var(--color-aux)] rounded-tr-xl col-span-1";

  return (
    <div className="sticky bottom-0 mt-auto grid grid-cols-12">
      <input type="text" onChange={(e) => { setMessageContent(e.target.value) }} placeholder="Send a message..." className="h-10 col-span-11 pl-3 rounded-bl-xl box-border border border-transparent focus:outline-none focus:border-[var(--color-accent)]" />
      {messageContent.length === 0 && <button className={sendBtnClassName}>{"⇐"}</button>}
      {messageContent.length > 0 && <button className={sendBtnClassName}>{"⬀"}</button>}
    </div>
  );
}