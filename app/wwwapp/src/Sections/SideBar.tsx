import { Link } from "react-router-dom"

export default function SideBar() {
    return (
        <div>
            <div style={{minWidth: "100%", display: "table"}}>
                <div className="w-full">
                    <div className="pb-4">
                        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Get Started</h4>
                        <div className="grid grid-flow-row auto-rows-max text-sm">
                            {/* <Link to="#" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Introduction</Link> */}
                            <Link to="/docs/installation" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Installation</Link>
                        </div>
                    </div>
                    <div className="pb-4">
                        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Animations</h4>
                        <div className="grid grid-flow-row auto-rows-max text-sm">
                            <Link to="/docs/animation/fade-in" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Fade-In</Link>
                            <Link to="/docs/animation/perspective" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Perspective</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}