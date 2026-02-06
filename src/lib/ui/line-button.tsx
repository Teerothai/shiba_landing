import Image from "next/image";
import { Button, type ButtonProps } from "@/lib/ui/button";

interface LineButtonProps extends Omit<ButtonProps, "variant"> {
  label?: string;
}

/**
 * LineButton - LINE CTA button with official LINE icon
 * Reusable component for all LINE chat call-to-action buttons
 */
export function LineButton({
  label = "ทักไลน์เลย",
  size = "default",
  rounded = "full",
  className,
  ...props
}: LineButtonProps) {
  return (
    <Button variant="line" size={size} rounded={rounded} className={className} {...props}>
      <Image
        src="/assets/icon/line-icon.png"
        alt="LINE"
        width={28}
        height={28}
        className="w-7 h-7 object-contain"
      />
      {label}
    </Button>
  );
}
