const printMeow = document.getElementById("langPrint")
const langChoice = document.getElementsByClassName("dropdown-content")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '67e533029bmshabe72dce0f8ac6fp13656cjsn8fdc977e8776',
		'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
	}
};

  
  function getOption() {
        selectElement = document.querySelector('#getLanguage');
        lang = selectElement.value;
        // document.querySelector('#langPrint').textContent = output;
    
fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C' + lang + '&q=meow&mt=1&onlyprivate=0&de=a%40b.c', options)


//   // Convert the response to JSON
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
     console.log(data, "translation data")
    printMeow.textContent = data.responseData.translatedText.toUpperCase()
    console.log(data.matches[0].target.substring(3).toLowerCase(), "country code")
    if(data.matches.length === 1){
      let country = data.matches[0].target.substring(3).toLowerCase()
      getFlag(country)
    } else {
      let country = data.matches[1].target.substring(3).toLowerCase()
      getFlag(country)
      }
    // getFlag(country)
  })

}

function getFlag(country) {
  // var lung = 'it' 
  
      
  fetch(`https://restcountries.com/v2/alpha/${country}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      const flagEl = document.getElementById("flag")
      console.log(data, "country info")
      let flagUrl = data.flags.png
      flagEl.innerHTML = `<img src=${flagUrl}></img>`
     
    })
     
}
  
    