import { Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        👋👋👋
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}