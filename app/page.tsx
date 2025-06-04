"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Shield,
  Users,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Heart,
  Award,
  Globe,
  TrendingUp,
  Languages,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Translations
const translations = {
  es: {
    // Header
    about: "Nosotros",
    programs: "Programas",
    impact: "Impacto",
    contact: "Contacto",
    donate: "Donar",

    // Hero
    childProtection: "Protección Infantil",
    heroTitle: "Protegemos a los niños y niñas del abuso sexual",
    heroDescription:
      "Movimiento para proteger a los niños, niñas y adolescentes del abuso sexual y otras amenazas que vulneran su integridad, dignidad y desarrollo integral.",
    makeDonation: "Hacer una Donación",
    learnMore: "Conocer Nuestro Trabajo",
    childrenProtected: "+500 niños protegidos",
    rating: "Calificación 5.0",

    // Stats
    protectedChildren: "Niños Protegidos",
    workshopsGiven: "Talleres Impartidos",
    yearsExperience: "Años de Experiencia",
    successRate: "Tasa de Éxito",

    // About
    ourMission: "Nuestra Misión",
    missionTitle: "Construyendo un mundo más seguro para la infancia",
    missionDescription:
      "Trabajamos incansablemente en la prevención del abuso sexual infantil, brindando protección integral y apoyo especializado a víctimas, mientras educamos a comunidades enteras sobre la importancia de crear entornos seguros para todos los niños y niñas.",
    prevention: "Prevención",
    preventionDesc:
      "Implementamos programas educativos innovadores para prevenir el abuso sexual y crear entornos protectores en hogares, escuelas y comunidades.",
    protection: "Protección",
    protectionDesc:
      "Ofrecemos apoyo integral especializado: legal, psicológico y social a niños, niñas y adolescentes que han sido víctimas de abuso sexual.",
    education: "Educación",
    educationDesc:
      "Capacitamos a padres, educadores y cuidadores para identificar señales de alerta y actuar efectivamente ante situaciones de riesgo.",

    // Programs
    ourPrograms: "Nuestros Programas",
    programsTitle: "Programas especializados de protección infantil",
    schoolProgram: "Programa de Prevención Escolar",
    schoolProgramDesc:
      "Talleres educativos en instituciones educativas para enseñar a niños y adolescentes sobre autocuidado y prevención del abuso sexual.",
    psychosocialSupport: "Apoyo Psicosocial",
    psychosocialSupportDesc:
      "Atención psicológica especializada y acompañamiento integral para víctimas de abuso sexual y sus familias.",
    adultTraining: "Formación de Adultos Protectores",
    adultTrainingDesc:
      "Capacitación especializada para padres, educadores y cuidadores en identificación de señales de alerta y protocolos de actuación.",

    // Impact
    impactTitle: "Transformando vidas, construyendo futuros seguros",
    impactDescription: "Cada donación se convierte en protección real para un niño o niña vulnerable.",
    protectedFromAbuse: "Niños y niñas protegidos del abuso sexual",
    trainedAdults: "Adultos capacitados como protectores",
    recoveryRate: "Tasa de recuperación exitosa",

    // Donation CTA
    donationTitle: "Tu donación salva vidas infantiles",
    donationDescription:
      "Con tu apoyo podemos seguir protegiendo a más niños, niñas y adolescentes del abuso sexual. Cada contribución, sin importar el monto, se convierte en protección real y esperanza renovada.",
    otherAmount: "Otro Monto",
    secureDonation: "Donación 100% segura",
    taxDeductible: "Deducible de impuestos",
    totalTransparency: "Transparencia total",

    // Testimonials
    testimonials: "Testimonios",
    testimonialsTitle: "Historias de esperanza y transformación",
    testimonial1:
      "Gracias a Misión Vallado recibí el apoyo psicológico especializado que necesitaba para superar el trauma del abuso. Hoy puedo decir que tengo una vida plena y esperanzadora.",
    testimonial1Author: "Ana M.",
    testimonial1Role: "Beneficiaria del programa de protección",
    testimonial2:
      "Como padre, los talleres de Misión Vallado me enseñaron a proteger mejor a mis hijos. Su trabajo profesional y dedicado es realmente invaluable para nuestra sociedad.",
    testimonial2Author: "Juan P.",
    testimonial2Role: "Padre participante en talleres de prevención",

    // Footer
    footerDescription:
      "Movimiento dedicado a la protección integral de niños, niñas y adolescentes contra el abuso sexual y otras formas de violencia que vulneran su dignidad y desarrollo.",
    links: "Enlaces",
    volunteering: "Voluntariado",
    transparency: "Transparencia",
    resources: "Recursos",
    privacyPolicy: "Política de Privacidad",
    termsOfUse: "Términos de Uso",
    allRightsReserved: "Todos los derechos reservados.",

    // Donation Modal
    donationModalTitle: "Hacer una Donación",
    donationModalDescription: "Tu contribución ayuda a proteger a más niños del abuso sexual",
    selectAmount: "Selecciona un monto",
    customAmount: "Monto personalizado",
    enterAmount: "Ingresa el monto",
    proceedDonation: "Proceder con la Donación",
    close: "Cerrar",
  },
  en: {
    // Header
    about: "About",
    programs: "Programs",
    impact: "Impact",
    contact: "Contact",
    donate: "Donate",

    // Hero
    childProtection: "Child Protection",
    heroTitle: "We protect children from sexual abuse",
    heroDescription:
      "Movement to protect children and adolescents from sexual abuse and other threats that violate their integrity, dignity and comprehensive development.",
    makeDonation: "Make a Donation",
    learnMore: "Learn About Our Work",
    childrenProtected: "+500 children protected",
    rating: "5.0 Rating",

    // Stats
    protectedChildren: "Protected Children",
    workshopsGiven: "Workshops Given",
    yearsExperience: "Years of Experience",
    successRate: "Success Rate",

    // About
    ourMission: "Our Mission",
    missionTitle: "Building a safer world for childhood",
    missionDescription:
      "We work tirelessly in the prevention of child sexual abuse, providing comprehensive protection and specialized support to victims, while educating entire communities about the importance of creating safe environments for all children.",
    prevention: "Prevention",
    preventionDesc:
      "We implement innovative educational programs to prevent sexual abuse and create protective environments in homes, schools and communities.",
    protection: "Protection",
    protectionDesc:
      "We offer comprehensive specialized support: legal, psychological and social to children and adolescents who have been victims of sexual abuse.",
    education: "Education",
    educationDesc:
      "We train parents, educators and caregivers to identify warning signs and act effectively in risk situations.",

    // Programs
    ourPrograms: "Our Programs",
    programsTitle: "Specialized child protection programs",
    schoolProgram: "School Prevention Program",
    schoolProgramDesc:
      "Educational workshops in educational institutions to teach children and adolescents about self-care and prevention of sexual abuse.",
    psychosocialSupport: "Psychosocial Support",
    psychosocialSupportDesc:
      "Specialized psychological care and comprehensive support for victims of sexual abuse and their families.",
    adultTraining: "Protective Adults Training",
    adultTrainingDesc:
      "Specialized training for parents, educators and caregivers in identifying warning signs and action protocols.",

    // Impact
    impactTitle: "Transforming lives, building safe futures",
    impactDescription: "Every donation becomes real protection for a vulnerable child.",
    protectedFromAbuse: "Children protected from sexual abuse",
    trainedAdults: "Adults trained as protectors",
    recoveryRate: "Successful recovery rate",

    // Donation CTA
    donationTitle: "Your donation saves children's lives",
    donationDescription:
      "With your support we can continue protecting more children and adolescents from sexual abuse. Every contribution, regardless of the amount, becomes real protection and renewed hope.",
    otherAmount: "Other Amount",
    secureDonation: "100% secure donation",
    taxDeductible: "Tax deductible",
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
      "Movement dedicated to the comprehensive protection of children and adolescents against sexual abuse and other forms of violence that violate their dignity and development.",
    links: "Links",
    volunteering: "Volunteering",
    transparency: "Transparency",
    resources: "Resources",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    allRightsReserved: "All rights reserved.",

    // Donation Modal
    donationModalTitle: "Make a Donation",
    donationModalDescription: "Your contribution helps protect more children from sexual abuse",
    selectAmount: "Select an amount",
    customAmount: "Custom amount",
    enterAmount: "Enter amount",
    proceedDonation: "Proceed with Donation",
    close: "Close",
  },
}

export default function Component() {
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [donationModalOpen, setDonationModalOpen] = useState(false)
  const [successModalOpen, setSuccessModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<string>("")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  const heroImages = [
    {
      src: "/niños_protegidos.jpg",
      alt: "Niños protegidos por Misión Vallado"
    },
    {
      src: "/programa.jpg",
      alt: "Programas de Misión Vallado"
    },
    {
      src: "/niño.jpg",
      alt: "Niño sonriendo - Misión Vallado"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const t = translations[language]

  const predefinedAmounts = [
    { value: "50000", label: "$50.000 COP" },
    { value: "100000", label: "$100.000 COP" },
    { value: "200000", label: "$200.000 COP" },
    { value: "500000", label: "$500.000 COP" },
    { value: "1000000", label: "$1.000.000 COP" },
    { value: "2000000", label: "$2.000.000 COP" },
  ]

  const handleDonationClick = () => {
    setDonationModalOpen(true)
  }

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount("")
  }

  const getCurrentAmount = () => {
    return customAmount || selectedAmount
  }

  const handleDonationProcess = () => {
    setIsProcessing(true)
    // Simulamos el proceso de donación
    setTimeout(() => {
      setIsProcessing(false)
      setDonationModalOpen(false)
      setSuccessModalOpen(true)
      // Limpiamos los valores
      setSelectedAmount("")
      setCustomAmount("")
    }, 2000)
  }

  const handleSuccessClose = () => {
    setSuccessModalOpen(false)
    // Scroll al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        {/* SEO Meta Tags would go in head */}
        <head>
          <title>
            {language === "es"
              ? "Misión Vallado - Protegiendo Niños del Abuso Sexual"
              : "Misión Vallado - Protecting Children from Sexual Abuse"}
          </title>
          <meta
            name="description"
            content={
              language === "es"
                ? "Fundación dedicada a proteger niños, niñas y adolescentes del abuso sexual en Colombia"
                : "Foundation dedicated to protecting children and adolescents from sexual abuse in Colombia"
            }
          />
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
                  src="/mision_vallado_logo.jpg"
                  alt="Misión Vallado"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Misión Vallado</span>
                <span className="text-xs text-gray-500 hidden sm:block">Protegiendo a una generación</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex ml-auto items-center space-x-6 text-sm font-medium">
              <Link href="#nosotros" className="transition-colors hover:text-red-500">
                {t.about}
              </Link>
              <Link href="#programas" className="transition-colors hover:text-red-500">
                {t.programs}
              </Link>
              <Link href="#impacto" className="transition-colors hover:text-red-500">
                {t.impact}
              </Link>
              <Link href="#contacto" className="transition-colors hover:text-red-500">
                {t.contact}
              </Link>

              {/* Language Selector */}
              <Select value={language} onValueChange={(value: "es" | "en") => setLanguage(value)}>
                <SelectTrigger className="w-25 h-8">
                  <Languages className="h-4 w-4 mr-1" />
                  <SelectValue placeholder={language === "es" ? "ES" : "EN"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">ES</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectContent>
              </Select>

              <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white" onClick={handleDonationClick}>
                {t.donate}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-auto p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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

              <div className="flex items-center space-x-4 pt-2">
                <Select value={language} onValueChange={(value: "es" | "en") => setLanguage(value)}>
                  <SelectTrigger className="w-25 h-8">
                    <Languages className="h-4 w-4 mr-1" />
                    <SelectValue placeholder={language === "es" ? "ES" : "EN"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">ES</SelectItem>
                    <SelectItem value="en">EN</SelectItem>
                  </SelectContent>
                </Select>

                <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white" onClick={handleDonationClick}>
                  {t.donate}
                </Button>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
            <div className="container px-4 py-16 md:py-24 lg:py-32 mx-auto">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="flex flex-col justify-center space-y-8">
                  <div className="space-y-6">
                    <Badge variant="outline" className="w-fit border-red-200 text-red-600">
                      <Shield className="w-3 h-3 mr-1" />
                      {t.childProtection}
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                      <span className="text-gray-900">{language === "es" ? "Protegemos a los" : "We protect"}</span>{" "}
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                        {language === "es" ? "niños y niñas" : "children"}
                      </span>{" "}
                      <span className="text-gray-900">
                        {language === "es" ? "del abuso sexual" : "from sexual abuse"}
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">{t.heroDescription}</p>
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
                    <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50">
                      {t.learnMore}
                    </Button>
                  </div>
                  <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-8 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-pink-400 border-2 border-white"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{t.childrenProtected}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">{t.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                      <div className="relative w-full sm:min-w-full md:min-w-[500px] lg:min-w-[600px] h-[280px] sm:h-[300px] md:h-[500px] lg:h-[600px]">
                        {heroImages.map((image, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                              index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            <Image
                              src={image.src}
                              fill
                              alt={image.alt}
                              className="rounded-2xl shadow-2xl object-cover w-full h-full"
                              sizes="(max-width: 320px) 280px, (max-width: 640px) 300px, (max-width: 768px) 500px, 600px"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
                  <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-white border-y">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{t.protectedChildren}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">100+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{t.workshopsGiven}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">10</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{t.yearsExperience}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">95%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{t.successRate}</div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="nosotros" className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge variant="outline" className="mb-4 border-red-200 text-red-600">
                  {t.ourMission}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.missionTitle}</h2>
                <p className="text-xl text-gray-600 leading-relaxed">{t.missionDescription}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                      <Shield className="h-6 w-6 text-red-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.prevention}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.preventionDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                      <Users className="h-6 w-6 text-red-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.protection}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.protectionDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                      <BookOpen className="h-6 w-6 text-red-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.education}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.educationDesc}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <section id="programas" className="py-20 bg-white">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge variant="outline" className="mb-4 border-red-200 text-red-600">
                  {t.ourPrograms}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.programsTitle}</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.schoolProgram}</h3>
                      <p className="text-gray-600">{t.schoolProgramDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.psychosocialSupport}</h3>
                      <p className="text-gray-600">{t.psychosocialSupportDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.adultTraining}</h3>
                      <p className="text-gray-600">{t.adultTrainingDesc}</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/programa.jpg"
                    width="600"
                    height="500"
                    alt="Programas de Misión Vallado"
                    className="rounded-2xl shadow-xl"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" /> */}
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section id="impacto" className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge variant="outline" className="mb-4 border-red-200 text-red-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {t.impact}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.impactTitle}</h2>
                <p className="text-xl text-gray-600">{t.impactDescription}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-red-500" />
                    </div>
                    <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
                    <div className="text-gray-600 font-medium">{t.protectedFromAbuse}</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-red-500" />
                    </div>
                    <div className="text-3xl font-bold text-red-500 mb-2">2,000+</div>
                    <div className="text-gray-600 font-medium">{t.trainedAdults}</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white md:col-span-2 lg:col-span-1">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-red-500" />
                    </div>
                    <div className="text-3xl font-bold text-red-500 mb-2">95%</div>
                    <div className="text-gray-600 font-medium">{t.recoveryRate}</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Donation CTA Section */}
          <section className="py-20 bg-gradient-to-r from-red-500 via-red-600 to-pink-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="container px-4 mx-auto relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.donationTitle}</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">{t.donationDescription}</p>

                <div className="flex justify-center mb-8">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100 shadow-lg px-8"
                    onClick={handleDonationClick}
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    {t.makeDonation}
                  </Button>
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
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.totalTransparency}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-white">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge variant="outline" className="mb-4 border-red-200 text-red-600">
                  {t.testimonials}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.testimonialsTitle}</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                      "{t.testimonial1}"
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">A</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.testimonial1Author}</div>
                        <div className="text-sm text-gray-600">{t.testimonial1Role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                      "{t.testimonial2}"
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">J</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.testimonial2Author}</div>
                        <div className="text-sm text-gray-600">{t.testimonial2Role}</div>
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
                    src="/mision_vallado_logo.jpg"
                    alt="Misión Vallado"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-xl font-bold">Misión Vallado</div>
                    <div className="text-sm text-gray-400">Protegiendo a una generación</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">{t.footerDescription}</p>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Users className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">{t.contact}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-red-400" />
                    <span className="text-gray-300">+57 (1) 234-5678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-red-400" />
                    <span className="text-gray-300">info@misionvallado.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-red-400" />
                    <span className="text-gray-300">Bogotá, Colombia</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">{t.links}</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    {t.programs}
                  </Link>
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    {t.volunteering}
                  </Link>
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    {t.transparency}
                  </Link>
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    {t.resources}
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Misión Vallado. {t.allRightsReserved}
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t.privacyPolicy}
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t.termsOfUse}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Donation Modal */}
      <Dialog open={donationModalOpen} onOpenChange={setDonationModalOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side - Image */}
            <div className="relative h-64 md:h-full">
              <Image
                src="/niño.jpg"
                alt="Niño sonriendo - Misión Vallado"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Tu donación protege</p>
                <p className="text-lg font-bold">a un niño como él</p>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="p-6">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-bold text-gray-900">{t.donationModalTitle}</DialogTitle>
                <DialogDescription className="text-gray-600">{t.donationModalDescription}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">{t.selectAmount}</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount.value}
                        variant={selectedAmount === amount.value ? "default" : "outline"}
                        className={`h-12 ${
                          selectedAmount === amount.value
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "border-gray-300 hover:border-red-300"
                        }`}
                        onClick={() => handleAmountSelect(amount.value)}
                        disabled={isProcessing}
                      >
                        {amount.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="custom-amount" className="text-sm font-medium text-gray-700 mb-2 block">
                    {t.customAmount}
                  </Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder={t.enterAmount}
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="h-12"
                    disabled={isProcessing}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-medium"
                    disabled={!getCurrentAmount() || isProcessing}
                    onClick={handleDonationProcess}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        {language === "es" ? "Procesando..." : "Processing..."}
                      </>
                    ) : (
                      <>
                        <Heart className="mr-2 h-5 w-5" />
                        {t.proceedDonation}
                        {getCurrentAmount() && ` - $${Number.parseInt(getCurrentAmount()).toLocaleString()} COP`}
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 pt-2">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>{t.secureDonation}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>{t.taxDeductible}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
              {language === "es" ? "¡Donación Exitosa!" : "Donation Successful!"}
            </DialogTitle>
            <DialogDescription className="text-gray-600 mb-6">
              {language === "es" 
                ? "Gracias por tu generosa contribución. Tu donación ayudará a proteger a más niños del abuso sexual."
                : "Thank you for your generous contribution. Your donation will help protect more children from sexual abuse."}
            </DialogDescription>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleSuccessClose}
            >
              {language === "es" ? "Volver al inicio" : "Back to home"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
