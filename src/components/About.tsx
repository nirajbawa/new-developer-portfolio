"use client";

import { useRef, useState } from "react";
import { cvData } from "@/data/cv";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import developerAboutImg from "@/assets/images/developer-hero-img.png";

// High-Fidelity SVG Brand Icons for Social Buttons
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.5c0-.8-.7-1.5-1.5-1.5H16l-4.5-4.5c-.6-.6-1.5-.6-2.1 0l-5 5c-.6.6-.6 1.5 0 2.1l7.5 7.5c.6.6 1.5.6 2.1 0l3.5-3.5" />
    <path d="m9 11.5 3 3 5-5" />
  </svg>
);

const HackerRankIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4h3v16H6z" />
    <path d="M15 4h3v16h-3z" />
    <path d="M9 12h6" />
    <path d="M4 6V4h2" />
    <path d="M4 18v2h2" />
    <path d="M20 6V4h-2" />
    <path d="M20 18v2h-2" />
  </svg>
);

const ResearchGateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/>
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Cyber-styled Tech Stack SVG Icons
const FastApiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0.53 0.53 5.28 5.26" {...props}>
    <circle cx="3.17" cy="3.17" r="2.64" className="fill-[#009485]" />
    <path d="M2.994 1.726h1.661L2.986 2.899h1.14l-2.43 1.707.528-1.172.241-.535z" className="fill-white" />
  </svg>
);

const JsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <rect x="0" y="0" width="24" height="24" rx="3" className="fill-[#F7DF1E]" />
    <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" className="fill-[#323330]" />
  </svg>
);

const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z" className="fill-[#3776AB]" />
    <path d="M20.56 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" className="fill-[#FFE052]" />
  </svg>
);

const AwsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" className="fill-[#1a1a1a] dark:fill-white transition-colors duration-300" />
    <path d="M21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607z" className="fill-[#FF9900]" />
    <path d="M22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" className="fill-[#FF9900]" />
  </svg>
);

const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="fill-sky-400" {...props}>
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
  </svg>
);

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" {...props}>
    <circle cx="0" cy="0" r="2.05" className="fill-[#61DAFB]" />
    <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <path
      d="M13.5 12H11v7h-2v-7H6.5v-1.75H13.5V12zm1.25 5.25c.35.25.95.5 1.55.5.7 0 1.1-.3 1.1-.8 0-.45-.25-.7-1.1-1.05l-.5-.2c-1.25-.5-1.9-1.2-1.9-2.2 0-1.3 1-2.25 2.6-2.25.7 0 1.35.15 1.85.4v1.85c-.4-.25-.95-.45-1.55-.45-.65 0-1 .3-1 .75 0 .45.3.65 1.05.95l.5.2c1.4.55 2 1.25 2 2.3 0 1.4-1.05 2.35-2.75 2.35-.75 0-1.5-.2-2.1-.55V17.25z"
      fill="white"
    />
  </svg>
);

const LangChainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#1EE87F" {...props}>
    <path d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z" />
  </svg>
);

// Mathematically accurate distortion-free elliptical keyframe generator for 3D weaving orbit
const getOrbitPath = (startAngleDegrees: number, Rx = 12.8, Ry = 3.8, Rz = 32) => {
  const steps = 48; // 48 steps for cinematic subpixel smoothness
  const x: string[] = [];
  const y: string[] = [];
  const scale: number[] = [];
  const z: number[] = []; // Real depth Z in pixels for true compositor-thread sorting
  for (let i = 0; i <= steps; i++) {
    const angleRad = ((startAngleDegrees + (i * 360) / steps) * Math.PI) / 180;
    // Invert the X coordinate to make the orbit rotate in a true clockwise direction (left-to-right in front)
    const xVal = -Math.cos(angleRad) * Rx;
    const yVal = Math.sin(angleRad) * Ry;
    x.push(`${xVal.toFixed(2)}rem`);
    y.push(`${yVal.toFixed(2)}rem`);
    
    // Depth parallax calculations based on Y position (sin of the angle)
    const sinVal = Math.sin(angleRad); // Ranges from -1 (farthest back) to +1 (closest front)
    
    // Dynamic scale ranges from 0.85 (back) to 1.12 (front)
    const scaleVal = 0.985 + sinVal * 0.135;
    scale.push(Math.round(scaleVal * 1000) / 1000);
    
    // Symmetrically maps the depth between -49.6px (behind backdrop) and +38.4px (front of portrait)
    // Symmetrical occlusion: logos dive behind when sinVal < 0.15 to clear the arms/shoulders and backdrop card
    const zVal = (sinVal < 0.15 ? -1.55 : 1.2) * Rz; // High-precision binary Z-separation
    z.push(Math.round(zVal * 10) / 10);
  }
  return { x, y, scale, z };
};

export function About() {
  const { personalInfo, summary } = cvData;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Generate mathematically perfect elliptical paths for the 8 tech badges
  const dockerPath = getOrbitPath(0);
  const pythonPath = getOrbitPath(45);
  const fastApiPath = getOrbitPath(90);
  const reactPath = getOrbitPath(135);
  const awsPath = getOrbitPath(180);
  const langchainPath = getOrbitPath(225);
  const tsPath = getOrbitPath(270);
  const jsPath = getOrbitPath(315);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center border-t border-border/40 py-12 md:py-24 px-0 sm:px-6 overflow-hidden bg-secondary/5"
    >
      {/* Abstract Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:28px_28px]" />
        
        {/* Subtle Cyber Glowing Spotlights */}
        <div className="absolute top-[30%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-primary/5 dark:bg-primary/[0.03] blur-[120px] -z-10" />
        <div className="absolute bottom-[30%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-accent-foreground/5 dark:bg-accent-foreground/[0.03] blur-[120px] -z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-[80rem]">
        
        {/* Main Grid: Left Portrait Mode Video, Right Structured About Card Box */}
        <div className="grid gap-6 md:gap-12 md:grid-cols-[1fr_1.5fr] items-center">
          
            {/* LEFT SIDE: Transparent Portrait Image with Custom Fluid Morphing Glass Backdrop */}
            <div
              className="relative w-full max-w-[22rem] sm:max-w-[27rem] md:max-w-[30rem] aspect-[3/4] flex items-center justify-center mx-auto"
              style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            >
              


              {/* Symmetrical Cyber Plate Backdrop (ALWAYS behind the image) */}
              <div
                className="absolute inset-[6%_8%_24%_8%] z-0 pointer-events-none"
                style={{
                  transform: "translateZ(-80px)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Futuristic Cyber Grid & Glowing Frame Plate participating perfectly in 3D space */}
                <motion.div
                  animate={isInView ? {
                    rotate: [0, 360],
                  } : {}}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-full h-full rounded-full border border-primary/25 dark:border-primary/15 bg-gradient-to-br from-primary/10 via-background/80 to-transparent shadow-none dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] relative overflow-hidden flex items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                >
                  {/* Internal rotating grid lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
                  
                  {/* Glowing orbital lines */}
                  <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-primary/30 dark:border-primary/20 animate-[spin_60s_linear_infinite]" />
                  <div className="absolute w-[70%] h-[70%] rounded-full border border-dotted border-accent-foreground/20 dark:border-accent-foreground/15 animate-[spin_30s_linear_infinite_reverse]" />
                </motion.div>
              </div>

              {/* Transparent developer portrait photo (ALWAYS on top of the backdrop) */}
              <div
                className="absolute w-[102%] h-[102%] left-[-1%] top-[-1%] select-none z-10"
                style={{
                  transform: "translateZ(20px)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Nested animated layer for entry fade-in/scale, preventing flattening of the parent 3D plane */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full relative"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                >
                  {/* Isolated mask-image container to keep parent 3D space fully composited without flattening */}
                  <div
                    className="w-full h-full relative"
                    style={{
                      maskImage: "linear-gradient(to bottom, black 72%, transparent 98%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 72%, transparent 98%)"
                    }}
                  >
                    <Image
                      src={developerAboutImg}
                      alt="Niraj Bava About portrait"
                      fill
                      priority
                      className="object-contain object-bottom filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-transform duration-500 transform-gpu"
                      sizes="(max-w-md) 100vw"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        imageRendering: "auto"
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* DIRECT SIBLING BADGES FOR TRUE 3D WEAVING (distortion-free, centered around model tummy, weaving back and front) */}
              
              {/* 1. Docker Badge */}
              <motion.div
                animate={isInView ? {
                  x: dockerPath.x,
                  y: dockerPath.y,
                  z: dockerPath.z,
                  scale: dockerPath.scale
                } : {}}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute top-[64%] left-[50%] w-12 h-12 -ml-6 -mt-6 pointer-events-auto flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-2 rounded-xl border border-white/25 dark:border-white/15 bg-background/70 backdrop-blur-md shadow-lg flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 hover:scale-110 hover:border-sky-400/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300 cursor-pointer">
                  <DockerIcon className="h-6 w-6" />
                </div>
              </motion.div>

              {/* 2. Python Badge */}
              <motion.div
                animate={isInView ? {
                  x: pythonPath.x,
                  y: pythonPath.y,
                  z: pythonPath.z,
                  scale: pythonPath.scale
                } : {}}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute top-[64%] left-[50%] w-12 h-12 -ml-6 -mt-6 pointer-events-auto flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-2 rounded-xl border border-white/25 dark:border-white/15 bg-background/70 backdrop-blur-md shadow-lg flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 hover:scale-110 hover:border-yellow-400/60 hover:shadow-[0_0_15px_rgba(254,240,138,0.4)] transition-all duration-300 cursor-pointer">
                  <PythonIcon className="h-6 w-6" />
                </div>
              </motion.div>

              {/* 3. FastAPI Badge */}
              <motion.div
                animate={isInView ? {
                  x: fastApiPath.x,
                  y: fastApiPath.y,
                  z: fastApiPath.z,
                  scale: fastApiPath.scale
                } : {}}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute top-[64%] left-[50%] w-12 h-12 -ml-6 -mt-6 pointer-events-auto flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-2 rounded-xl border border-white/25 dark:border-white/15 bg-background/70 backdrop-blur-md shadow-lg flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 hover:scale-110 hover:border-teal-400/60 hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300 cursor-pointer">
                  <FastApiIcon className="h-6 w-6" />
                </div>
              </motion.div>

              {/* 4. React Badge */}
              <motion.div
                animate={isInView ? {
                  x: reactPath.x,
                  y: reactPath.y,
                  z: reactPath.z,
                  scale: reactPath.scale
                } : {}}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute top-[64%] left-[50%] w-12 h-12 -ml-6 -mt-6 pointer-events-auto flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-2 rounded-xl border border-white/25 dark:border-white/15 bg-background/70 backdrop-blur-md shadow-lg flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 hover:scale-110 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-pointer">
                  <ReactIcon className="h-6 w-6" />
                </div>
              </motion.div>

              {/* 5. AWS Badge */}
              <motion.div
                animate={isInView ? {
                  x: awsPath.x,
                  y: awsPath.y,
                  z: awsPath.z,
                  scale: awsPath.scale
                } : {}}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute top-[64%] left-[50%] w-12 h-12 -ml-6 -mt-6 pointer-events-auto flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-2 rounded-xl border border-white/25 dark:border-white/15 bg-background/70 backdrop-blur-md shadow-lg flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 hover:scale-110 hover:border-orange-400/60 hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] transition-all duration-300 cursor-pointer">
                  <AwsIcon className="h-6 w-6" />
                </div>
              </motion.div>

              {/* 6. LangChain Badge */}
              <motion.div
                animate={isInView ? {
                  x: langchainPath.x,
                  y: langchainPath.y,
                  z: langchainPath.z,
                  scale: langchainPath.scale
                } : {}}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute top-[64%] left-[50%] w-12 h-12 -ml-6 -mt-6 pointer-events-auto flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-2 rounded-xl border border-white/25 dark:border-white/15 bg-background/70 backdrop-blur-md shadow-lg flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 hover:scale-110 hover:border-emerald-400/60 hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all duration-300 cursor-pointer">
                  <LangChainIcon className="h-6 w-6" />
                </div>
              </motion.div>

              {/* 7. TypeScript Badge */}
              <motion.div
                animate={isInView ? {
                  x: tsPath.x,
                  y: tsPath.y,
                  z: tsPath.z,
                  scale: tsPath.scale
                } : {}}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute top-[64%] left-[50%] w-12 h-12 -ml-6 -mt-6 pointer-events-auto flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-2 rounded-xl border border-white/25 dark:border-white/15 bg-background/70 backdrop-blur-md shadow-lg flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 hover:scale-110 hover:border-blue-400/60 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] transition-all duration-300 cursor-pointer">
                  <TsIcon className="h-6 w-6" />
                </div>
              </motion.div>

              {/* 8. JavaScript Badge */}
              <motion.div
                animate={isInView ? {
                  x: jsPath.x,
                  y: jsPath.y,
                  z: jsPath.z,
                  scale: jsPath.scale
                } : {}}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute top-[64%] left-[50%] w-12 h-12 -ml-6 -mt-6 pointer-events-auto flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-2 rounded-xl border border-white/25 dark:border-white/15 bg-background/70 backdrop-blur-md shadow-lg flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 hover:scale-110 hover:border-yellow-400/60 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all duration-300 cursor-pointer">
                  <JsIcon className="h-6 w-6" />
                </div>
              </motion.div>

            </div>

          {/* RIGHT SIDE: Highly Professional & Polished Cyber Card Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex flex-col justify-center"
          >
            {/* Ultra-Professional Glass Panel */}
            <div className="relative p-5 sm:p-8 md:p-9 rounded-2xl border border-accent-foreground/15 bg-background/40 backdrop-blur-md shadow-[0_8px_30px_-4px_rgba(15,23,42,0.03)] dark:shadow-2xl space-y-6">
              
              {/* Corner Brackets — hugging the card border edges */}
              <span className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-primary/50 rounded-tl-lg !m-0" />
              <span className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-primary/50 rounded-tr-lg !m-0" />
              <span className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-primary/50 rounded-bl-lg !m-0" />
              <span className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-primary/50 rounded-br-lg !m-0" />

              {/* Title Section */}
              <div className="flex items-center gap-3">
                <div className="h-7 w-[3px] rounded-full bg-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-sans uppercase leading-none">
                  About Me
                </h2>
              </div>

              {/* Professional Meta Highlights Grid (Location, Focus, Title tags) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-lg border border-border/40 bg-background/30 backdrop-blur-sm flex flex-col gap-0.5">
                  <span className="text-[0.58rem] font-mono text-muted-foreground uppercase tracking-wider">Role</span>
                  <span className="text-xs font-bold text-foreground">Full-Stack Engineer</span>
                </div>
                <div className="p-3 rounded-lg border border-border/40 bg-background/30 backdrop-blur-sm flex flex-col gap-0.5">
                  <span className="text-[0.58rem] font-mono text-muted-foreground uppercase tracking-wider">Location</span>
                  <span className="text-xs font-bold text-foreground">Nashik, MH, India</span>
                </div>
                <div className="p-3 rounded-lg border border-border/40 bg-background/30 backdrop-blur-sm col-span-2 sm:col-span-1 flex flex-col gap-0.5">
                  <span className="text-[0.58rem] font-mono text-muted-foreground uppercase tracking-wider">Focus</span>
                  <span className="text-xs font-bold text-foreground">AI Systems & Web Dev</span>
                </div>
              </div>

              {/* Impact Metrics — Authenticated Achievement Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-lg border border-primary/20 bg-primary/5 flex flex-col items-center gap-0.5 text-center">
                  <span className="text-lg sm:text-xl font-bold text-primary font-mono">5+</span>
                  <span className="text-[0.55rem] font-mono text-muted-foreground uppercase tracking-wider leading-tight">Production Systems</span>
                </div>
                <div className="p-3 rounded-lg border border-primary/20 bg-primary/5 flex flex-col items-center gap-0.5 text-center">
                  <span className="text-lg sm:text-xl font-bold text-primary font-mono">2+</span>
                  <span className="text-[0.55rem] font-mono text-muted-foreground uppercase tracking-wider leading-tight">Published Research</span>
                </div>
                <div className="p-3 rounded-lg border border-primary/20 bg-primary/5 flex flex-col items-center gap-0.5 text-center">
                  <span className="text-lg sm:text-xl font-bold text-primary font-mono">Gov</span>
                  <span className="text-[0.55rem] font-mono text-muted-foreground uppercase tracking-wider leading-tight">Backed Projects</span>
                </div>
                <div className="p-3 rounded-lg border border-primary/20 bg-primary/5 flex flex-col items-center gap-0.5 text-center">
                  <span className="text-lg sm:text-xl font-bold text-primary font-mono">E2E</span>
                  <span className="text-[0.55rem] font-mono text-muted-foreground uppercase tracking-wider leading-tight">System Ownership</span>
                </div>
              </div>

              {/* Professional Inner Text Box */}
              <div className="relative p-4 sm:p-6 rounded-xl border border-border/50 bg-background/25">
                {/* Dynamic Left accent bar */}
                <div className="absolute top-0 bottom-0 left-0 w-[2.5px] bg-gradient-to-b from-primary via-accent-foreground/40 to-transparent" />
                
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans pr-2 text-justify">
                  Full-Stack Engineer delivering production systems that bridge technical innovation with social impact. Track record spanning startup product development, government–backed technology initiatives, and published research in AI applications. Expert in architecting and deploying robust, scalable solutions that handle real users in live environments — from AI-powered public service platforms to enterprise automation systems. Specialized in end-to-end ownership: system design, cloud infrastructure, full-stack development, and production deployment. Driven by the conviction that well-engineered software can transform lives, consistently building technology that solves meaningful problems with efficiency, security, and scalability.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
