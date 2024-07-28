"use client";

import Image from "next/image";
import { LinkButton } from "@/components/link_button.component";
import { ArrowDownRight } from "lucide-react";
import React, { useEffect } from "react";
import clsx from "clsx";
import { useMobile } from "./hooks/use_mobile";
import { FooterSocial } from "@/components/footer_social.component";
import { useMenuStore } from "./state/menu.store";
type TechsType = { svg: React.ReactNode; text: string };

export default function Home() {
  const isMobile = useMobile();
  const { setIsOpen } = useMenuStore((state) => state);

  const techs: TechsType[] = [
    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
          <path
            data-name="original"
            d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
          ></path>
        </svg>
      ),
      text: "Typescript",
    },
    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <circle cx="64" cy="64" r="64"></circle>
          <path
            fill="url(#a)"
            d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
          ></path>
          <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
          <defs>
            <linearGradient
              id="a"
              x1="109"
              x2="144.5"
              y1="116.5"
              y2="160.5"
              gradientTransform="scale(.71111)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="b"
              x1="121"
              x2="120.799"
              y1="54"
              y2="106.875"
              gradientTransform="scale(.71111)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Next.js",
    },
    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <g>
            <circle cx="64" cy="64" r="11.4"></circle>
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
          </g>
        </svg>
      ),
      text: "React.js",
    },
    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"></path>
        </svg>
      ),
      text: "Redux",
    },

    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"></path>
        </svg>
      ),
      text: "Tailwind CSS",
    },

    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <path d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path>
          <path d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
          <path
            fill="#EBEBEB"
            d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
          ></path>
          <path
            fill="#fff"
            d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
          ></path>
        </svg>
      ),
      text: "HTML",
    },

    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <path d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path>
          <path d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path>
          <path
            fill="#fff"
            d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
          ></path>
          <path
            fill="#EBEBEB"
            d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
          ></path>
          <path
            fill="#fff"
            d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
          ></path>
          <path
            fill="#EBEBEB"
            d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
          ></path>
        </svg>
      ),
      text: "CSS",
    },

    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <path d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
        </svg>
      ),
      text: "Git",
    },

    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <g>
            <path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"></path>
          </g>
          <path d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"></path>
          <path d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"></path>
          <linearGradient
            id="flutter-original-a"
            gradientUnits="userSpaceOnUse"
            x1="59.365"
            y1="116.36"
            x2="86.825"
            y2="99.399"
          >
            <stop offset="0" stopColor="#1b4e94"></stop>
            <stop offset=".63" stopColor="#1a5497"></stop>
            <stop offset="1" stopColor="#195a9b"></stop>
          </linearGradient>
          <path
            fill="url(#flutter-original-a)"
            d="M61.6 113.1l30.8-8.4-10.8-10.8z"
          ></path>
        </svg>
      ),
      text: "Flutter",
    },

    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <path d="M17.474 103.276 33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39 6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714H17.474Z"></path>
          <path d="M71.903 64.005 54.955 31.913l-37.481 71.363Z"></path>
          <path d="M110.577 103.276 98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.714l-76.112 76.243 42.115 23.618a8.728 8.728 0 0 0 8.51 0l42.478-23.618Z"></path>
          <path
            fill="#fff"
            fillOpacity=".2"
            d="M98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.713L78.479 42.178 66.6 19.562a2.91 2.91 0 0 0-5.15 0l-6.494 12.365L38.662 1.538A2.91 2.91 0 0 0 35.605.044a2.907 2.907 0 0 0-2.384 2.425L17.474 103.276h-.051l.05.058.415.204 75.676-75.764a2.91 2.91 0 0 1 4.932 1.571l11.965 74.003.116-.073L98.51 28.603Zm-80.898 74.534L33.228 3.182A2.91 2.91 0 0 1 35.613.756a2.911 2.911 0 0 1 3.057 1.495l16.292 30.39 6.495-12.366a2.91 2.91 0 0 1 5.15 0L78.245 42.41 17.61 103.138Z"
          ></path>
          <path
            fill="#a52714"
            d="M68.099 126.18a8.728 8.728 0 0 1-8.51 0l-42.015-23.55-.102.647 42.115 23.61a8.728 8.728 0 0 0 8.51 0l42.48-23.61-.11-.67-42.37 23.575z"
            opacity=".2"
          ></path>
        </svg>
      ),
      text: "Firebase",
    },

    {
      svg: (
        <svg viewBox="0 0 128 128" className="fill-zinc-600 h-6 rounded-sm">
          <path d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0"></path>{" "}
          <path d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z"></path>
        </svg>
      ),
      text: "AWS",
    },
  ];

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile, setIsOpen]);

  return (
    <div
      className={clsx(
        isMobile ? "justify-start" : "justify-between",
        "flex flex-col items-center lg:items-start w-full h-full overflow-y-auto"
      )}
    >
      <div
        className={clsx(
          isMobile ? "justify-start" : "justify-between",
          "flex flex-col items-center lg:items-start w-full h-full overflow-y-auto"
        )}
      >
        <div className="relative flex flex-col items-center md:flex-row lg:flex-row justify-between w-full">
          <div
            className={clsx(
              isMobile && "px-5",
              "left-0 top-0 ml-0 md:ml-20 lg:ml-40 mt-20"
            )}
          >
            <h1 className="text-zinc-700 text-xs md:text-lg font-light ml-1 mb-2">
              Olá, eu sou
            </h1>
            <h1 className="text-zinc-700 text-3xl md:text-4xl lg:text-5xl font-bold">
              Gabriel Castro
            </h1>

            <p
              className={
                "mt-4 text-zinc-700 text-sm font-light text-start ml-1"
              }
            >
              Sou um Engenheiro de Software, especializado{" "}
              {!isMobile && <br className="block xl:hidden" />}
              em Front-End
              {!isMobile && <br className="hidden xl:block" />} com mais de 3+
              de experiência.
            </p>

            <LinkButton
              url={"https://www.linkedin.com/in/gabrielsouzacastro/"}
              text="Entre em contato"
              classes="mt-5"
            />
          </div>

          <div className={"relative mr-10 ml-40 md:ml-0 lg:mr-10 mt-10 "}>
            <div className="z-50 absolute left-0 bottom-0 mb-14 -ml-28 rounded-xl px-5 py-3 bg-white flex items-center gap-2 shadow-xl">
              <span
                className={clsx(
                  "bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text text-xl md:text-3xl font-bold"
                )}
              >
                3+
              </span>
              <span className="text-zinc-800 text-xs md:text-base font-light">
                Experiência
              </span>
            </div>

            <Image
              src={"/images/gabrcastro_light.png"}
              alt="Person"
              width={1000}
              height={1000}
              className="w-52 lg:w-80 xl:w-80 xl:mr-36"
            />
          </div>
        </div>

        <div className="ml-0 lg:ml-40 w-[80%] lg:w-[50%] mb-20 mt-20">
          <span className="flex flex-row gap-3 text-sm text-zinc-700 font-light">
            Eu tenho experiência com as seguintes tecnologias
            <ArrowDownRight className="text-zinc-700 size-5" />
          </span>

          <div className="flex flex-wrap justify-between md:justify-start gap-3 mt-7 md:mt-5">
            {techs.map((tech) => (
              <div
                key={tech.text + 1}
                className={clsx(
                  "flex flex-row gap-2 text-zinc-800 text-sm font-light items-center justify-center"
                )}
              >
                {tech.svg}
                {tech.text}
              </div>
            ))}
          </div>
        </div>
        {isMobile && (
          <div className="flex flex-col items-center justify-center mt-4 mb-6 pt-4 border-t-[.5px] border-t-zinc-200 w-full bottom-0">
            <FooterSocial />
          </div>
        )}
      </div>

      {/* <div className="relative flex flex-col items-center md:flex-row lg:flex-row justify-between w-full">
        <div
          className={clsx(
            isMobile && "px-5",
            "left-0 top-0 ml-0 md:ml-20 lg:ml-40 mt-20"
          )}
        >
          <h1 className="text-zinc-700 text-xs md:text-lg font-light ml-1 mb-2">
            Olá, eu sou
          </h1>
          <h1 className="text-zinc-700 text-3xl md:text-4xl lg:text-5xl font-bold">
            Gabriel Castro
          </h1>

          <p
            className={"mt-4 text-zinc-700 text-sm font-light text-start ml-1"}
          >
            Sou um Engenheiro de Software, especializado{" "}
            {!isMobile && <br className="block xl:hidden" />}
            em Front-End
            {!isMobile && <br className="hidden xl:block" />} com mais de 3+ de
            experiência.
          </p>

          <LinkButton
            url={"https://www.linkedin.com/in/gabrielsouzacastro/"}
            text="Entre em contato"
            classes="mt-5"
          />
        </div>

        <div className={"relative mr-10 ml-40 md:ml-0 lg:mr-10 mt-10 "}>
          <div className="z-50 absolute left-0 bottom-0 mb-14 -ml-28 rounded-xl px-5 py-3 bg-white flex items-center gap-2 shadow-xl">
            <span
              className={clsx(
                "bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text text-xl md:text-3xl font-bold"
              )}
            >
              3+
            </span>
            <span className="text-zinc-800 text-xs md:text-base font-light">
              Experiência
            </span>
          </div>

          <Image
            src={"/images/gabrcastro_light.png"}
            alt="Person"
            width={1000}
            height={1000}
            className="w-52 lg:w-80 xl:w-80 xl:mr-36"
          />
        </div>
      </div>

      <div className="ml-0 lg:ml-40 w-[80%] lg:w-[50%] mb-20 mt-20">
        <span className="flex flex-row gap-3 text-sm text-zinc-700 font-light">
          Eu tenho experiência com as seguintes tecnologias
          <ArrowDownRight className="text-zinc-700 size-5" />
        </span>

        <div className="flex flex-wrap justify-between md:justify-start gap-3 mt-7 md:mt-5">
          {techs.map((tech) => (
            <div
              key={tech.text + 1}
              className={clsx(
                "flex flex-row gap-2 text-zinc-800 text-sm font-light items-center justify-center"
              )}
            >
              {tech.svg}
              {tech.text}
            </div>
          ))}
        </div>
      </div>
      {isMobile && (
        <div className="flex flex-col items-center justify-center mt-4 mb-6 pt-4 border-t-[.5px] border-t-zinc-200 w-full bottom-0">
          <FooterSocial />
        </div>
      )} */}
    </div>
  );
}
