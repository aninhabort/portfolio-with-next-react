import React, { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "empty">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("empty");
      return; 
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Falha ao enviar o e-mail');
      }

      const data = await res.json(); 

      if (data.message) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col bg-neutral-700 p-4 max-sm:px-6 rounded-lg shadow-md w-full max-sm:w-auto">
      <h1 className="font-bold text-2xl pb-2 text-white">Contacts</h1>

      <div className="p-2 text-white">
        <p className="text-sm pb-3">
          I&apos;m always open to discussing{" "}
          <strong className="text-purple-400">new projects</strong>,{" "}
          <strong className="text-purple-400">opportunities in the tech world</strong>{" "}
          and more.
        </p>

        {status === "success" && <p className="text-green-500">E-mail enviado com sucesso!</p>}
        {status === "error" && <p className="text-red-500">Falha ao enviar o e-mail. Tente novamente.</p>}
        {status === "empty" && <p className="text-red-500">Por favor, preencha todos os campos!</p>} 

        <form onSubmit={handleSubmit}>
          <div className="pt-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name <strong className="text-red-400">*</strong>
            </label>
            <input
              className="rounded w-full bg-transparent border border-white mt-1 p-1 focus:outline-none focus:ring-1 focus:ring-purple-400"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="py-4">
            <label htmlFor="email" className="block text-sm font-medium">
              E-mail <strong className="text-red-400">*</strong>
            </label>
            <input
              className="rounded w-full bg-transparent border border-white mt-1 p-1 focus:outline-none focus:ring-1 focus:ring-purple-400"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="py-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message <strong className="text-red-400">*</strong>
            </label>
            <textarea
              className="rounded w-full h-16 bg-transparent border border-white mt-1 p-1 focus:outline-none focus:ring-1 focus:ring-purple-400 resize-none"
              id="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            className="rounded-full px-4 py-1.5 bg-transparent border border-purple-600 mt-3 hover:bg-purple-600 transition-all duration-200 text-sm"
            type="submit"
            disabled={status === "loading"} // Desativa o botão enquanto a requisição está em andamento
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
