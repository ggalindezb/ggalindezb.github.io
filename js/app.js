document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 2000, 'Hello, I am Gerardo')
}, false);

const clamp = (value, min, max) => {
  return Math.min(max, Math.max(value, min))
}

const type = (target) => {
  console.log(`Typing: ${target}`)
  punch('', target.split(''))
}

const punch = (string, letters) => {
  let letter = letters.shift();
  string = `${string}${letter}`;
  document.getElementById('prompt').textContent = string

  if(letters.length > 0) {
    let wait = Math.random() * 300
    if(letter.match(/'w/))
      wait += 100

    const ttl = clamp(wait * 350, 150, 300)
    setTimeout(punch, ttl, string, letters);
  }
}
