async function data(city) {
  const cities = ["mumbai", "pune", "patna"];

  const obj = {
    name: city,
  }
  if (cities.includes(city)) {
    return obj;
  } else {
    throw new Error("error occured");
  }
}

const calldata = async ()=>{
    let response;
    try{
        response = await data("mumbai");
    }
    catch(err){
        response = err.message;
    }
    console.log(response);
}

calldata();
