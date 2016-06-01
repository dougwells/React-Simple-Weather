

getTemperatureCallback('Philadelphia', function(err, temp){
  if(err){
    console.log('error', err);
  }else{
    console.log('success', temp);
  }

});

function getTemperatureCallback (city, callback){
  console.log(city);
  callback(undefined, 78);
  callback('City not found');

}
