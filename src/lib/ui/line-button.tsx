import Image from "next/image";
import { cn } from "@/lib/utils";

const LINE_BUTTON_IMG =
  "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low,w_800/v1772093779/icon-Add_Line_bgukin.png";

const sizeMap = {
  default: "h-12",
  sm: "h-10",
  lg: "h-16",
  xl: "h-20",
  icon: "h-12",
} as const;

type LineButtonSize = keyof typeof sizeMap;

interface LineButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  size?: LineButtonSize;
}

/**
 * LineButton - LINE CTA using the official "Add Line" image
 * Scales to fit via the `size` prop while preserving aspect ratio.
 */
export function LineButton({
  size = "default",
  className,
  ...props
}: LineButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "group relative inline-flex items-center cursor-pointer",
        "animate-[line-bounce_1.8s_ease-in-out_infinite]",
        "hover:scale-105 hover:brightness-110 active:scale-95",
        "transition-transform duration-200",
        className,
      )}
      {...props}
    >
      <Image
        src={LINE_BUTTON_IMG}
        alt="Add LINE"
        width={400}
        height={100}
        className={cn(
          "relative w-auto object-contain drop-shadow-lg",
          sizeMap[size],
        )}
      />
    </button>
  );
}
