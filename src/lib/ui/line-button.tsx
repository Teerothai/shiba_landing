import Image from "next/image";
import { cn } from "@/lib/utils";

const LINE_BUTTON_IMG =
  "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low,w_800/v1771325205/Add_Line_t9rlwi.png";

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
  /** kept for backward compat – unused now (image contains label) */
  label?: string;
  size?: LineButtonSize;
  rounded?: string;
}

/**
 * LineButton - LINE CTA using the official "Add Line" image
 * Scales to fit via the `size` prop while preserving aspect ratio.
 */
export function LineButton({
  size = "default",
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  label,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rounded,
  ...props
}: LineButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center cursor-pointer transition-opacity hover:opacity-80 active:opacity-70",
        className,
      )}
      {...props}
    >
      <Image
        src={LINE_BUTTON_IMG}
        alt="Add LINE"
        width={400}
        height={100}
        className={cn("w-auto object-contain", sizeMap[size])}
      />
    </button>
  );
}
