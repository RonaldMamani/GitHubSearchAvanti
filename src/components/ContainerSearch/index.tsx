import SearchError from "../SearchError";
import GitHubLogo from "/src/assets/LogoGitHub.svg";

import {BsSearch} from "react-icons/bs"

export default function ContainerSearch() {
    return (
        <div className="
            bg-[#000] rounded-md flex justify-center items-start
            lg:w-[1156px] lg:h-[537px] lg:py-9
            ">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col gap-7">
                        <div className="flex justify-center items-center gap-3 text-white">
                            <img
                                className="w-[58px] h-[58px]"
                                src={GitHubLogo} alt="Logo do GitHub" 
                            />
                            <div className="flex text-[60px] gap-1">
                                <span className="">Perfil</span>
                                <span className="font-extrabold">GitHub</span>
                            </div>
                        </div>
                        <form className="
                            flex justify-center relative border-white border-1 rounded-[10px]
                            lg:w-[503px]
                            " action="">
                            <input 
                                className="
                                    bg-white px-4 py-5 rounded-[10px]
                                    placeholder:text-black placeholder:text-xl
                                    lg:w-full
                                    " 
                                type="text"
                                placeholder="Digite um usuario do GitHub"
                                />
                            <button className="
                                absolute right-0 h-full bg-[#005CFF] p-5 rounded-[10px]">
                                    <BsSearch className="fill-white w-[25px] h-[25px]" />
                            </button>
                        </form>
                    </div>
                    <SearchError />
                </div>
        </div>
    )
}