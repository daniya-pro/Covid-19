var SearchInput = document.getElementById("search");
var urlLink = fetch("https://api.covid19api.com/summary");

urlLink.then((d) =>
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
      <img class="CCImage" src="./assets/images/webimages/cc.png" alt="">
 
     CountryCode (CC) : ${CountryCode}
      
      </span>
      <br> <br>
      
         `;
    });
  })
);

// var SearchFetch =()=>{
//   urlLink.then((d) =>{console.log(d)}
//   // d.json().then((e) => {
//   console.log(e);
//   e.features.forEach((el) => {
//     var countryRegion = el.attributes.Country_Region;
//     var Active = el.attributes.Active;
//     var Confirmed = el.attributes.Confirmed;
//     var Deaths = el.attributes.Deaths;
//     var Recovered = el.attributes.Recovered;
//     var latitude = el.attributes.Lat;
//     var longitude = el.attributes.Long_;
//   if(Searchvalue===countryRegion ||Searchvalue===shortForm){

//     // id='${el.attributes.ISO3}'
//     document.getElementById("info").innerHTML += `<br> <h1> ${countryRegion} </h1>
//     <span class='Confirmed'>😱 Confirmed : ${Confirmed}</span><br><br>
//     <span class='Active'>😔 Active Cases : ${Active}</span><br><br>
//     <span class='Deaths'>😭 Deaths : ${Deaths}</span><br><br>
//     <span class='Recovered'>🥳 Recovered : ${Recovered}</span><br><br>
//     <span class='Relative Latitude'>
//     <img class='latitudeImg' src="./assets/images/webimages/latitude.png" alt="" style="width: 23px;">
//     Latitude : ${latitude}
//     </span>
//     <br> <br>
//       <span class='Relative Longitude'>   <img class='longitudeImg' src="./assets/images/webimages/latitude.png" alt="" style="width: 23px;">
//     Longitude : ${longitude}
//     </span><br><br>
//        `;
//   }
//   });
// })
// )}

// SearchInput.addEventListener('keydown',SearchFetch)
