import { HLogo } from "@/app/_componentes/ui/h-logo";

export default function Home(){
    return(
        <section className="flex items-center justify-around">
            <div>
                <HLogo label="Home" size="xl" weight="bold"/>
            </div>
        </section>
    )
}