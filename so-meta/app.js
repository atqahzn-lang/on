/* Touch, physical D-pad, A/B buttons, and keyboard share the same menu state. */
(() => {
  const byId=id=>document.getElementById(id);
  const homeButtons=[byId('play-game'),byId('read-case-study')];
  const groupButtons=[byId('campaign-results'),byId('strategy-systems')];
  let groupIndex=0;
  const cases=META_CONFIG.cases.filter(data=>data.menuTitle);
  let returnTimer=null,mode='home',homeIndex=0,caseIndex=0;
  function sound(type){window.ConsoleSound?.play(type);}
  function highlight(){
    homeButtons.forEach((button,index)=>button.classList.toggle('console-selected',mode==='home'&&index===homeIndex));
    groupButtons.forEach((button,index)=>button.classList.toggle('console-selected',mode==='groups'&&index===groupIndex));
    [...byId('console-case-list').children].forEach((button,index)=>button.classList.toggle('console-selected',index===caseIndex));
  }
  function menu(restoreFocus=false){
    clearTimeout(returnTimer);returnTimer=null;mode='home';
    byId('title-screen').hidden=false;byId('game-notice').hidden=true;byId('console-case-menu').hidden=true;
    byId('console-group-menu').hidden=true;byId('console-strategy').hidden=true;
    byId('play-game').disabled=false;highlight();
    if(restoreFocus)homeButtons[homeIndex].focus();
  }
  function play(){
    if(MetaReports.isOpen()||returnTimer!==null)return;
    homeIndex=0;mode='notice';byId('title-screen').hidden=true;byId('console-case-menu').hidden=true;
    byId('console-group-menu').hidden=true;byId('console-strategy').hidden=true;
    byId('game-notice').hidden=false;byId('play-game').disabled=true;highlight();
    returnTimer=setTimeout(()=>menu(true),1600);
  }
  function read(){
    menu();homeIndex=1;mode='groups';byId('title-screen').hidden=true;byId('console-group-menu').hidden=false;
    highlight();groupButtons[groupIndex].focus();
  }
  function campaigns(){
    menu();homeIndex=1;mode='cases';byId('title-screen').hidden=true;byId('console-case-menu').hidden=false;
    highlight();byId('console-case-list').children[caseIndex]?.focus();
  }
  function strategy(){
    menu();homeIndex=1;mode='strategy';byId('title-screen').hidden=true;byId('console-strategy').hidden=false;
    highlight();byId('strategy-back').focus();
  }
  groupButtons.forEach((button,index)=>button.addEventListener('focus',()=>{groupIndex=index;highlight();}));
  groupButtons[0].addEventListener('click',campaigns);groupButtons[1].addEventListener('click',strategy);
  byId('cases-back').addEventListener('click',read);byId('strategy-back').addEventListener('click',read);
  const list=byId('console-case-list');
  cases.forEach((data,index)=>{
    const button=document.createElement('button');button.type='button';button.className='case-menu-item';
    const number=document.createElement('span');number.className='case-menu-number';number.textContent=data.id;
    const label=document.createElement('strong');label.textContent=data.menuTitle??data.title;
    button.append(number,label);button.addEventListener('focus',()=>{caseIndex=index;highlight();});
    button.addEventListener('click',()=>{caseIndex=index;MetaReports.open(META_CONFIG.cases.indexOf(data));});list.append(button);
  });
  homeButtons.forEach((button,index)=>button.addEventListener('focus',()=>{homeIndex=index;highlight();}));
  byId('play-game').addEventListener('click',play);byId('read-case-study').addEventListener('click',read);
  function navigate(direction,withSound=false){
    if(returnTimer!==null)return;
    if(MetaReports.isOpen()){
      const dialog=document.querySelector('dialog.meta-report');
      const targets=[...dialog.querySelectorAll('.case-picker .case-choice')].filter(node=>node.getClientRects().length);
      if(targets.length){const index=targets.indexOf(document.activeElement);targets[index<0?0:(index+direction+targets.length)%targets.length].focus();}
      else {const targets=[...dialog.querySelectorAll('button:not(:disabled),summary,[role="button"][tabindex="0"]')].filter(node=>node.getClientRects().length);const index=targets.indexOf(document.activeElement);targets[index<0?0:(index+direction+targets.length)%targets.length]?.focus();}
    }else if(mode==='groups'){
      groupIndex=(groupIndex+direction+groupButtons.length)%groupButtons.length;highlight();groupButtons[groupIndex].focus();
    }else if(mode==='strategy'){byId('strategy-back').focus();
    }else if(mode==='cases'){
      caseIndex=(caseIndex+direction+cases.length)%cases.length;highlight();const button=list.children[caseIndex];button.focus();button.scrollIntoView({block:'nearest'});
    }else{homeIndex=(homeIndex+direction+homeButtons.length)%homeButtons.length;highlight();homeButtons[homeIndex].focus();}
    if(withSound)sound('move');
  }
  function activate(){
    if(MetaReports.isOpen()){
      const active=document.activeElement;
      if(active?.matches('button,summary,[role="button"]'))active.click();return;
    }
    if(mode==='groups')groupButtons[groupIndex].click();
    else if(mode==='strategy')byId('strategy-back').click();
    else if(mode==='cases')list.children[caseIndex]?.click();
    else if(mode==='home')homeButtons[homeIndex].click();
  }
  function back(){
    sound('back');if(MetaReports.isOpen())MetaReports.close();else if(mode==='cases'||mode==='strategy')read();else menu(true);
  }
  for(const [selector,direction] of [['.dpad .up',-1],['.dpad .left',-1],['.dpad .down',1],['.dpad .right',1]]){
    const button=document.querySelector(selector);button.setAttribute('aria-label',`Select ${selector.split('.').pop()}`);button.addEventListener('click',()=>navigate(direction));
  }
  document.querySelector('.dpad .center').setAttribute('aria-label','Open selected option');
  document.querySelector('.dpad .center').addEventListener('click',activate);
  for(const [selector,action,label] of [
    ['#button-a',activate,'A — open selected option'],
    ['#button-b',()=>{if(MetaReports.isOpen())MetaReports.close();else if(mode==='cases'||mode==='strategy')read();else menu(true);},'B — back'],
    ['.abxy .x',read,'X — read case studies'],
    ['.abxy .y',()=>menu(true),'Y — return to menu']
  ]){
    const button=document.querySelector(selector);button.setAttribute('aria-label',label);button.title=label;
    button.addEventListener('click',()=>{if(!MetaReports.isOpen()||selector==='#button-b')action();});
  }
  document.addEventListener('keydown',event=>{
    if(event.defaultPrevented)return;
    if(/INPUT|TEXTAREA|SELECT/.test(event.target.tagName))return;
    if(event.key.toLowerCase()==='m'&&!event.repeat){event.preventDefault();window.ConsoleSound?.toggle();return;}
    if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)){
      event.preventDefault();if(!event.repeat)navigate(event.key==='ArrowUp'||event.key==='ArrowLeft'?-1:1,true);return;
    }
    if(event.key==='Escape'){
      if(MetaReports.isOpen())return;event.preventDefault();back();return;
    }
    if(event.key.toLowerCase()==='b'&&!event.repeat){event.preventDefault();back();return;}
    if(event.key.toLowerCase()==='a'&&!event.repeat){event.preventDefault();activate();return;}
    // Native Enter/Space on buttons preserve their accessible activation behavior.
    if(event.key==='Enter'&&!event.repeat&&!event.target.closest('button,summary,[role="button"]')){event.preventDefault();activate();}
  });
  document.querySelector('dialog.meta-report').addEventListener('close',()=>{highlight();});
  menu();
})();
