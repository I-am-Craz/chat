const searchForm = document.forms['search'];
const searchField = searchForm['search-field'];
const searchResults = document.getElementById('search-results');

searchField.onkeyup = async (e) => {
    e.preventDefault();
    
    if (searchField.value !== '') {
        searchResults.innerHTML = '';

        let data = JSON.stringify({
            search_aim: searchField.value.trim().toLowerCase()
        });
        let response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });
        let result = await response.json();
        if(result.rooms.length === 0){
            searchResults.innerHTML = 'no results';
        }

        for(let item of result.rooms){
            searchResults.innerHTML += `
            <li class="px-2 text-dark">
                <p>${item.name}</p>
            </li>`;
        }
    }
}
