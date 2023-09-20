'use client';
import { PropsWithChildren, createRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function User(props: PropsWithChildren) {
  const userRef = createRef<SVGSVGElement>();
  const userIsInView = useInView(userRef, {
    margin: '0px 0px -200px 0px',
    once: true,
  });

  return (
    <motion.svg
      ref={userRef}
      viewBox="0 0 77 89"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 0 }}
      animate={
        userIsInView && {
          rotate: -360,
        }
      }
    >
      <motion.path
        d="M60.2712 22.6978C60.2712 34.7389 50.51 44.5002 38.4689 44.5002C26.4278 44.5002 16.6666 34.7389 16.6666 22.6978C16.6666 10.6567 26.4278 0.895508 38.4689 0.895508C50.51 0.895508 60.2712 10.6567 60.2712 22.6978Z"
        fill="#5EEAD4"
        initial={{ y: 250, fillOpacity: 0 }}
        animate={
          userIsInView && {
            y: 0,
            fillOpacity: 1,
          }
        }
      />
      <motion.path
        d="M0.585693 67.9163C5.13873 54.7072 20.5915 44.9847 38.9534 44.9847C56.6231 44.9847 71.5984 53.9879 76.7599 66.4373C69.1282 79.6691 54.7307 88.5893 38.2266 88.5893C22.3452 88.5893 8.41428 80.3295 0.585693 67.9163Z"
        fill="#5EEAD4"
        initial={{ y: -250, fillOpacity: 0 }}
        animate={
          userIsInView && {
            y: 0,
            fillOpacity: 1,
          }
        }
      />
    </motion.svg>
  );
}

export function Page(props: PropsWithChildren) {
  const pageRef = createRef<SVGSVGElement>();
  const pageIsInView = useInView(pageRef, {
    margin: '0px 0px -200px 0px',
    once: true,
  });
  return (
    <motion.svg
      ref={pageRef}
      viewBox="0 0 54 74"
      xmlns="http://www.w3.org/2000/svg"
      fill="#DB2777"
      {...props}
      initial={{ fillOpacity: 0, rotate: 0, scaleX: -1 }}
      animate={
        pageIsInView && {
          fillOpacity: 1,
          rotate: 360,
        }
      }
    >
      <motion.rect
        width="53.7791"
        height="73.9462"
        rx="7.46932"
        fill="#DB2777"
        initial={{ fillOpacity: 0 }}
        animate={pageIsInView && { fillOpacity: 1 }}
      />

      <motion.path
        d="M7.46948 8.58984H47.0569"
        stroke="#1E293A"
        strokeWidth="1.49386"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={pageIsInView && { pathLength: 1 }}
        transition={{
          delay: 0.4,
          type: 'spring',
          stiffness: 100,
          duration: 0.5,
        }}
      />
      <motion.path
        d="M7.46948 31.7441H47.0569"
        stroke="#1E293A"
        strokeWidth="1.49386"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={pageIsInView && { pathLength: 1 }}
        transition={{
          delay: 0.4,
          type: 'spring',
          stiffness: 100,
          duration: 0.5,
        }}
      />
      <motion.path
        d="M7.46948 16.0586H47.0569"
        stroke="#1E293A"
        strokeWidth="1.49386"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={pageIsInView && { pathLength: 1 }}
        transition={{
          delay: 0.4,
          type: 'spring',
          stiffness: 100,
          duration: 0.5,
        }}
      />
      <motion.path
        d="M7.46948 39.2139H47.0569"
        stroke="#1E293A"
        strokeWidth="1.49386"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={pageIsInView && { pathLength: 1 }}
        transition={{
          delay: 0.4,
          type: 'spring',
          stiffness: 100,
          duration: 0.5,
        }}
      />
      <motion.path
        d="M7.46948 46.6836H23.5439"
        stroke="#1E293A"
        strokeWidth="1.49386"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={pageIsInView && { pathLength: 1 }}
        transition={{
          delay: 0.4,
          type: 'spring',
          stiffness: 100,
          duration: 0.5,
        }}
      />
      <motion.path
        d="M7.46948 24.2754H47.0569"
        stroke="#1E293A"
        strokeWidth="1.49386"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={pageIsInView && { pathLength: 1 }}
        transition={{
          delay: 0.4,
          type: 'spring',
          stiffness: 100,
          duration: 0.5,
        }}
      />
      <circle cx="28.0099" cy="46.683" r="0.373466" fill="#DB2777" />
    </motion.svg>
  );
}

export function Laptop(props: PropsWithChildren) {
  const laptopRef = createRef<SVGSVGElement>();
  const laptopIsInView = useInView(laptopRef, {
    margin: '0px 0px -200px 0px',
    once: true,
  });
  return (
    <motion.svg
      ref={laptopRef}
      viewBox="0 0 78 56"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M11.5914 35.5314C12.1692 34.5476 13.2248 33.9434 14.3658 33.9434H66.7464C68.0814 33.9434 69.2777 34.7678 69.753 36.0154L75.4127 50.8722C76.215 52.9781 74.6596 55.2349 72.4061 55.2349H5.64034C3.15296 55.2349 1.60637 52.533 2.86603 50.3882L11.5914 35.5314Z"
        fill="#3B82F6"
        initial={{ fillOpacity: 0, rotate: 0 }}
        animate={laptopIsInView && { fillOpacity: 1, rotate: -360 }}
      />
      <motion.path
        d="M68.2876 29.7123C68.2876 31.4892 66.8471 32.9297 65.0702 32.9297L15.0654 32.9297C13.2885 32.9297 11.848 31.4892 11.848 29.7123L11.848 4.04075C11.848 2.26383 13.2885 0.823359 15.0654 0.82336L65.0702 0.82336C66.8471 0.82336 68.2876 2.26384 68.2876 4.04075L68.2876 29.7123Z"
        fill="#3B82F6"
        initial={{ fillOpacity: 0, rotate: 0 }}
        animate={laptopIsInView && { fillOpacity: 1, rotate: 360 }}
      />
    </motion.svg>
  );
}
