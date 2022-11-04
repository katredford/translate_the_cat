const printMeow = document.getElementById("langPrint")
const langChoice = document.getElementsByClassName("dropdown-content")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '67e533029bmshabe72dce0f8ac6fp13656cjsn8fdc977e8776',
		'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
	}
};
// document.body.style.backgroundImage = "url('./assets/images/france.jpg')";
//document.body.style.backgroundColor = "#82A7A6";

  function getOption() {
        selectElement = document.querySelector('#getLanguage');
        lang = selectElement.value;
        // document.querySelector('#langPrint').textContent = output;
    console.log(lang)
    // if (lang === 'fr') {
    //   document.body.style.backgroundColor = "#82A7A6";
    //    document.body.style.backgroundImage = "url('./assets/images/france.jpg')";
    // }
    switch(lang) {
  case 'fr':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/france.jpg')";
    break;
  case 'it':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/italy.jpeg')";
    break;
  case 'ja':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/japan.jpeg')";
    break;
  case 'da':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/denmark.jpeg')";
    break;
  case 'es':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/spain.jpeg')";
    break;
  case 'nl':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/netherlands.jpeg')";
        break;
      case 'fa':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/iran.jpeg')";
        break;
      case 'el':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/greece.jpeg')";
        break;
      case 'lv':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/latvia.jpeg')";
        break;
      case 'no':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/norway.jpeg')";
        break;
      case 'pa':
      document.body.style.backgroundColor = "#82A7A6";
      document.body.style.backgroundImage = "url('./assets/images/india.jpeg')";
    break;
      default:
    console.log('beep')
}

    
fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C' + lang + '&q=meow&mt=1&onlyprivate=0&de=a%40b.c', options)


//   // Convert the response to JSON
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
      console.log(data, "translation data")
    printMeow.textContent = data.responseData.translatedText.toUpperCase()
    //console.log(data.matches[0].target.substring(3).toLowerCase(), "country code")
 

    if(data.matches.length === 1){
      let country = data.matches[0].target.substring(3).toLowerCase()
      getFlag(country)
    } else {
      let country = data.matches[1].target.substring(3).toLowerCase()
      getFlag(country)
      }
    
  })

}

function getFlag(country) {
      
  fetch(`https://restcountries.com/v2/alpha/${country}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data, "country info")
      const flagEl = document.getElementById("flag")
       
      let flagUrl = data.flags.png
      flagEl.innerHTML = `<img src=${flagUrl}></img>`
     
    })
     
}
  
