console.log("fetching data...");

// Specify the API endpoint for agent data
const apiUrl = "https://valorant-api.com/v1/agents";

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((agentData) => {
    // Process the retrieved agent data
    console.log("Agent Data:", agentData);

    const containerCard = document.getElementById("containerCard");

    agentData.data.forEach((agent) => {
      const card = document.createElement("div");
      card.classList.add("col-md-3");

      card.innerHTML = `
        <div class="card text-bg-dark" style="height: 400px; width: 300px; overflow: hidden; cursor: pointer;">
          <img src="${agent.fullPortrait}" class="card-img img-center zoom-effect" alt="${agent.displayName}">
          <div class="card-img-overlay d-flex flex-column align-items-start justify-content-end">
            <h5 class="card-title">${agent.displayName}</h5>
            <p class="card-text"><small>${agent.role.displayName}</small></p>
          </div>
        </div>
      `;

      // Add click event listener to open agent detail page
      card.addEventListener("click", () => {
        // Redirect to agent detail page (you can create individual pages or use a query parameter)
        window.location.href = `agent.html?id=${agent.uuid}`;
      });

      containerCard.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
