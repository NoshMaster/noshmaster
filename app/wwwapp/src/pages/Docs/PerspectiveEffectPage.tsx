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
} from "../../@/components/ui/breadcrumb";

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../@/components/ui/tabs";

import PerspectiveEffect from '../../@/animation/perspective';
import { ScrollArea } from '../../@/components/ui/scroll-area';

export default function PerspectiveEffectPage() {
    const codeString = `import PerspectiveEffect from '@/animation/PerspectiveEffect';

const App = () => (
  <div style={{ height: '200vh' }}> {/* Ensure enough scroll space */}
    <PerspectiveEffect>
      <h1>Scroll to see the effect</h1>
    </PerspectiveEffect>
  </div>
);

export default App;`;

    const perspectiveEffectString = `import React, { useEffect, useRef } from 'react';

interface PerspectiveEffectProps {
  children: React.ReactNode;
}

const PerspectiveEffect: React.FC<PerspectiveEffectProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollPosition = window.scrollY;
        ref.current.style.transform = \`perspective(1000px) rotateX(\${scrollPosition / 10}deg) scale(\${1 + scrollPosition / 1000})\`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default PerspectiveEffect;
`;

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
                            <BreadcrumbLink className='text-foreground'>Perspective Effect</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className='scroll-m-20 mt-6 text-3xl font-bold tracking-tight'>Perspective Animation</h1>
                <p className='text-muted-foreground'>Adds a dynamic 3D perspective effect based on the scroll position of the page.</p>
                <Tabs defaultValue="preview" className="mt-6">
                    <TabsList className="grid grid-cols-2 w-[200px]">
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview">
                        <div className="px-4 py-24 border rounded-sm flex items-center justify-center">
                            <PerspectiveEffect>
                                <img src="https://placehold.co/600x400" />
                            </PerspectiveEffect>
                        </div>
                    </TabsContent>
                    <TabsContent value="code">
                        <div className='mt-8 scroll-m-20 bg-[#2b2b2b] rounded-sm p-1'>
                            <SyntaxHighlighter language='jsx' style={a11yDark}>
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
                            <SyntaxHighlighter language="bash" style={a11yDark}>
                                npx noshmaster@latest add perspective
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
                                            {perspectiveEffectString}
                                        </SyntaxHighlighter>
                                    </div>
                                </ScrollArea>

                            ): (
                                <div className="bg-[#2b2b2b] rounded-sm p-1">
                                    <SyntaxHighlighter language='jsx' style={a11yDark}>
                                        {perspectiveEffectString}
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
    );
}