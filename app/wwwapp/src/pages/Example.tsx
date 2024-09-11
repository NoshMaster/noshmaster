import PerspectiveEffect from "../@/animation/perspective"
import FadeIn from "../@/animation/fade-in"

export default function Example() { 
	return(
      <FadeIn from="bottom">   
        <div >
            <header className="flex justify-between items-center mx-auto p-5 sm:px-6 lg:px-8 max-w-7xl text-foreground w-full">
                <h1 className="text-xl font-extrabold cursor-pointer text-foreground">
                    NoshMaster UI
                </h1>
                <div className="flex items-center gap-12">
                    <nav className="flex gap-6 font-semibold text-foreground">
                        <a className="font-semibold text-foreground">
                            Home
                        </a>
                        <a className="font-semibold text-foreground">
                            About
                        </a>
                        <a className="font-semibold text-foreground">
                            Services
                        </a>
                        <a className="font-semibold text-foreground">
                            Contact
                        </a>
                    </nav>
                    <button className="rounded-md py-2 px-10 text-primary-foreground bg-primary font-semibold hover:bg-opacity-80 transition">
                        Join waitlist
                    </button>
                </div>
            </header>
            <section className="flex pt-20 flex-col items-center text-foreground justify-center">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border">
                        Unlock the Power of Web Development.
                        <a className="font-semibold text-foreground ml-2">
                            Read more →
                        </a>
                    </div>
                </div>
                <h1 className="text-center font-bold text-6xl">
                  Elevate Your Business with NoshMaster
                </h1>
                <p className="text-muted-foreground max-w-2xl text-sm sm:text-md md:text-xl mt-6 text-center">
                  Empowering Your Success with Cutting-Edge SaaS Solutions Built for Scalability, Efficiency, and Growth.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button className="rounded-md py-2 px-10 text-primary-foreground bg-primary font-semibold hover:bg-opacity-80 transition">
                        Get started
                    </button>
                    <button className="rounded-md py-2 px-10 border border-input bg-background font-semibold hover:bg-opacity-80 transition">
                        Learn more
                    </button>
                </div>
                <PerspectiveEffect>
                  <img className="rounded-xl my-16" src="noshmasteranim.png" width={900}/>
                </PerspectiveEffect>
            </section>
            <section className="flex py-20 flex-col items-center justify-center text-foreground gap-3">
                <FadeIn from="bottom">
                <h2 className="max-w-5xl text-3xl text-center font-extrabold sm:text-4xl md:text-5xl">
                    Transform Your Development Process
                </h2>
                </FadeIn>
                <FadeIn from="bottom">
                <p className="text-muted-foreground max-w-2xl text-sm sm:text-md md:text-xl text-center">
                    Our React Component UI Creator simplifies the way you design and manage your user interfaces, allowing for rapid development and seamless integration.
                </p>
                </FadeIn>
                <FadeIn from="bottom">
                <span className="font-bold border border-input py-1 px-3 rounded-sm text-muted-foreground">
                    Key Features
                </span>
                </FadeIn>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
                <FadeIn from="left">
                    <div className="flex flex-col gap-3 items-start">
                        <span className="text-foreground text-lg font-semibold">
                            Intuitive Drag-and-Drop Interface
                        </span>
                        <p className="text-muted-foreground">
                            Easily design components by dragging and dropping elements into your workspace, giving you full control without the need for extensive coding.
                        </p>
                        <a className="text-primary text-sm font-semibold">
                            Learn more →
                        </a>
                    </div>
                    </FadeIn>
                    <FadeIn from="right">

                    <div className="flex flex-col gap-3 items-start">
                        <span className="text-foreground text-lg font-semibold">
                            Customizable Templates
                        </span>
                        <p className="text-muted-foreground">
                            Start with a variety of pre-built templates that can be customized to suit your specific needs, ensuring your project remains unique and eye-catching.
                        </p>
                        <a className="text-primary text-sm font-semibold">
                            Learn more →
                        </a>
                    </div>
                    </FadeIn>
                    <FadeIn from="left">

                    <div className="flex flex-col gap-3 items-start">
                        <span className="text-foreground text-lg font-semibold">
                            Real-Time Preview
                        </span>
                        <p className="text-muted-foreground">
                            See your components come to life instantly with our real-time preview feature, allowing you to make adjustments on the fly and visualize changes immediately.
                        </p>
                        <a className="text-primary text-sm font-semibold">
                            Learn more →
                        </a>
                    </div>
                    </FadeIn>
                    <FadeIn from="right">

                    <div className="flex flex-col gap-3 items-start">
                        <span className="text-foreground text-lg font-semibold">
                            Seamless Component Integration
                        </span>
                        <p className="text-muted-foreground">
                            Our tool allows for effortless integration of your components into existing or new React applications, streamlining your workflow and enhancing collaboration.
                        </p>
                        <a className="text-primary text-sm font-semibold">
                            Learn more →
                        </a>
                    </div>
                    </FadeIn>
                </div>
            </section>
            <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center py-20 flex flex-col text-foreground">
                
                <FadeIn from="bottom">
                <h3 className="text-center text-4xl font-extrabold sm:text-5xl md:text-6xl">
                    Join Newsletters
                </h3>
                <div className="flex gap-3 justify-center pt-5">
                    <input className="flex h-12 min-w-72 rounded-md bg-transparent border border-input py-3"/>
                    <button className="rounded-md py-2 px-10 text-primary-foreground bg-primary font-semibold hover:bg-opacity-80 transition">
                        Join Waitlist
                    </button>
                </div>
                </FadeIn>
            </section>
            <footer className="p-10 max-w-7xl flex flex-col items-center justify-between gap-4 text-foreground md:flex-row">
                <p className="text-xs">
                    © 2024 Linkfast Inc. All rights reserved.
                </p>
                <nav className="flex items-center gap-4 sm:gap-6">
                    <a className="text-xs text-muted-foreground hover:underline underline-offset-4">
                        Terms of Service
                    </a>
                    <a className="text-xs text-muted-foreground hover:underline underline-offset-4">
                        Privacy Policy
                    </a>
                    <a className="text-xs text-muted-foreground hover:underline underline-offset-4">
                        Cookie Policy
                    </a>
                </nav>
            </footer>
        </div>
      </FadeIn>
	)
}