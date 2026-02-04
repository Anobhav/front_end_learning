const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";




document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Stop form submission from reloading the page
    
    let amount = document.getElementById('amount').value;
    let from = document.querySelector('select[name="from"]').value;
    let to = document.querySelector('select[name="To"]').value;

    // Now use these variables to call your API
    fetch(`${BASE_URL}/${from}/${to}.json`)
        .then(response => response.json())
        .then(data => {
            let rate = data[to];
            let convertedAmount = amount * rate;
            alert(`Converted amount: ${convertedAmount}`);
        });
});
