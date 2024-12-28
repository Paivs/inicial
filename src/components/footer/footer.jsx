export default function Footer() {
  return (
    <>
      <footer className="flex flex-col lg:flex-row items-center gap-2 justify-center lg:justify-evenly bg-blue-600 py-4 text-white">
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div>
            <p className="text-lg">Fique por dentro do mundo dos filmes</p>
            <h2 className="text-2xl font-bold">Assine nossa newsletter</h2>
            <button className="text-lg bg-blue-200 px-4 py-2 text-blue-600 rounded-xl mt-2">
              Inscrever-se
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-around w-[50%] px-4">
          <ul className="flex flex-col gap-2">
            <li>
              <h3 className="font-bold">Explorar</h3>
            </li>
            <li>
              <p>Top Filmes</p>
            </li>
            <li>
              <p>Próximos Lançamentos</p>
            </li>
            <li>
              <p>Gêneros</p>
            </li>
            <li>
              <p>Filmes Populares</p>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li>
              <h3 className="font-bold">Sobre</h3>
            </li>
            <li>
              <p>Quem Somos</p>
            </li>
            <li>
              <p>Equipe</p>
            </li>
            <li>
              <p>Contato</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li>
              <h3 className="font-bold">Conta</h3>
            </li>
            <li>
              <p>Minha Conta</p>
            </li>
            <li>
              <p>Favoritos</p>
            </li>
            <li>
              <p>Histórico</p>
            </li>
            <li>
              <p>Configurações</p>
            </li>
          </ul>
        </div>
      </footer>
      <div className="bg-blue-950 py-6 text-center">
        <p className="text-gray-400 text-sm">
          &copy; 2024 CineFriends. Todos os direitos reservados.
        </p>
      </div>
    </>
  );
}
