import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl">
          <Badge className="rounded-full py-1 border-none">
            AI-Powered Virtual Try-On
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Try Before You Buy with <span className="text-primary">Face Me</span>
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            See how you'd actually look wearing eyeglasses, lipstick, hats, or earrings before you buy. 
            Create stunning AI-generated looks, share them with the community, and even monetize your style.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/faces">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base"
              >
                Explore Faces <ArrowUpRight className="!h-5 !w-5" />
              </Button>
            </Link>
            <Link href="/shop">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full text-base shadow-none"
              >
                <CirclePlay className="!h-5 !w-5" /> Try Virtual Styling
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl aspect-square flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl">👤</div>
            <div className="text-2xl font-bold text-primary">Face Me</div>
            <div className="text-sm text-muted-foreground px-4">
              AI-powered virtual try-on for fashion & beauty
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;