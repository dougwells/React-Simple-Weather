//Simple Example of a Promise


addNumbers(7,8).then(successFunction, errorFunction);

function addNumbers(a,b){
  return new Promise(function(resolveFN, rejectFN){
    if(typeof a==='number' && typeof b==='number'){
      //or sum = a+b; resolve(sum);
      resolveFN({first: a, second: b}); //returns success data object
    }else{
      rejectFN('One of the params is missing or not a number');  //returns error data object
    }
  });
}

function successFunction(successData){
  console.log(successData.first+successData.second);
}

function errorFunction(errorData){
  console.log(errorData)
}

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



// getTempPromise ('Philadelphia').then(successFunction, errorFunction);
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){                    //setTimeout - run inner function after 1 sec
//       resolve({temp: 82, city: location});    //looks like we can only pass one param
//       reject('City not found');               //into resolve & reject
//     }, 1000)
//   });
// }
//
// function successFunction(data){
//   console.log('The Temp is '+data.temp+' in ', data.city);
// }
//
// function errorFunction(message){
//   console.log(message)
// }

// addNumbers({a:7, b:3}).then(successFunction, errorFunction);
//
// function addNumbers(data){
//   return new Promise(function(resolve, reject){
//     if(typeof data.a==='number' && typeof data.b==='number'){
//       resolve(data);
//     }else{
//       reject('One of the params is missing or not a number');
//     }
//   });
// }
//
// function successFunction(successData){
//   console.log(successData.a+successData.b);
// }
//
// function errorFunction(message){
//   console.log(message)
// }
