"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [expandMenu, setExpandMenu] = useState(false);
  const [busca, setBusca] = useState('')
  const router = useRouter();
  
  function handleToggleMenu() {
    setExpandMenu(!expandMenu);
  }

  function handleBusca(){
    router.push(`/busca?search=${encodeURIComponent(busca)}`);
  }

  return (
    <>
      <header className="bg-black flex flex-row items-center justify-between lg:justify-around p-4 text-white">
        <h1 className="text-3xl font-bold">
          {" "}
          <Link href={"/"}>CineFriends</Link>
        </h1>

        <ul className="hidden lg:flex flex-row gap-4 text-lg">
          <li className="hover:text-gray-400 cursor-pointer">
            {" "}
            <Link href={"/filmes"}>Filmes </Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            {" "}
            <Link href={"/ajuda"}>Ajuda </Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            {" "}
            <Link href={"/contato"}>Contato </Link>
          </li>
        </ul>

        <form className="hidden lg:flex gap-2 items-center" role="search">
          <input
            className="bg-gray-800 text-white px-3 py-2 rounded-xl border border-gray-700"
            type="search"
            placeholder="Buscar filmes ou séries"
            aria-label="Search"
            onChange={(event) => setBusca(event.target.value)}
          />
          <button
            className="text-black bg-yellow-400 px-4 py-2 rounded-xl font-semibold hover:bg-yellow-500"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              handleBusca(event);
            }}
          >
            Buscar
          </button>
        </form>

        <button
          onClick={handleToggleMenu}
          className="lg:hidden p-2 hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>
      <div
        className={`colapsado bg-black p-2 gap-2 ${
          expandMenu ? "flex flex-col" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg">
          <li className="hover:text-gray-400 cursor-pointer">
            {" "}
            <Link href={"/filmes"}>Filmes </Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            {" "}
            <Link href={"/ajuda"}>Ajuda </Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            {" "}
            <Link href={"/contato"}>Contato </Link>
          </li>
        </ul>

        <form className="flex flex-col gap-2" role="search">
          <input
            className="bg-gray-800 text-white px-3 py-2 rounded-xl border border-gray-700"
            type="search"
            placeholder="Buscar filmes ou séries"
            aria-label="Search"
            onChange={(event) => setBusca(event.target.value)}
/>
          <button
            className="text-black bg-yellow-400 px-4 py-2 rounded-xl font-semibold hover:bg-yellow-500"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              handleBusca(event);
            }}
          >
            Buscar
          </button>
        </form>
      </div>
    </>
  );
}
