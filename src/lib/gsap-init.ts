'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export const EASE_DEFAULT = 'power2.out';
export const EASE_DRAMATIC = 'expo.out';
export { gsap, ScrollTrigger, useGSAP };
