export default function contato(){
    return(
        <>
<div className="container mx-auto min-h-[92vh] items-center justify-center flex flex-col">
  <h2 className="text-2xl font-bold mb-4">Contato</h2>
  <p className="text-lg text-gray-600 mb-8">
    Caso precise entrar em contato conosco, por favor utilize o formulário abaixo.
    Nós responderemos o mais breve possível.
  </p>
  <form className="space-y-4 w-full">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Nome
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Seu nome"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Seu email"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        Mensagem
      </label>
      <textarea
        id="message"
        name="message"
        rows="4"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Sua mensagem"
      ></textarea>
    </div>
    <button
      type="submit"
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Enviar
    </button>
  </form>
</div>

        </>
    )
}