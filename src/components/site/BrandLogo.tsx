import logo from "@/assets/8roots-logo.png";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

type BrandLogoProps = {
  className?: string;
  imgClassName?: string;
  motionProps?: Omit<HTMLMotionProps<"img">, "src" | "alt">;
};

export function BrandLogo({ className, imgClassName, motionProps }: BrandLogoProps) {
  const imgClass = cn("logo-img h-full w-auto object-contain", imgClassName);

  return (
    <span className={cn("logo-badge inline-flex items-center shrink-0", className)}>
      {motionProps ? (
        <motion.img src={logo} alt="8Roots Consulting" {...motionProps} className={imgClass} />
      ) : (
        <img src={logo} alt="8Roots Consulting" className={imgClass} />
      )}
    </span>
  );
}
