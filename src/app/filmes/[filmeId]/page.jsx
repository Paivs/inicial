import movies from "../../../../public/movies.json";
import Link from 'next/link'

export default function Filme({ params }) {
  const filme = params.filmeId;
  const movie = movies.find((m) => m.id === parseInt(filme));

  if (!movie) {
    return <p>Filme não encontrado.</p>;
  }

  return (
    <>
      <section className="container">
        <div className="flex flex-row gap-8 py-10 min-h-[92vh] items-center justify-center">
          <div className="flex flex-col">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-64 h-96 object-cover rounded mb-4"
            />
            <p className="text-lg">Ano: {movie.year}</p>
            <p className="text-lg">Gênero: {movie.genre}</p>
            <p className="text-lg">Diretor: {movie.director}</p>
          </div>

          <div className="">
            <h1 className="text-3xl text-wrap max-w-[26rem] font-bold mb-4">
              {movie.title}
            </h1>
            <p className="text-wrap text-justify max-w-[26rem]">
              {movie.sinopse}
            </p>
          </div>
        </div>

        <section className="container py-10 w-full items-center justify-center flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Veja também</h2>
          <div className="flex flex-row gap-8">
            {movies
              .slice(
                movies.indexOf(movie) + 1,
                movies.indexOf(movie) + 4
              )
              .map((m) => (
              <div key={m.id} className="flex flex-col">
                <Link href={"/filmes/" + m.id}>
                <img
                  src={m.poster}
                  alt={m.title}
                  className="w-40 h-60 object-cover rounded"
                  />
                <p className="text-md text-wrap max-w-[10rem] break-words">{m.title}</p>
                  </Link>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
