import Image from "next/image";

export default function CoverBanner() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-48 md:h-64 w-full max-w-2xl z-0 overflow-hidden pointer-events-none select-none border-x border-b border-border border-dashed">
      <Image
        src="/cover.png"
        alt="Cover Background"
        fill
        className="object-cover opacity-80 dark:opacity-60"
        priority
      />
      {/* Quote Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center sm:items-end justify-center sm:justify-end text-center sm:text-right px-6 pb-6 sm:pb-8 sm:pr-8">
        <h2 className="text-sm sm:text-lg md:text-xl font-medium text-white max-w-sm leading-relaxed tracking-wide drop-shadow-xl opacity-90 [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
          "Building the future, one line of code at a time."
        </h2>
      </div>
    </div>
  );
}
