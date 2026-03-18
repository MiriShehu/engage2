import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  reverse?: boolean;
  duration?: number;
  durationOnHover?: number;
};

export function LogoCloud({ className, logos, reverse, duration = 30, durationOnHover = 60, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={48} reverse={reverse} duration={duration} durationOnHover={durationOnHover}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="flex items-center justify-center px-6 py-4 rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 group"
          >
            <img
              alt={logo.alt}
              className="h-6 md:h-7 w-auto select-none pointer-events-none object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              height={logo.height || "auto" as unknown as number}
              loading="lazy"
              src={logo.src}
              width={logo.width || "auto" as unknown as number}
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
