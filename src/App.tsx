export default function LandingPage() {
  const whatsappNumber = '5511999999999'
  const whatsappMessage = encodeURIComponent(
    'Olá! Vim pelo site e gostaria de fazer um orçamento para meu iPhone.'
  )

  const services = [
    {
      title: 'Troca de Tela',
      description:
        'Substituição rápida de telas quebradas com peças de alta qualidade.',
    },
    {
      title: 'Troca de Vidro Traseiro',
      description:
        'Seu iPhone quebrou/trincou o vidro trazeiro? Fazemos o reparo rápido.',
    },
    {
      title: 'Troca de Bateria',
      description:
        'Seu iPhone descarregando rápido? Fazemos a troca na hora.',
    },
    {
      title: 'Câmeras',
      description:
        'Diagnóstico e reparo especializado em componentes delicados.',
    },
    {
      title: 'Conector de Carga',
      description:
        'Problemas para carregar? Reparo rápido e seguro no local.',
    },
  ]

  const benefits = [
    'Atendimento no conforto da sua casa ou trabalho',
    'Reparo realizado dentro do veículo técnico',
    'Sem necessidade de deixar o aparelho em loja',
    'Serviço rápido e transparente',
    'Atendimento com horário agendado',
    'Garantia no reparo realizado',
  ]

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FA7014]/20 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Atendimento móvel especializado em iPhone
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Conserto de
              <span className="text-[#FA7014]"> iPhone </span>
              no conforto da sua casa
            </h1>

            <p className="text-zinc-300 text-lg mt-6 leading-relaxed max-w-xl">
              Atendimento rápido e profissional diretamente na sua residência,
              empresa ou condomínio. Reparamos seu aparelho no local, sem que
              você precise perder tempo indo até uma assistência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                className="bg-[#FA7014] hover:scale-105 transition-all duration-300 text-black font-bold px-8 py-4 rounded-2xl text-center shadow-2xl shadow-[#FA7014]/30"
              >
                Solicitar orçamento
              </a>

              <a
                href="#services"
                className="border border-white/20 hover:border-[#FA7014] transition-all duration-300 px-8 py-4 rounded-2xl text-center"
              >
                Ver serviços
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="text-3xl font-black text-[#FA7014]">+500</h3>
                <p className="text-zinc-400 text-sm mt-1">Aparelhos reparados</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="text-3xl font-black text-[#FA7014]">1h</h3>
                <p className="text-zinc-400 text-sm mt-1">Tempo médio de reparo</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="text-3xl font-black text-[#FA7014]">100%</h3>
                <p className="text-zinc-400 text-sm mt-1">Atendimento móvel</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#FA7014]/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop"
                alt="Reparo de iPhone"
                className="rounded-3xl w-full h-[500px] object-cover"
              />

              <div className="absolute bottom-12 left-12 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <p className="text-sm text-zinc-400">Atendimento em</p>
                <h3 className="text-2xl font-bold">São Paulo e Região</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black">
            Por que escolher um atendimento móvel?
          </h2>

          <p className="text-zinc-400 mt-5 text-lg">
            Um serviço pensado para quem não quer perder tempo em filas ou
            deixar o aparelho dias em uma assistência técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#FA7014] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FA7014]/10 flex items-center justify-center mb-5">
                <div className="w-6 h-6 rounded-full bg-[#FA7014]" />
              </div>

              <p className="text-lg text-zinc-200 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-white/[0.03] border-y border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="text-[#FA7014] font-semibold uppercase tracking-widest text-sm">
                Serviços
              </span>

              <h2 className="text-4xl lg:text-5xl font-black mt-3">
                Reparos mais procurados
              </h2>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              className="bg-[#FA7014] text-black font-bold px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              Chamar no WhatsApp
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#151515] border border-white/10 rounded-3xl p-8 hover:border-[#FA7014] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-zinc-400 mt-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="min-w-14 h-14 rounded-2xl bg-[#FA7014] flex items-center justify-center text-black font-black text-xl">
                    0{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black">
            Como funciona?
          </h2>

          <p className="text-zinc-400 mt-5 text-lg">
            Processo simples, rápido e transparente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              step: '1',
              title: 'Entre em contato',
              desc: 'Você envia o problema do aparelho e recebe um orçamento rápido.',
            },
            {
              step: '2',
              title: 'Agendamos o atendimento',
              desc: 'Vamos até sua residência, trabalho ou condomínio no horário combinado.',
            },
            {
              step: '3',
              title: 'Reparo realizado no local',
              desc: 'O serviço é feito no veículo técnico com total praticidade e segurança.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#FA7014] text-black font-black text-2xl flex items-center justify-center mx-auto">
                {item.step}
              </div>

              <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#FA7014] to-[#ff8c3a] rounded-[40px] p-10 lg:p-16 text-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                Seu iPhone quebrou?
              </h2>

              <p className="text-lg mt-5 text-black/80 leading-relaxed">
                Solicite agora mesmo um orçamento rápido pelo WhatsApp e receba
                atendimento no local.
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              className="bg-black text-white px-8 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export function LandingPageV2() {
  const whatsappNumber = '5511999999999'
  const whatsappMessage = encodeURIComponent(
    'Olá! Quero um orçamento para conserto do meu iPhone.'
  )

  const testimonials = [
    {
      name: 'Carlos Henrique',
      text: 'Atendimento extremamente rápido. Meu iPhone ficou pronto em menos de 40 minutos.',
    },
    {
      name: 'Mariana Souza',
      text: 'Achei muito mais prático do que deixar o celular em assistência técnica.',
    },
    {
      name: 'Felipe Costa',
      text: 'Profissional transparente e serviço impecável.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,112,20,0.35),_transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 border border-[#FA7014]/30 bg-[#FA7014]/10 rounded-full px-5 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#FA7014] animate-pulse" />
                <span className="text-sm text-zinc-300">
                  Atendimento express em São Paulo
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Assistência técnica
                <span className="text-[#FA7014] block">Premium para iPhone</span>
              </h1>

              <p className="text-zinc-400 text-xl leading-relaxed mt-8 max-w-2xl">
                Reparo profissional realizado diretamente no local.
                Atendimento rápido, seguro e sem burocracia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  className="bg-[#FA7014] text-black px-8 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#FA7014]/30"
                >
                  Fazer orçamento agora
                </a>

                <a
                  href="#depoimentos"
                  className="border border-white/15 px-8 py-5 rounded-2xl font-semibold hover:border-[#FA7014] transition-all duration-300"
                >
                  Ver avaliações
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#FA7014]/20 blur-[120px]" />

              <div className="relative bg-zinc-950 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
                  alt="iPhone"
                  className="w-full h-[700px] object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-10">
                  <h3 className="text-4xl font-black text-[#FA7014]">
                    Atendimento móvel
                  </h3>

                  <p className="text-zinc-300 mt-2 text-lg">
                    Sem fila. Sem deixar o aparelho em loja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: '+500',
              subtitle: 'iPhones reparados',
            },
            {
              title: '40min',
              subtitle: 'Tempo médio',
            },
            {
              title: 'Garantia',
              subtitle: 'Em todos os serviços',
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="text-5xl font-black text-[#FA7014]">
                {item.title}
              </h2>
              <p className="text-zinc-400 mt-3 text-lg">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="depoimentos" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <span className="text-[#FA7014] uppercase tracking-[0.3em] text-sm font-bold">
            Depoimentos
          </span>

          <h2 className="text-5xl font-black mt-5 leading-tight">
            Clientes que aprovaram o atendimento
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8 hover:border-[#FA7014]/40 transition-all duration-300"
            >
              <div className="flex gap-1 text-[#FA7014] text-xl mb-6">
                ★★★★★
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p className="text-zinc-500 mt-1">Cliente verificado</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] border border-[#FA7014]/20 bg-[#FA7014]/10 p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,112,20,0.35),_transparent_30%)]" />

          <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <div className="max-w-3xl">
              <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                Seu iPhone merece um reparo profissional.
              </h2>

              <p className="text-zinc-300 text-xl mt-6 leading-relaxed">
                Chame agora no WhatsApp e receba atendimento móvel com rapidez e segurança.
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              className="bg-[#FA7014] text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Solicitar atendimento
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
