"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Shield,
  Users,
  BookOpen,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Heart,
  Award,
  TrendingUp,
  Languages,
  Menu,
  X,
  Youtube,
  Instagram,
  Facebook,
  MessageCircle,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Translations
const translations = {
  es: {
    // Header
    about: "Nosotros",
    programs: "Programas",
    impact: "Impacto",
    contact: "Contacto",
    donate: "Donar",
    videos: "Videos",
    book: "El Regalo del Rey",
    organizationName: "Misión Vallado",
    protectingGeneration: "Protegiendo a una generación",

    // Hero
    childProtection: "¿Quiénes somos?",
    heroTitle: "Protegemos a los niños y niñas del abuso sexual",
    heroDescription:
      "Educando y movilizando a padres, cuidadores, comunidades y actores sociales, promoviendo la prevención, detección temprana y atención integral para su desarrollo seguro.",
    makeDonation: "Hacer una Donación",
    learnMore: "Conocer Nuestro Trabajo",
    childrenProtected: "+2.172 niños protegidos",
    rating: "Calificación 5.0",

    // Stats
    protectedChildren: "Niños Protegidos",
    workshopsGiven: "Talleres Impartidos",
    yearsExperience: "Años de Experiencia",
    successRate: "Tasa de Éxito",

    // Social Media
    followUsSocialMedia: "Síguenos en Redes Sociales",
    joinCommunity:
      "Únete a nuestra comunidad y mantente informado sobre nuestras actividades y eventos",
    youtubeDescription: "Videos educativos y testimonios",
    instagramDescription: "Momentos y actividades",
    facebookDescription: "Noticias y eventos",
    tiktokDescription: "Videos cortos y mensajes",

    // Pillars
    fundamentalPillars: "Nuestros Pilares Fundamentales",
    missionVisionValues: "Misión, Visión y Valores",
    pillarsDescription:
      "Los cimientos que sostienen nuestro compromiso inquebrantable con la protección de la infancia y la construcción de un futuro más seguro",
    mission: "MISIÓN",
    vision: "VISIÓN",
    ourValues: "NUESTROS VALORES",
    valuesDescription:
      "Los principios que guían cada una de nuestras acciones y decisiones, formando la base de nuestro compromiso con la protección infantil.",
    passion: "Pasión",
    transparency: "Transparencia",
    respect: "Respeto",
    compassion: "Compasión",
    commitment: "Compromiso",
    solidarity: "Solidaridad",

    // About
    ourMission: "Nuestro Pilar",
    missionTitle: "Construyendo un mundo más seguro para la infancia",
    missionDescription:
      "Protegemos a niños y niñas del abuso sexual, educando y movilizando a padres, cuidadores, comunidades y actores sociales, promoviendo la prevención, detección temprana y atención integral para su desarrollo seguro.",
    visionTitle: "Nuestra Visión",
    visionDescription:
      "Un mundo donde los niños y niñas tengan una infancia feliz, sin traumas, ni secuelas que les impidan desarrollar todo su potencial y alcanzar sus sueños.",
    prevention: "Prevención",
    preventionDesc:
      "Implementamos programas educativos innovadores para prevenir el abuso sexual y crear entornos protectores en hogares, escuelas y comunidades.",
    protection: "Protección",
    protectionDesc:
      "Ofrecemos apoyo integral especializado: legal, psicológico y social a niños y niñas que han sido víctimas de abuso sexual.",
    education: "Educación",
    educationDesc:
      "Capacitamos a padres, educadores y cuidadores para identificar señales de alerta y actuar efectivamente ante situaciones de riesgo.",

    // Programs
    ourPrograms: "Nuestros Programas",
    programsTitle: "Programas especializados de protección infantil",
    formacionVallado: "Formación Vallado",
    formacionValladoDesc:
      "Talleres, charlas, seminarios, conferencias encaminadas a la sensibilización y formación de padres, comunidades, y diferentes actores sociales sobre temas de protección a la niñez.",
    escuadronVallado: "Escuadrón Vallado",
    escuadronValladoDesc:
      "Grupo de entidades públicas y privadas, que colaboran o han hecho una alianza estratégica con nuestra fundación para apoyar y promover nuestra misión dentro y fuera de su organización.",
    valladoParty: "Vallado Party",
    valladoPartyDesc:
      "Fiestas de cumpleaños para niños, donde además de juegos, sorpresas y diversión, los niños reciben un taller sobre prevención de abuso sexual y un mensaje del amor de Dios.",
    diversionVallado: "Diversión Vallado",
    diversionValladoDesc:
      "Materiales creativos para niños niñas: cuentos, juegos de mesa, historietas, comics, juegos en línea con los temas de nuestra fundación.",

    // Impact
    impactTitle: "Transformando vidas, construyendo futuros seguros",
    impactDescription:
      "Cada donación se convierte en protección real para un niño o niña vulnerable.",
    protectedFromAbuse: "Niñas y niños empoderados en prevención del abuso",
    trainedAdults: "Adultos capacitados como protectores",
    recoveryRate: "Tasa de recuperación exitosa",

    // Why We Do It
    whyWeDoIt: "¿Por qué lo hacemos?",
    whyWeDoItTitle: "La realidad del abuso sexual infantil",
    whyWeDoItDescription:
      "Cuando una niña o un niño es víctima de abuso sexual, experimenta dolor, sufrimiento y desconcierto, pues la mayoría de las veces no alcanza a comprender lo que está sucediendo. El agresor en la mayoría de los casos (85%), es alguien cercano o incluso parte de su familia, esto contribuye a que guarde silencio por miedo a que no le crean, lo culpen o se cumplan las amenazas del abusador.",
    whyWeDoItStats: [
      "A nivel mundial una de cada cuatro niñas y uno de cada cinco niños es víctima de abuso sexual.",
      "Solo uno de cada diez niños abusados cuenta lo sucedido y muchas veces lo hace años después de ocurrido el abuso",
      "Un menor que ha sido víctima de abuso sexual puede experimentar a lo largo de su vida trastornos alimenticios y del sueño, así como también baja autoestima, ansiedad, depresión, consumo de sustancias psicoactivas, conductas sexuales de riesgo, autolesiones e incluso intentos de suicidio.",
    ],
    painConfusion: "Dolor y Desconcierto",
    painConfusionDesc:
      "Cuando una niña o un niño es víctima de abuso sexual, experimenta dolor, sufrimiento y desconcierto, pues la mayoría de las veces no alcanza a comprender lo que está sucediendo.",
    closePerpetrators: "85% Agresores Cercanos",
    closePerpetratorsDesc:
      "El agresor en la mayoría de los casos (85%), es alguien cercano o incluso parte de su familia, esto contribuye a que guarde silencio por miedo.",
    oneInFourGirls: "1 de cada 4 Niñas",
    oneInFourGirlsDesc:
      "A nivel mundial una de cada cuatro niñas y uno de cada cinco niños es víctima de abuso sexual.",
    onlyOneInTen: "Solo 1 de cada 10",
    onlyOneInTenDesc:
      "Solo uno de cada diez niños abusados cuenta lo sucedido y muchas veces lo hace años después de ocurrido el abuso.",
    lifelongConsequences: "Secuelas de Por Vida",
    lifelongConsequencesDesc:
      "Un menor que ha sido víctima de abuso sexual puede experimentar trastornos alimenticios, baja autoestima, ansiedad, depresión y otros problemas.",
    yourHelpMakesDifference: "Tu Ayuda Hace la Diferencia",
    yourHelpMakesDifferenceDesc:
      "Con tu ayuda podemos hacer la diferencia en la vida de los niños y las niñas, ellos aprenderán a no callar lo que les daña.",
    joinMissionProtect: "Únete a nuestra misión de proteger la infancia",
    everyActionCounts:
      "Cada acción cuenta, cada donación importa, cada persona puede hacer la diferencia",

    // Videos
    videosTitle: "Nuestros Videos",
    videosDescription:
      "Conoce más sobre nuestro trabajo a través de estos videos",
    video1Title: "Prevención de Abuso Sexual Infantil",
    video1Description:
      "Video educativo sobre prevención de abuso sexual infantil",
    video2Title: "Vallado Party",
    video2Description:
      "Conoce más sobre nuestras fiestas de cumpleaños con propósito",
    video3Title: "Testimonio de Superación",
    video3Description: "Historia de esperanza y transformación",

    // Book
    bookTitle: "El Regalo del Rey",
    bookDescription:
      "El regalo del Rey es una historia educativa que acompaña a los niños en su proceso de reconocimiento y protección frente a situaciones de abuso. A través de su protagonista, la ovejita Campanita, los pequeños aprenderán la importancia de escuchar su voz interior, acudir a adultos de confianza y decir ¡NO! cuando alguien intenta hacerles daño.",
    bookFeatures: [
      "Lenguaje cercano y lleno de valores como la valentía y la confianza",
      "Promueve la conciencia sobre la prevención del abuso infantil",
      "Incluye un instructivo para padres",
      "Escrito por nuestra fundadora y presidenta, Glenys Otero",
    ],
    bookFeaturesTitle: "Características:",
    donateBook: "Donar un libro",

    // Support
    supportTitle: "¿Cómo puedes apoyarnos?",
    supportTitle2: "Yo me uno a Misión Vallado",
    supportDescription:
      "Con tu ayuda podemos hacer la diferencia en la vida de los niños y las niñas, ellos aprenderán a no callar lo que les daña y sus padres y la comunidad estarán más atentos a protegerlos.",
    supportWays: [
      "Visitando nuestras redes sociales y compartiendo nuestras publicaciones",
      "Haciendo una donación para nuestros proyectos y estrategias",
      "Si haces parte de una empresa u organización puedes unirte al Escuadrón Vallado",
      "Donando un libro EL REGALO DEL REY para un niño de bajos recursos",
      "Contratando nuestros servicios: Charlas, Talleres y Conferencias",
      "Ofreciéndote como voluntario",
    ],

    // Donation CTA
    donationTitle: "Tu donación salva vidas infantiles",
    donationDescription:
      "Con tu apoyo podemos seguir protegiendo a más niños y niñas del abuso sexual. Cada contribución, sin importar el monto, se convierte en protección real y esperanza renovada.",
    otherAmount: "Otro Monto",
    secureDonation: "Donación 100% segura",
    taxDeductible: "Deducible de impuestos (Aplica en Colombia)",
    totalTransparency: "Transparencia total",

    // Testimonials
    testimonials: "Testimonios",
    testimonialsTitle: "Historias de esperanza y transformación",
    testimonial1:
      "Muchas gracias a Misión Vallado por visitarnos en nuestra escuela rural y enseñarnos a proteger a nuestros niños, gracias por enseñarles a ellos a no quedarse callados ante el abuso.",
    testimonial1Author: "Elizabeth Q.",
    testimonial1Role: "Docente beneficiaria del programa de protección",
    testimonial2:
      "Como padre, los talleres de Misión Vallado me enseñaron a proteger mejor a mis hijos. Su trabajo profesional y dedicado es realmente invaluable para nuestra sociedad.",
    testimonial2Author: "Juan P.",
    testimonial2Role: "Padre participante en talleres de prevención",

    // Footer
    footerDescription:
      "Somos una Entidad sin Ánimo de Lucro, basada en principios cristianos, que promueve una cultura de cuidado y protección a la niñez, para resguardarlos del abuso sexual. Trabajamos enseñando a los padres cómo minimizar los riesgos y empoderando a los menores para que puedan identificar estas amenazas y denunciarlas a tiempo. ",
    links: "Enlaces",
    volunteering: "Voluntariado",
    resources: "Recursos",
    privacyPolicy: "Política de Privacidad",
    termsOfUse: "Términos de Uso",
    allRightsReserved: "Todos los derechos reservados.",
    phone: "+57 321 401 9379",
    email: "glenys.otero@misionvallado.org",
    location: "Santander, Colombia",

    // Donation Modal
    donationModalTitle: "Hacer una Donación",
    donationModalDescription:
      "Tu contribución ayuda a proteger a más niños del abuso sexual",
    selectAmount: "Selecciona un monto",
    customAmount: "Monto personalizado",
    enterAmount: "Ingresa el monto",
    proceedDonation: "Proceder con la Donación",
    close: "Cerrar",

    // WhatsApp Messages
    donationMessage:
      "Hola Misión Vallado, me gustaría hacer una donación para apoyar la protección de niños y niñas del abuso sexual. ¿Podrían brindarme más información sobre cómo puedo contribuir?",
    bookDonationMessage:
      "Hola Misión Vallado, me gustaría donar el libro 'El Regalo del Rey' para un niño de bajos recursos. ¿Podrían informarme sobre el proceso de donación del libro?",
    learnMoreMessage:
      "Hola Misión Vallado, me gustaría conocer más sobre su trabajo y programas de protección infantil. ¿Podrían brindarme más información sobre sus actividades?",

    // SEO
    pageTitle: "Misión Vallado - Protegiendo Niños del Abuso Sexual",
    pageDescription:
      "Fundación dedicada a proteger niños, niñas y adolescentes del abuso sexual en Colombia",

    // Alt texts
    heroAlt: "Hero - Misión Vallado",
    heroAltWithNumber: "Hero {number} - Misión Vallado",
    missionImageAlt: "Misión Vallado - Protección Infantil",
    visionImageAlt: "Misión Vallado - Visión de Futuro",
    bookImageAlt: "El Regalo del Rey - Misión Vallado",
    logoAlt: "Misión Vallado",
    programImageAlt: "Programa {number} - Misión Vallado",

    // Social Media Names
    youtubeName: "YouTube",
    instagramName: "Instagram",
    facebookName: "Facebook",
    tiktokName: "TikTok",

    // Hero title parts
    heroTitlePart1: "Nuestra Misión",
    heroTitlePart2: "PROTEGEMOS A",
    heroTitlePart3: "NIÑOS",
    heroTitlePart4: "Y",
    heroTitlePart5: "NIÑAS",
    heroTitlePart6: "DEL",
    heroTitlePart7: "ABUSO SEXUAL",
  },
  en: {
    // Header
    about: "About",
    programs: "Programs",
    impact: "Impact",
    contact: "Contact",
    donate: "Donate",
    videos: "Videos",
    book: "The King's Gift",
    organizationName: "Misión Vallado",
    protectingGeneration: "Protecting a generation",

    // Hero
    childProtection: "Who We Are?",
    heroTitle: "We protect children from sexual abuse",
    heroDescription:
      "We are a Non-Profit Organization, based on Christian principles, that promotes a culture of care and protection for children, to safeguard them from sexual abuse. We work by teaching parents how to minimize risks and empowering minors to identify these threats and report them in time.",
    makeDonation: "Make a Donation",
    learnMore: "Learn About Our Work",
    childrenProtected: "+2,172 children protected",
    rating: "5.0 Rating",

    // Stats
    protectedChildren: "Protected Children",
    workshopsGiven: "Workshops Given",
    yearsExperience: "Years of Experience",
    successRate: "Success Rate",

    // Social Media
    followUsSocialMedia: "Follow Us on Social Media",
    joinCommunity:
      "Join our community and stay informed about our activities and events",
    youtubeDescription: "Educational videos and testimonials",
    instagramDescription: "Moments and activities",
    facebookDescription: "News and events",
    tiktokDescription: "Short videos and messages",

    // Pillars
    fundamentalPillars: "Our Fundamental Pillars",
    missionVisionValues: "Mission, Vision & Values",
    pillarsDescription:
      "The foundations that support our unwavering commitment to child protection and building a safer future",
    mission: "MISSION",
    vision: "VISION",
    ourValues: "OUR VALUES",
    valuesDescription:
      "The principles that guide each of our actions and decisions, forming the foundation of our commitment to child protection.",
    passion: "Passion",
    transparency: "Transparency",
    respect: "Respect",
    compassion: "Compassion",
    commitment: "Commitment",
    solidarity: "Solidarity",

    // About
    ourMission: "Our Pillar",
    missionTitle: "Building a safer world for childhood",
    missionDescription:
      "We protect children from sexual abuse by educating and mobilizing parents, caregivers, communities, and social actors, promoting prevention, early detection, and comprehensive care for their safe development.",
    visionTitle: "Our Vision",
    visionDescription:
      "A world where children have a happy childhood, without traumas or sequelae that prevent them from developing their full potential and reaching their dreams.",
    prevention: "Prevention",
    preventionDesc:
      "We implement innovative educational programs to prevent sexual abuse and create protective environments in homes, schools and communities.",
    protection: "Protection",
    protectionDesc:
      "We offer comprehensive specialized support: legal, psychological and social to children and girls who have been victims of sexual abuse.",
    education: "Education",
    educationDesc:
      "We train parents, educators and caregivers to identify warning signs and act effectively in risk situations.",

    // Programs
    ourPrograms: "Our Programs",
    programsTitle: "Specialized child protection programs",
    formacionVallado: "Vallado Training",
    formacionValladoDesc:
      "Workshops, talks, seminars, conferences aimed at raising awareness and training parents, communities, and different social actors on child protection issues.",
    escuadronVallado: "Vallado Squadron",
    escuadronValladoDesc:
      "Group of public and private entities that collaborate or have made a strategic alliance with our foundation to support and promote our mission within and outside their organization.",
    valladoParty: "Vallado Party",
    valladoPartyDesc:
      "Birthday parties for children, where in addition to games, surprises and fun, children receive a workshop on sexual abuse prevention and a message of God's love.",
    diversionVallado: "Vallado Fun",
    diversionValladoDesc:
      "Creative materials for children: stories, board games, comics, online games with our foundation's themes.",

    // Impact
    impactTitle: "Transforming lives, building safe futures",
    impactDescription:
      "Every donation becomes real protection for a vulnerable child.",
    protectedFromAbuse: "Girls and boys empowered in abuse prevention",
    trainedAdults: "Adults trained as protectors",
    recoveryRate: "Successful recovery rate",

    // Why We Do It
    whyWeDoIt: "Why We Do It",
    whyWeDoItTitle: "The reality of child sexual abuse",
    whyWeDoItDescription:
      "When a child is a victim of sexual abuse, they experience pain, suffering, and confusion, as most of the time they cannot understand what is happening. The perpetrator in most cases (85%) is someone close to or even part of their family, which contributes to their silence due to fear of not being believed, being blamed, or the abuser's threats being carried out.",
    whyWeDoItStats: [
      "Worldwide, one in four girls and one in five boys is a victim of sexual abuse.",
      "Only one in ten abused children tells what happened, and often years after the abuse occurred",
      "A minor who has been a victim of sexual abuse may experience eating and sleep disorders throughout their life, as well as low self-esteem, anxiety, depression, psychoactive substance use, risky sexual behaviors, self-harm, and even suicide attempts.",
    ],
    painConfusion: "Pain and Confusion",
    painConfusionDesc:
      "When a child is a victim of sexual abuse, they experience pain, suffering, and confusion, as most of the time they cannot understand what is happening.",
    closePerpetrators: "85% Close Perpetrators",
    closePerpetratorsDesc:
      "The perpetrator in most cases (85%) is someone close to or even part of their family, which contributes to their silence due to fear.",
    oneInFourGirls: "1 in 4 Girls",
    oneInFourGirlsDesc:
      "Worldwide, one in four girls and one in five boys is a victim of sexual abuse.",
    onlyOneInTen: "Only 1 in 10",
    onlyOneInTenDesc:
      "Only one in ten abused children tells what happened, and often years after the abuse occurred.",
    lifelongConsequences: "Lifelong Consequences",
    lifelongConsequencesDesc:
      "A minor who has been a victim of sexual abuse may experience eating disorders, low self-esteem, anxiety, depression, and other problems.",
    yourHelpMakesDifference: "Your Help Makes a Difference",
    yourHelpMakesDifferenceDesc:
      "With your help, we can make a difference in the lives of children. They will learn not to remain silent about what harms them.",
    joinMissionProtect: "Join our mission to protect childhood",
    everyActionCounts:
      "Every action counts, every donation matters, every person can make a difference",

    // Videos
    videosTitle: "Our Videos",
    videosDescription: "Learn more about our work through these videos",
    video1Title: "Child Sexual Abuse Prevention",
    video1Description: "Educational video about child sexual abuse prevention",
    video2Title: "Vallado Party",
    video2Description: "Learn more about our birthday parties with purpose",
    video3Title: "Overcoming Testimony",
    video3Description: "Story of hope and transformation",

    // Book
    bookTitle: "The King's Gift",
    bookDescription:
      "The King's Gift is an educational story that accompanies children in their process of recognition and protection against abuse situations. Through its protagonist, the little sheep Campanita, children will learn the importance of listening to their inner voice, turning to trusted adults, and saying NO! when someone tries to harm them.",
    bookFeatures: [
      "Close language full of values such as courage and trust",
      "Promotes awareness about child abuse prevention",
      "Includes a guide for parents",
      "Written by our founder and president, Glenys Otero",
    ],
    bookFeaturesTitle: "Features:",
    donateBook: "Donate a book",

    // Support
    supportTitle: "How can you support us?",
    supportTitle2: "I join Misión Vallado",
    supportDescription:
      "With your help, we can make a difference in the lives of children. They will learn not to remain silent about what harms them, and their parents and community will be more attentive to protecting them.",
    supportWays: [
      "Visiting our social networks and sharing our posts",
      "Making a donation for our projects and strategies",
      "If you are part of a company or organization, you can join the Vallado Squadron",
      "Donating a book THE KING'S GIFT for a child in need",
      "Hiring our services: Talks, Workshops and Conferences",
      "Offering yourself as a volunteer",
    ],

    // Donation CTA
    donationTitle: "Your donation saves children's lives",
    donationDescription:
      "With your support we can continue protecting more children and girls from sexual abuse. Every contribution, regardless of the amount, becomes real protection and renewed hope.",
    otherAmount: "Other Amount",
    secureDonation: "100% secure donation",
    taxDeductible: "Tax deductible (Applies in Colombia)",
    totalTransparency: "Total transparency",

    // Testimonials
    testimonials: "Testimonials",
    testimonialsTitle: "Stories of hope and transformation",
    testimonial1:
      "Thanks to Misión Vallado I received the specialized psychological support I needed to overcome the trauma of abuse. Today I can say that I have a full and hopeful life.",
    testimonial1Author: "Ana M.",
    testimonial1Role: "Beneficiary of the protection program",
    testimonial2:
      "As a father, Misión Vallado's workshops taught me how to better protect my children. Their professional and dedicated work is truly invaluable to our society.",
    testimonial2Author: "Juan P.",
    testimonial2Role: "Father participating in prevention workshops",

    // Footer
    footerDescription:
      "Movement dedicated to the comprehensive protection of children and girls against sexual abuse and other forms of violence that violate their dignity and development.",
    links: "Links",
    volunteering: "Volunteering",
    resources: "Resources",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    allRightsReserved: "All rights reserved.",
    phone: "+57 321 401 9379",
    email: "glenys.otero@misionvallado.org",
    location: "Santander, Colombia",

    // Donation Modal
    donationModalTitle: "Make a Donation",
    donationModalDescription:
      "Your contribution helps protect more children from sexual abuse",
    selectAmount: "Select an amount",
    customAmount: "Custom amount",
    enterAmount: "Enter amount",
    proceedDonation: "Proceed with Donation",
    close: "Close",

    // WhatsApp Messages
    donationMessage:
      "Hello Misión Vallado, I would like to make a donation to support the protection of children from sexual abuse. Could you provide me with more information about how I can contribute?",
    bookDonationMessage:
      "Hello Misión Vallado, I would like to donate the book 'The King's Gift' for a child in need. Could you inform me about the book donation process?",
    learnMoreMessage:
      "Hello Misión Vallado, I would like to learn more about your work and child protection programs. Could you provide me with more information about your activities?",

    // SEO
    pageTitle: "Misión Vallado - Protecting Children from Sexual Abuse",
    pageDescription:
      "Foundation dedicated to protecting children and girls from sexual abuse in Colombia",

    // Alt texts
    heroAlt: "Hero - Misión Vallado",
    heroAltWithNumber: "Hero {number} - Misión Vallado",
    missionImageAlt: "Misión Vallado - Child Protection",
    visionImageAlt: "Misión Vallado - Vision of the Future",
    bookImageAlt: "The King's Gift - Misión Vallado",
    logoAlt: "Misión Vallado",
    programImageAlt: "Program {number} - Misión Vallado",

    // Social Media Names
    youtubeName: "YouTube",
    instagramName: "Instagram",
    facebookName: "Facebook",
    tiktokName: "TikTok",

    // Hero title parts - Corregido para que coincida con la estructura en español
    heroTitlePart1: "Our Mission",
    heroTitlePart2: "WE PROTECT",
    heroTitlePart3: "CHILDREN",
    heroTitlePart4: "AND",
    heroTitlePart5: "GIRLS",
    heroTitlePart6: "FROM",
    heroTitlePart7: "SEXUAL ABUSE",
  },
};

export default function Component() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImagenIndex2, setCurrentImagenIndex2] = useState(0);
  const [currentBookImageIndex, setCurrentBookImageIndex] = useState(0);
  const [isHoveringProgram, setIsHoveringProgram] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    protectedChildren: 0,
    trainedAdults: 0,
    recoveryRate: 0,
  });
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [copiedText, setCopiedText] = useState("");

  const programImages = [
    "/imagen9.jpeg", // Formación Vallado - Imagen de programa general
    "/imagen14.jpeg", // Escuadrón Vallado - Muestra el impacto en los niños
    "/imagen7.jpeg", // Vallado Party - Imagen de niño feliz
    "/imagen5.jpeg", // Diversión Vallado - Imagen de actividades
    "/imagen10.jpeg", // Diversión Vallado - Imagen de actividades
    "/imagen12.jpeg", // Diversión Vallado - Imagen de actividades
    "/imagen13.jpeg", // Diversión Vallado - Imagen de actividades
    "/imagen14.jpeg", // Diversión Vallado - Imagen de actividades
  ];

  const heroImages = [
    "/imagenPrincipal.jpeg", // Hero principal - Niños felices,
    "/imagenPrincipal2.jpeg", // Hero principal - Niños felices,
    "/imagen6.jpeg", // Hero principal - Niños felices
    "/imagen7.jpeg", // Hero principal - Niños felices
    "/imagen8.jpeg", // Hero principal - Niños felices
  ];

  const bookImages = [
    "/book_1.jpeg",
    "/book_2.jpeg",
    "/book_3.jpeg",
    "/book_4.jpeg",
    "/book_5.jpeg",
    "/imagen16.jpeg", // Niños con el libro
    "/book2.png", // Imagen alternativa del libro
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // Solo crear el intervalo si no estamos hover sobre programas
    if (!isHoveringProgram) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % heroImages.length;
          return nextIndex;
        });
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [heroImages.length, isHoveringProgram]);

  useEffect(() => {
    let interval2: NodeJS.Timeout;
    if (!isHoveringProgram) {
      interval2 = setInterval(() => {
        setCurrentImagenIndex2((prevIndex) => {
          const nextIndex = (prevIndex + 1) % programImages.length;
          return nextIndex;
        });
      }, 3000);
    }
    return () => {
      if (interval2) {
        clearInterval(interval2);
      }
    };
  }, [programImages.length, isHoveringProgram]);

  useEffect(() => {
    const interval3: NodeJS.Timeout = setInterval(() => {
      setCurrentBookImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % bookImages.length;
        return nextIndex;
      });
    }, 3000);
    return () => {
      clearInterval(interval3);
    };
  }, [bookImages.length]);

  // Animate numbers when impact section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate protected children (2,172)
            let current = 0;
            const target = 2172;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setAnimatedNumbers((prev) => ({
                ...prev,
                protectedChildren: Math.floor(current),
              }));
            }, 30);

            // Animate trained adults (5,361)
            let currentAdults = 0;
            const targetAdults = 5361;
            const incrementAdults = targetAdults / 50;
            const timerAdults = setInterval(() => {
              currentAdults += incrementAdults;
              if (currentAdults >= targetAdults) {
                currentAdults = targetAdults;
                clearInterval(timerAdults);
              }
              setAnimatedNumbers((prev) => ({
                ...prev,
                trainedAdults: Math.floor(currentAdults),
              }));
            }, 30);

            // Animate recovery rate (95)
            let currentRate = 0;
            const targetRate = 95;
            const incrementRate = targetRate / 30;
            const timerRate = setInterval(() => {
              currentRate += incrementRate;
              if (currentRate >= targetRate) {
                currentRate = targetRate;
                clearInterval(timerRate);
              }
              setAnimatedNumbers((prev) => ({
                ...prev,
                recoveryRate: Math.floor(currentRate),
              }));
            }, 50);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const impactSection = document.getElementById("impacto");
    if (impactSection) {
      observer.observe(impactSection);
    }

    return () => {
      if (impactSection) {
        observer.unobserve(impactSection);
      }
    };
  }, []);

  const t = translations[language];

  // Function to format numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const whatsappNumber = "573214019379"; // Número de WhatsApp en formato internacional

  const handleDonationClick = () => {
    const message = encodeURIComponent(t.donationMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleBookDonationClick = () => {
    const message = encodeURIComponent(t.bookDonationMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleLearnMoreClick = () => {
    window.open("https://www.youtube.com/@misionvallado6894", "_blank");
  };

  // WhatsApp links para donar y comprar libro
  const handleDonateBook = () => {
    const message = encodeURIComponent(
      language === "es"
        ? "Hola, quiero donar el libro 'El regalo del Rey' a un niño de bajos recursos. ¿Me pueden dar más información?"
        : "Hi, I want to donate the book 'The King's Gift' to a child in need. Can you give me more information?"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };
  const handleBuyBook = () => {
    const message = encodeURIComponent(
      language === "es"
        ? "Hola, quiero comprar el libro 'El regalo del Rey'. ¿Me pueden dar más información?"
        : "Hi, I want to buy the book 'The King's Gift'. Can you give me more information?"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    }
  };

  const youtubeVideos = [
    {
      id: "BDiiEmp6_70",
      title: t.video1Title,
      description: t.video1Description,
    },
    {
      id: "TrgW7OtxJBs",
      title: t.video2Title,
      description: t.video2Description,
    },
    {
      id: "1Rd1U-VngL8",
      title: t.video3Title,
      description: t.video3Description,
    },
  ];

  return (
    <>
      {/* Modal de bienvenida */}
      <Dialog open={showWelcomeModal} onOpenChange={setShowWelcomeModal}>
        <DialogContent className="w-[95vw] md:min-w-4xl p-0 md:overflow-hidden overflow-scroll flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[600px]">
          <DialogTitle className="sr-only">
            {language === "es"
              ? "¡Regala una historia que salva vidas!"
              : "Give a story that saves lives!"}
          </DialogTitle>
          {/* Lado izquierdo: texto */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center bg-white order-2 lg:order-1">
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900">
              {language === "es"
                ? "¡Regala una historia que salva vidas!"
                : "Give a story that saves lives!"}
            </h2>
            <p className="text-base lg:text-lg font-semibold text-red-600 mb-2">
              {language === "es" ? '"El regalo del Rey"' : '"The King\'s Gift"'}
            </p>
            <p className="text-sm lg:text-base text-gray-700 mb-3 lg:mb-4 leading-relaxed">
              {language === "es"
                ? "es una historia educativa que fomenta la valentía y la confianza. A través de su protagonista, los niños aprenderán a reconocer y prevenir el abuso sexual.\nIncluye un instructivo especial para padres."
                : "is an educational story that fosters courage and confidence. Through its protagonist, children will learn to recognize and prevent sexual abuse.\nIncludes a special guide for parents."}
            </p>
            <p className="font-semibold text-gray-900 mb-4 lg:mb-6 text-sm lg:text-base">
              {language === "es"
                ? "Dona un libro a un niño de bajos recursos"
                : "Donate a book to a child in need"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button
                className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm lg:text-base py-2 lg:py-3"
                onClick={handleDonateBook}
              >
                {language === "es" ? "Donar" : "Donate"}
              </Button>
              <Button
                variant="outline"
                className="font-bold text-sm lg:text-base py-2 lg:py-3"
                onClick={handleBuyBook}
              >
                {language === "es" ? "Comprar" : "Buy"}
              </Button>
            </div>
          </div>
          {/* Lado derecho: imagen */}
          <div className="flex-1 bg-gray-50 relative h-48 lg:h-auto order-1 lg:order-2">
            <Image
              src="/book2.png"
              alt={language === "es" ? "El regalo del Rey" : "The King's Gift"}
              fill
              className="object-cover"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex flex-col min-h-screen bg-white">
        {/* SEO Meta Tags would go in head */}
        <head>
          <title>{t.pageTitle}</title>
          <meta name="description" content={t.pageDescription} />
          <link rel="alternate" hrefLang="es" href="/es" />
          <link rel="alternate" hrefLang="en" href="/en" />
          <link rel="canonical" href={`/${language}`} />
        </head>

        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container flex h-16 items-center px-4 lg:px-6 mx-auto">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/mision_vallado_logo.png"
                  alt="Misión Vallado"
                  width={50}
                  height={50}
                  className="rounded-full"
                  quality={100}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  Misión Vallado
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">
                  {t.protectingGeneration}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex ml-auto items-center space-x-6 text-sm font-medium">
              <Link
                href="#nosotros"
                className="transition-colors hover:text-red-500"
              >
                {t.about}
              </Link>
              <Link
                href="#programas"
                className="transition-colors hover:text-red-500"
              >
                {t.programs}
              </Link>
              <Link
                href="#impacto"
                className="transition-colors hover:text-red-500"
              >
                {t.impact}
              </Link>
              <Link
                href="#contacto"
                className="transition-colors hover:text-red-500"
              >
                {t.contact}
              </Link>
              <Link
                href="#book"
                className="relative group transition-all hover:text-red-500 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-50 to-gray-50 border border-red-200 hover:border-red-300 hover:shadow-lg hover:shadow-red-100"
              >
                <span className="relative z-10 flex items-center">
                  <BookOpen className="w-4 h-4 mr-1.5 text-red-500" />
                  {t.book}
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-600/0 group-hover:from-red-500/5 group-hover:to-red-600/5 rounded-full transition-all duration-300"></span>
              </Link>

              {/* Language Selector */}
              <Select
                value={language}
                onValueChange={(value: "es" | "en") => setLanguage(value)}
              >
                <SelectTrigger className="w-25 h-8">
                  <Languages className="h-4 w-4 mr-1" />
                  <SelectValue placeholder={language === "es" ? "ES" : "EN"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">ES</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectContent>
              </Select>

              <Button
                size="sm"
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={handleDonationClick}
              >
                {t.donate}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-auto p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden ${
              mobileMenuOpen ? "block" : "hidden"
            } border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60`}
          >
            <nav className="container px-4 py-4 mx-auto space-y-4">
              <Link
                href="#nosotros"
                className="block text-sm font-medium transition-colors hover:text-red-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.about}
              </Link>
              <Link
                href="#programas"
                className="block text-sm font-medium transition-colors hover:text-red-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.programs}
              </Link>
              <Link
                href="#impacto"
                className="block text-sm font-medium transition-colors hover:text-red-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.impact}
              </Link>
              <Link
                href="#contacto"
                className="block text-sm font-medium transition-colors hover:text-red-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.contact}
              </Link>
              <Link
                href="#book"
                className="block text-sm font-medium transition-colors hover:text-red-500 relative group px-3 py-2 rounded-lg bg-gradient-to-r from-red-50 to-gray-50 border border-red-200 hover:border-red-300 hover:shadow-lg hover:shadow-red-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10 flex items-center">
                  <BookOpen className="w-4 h-4 mr-1.5 text-red-500" />
                  {t.book}
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-600/0 group-hover:from-red-500/5 group-hover:to-red-600/5 rounded-lg transition-all duration-300"></span>
              </Link>

              <div className="flex items-center space-x-4 pt-2">
                <Select
                  value={language}
                  onValueChange={(value: "es" | "en") => setLanguage(value)}
                >
                  <SelectTrigger className="w-25 h-8">
                    <Languages className="h-4 w-4 mr-1" />
                    <SelectValue
                      placeholder={language === "es" ? "ES" : "EN"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">ES</SelectItem>
                    <SelectItem value="en">EN</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  size="sm"
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={handleDonationClick}
                >
                  {t.donate}
                </Button>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gray-50">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
            <div className="container px-4 py-10 md:py-16 lg:py-16 mx-auto">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="flex flex-col justify-center space-y-8">
                  <div className="space-y-6">
                    <Badge
                      variant="outline"
                      className="w-fit border-red-200 text-red-600"
                    >
                      <Shield className="w-3 h-3 mr-1" />
                      {t.childProtection}
                    </Badge>
                    <span className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl block mb-4">
                      {t.heroTitlePart1}
                    </span>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                      {language === "es" ? (
                        <>
                          <span className="text-gray-900">
                            {t.heroTitlePart2}{" "}
                          </span>
                          <span className="text-red-500">
                            {t.heroTitlePart3}
                          </span>{" "}
                          <span className="text-gray-900">
                            {t.heroTitlePart4}
                          </span>{" "}
                          <span className="text-red-500">
                            {t.heroTitlePart5}
                          </span>{" "}
                          <span className="text-gray-900">
                            {t.heroTitlePart6}
                          </span>{" "}
                          <span className="text-gray-900">
                            {t.heroTitlePart7}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-red-500">
                            {t.heroTitlePart2}
                          </span>{" "}
                          <span className="text-gray-900">
                            {t.heroTitlePart3}
                          </span>{" "}
                          <span className="text-red-500">
                            {t.heroTitlePart4}
                          </span>{" "}
                          <span className="text-gray-900">
                            {t.heroTitlePart5}
                          </span>
                        </>
                      )}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                      {t.heroDescription}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transition-all"
                      onClick={handleDonationClick}
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      {t.makeDonation}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-gray-300 hover:bg-gray-50"
                      onClick={handleLearnMoreClick}
                    >
                      {t.learnMore}
                    </Button>
                  </div>
                  <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-8 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-red-600 border-2 border-white"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {t.childrenProtected}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {t.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative z-10 overflow-hidden rounded-2xl">
                    <div className="relative w-full sm:min-w-full md:min-w-[500px] lg:min-w-[600px] h-[280px] sm:h-[300px] md:h-[500px] lg:h-[600px]">
                      {/* Imagen de respaldo siempre visible */}
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={heroImages[0]}
                          fill
                          alt={t.heroAlt}
                          className="rounded-2xl shadow-2xl object-cover w-full h-full"
                          sizes="(max-width: 320px) 280px, (max-width: 640px) 300px, (max-width: 768px) 500px, 600px"
                          priority
                        />
                      </div>

                      {heroImages.map((src, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndex
                              ? "opacity-100 z-10"
                              : "opacity-0 z-0"
                          }`}
                        >
                          <Image
                            src={src}
                            fill
                            alt={t.heroAltWithNumber.replace(
                              "{number}",
                              (index + 1).toString()
                            )}
                            className="rounded-2xl shadow-2xl object-cover w-full h-full"
                            sizes="(max-width: 320px) 280px, (max-width: 640px) 300px, (max-width: 768px) 500px, 600px"
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-red-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
                  <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-r from-red-600 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" /> */}
                </div>
              </div>
            </div>
          </section>

          {/* Why We Do It Section */}
          <section id="why-we-do-it" className="py-20 bg-white">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <Badge
                  variant="outline"
                  className="mb-4 border-red-200 text-red-600"
                >
                  {t.whyWeDoIt}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t.whyWeDoItTitle}
                </h2>
                {/* <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  {t.whyWeDoItDescription}
                </p> */}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {/* Estadística 1 */}
                <Card className="border-0 shadow-lg bg-red-500 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {t.painConfusion}
                    </h3>
                    <p className="text-white leading-relaxed text-lg opacity-90">
                      {t.painConfusionDesc}
                    </p>
                  </CardContent>
                </Card>

                {/* Estadística 2 */}
                <Card className="border-0 shadow-lg bg-red-500 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {t.closePerpetrators}
                    </h3>
                    <p className="text-white leading-relaxed text-lg opacity-90">
                      {t.closePerpetratorsDesc}
                    </p>
                  </CardContent>
                </Card>

                {/* Estadística 3 */}
                <Card className="border-0 shadow-lg bg-red-500 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {t.oneInFourGirls}
                    </h3>
                    <p className="text-white leading-relaxed text-lg opacity-90">
                      {t.oneInFourGirlsDesc}
                    </p>
                  </CardContent>
                </Card>

                {/* Estadística 4 */}
                <Card className="border-0 shadow-lg bg-red-500 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {t.onlyOneInTen}
                    </h3>
                    <p className="text-white leading-relaxed text-lg opacity-90">
                      {t.onlyOneInTenDesc}
                    </p>
                  </CardContent>
                </Card>

                {/* Estadística 5 */}
                <Card className="border-0 shadow-lg bg-red-500 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {t.lifelongConsequences}
                    </h3>
                    <p className="text-white leading-relaxed text-lg opacity-90">
                      {t.lifelongConsequencesDesc}
                    </p>
                  </CardContent>
                </Card>

                {/* Estadística 6 */}
                <Card className="border-0 shadow-lg bg-red-500 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {t.yourHelpMakesDifference}
                    </h3>
                    <p className="text-white leading-relaxed text-lg opacity-90">
                      {t.yourHelpMakesDifferenceDesc}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Vision */}
              <div className="space-y-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t.visionTitle}
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="max-w-xl mx-auto text-center mb-16">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t.visionDescription}
                    </p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/MISION_2.jpeg"
                      alt={t.visionImageAlt}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-16 text-center container px-10 mx-auto">
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">
                    {t.joinMissionProtect}
                  </h4>
                  <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                    {t.everyActionCounts}
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-red-500 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    onClick={handleDonationClick}
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    {t.makeDonation}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <section
            id="programas"
            className="py-20 bg-gray-50 border-t border-gray-200"
          >
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge
                  variant="outline"
                  className="mb-4 border-red-200 text-red-600"
                >
                  {t.ourPrograms}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t.programsTitle}
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div
                  className="space-y-8"
                  onMouseEnter={() => setIsHoveringProgram(true)}
                  onMouseLeave={() => setIsHoveringProgram(false)}
                >
                  <div
                    className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg cursor-pointer"
                    onMouseEnter={() => setCurrentImageIndex(0)}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {t.formacionVallado}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {t.formacionValladoDesc}
                      </p>
                    </div>
                  </div>

                  <div
                    className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg cursor-pointer"
                    onMouseEnter={() => setCurrentImageIndex(1)}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {t.escuadronVallado}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {t.escuadronValladoDesc}
                      </p>
                    </div>
                  </div>

                  <div
                    className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg cursor-pointer"
                    onMouseEnter={() => setCurrentImageIndex(2)}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {t.valladoParty}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {t.valladoPartyDesc}
                      </p>
                    </div>
                  </div>

                  <div
                    className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg cursor-pointer"
                    onMouseEnter={() => setCurrentImageIndex(3)}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {t.diversionVallado}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {t.diversionValladoDesc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                    {programImages.map((src, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === currentImagenIndex2
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={t.programImageAlt.replace(
                            "{number}",
                            (index + 1).toString()
                          )}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section id="impacto" className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge
                  variant="outline"
                  className="mb-4 border-red-200 text-red-600"
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {t.impact}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t.impactTitle}
                </h2>
                <p className="text-xl text-gray-600">{t.impactDescription}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-red-500" />
                    </div>
                    <div className="text-3xl font-bold text-red-500 mb-2">
                      {formatNumber(animatedNumbers.protectedChildren)}+
                    </div>
                    <div className="text-gray-600 font-medium">
                      {t.protectedFromAbuse}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-red-500" />
                    </div>
                    <div className="text-3xl font-bold text-red-500 mb-2">
                      {formatNumber(animatedNumbers.trainedAdults)}+
                    </div>
                    <div className="text-gray-600 font-medium">
                      {t.trainedAdults}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Book Section */}
          <section id="book" className="py-20 bg-white">
            <div className="container px-4 mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Badge
                      variant="outline"
                      className="mb-4 border-red-200 text-red-600"
                    >
                      <BookOpen className="w-3 h-3 mr-1" />
                      {t.book}
                    </Badge>
                    <h2 className="text-4xl font-bold text-gray-900">
                      {t.bookTitle}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {t.bookDescription}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t.bookFeaturesTitle}
                    </h3>
                    <ul className="space-y-2">
                      {t.bookFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    size="lg"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={handleBookDonationClick}
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    {t.donateBook}
                  </Button>
                </div>

                <div className="relative">
                  <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-xl">
                    {bookImages.map((src, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === currentBookImageIndex
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={t.bookImageAlt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Videos Section */}
          <section id="videos" className="py-20 bg-gray-50 border-y">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge
                  variant="outline"
                  className="mb-4 border-red-200 text-red-600"
                >
                  <Youtube className="w-3 h-3 mr-1" />
                  {t.videos}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t.videosTitle}
                </h2>
                <p className="text-xl text-gray-600">{t.videosDescription}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {youtubeVideos.map((video) => (
                  <div
                    key={video.id}
                    className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="py-20 bg-white">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <Badge
                  variant="outline"
                  className="mb-4 border-red-200 text-red-600"
                >
                  <Heart className="w-3 h-3 mr-1" />
                  {t.supportTitle2}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t.supportTitle}
                </h2>
                <p className="text-xl text-gray-600 mb-2">
                  {t.supportDescription}
                </p>
              </div>

              <div className="flex justify-center">
                <ul
                  className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-20 gap-y-8 mx-auto px-8"
                  style={{ listStyle: "none" }}
                >
                  {t.supportWays.map((way, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-lg justify-start"
                    >
                      <span className="mt-1">
                        <CheckCircle className="w-6 h-6 text-red-500 font-bold" />
                      </span>
                      <span className="font-semibold text-gray-800">{way}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Donation CTA Section */}
          <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 relative overflow-hidden">
            <div className="absolute inset-0" />
            <div className="container px-4 mx-auto relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t.donationTitle}
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {t.donationDescription}
                </p>

                <div className="flex justify-center mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Información de Donación
                    </h3>
                    <div className="space-y-4 text-left">
                      <div 
                        className="bg-white/20 rounded-xl p-4 cursor-pointer hover:bg-white/30 transition-all duration-300 border-2 border-transparent hover:border-white/40"
                        onClick={() => copyToClipboard("32200005777", "Número de cuenta Bancolombia copiado")}
                      >
                        <h4 className="font-semibold text-white mb-2">
                          CUENTA DE AHORROS BANCOLOMBIA
                        </h4>
                        <p className="text-white/90 text-lg font-mono">
                          Mision Vallado # 322-000057-77
                        </p>
                        <p className="text-white/70 text-sm mt-2">
                          👆 Haz clic para copiar el número
                        </p>
                      </div>
                      <div 
                        className="bg-white/20 rounded-xl p-4 cursor-pointer hover:bg-white/30 transition-all duration-300 border-2 border-transparent hover:border-white/40"
                        onClick={() => copyToClipboard("3214019379", "Número de Nequi copiado")}
                      >
                        <h4 className="font-semibold text-white mb-2">NEQUI</h4>
                        <p className="text-white/90 text-lg font-mono">
                          3214019379
                        </p>
                        <p className="text-white/70 text-sm mt-2">
                          👆 Haz clic para copiar el número
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white/80 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.secureDonation}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.taxDeductible}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media Section */}
          <section className="py-16 bg-white border-y">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t.followUsSocialMedia}
                </h2>
                <p className="text-lg text-gray-600">{t.joinCommunity}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <Link
                  href="https://www.youtube.com/@misionvallado6894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 rounded-xl bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Youtube className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t.youtubeName}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {t.youtubeDescription}
                  </p>
                </Link>

                <Link
                  href="https://www.instagram.com/misionvallado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 rounded-xl bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t.instagramName}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {t.instagramDescription}
                  </p>
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php?id=100068028247976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 rounded-xl bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Facebook className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t.facebookName}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {t.facebookDescription}
                  </p>
                </Link>

                <Link
                  href="https://www.tiktok.com/@misionvallado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 rounded-xl bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t.tiktokName}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {t.tiktokDescription}
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge
                  variant="outline"
                  className="mb-4 border-red-200 text-red-600"
                >
                  {t.testimonials}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t.testimonialsTitle}
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                      &ldquo;{t.testimonial1}&rdquo;
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">E</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {t.testimonial1Author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {t.testimonial1Role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                      &ldquo;{t.testimonial2}&rdquo;
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">J</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {t.testimonial2Author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {t.testimonial2Role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer id="contacto" className="bg-gray-900 text-white py-16">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/mision_vallado_logo.png"
                    alt={t.logoAlt}
                    width={50}
                    height={50}
                    className="rounded-full"
                    quality={100}
                    priority
                  />
                  <div>
                    <div className="text-xl font-bold">
                      {t.organizationName}
                    </div>
                    <div className="text-sm text-gray-400">
                      {t.protectingGeneration}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  {t.footerDescription}
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.youtube.com/@misionvallado6894"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/misionvallado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100068028247976"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@misionvallado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Video className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">{t.contact}</h3>
                <div className="space-y-3">
                  {/* <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-red-400" />
                    <span className="text-gray-300">{t.phone}</span>
                  </div> */}
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-red-400" />
                    <span className="text-gray-300">{t.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-red-400" />
                    <span className="text-gray-300">{t.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">{t.links}</h3>
                <div className="space-y-2">
                  <Link
                    href="#programas"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {t.programs}
                  </Link>
                  <Link
                    href="#videos"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {t.videos}
                  </Link>
                  <Link
                    href="#book"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {t.book}
                  </Link>
                  <Link
                    href="#contacto"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {t.contact}
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {t.organizationName}.{" "}
                {t.allRightsReserved}
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {t.privacyPolicy}
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {t.termsOfUse}
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Notificación de copia */}
        {copiedText && (
          <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-in slide-in-from-right duration-300">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">{copiedText}</span>
          </div>
        )}
      </div>
    </>
  );
}
