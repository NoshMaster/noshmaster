import React, { useState } from 'react';
import Template from '../Template';
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../../@/components/ui/breadcrumb"


import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../@/components/ui/tabs"

import FadeIn from '../../@/animation/fade-in';
import { ScrollArea } from '../../@/components/ui/scroll-area';

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';



export default function InstallationPage() {
    const [isVisible, setIsVisible] = useState(false);

    const utilsCode = `import { useState, useEffect } from 'react';

const useInView = (ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { ...options }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
};

const useScroll = (ref: React.RefObject<HTMLElement>) => {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementOffsetTop = window.scrollY + rect.top;
        const scrollHeight = document.documentElement.scrollHeight;

        const ratio = Math.max(0, window.scrollY - elementOffsetTop + windowHeight) / scrollHeight;
        setScrollRatio(ratio);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return scrollRatio;
};

  


export { useInView, useScroll }`

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };
    return (
        <Template>
            <div className='mx-auto w-full min-w-0'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink>Docs</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink className='text-foreground'>Installation</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className='scroll-m-20 mt-6 text-3xl font-bold tracking-tight'>Installation</h1>
                <h3 className='font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight'>Install noshmaster utils</h3>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>First, make sure you have <span className='font-bold'>the utils</span> installed:</p>
                <Tabs defaultValue="cli" className="mt-6">
                    <TabsList className="grid grid-cols-2 w-[200px]">
                        <TabsTrigger value="cli">CLI</TabsTrigger>
                        <TabsTrigger value="manual">Manual</TabsTrigger>
                    </TabsList>
                    <TabsContent value="cli">
                        <div className='mt-8 scroll-m-20 bg-[#2b2b2b] rounded-sm p-1'>
                            <SyntaxHighlighter language="javascript" style={a11yDark}>
                                npx noshmaster@latest init
                            </SyntaxHighlighter>
                        </div>
                    </TabsContent>
                    <TabsContent value="manual">
                        <div className={`relative overflow-hidden p-4 bg-[#2b2b2b] rounded-lg shadow-md ${isVisible ? "h-auto" : "max-h-52"}`}>
                            <div className={`absolute flex ${isVisible ? "items-end": "items-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90"} justify-center p-2 inset-0`}>
                                <button
                                    onClick={handleToggle}
                                    className="px-4 z-50 py-2 bg-background text-foreground rounded transition-colors focus:outline-none hover:bg-background/90"
                                    >
                                    {isVisible ? 'Collapse' : 'Expand'}
                                </button>
                            </div>

                            {isVisible ? (
                                <ScrollArea className="h-[50rem] rounded-md">
                                    <div className="bg-[#2b2b2b] rounded-sm p-1">
                                        <SyntaxHighlighter language='jsx' style={a11yDark}>
                                            {utilsCode}
                                        </SyntaxHighlighter>
                                    </div>
                                </ScrollArea>

                            ): (
                                <div className="bg-[#2b2b2b] rounded-sm p-1">
                                <SyntaxHighlighter language='jsx' style={a11yDark}>
                                    {utilsCode}
                                </SyntaxHighlighter>
                            </div>
                            )}
                            
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Template>
    )
};