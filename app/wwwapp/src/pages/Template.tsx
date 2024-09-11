import Header from "../Sections/Header"
import SideBar from "../Sections/SideBar"

export default function Template({children}: {children: React.ReactNode}) {
    return (
        <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                        <SideBar />
                    </aside>
                    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                        {children}
                    </main>
                </div>
            </main>
        </div>
    )
}