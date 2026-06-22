export const navigation = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Educación", href: "#formacion" },
  { label: "Certificados", href: "#certificados" },
];

const whatsappMessage = "Hola Candela, quisiera consultarte por un proyecto de interiorismo";

export const contact = {
  email: "kriegercandela@gmail.com",
  phone: "+54 9 2926 41-0306",
  location: "Coronel Suárez, Buenos Aires",
  whatsappUrl: `https://wa.me/5492926410306?text=${encodeURIComponent(whatsappMessage)}`,
  instagramUrl: "https://www.instagram.com/kc.interiorismo_/",
  linkedinUrl: "https://www.linkedin.com/in/candela-krieger-5706b63b7/",
};

export const experience = [
  {
    role: "El Garage Deco — Atención al cliente y Diseño de interiores",
    period: "2026 — Presente",
    description:
      "Asesoramiento integral en ventas y diseño de interiores. Desarrollo de proyectos de interiorismo personalizados. Diseño de espacios funcionales y estéticos mediante la selección de mobiliario. Elaboración de propuestas adaptadas a las necesidades del cliente.",
  },
  {
    role: "Diseñadora de Interiores — Proyectos Residenciales Independientes",
    period: "2025 — Presente",
    description:
      "Diseño y planificación de comedor residencial para cliente particular. Desarrollo de propuestas de diseño para tres dormitorios y un baño. Selección de materiales, mobiliario y paleta cromática. Elaboración de renders y propuestas visuales para presentación al cliente. Asesoramiento estético y funcional para optimización de los espacios.",
  },
  {
    role: "Profesora de Inglés — Cultura Inglesa",
    period: "2024",
    description:
      "Dictado de clases de inglés para estudiantes. Preparación de materiales y actividades didácticas.",
  },
];

function image(id, src, alt, width = 1920, height = 1080) {
  return { id, src, alt, width, height, type: "image" };
}

function document(id, src, alt) {
  return { id, src, alt, width: 16, height: 10, type: "document" };
}

function numberedImages({ id, directory, prefix, count, alt, extension = "jpg", width = 1920, height = 1080 }) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return image(`${id}-${number}`, `${directory}/${prefix}${number}.${extension}`, `${alt} ${index + 1}`, width, height);
  });
}

const technicalPlan = (id, directory, filename, alt, height = 5864) =>
  image(id, `${directory}/${filename}`, alt, 9999, height);

export const projects = [
  {
    number: "01",
    location: "Proyecto académico",
    title: "Trabajo Práctico 1",
    description: "Proyecto de interiorismo desarrollado mediante renders, planta, cortes y vistas exteriores.",
    services: ["Diseño de interiores", "Renders", "Planos técnicos"],
    reverse: false,
    cover: image("tp1-cover", "/projects/tp1/renders/Render 01.jpg", "Render principal del Trabajo Práctico 1"),
    galleries: {
      renders: [
        ...numberedImages({ id: "tp1-render", directory: "/projects/tp1/renders", prefix: "Render ", count: 5, alt: "Render del Trabajo Práctico 1" }),
        image("tp1-render-06", "/projects/tp1/renders/Render 06.jpg", "Render del Trabajo Práctico 1 6", 1350, 1350),
      ],
      planos: [
        technicalPlan("tp1-planta", "/projects/tp1/autocad", "Planta.jpg", "Planta del Trabajo Práctico 1"),
        ...["A", "B", "C"].map((letter) => technicalPlan(`tp1-corte-${letter.toLowerCase()}`, "/projects/tp1/autocad", `Corte ${letter}.jpg`, `Corte ${letter} del Trabajo Práctico 1`)),
        technicalPlan("tp1-exterior-01", "/projects/tp1/autocad", "Exterior 01.jpg", "Vista exterior 1 del Trabajo Práctico 1"),
        technicalPlan("tp1-exterior-02", "/projects/tp1/autocad", "Exterior 02.jpg", "Vista exterior 2 del Trabajo Práctico 1"),
      ],
      carpetasDiseno: [],
    },
  },
  {
    number: "02",
    location: "Proyecto residencial",
    title: "Trabajo Práctico 2",
    description: "Propuesta residencial completa con diseño de cocina, comedor, living, dormitorio, baño y balcón.",
    services: ["Diseño residencial", "Renders", "Planos técnicos"],
    reverse: true,
    cover: image("tp2-cover", "/projects/tp2/renders/Render living 01.jpg", "Render del living del Trabajo Práctico 2"),
    galleries: {
      renders: [
        image("tp2-balcon", "/projects/tp2/renders/Render balcón.jpg", "Render del balcón del Trabajo Práctico 2", 1920, 1440),
        image("tp2-bano-01", "/projects/tp2/renders/Render baño 01.jpg", "Render del baño 1 del Trabajo Práctico 2", 1439, 1080),
        image("tp2-bano-02", "/projects/tp2/renders/Render baño 02.jpg", "Render del baño 2 del Trabajo Práctico 2", 1439, 1080),
        ...["cocina-comedor", "cocina", "dormitorio", "living 01", "living 02"].map((name) => image(`tp2-${name.replaceAll(" ", "-")}`, `/projects/tp2/renders/Render ${name}.jpg`, `Render de ${name.replace("-", " y ")} del Trabajo Práctico 2`)),
      ],
      planos: [
        technicalPlan("tp2-planta", "/projects/tp2/autocad", "Planta.jpg", "Planta del Trabajo Práctico 2"),
        ...["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => technicalPlan(`tp2-corte-${letter.toLowerCase()}`, "/projects/tp2/autocad", `Corte ${letter}.jpg`, `Corte ${letter} del Trabajo Práctico 2`)),
      ],
      carpetasDiseno: [],
    },
  },
  {
    number: "03",
    location: "Consultorio",
    title: "Trabajo Práctico 3",
    description: "Diseño integral de un consultorio, documentado con doce renders y planos técnicos acotados.",
    services: ["Diseño comercial", "Renders", "Planos técnicos"],
    reverse: false,
    cover: image("tp3-cover", "/projects/tp3/renders/Render consultorio 01.jpg", "Render principal del consultorio"),
    galleries: {
      renders: [
        ...numberedImages({ id: "tp3-render", directory: "/projects/tp3/renders", prefix: "Render consultorio ", count: 4, alt: "Render del consultorio" }),
        ...numberedImages({ id: "tp3-render", directory: "/projects/tp3/renders", prefix: "Render consultorio ", count: 6, alt: "Render del consultorio", width: 1440 }).map((item, index) => ({ ...item, id: `tp3-render-${String(index + 5).padStart(2, "0")}`, src: `/projects/tp3/renders/Render consultorio ${String(index + 5).padStart(2, "0")}.jpg`, alt: `Render del consultorio ${index + 5}` })),
        image("tp3-render-11", "/projects/tp3/renders/Render consultorio 11.jpg", "Render del consultorio 11", 1080, 1080),
        image("tp3-render-12", "/projects/tp3/renders/Render consultorio 12.jpg", "Render del consultorio 12", 1080, 1080),
      ],
      planos: [
        ...["A", "B", "C", "D", "E"].map((letter) => technicalPlan(`tp3-corte-${letter.toLowerCase()}`, "/projects/tp3/autocad", `Cotas Corte ${letter}.jpg`, `Cotas del corte ${letter} del consultorio`, 5851)),
        technicalPlan("tp3-planta", "/projects/tp3/autocad", "Cotas PLANTA.jpg", "Planta acotada del consultorio", 5851),
      ],
      carpetasDiseno: [],
    },
  },
  {
    number: "04",
    location: "Project Manager",
    title: "Trabajo Práctico 5",
    description: "Proyecto de gestión y presentación de interiores con renders, documentación técnica y carpeta de diseño.",
    services: ["Gestión de proyecto", "Renders", "Presentación de diseño"],
    reverse: true,
    cover: image("tp5-cover", "/projects/tp5/renders/Render General.png", "Render general del Trabajo Práctico 5"),
    galleries: {
      renders: [
        image("tp5-comedor", "/projects/tp5/renders/Render Comedor.png", "Render del comedor del Trabajo Práctico 5"),
        image("tp5-general", "/projects/tp5/renders/Render General.png", "Render general del Trabajo Práctico 5"),
        image("tp5-living", "/projects/tp5/renders/Render Living.png", "Render del living del Trabajo Práctico 5"),
        image("tp5-project-manager", "/projects/tp5/renders/TP 5 Project Manager.png", "Presentación visual del Trabajo Práctico 5", 1440, 1080),
      ],
      planos: [
        technicalPlan("tp5-planta-01", "/projects/tp5/autocad", "Plano plata.jpg", "Plano de planta del Trabajo Práctico 5", 5863),
        technicalPlan("tp5-planta-02", "/projects/tp5/autocad", "Plano Planta 2.jpg", "Segundo plano de planta del Trabajo Práctico 5", 5863),
        technicalPlan("tp5-planta-fondo", "/projects/tp5/autocad", "Plano planta sin fondo.png", "Plano de planta sin fondo del Trabajo Práctico 5", 5863),
      ],
      carpetasDiseno: [document("tp5-presentacion", "/projects/tp5/design-folder/Presentación de Proyecto.pdf", "Presentación del Trabajo Práctico 5")],
    },
  },
  {
    number: "05",
    location: "Proyecto residencial",
    title: "Proyecto Roma",
    description: "Propuesta de interiorismo residencial con alternativas de render, axonometrías, medidas y presentación de diseño.",
    services: ["Diseño residencial", "Renders", "Presentación de diseño"],
    reverse: false,
    cover: image("roma-cover", "/projects/roma/renders/Render opcion nueva.png", "Render principal del Proyecto Roma"),
    galleries: {
      renders: [
        image("roma-render-01", "/projects/roma/renders/Render opcion nueva.png", "Render principal del Proyecto Roma"),
        ...["02", "03", "04"].map((number) => image(`roma-render-${number}`, `/projects/roma/renders/Render ${number} nueva opcion.png`, `Render ${Number(number)} del Proyecto Roma`)),
      ],
      planos: [
        technicalPlan("roma-axono-01", "/projects/roma/autocad", "Axono 01.png", "Axonometría 1 del Proyecto Roma"),
        technicalPlan("roma-axono-02", "/projects/roma/autocad", "Axono 02.png", "Axonometría 2 del Proyecto Roma"),
        ...["01", "02"].flatMap((number) => ["jpg", "png"].map((extension) => technicalPlan(`roma-medidas-${number}-${extension}`, "/projects/roma/autocad", `Medidas ${number}.${extension}`, `Plano de medidas ${Number(number)} del Proyecto Roma`))),
      ],
      carpetasDiseno: [document("roma-presentacion", "/projects/roma/design-folder/Presentación de diseño.pdf", "Presentación de diseño del Proyecto Roma")],
    },
  },
  {
    number: "06",
    location: "Proyecto integral",
    title: "Proyecto Final",
    description: "Proyecto residencial integral con desarrollo de cocina, comedor, living, dormitorios, baños, escritorio y hall.",
    services: ["Diseño integral", "Renders", "Planos técnicos"],
    reverse: true,
    cover: image("final-cover", "/projects/proyecto-final/renders/Render.jpg", "Render general del Proyecto Final"),
    galleries: {
      renders: [
        image("final-render", "/projects/proyecto-final/renders/Render.jpg", "Render general del Proyecto Final"),
        ...["baño 01", "baño 02", "baño 03"].map((name) => image(`final-${name.replace(" ", "-")}`, `/projects/proyecto-final/renders/Render ${name}.jpg`, `Render del ${name.replace(" 0", " ")} del Proyecto Final`, 1080, 1080)),
        ...["cocina 01", "cocina 02", "comedor", "dormitorio 01", "dormitorio 02", "escritorio", "hall", "living"].map((name) => image(`final-${name.replace(" ", "-")}`, `/projects/proyecto-final/renders/Render ${name}.jpg`, `Render de ${name.replace(" 0", " ")} del Proyecto Final`)),
      ],
      planos: [
        ...numberedImages({ id: "final-cotas", directory: "/projects/proyecto-final/autocad", prefix: "Cotas ", count: 7, alt: "Plano de cotas del Proyecto Final", width: 9999, height: 5863 }),
        technicalPlan("final-planta", "/projects/proyecto-final/autocad", "Plano planta.jpg", "Plano de planta del Proyecto Final", 5863),
      ],
      carpetasDiseno: [],
    },
  },
];

export const education = [
  {
    title: "Diseño de Interiores",
    detail: "Idílica Deco – UTN | Graduada | 2026",
  },
  {
    title: "Tec. en Psicopedagogía",
    detail: "ISFDyT N.° 160 | 2024-2025 | Sin finalizar",
  },
  {
    title: "Cultura Inglesa",
    detail: "Mar. 2012 – Nov. 2022 | Coronel Suárez, Buenos Aires",
  },
];

export const certificates = [
  {
    ...image("interiorismo-1", "/certificados/diseño-1.png", "Certificado de Diseño de Interiores I", 1054, 814),
    title: "Diseño de Interiores I",
    issuer: "Idílica Deco",
    year: "2025",
  },
  {
    ...image("interiorismo-2", "/certificados/diseño-avanzado.png", "Certificado de Diseño de Interiores II", 1054, 809),
    title: "Diseño de Interiores II",
    issuer: "Idílica Deco",
    year: "2025",
  },
  {
    ...image("project-manager", "/certificados/project-manager.png", "Certificado de Project Manager", 1120, 787),
    title: "Project Manager",
    issuer: "Idílica Deco",
    year: "2026",
  },
  {
    ...image("autocad", "/certificados/autocad.png", "Certificado del curso de AutoCAD", 1056, 811),
    title: "AutoCAD",
    issuer: "Idílica Deco",
    year: "Autogestivo",
  },
  {
    ...image("sketchup-vray", "/certificados/sketchup-vray.png", "Certificado del curso de SketchUp y V-Ray", 1053, 812),
    title: "SketchUp y V-Ray",
    issuer: "Idílica Deco",
    year: "Autogestivo",
  },
  {
    ...image("paisajismo", "/certificados/exteriores-paisajismo.png", "Certificado de Diseño de Espacios Exteriores y Paisajismo", 1055, 813),
    title: "Espacios Exteriores y Paisajismo",
    issuer: "Idílica Deco",
    year: "Autogestivo",
  },
  {
    ...image("ingles", "/certificados/kriegercandela-cultura-inglesa.jpeg", "Certificado de estudios de inglés", 1599, 1146),
    title: "Cultura Inglesa",
    issuer: "Cultura Inglesa",
    year: "2022",
  },
];

export const skills = [
  {
    title: "Habilidades técnicas",
    items: [
      "Modelado 3D en SketchUp",
      "Elaboración de planos técnicos en AutoCAD",
      "Desarrollo de renders y presentaciones visuales",
      "Creación de conceptos de diseño y moodboards",
      "Selección de materiales, colores y mobiliario",
      "Distribución funcional de espacios",
    ],
  },
  {
    title: "Software",
    items: [
      "SketchUp",
      "AutoCAD",
      "V-Ray",
      "Microsoft Office",
      "Trello",
      "Canva",
    ],
  },
  { title: "Idiomas", items: ["Inglés — Nivel avanzado"] },
];
