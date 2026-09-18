const form = document.querySelector("form");
const ideaInput = document.querySelector("#idea");
const descriptionInput = document.querySelector("#idea-description");
const ideasBody = document.querySelector("#ideas-body");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const idea = ideaInput.value.trim();

	if (idea === "") {
		return;
	}
	const description = descriptionInput.value.trim();
	console.log(description);

	// const planItem = document.createElement("li");
	// planItem.textContent = idea;
	// ideasBody.append(planItem);

	const ideaRow = document.createElement("tr");
	const ideaCell = document.createElement("td");

	// ideaCell.textContent = idea;
	// ideaRow.append(ideaCell);

	const ideaDetails = document.createElement("details");
	const ideaTitel = document.createElement("summary");
	const ideaDescription = document.createElement("p");

	ideaTitel.textContent = idea;
	ideaDescription.textContent = description || "No details added.";

	ideaDetails.append(ideaTitel, ideaDescription);

	const planButton = document.createElement("button");
	planButton.type = "button";
	planButton.textContent = "Plan it";
	ideaDetails.append(planButton);

	ideaCell.append(ideaDetails);

	const interestedCell = document.createElement("tr");

	interestedCell.textContent = "0";

	const actionCell = document.createElement("td");
	const interestedButton = document.createElement("button");
	interestedButton.type = "button";
	interestedButton.textContent = "I'm intrested";
	actionCell.append(interestedButton);

	let isIntrested = false;
	interestedButton.addEventListener("click", function() {
		if (isIntrested)
		{
			isIntrested = false;
			interestedCell.textContent = "0";
			interestedButton.textContent = "I'm intrested";
		}
		else {
			isIntrested = true;
			interestedCell.textContent = "1";
			interestedButton.textContent = "Undo interest";
		}
	});

	ideaRow.append(ideaCell, interestedCell, actionCell);
	ideasBody.append(ideaRow);

	form.reset();
	ideaInput.focus();
});
