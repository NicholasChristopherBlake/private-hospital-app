import { MainPage } from "pages/MainPage"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "widgets/Navbar"
import { PageLoader } from "widgets/PageLoader/ui/PageLoader"
import { Sidebar } from "widgets/Sidebar"

export const RootLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="page-wrapper">
        <Sidebar />
        <div className="page-content">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

