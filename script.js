document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // Call function to create HTML elements
            createDataElements(data);
        })
        .catch(error => console.error("Error fetching data:", error));

    // Function to create HTML elements for each data item
    function createDataElements(data) {
        const container = document.querySelectorAll(".data-container"); // Changed selector to ID selector
        let i = 0;
        const list = ["text-red-500", "text-yellow-500", "text-green-500", "text-violet-500"]
        data.forEach(item => {
            container[i].innerHTML = `
                <div class="flex gap-2">
                    <img src="${item.icon}">
                    <p class=${list[i]}>${item.category}</p>
                </div>
                <p>${item.score}<span class="text-slate-400 ml-1">/ 100</span></p>
            `;
            i++;
        });
    }
});




