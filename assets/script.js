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

    
fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7C' + lang + '&q=meow&mt=1&onlyprivate=0&de=a%40b.c', options)


//   // Convert the response to JSON
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
       //*console.log(data, "translation data")
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
      //* console.log(data, "country info")
      const flagEl = document.getElementById("flag")
       
      let flagUrl = data.flags.png
      flagEl.innerHTML = `<img src=${flagUrl}></img>`
      console.log(data.name)
      getBackground(data.name.toLowerCase())
    })
     
}

function getBackground(place) {
  const options = {
	method: 'GET',
	headers: {
		Authorization: '563492ad6f9170000100000145d84e199bb54598944f3d189d8a18d0',
		'X-RapidAPI-Key': '67e533029bmshabe72dce0f8ac6fp13656cjsn8fdc977e8776',
		'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
	}
};

fetch(`https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${place}&locale=en-US&per_page=15&page=1`, options)
	.then(response => response.json())
  .then(response => {
    console.log(response)
    let pic = response.photos[0].src.original
    console.log(pic, "pic?")
    document.body.style.backgroundColor = "#82A7A6";
    document.body.style.backgroundImage = `url('${pic}')`;
  })
	.catch(err => console.error(err));
}
