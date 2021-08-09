const div_options = document.getElementById('div_options');
const input_search = document.getElementById('input_search');



input_search.addEventListener('input', (event) => searchStates(input_search.value));


async function searchStates(search_data) {
    let matched_arr;

    if (search_data.length === 0) {
        matched_arr = [];
        addToDom(matched_arr);
    }
    else {
        try {
            let response = await fetch('states.json');
            let json_arr = await response.json();

            let regex = new RegExp(`^${search_data}`, 'gi');


            matched_arr = json_arr.filter((data, index) => {
                return data.name.match(regex) || data.state.match(regex);
            });

            matched_arr.length === 0 ? addToDom([{name: "No result", state: "not found"}]) : addToDom(matched_arr);
        }
        catch (err) {
            console.log(err);
            addToDom([]);
        }
    }
}


function addToDom(json_arr) {
    let str_html = json_arr.map(data => {
        return `<div class="card bg-secondary mb-3" style="max-width: 50rem;">
                    <div class="card-body">
                        <h4 class="card-title">${data.name}</h4>
                        <p class="card-text">State: ${data.state}</p>
                    </div>
                    </div>`
    }).join(" ");

    console.log(str_html);

    div_options.innerHTML = str_html;
}