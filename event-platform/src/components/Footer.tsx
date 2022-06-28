import LogoFooter from "../assets/imgs/logo-rockeat.png";

export function Footer() {
    return (
        <footer className="w-full py-6 flex items-center justify-between border-t border-gray-500">
            <div className="w-[484px] flex items-center justify-between">
                <img src={LogoFooter} alt="logo da Rocketseat" />
                <p className="text-gray-300">
                    Rocketseat - Todos os direitos reservados
                </p>
            </div>
            <p className="text-gray-300">
                Políticas de privacidade
            </p>
        </footer>
    );
}