"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
}

const SparkleIcon = ({ id, x, y, color, delay, scale }: Sparkle) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, scale, 0],
        rotate: [75, 100, 120],
      }}
      transition={{ duration: 2.5, repeat: Infinity, delay }}
      width="18"
      height="18"
      viewBox="0 0 21 21"
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
        fill={color}
      />
    </motion.svg>
  );
};

interface HeaderLogoProps {
  className?: string;
}

export default function HeaderLogo({ className = "h-28" }: HeaderLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const colors = { first: "#60A5FA", second: "#A78BFA" }; // blue-400 and purple-400

  // Fixed corner positions: top-left, top-right, bottom-left, bottom-right
  const cornerPositions = [
    { x: "5%", y: "10%" },
    { x: "90%", y: "10%" },
    { x: "5%", y: "80%" },
    { x: "90%", y: "80%" },
  ];

  useEffect(() => {
    if (!isHovered) {
      setSparkles([]);
      return;
    }

    // Generate 4 sparkles at corners
    const cornerSparkles: Sparkle[] = cornerPositions.map((pos, index) => ({
      id: `corner-${index}-${Date.now()}`,
      x: pos.x,
      y: pos.y,
      color: index % 2 === 0 ? colors.first : colors.second,
      delay: index * 0.4, // Staggered delay for chill effect
      scale: 0.8,
    }));
    
    setSparkles(cornerSparkles);
  }, [isHovered]);

  return (
    <Link href="/" className="relative">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && sparkles.map((sparkle) => (
          <SparkleIcon key={sparkle.id} {...sparkle} />
        ))}
        <Image
          src="/logo/logo1.png"
          alt="roomieVerse"
          width={1000}
          height={250}
          className={`${className} w-auto transition-all duration-300 ${isHovered ? 'scale-125' : ''}`}
          priority
        />
      </div>
    </Link>
  );
}
