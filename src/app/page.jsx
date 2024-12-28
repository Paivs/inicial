import Link from "next/link";
import movies from "../../public/movies.json"

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <section
          className="flex flex-col items-center justify-center bg-cover bg-center py-20"
          style={{backgroundImage: "url('banner.png')"}}
        >
          <h1 className="text-4xl font-bold mb-4 shadow-lg">Bem-vindo ao CineFriends</h1>
          <p className="text-lg max-w-2xl text-center mb-6">
            Descubra os melhores filmes, séries e lançamentos em um só lugar.
            Junte-se a nós para explorar histórias incríveis!
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500">
            Comece Agora
          </button>
        </section>

        <section className="py-10 px-4 justify-center items-center flex flex-col">
          <h2 className="text-3xl font-bold text-center mb-8">
            Filmes em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {movies.slice(0, 4).map((m, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg flex flex-col items-center hover:scale-105 transform transition"
              >
                <Link href={`filmes/${index+1}`}>
                <img
                  src={`${
                    m.poster
                  }`}
                  alt={`${m.title}`}
                  className="w-full h-auto max-w-[280px] rounded-lg mb-4"

                />
                <h3 className="text-lg font-semibold">{m.title}</h3>
                  </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Sobre o CineFriends</h2>
            <p className="text-lg text-gray-300">
              No CineFriends, nosso objetivo é conectar você ao mundo do
              entretenimento. De clássicos a lançamentos, aqui você encontra
              tudo o que precisa para se divertir.
            </p>
          </div>
        </section>

        {/* Seção de Gêneros */}
        <section className="py-10 bg-gray-700">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Explore por Gênero
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Ação", icon: "🎬" },
                { name: "Comédia", icon: "😂" },
                { name: "Drama", icon: "🎭" },
                { name: "Ficção Científica", icon: "🚀" },
                { name: "Terror", icon: "👻" },
                { name: "Romance", icon: "💖" },
                { name: "Animação", icon: "🐾" },
                { name: "Documentário", icon: "🎥" },
              ].map((genre, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg hover:scale-105 transform transition"
                >
                  <span className="text-4xl mb-4">{genre.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {genre.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
