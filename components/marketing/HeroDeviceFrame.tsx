import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface HeroDeviceFrameProps {
  imageSrc: string;
  imageAlt: string;
}

export function HeroDeviceFrame({ imageSrc, imageAlt }: HeroDeviceFrameProps) {
  return (
    <section className="bg-ink-800 py-space-32">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Device Frame Container */}
        <div className="flex justify-center mb-space-12">
          <div className="w-full max-w-2xl rounded-lg shadow-glow bg-ink-700 border border-teal-700 overflow-hidden">
            {/* Macbook-style top bar */}
            <div className="bg-ink-900 h-8 flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Screenshot content */}
            <div className="relative w-full aspect-video bg-ink-800">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-display text-white mb-space-6">
            Quantitative Risk Systems
          </h1>
          <p className="font-body text-body-lg text-white mb-space-8">
            Every number cryptographically signed and independently verifiable.
          </p>

          {/* CTAs */}
          <div className="flex gap-space-4 justify-center flex-wrap">
            <Button variant="primary">Request Demo</Button>
            <Button variant="secondary">Request Validation Report</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
