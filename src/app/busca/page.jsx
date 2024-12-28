"use client";

import { useSearchParams } from "next/navigation";
import baseMovies from "../../../public/movies.json";
import { useEffect, useState } from "react";

export default function Busca() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search"); // Obtém o valor do parâmetro 'search'

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = baseMovies.filter((movie) => {
      const title = movie.title.toLowerCase();
      const searchLower = search.toLowerCase();
      return title.includes(searchLower);
    });
    setMovies(filteredMovies);
  }, [searchParams]);

  return (
    <div className="pb-2 min-h-[92vh]">
      <div className="flex flex-col py-2 items-center justify-center">
        <h2 className="text-2xl">
          Busca por "{search}" ({movies.length} resultado{movies.length > 1 ? "s" : ""})
        </h2>
      </div>

      <section className="container flex flex-col gap-2 mx-auto">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-row gap-2"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-[100px] h-full object-cover rounded-lg"
            />
            <div>
              <h2 className="text-xl text-black font-bold">{movie.title}</h2>
              <p className="text-sm text-gray-600">{movie.sinopse}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
