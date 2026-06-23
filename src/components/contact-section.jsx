"use client";

import { useState } from "react";
import { contact } from "@/data/portfolio";

const formEndpoint = `https://formsubmit.co/ajax/${contact.email}`;

export function ContactSection() {
  const [submission, setSubmission] = useState({ status: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));
    formData._subject = `KC Interiorismo — ${formData.asunto}`;

    setSubmission({ status: "loading", message: "Enviando mensaje…" });

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("FormSubmit rechazó el envío.");
      }

      form.reset();
      setSubmission({ status: "success", message: "Tu mensaje fue enviado correctamente. Te responderé a la brevedad." });
    } catch {
      setSubmission({ status: "error", message: "No se pudo enviar el mensaje. Intenta nuevamente más tarde." });
    }
  }

  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow eyebrow--light">Hablemos</p>
          <h2 id="contact-title">¿Tienes un proyecto en mente?</h2>
          <address className="contact-details">
            <div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
            <div><span>WhatsApp</span><a href={contact.whatsappUrl} target="_blank" rel="noreferrer">{contact.phone}</a></div>
            <div><span>Ubicación</span><p>{contact.location}</p></div>
          </address>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="form-honeypot" aria-hidden="true" inert>
            <label htmlFor="company">Empresa</label>
            <input id="company" name="_honey" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="nombre" type="text" autoComplete="name" placeholder="Tu nombre completo" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" required />
          </div>
          <div className="field">
            <label htmlFor="subject">Asunto</label>
            <input id="subject" name="asunto" type="text" maxLength={120} placeholder="Motivo de tu consulta" required />
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="mensaje" rows="4" placeholder="Cuéntanos sobre tu espacio..." required />
          </div>
          <button type="submit" disabled={submission.status === "loading"}>{submission.status === "loading" ? "Enviando…" : "Enviar consulta"}</button>
          {submission.message ? <p className={`form-status form-status--${submission.status}`} role={submission.status === "error" ? "alert" : "status"}>{submission.message}</p> : null}
        </form>
      </div>
    </section>
  );
}
