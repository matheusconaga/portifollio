import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/Card/card";
import { CircleBadge } from "@/shared/ui/circle-badge";

import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/text-area";
import { Mail, MapPin, Smartphone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

export default function Contact() {
  const { t } = useAppTranslation();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    });
  };

  /* =========================
      EMAIL
  ========================== */

  const handleSendEmail = async () => {
    if (!form.nome || !form.email || !form.mensagem) {
      alert(`${t("contact.alert.required")}`);
      return;
    }

    try {
      setLoading(true);

      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.nome,
          from_email: form.email,
          subject: form.assunto || "Novo contato pelo portfólio",
          message: `
Nome: ${form.nome}
Email: ${form.email}
Assunto: ${form.assunto}

Mensagem:
${form.mensagem}
    `,
        },
      );

      alert(`${t("contact.alert.success")}`);

      resetForm();
    } catch (error) {
      console.error(error);
      alert(`${t("contact.alert.error")}`);
    } finally {
      setLoading(false);
    }
  };

  /* =========================
      WHATSAPP
  ========================== */

  const handleSendWhatsapp = () => {
    if (!form.nome || !form.mensagem) {
      alert(`${t("contact.alert.required")}`);
      return;
    }

    const text = `
🚀 *Novo contato pelo portfólio*

👤 *Nome:* ${form.nome}

📧 *Email:* ${form.email || "Não informado"}

📝 *Assunto:* ${form.assunto || "Não informado"}

💬 *Mensagem:*
${form.mensagem}
`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5586981451876?text=${encoded}`, "_blank");
  };

  return (
    <div
      className="
        relative
        w-full
        mx-auto
        rounded-2xl
        overflow-hidden
        bg-glass-light
        xl:bg-transparent
      "
    >
      {/* GLOWS */}
      <div
        className="
          absolute
          top-[-80px]
          left-[-80px]
          w-[220px]
          h-[220px]
          sm:top-[-120px]
          sm:left-[-120px]
          sm:w-[400px]
          sm:h-[400px]
          rounded-full
          bg-primary/20
          blur-[100px]
          sm:blur-[120px]
          opacity-70
          pointer-events-none
          z-0
        "
      />

      <div
        className="
          absolute
          bottom-[-60px]
          right-[-60px]
          w-[180px]
          h-[180px]
          sm:bottom-[-80px]
          sm:right-[-80px]
          sm:w-[420px]
          sm:h-[420px]
          rounded-full
          bg-cyan-400/10
          blur-[80px]
          sm:blur-[100px]
          opacity-70
          pointer-events-none
          z-0
        "
      />

      {/* MAIN CARD - Estilo removido no mobile, mantido no desktop */}
      <Card
        className="
          relative
          overflow-hidden
          bg-transparent
          border-none
          xl:bg-glass-light
          xl:border xl:border-white/10
        "
      >
        <div
          className="
            flex flex-col
            xl:flex-row
            items-stretch
            gap-8
            xl:gap-10
            p-2
            py-6
            sm:p-4
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex flex-col
              justify-between
              w-full
              xl:w-[50%]
              gap-8
              p-2
              sm:p-4
              xl:p-6
            "
          >
            <div className="flex flex-col gap-6 sm:gap-8">
              <div>
                <h1
                  className="
                    font-bold
                    leading-tight
                    text-3xl
                    sm:text-5xl
                    lg:text-6xl
                    xl:text-6xl
                  "
                >
                  {t("contact.title")}{" "}
                  <span className="text-primary">
                    {t("contact.title.highlight")}
                  </span>
                </h1>
              </div>

              <p
                className="
                  text-gray
                  text-sm
                  sm:text-base
                  md:text-xl
                  leading-relaxed
                "
              >
                {t("contact.description")}
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CircleBadge
                  variant="glass"
                  size="sm"
                  className="bg-glass-blue shrink-0"
                >
                  <Mail size={12} className="text-primary" />
                </CircleBadge>
                <span className="text-gray text-sm sm:text-base">
                  matheusphillip170@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CircleBadge
                  variant="glass"
                  size="sm"
                  className="bg-glass-blue shrink-0"
                >
                  <Smartphone size={12} className="text-primary" />
                </CircleBadge>
                <span className="text-gray text-sm sm:text-base">
                  +55 (86) 98145-1876
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CircleBadge
                  variant="glass"
                  size="sm"
                  className="bg-glass-blue shrink-0"
                >
                  <MapPin size={12} className="text-primary" />
                </CircleBadge>
                <span className="text-gray text-sm sm:text-base">
                  Parnaíba • PI
                </span>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-4">
              <CircleBadge variant="outline" clickable size="lg">
                <a href="https://github.com/matheusconaga" target="_blank">
                  <FaGithub size={20} className="text-primary" />
                </a>
              </CircleBadge>

              <CircleBadge variant="outline" clickable size="lg">
                <a href="https://linkedin.com/in/matheusconaga" target="_blank">
                  <FaLinkedin size={20} className="text-primary" />
                </a>
              </CircleBadge>

              <CircleBadge variant="outline" clickable size="lg">
                <a href="https://wa.me/5586981451876" target="_blank">
                  <FaWhatsapp size={20} className="text-primary" />
                </a>
              </CircleBadge>
            </div>
          </div>

          {/* FORM CARD - Mantido como card para destaque profissional */}
          <div
            className="
              w-full
              xl:w-[40%]
              flex
              items-center
              justify-center
            "
          >
            <Card
              className="
                w-full
                xl:max-w-[620px]
                bg-glass-light
                border border-white/10
                backdrop-blur-2xl
                p-4
                sm:p-6
                flex flex-col
                gap-4
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-4
                "
              >
                <Input
                  label={t("contact.form.name")}
                  name={t("contact.form.name")}
                  value={form.nome}
                  onChange={handleChange}
                  placeholder={t("contact.form.name.placeholder")}
                />

                <Input
                  label={t("contact.form.email")}
                  name={t("contact.form.email")}
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.form.email.placeholder")}
                />
              </div>

              <Input
                label={t("contact.form.subject")}
                name={t("contact.form.subject")}
                value={form.assunto}
                onChange={handleChange}
                placeholder={t("contact.form.subject.placeholder")}
              />

              <Textarea
                label={t("contact.form.message")}
                name={t("contact.form.message")}
                value={form.mensagem}
                onChange={handleChange}
                placeholder={t("contact.form.message.placeholder")}
              />

              <div className="flex flex-col gap-4 mt-2">
                <Button
                  variant="primary-xl"
                  leftIcon={<Send size={20} />}
                  className="w-full"
                  onClick={handleSendEmail}
                  disabled={loading}
                >
                  {loading ? t("contact.button.emailloading") : t("contact.button.email")}
                </Button>

                <Button
                  variant="outline-xl"
                  leftIcon={<FaWhatsapp size={20} />}
                  className="w-full"
                  onClick={handleSendWhatsapp}
                >
                  {t("contact.button.whatsapp")}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
