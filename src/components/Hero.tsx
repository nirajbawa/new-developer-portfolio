"use client";

import { useRef, useState } from "react";
import { cvData } from "@/data/cv";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import developerHeroImg from "@/assets/images/new-developer-img.png";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/themeSlice";
import { GithubCalendarWidget } from "./GithubCalendarWidget";
import { LeetCodeWidget } from "./LeetCodeWidget";

// Cyber-styled Tech Stack SVG Icons
const MernIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" className="stroke-cyan-400 fill-cyan-400/20" />
    <ellipse cx="12" cy="12" rx="10" ry="4" className="stroke-cyan-400/80" />
    <ellipse cx="12" cy="12" rx="10" ry="4" className="stroke-cyan-400/80 rotate-[60deg] transform origin-center" />
    <ellipse cx="12" cy="12" rx="10" ry="4" className="stroke-cyan-400/80 rotate-[120deg] transform origin-center" />
  </svg>
);

const FastApiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0.53 0.53 5.28 5.26" {...props}>
    {/* Official FastAPI Teal Background Circle */}
    <circle cx="3.17" cy="3.17" r="2.64" className="fill-[#009485]" />
    {/* Official FastAPI White Lightning Bolt */}
    <path 
      d="M2.994 1.726h1.661L2.986 2.899h1.14l-2.43 1.707.528-1.172.241-.535z" 
      className="fill-white" 
    />
  </svg>
);

const JsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    {/* Official JavaScript Brand Yellow Background with slightly rounded corners */}
    <rect x="0" y="0" width="24" height="24" rx="3" className="fill-[#F7DF1E]" />
    {/* Official JavaScript Brand Charcoal Letters 'JS' */}
    <path 
      d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" 
      className="fill-[#323330]"
    />
  </svg>
);

const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    {/* Python Official Blue Top/Left Snake */}
    <path 
      d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z" 
      className="fill-[#3776AB]"
    />
    {/* Python Official Yellow Bottom/Right Snake */}
    <path 
      d="M20.56 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" 
      className="fill-[#FFE052]"
    />
  </svg>
);

const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="fill-sky-400" {...props}>
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
  </svg>
);

const AwsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-black dark:text-white transition-colors duration-300" {...props}>
    {/* Squid Ink (light theme) / White (dark theme) for the lowercase brand letters 'aws' */}
    <path 
      d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" 
    />
    {/* Trademark Amazon Yellow/Orange Smile Arrow */}
    <path 
      d="M21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607z" 
      className="fill-[#FF9900]"
    />
    {/* Trademark Amazon Yellow/Orange Arrowhead */}
    <path 
      d="M22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" 
      className="fill-[#FF9900]"
    />
  </svg>
);

// Cyber Social Logo Vector SVGs
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
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

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// Custom inline SVG icons for actions
const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

export function Hero() {
  const reduxTheme = useSelector(selectTheme);
  const isDark =
    reduxTheme === "dark" ||
    (reduxTheme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const { personalInfo } = cvData;
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [isPortraitHovered, setIsPortraitHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // CALIBRATED STRICT SYMMETRIC ARCHED BADGES WITH CINEMATIC STAGGER DELAYS
  const floatingTechs = [
    // Left-Side strictly configured (Docker, JS, AWS)
    { name: "Docker", icon: <DockerIcon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />, pos: "top-[180px] left-[10px] sm:top-[200px] sm:left-[-25px] md:top-[210px] md:left-[-30px] lg:top-[210px] lg:left-[-35px]", delay: 0.5 },
    { name: "JS", icon: <JsIcon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />, pos: "top-[75px] left-[20px] sm:top-[85px] sm:left-[-15px] md:top-[90px] md:left-[-20px] lg:top-[90px] lg:left-[-25px]", delay: 0.65 },
    { name: "AWS", icon: <AwsIcon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />, pos: "top-[-10px] left-[70px] sm:top-[-20px] sm:left-[55px] md:top-[-20px] md:left-[60px] lg:top-[-20px] lg:left-[55px]", delay: 0.8 },
    
    // Right-Side strictly configured (FastAPI, Redis, MERN)
    { name: "FastAPI", icon: <FastApiIcon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />, pos: "top-[-10px] right-[70px] sm:top-[-20px] sm:right-[55px] md:top-[-20px] md:right-[60px] lg:top-[-20px] lg:right-[55px]", delay: 0.95 },
    { name: "Python", icon: <PythonIcon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />, pos: "top-[75px] right-[20px] sm:top-[85px] sm:right-[-15px] md:top-[90px] md:right-[-20px] lg:top-[90px] lg:right-[-25px]", delay: 1.10 },
    { name: "MERN", icon: <MernIcon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />, pos: "top-[180px] right-[10px] sm:top-[200px] sm:right-[-25px] md:top-[210px] md:right-[-30px] lg:top-[210px] lg:right-[-35px]", delay: 1.25 },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-0 lg:min-h-[calc(100vh-4rem)] flex items-center justify-center pt-28 pb-4 overflow-hidden bg-background"
    >
      {/* 1. Cyber Design Elements (Intersecting circles and high-tech lines) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        
        {/* Tech Grid Backdrop Line */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Left Glassmorphism Cyber-Shield Panel (Slow dynamic floating and rotating glass element) */}
        <motion.div 
          animate={isInView ? { 
            y: [0, -15, 0], 
            rotate: [12, 18, 12],
            scale: [1, 1.03, 1]
          } : {}}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-[18%] left-[-8%] sm:left-[-3%] md:left-[2%] lg:left-[4%] w-44 h-44 sm:w-56 sm:h-56 rounded-[30%_70%_70%_30%_/_40%_30%_70%_60%] border border-primary/20 dark:border-white/5 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-white/10 dark:to-white/0 backdrop-blur-xl shadow-none dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] opacity-90 dark:opacity-60 flex items-center justify-center -z-10"
        >
          {/* Internal neon ambient circuitry pattern overlay */}
          <div className="absolute inset-4 rounded-[inherit] border border-dashed border-primary/10 dark:border-primary/5 animate-[spin_60s_linear_infinite]" />
        </motion.div>
        
        {/* Right Glassmorphism Cyber-Shield Panel (Opposing frequency dynamic slow float glass element) */}
        <motion.div 
          animate={isInView ? { 
            y: [0, 18, 0], 
            rotate: [-20, -14, -20],
            scale: [1, 1.04, 1]
          } : {}}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-[22%] right-[-8%] sm:right-[-3%] md:right-[2%] lg:right-[4%] w-48 h-48 sm:w-64 sm:h-64 rounded-[70%_30%_40%_60%_/_60%_60%_30%_40%] border border-primary/20 dark:border-white/5 bg-gradient-to-tr from-primary/10 to-primary/5 dark:from-white/10 dark:to-white/0 backdrop-blur-xl shadow-none dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] opacity-90 dark:opacity-60 flex items-center justify-center -z-10"
        >
          {/* Internal neon ambient circuitry pattern overlay */}
          <div className="absolute inset-4 rounded-[inherit] border border-dashed border-accent-foreground/10 dark:border-accent-foreground/5 animate-[spin_80s_linear_infinite]" />
        </motion.div>

        {/* Cyber Neon Glow Highlights */}
        <div className="absolute top-[15%] right-[25%] w-[25rem] h-[25rem] rounded-full bg-accent-foreground/5 dark:bg-accent-foreground/[0.04] blur-3xl" />
        <div className="absolute bottom-[15%] left-[25%] w-[25rem] h-[25rem] rounded-full bg-primary/5 dark:bg-primary/[0.04] blur-3xl" />
      </div>

      {/* Expanded Container with perfect max width for balanced 3-column gap */}
      <div className="container mx-auto px-6 relative z-10 w-full max-w-[84rem]">
        
        {/* Generous gap-6 (mobile) -> gap-24 (desktop) to keep text blocks separate from technology badges */}
        <div className="grid gap-6 sm:gap-8 lg:gap-24 lg:grid-cols-3 items-center justify-center">
          
          {/* MID-LEFT COLUMN: Frameless Cyber-themed Name Block + Social Media Logos (Framer Motion Loaded) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 flex flex-col gap-6 w-full will-change-[transform,opacity]"
          >
            {/* Frameless Name Cyber block with terminal corner brackets */}
            <div 
              className="relative p-6 md:p-8 space-y-4 rounded-none border backdrop-blur-md transition-all duration-300"
              style={{
                backgroundColor: isDark ? "rgba(3, 7, 18, 0.5)" : "rgba(255, 255, 255, 0.75)", // Visible frosted glass white in light mode
                borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(203, 213, 225, 0.8)", // Clean slate border in light mode
                boxShadow: isDark ? "none" : "0 10px 30px -5px rgba(15, 23, 42, 0.05)"
              }}
            >
              
              {/* Sleek Neon Corner Brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent-foreground/70 !mt-0" style={{ margin: 0 }} />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent-foreground/70 !mt-0" style={{ margin: 0 }} />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent-foreground/70 !mt-0" style={{ margin: 0 }} />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent-foreground/70 !mt-0" style={{ margin: 0 }} />

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[0.65rem] font-bold font-mono bg-accent-foreground/10 text-accent-foreground uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live_Engine_Status: OK
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-sans">
                {personalInfo.name}
              </h1>
              <p className="text-lg font-bold font-mono text-accent-foreground tracking-tight">
                {`const Developer = "${personalInfo.title}";`}
              </p>
              <div className="text-sm text-muted-foreground leading-relaxed font-mono text-xs">
                {`{ location: "${personalInfo.location}", education: "B.Tech Computer Engineering" }`}
                <p className="mt-4 text-xs font-sans text-muted-foreground leading-relaxed">
                  Building production systems that bridge technical depth with high-impact, live public solutions.
                </p>
              </div>

            </div>

            {/* Bottom-left: Social Media Buttons (Frameless glowing square LOGO buttons) */}
            <div className="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2 px-1 w-full pt-1">
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg border-accent-foreground/20 bg-background/50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center justify-center"
                )}
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.x}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg border-accent-foreground/20 bg-background/50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center justify-center"
                )}
                aria-label="X Profile"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg border-accent-foreground/20 bg-background/50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center justify-center"
                )}
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg border-accent-foreground/20 bg-background/50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center justify-center"
                )}
                aria-label="HackerRank Profile"
              >
                <HackerRankIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg border-accent-foreground/20 bg-background/50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center justify-center"
                )}
                aria-label="ResearchGate Profile"
              >
                <ResearchGateIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg border-accent-foreground/20 bg-background/50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center justify-center"
                )}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919359839551"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg border-accent-foreground/20 bg-background/50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center justify-center"
                )}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>

            {/* Action Buttons inside the box at the bottom */}
            <div className="grid grid-cols-3 gap-3 pl-2 w-full pt-1">
              <a
                href="https://drive.google.com/file/d/1hlRIV-nATCMA6dr-WmHnzVMvjaGpUmvl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-lg bg-accent-foreground text-black dark:text-white text-[0.65rem] sm:text-xs font-bold font-mono shadow-lg shadow-accent-foreground/10 hover:opacity-90 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 flex items-center justify-center h-11 border-none px-1 text-center"
                )}
              >
                View CV
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-lg border-accent-foreground/20 bg-background/50 backdrop-blur-md text-[0.65rem] sm:text-xs font-bold font-mono text-foreground hover:scale-105 hover:border-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 flex items-center justify-center h-11 px-1 text-center"
                )}
              >
                LinkedIn
              </a>
              <a
                href="https://drive.google.com/file/d/1hlRIV-nATCMA6dr-WmHnzVMvjaGpUmvl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-lg border-accent-foreground/20 bg-background/50 backdrop-blur-md text-[0.65rem] sm:text-xs font-bold font-mono text-foreground hover:scale-105 hover:border-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 flex items-center justify-center h-11 px-1 text-center"
                )}
              >
                Resume
              </a>
            </div>
          </motion.div>


          {/* CENTER COLUMN: Responsive Canvas, Scaled Up Crisp Portrait with Symmetric Arched Halo Tech Stack */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center scale-[0.98] sm:scale-100">
            
            {/* Fluid Responsive Canvas - Perfect large scale dimensions */}
            <div 
              ref={constraintsRef}
              className="relative w-[23rem] h-[32rem] sm:w-[26rem] sm:h-[35rem] md:w-[26rem] md:h-[36rem] flex items-end justify-center overflow-visible"
            >
              {/* Sci-fi HUD rings floating strictly BEHIND the developer (Not cropping portrait) */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-accent-foreground/15 via-transparent to-primary/15 p-2 -z-10 animate-pulse pointer-events-none">
                <div className="absolute inset-0 rounded-full border border-accent-foreground/20 animate-ping duration-[3000ms]" />
                <div className="absolute inset-5 border border-dashed border-primary/20 animate-spin duration-[40000ms] rounded-full" />
              </div>

              {/* Ambient premium blue glow behind the developer to spread out naturally without crop limits */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] md:w-80 md:h-80 rounded-full bg-accent-foreground/10 dark:bg-accent-foreground/5 blur-[50px] -z-20 pointer-events-none animate-pulse" />

              {/* Organically layered developer photo (Framer Motion Loaded - rising dramatically from bottom of section with GPU acceleration and zero lag) */}
              <motion.div 
                initial={{ opacity: 0, y: 250, scale: 0.95 }}
                animate={isPortraitHovered ? {
                  opacity: 1,
                  y: 20, // drop slightly representing heavy gravity pull
                  scale: 1.12 // increase scale of the developer portrait
                } : {
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                onMouseEnter={() => setIsPortraitHovered(true)}
                onMouseLeave={() => setIsPortraitHovered(false)}
                transition={{ 
                  type: "spring",
                  stiffness: isPortraitHovered ? 120 : 150,
                  damping: isPortraitHovered ? 12 : 20,
                  mass: 1.2
                }}
                className="relative w-[21rem] h-[32rem] sm:w-[24rem] sm:h-[35rem] md:w-[24rem] md:h-[36rem] select-none z-10 pointer-events-auto cursor-pointer will-change-[transform,opacity]"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 94%, rgba(0,0,0,0) 100%)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 94%, rgba(0,0,0,0) 100%)"
                }}
              >
                <Image
                  src={developerHeroImg}
                  alt="Niraj Bava"
                  fill
                  sizes="(max-w-7xl) 100vw"
                  priority
                  className="object-contain object-bottom"
                />
              </motion.div>

              {/* Floating Skill badges showing BIG LOGOS tightly hugging the symmetric blueprint arch with elastic spring-back and sequential entry */}
              {floatingTechs.map((tech, index) => (
                <motion.div
                  key={`wrapper-${tech.name}`}
                  className={`absolute ${tech.pos} z-20`}
                  animate={isInView ? { y: [0, -10, 0] } : {}}
                  transition={{ 
                    duration: 3 + (index % 3) * 0.5, // Organic varying float speeds
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: index * 0.3 // Staggered float entry
                  }}
                >
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isPortraitHovered ? {
                      opacity: 1,
                      scale: 0.85, // slightly smaller as they fall
                      y: tech.name === "Docker" || tech.name === "MERN" ? 260
                         : tech.name === "JS" || tech.name === "Python" ? 365
                         : 450, // falls down to perfect bottom baseline!
                      rotate: index % 2 === 0 ? 30 : -30, // tumbles left/right on impact!
                    } : {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      rotate: 0,
                    }}
                    transition={isPortraitHovered ? {
                      type: "spring",
                      stiffness: 180,
                      damping: 12,
                      mass: 0.8,
                      delay: index * 0.04 // gorgeous staggered domino collapse!
                    } : {
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                      delay: tech.delay // slide smoothly back to orbit
                    }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.7}
                    dragTransition={{ bounceStiffness: 180, bounceDamping: 12 }}
                    whileHover={{ scale: 1.18, cursor: "grab", zIndex: 40 }}
                    whileDrag={{ scale: 1.25, cursor: "grabbing", zIndex: 50 }}
                    className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border border-accent-foreground/25 bg-background/95 shadow-[0_6px_16px_rgba(0,0,0,0.18)] hover:border-accent-foreground hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-[border-color,box-shadow,background-color] duration-300 select-none will-change-[transform,opacity]"
                  >
                    <span className="flex items-center justify-center text-accent-foreground pointer-events-none">{tech.icon}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* MID-RIGHT COLUMN: Frameless Cyber-themed About Me + Actions (Framer Motion Loaded) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="order-3 lg:order-3 flex flex-col gap-6 w-full will-change-[transform,opacity]"
          >
            <GithubCalendarWidget />
            <LeetCodeWidget />

          </motion.div>

        </div>

      </div>

      {/* Absolute floating scroll down button in the right side of the free space (Safe from shifting the right box) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
        className="absolute bottom-4 right-6 sm:right-12 lg:right-16 z-20"
      >
        <a
          href="#about"
          className="w-10 h-10 rounded-lg border border-accent-foreground/20 bg-background/50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] flex items-center justify-center animate-bounce"
          aria-label="Scroll down to About section"
        >
          <ArrowDownIcon className="h-5 w-5 text-accent-foreground" />
        </a>
      </motion.div>
    </section>
  );
}
