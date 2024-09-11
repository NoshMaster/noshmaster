import React from 'react';
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



export default function InstallationPage() {
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
                <h3 className='font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight'>Install framer-motion</h3>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>First, make sure you have <span className='font-bold'>framer-motion</span> installed:</p>
                
                <div className='mt-8 scroll-m-20 bg-[#2b2b2b] rounded-sm p-1'>
                    <SyntaxHighlighter language="javascript" style={a11yDark}>
                        npm install framer-motion
                    </SyntaxHighlighter>
                </div>
            </div>
        </Template>
    )
};