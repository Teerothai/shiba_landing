/**
 * WaveDivider - Soft, organic wave shape between sections.
 * Uses SVG curves (no pointy edges) to create a smooth transition.
 *
 * @param topColor   – The background colour of the section ABOVE
 * @param bottomColor – The background colour of the section BELOW
 * @param flip       – Mirror vertically for variety
 * @param variant    – Pick a different wave shape (1–4)
 * @param className  – Extra Tailwind / CSS classes
 */

interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  variant?: 1 | 2 | 3 | 4;
  className?: string;
}

// Each variant is a smooth cubic-bezier path – no sharp points
const wavePaths: Record<number, string> = {
  1: "M0,64 C320,128 640,0 960,64 C1280,128 1600,0 1920,64 L1920,200 L0,200 Z",
  2: "M0,96 C480,192 960,0 1440,96 C1680,144 1800,48 1920,96 L1920,200 L0,200 Z",
  3: "M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 C1680,160 1920,40 1920,80 L1920,200 L0,200 Z",
  4: "M0,120 C300,40 600,160 900,80 C1200,0 1500,160 1920,100 L1920,200 L0,200 Z",
};

export function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  variant = 1,
  className = "",
}: WaveDividerProps) {
  const path = wavePaths[variant];

  return (
    <div
      className={`relative w-full overflow-hidden leading-0 ${className}`}
      style={{
        backgroundColor: topColor,
        transform: flip ? "scaleY(-1)" : undefined,
        marginTop: flip ? "-1px" : undefined,
        marginBottom: flip ? undefined : "-1px",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 200"
        preserveAspectRatio="none"
        className="w-full h-[clamp(40px,6vw,100px)] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={bottomColor} />
      </svg>
    </div>
  );
}

export default WaveDivider;
