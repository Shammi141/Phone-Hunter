const loadPhones = async() =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res =await fetch(url);
    const data =await res.json();
//checked the data is getting or not
    //console.log(data.data);
    displayPhones(data.data);

}

const displayPhones = phones =>{
    console.log(phones)
}

loadPhones();