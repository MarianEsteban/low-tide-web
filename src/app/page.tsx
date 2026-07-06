import Image from "next/image";

const airbnbHref =
  "https://www.airbnb.com.ar/rooms/1720756771533061117?unique_share_id=1eb7cf14-6a77-4d79-b93a-493d29b4adda&viralityEntryPoint=1&s=76";

const navItems = [
  { label: "La casa", href: "#casa" },
  { label: "Espacios", href: "#espacios" },
  { label: "Chapadmalal", href: "#chapadmalal" },
];

const facts = ["Chapadmalal", "Hasta 5 huéspedes", "2 dormitorios", "2 baños"];

const details = [
  {
    title: "Hasta 5 huéspedes",
    text: "Una escala cómoda para parejas, familias chicas o amigos que quieren compartir sin perder intimidad.",
  },
  {
    title: "2 dormitorios",
    text: "Un dormitorio matrimonial y un segundo cuarto flexible para descansar después de la playa.",
  },
  {
    title: "2 baños",
    text: "Practicidad para estadías largas, mañanas tranquilas y vueltas de mar sin apuro.",
  },
  {
    title: "Cocina equipada",
    text: "Todo lo necesario para desayunos lentos, cenas simples y sobremesas que terminan tarde.",
  },
];

const galleryImages = [
  {
    src: "/images/low-tide/living.jpg",
    alt: "Living luminoso de Low Tide Chapadmalal con madera y tonos naturales",
    title: "Living",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    src: "/images/low-tide/cocina.jpg",
    alt: "Cocina equipada de estilo cálido en Low Tide Chapadmalal",
    title: "Cocina",
    className: "md:col-span-5",
  },
  {
    src: "/images/low-tide/matrimonial.jpg",
    alt: "Dormitorio matrimonial de Low Tide Chapadmalal",
    title: "Dormitorio principal",
    className: "md:col-span-5",
  },
  {
    src: "/images/low-tide/habitacion-2.jpg",
    alt: "Segundo dormitorio de Low Tide Chapadmalal",
    title: "Segundo dormitorio",
    className: "md:col-span-6",
  },
  {
    src: "/images/low-tide/banio.jpg",
    alt: "Baño moderno de Low Tide Chapadmalal",
    title: "Baño",
    className: "md:col-span-6",
  },
];

const amenities = [
  "WiFi",
  "Aire acondicionado",
  "Salamandra",
  "Cocina equipada",
  "Parrilla",
  "Deck privado",
  "Estacionamiento",
  "Ducha exterior",
  "Guarda tablas",
  "Pet friendly",
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-olive-800/70">
      {children}
    </p>
  );
}

function CtaLink({ children, variant = "dark" }: { children: React.ReactNode; variant?: "dark" | "light" }) {
  return (
    <a
      href={airbnbHref}
      target="_blank"
      rel="noreferrer"
      className={
        variant === "dark"
          ? "inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_14px_30px_rgba(45,41,35,0.16)] transition hover:-translate-y-0.5 hover:bg-olive-900 sm:px-5"
          : "inline-flex items-center justify-center rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-charcoal shadow-[0_14px_30px_rgba(45,41,35,0.14)] transition hover:-translate-y-0.5 hover:bg-white sm:px-5"
      }
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-charcoal">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/5 bg-cream/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-2.5" aria-label="Low Tide Chapadmalal inicio">
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-charcoal/10 bg-white/70 shadow-[0_10px_24px_rgba(45,41,35,0.06)]">
              <Image
                src="/images/low-tide/logo.jpg"
                alt=""
                width={1024}
                height={1536}
                className="absolute left-1/2 top-[46%] h-[3.75rem] w-10 -translate-x-1/2 -translate-y-1/2 object-contain"
                priority
              />
            </span>
            <span className="font-serif text-xl tracking-[-0.03em] text-charcoal sm:text-[1.35rem]">Low Tide</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-charcoal/68 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-charcoal">
                {item.label}
              </a>
            ))}
          </nav>
          <CtaLink>Ver en Airbnb</CtaLink>
        </div>
      </header>

      <section id="inicio" className="relative flex min-h-screen items-end px-4 pb-4 pt-24 sm:px-6 sm:pb-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/low-tide/frente-costado.jpg"
            alt="Exterior de Low Tide Chapadmalal cerca del mar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[54%_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/22 to-cream/10" />
        </div>
        <div className="relative mx-auto grid w-full max-w-7xl gap-7 rounded-[1.75rem] border border-white/35 bg-cream/82 p-6 shadow-[0_28px_80px_rgba(45,41,35,0.24)] backdrop-blur-md md:grid-cols-[1.2fr_0.8fr] md:p-8 lg:p-9">
          <div>
            <SectionEyebrow>Casa boutique en la costa</SectionEyebrow>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-charcoal sm:text-6xl lg:text-7xl">
              Casa de diseño cerca del mar para bajar un cambio.
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="text-base leading-7 text-charcoal/72 sm:text-lg sm:leading-8">
              Un refugio moderno en Chapadmalal, pensado para descansar, compartir y vivir la costa con comodidad: luz natural, madera, deck, parrilla y el ritmo tranquilo del mar.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {facts.map((fact) => (
                <div key={fact} className="rounded-2xl border border-charcoal/10 bg-white/50 px-4 py-2.5 text-sm font-medium text-charcoal/80">
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="casa" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
        <div>
          <SectionEyebrow>La pausa justa</SectionEyebrow>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
            Diseño simple, mar cerca y descanso real
          </h2>
        </div>
        <div className="space-y-6 text-xl leading-9 text-charcoal/70">
          <p>
            Low Tide no intenta competir con el paisaje: lo acompaña. La casa combina materiales nobles, ambientes luminosos y una distribución pensada para que cada plan salga fácil, desde el café de la mañana hasta la parrilla al atardecer.
          </p>
          <p>
            Es una base serena para vivir Chapadmalal a otro ritmo: caminar a la playa, volver con arena en los pies, prender la salamandra si refresca y dejar que el día se acomode solo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-5 md:grid-cols-4">
          {details.map((detail) => (
            <article key={detail.title} className="rounded-[1.75rem] border border-charcoal/10 bg-sand/50 p-6 transition hover:-translate-y-1 hover:bg-sand/70">
              <h3 className="mb-4 font-serif text-2xl tracking-[-0.03em]">{detail.title}</h3>
              <p className="leading-7 text-charcoal/66">{detail.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="espacios" className="bg-white/45 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <SectionEyebrow>Adentro</SectionEyebrow>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Ambientes cálidos para quedarse un rato más.
            </h2>
          </div>
          <div className="grid auto-rows-[280px] gap-5 md:grid-cols-12">
            {galleryImages.map((image) => (
              <figure key={image.src} className={`group relative overflow-hidden rounded-[2rem] bg-sand ${image.className}`}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-cream/85 px-4 py-2 text-sm font-medium backdrop-blur">
                  {image.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem]">
          <Image src="/images/low-tide/deck.jpg" alt="Deck privado de Low Tide Chapadmalal" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="grid content-between gap-8 rounded-[2.5rem] bg-olive-900 p-8 text-cream sm:p-12">
          <div>
            <SectionEyebrow>Exterior</SectionEyebrow>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Deck, parrilla y tardes sin reloj.
            </h2>
          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-[1.75rem]">
            <Image src="/images/low-tide/parrilla.jpg" alt="Parrilla exterior para cocinar en Low Tide Chapadmalal" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <p className="text-lg leading-8 text-cream/76">
            Afuera está gran parte de la experiencia: desayunar al sol, leer después de la playa, cocinar algo simple y estirar la sobremesa cuando baja la luz.
          </p>
        </div>
      </section>

      <section id="chapadmalal" className="relative px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-charcoal text-cream lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <SectionEyebrow>Chapadmalal</SectionEyebrow>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Costa abierta, calma de pueblo y mar siempre cerca.
            </h2>
            <p className="mt-8 text-lg leading-8 text-cream/72">
              Chapa tiene esa mezcla difícil de encontrar: playas amplias, caminos de arena, cafés discretos y noches silenciosas. Low Tide es para entrar en esa frecuencia sin resignar comodidad.
            </p>
          </div>
          <div className="relative min-h-[420px]">
            <Image src="/images/low-tide/playa.jpg" alt="Playa de Chapadmalal cerca de Low Tide" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionEyebrow>Comodidades</SectionEyebrow>
            <h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">Lo esencial, bien resuelto.</h2>
          </div>
          <p className="max-w-md leading-7 text-charcoal/64">
            Detalles pensados para que la estadía fluya con naturalidad, tanto en verano como en escapadas de otoño e invierno.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {amenities.map((amenity) => (
            <div key={amenity} className="rounded-full border border-charcoal/10 bg-white/55 px-5 py-4 text-center text-sm font-semibold text-charcoal/75">
              {amenity}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <div className="mx-auto overflow-hidden rounded-[2.5rem] bg-sand p-8 text-center sm:p-12 lg:p-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-olive-800/70">Reservas</p>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
            Vení a bajar un cambio en Chapadmalal.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-charcoal/68">
            Elegí tus fechas, prepará algo rico para la parrilla y dejá que la costa haga el resto.
          </p>
          <div className="mt-10">
            <CtaLink>Consultá disponibilidad en Airbnb</CtaLink>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-charcoal/60 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Low Tide Chapadmalal</p>
        <p>Casa de diseño cerca del mar · Chapadmalal, Buenos Aires</p>
      </footer>
    </main>
  );
}
