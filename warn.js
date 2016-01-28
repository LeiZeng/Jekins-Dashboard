const warn = (name, site) => {
  const warnning = new SpeechSynthesisUtterance(name + ', ' + name + ', ' + name + ', your commit fails: "sunins" !');
  warnning.lang = 'en-AU';
  if (global.speechSynthesis) {
    global.speechSynthesis.speak(warnning);
  }
}

export default warn
