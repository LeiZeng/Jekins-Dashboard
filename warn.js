const warn = (name, site) => {
  const warnning = new SpeechSynthesisUtterance(name + ', ' + name + ', ' + name + ', your commit broke: "' + site + '" !');
  warnning.lang = 'en-US';
  if (global.speechSynthesis) {
    global.speechSynthesis.speak(warnning);
  }
}

export default warn
