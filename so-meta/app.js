/* Existing game presentation; explicit start/pause/replay and console controls. */
(() => {
  const byId=id=>document.getElementById(id);
  const cases=META_CONFIG.cases.filter(data=>data.menuTitle);
  const storageKey='so-meta-caught-cases-v1';
  let saved=[];
  try {const value=JSON.parse(sessionStorage.getItem(storageKey)??'[]');if(Array.isArray(value))saved=value;}catch{}
  const engine=new CaseCatchEngine(cases.map(data=>data.id),saved);
  const arena=byId('catch-arena'),cat=byId('catch-cat'),dialog=document.querySelector('dialog.meta-report');
  const fileNodes=new Map(),keys=new Set(),pointers=new Map();
  let started=engine.complete,paused=true,previousTime=null,noticeUntil=0,selectedId=null,facing=1;
  const setText=(id,value)=>{if(byId(id).textContent!==value)byId(id).textContent=value;};
  const clearInput=()=>{keys.clear();pointers.clear();cat.classList.remove('walking');};
  const blocked=()=>!started||paused||document.hidden||MetaReports.isOpen()||engine.complete;
  function defaultInstruction(){
    if(engine.complete)return 'All cases collected! Select a case to read.';
    if(!started)return 'Press Start. Use ← / → or A / D to catch files.';
    if(paused)return 'Paused. Press Resume or Space to keep playing.';
    return 'Move the cat beneath a falling file.';
  }
  function displays(){
    setText('pause-game',engine.complete?'Play again':!started?'Start':paused?'Resume':'Pause');
    byId('pause-game').setAttribute('aria-pressed',String(started&&paused&&!engine.complete));
    byId('arena-state').hidden=started&&!paused&&!engine.complete;
    setText('arena-state',engine.complete?'ALL CASES COLLECTED':!started?'In progress':'PAUSED');
    if(performance.now()>=noticeUntil)setText('catch-instruction',defaultInstruction());
  }
  function announce(message){setText('catch-instruction',message);noticeUntil=performance.now()+2400;}
  function measure(){
    const width=arena.clientWidth,height=arena.clientHeight;if(!width||!height)return;
    engine.catWidth=cat.offsetWidth/width;engine.catHeight=cat.offsetHeight/height;
    engine.catTop=1-(cat.offsetHeight+16)/height;
    engine.fileWidth=Math.max(36,Math.min(48,width*.1))/width;engine.fileHeight=48/height;
    engine.fallSpeed=92/height;engine.moveTo(engine.catX);paint();
  }
  function unlocked(){return cases.filter(data=>engine.collected.has(data.id));}
  function openCase(data){
    if(!data||!engine.collected.has(data.id)){announce('Catch a file first to unlock its report.');return;}
    selectedId=data.id;clearInput();previousTime=null;
    MetaReports.open(META_CONFIG.cases.indexOf(data));dialog.classList.add('caught-case-report');
  }
  function renderCollection(){
    const list=byId('collected-cases');
    // Update existing buttons so catching another file never removes keyboard focus.
    for(const data of cases){
      let button=list.querySelector(`[data-case="${data.id}"]`);
      if(!button){
        button=document.createElement('button');button.type='button';button.className='collected-case';button.dataset.case=data.id;
        const number=document.createElement('span');number.className='collected-number';number.textContent=data.id;
        button.append(number,document.createElement('span'));button.addEventListener('click',()=>openCase(data));
        button.addEventListener('focus',()=>{selectedId=data.id;});list.append(button);
      }
      const caught=engine.collected.has(data.id);button.disabled=!caught;
      const label=caught?data.menuTitle:'Catch to collect';if(button.lastElementChild.textContent!==label)button.lastElementChild.textContent=label;
      button.setAttribute('aria-label',caught?`Read case ${data.id}: ${data.menuTitle}`:`Case ${data.id}, not collected yet`);
    }
    setText('catch-counter',`${engine.collected.size} / ${cases.length} collected`);
    setText('collection-progress',`${engine.collected.size} of ${cases.length} cases collected`);
  }
  function paint(){
    cat.style.left=`${engine.catX*100}%`;cat.style.transform=`translateX(-50%) scaleX(${facing})`;
    const active=new Set(engine.files.map(file=>file.key));
    for(const [key,node] of fileNodes)if(!active.has(key)){node.remove();fileNodes.delete(key);}
    for(const file of engine.files){
      let node=fileNodes.get(file.key);
      if(!node){node=document.createElement('div');node.className='falling-case';node.textContent=file.id;byId('falling-cases').append(node);fileNodes.set(file.key,node);}
      node.style.left=`${file.x*100}%`;node.style.top=`${file.y*100}%`;
    }
  }
  function startOrPause(){
    if(MetaReports.isOpen()){MetaReports.close();return;}
    if(engine.complete){restart();return;}
    started=true;paused=!paused;clearInput();previousTime=null;noticeUntil=0;displays();
  }
  function pause(){
    if(started&&!engine.complete)paused=true;
    clearInput();previousTime=null;noticeUntil=0;displays();
  }
  function restart(){
    if(MetaReports.isOpen())MetaReports.close();
    clearInput();engine.reset();selectedId=null;facing=1;started=true;paused=false;previousTime=null;noticeUntil=0;
    try {sessionStorage.removeItem(storageKey);}catch{}
    renderCollection();paint();displays();
  }
  function selectCollected(direction=0){
    const found=unlocked();if(!found.length){announce('Catch a file first to unlock its report.');return;}
    pause();const current=found.findIndex(data=>data.id===selectedId);
    const index=current<0?0:Math.max(0,Math.min(found.length-1,current+direction));selectedId=found[index].id;
    byId('collected-cases').querySelector(`[data-case="${selectedId}"]`).focus();
  }
  function frame(time){
    const dt=previousTime===null?0:(time-previousTime)/1000;previousTime=time;
    const direction=Math.sign((keys.has('ArrowRight')||keys.has('d')||[...pointers.values()].includes(1)?1:0)-(keys.has('ArrowLeft')||keys.has('a')||[...pointers.values()].includes(-1)?1:0));
    const running=!blocked();cat.classList.toggle('walking',running&&direction!==0);
    if(running){
      if(direction)facing=direction;
      const caught=engine.tick(dt,direction);
      if(caught.length){
        try {sessionStorage.setItem(storageKey,JSON.stringify([...engine.collected]));}catch{}
        if(!selectedId)selectedId=caught[0];renderCollection();
        if(engine.complete){clearInput();announce(defaultInstruction());}else announce(`Case ${caught[0]} collected! Select it at the top right.`);
      }
      paint();
    }
    displays();requestAnimationFrame(frame);
  }
  for(const [selector,direction] of [['#move-left',-1],['#move-right',1],['.dpad .left',-1],['.dpad .right',1]]){
    const button=document.querySelector(selector);
    button.addEventListener('pointerdown',event=>{
      event.preventDefault();if(blocked()){if(!MetaReports.isOpen())selectCollected(direction);return;}
      button.setPointerCapture(event.pointerId);pointers.set(event.pointerId,direction);
    });
    const release=event=>pointers.delete(event.pointerId);
    for(const name of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(name,release);
    button.addEventListener('click',event=>{if(event.detail!==0||MetaReports.isOpen())return;if(blocked())selectCollected(direction);else{facing=direction;engine.moveTo(engine.catX+direction*.1);paint();}});
  }
  for(const [selector,direction] of [['.dpad .up',-2],['.dpad .down',2]])document.querySelector(selector).addEventListener('click',()=>{if(!MetaReports.isOpen())selectCollected(direction);});
  const actions={
    a:()=>openCase(cases.find(data=>data.id===selectedId)??unlocked()[0]),
    b:()=>{if(MetaReports.isOpen())MetaReports.close();else pause();},
    x:()=>{if(!MetaReports.isOpen())selectCollected();},
    y:restart
  };
  for(const [selector,key,label] of [['#button-a','a','A — read selected collected case'],['#button-b','b','B — pause or close report'],['.abxy .x','x','X — focus collected cases'],['.abxy .y','y','Y — restart game']]){
    const button=document.querySelector(selector);button.setAttribute('aria-label',label);button.title=label;button.addEventListener('click',actions[key]);
  }
  document.addEventListener('keydown',event=>{
    if(/INPUT|TEXTAREA|SELECT/.test(event.target.tagName))return;
    const key=event.key.length===1?event.key.toLowerCase():event.key;
    if(MetaReports.isOpen()){if(key==='b'&&!event.repeat){event.preventDefault();actions.b();}return;}
    const onButton=Boolean(event.target.closest('button,a,summary'));
    if(key===' '&&!event.repeat&&!onButton){event.preventDefault();startOrPause();return;}
    if(key==='Enter'&&!event.repeat&&!onButton){event.preventDefault();actions.a();return;}
    if(key==='r'&&!event.repeat){event.preventDefault();restart();return;}
    if(key==='x'&&!event.repeat){event.preventDefault();selectCollected();return;}
    if(key==='Escape'){event.preventDefault();pause();return;}
    if(['ArrowUp','ArrowDown'].includes(key)&&!event.repeat){event.preventDefault();selectCollected(key==='ArrowUp'?-2:2);return;}
    if(['ArrowLeft','ArrowRight','a','d'].includes(key)){
      event.preventDefault();
      if(blocked()||event.target.closest('.collected-case')){if(!event.repeat)selectCollected(key==='ArrowLeft'||key==='a'?-1:1);}
      else keys.add(key);
    }
  });
  document.addEventListener('keyup',event=>keys.delete(event.key.length===1?event.key.toLowerCase():event.key));
  window.addEventListener('blur',pause);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();previousTime=null;});
  dialog.addEventListener('close',()=>{dialog.classList.remove('caught-case-report');clearInput();previousTime=null;noticeUntil=0;displays();});
  byId('pause-game').addEventListener('click',()=>{startOrPause();arena.focus();});
  byId('skip-game').addEventListener('click',()=>{
    clearInput();engine.files=[];
    for(const data of cases)engine.collected.add(data.id);
    started=true;paused=true;previousTime=null;
    try {sessionStorage.setItem(storageKey,JSON.stringify([...engine.collected]));}catch{}
    renderCollection();paint();displays();
    selectCollected();announce('Game skipped. All four reports are available.');
  });
  byId('game-menu').addEventListener('click',()=>{
    pause();MetaReports.openMenu({caseIds:cases.map(data=>data.id)});
  });
  new ResizeObserver(measure).observe(arena);
  measure();renderCollection();displays();requestAnimationFrame(frame);
})();
