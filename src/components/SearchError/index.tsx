export default function SearchError() {
    return (
        <div className="
            max-lg:w-[80%]
            py-4 px-4 bg-white flex justify-center rounded-[10px]
            lg:px-[106px]
            ">
            <p className="
                w-[90%] text-[#FF0000] text-[20px] text-center
                lg:w-[500px]
                ">
                Nenhum perfil foi encontrado com ese nome de usuário.
                Tente novamente
            </p>
        </div>
    )
}