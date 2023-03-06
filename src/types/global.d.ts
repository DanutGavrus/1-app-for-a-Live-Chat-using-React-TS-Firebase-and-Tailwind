import { FirebaseApp } from "firebase/app";
import { User } from "firebase/auth";

export { };

declare global {
  type LiveChatContext = {
    app: FirebaseApp,
    user: User | null | undefined
  }
}
