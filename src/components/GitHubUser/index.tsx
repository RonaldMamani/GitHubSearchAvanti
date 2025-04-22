import { UserProps } from "../../assets/Types/user";

type Props = {
    user: UserProps;
}

export default function GitHubUser({ user } : Props) {

    return (
        <div className="
                py-4 px-8 w-[80%] bg-white flex flex-col items-center gap-8 rounded-[10px]
                lg:w-[804px] lg:flex-row lg:justify-center
                ">
            <img
                className="
                    w-[175px] h-[175px] border-2 border-[#005CFF] rounded-full
                    lg:w-[220px] lg:h-[220px]
                    "
                src={user.avatar_url} 
                alt={`Imagem de Perfil de ${user.name}`} />
            <div className="
                flex flex-col text-center gap-4
                lg:text-start
                ">
                <p className="text-[#005CFF] text-[20px] font-bold">
                    {user.name}
                </p>
                <p className="text-[15px] font-light">
                    {user.bio}
                </p>
            </div>
        </div>
    )
}