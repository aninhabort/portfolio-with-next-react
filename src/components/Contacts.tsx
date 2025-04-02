const Contacts = () => {
  return (
    <div className="flex flex-col bg-neutral-700 p-4 max-sm:px-6 rounded-lg shadow-md w-full max-sm:w-auto">
      <h1 className="font-bold text-2xl pb-2 text-white">Contacts</h1>

      <div className="p-2 text-white">
        <p className="text-sm">
          I'm always open to discussing{" "}
          <strong className="text-purple-400">new projects</strong>,{" "}
          <strong className="text-purple-400">opportunities in tech world</strong>{" "}
          and more.
        </p>

        <form className="mt-3">
          <div className="pt-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              className="rounded w-full bg-transparent border border-white mt-1 p-1 focus:outline-none focus:ring-1 focus:ring-purple-400"
              type="text"
              id="name"
            />
          </div>

          <div className="py-4">
            <label htmlFor="email" className="block text-sm font-medium">
              E-mail
            </label>
            <input
              className="rounded w-full bg-transparent border border-white mt-1 p-1 focus:outline-none focus:ring-1 focus:ring-purple-400"
              type="email"
              id="email"
            />
          </div>

          <div className="py-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              className="rounded w-full h-16 bg-transparent border border-white mt-1 p-1 focus:outline-none focus:ring-1 focus:ring-purple-400 resize-none"
              id="message"
            />
          </div>

          <button
            className="rounded-full px-4 py-1.5 bg-transparent border border-purple-600 mt-3 hover:bg-purple-600 transition-all duration-200 text-sm"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
