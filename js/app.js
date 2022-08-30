//const loadPhones = async() =>{

//we need to fine elements by searching input field's value which is searchText
const loadPhones = async (searchText, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res =await fetch(url);
    const data =await res.json();
//checked the data is getting or not
    //console.log(data.data);
    displayPhones(data.data, dataLimit);

}

//to display phones 
const displayPhones = (phones, dataLimit) =>{
////checked the phones is getting or not
    //console.log(phones);

//follow the 4steps to display
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';

//display some phones only
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 12){
        phones = phones.slice(0, 12);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');4
    }

//display no phones founds
    const noPhones = document.getElementById('not-found-msg');
    if(phones.length === 0){
        noPhones.classList.remove('d-none');
    }
    else{
        noPhones.classList.add('d-none');
    }

//display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body mt-4 p-0">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
            </div>                
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    });

    //hide loader
    toggleSpinner(false);
}


const processSearch = (dataLimit)=>{
    toggleSpinner(true);
    const searchField = document.getElementById('search-feild');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

// search button's handler
document.getElementById('btn-search').addEventListener('click', function(){
    //starts loader - first it will execuite loader then rest of searching
    processSearch(10);      //will just show 10 items
});

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

//this is not the best way. but limitations of API we are doing this
document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch();    //in this btn there will no datalimit cz it will show all items
});


//loadPhones();