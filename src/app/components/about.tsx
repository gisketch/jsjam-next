import BoxReveal from "@/components/ui/box-reveal";
import { LinkPreview } from "@/components/ui/link-preview";
import SectionTitle from "@/components/ui/section-title";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { aboutInfo } from "@/lib/data";

const description = `Established by seasoned engineer Engr. Joseph S. Jamayo, JSJAM Construction specializes in all facets of building design, engineering, construction, and renovation for both commercial and residential sectors. Located at the Jamayo Building in Davao City, the company leverages Engr. Jamayo's 22 years of experience, including significant roles in the Red Sea Company and Saudi Aramco.`;

function Highlight({ children }: { children: React.ReactNode }) {
    return <span className="text-primary font-extrabold">{children}</span>
}

// TODO: add links/images

export default function About() {
    return (
        <div className="flex flex-col gap-4">
            <BoxReveal duration={0.3} boxColor="transparent">
                <SectionTitle>About <span className="text-primary-red">JSJAM</span></SectionTitle>
            </BoxReveal>
            <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-2xl tracking-wide">
                Established by seasoned engineer{" "}
                <LinkPreview url="" className="text-primary-red font-extrabold">Engr. Joseph S. Jamayo</LinkPreview>
                , <Highlight>JSJAM Construction</Highlight> specializes in all facets of <Highlight>building design</Highlight>, <Highlight>engineering</Highlight>, <Highlight>construction</Highlight>, and renovation for both commercial and residential sectors. Located at the <LinkPreview url="" className="text-primary-red font-extrabold">Jamayo Building in Davao City</LinkPreview>, the company leverages Engr. Jamayo&apos;s <Highlight>22 years</Highlight> of experience,
                including significant roles in the <LinkPreview url="" className="text-primary-red font-extrabold">Red Sea Company</LinkPreview> and <LinkPreview url="" className="text-primary-red font-extrabold">Saudi Aramco</LinkPreview>.
            </div>
        </div>
    );
}