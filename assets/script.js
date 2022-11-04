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
    console.log(data)
    printMeow.textContent = data.responseData.translatedText.toUpperCase()
    getFlag(lang)
  })

}

function getFlag(lang) {
  // var lung = 'it' 
  if (lang === "ja") {
        lang === "jp"
      
  fetch(`https://restcountries.com/v2/alpha/${lang}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data, "country info")
     
    })
     }
}
  
    