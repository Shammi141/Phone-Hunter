//const loadPhones = async() =>{

//we need to fine elements by searching input field's value which is searchText
const loadPhones = async (searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res =await fetch(url);
    const data =await res.json();
//checked the data is getting or not
    //console.log(data.data);
    displayPhones(data.data);

}

//to display phones 
const displayPhones = phones =>{
////checked the phones is getting or not
    //console.log(phones);

//follow the 4steps to display
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';
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
}


// search button's work
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-feild');
    const searchText = searchField.value;
    loadPhones(searchText);
});

loadPhones();