import BoxReveal from "@/components/ui/box-reveal"
import JsJam from "@/assets/jsjamlogo.webp"
import Image from "next/image"
import { Button } from "@/components/ui/button";

export default function Hero() {
    const redColor = "var(--red)";

    return (
        <div className="flex gap-2 flex-col">
            <h1 aria-label="JsJam Construction"><Image src={JsJam} alt="JsJam" width={150} height={150} className="mb-16" /></h1>
            <span className="text-body md:text-body-desktop text-muted-foreground">Since 2020</span>
            <div className="flex flex-col text-h1 md:text-hero-desktop gap-0">
              <BoxReveal duration={0.3} delay={0.01} boxColor={redColor}>
                <span className="font-euro tracking-tight">Quality</span>
              </BoxReveal>
              <BoxReveal duration={0.3} delay={0.15}boxColor={redColor}>
                <span className="font-euro text-primary-red tracking-tight">Construction</span>
              </BoxReveal>
              <BoxReveal duration={0.3} delay={0.3}boxColor={redColor}>
                <span className="font-euro tracking-tight">Meets</span>
              </BoxReveal>
              <BoxReveal duration={0.3} delay={0.45} boxColor={redColor}>
                <span className="font-euro text-primary-red tracking-tight">Cutting-Edge</span>
              </BoxReveal>
              <BoxReveal duration={0.3} delay={0.6} boxColor={redColor}>
                <span className="font-euro tracking-tight">Solutions</span>
              </BoxReveal>
            </div>
            <div className="flex flex-row gap-4 mt-8">
              <Button>About Us</Button>
              <Button variant="outline">Contact Us</Button>
            </div>
        </div>
    );
}
