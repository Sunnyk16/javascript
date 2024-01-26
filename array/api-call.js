function apicall(){
    return{
        type : 'api call'
    }
}

const api= async ()=>{
    const p = await apicall();
    console.log(p);
}

api();