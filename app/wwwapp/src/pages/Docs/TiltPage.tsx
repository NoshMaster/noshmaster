import React, { useState } from 'react';
import Template from '../Template';
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    BreadcrumbList, 
    BreadcrumbSeparator 
} from "../../@/components/ui/breadcrumb";
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../@/components/ui/tabs';
import Tilt from '../../@/animation/tilt';
import { ScrollArea } from '../../@/components/ui/scroll-area';

export default function TiltPage() {
    const codeString = `import Tilt from '@/components/Tilt';

const App = () => (
    <Tilt rotateRatio={20}>
        <img src="https://placehold.co/600x400" />
    </Tilt>
);

export default App;
`;

    const TiltComponentString = `import React from 'react';

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  rotateRatio: number;
}

const Tilt: React.FC<TiltProps> = ({ children, className, rotateRatio = 20 }) => {
  const [transformStyle, setTransformStyle] = useState<string>("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = e;
    const { left, top } = card.getBoundingClientRect();

    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    const rotateX = (y / height) * rotateRatio;
    const rotateY = -(x / width) * rotateRatio;

    setTransformStyle(\`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={\`transition-transform duration-300 ease-out \${className}\`}
      style={{ transform: transformStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Tilt;

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
            description: 'The content to be displayed inside the map. This can be text, elements or other React components.'
        },
        {
            name: 'className',
            type: 'string',
            defaultValue: 'undefined',
            description: 'Additional Tailwind classes to customize the container style.'
        },
        {
            name: 'rotateRatio',
            type: 'number',
            defaultValue: '20',
            description: 'Rotation factor to adjust the intensity of the 3D effect.'
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
                        <BreadcrumbLink className='text-foreground'>Tilt</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className='scroll-m-20 mt-6 text-3xl font-bold tracking-tight'>Tilt Animation</h1>
                <p className='text-muted-foreground'>Add a 3D tilt effect based on mouse position.</p>
                <Tabs defaultValue="preview" className="mt-6">
                    <TabsList className="grid grid-cols-2 w-[200px]">
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview">
                        <div className="px-4 py-24 border rounded-sm flex items-center justify-center">
                        <Tilt rotateRatio={20}>
                            <img src="https://placehold.co/600x400" />
                        </Tilt>
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
                            npx noshmaster@latest add tilt
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
                                            {TiltComponentString}
                                        </SyntaxHighlighter>
                                    </div>
                                </ScrollArea>

                            ): (
                                <div className="bg-[#2b2b2b] rounded-sm p-1">
                                <SyntaxHighlighter language='tsx' style={a11yDark}>
                                    {TiltComponentString}
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
