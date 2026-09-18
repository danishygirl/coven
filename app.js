(() => {
  const data = window.COVEN_CONTENT;
  const app = document.getElementById('app');
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.menu-toggle');

  const routes = ['home', 'personagens', 'desafios', 'mapa', 'episodios', 'deck'];
  const state = { character: 0, location: 0, episode: 0, wonder: 0 };

  const safeRoute = () => {
    const hash = location.hash.replace('#', '') || 'home';
    return routes.includes(hash) ? hash : 'home';
  };

  const go = (route) => { location.hash = route; };

  function formatXp(n) {
    return new Intl.NumberFormat('pt-BR').format(n);
  }

  function hydrateShell() {
    document.title = data.meta.title;
    document.getElementById('profile-name').textContent = data.meta.profile;
    document.getElementById('profile-meta').textContent = `NÍVEL ${data.meta.level} · ${formatXp(data.meta.xp)} XP`;
    document.getElementById('footer-season').textContent = `${data.meta.season} · ${data.meta.city}`;
  }

  function setActiveNav(route) {
    document.querySelectorAll('[data-route]').forEach(el => el.classList.toggle('active', el.dataset.route === route));
  }

  function renderHome() {
    const h = data.home;
    return `
      <section class="view home-view">
        <div class="hero-backdrop"></div>
        <div class="hero-content">
          <div class="hero-copy">
            <div class="eyebrow">${h.eyebrow}</div>
            <h1>${h.title}</h1>
            <p>${h.body}</p>
            <div class="hero-actions">
              <button class="btn primary" data-go="episodios">${h.primaryCta}</button>
              <button class="btn" data-go="personagens">${h.secondaryCta}</button>
            </div>
            <div class="notice">${h.notice}</div>
          </div>
          <div class="quick-stack">
            ${h.quickLinks.map(q => `
              <button class="quick-card" data-go="${q.route}">
                <span><small>${q.label}</small><strong>${q.value}</strong></span><b>›</b>
              </button>
            `).join('')}
          </div>
        </div>
      </section>`;
  }

  function characterDetail(c) {
    return `
      <img class="portrait-mini" src="${c.image}" alt="Retrato estilizado de ${c.name}">
      <div class="role">${c.role}</div>
      <h2>${c.name}</h2>
      <div class="badges"><span class="badge">${c.faction}</span><span class="badge">${formatXp(c.xp)} XP</span><span class="badge">${c.status}</span></div>
      <blockquote>“${c.quote}”</blockquote>
      <p>${c.bio}</p>
      <div class="badges">${c.traits.map(t => `<span class="badge">${t}</span>`).join('')}</div>
      <div class="secret"><strong>Informação do narrador</strong><p>${c.secret}</p></div>`;
  }

  function renderCharacters() {
    return `
      <section class="view">
        <header class="section-head">
          <div><div class="eyebrow">ARQUIVO DE PERSONAGENS</div><h1 class="page-title">Quem entra no círculo?</h1><p class="page-lede">Bruxas, bruxos, criaturas e civis. Clique em um dossiê para abrir detalhes sem sair da página.</p></div>
          <div class="hud-number">${String(data.characters.length).padStart(2,'0')}</div>
        </header>
        <div class="split-layout">
          <div class="character-grid">
            ${data.characters.map((c,i) => `
              <article class="character-card ${i===state.character?'active':''}" data-character="${i}">
                <img src="${c.image}" alt="Retrato estilizado de ${c.name}">
                <div class="character-info"><small>${c.status}</small><h3>${c.name}</h3><p>${c.role}</p></div>
              </article>`).join('')}
          </div>
          <aside class="panel detail-panel" id="character-detail">${characterDetail(data.characters[state.character])}</aside>
        </div>
      </section>`;
  }

  function renderChallenges() {
    return `
      <section class="view">
        <header class="section-head"><div><div class="eyebrow">XP & PROGRESSÃO</div><h1 class="page-title">Desafios da temporada</h1><p class="page-lede">Metas opcionais e objetivos de história. Edite progresso, recompensas e XP no arquivo de conteúdo.</p></div><div class="hud-number">${formatXp(data.meta.xp)} XP</div></header>
        <div class="challenge-grid">
          ${data.challenges.map(c => {
            const pct = Math.min(100, Math.round((c.progress / c.goal) * 100));
            return `<article class="challenge-card">
              <div class="challenge-tier"><span>${c.tier}</span><span>+${c.xp} XP</span></div>
              <h3>${c.title}</h3><p>${c.description}</p>
              <div class="progress" aria-label="Progresso ${c.progress} de ${c.goal}"><span style="width:${pct}%"></span></div>
              <div class="challenge-foot"><span>${c.progress} / ${c.goal}</span><span>${pct}%</span></div>
              <div class="reward">RECOMPENSA · ${c.reward}</div>
            </article>`;
          }).join('')}
        </div>
      </section>`;
  }

  function locationStage(l) {
    return `<img src="${l.image}" alt="Ilustração de ${l.name}"><div class="location-overlay"><div><div class="eyebrow">${l.type}</div><h2>${l.name}</h2><p>${l.description}</p><div class="badges">${l.hooks.map(h => `<span class="badge">${h}</span>`).join('')}</div></div><div class="danger"><small>NÍVEL DE RISCO</small><strong>${l.danger}</strong></div></div>`;
  }

  function renderMap() {
    return `
      <section class="view">
        <header class="section-head"><div><div class="eyebrow">MAPA / LOCAIS</div><h1 class="page-title">New Orleans oculta</h1><p class="page-lede">Escolha um local. A imagem e os ganchos mudam no mesmo painel — sem abrir uma nova página.</p></div><div class="hud-number">04</div></header>
        <div class="map-layout">
          <div class="location-list">${data.locations.map((l,i) => `<button class="location-item ${i===state.location?'active':''}" data-location="${i}"><small>${l.type}</small><strong>${l.name}</strong></button>`).join('')}</div>
          <div class="map-stage" id="map-stage">${locationStage(data.locations[state.location])}</div>
        </div>
      </section>`;
  }

  function episodeDetail(e) {
    const locked = e.status !== 'DISPONÍVEL';
    return `<div class="eyebrow">GRAVAÇÃO // EPISÓDIO ${e.number}</div><h2>${e.title}</h2><div class="playbar"><button class="play" ${locked?'disabled':''} aria-label="${locked?'Episódio bloqueado':'Reproduzir narração'}">${locked?'×':'▶'}</button><div class="wave"><span></span></div><small>${e.duration}</small></div><p>${e.summary}</p><p class="transcript">${e.transcript}</p>`;
  }

  function renderEpisodes() {
    return `
      <section class="view">
        <header class="section-head"><div><div class="eyebrow">EPISÓDIOS / NARRAÇÕES</div><h1 class="page-title">Arquivo da crônica</h1><p class="page-lede">Uma biblioteca de episódios com resumo, status e um player visual para suas narrações.</p></div><div class="hud-number">REC</div></header>
        <div class="episodes">
          <div class="episode-list">${data.episodes.map((e,i)=>`<button class="episode-row ${i===state.episode?'active':''}" data-episode="${i}"><span class="ep-num">${e.number}</span><span><h3>${e.title}</h3><small>${e.duration}</small></span><span class="status">${e.status}</span></button>`).join('')}</div>
          <aside class="panel recording" id="recording">${episodeDetail(data.episodes[state.episode])}</aside>
        </div>
      </section>`;
  }

  function wonderDetail(w) {
    return `<div class="eyebrow">CARTA DE PODER // ${w.rarity}</div><div class="big-symbol">${w.symbol}</div><h2>${w.name}</h2><p>${w.description}</p><div class="statline"><span>Prova</span><strong>${w.trial}</strong></div><div class="statline"><span>Custo</span><strong>${w.cost}</strong></div><div class="statline"><span>Nível</span><strong>${w.level}</strong></div>`;
  }

  function renderDeck() {
    return `
      <section class="view">
        <header class="section-head"><div><div class="eyebrow">DECK ARCANO</div><h1 class="page-title">As Sete Maravilhas</h1><p class="page-lede">Um deck interativo para o sistema de poderes. Passe o mouse sobre as cartas e clique para abrir a ficha.</p></div><div class="hud-number">7 / 7</div></header>
        <div class="deck-shell">
          <div class="deck-grid">${data.wonders.map((w,i)=>`<article class="wonder-card ${i===state.wonder?'active':''}" data-wonder="${i}"><span class="card-rarity">${w.rarity}</span><span class="card-symbol">${w.symbol}</span><span class="card-name">${w.name}</span></article>`).join('')}</div>
          <aside class="panel deck-detail" id="deck-detail">${wonderDetail(data.wonders[state.wonder])}</aside>
        </div>
      </section>`;
  }

  function bind() {
    document.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', () => go(el.dataset.go)));

    document.querySelectorAll('[data-character]').forEach(el => el.addEventListener('click', () => {
      state.character = +el.dataset.character;
      document.querySelectorAll('[data-character]').forEach((x,i)=>x.classList.toggle('active', i===state.character));
      document.getElementById('character-detail').innerHTML = characterDetail(data.characters[state.character]);
    }));

    document.querySelectorAll('[data-location]').forEach(el => el.addEventListener('click', () => {
      state.location = +el.dataset.location;
      document.querySelectorAll('[data-location]').forEach((x,i)=>x.classList.toggle('active', i===state.location));
      document.getElementById('map-stage').innerHTML = locationStage(data.locations[state.location]);
    }));

    document.querySelectorAll('[data-episode]').forEach(el => el.addEventListener('click', () => {
      state.episode = +el.dataset.episode;
      document.querySelectorAll('[data-episode]').forEach((x,i)=>x.classList.toggle('active', i===state.episode));
      document.getElementById('recording').innerHTML = episodeDetail(data.episodes[state.episode]);
      bindPlay();
    }));

    document.querySelectorAll('[data-wonder]').forEach(el => el.addEventListener('click', () => {
      state.wonder = +el.dataset.wonder;
      document.querySelectorAll('[data-wonder]').forEach((x,i)=>x.classList.toggle('active', i===state.wonder));
      document.getElementById('deck-detail').innerHTML = wonderDetail(data.wonders[state.wonder]);
    }));

    bindPlay();
  }

  function bindPlay() {
    const play = document.querySelector('.play:not([disabled])');
    if (!play) return;
    play.addEventListener('click', () => {
      const wave = play.parentElement.querySelector('.wave');
      const isPlaying = wave.classList.toggle('playing');
      play.textContent = isPlaying ? 'Ⅱ' : '▶';
      if (!isPlaying) { wave.querySelector('span').style.transition = 'none'; wave.querySelector('span').style.width = '0'; requestAnimationFrame(()=> { wave.querySelector('span').style.transition = ''; }); }
    });
  }

  function render() {
    const route = safeRoute();
    setActiveNav(route);
    const views = { home:renderHome, personagens:renderCharacters, desafios:renderChallenges, mapa:renderMap, episodios:renderEpisodes, deck:renderDeck };
    app.innerHTML = views[route]();
    bind();
    nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    window.scrollTo({ top:0, behavior:'instant' });
  }

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  window.addEventListener('hashchange', render);
  hydrateShell();
  render();
})();
