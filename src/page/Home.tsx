import ContainerSearch from "../components/ContainerSearch";

export default function Home () {
    return (
        <section className="
            bg-[#272727] w-full h-screen flex justify-center items-center
            relative overflow-hidden
            ">
                <ContainerSearch />
                <div className="
                    absolute -bottom-0 -left-100 z-10
                    w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,#005CFF_0%,#272727_60%)]
                    lg:w-[674px] lg:h-[674px]
                    animate-move-x
                "></div>
                <div className="
                    absolute -top-28 right-24 z-10 
                    w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,#005CFF_0%,#272727_60%)]
                    lg:w-[674px] lg:h-[674px]
                    animate-move-diagonal
                "></div>
        </section>
    )
}