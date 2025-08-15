"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Palette, Brush, Droplets } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A174E] via-[#1a2b6b] to-[#F5D042]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo-parizotto.png"
              alt="Parizotto Tintas"
              width={600}
              height={240}
              className="h-32 md:h-48 lg:h-56 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-[#F5D042] hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg px-6 py-3"
              onClick={() => scrollToSection("inicio")}
            >
              Início
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-[#F5D042] hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg px-6 py-3"
              onClick={() => scrollToSection("catalogo")}
            >
              Catálogo
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-[#F5D042] hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg px-6 py-3"
              onClick={() => scrollToSection("contato")}
            >
              Contato
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            PARIZOTTO
            <span className="block text-[#F5D042] text-4xl md:text-6xl">TINTAS</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Transforme seus projetos com as melhores tintas e acabamentos do mercado. Qualidade, durabilidade e cores
            vibrantes para dar vida às suas ideias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#F5D042] text-[#0A174E] hover:bg-[#f0c635] font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={() => scrollToSection("catalogo")}
            >
              <Palette className="mr-2 h-5 w-5" />
              Ver Catálogo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0A174E] font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
              onClick={() => scrollToSection("contato")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      <section id="catalogo" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Catálogo de Tintas</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Conheça nossa linha completa de tintas premium das melhores marcas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Suvinil Látex Premium */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="/suvinil-latex-paint-white-premium.png"
                  alt="Suvinil Látex Premium"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Suvinil Látex Premium</h3>
              <p className="text-white/80 text-sm mb-4">
                Tinta látex premium para paredes internas. Acabamento fosco, fácil aplicação e excelente cobertura.
              </p>
              <div className="space-y-2 text-white/70 text-sm mb-4">
                <p>• Rendimento: 12m²/litro</p>
                <p>• Secagem: 4 horas</p>
                <p>• Disponível em 200+ cores</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">3,6L</span>
                  <span className="text-[#F5D042] font-bold">R$ 89,90</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">18L</span>
                  <span className="text-[#F5D042] font-bold">R$ 389,90</span>
                </div>
              </div>
              <Button className="w-full bg-[#F5D042] text-[#0A174E] hover:bg-[#f0c635]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>

          {/* Suvinil Acrílica Externa */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="/suvinil-blue-paint-can.png"
                  alt="Suvinil Acrílica Externa"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Suvinil Acrílica Externa</h3>
              <p className="text-white/80 text-sm mb-4">
                Proteção total contra chuva, sol e umidade. Resistência superior para fachadas.
              </p>
              <div className="space-y-2 text-white/70 text-sm mb-4">
                <p>• Rendimento: 10m²/litro</p>
                <p>• Proteção UV avançada</p>
                <p>• Garantia de 5 anos</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">3,6L</span>
                  <span className="text-[#F5D042] font-bold">R$ 119,90</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">18L</span>
                  <span className="text-[#F5D042] font-bold">R$ 529,90</span>
                </div>
              </div>
              <Button className="w-full bg-[#F5D042] text-[#0A174E] hover:bg-[#f0c635]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>

          {/* Glasu Esmalte Sintético */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="/glasu-enamel-paint.png"
                  alt="Glasu Esmalte Sintético"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Glasu Esmalte Sintético</h3>
              <p className="text-white/80 text-sm mb-4">
                Acabamento brilhante para madeiras e metais. Durabilidade excepcional.
              </p>
              <div className="space-y-2 text-white/70 text-sm mb-4">
                <p>• Rendimento: 14m²/litro</p>
                <p>• Secagem: 6 horas</p>
                <p>• Resistente a riscos</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">900ml</span>
                  <span className="text-[#F5D042] font-bold">R$ 45,90</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">3,6L</span>
                  <span className="text-[#F5D042] font-bold">R$ 159,90</span>
                </div>
              </div>
              <Button className="w-full bg-[#F5D042] text-[#0A174E] hover:bg-[#f0c635]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>

          {/* Suvinil Texturizada */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="/suvinil-textured-paint-can.png"
                  alt="Suvinil Texturizada"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Suvinil Texturizada</h3>
              <p className="text-white/80 text-sm mb-4">
                Crie efeitos únicos com nossa linha de texturas decorativas premium.
              </p>
              <div className="space-y-2 text-white/70 text-sm mb-4">
                <p>• Múltiplos efeitos disponíveis</p>
                <p>• Fácil aplicação</p>
                <p>• Resistente à lavagem</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">1,2L</span>
                  <span className="text-[#F5D042] font-bold">R$ 69,90</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">5L</span>
                  <span className="text-[#F5D042] font-bold">R$ 249,90</span>
                </div>
              </div>
              <Button className="w-full bg-[#F5D042] text-[#0A174E] hover:bg-[#f0c635]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>

          {/* Glasu Verniz Marítimo */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="/placeholder-0jhqy.png"
                  alt="Glasu Verniz Marítimo"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Glasu Verniz Marítimo</h3>
              <p className="text-white/80 text-sm mb-4">
                Proteção máxima para madeiras expostas ao tempo. Ideal para decks e pergolados.
              </p>
              <div className="space-y-2 text-white/70 text-sm mb-4">
                <p>• Proteção UV total</p>
                <p>• Resistente à água</p>
                <p>• Realça a madeira natural</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">900ml</span>
                  <span className="text-[#F5D042] font-bold">R$ 79,90</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">3,6L</span>
                  <span className="text-[#F5D042] font-bold">R$ 289,90</span>
                </div>
              </div>
              <Button className="w-full bg-[#F5D042] text-[#0A174E] hover:bg-[#f0c635]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>

          {/* Suvinil Tinta Lousa */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="/suvinil-chalkboard-paint.png"
                  alt="Suvinil Tinta Lousa"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Suvinil Tinta Lousa</h3>
              <p className="text-white/80 text-sm mb-4">
                Transforme qualquer parede em uma lousa funcional. Perfeita para escritórios e quartos infantis.
              </p>
              <div className="space-y-2 text-white/70 text-sm mb-4">
                <p>• Escreva com giz comum</p>
                <p>• Fácil limpeza</p>
                <p>• Várias cores disponíveis</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">800ml</span>
                  <span className="text-[#F5D042] font-bold">R$ 55,90</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">3,2L</span>
                  <span className="text-[#F5D042] font-bold">R$ 189,90</span>
                </div>
              </div>
              <Button className="w-full bg-[#F5D042] text-[#0A174E] hover:bg-[#f0c635]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>

          {/* Glasu Tinta Magnética */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="/placeholder-h6ymk.png"
                  alt="Glasu Tinta Magnética"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Glasu Tinta Magnética</h3>
              <p className="text-white/80 text-sm mb-4">
                Tinta especial que permite fixar ímãs na parede. Ideal para escritórios e áreas criativas.
              </p>
              <div className="space-y-2 text-white/70 text-sm mb-4">
                <p>• Superfície magnética</p>
                <p>• Pode ser repintada</p>
                <p>• Fácil aplicação</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">500ml</span>
                  <span className="text-[#F5D042] font-bold">R$ 89,90</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">1L</span>
                  <span className="text-[#F5D042] font-bold">R$ 159,90</span>
                </div>
              </div>
              <Button className="w-full bg-[#F5D042] text-[#0A174E] hover:bg-[#f0c635]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>

          {/* Suvinil Primer */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="/suvinil-primer-sealer-white-paint-can.png"
                  alt="Suvinil Primer"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Suvinil Primer Selador</h3>
              <p className="text-white/80 text-sm mb-4">
                Base preparatória essencial para um acabamento perfeito. Melhora aderência e uniformidade.
              </p>
              <div className="space-y-2 text-white/70 text-sm mb-4">
                <p>• Melhora aderência</p>
                <p>• Uniformiza absorção</p>
                <p>• Economiza tinta de acabamento</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">3,6L</span>
                  <span className="text-[#F5D042] font-bold">R$ 69,90</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">18L</span>
                  <span className="text-[#F5D042] font-bold">R$ 299,90</span>
                </div>
              </div>
              <Button className="w-full bg-[#F5D042] text-[#0A174E] hover:bg-[#f0c635]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>

          {/* Glasu Tinta Epóxi */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <Image
                  src="/industrial-floor-coating.png"
                  alt="Glasu Tinta Epóxi"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Glasu Tinta Epóxi</h3>
              <p className="text-white/80 text-sm mb-4">
                Revestimento industrial para pisos. Resistência química e mecânica superior.
              </p>
              <div className="space-y-2 text-white/70 text-sm mb-4">
                <p>• Resistência química</p>
                <p>• Fácil limpeza</p>
                <p>• Acabamento brilhante</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">5L (Kit)</span>
                  <span className="text-[#F5D042] font-bold">R$ 349,90</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-white/80 text-sm">20L (Kit)</span>
                  <span className="text-[#F5D042] font-bold">R$ 1.199,90</span>
                </div>
              </div>
              <Button className="w-full bg-[#F5D042] text-[#0A174E] hover:bg-[#f0c635]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos Produtos</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Oferecemos uma linha completa de tintas e produtos para todos os tipos de projetos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="bg-[#F5D042] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Brush className="h-8 w-8 text-[#0A174E]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tintas Internas</h3>
              <p className="text-white/80 leading-relaxed">
                Tintas de alta qualidade para ambientes internos, com acabamento perfeito e durabilidade excepcional.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="bg-[#F5D042] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-8 w-8 text-[#0A174E]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tintas Externas</h3>
              <p className="text-white/80 leading-relaxed">
                Proteção máxima contra intempéries, com resistência UV e cores que não desbotam.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="bg-[#F5D042] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-[#0A174E]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tintas Especiais</h3>
              <p className="text-white/80 leading-relaxed">
                Texturas, vernizes e acabamentos especiais para projetos únicos e diferenciados.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Entre em Contato</h2>
            <p className="text-xl text-white/80">
              Estamos prontos para ajudar você a escolher a tinta ideal para seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-[#F5D042] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-[#0A174E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                <p className="text-white/80">(42) 9 9838-4173</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-[#F5D042] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-[#0A174E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-white/80 break-all">tintas@eletroparizotto.com.br</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-[#F5D042] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-[#0A174E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Endereço</h3>
                <p className="text-white/80">
                  Avenida das Flores 777
                  <br />
                  Carambeí
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">© 2024 Parizotto Tintas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
