/* Small local Web Audio tones; never autoplay, no audio files or network requests. */
(() => {
  const button=document.getElementById('console-sound');
  let enabled=true,context=null;
  try {enabled=localStorage.getItem('so-meta-sound')!=='off';}catch{}
  function render(){button.textContent=enabled?'Sound on':'Sound off';button.setAttribute('aria-pressed',String(enabled));}
  function toggle(){enabled=!enabled;try{localStorage.setItem('so-meta-sound',enabled?'on':'off');}catch{}render();}
  function play(type='select'){
    if(!enabled)return;
    try{
      const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;
      context??=new Audio();
      if(context.state==='suspended')context.resume().catch(()=>{});
      const notes=type==='move'?[660]:type==='back'?[440,330]:[660,880];
      const time=context.currentTime;
      notes.forEach((frequency,index)=>{
        const oscillator=context.createOscillator(),gain=context.createGain(),start=time+index*.045;
        oscillator.type='square';oscillator.frequency.value=frequency;
        gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(.018,start+.004);gain.gain.exponentialRampToValueAtTime(.001,start+.04);
        oscillator.connect(gain);gain.connect(context.destination);oscillator.start(start);oscillator.stop(start+.045);
        oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();};
      });
    }catch{/* Audio support or browser policy must not block navigation. */}
  }
  button.addEventListener('click',toggle);
  document.addEventListener('click',event=>{
    const target=event.target.closest('button,summary,[role="button"]');
    if(!target||target.disabled||!target.closest('.console,dialog.meta-report')||target===button||target.id==='button-a'||target.matches('.dpad .center'))return;
    play(target.closest('.dpad')?'move':target.matches('#button-b,.abxy .y,.popup-close')?'back':'select');
  },true);
  window.ConsoleSound=Object.freeze({play,toggle});render();
})();
