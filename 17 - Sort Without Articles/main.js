const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsElement = document.getElementById('bands');

// function removeArticles(str) {
//   words = str.split(" ");
//   console.log(words);
//   if(words.length <= 1) return str;
//   if( words[0] == 'a' || words[0] == 'the' || words[0] == 'an' )
//     return words.splice(1).join(" ");
//   return str;
// }

function removeArticles(str) {
  return str.replace(/^(a |an |the )/i, '').trim();
}

const bandsSorted = bands.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);

bandsElement.innerHTML = bandsSorted.map(band => `<li>${band}</li>`).join('');
