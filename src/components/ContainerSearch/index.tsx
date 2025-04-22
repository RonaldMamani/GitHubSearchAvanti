import { UserProps } from "../../assets/Types/user";
import { useState } from "react";
import {BsSearch} from "react-icons/bs"

import GitHubLogo from "/src/assets/LogoGitHub.svg";

import GitHubUser from "../GitHubUser";
import SearchError from "../SearchError";

export default function ContainerSearch() {

    const [user, setUser] = useState<UserProps | null>(null);
    const [userName, setUserName] = useState("");
    const [error, setError] = useState(false);

    const loadUser = async (userName: string) => {
        if (!userName) return;
    
        const res = await fetch(`https://api.github.com/users/${userName}`);
    
        if (res.status === 404) {
            setUser(null);
            setError(true);
            return;
        }
    
        const data = await res.json();
    
        setUser(data);
        setError(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loadUser(userName);
    };

    return (
        <div className="
            bg-[#000] w-[80%] h-[90%] z-20 py-6 rounded-md flex justify-center items-start
            lg:w-[1156px] lg:h-[537px] lg:py-9
            ">
                <div className="
                    flex flex-col items-center gap-8
                    ">
                    <div className="flex flex-col gap-7">
                        <div className="
                            flex flex-col items-center gap-3 text-white
                            lg:flex-row lg:justify-center
                            ">
                            <img
                                className="w-[58px] h-[58px]"
                                src={GitHubLogo} alt="Logo do GitHub" 
                            />
                            <div className="
                                flex flex-col text-[40px] gap-1 text-center
                                lg:flex-row lg:text-start lg:text-[60px]
                                ">
                                <span className="">Perfil</span>
                                <span className="font-extrabold">GitHub</span>
                            </div>
                        </div>
                        <form 
                            onSubmit={handleSubmit}
                            className="
                                flex justify-center relative border-white border-1 rounded-[10px]
                                lg:w-[503px]
                            ">
                            <input 
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName}
                                className="
                                    bg-white px-4 py-5 rounded-[10px]
                                    placeholder:text-black 
                                    lg:placeholder:text-xl
                                    w-full
                                    " 
                                type="text"
                                placeholder="Digite um usuario do GitHub"
                                />
                            <button 
                                className="
                                    absolute right-0 h-full bg-[#005CFF] p-5 rounded-[10px]">
                                    <BsSearch className="fill-white w-[25px] h-[25px]" />
                            </button>
                        </form>
                    </div>

                    {error && <SearchError />}
                    {user && !error && <GitHubUser user={user} />}
                </div>
        </div>
    )
}