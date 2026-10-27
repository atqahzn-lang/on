/* Catch files to collect reports. No menu or checkpoint text on either display. */
(() => {
  const byId = id => document.getElementById(id);
  const cases = META_CONFIG.cases.filter(data => data.menuTitle);
  const storageKey = 'so-meta-caught-cases-v1';
  let saved = [];
  try { const value = JSON.parse(sessionStorage.getItem(storageKey) ?? '[]'); if (Array.isArray(value)) saved = value; } catch {}
  const engine = new CaseCatchEngine(cases.map(data => data.id), saved);
  const arena = byId('catch-arena'), cat = byId('catch-cat');
  const fileNodes = new Map(), keys = new Set(), pointers = new Map();
  let paused = false, previousTime = null, noticeUntil = 0;
  const isBlocked = () => paused || document.hidden || MetaReports.isOpen();
  const instruction = () => engine.complete ? 'All cases collected! Select a case to read.' : 'Move the cat beneath a falling file.';
  function measure() {
    const width = arena.clientWidth, height = arena.clientHeight;
    if (!width || !height) return;
    engine.catWidth = cat.offsetWidth / width;
    engine.catHeight = cat.offsetHeight / height;
    engine.catTop = 1 - (cat.offsetHeight + 16) / height;
    engine.fileWidth = Math.max(36, Math.min(48, width * .1)) / width;
    engine.fileHeight = 48 / height;
    engine.moveTo(engine.catX);
  }
  function renderCollection() {
    const list = byId('collected-cases');list.replaceChildren();
    for (const data of cases) {
      const caught = engine.collected.has(data.id);
      const button = document.createElement('button');button.type = 'button';button.className = 'collected-case';button.disabled = !caught;
      const number = document.createElement('span');number.className = 'collected-number';number.textContent = data.id;
      const label = document.createElement('span');label.textContent = caught ? data.menuTitle : 'Catch to collect';
      button.append(number, label);
      button.setAttribute('aria-label', caught ? `Read case ${data.id}: ${data.menuTitle}` : `Case ${data.id}, not collected yet`);
      button.addEventListener('click', () => {
        keys.clear();pointers.clear();
        MetaReports.open(META_CONFIG.cases.indexOf(data));
        document.querySelector('dialog.meta-report').classList.add('caught-case-report');
      });list.append(button);
    }
    byId('catch-counter').textContent = `${engine.collected.size} / ${cases.length} collected`;
    byId('collection-progress').textContent = `${engine.collected.size} of ${cases.length} cases collected`;
  }
  function paint() {
    cat.style.left = `${engine.catX * 100}%`;
    const active = new Set(engine.files.map(file => file.key));
    for (const [key,node] of fileNodes) if (!active.has(key)) {node.remove();fileNodes.delete(key);}
    for (const file of engine.files) {
      let node = fileNodes.get(file.key);
      if (!node) {node=document.createElement('div');node.className='falling-case';node.textContent=file.id;byId('falling-cases').append(node);fileNodes.set(file.key,node);}
      node.style.left = `${file.x * 100}%`;node.style.top = `${file.y * 100}%`;
    }
  }
  function frame(time) {
    const dt = previousTime === null ? 0 : (time - previousTime) / 1000;previousTime = time;
    const blocked = isBlocked();
    const direction = Math.sign((keys.has('ArrowRight') || keys.has('d') || [...pointers.values()].includes(1) ? 1 : 0) - (keys.has('ArrowLeft') || keys.has('a') || [...pointers.values()].includes(-1) ? 1 : 0));
    cat.classList.toggle('walking', !blocked && direction !== 0 && !engine.complete);
    if (!blocked) {
      const caught = engine.tick(dt, direction);
      if (caught.length) {
        try {sessionStorage.setItem(storageKey, JSON.stringify([...engine.collected]));} catch {}
        renderCollection();byId('catch-instruction').textContent = engine.complete ? instruction() : `Case ${caught[0]} collected! Select it at the top right.`;noticeUntil=time+2400;
      }
      if (time >= noticeUntil) byId('catch-instruction').textContent = instruction();
      paint();
    }
    byId('arena-state').hidden = !paused && !engine.complete;
    byId('arena-state').textContent = engine.complete ? 'ALL CASES COLLECTED' : 'PAUSED';
    requestAnimationFrame(frame);
  }
  function togglePause() {
    if (MetaReports.isOpen()) return;
    paused=!paused;keys.clear();pointers.clear();
    byId('pause-game').textContent=paused?'Resume':'Pause';byId('pause-game').setAttribute('aria-pressed',String(paused));
  }
  for (const [selector, direction] of [['#move-left',-1],['#move-right',1],['.dpad .left',-1],['.dpad .right',1]]) {
    const button=document.querySelector(selector);
    button.addEventListener('pointerdown',event=>{event.preventDefault();button.setPointerCapture(event.pointerId);pointers.set(event.pointerId,direction);});
    const clear=event=>pointers.delete(event.pointerId);
    button.addEventListener('pointerup',clear);button.addEventListener('pointercancel',clear);button.addEventListener('lostpointercapture',clear);
    button.addEventListener('click',event=>{if(event.detail===0&&!isBlocked()){engine.moveTo(engine.catX+direction*.1);paint();}});
  }
  document.addEventListener('keydown',event=>{
    if (MetaReports.isOpen() || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    const key=event.key.length===1?event.key.toLowerCase():event.key;
    if (['ArrowLeft','ArrowRight','a','d'].includes(key)) {event.preventDefault();keys.add(key);}
    if (key===' '&&!event.repeat&&event.target===arena) {event.preventDefault();togglePause();}
  });
  document.addEventListener('keyup',event=>keys.delete(event.key.length===1?event.key.toLowerCase():event.key));
  window.addEventListener('blur',()=>{keys.clear();pointers.clear();});
  document.addEventListener('visibilitychange',()=>{keys.clear();pointers.clear();previousTime=null;});
  document.querySelector('dialog.meta-report').addEventListener('close',()=>{document.querySelector('dialog.meta-report').classList.remove('caught-case-report');previousTime=null;});
  byId('pause-game').addEventListener('click',togglePause);
  byId('button-a').addEventListener('click',togglePause);byId('button-b').addEventListener('click',togglePause);
  new ResizeObserver(measure).observe(arena);
  measure();renderCollection();paint();byId('catch-instruction').textContent=instruction();
  requestAnimationFrame(frame);
})();
