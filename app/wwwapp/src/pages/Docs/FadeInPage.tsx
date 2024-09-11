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

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../@/components/ui/tabs"

import FadeIn from '../../@/animation/fade-in';
import { ScrollArea } from '../../@/components/ui/scroll-area';

export default function FadeInPage() {
    const codeString = `import FadeIn from '@/animation/FadeIn';

const App = () => (
    <div>
        <FadeIn from="bottom" duration={1.5}>
            <h1>The web builder for stunning sites.</h1>
        </FadeIn>
    </div>
);

export default App;`

    const fadeInString = `import React from 'react';
import { motion } from 'framer-motion';

type Direction = 'top' | 'bottom' | 'left' | 'right';

interface FadeInProps {
  children: React.ReactNode;
  from?: Direction;
  opacity?: boolean;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, from, opacity = true, duration = 1 }) => {
  const initialPosition = () => {
    switch (from) {
      case 'top':
        return { y: -100 };
      case 'bottom':
        return { y: 100 };
      case 'left':
        return { x: -100 };
      case 'right':
        return { x: 100 };
      default:
        return { y: 0 };
    }
  };


  return (
    <motion.div
      initial={{ ...initialPosition(), opacity: opacity ? 0 : 1 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        x: { duration },
        y: { duration },
        opacity: opacity ? { duration, delay: duration / 2 } : { duration: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
`

    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
    setIsVisible(!isVisible);
    };

    const props = [
        {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'The content that you want to animate. This can be any valid React node, such as text, elements, or components.'
        },
        {
        name: 'from',
        type: "'top' | 'bottom' | 'left' | 'right'",
        defaultValue: 'undefined',
        description: 'Determines the direction from which the component will animate in. Possible values are: \'top\', \'bottom\', \'left\', \'right\'.'
        },
        {
        name: 'opacity',
        type: 'boolean',
        defaultValue: 'true',
        description: 'If true, the component will fade in by changing its opacity from 0 to 1. If false, only position animations will occur without opacity changes.'
        },
        {
        name: 'duration',
        type: 'number',
        defaultValue: '1',
        description: 'Specifies the duration of the animation in seconds. This duration applies to both the position and opacity transitions.'
        }
    ];
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
                        <BreadcrumbLink className='text-foreground'>Fade-In</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className='scroll-m-20 mt-6 text-3xl font-bold tracking-tight'>Installation</h1>
                <p className='text-muted-foreground'>Makes an element appear by increasing its opacity & location over time.</p>
                <Tabs defaultValue="preview" className="mt-6">
                    <TabsList className="grid grid-cols-2 w-[200px]">
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview">
                        <div className="px-4 py-24 border rounded-sm flex items-center justify-center">
                            <FadeIn from="bottom" duration={1.5}>
                                <h1 className="text-4xl font-bold">The web builder for stunning sites.</h1>
                            </FadeIn>
                        </div>
                    </TabsContent>
                    <TabsContent value="code">
                        <div className='mt-8 scroll-m-20 bg-[#2b2b2b] rounded-sm p-1'>
                            <SyntaxHighlighter language='tsx' style={a11yDark}>
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                    </TabsContent>
                </Tabs>
                <Tabs defaultValue="cli" className="mt-6">
                    <TabsList className="grid grid-cols-2 w-[200px]">
                        <TabsTrigger value="cli">CLI</TabsTrigger>
                        <TabsTrigger value="manual">Manual</TabsTrigger>
                    </TabsList>
                    <TabsContent value="cli">
                        <div className='mt-8 scroll-m-20 bg-[#2b2b2b] rounded-sm p-1'>
                            <SyntaxHighlighter language="javascript" style={a11yDark}>
                            npx noshmaster@latest add fade-in
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
                                        <SyntaxHighlighter language='tsx' style={a11yDark}>
                                            {fadeInString}
                                        </SyntaxHighlighter>
                                    </div>
                                </ScrollArea>

                            ): (
                                <div className="bg-[#2b2b2b] rounded-sm p-1">
                                <SyntaxHighlighter language='tsx' style={a11yDark}>
                                    {fadeInString}
                                </SyntaxHighlighter>
                            </div>
                            )}
                            
                        </div>
                    </TabsContent>
                </Tabs>
                
                <table className="mt-10 min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>
                        <th className="px-6 py-3 text-left text-gray-600 font-medium">Name</th>
                        <th className="px-6 py-3 text-left text-gray-600 font-medium">Default Value</th>
                        <th className="px-6 py-3 text-left text-gray-600 font-medium">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.map((prop, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="px-6 py-4 text-gray-800">{prop.name}</td>
                            <td className="px-6 py-4 text-gray-800">{prop.defaultValue}</td>
                            <td className="px-6 py-4 text-gray-800">{prop.description}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Template>
    )
};