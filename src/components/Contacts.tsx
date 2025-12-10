import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="bg-neutral-700 border-neutral-600 w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Contacts</CardTitle>
        <CardDescription className="text-gray-300">
          I&apos;m always open to discussing{" "}
          <strong className="text-purple-400">new projects</strong>,{" "}
          <strong className="text-purple-400">opportunities in the tech world</strong>{" "}
          and more.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {status === "success" && <p className="text-green-500 mb-4">E-mail enviado com sucesso!</p>}
        {status === "error" && <p className="text-red-500 mb-4">Falha ao enviar o e-mail. Tente novamente.</p>}
        {status === "empty" && <p className="text-red-500 mb-4">Por favor, preencha todos os campos!</p>} 

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name <strong className="text-red-400">*</strong>
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="bg-neutral-800 border-neutral-600 text-white focus:border-purple-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              E-mail <strong className="text-red-400">*</strong>
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-neutral-800 border-neutral-600 text-white focus:border-purple-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message <strong className="text-red-400">*</strong>
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-neutral-800 border-neutral-600 text-white focus:border-purple-400 min-h-[100px] resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contacts;
