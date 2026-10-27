/* Experience menu: gameplay is a temporary placeholder; reports remain fully available. */
(() => {
  const byId=id=>document.getElementById(id);
  let returnTimer=null;
  function menu(restoreFocus=false){
    clearTimeout(returnTimer);returnTimer=null;
    byId('title-screen').hidden=false;byId('game-notice').hidden=true;
    byId('play-game').disabled=false;
    if(restoreFocus)byId('play-game').focus();
  }
  function play(){
    if(MetaReports.isOpen()||returnTimer!==null)return;
    byId('title-screen').hidden=true;byId('game-notice').hidden=false;
    byId('play-game').disabled=true;
    returnTimer=setTimeout(()=>menu(true),1600);
  }
  function read(){
    menu();MetaReports.openMenu({caseIds:META_CONFIG.cases.filter(data=>data.menuTitle).map(data=>data.id)});
  }
  byId('play-game').addEventListener('click',play);
  byId('read-case-study').addEventListener('click',read);
  for(const [selector,action,label] of [
    ['#button-a',play,'A — play game'],
    ['#button-b',()=>{if(MetaReports.isOpen())MetaReports.close();else menu(true);},'B — back'],
    ['.abxy .x',read,'X — read case studies'],
    ['.abxy .y',()=>menu(true),'Y — return to menu']
  ]){
    const button=document.querySelector(selector);button.setAttribute('aria-label',label);button.title=label;
    button.addEventListener('click',()=>{if(!MetaReports.isOpen()||selector==='#button-b')action();});
  }
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!MetaReports.isOpen()&&returnTimer!==null){event.preventDefault();menu(true);}
  });
  menu();
})();
