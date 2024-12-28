export default function Ajuda(){
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-[92vh] p-4">
            <h1 className="text-4xl font-bold">Ajuda</h1>
            <p className="text-lg mt-4">Se você tiver alguma dúvida ou precisar de ajuda em relação a qualquer coisa, por favor, não hesite em entrar em contato conosco.</p>
            <p className="text-lg mt-4">Para fazer isso, basta enviar um e-mail para <a href="mailto:contato@cinefriends.com.br" className="text-blue-500 underline">contato@cinefriends.com.br</a>.</p>
        </div>
        </>
    )
}