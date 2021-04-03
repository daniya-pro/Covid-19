var SearchInput = document.getElementById('search');
var urlLink =fetch(
  "https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/2/query?f=json&where=Recovered%3C%3E0&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Recovered%20desc&resultOffset=0&resultRecordCount=250&resultType=standard&cacheHint=true", {
  referrer: "https://www.arcgis.com/apps/opsdashboard/index.html",
  referrerPolicy: "no-referrer-when-downgrade",
  body: null,
  method: "GET",
  mode: "cors",
  credentials: "omit",
}
);

urlLink.then((d) =>
  d.json().then((e) => {
    console.log(e);

    e.features.forEach((el) => {
      var countryRegion = el.attributes.Country_Region;
      var Active = el.attributes.Active;
      var Confirmed = el.attributes.Confirmed;
      var Deaths = el.attributes.Deaths;
      var Recovered = el.attributes.Recovered;
      var latitude = el.attributes.Lat;
      var longitude = el.attributes.Long_;

      // id='${el.attributes.ISO3}'
      document.getElementById("info").innerHTML += `<br> <h1> ${countryRegion} </h1> 
      <span class='Confirmed'>😱 Confirmed : ${Confirmed}</span><br><br>
      <span class='Active'>😔 Active Cases : ${Active}</span><br><br>
      <span class='Deaths'>😭 Deaths : ${Deaths}</span><br><br>
      <span class='Recovered'>🥳 Recovered : ${Recovered}</span><br><br>
      <span class='Relative Latitude'>   
      <img class='latitudeImg' src="./assets/images/webimages/latitude.png" alt="" style="width: 23px;">
      Latitude : ${latitude}
      </span>
      <br> <br>
        <span class='Relative Longitude'>   <img class='longitudeImg' src="./assets/images/webimages/latitude.png" alt="" style="width: 23px;">
      Longitude : ${longitude}
      </span><br><br>
         `;
    });
  })
);
var SearchFetch =()=>{

  urlLink.then((d) =>
  d.json().then((e) => {
    console.log(e);

    e.features.forEach((el) => {
      var countryRegion = el.attributes.Country_Region;
      var shortForm = el.attributes.ISO3;
      var Active = el.attributes.Active;
      var Confirmed = el.attributes.Confirmed;
      var Deaths = el.attributes.Deaths;
      var Recovered = el.attributes.Recovered;
      var latitude = el.attributes.Lat;
      var longitude = el.attributes.Long_;
      var Searchvalue=SearchInput.value.toLowerCase()
      if(Searchvalue===countryRegion ||Searchvalue===shortForm){

        

      }

}
    )}))}



SearchInput.addEventListener('keydown',SearchFetch)