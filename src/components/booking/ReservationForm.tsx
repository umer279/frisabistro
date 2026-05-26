import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { contact } from "../../data/site";
import { Button } from "../ui/Button";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
  privacy: boolean;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
  privacy: false,
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = "Inserisci il nome";
  if (!data.lastName.trim()) errors.lastName = "Inserisci il cognome";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Email non valida";
  }
  if (!data.phone.trim()) errors.phone = "Inserisci un telefono";
  if (!data.date) errors.date = "Seleziona una data";
  if (!data.time) errors.time = "Seleziona un orario";
  if (!data.privacy) errors.privacy = "Accetta l'informativa privacy";
  return errors;
}

export function ReservationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      date: form.date,
      time: form.time,
      guests: form.guests,
      notes: form.notes,
      _subject: `Prenotazione Frisà Bistrò — ${form.firstName} ${form.lastName}`,
    };

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Invio non riuscito");
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Non siamo riusciti a inviare la richiesta. Chiama il ristorante o scrivici via email.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-olive/20 bg-olive/5 p-8 text-center"
        role="status"
      >
        <h3 className="font-display text-2xl font-bold text-olive">Richiesta inviata!</h3>
        <p className="mt-3 text-charcoal/80">
          Ti contatteremo al più presto per confermare la prenotazione.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Nuova prenotazione
        </Button>
      </div>
    );
  }

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-olive/30 ${
      errors[field] ? "border-terracotta" : "border-olive/20"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-sm font-semibold text-olive">
            Nome *
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className={inputClass("firstName")}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-sm text-terracotta">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1 block text-sm font-semibold text-olive">
            Cognome *
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className={inputClass("lastName")}
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-terracotta">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-olive">
            Email *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-sm text-terracotta">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-olive">
            Telefono *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-sm text-terracotta">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="date" className="mb-1 block text-sm font-semibold text-olive">
            Data *
          </label>
          <input
            id="date"
            type="date"
            value={form.date}
            min={new Date().toISOString().slice(0, 10)}
            onChange={(e) => update("date", e.target.value)}
            className={inputClass("date")}
            aria-invalid={!!errors.date}
          />
          {errors.date && <p className="mt-1 text-sm text-terracotta">{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="time" className="mb-1 block text-sm font-semibold text-olive">
            Orario *
          </label>
          <input
            id="time"
            type="time"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className={inputClass("time")}
            aria-invalid={!!errors.time}
          />
          {errors.time && <p className="mt-1 text-sm text-terracotta">{errors.time}</p>}
        </div>
        <div>
          <label htmlFor="guests" className="mb-1 block text-sm font-semibold text-olive">
            Ospiti
          </label>
          <select
            id="guests"
            value={form.guests}
            onChange={(e) => update("guests", e.target.value)}
            className={inputClass("guests")}
          >
            {Array.from({ length: 11 }, (_, i) => i + 2).map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? "ospite" : "ospiti"}
              </option>
            ))}
            <option value="12+">12+ ospiti</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-1 block text-sm font-semibold text-olive">
          Note (allergie, occasioni speciali)
        </label>
        <textarea
          id="notes"
          rows={3}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          className={inputClass("notes")}
          placeholder="Facoltativo"
        />
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.privacy}
            onChange={(e) => update("privacy", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-olive/30 text-olive focus:ring-olive"
            aria-invalid={!!errors.privacy}
          />
          <span className="text-sm text-charcoal/80">
            Ho letto e accetto l&apos;
            <Link to="/privacy" className="font-semibold text-terracotta underline">
              informativa sulla privacy
            </Link>{" "}
            *
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-1 text-sm text-terracotta">{errors.privacy}</p>
        )}
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-terracotta/10 px-4 py-3 text-sm text-terracotta" role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "loading"}>
        {status === "loading" ? "Invio in corso…" : "Invia richiesta"}
      </Button>

      <p className="text-center text-sm text-charcoal/60">
        Preferisci chiamare?{" "}
        <a href={contact.phoneHref} className="font-semibold text-terracotta hover:underline">
          {contact.phone}
        </a>{" "}
        ·{" "}
        <a href={contact.emailHref} className="font-semibold text-terracotta hover:underline">
          {contact.email}
        </a>
      </p>
    </form>
  );
}
