import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, TrendingDown, Zap, Award, Package, Truck, Lock } from "lucide-react";
import fignarProduct from "@/assets/fignar-product.png";
import fignarDoctor from "@/assets/fignar-doctor.png";
import fignarAnvisa from "@/assets/fignar-anvisa.png";
import fignarGuarantee from "@/assets/fignar-guarantee.png";

const Index = () => {
  const affiliateLink = "https://app.monetizze.com.br/r/APP25503419";

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "Fignar Gotas - Suplemento Alimentar Líquido",
          "image": fignarProduct,
          "description": "Fignar Gotas é um suplemento alimentar líquido premium com 6 nutrientes especiais para auxiliar na saúde hepática e controle de peso. Fórmula com sabor laranja, aprovado pela ANVISA.",
          "brand": {
            "@type": "Brand",
            "name": "Fignar"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "2847"
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <Badge className="bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-1.5">
                FÓRMULA PREMIUM
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Fignar Gotas
                <span className="block text-primary mt-2">6 Nutrientes Especiais</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Suplemento alimentar líquido que auxilia na saúde do fígado e no controle de peso. 
                Fórmula avançada com sabor laranja, fácil absorção e aprovado pela ANVISA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => window.location.href = affiliateLink}
                  className="group"
                >
                  👉 Ver Preço e Ofertas Atuais
                  <Zap className="ml-2 animate-pulse" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={scrollToOffer}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Saiba Mais
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Aprovado ANVISA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Garantia 90 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Conteúdo: 30 ml</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 animate-in fade-in slide-in-from-right duration-700">
                <img 
                  src={fignarProduct} 
                  alt="Fignar Gotas - Suplemento Alimentar Líquido Premium com 6 Nutrientes Especiais"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-primary/10 blur-3xl -z-0 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Escolher o Fignar Gotas?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma fórmula pensada para quem busca resultados reais com ingredientes de qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Auxilia no Emagrecimento",
                description: "Fórmula desenvolvida para apoiar o controle de peso de forma natural e eficaz"
              },
              {
                icon: Shield,
                title: "Saúde do Fígado",
                description: "6 nutrientes especiais que trabalham em conjunto para suportar a função hepática"
              },
              {
                icon: Zap,
                title: "Rápida Absorção",
                description: "Formato líquido permite melhor absorção dos nutrientes pelo organismo"
              },
              {
                icon: CheckCircle2,
                title: "Sabor Agradável",
                description: "Sabor laranja suave, facilitando o uso diário sem desconforto"
              },
              {
                icon: Award,
                title: "Aprovado ANVISA",
                description: "Produto registrado e aprovado pela Agência Nacional de Vigilância Sanitária"
              },
              {
                icon: Package,
                title: "Praticidade",
                description: "Embalagem de 30ml com dosador incluso para uso fácil e preciso"
              }
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border/50 hover:-translate-y-1"
              >
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={fignarDoctor} 
                alt="Profissional de saúde recomendando Fignar Gotas"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-semibold px-4 py-1.5">
                COMO FUNCIONA
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Composição Cientificamente Desenvolvida
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Fignar Gotas foi desenvolvido com uma fórmula premium que combina 6 nutrientes especiais, 
                trabalhando em sinergia para apoiar a saúde do fígado e auxiliar no processo de emagrecimento.
              </p>

              <div className="space-y-4">
                {[
                  "Suporte à função hepática saudável",
                  "Auxílio no metabolismo de gorduras",
                  "Fórmula de rápida absorção",
                  "Ingredientes naturais e seguros",
                  "Uso adulto com recomendação de agitar antes de usar"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="cta" 
                size="xl"
                onClick={() => window.location.href = affiliateLink}
                className="mt-6"
              >
                Quero Experimentar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <Card className="p-8 text-center shadow-xl border-primary/20">
              <img 
                src={fignarAnvisa} 
                alt="Fignar Gotas aprovado pela ANVISA"
                className="w-full h-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">Aprovado pela ANVISA</h3>
              <p className="text-muted-foreground">
                Produto regularizado e aprovado pela Agência Nacional de Vigilância Sanitária, 
                garantindo qualidade e segurança.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-xl border-accent/20">
              <img 
                src={fignarGuarantee} 
                alt="Garantia de 90 dias de satisfação"
                className="w-full h-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">Garantia de 90 Dias</h3>
              <p className="text-muted-foreground">
                Experimente sem riscos! Se não ficar satisfeito, devolvemos 100% do seu dinheiro 
                em até 90 dias.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Dizem Quem Já Usa
            </h2>
            <p className="text-lg text-muted-foreground">
              Mais de 2.800 pessoas já experimentaram o Fignar Gotas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Maria Silva",
                rating: 5,
                text: "Comecei a usar há 2 meses e já sinto diferença. O sabor de laranja é muito bom e não tenho dificuldade nenhuma para tomar diariamente."
              },
              {
                name: "João Santos",
                rating: 5,
                text: "Produto de qualidade, entrega rápida e resultado visível. Recomendo para quem busca um suplemento confiável."
              },
              {
                name: "Ana Costa",
                rating: 5,
                text: "Aprovado pela ANVISA foi o que me deu segurança para comprar. Estou satisfeita com os resultados e vou continuar usando."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-border/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="oferta" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center shadow-2xl border-primary/30">
            <Badge className="bg-accent text-accent-foreground text-sm font-bold px-6 py-2 mb-6">
              OFERTA ESPECIAL
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Garanta Seu Fignar Gotas Agora
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Aproveite as condições especiais e comece sua jornada para uma vida mais saudável. 
              Com garantia de 90 dias, você não tem nada a perder!
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Truck, text: "Entrega rápida e segura" },
                { icon: Lock, text: "Pagamento 100% seguro" },
                { icon: Award, text: "Garantia de 90 dias" },
                { icon: Shield, text: "Produto aprovado pela ANVISA" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.location.href = affiliateLink}
              className="text-xl py-7 px-16 shadow-2xl hover:scale-105 transition-transform"
            >
              👉 Comprar Fignar Gotas Agora
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              * Ao clicar, você será direcionado para a página oficial de compra
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "O que é o Fignar Gotas?",
                  answer: "Fignar Gotas é um suplemento alimentar líquido com fórmula premium contendo 6 nutrientes especiais. Foi desenvolvido para auxiliar na saúde do fígado e no controle de peso, com sabor laranja e fácil absorção."
                },
                {
                  question: "Como usar o Fignar Gotas?",
                  answer: "É um produto de uso adulto. Agite bem antes de usar e siga as instruções da embalagem. Recomenda-se uso regular para melhores resultados."
                },
                {
                  question: "O produto é aprovado pela ANVISA?",
                  answer: "Sim! O Fignar Gotas é um produto regularizado e aprovado pela Agência Nacional de Vigilância Sanitária (ANVISA), garantindo sua qualidade e segurança."
                },
                {
                  question: "Qual é a garantia oferecida?",
                  answer: "Oferecemos garantia de satisfação de 90 dias. Se você não ficar satisfeito com o produto, devolvemos 100% do seu dinheiro."
                },
                {
                  question: "Quanto tempo dura um frasco?",
                  answer: "Cada frasco contém 30ml do suplemento líquido. A duração depende da dosagem recomendada, que está especificada na embalagem."
                },
                {
                  question: "Vale a pena investir no Fignar Gotas?",
                  answer: "O Fignar Gotas oferece uma fórmula premium com 6 nutrientes especiais, é aprovado pela ANVISA, possui sabor agradável e vem com garantia de 90 dias. É uma opção para quem busca um suplemento de qualidade para auxiliar na saúde hepática e controle de peso."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6 border-border/50">
                  <h3 className="text-lg font-bold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Summary */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Resumo do Produto
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 text-primary">Especificações:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Nome: Fignar Gotas</li>
                  <li>• Tipo: Suplemento Alimentar Líquido</li>
                  <li>• Conteúdo: 30 ml</li>
                  <li>• Sabor: Laranja</li>
                  <li>• Fórmula: 6 Nutrientes Especiais</li>
                  <li>• Uso: Adulto</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3 text-primary">Diferenciais:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Aprovado pela ANVISA</li>
                  <li>• Garantia de 90 dias</li>
                  <li>• Fórmula Premium</li>
                  <li>• Rápida absorção</li>
                  <li>• Sabor agradável</li>
                  <li>• Praticidade no uso</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-background rounded-lg border border-primary/20">
              <p className="text-center text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Objetivo:</strong> Auxiliar na saúde do fígado e no controle de peso através 
                de uma fórmula líquida com 6 nutrientes especiais, desenvolvida para melhor absorção pelo organismo.
              </p>
            </div>

            <div className="text-center mt-8">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => window.location.href = affiliateLink}
                className="shadow-xl"
              >
                Comprar com Desconto Especial
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Fignar Gotas</h3>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
              Suplemento alimentar líquido premium com 6 nutrientes especiais para auxiliar 
              na saúde do fígado e controle de peso.
            </p>
            <div className="flex justify-center gap-4 pt-4 flex-wrap text-sm">
              <span>© 2025 Fignar Gotas</span>
              <span>•</span>
              <span>Produto aprovado pela ANVISA</span>
              <span>•</span>
              <span>Garantia de 90 dias</span>
            </div>
            <p className="text-xs text-secondary-foreground/60 pt-4 max-w-3xl mx-auto">
              Este site contém links de afiliado. As informações apresentadas não substituem orientação médica profissional. 
              Consulte sempre um profissional de saúde antes de iniciar o uso de suplementos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
