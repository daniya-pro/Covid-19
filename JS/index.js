    var info = 
        document.getElementById(
          "info"
        ); var SearchInput = document.getElementById("search");
var urlLink =()=> fetch("https://api.covid19api.com/summary");
var loader=document.getElementById("loading");

var container=document.getElementById("container")
var fetchfun =()=>{
  loader.style.display='block'
  container.style.display='none'

  info.innerHTML=''
urlLink().then((d) =>
  d.json().then((e) => {
    console.log(e);

    e.Countries.forEach((el) => {
      var CountryName = el.Country;
      var CountryCode = el.CountryCode;
      var Confirmed = el.TotalConfirmed;
      var Deaths = el.TotalDeaths;
      var Recovered = el.TotalRecovered;

      document.getElementById(
        "info"
      ).innerHTML += `<br> <h1> ${CountryName} </h1> 
      <span class='Confirmed'>😱 Confirmed : ${Confirmed}</span><br><br>
      <span class='Deaths'>😭 Deaths : ${Deaths}</span><br><br>
      <span class='Recovered'>🥳 Recovered : ${Recovered}</span><br><br>
      <span class='CC Relative'>  
      <img class="CCImage absolute" src="./assets/images/webimages/cc.png" alt="">
 
     CountryCode : ${CountryCode}
      
      </span>
      <br> <br>
      
         `;
    });
     loader.style.display='none'
     SearchInput.value=''
     container.style.display='block'
 }
)
  );
}
fetchfun()
var SearchFetch = () => {

  loader.style.display='block'
  container.style.display='none'

  console.log("fetch");
  urlLink()
    .then((d) => d.json())

    .then((e) => {
      console.log(e);
  
             info.innerHTML=''

      e.Countries.forEach((el) => {

        var CountryName = el.Country;
        var CountryCode = el.CountryCode;
    

        if (
          SearchInput.value.toLowerCase() === CountryName.toLowerCase() || CountryCode.toLowerCase() === SearchInput.value.toLowerCase()
        ) {
          var Confirmed = el.TotalConfirmed;
          var Deaths = el.TotalDeaths;
          var Recovered = el.TotalRecovered;
info.innerHTML += `<br> <h1> ${CountryName} </h1> 
      <span class='Confirmed'>😱 Confirmed : ${Confirmed}</span><br><br>
      <span class='Deaths'>😭 Deaths : ${Deaths}</span><br><br>
      <span class='Recovered'>🥳 Recovered : ${Recovered}</span><br><br>
      <span class='CC Relative'>  
      <img class="CCImage absolute" src="./assets/images/webimages/cc.png" alt="">
 
     CountryCode : ${CountryCode}
      
      </span>
      <br><br>
      <a class="link" onclick="fetchfun()">See Country List</a>
      <br> <br>
      
         `;
        }

      })

      if(info.innerHTML === ''){
info.innerHTML =`<p class ='red' >please check if your spelling or the country code is correct and if it is then we are sorry beacaues this country isn't available yet.</p>
<a class="link" onclick="fetchfun()">See Country List</a>
`

      }
    });
    setTimeout(()=>{    loader.style.display='none'
    container.style.display='block'},1000)
    SearchInput.value=''


};


document.getElementById("btn").addEventListener("click", SearchFetch);
