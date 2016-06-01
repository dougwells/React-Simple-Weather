//
//
// getTemperatureCallback('Philadelphia', function(err, temp){
//   if(err){
//     console.log('error', err, temp);
//   }else{
//     console.log('success', temp);
//   }
//
// });
//
// function getTemperatureCallback (city, callback){
//   console.log(city);
//   callback(undefined, 78);
//   callback('City not found', 82);
//
// }



getTempPromise ('Philadelphia').then(successFunction, errorFunction);

function getTempPromise(location){
  return new Promise(function(resolve, reject){
    resolve({temp: 82, city: location});    //looks like we can only pass one param
    reject('City not found');               //into resolve & reject
  });
}

function successFunction(data){
  console.log('The Temp is '+data.temp+' in ', data.city);
}

function errorFunction(message){
  console.log(message)
}
