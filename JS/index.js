fetch("https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/2/query?f=json&where=Recovered%3C%3E0&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Recovered%20desc&resultOffset=0&resultRecordCount=250&resultType=standard&cacheHint=true", {

  "referrer": "https://www.arcgis.com/apps/opsdashboard/index.html",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}).then((d)=>d.json().then((e)=>{console.log(e)


e.features.forEach(element => {
el  = element
document.getElementById("info").innerHTML+="<br> <p id>"+el.attributes.Country_Region
});}));