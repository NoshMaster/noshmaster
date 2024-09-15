import PerspectiveEffect from "../@/animation/perspective"
import FadeIn from "../@/animation/fade-in"
import Count from "../@/animation/counter"
import Header from "../Sections/Header"
import Tilt from "../@/animation/tilt"

export default function Example() {
    return (
        <>
            <Header />
            <FadeIn from="bottom">
                <div className="px-4 sm:px-6 lg:px-8">
                    <header className="flex flex-col sm:flex-row justify-between items-center py-5 mx-auto max-w-7xl text-foreground w-full">
                        <h1 className="text-xl sm:text-2xl font-extrabold cursor-pointer text-foreground">
                            NoshMaster UI
                        </h1>
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12">
                            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-semibold text-foreground">
                                <a className="hover:text-primary">Home</a>
                                <a className="hover:text-primary">About</a>
                                <a className="hover:text-primary">Services</a>
                                <a className="hover:text-primary">Contact</a>
                            </nav>
                            <button className="mt-4 sm:mt-0 rounded-md py-2 px-8 sm:px-10 text-primary-foreground bg-primary font-semibold hover:bg-opacity-80 transition">
                                Join waitlist
                            </button>
                        </div>
                    </header>
                    <section className="pt-12 sm:pt-20 flex flex-col items-center text-foreground justify-center">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border">
                                Unlock the Power of Web Development.
                                <a className="font-semibold text-foreground ml-2">
                                    Read more →
                                </a>
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
                            Elevate Your Business with NoshMaster
                        </h1>
                        <p className="text-muted-foreground max-w-2xl text-base sm:text-lg md:text-xl mt-6 text-center">
                            Empowering Your Success with Cutting-Edge SaaS Solutions Built for Scalability, Efficiency, and Growth.
                        </p>
                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="rounded-md py-2 px-8 sm:px-10 text-primary-foreground bg-primary font-semibold hover:bg-opacity-80 transition">
                                Get started
                            </button>
                            <button className="rounded-md py-2 px-8 sm:px-10 border border-input bg-background font-semibold hover:bg-opacity-80 transition">
                                Learn more
                            </button>
                        </div>
                        <PerspectiveEffect>
                            <img className="rounded-xl my-12 sm:my-16 mx-auto" src="noshmasteranim.png" width={900} />
                        </PerspectiveEffect>
                    </section>
                    <section className="py-12 sm:py-20 flex flex-col items-center justify-center text-foreground gap-6">
                        <FadeIn from="bottom">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
                                Transform Your Development Process
                            </h2>
                        </FadeIn>
                        <FadeIn from="bottom">
                            <p className="text-muted-foreground max-w-2xl text-base sm:text-lg md:text-xl text-center">
                                Our React Component UI Creator simplifies the way you design and manage your user interfaces, allowing for rapid development and seamless integration.
                            </p>
                        </FadeIn>
                        <FadeIn from="bottom">
                            <span className="font-bold border border-input py-1 px-3 rounded-sm text-muted-foreground">
                                Key Features
                            </span>
                        </FadeIn>
                        <div className="mx-auto mt-10 sm:mt-16 lg:mt-20 max-w-2xl sm:max-w-4xl grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-y-12">
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
                    <section className="py-12 sm:py-20 flex flex-col items-center justify-center text-foreground gap-6">
                        <h6 className="font-bold border border-input py-1 px-3 rounded-sm text-muted-foreground">Analytics</h6>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">Powerful Animation Library</h2>
                        <p className="text-muted-foreground max-w-2xl text-base sm:text-lg md:text-xl text-center">Unlock the true potential of your website with our advanced animation components. </p>
                        <div className="mx-auto mt-10 sm:mt-14 lg:mt-16 max-w-2xl sm:max-w-4xl grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-y-8">
                            <Tilt>
                                <div className="bg-foreground flex flex-col items-center justify-center py-6 px-14 sm:px-20 rounded-xl">
                                    <Count className="text-background font-bold text-4xl sm:text-6xl" number={499} duration={2} />
                                    <h4 className="text-muted-foreground text-sm sm:text-base">Downloads</h4>
                                </div>
                            </Tilt>
                            <Tilt>
                                <div className="bg-foreground flex flex-col items-center justify-center py-6 px-14 sm:px-20 rounded-xl">
                                    <Count className="text-background font-bold text-4xl sm:text-6xl" number={260} duration={2} />
                                    <h4 className="text-muted-foreground text-sm sm:text-base">Stars</h4>
                                </div>
                            </Tilt>
                            <Tilt>
                                <div className="bg-foreground flex flex-col items-center justify-center py-6 px-14 sm:px-20 rounded-xl">
                                    <Count className="text-background font-bold text-4xl sm:text-6xl" number={314} duration={2} />
                                    <h4 className="text-muted-foreground text-sm sm:text-base">Time Saved</h4>
                                </div>
                            </Tilt>
                            <Tilt>
                                <div className="bg-foreground flex flex-col items-center justify-center py-6 px-14 sm:px-20 rounded-xl">
                                    <Count className="text-background font-bold text-4xl sm:text-6xl" number={410} duration={2} />
                                    <h4 className="text-muted-foreground text-sm sm:text-base">Down Votes</h4>
                                </div>
                            </Tilt>
                        </div>
                    </section>
                    <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center py-12 sm:py-20 flex flex-col text-foreground">
                        <FadeIn from="bottom">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                                Join Newsletters
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-5">
                                <input className="flex h-12 min-w-72 sm:min-w-80 rounded-md bg-transparent border border-input py-3 px-4" placeholder="Your email address" />
                                <button className="mt-4 sm:mt-0 rounded-md py-2 px-8 sm:px-10 text-primary-foreground bg-primary font-semibold hover:bg-opacity-80 transition">
                                    Join Waitlist
                                </button>
                            </div>
                        </FadeIn>
                    </section>
                    <footer className="p-6 sm:p-10 max-w-7xl flex flex-col items-center justify-between gap-4 text-foreground md:flex-row">
                        <p className="text-xs sm:text-sm">
                            © 2024 Linkfast Inc. All rights reserved.
                        </p>
                        <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                            <a className="text-xs sm:text-sm text-muted-foreground hover:underline underline-offset-4">
                                Terms of Service
                            </a>
                            <a className="text-xs sm:text-sm text-muted-foreground hover:underline underline-offset-4">
                                Privacy Policy
                            </a>
                            <a className="text-xs sm:text-sm text-muted-foreground hover:underline underline-offset-4">
                                Cookie Policy
                            </a>
                        </nav>
                    </footer>
                </div>
            </FadeIn>
        </>
    )
}
