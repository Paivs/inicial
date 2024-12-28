import movies from "../../../public/movies.json";
export default function Filmes() {
  return (
    <>
      <section className="container py-2 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2"
              >
                <h2 className="text-xl text-black font-bold">{movie.title}</h2>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-gray-600">{movie.sinopse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
