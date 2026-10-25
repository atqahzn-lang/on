/* Shared, data-driven report popup. See REPORT-TEMPLATE.md for per-case options. */
(() => {
  const cases = META_CONFIG.cases;
  const dialog = document.createElement('dialog');
  dialog.className = 'meta-report';
  dialog.setAttribute('aria-labelledby', 'mr-window-title');
  dialog.innerHTML = `
    <header class="popup-toolbar">
      <strong id="mr-window-title">Meta case studies</strong>
      <button type="button" class="popup-close" aria-label="Close report">×</button>
    </header>
    <div class="popup-scroll">
      <nav class="case-picker" aria-label="Choose a Meta case study"></nav>
      <article class="case-report" hidden>
        <p class="case-context" data-field="context"></p>
        <p class="case-name" data-field="title"></p>
        <section class="report-header">
          <div class="report-narrative">
            <h1 data-field="challenge"></h1>
            <p data-field="problem"></p>
          </div>
          <div class="chart-panel"></div>
        </section>
        <section class="dot-section">
          <h2 data-field="dot-title"></h2><p class="dot-scale" data-field="dot-scale"></p>
          <div class="dot-comparison"></div><p class="dot-note" data-field="dot-note"></p>
        </section>
        <section class="execution-section">
          <span class="execution-eyebrow">Execution</span>
          <h2 class="execution-heading" data-field="execution-heading"></h2>
          <div class="solution-box"><h3>Solution</h3><p data-field="solution"></p></div>
          <div class="execution-board">
            <div class="dial-viewport" aria-label="Swipe horizontally to navigate execution stages">
              <svg id="mr-execution-dial" viewBox="0 0 340 320" role="group" aria-label="Interactive execution timeline"></svg>
            </div>
            <div class="dial-copy" aria-live="polite">
              <span class="stage-label" data-field="stage-label"></span>
              <h3 class="stage-title" data-field="stage-title"></h3>
              <p class="stage-description" data-field="stage-description"></p>
              <div class="stage-navigation">
                <button type="button" data-action="stage-prev">← PREVIOUS</button>
                <span class="stage-counter" data-field="stage-counter"></span>
                <button type="button" data-action="stage-next">NEXT →</button>
              </div>
            </div>
          </div>
          <details class="process-disclosure"><summary>
            <span><span class="process-summary-title">Skip the dial — view the complete process</span>
            <span class="process-summary-subtitle" data-field="process-subtitle"></span></span>
            <span class="process-chevron" aria-hidden="true">⌄</span>
          </summary><div class="process-timeline"></div></details>
        </section>
        <section class="conclusion-section">
          <span class="execution-eyebrow">Outcome</span>
          <h2 class="conclusion-heading" data-field="outcome-heading"></h2>
          <p class="outcome-summary" data-field="outcome"></p>
          <div class="conclusion-grid"></div><p class="conclusion-footnote" data-field="footnote"></p>
        </section>
        <section class="weekly-section" hidden><h2 data-field="weekly-title"></h2>
          <svg class="weekly-chart" viewBox="0 0 800 240" role="img"></svg>
          <p data-field="weekly-note"></p>
        </section>
        <p class="report-nda" data-field="nda"></p>
        <nav class="case-navigation" aria-label="Report navigation">
          <button type="button" data-action="case-prev">← Previous case</button>
          <button type="button" data-action="menu">All case studies</button>
          <button type="button" data-action="case-next">Next case →</button>
        </nav>
      </article>
    </div>`;
  document.body.append(dialog);
  const q = selector => dialog.querySelector(selector);
  const field = (name, value) => { q(`[data-field="${name}"]`).textContent = value ?? ''; };
  const make = (tag, className, content) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content != null) node.textContent = content;
    return node;
  };
  const svgNode = (tag, attrs) => {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };
  const pad = n => String(n).padStart(2, '0');
  let current = 0, stage = 0, steps = [], returnFocus, previousOverflow, dragX = null;
  const scrollTop = () => { q('.popup-scroll').scrollTop = 0; };
  function show() {
    if (!dialog.open) {
      returnFocus = document.activeElement;
      previousOverflow = document.body.style.overflow;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    }
    q('.popup-close').focus();
    scrollTop();
  }
  function close() { if (dialog.open) dialog.close(); }
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow ?? '';
    if (returnFocus?.isConnected) returnFocus.focus();
  });
  q('.popup-close').addEventListener('click', close);
  // Native modal dialogs provide Escape dismissal, focus trapping and background inertness.
  dialog.addEventListener('click', event => { if (event.target === dialog) close(); });

  function menu() {
    q('.case-report').hidden = true;
    q('.case-picker').hidden = false;
    fieldTitle('Meta case studies');
    const picker = q('.case-picker'); picker.replaceChildren();
    const heading = make('h1', '', 'Choose a case study');
    picker.append(heading);
    cases.forEach((data, index) => {
      const button = make('button', 'case-choice'); button.type = 'button';
      button.append(make('span', 'case-choice-number', pad(index + 1)),
        make('strong', '', data.title), make('small', '', data.niche));
      button.addEventListener('click', () => open(index)); picker.append(button);
    });
    show();
  }
  function fieldTitle(value) { q('#mr-window-title').textContent = value; }
  const format = (value, metric) => value == null ? 'Not available' :
    `${metric.prefix ?? ''}${value.toLocaleString('en-US', {minimumFractionDigits: metric.decimals ?? 0, maximumFractionDigits: metric.decimals ?? 0})}${metric.suffix ?? ''}`;

  function objectives(items) {
    const panel = q('.chart-panel'); panel.replaceChildren();
    items.forEach(metric => {
      const chart = make('div', 'metric-chart');
      chart.append(make('div', 'metric-heading', metric.title));
      const pair = make('div', 'bar-pair'), labels = make('div', 'bar-labels');
      const max = Math.max(metric.baseline ?? 0, metric.target ?? 0, 1);
      [metric.baseline, metric.target].forEach((value, i) => {
        const column = make('div', 'bar-column');
        if (typeof value === 'number' && Number.isFinite(value) && value >= 0) {
          const bar = make('div', i ? 'bar target' : 'bar');
          bar.style.setProperty('--bar-height', `${value / max * 100}%`);
          bar.setAttribute('aria-hidden', 'true'); column.append(bar);
        } else column.append(make('span', 'missing-value', '—'));
        pair.append(column);
        const label = make('div', 'bar-label');
        label.append(make('strong', '', format(value, metric)),
          make('span', '', i ? metric.targetLabel ?? 'Target' : metric.baselineLabel ?? 'Baseline'));
        labels.append(label);
      });
      chart.append(pair, labels); panel.append(chart);
    });
  }
  function dots(data) {
    const container = q('.dot-comparison'); container.replaceChildren();
    if (!data) return;
    field('dot-title', data.title); field('dot-scale', `Each dot represents ${data.unitLabel}.`);
    field('dot-note', data.note);
    [data.left, data.right].forEach((item, i) => {
      const group = make('div', 'dot-group'), pile = make('div', `dot-grid${i ? ' revenue' : ''}`);
      const count = Math.round(item.value / data.unit);
      if (Number.isFinite(count) && count >= 0 && count <= 300) {
        for (let j = 0; j < count; j++) { const dot = make('span', 'dot'); dot.setAttribute('aria-hidden','true'); pile.append(dot); }
      } else pile.append(make('p', '', 'Dot visualization unavailable for this quantity.'));
      group.append(pile, make('div', 'dot-value', item.display), make('div', 'dot-description', item.label));
      container.append(group);
    });
  }
  function renderStage(index) {
    if (!steps.length) return;
    stage = Math.max(0, Math.min(index, steps.length - 1));
    field('stage-label', `STAGE ${pad(stage + 1)}`); field('stage-title', steps[stage].title);
    field('stage-description', steps[stage].detail ?? steps[stage].description);
    field('stage-counter', `${stage + 1} / ${steps.length}`);
    q('[data-action="stage-prev"]').disabled = stage === 0;
    q('[data-action="stage-next"]').disabled = stage === steps.length - 1;
    const svg = q('#mr-execution-dial'); const focused = svg.contains(document.activeElement); svg.replaceChildren();
    svg.append(svgNode('circle', {cx:-74,cy:160,r:177,fill:'none',stroke:'var(--border)','stroke-width':2}));
    steps.forEach((step, i) => {
      const angle = (i - stage) * .33, x = -74 + 177 * Math.cos(angle), y = 160 + 177 * Math.sin(angle);
      if (x < 5 || y < 12 || y > 307) return;
      const active = i === stage;
      const group = svgNode('g', {role:'button',tabindex:0,'aria-label':`Stage ${i + 1}: ${step.title}`,'aria-pressed':active});
      const circle = svgNode('circle',{cx:x,cy:y,r:active?25:21,fill:active?'var(--purple)':'var(--page)',stroke:'var(--purple)','stroke-width':1.5});
      const label = svgNode('text',{x,y:y+7,'text-anchor':'middle','font-size':active?21:18,'font-weight':700,fill:active?'var(--page)':'var(--purple)','pointer-events':'none'}); label.textContent=pad(i+1);
      group.append(circle,label); group.addEventListener('click',()=>renderStage(i));
      group.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();renderStage(i);}});
      svg.append(group);
    });
    if (focused) svg.querySelector('[aria-pressed="true"]')?.focus();
  }
  function execution() {
    const timeline = q('.process-timeline'); timeline.replaceChildren();
    q('.process-disclosure').open = false;
    field('process-subtitle', `All ${steps.length} campaign decisions in one timeline`);
    steps.forEach((step,i)=>{
      const item=make('div','process-step');
      item.append(make('span','process-step-number',`STAGE ${pad(i+1)}`),make('h3','',step.title),make('p','',step.detail??step.description));timeline.append(item);
    });
    renderStage(0);
  }
  function weekly(data) {
    const section=q('.weekly-section'), svg=q('.weekly-chart'); svg.replaceChildren();
    const values=(data?.data??[]).filter(d=>Number.isFinite(d.roas)&&d.roas>=0);
    section.hidden=!data;
    if(!data)return;
    field('weekly-title',data.title);field('weekly-note',data.note);
    svg.toggleAttribute("hidden", values.length<2);
    if(values.length<2)return;
    svg.setAttribute('aria-label',`${data.title}: ${values.map(d=>`${d.week}: ${d.roas}`).join(', ')}`);
    const max=Math.max(...values.map(d=>d.roas),data.target??0,1)*1.2;
    const x=i=>45+i*710/(values.length-1),y=v=>200-v/max*170;
    if(Number.isFinite(data.target))svg.append(svgNode('line',{x1:45,x2:755,y1:y(data.target),y2:y(data.target),stroke:'var(--pink)','stroke-dasharray':'6 4'}));
    svg.append(svgNode('polyline',{points:values.map((d,i)=>`${x(i)},${y(d.roas)}`).join(' '),fill:'none',stroke:'var(--purple)','stroke-width':3}));
    values.forEach((d,i)=>{const dot=svgNode('circle',{cx:x(i),cy:y(d.roas),r:4,fill:'var(--purple)'});const title=svgNode('title',{});title.textContent=`${d.week}: ${d.roas}×`;dot.append(title);svg.append(dot);const label=svgNode('text',{x:x(i),y:225,'text-anchor':'middle','font-size':12});label.textContent=d.week;svg.append(label);});
  }
  function open(index=0) {
    current=Math.max(0,Math.min(index,cases.length-1)); const data=cases[current], options=data.report??{};
    const report=q('.case-report'); report.hidden=false; q('.case-picker').hidden=true;
    fieldTitle(`CASE ${data.id} / ${pad(cases.length)} — ${data.niche}`);
    report.dataset.case=data.id; report.classList.toggle('wide-narrative',options.layout==='wide-narrative');
    // Only supported presentation tokens can be overridden; content remains text, not HTML.
    dialog.removeAttribute('style');
    const tokens=['page','text','soft-pink','purple','pink','border','muted','report-padding','section-gap'];
    tokens.forEach(key=>{if(options.theme?.[key])dialog.style.setProperty(`--${key}`,options.theme[key]);});
    field('context',[data.industry, data.market, options.date ?? data.duration].filter(Boolean).join(' · '));
    field('title',data.title);field('challenge',options.challengeTitle??data.challengeTitle);
    field('problem',options.intro??data.problem);
    const solution=options.solution??data.solution;field('solution',solution);
    q('.solution-box').hidden=!solution;
    field('nda',data.nda);field('outcome',data.outcome);field('execution-heading',options.executionHeading??'The decisions behind the results.');
    const hidden=new Set(options.hiddenSections??[]);
    const objectiveItems=data.objectives??[];objectives(objectiveItems);
    q('.chart-panel').hidden=!objectiveItems.length||hidden.has('objectives');
    q('.report-header').classList.toggle('narrative-only',q('.chart-panel').hidden);
    dots(data.dots);q('.dot-section').hidden=!data.dots||hidden.has('dots');
    steps=data.execution??[];stage=0;dragX=null;q('.dial-viewport').classList.remove('dragging');execution();
    q('.execution-board').hidden=!steps.length;
    q('.process-disclosure').hidden=!steps.length;
    q('.execution-section').hidden=(!steps.length&&!solution)||hidden.has('execution');
    field('outcome-heading',options.outcomeHeading??'What changed?');field('footnote',options.footnote??'');
    const grid=q('.conclusion-grid');grid.replaceChildren();
    const results=options.conclusions??(data.results??[]).map(r=>({label:r.label,status:r.value,description:r.description}));
    results.forEach(result=>{const item=make('div','conclusion-item');
      item.append(make('span','conclusion-metric',result.label),make('strong',`conclusion-status ${result.tone==='met'?'met':result.tone==='not-met'?'not-met':''}`,result.status),make('p','',result.description));grid.append(item);});
    q('.conclusion-section').hidden=hidden.has('outcome');weekly(data.weekly);
    if(hidden.has('weekly'))q('.weekly-section').hidden=true;
    q('[data-action="case-prev"]').disabled=current===0;
    q('[data-action="case-next"]').disabled=current===cases.length-1;
    show();
  }
  const actions={'stage-prev':()=>renderStage(stage-1),'stage-next':()=>renderStage(stage+1),'case-prev':()=>open(current-1),'case-next':()=>open(current+1),menu};
  dialog.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>actions[button.dataset.action]()));
  const viewport=q('.dial-viewport');
  viewport.addEventListener('pointerdown',event=>{dragX=event.clientX;viewport.classList.add('dragging');viewport.setPointerCapture?.(event.pointerId);});
  viewport.addEventListener('pointerup',event=>{if(dragX!==null&&Math.abs(event.clientX-dragX)>35)renderStage(stage+(event.clientX<dragX?1:-1));dragX=null;viewport.classList.remove('dragging');});
  viewport.addEventListener('pointercancel',()=>{dragX=null;viewport.classList.remove('dragging');});
  window.MetaReports=Object.freeze({open,openMenu:menu,close,isOpen:()=>dialog.open});
})();
