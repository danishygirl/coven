window.COVEN_CONTENT = {
  meta: {
    title: "COVEN",
    subtitle: "Uma crônica de rivalidade, sangue e legado",
    season: "TEMPORADA I",
    city: "New Orleans, 2026",
    xp: 1745,
    level: 16,
    profile: "COVEN // CRÔNICA 01"
  },

  home: {
    eyebrow: "ARQUIVO DA CRÔNICA",
    title: "COVEN",
    body: "Em uma Nova Orleans onde linhagens antigas voltam a disputar território, jovens bruxas e bruxos descobrem que a guerra pelo próximo legado não envolve apenas o Coven. Criaturas místicas, sociedades rivais e civis comuns são puxados para uma trama em que cada pacto deixa uma cicatriz.",
    primaryCta: "Abrir crônica",
    secondaryCta: "Ver personagens",
    notice: "Conteúdo centralizado em site-data.js — altere títulos, textos, XP, personagens, episódios e cartas direto pelo GitHub.",
    quickLinks: [
      { label: "Dossiê atual", value: "Episódio 01 — O Sino da Meia-Noite", route: "episodios" },
      { label: "Local em foco", value: "Maison Vesper", route: "mapa" },
      { label: "Risco arcano", value: "Elevado", route: "desafios" }
    ]
  },

  characters: [
    {
      id: "finalgirl",
      name: "Mississipi Sawyer",
      role: "Bruxa • Herdeira contestada",
      faction: "Casa Vesper",
      xp: 1260,
      status: "ATIVA",
      image: "assets/portrait-selene.png",
      quote: "She's my sister and she's no bitch, but I am.",
      bio: "Criada para assumir um lugar que talvez nunca tenha desejado, Selene chega ao Coven carregando o peso de uma linhagem antiga e o rumor de que sua magia desperta fenômenos que ninguém consegue explicar.",
      traits: ["Telecinese", "Pirocinese", "Pressentimento", "Concilium"],
      secret: "É cantora."
    },
    {
      id: "dorian",
      name: "Dorian Blackthorn",
      role: "Bruxo • Rival acadêmico",
      faction: "Círculo Blackthorn",
      xp: 1180,
      status: "OBSERVADO",
      image: "assets/portrait-dorian.svg",
      quote: "Toda tradição existe até alguém poderoso o bastante decidir quebrá-la.",
      bio: "Talentoso, ambicioso e cercado por aliados, Dorian acredita que o Coven se tornou complacente. Ele não quer apenas entrar para a história — quer decidir quem poderá escrevê-la.",
      traits: ["Concilium", "Transmutação", "Rituais"],
      secret: "Mantém encontros secretos com uma sociedade de ocultistas civis."
    },
    {
      id: "mara",
      name: "Mara Baptiste",
      role: "Feiticeira • Guardiã de pactos",
      faction: "Irmandade do Bayou",
      xp: 990,
      status: "NEUTRA",
      image: "assets/portrait-mara.svg",
      quote: "Você chama de maldição porque nunca aprendeu a negociar com ela.",
      bio: "Mara transita entre a cidade e os pântanos, mediando promessas antigas entre bruxas, espíritos e criaturas que não reconhecem as leis humanas.",
      traits: ["Vitalum Vitalis", "Necromancia", "Vínculos espirituais"],
      secret: "Sabe o nome verdadeiro da entidade que protege o Coven."
    },
    {
      id: "naomi",
      name: "Naomi Reed",
      role: "Civil • Investigadora independente",
      faction: "Sem coven",
      xp: 620,
      status: "EXPOSTA",
      image: "assets/portrait-naomi.svg",
      quote: "Toda cidade tem segredos. Esta só é pior em escondê-los.",
      bio: "Após um desaparecimento ligado a uma família tradicional de New Orleans, Naomi começa a mapear incidentes que a polícia prefere tratar como coincidência.",
      traits: ["Investigação", "Persuasão", "Arquivos"],
      secret: "Carrega sem saber um objeto capaz de bloquear influência mental."
    },
    {
      id: "lucien",
      name: "Lucien Armand",
      role: "Criatura mística • Diplomata noturno",
      faction: "Corte de Saint-Clair",
      xp: 1450,
      status: "HOSTIL?",
      image: "assets/portrait-lucien.svg",
      quote: "Imortalidade é apenas tempo suficiente para acumular inimigos melhores.",
      bio: "Elegante e indecifrável, Lucien representa uma antiga corte de criaturas noturnas. Sua presença no Coven sugere que a guerra arcana ultrapassará rapidamente as paredes da academia.",
      traits: ["Regeneração", "Influência", "Sentidos ampliados"],
      secret: "Procura uma das Sete Maravilhas por razões que se recusam a explicar."
    }
     {
      id: "finalgirl",
      name: "Mississipi Sawyer",
      role: "Bruxa • Herdeira contestada",
      faction: "Casa Vesper",
      xp: 1260,
      status: "ATIVA",
      image: "assets/portrait-selene.png",
      quote: "She's my sister and she's no bitch, but I am.",
      bio: "Criada para assumir um lugar que talvez nunca tenha desejado, Selene chega ao Coven carregando o peso de uma linhagem antiga e o rumor de que sua magia desperta fenômenos que ninguém consegue explicar.",
      traits: ["Telecinese", "Pirocinese", "Pressentimento", "Concilium"],
      secret: "É cantora."
    }
   {
      id: "finalgirl",
      name: "Mississipi Sawyer",
      role: "Bruxa • Herdeira contestada",
      faction: "Casa Vesper",
      xp: 1260,
      status: "ATIVA",
      image: "assets/portrait-selene.png",
      quote: "She's my sister and she's no bitch, but I am.",
      bio: "Criada para assumir um lugar que talvez nunca tenha desejado, Selene chega ao Coven carregando o peso de uma linhagem antiga e o rumor de que sua magia desperta fenômenos que ninguém consegue explicar.",
      traits: ["Telecinese", "Pirocinese", "Pressentimento", "Concilium"],
      secret: "É cantora."
    }
  ],

  challenges: [
    {
      title: "Pensamento Rápido",
      tier: "DESAFIO PROGRESSIVO II",
      xp: 300,
      progress: 18,
      goal: 45,
      description: "Use feitiços, relíquias ou improvisos para cegar, desorientar ou interromper um adversário 45 vezes.",
      reward: "Tonalidade rara + 300 XP"
    },
    {
      title: "Dívida de Sangue",
      tier: "DESAFIO DE HISTÓRIA",
      xp: 500,
      progress: 2,
      goal: 5,
      description: "Descubra cinco nomes ligados ao pacto original da Maison Vesper.",
      reward: "Carta de ritual + acesso ao arquivo selado"
    },
    {
      title: "Sem Testemunhas",
      tier: "DESAFIO DE RISCO",
      xp: 220,
      progress: 3,
      goal: 8,
      description: "Resolva oito cenas sobrenaturais sem expor a existência do Coven a civis desinformados.",
      reward: "220 XP + influência civil"
    },
    {
      title: "Rivalidade Antiga",
      tier: "DESAFIO DE FACÇÃO",
      xp: 400,
      progress: 1,
      goal: 4,
      description: "Vença quatro conflitos sociais ou mágicos contra membros do Círculo Blackthorn.",
      reward: "400 XP + reputação"
    }
  ],

  locations: [
    {
      id: "vesper",
      name: "Maison Vesper",
      type: "Sede do Coven",
      danger: "MÉDIO",
      image: "assets/location-vesper.svg",
      description: "Uma mansão centenária escondida atrás de jardins densos. Dormitórios, salões de ritual e uma ala interditada convivem sob o mesmo teto.",
      hooks: ["Ala interditada", "Sala das Sete", "Jardim de ossos"]
    },
    {
      id: "cemetery",
      name: "Cemitério Saint Verity",
      type: "Zona espiritual",
      danger: "ALTO",
      image: "assets/location-cemetery.svg",
      description: "Túmulos elevados, estátuas gastas e corredores que parecem mudar de lugar depois da meia-noite.",
      hooks: ["Cripta sem nome", "Procissão fantasma", "Símbolo Blackthorn"]
    },
    {
      id: "bayou",
      name: "Bayou des Morts",
      type: "Território neutro",
      danger: "SEVERO",
      image: "assets/location-bayou.svg",
      description: "Águas escuras cercadas por ciprestes. Aqui, velhas entidades cobram promessas com juros.",
      hooks: ["Cabana Baptiste", "Ponte submersa", "O círculo de velas"]
    },
    {
      id: "nocturne",
      name: "Nocturne Club",
      type: "Fachada civil",
      danger: "VARIÁVEL",
      image: "assets/location-nocturne.svg",
      description: "Um clube sofisticado frequentado por artistas, políticos, ocultistas e predadores que preferem parecer humanos.",
      hooks: ["Subsolo privado", "Salão de espelhos", "Corte Saint-Clair"]
    }
  ],

  episodes: [
    {
      number: "01",
      title: "O Sino da Meia-Noite",
      duration: "58 min",
      status: "DISPONÍVEL",
      summary: "Uma nova turma chega à Maison Vesper na mesma noite em que um sino, selado por décadas, volta a tocar sozinho. O primeiro ritual termina com uma profecia incompleta e um nome riscado da lista de herdeiros.",
      transcript: "Registro da Diretora — 00:17. A casa reconheceu alguém esta noite. Não sei quem. As velas acenderam sem invocação, e a porta da ala norte abriu por exatos sete segundos."
    },
    {
      number: "02",
      title: "A Casa Não Dorme",
      duration: "64 min",
      status: "BLOQUEADO",
      summary: "Os corredores da mansão começam a repetir memórias que não pertencem aos moradores atuais. Enquanto isso, Dorian recebe uma oferta impossível de recusar.",
      transcript: "Desbloqueie o episódio ao concluir 'Dívida de Sangue'."
    },
    {
      number: "03",
      title: "O Baile dos Mortos",
      duration: "71 min",
      status: "BLOQUEADO",
      summary: "Uma festa mascarada une três facções rivais. O acordo de paz dura até a primeira taça cair no chão.",
      transcript: "Conteúdo ainda selado."
    }
  ],

  wonders: [
    {
      name: "Telecinese",
      rarity: "I",
      symbol: "✦",
      level: 1,
      description: "Mover, conter ou arremessar objetos e pessoas com a força da mente.",
      trial: "Erguer três objetos simultaneamente sob pressão.",
      cost: "Fadiga mental"
    },
    {
      name: "Concilium",
      rarity: "II",
      symbol: "◉",
      level: 2,
      description: "Influenciar pensamentos, impulsos e decisões de outra mente.",
      trial: "Romper uma resistência consciente sem causar dano.",
      cost: "Risco de eco psíquico"
    },
    {
      name: "Transmutação",
      rarity: "III",
      symbol: "⟡",
      level: 3,
      description: "Deslocar-se instantaneamente por curtas distâncias, atravessando o espaço como um salto arcano.",
      trial: "Cruzar uma barreira selada e retornar.",
      cost: "Desorientação"
    },
    {
      name: "Divinação",
      rarity: "III",
      symbol: "☾",
      level: 3,
      description: "Perceber rastros, presenças, objetos ocultos e fragmentos de futuros possíveis.",
      trial: "Encontrar o objeto perdido sem pistas físicas.",
      cost: "Visões intrusivas"
    },
    {
      name: "Vitalum Vitalis",
      rarity: "IV",
      symbol: "✚",
      level: 4,
      description: "Transferir energia vital, restaurando ou drenando a força de um ser vivo.",
      trial: "Estabilizar alguém à beira da morte.",
      cost: "Vínculo temporário"
    },
    {
      name: "Pirocinese",
      rarity: "V",
      symbol: "△",
      level: 5,
      description: "Criar, controlar e extinguir fogo por vontade arcana.",
      trial: "Conter uma chama ritual sem deixá-la consumir o círculo.",
      cost: "Instabilidade emocional"
    },
    {
      name: "Descensum",
      rarity: "VII",
      symbol: "⬟",
      level: 7,
      description: "Descer a um domínio espiritual pessoal e retornar com consciência intacta.",
      trial: "Voltar antes que a porta se feche.",
      cost: "Algo pode retornar junto"
    }
  ]
};
