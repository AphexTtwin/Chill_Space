const form = document.querySelector("form");
const ideaInput = document.querySelector("#idea");
const descriptionInput = document.querySelector("#idea-description");
const ideasBody = document.querySelector("#ideas-body");
const planList = document.querySelector("#plans-list");
const emptyPlansMessage = document.querySelector("#empty-plans-message");
const descriptionArea = document.querySelector("#description-area");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const idea = ideaInput.value.trim();

	if (idea === "") {
		return;
	}
	const description = descriptionInput.value.trim();
	// console.log(description);

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

	const planningArea = document.createElement("div");
	planningArea.hidden = true;

	const dateLabel = document.createElement("label");
	dateLabel.textContent = "Date and time: ";

	const dateInput = document.createElement("input");
	dateInput.type = "datetime-local";

	dateInput.required = true;
	const confirmButton = document.createElement("button");
	confirmButton.type = "button";
	confirmButton.textContent = "Confirm plan";
	planningArea.append(confirmButton);

	confirmButton.addEventListener("click", function() {
		dateInput.setCustomValidity("");
		if (!dateInput.reportValidity())
			return ;
		const selectedDate = new Date(dateInput.value);
		const now = new Date();

		if (selectedDate <= now) {
			dateInput.setCustomValidity("Choose a future date and time");
			dateInput.reportValidity();
			return ;
		}
	    // console.log(dateInput.value);
		const planItem = document.createElement("li");
		const planDate = document.createElement("p");

		planDate.textContent = selectedDate.toLocaleString();

		planningArea.remove();
		planButton.remove();

		planItem.append(ideaDetails, planDate);

		let isGoing = false;
		const attendanceText = document.createElement("p");
		attendanceText.textContent = "Going: 0"

		const attendanceButton = document.createElement("button");
		attendanceButton.type = "button";
		attendanceButton.textContent = "I'm going";

		attendanceButton.addEventListener("click", function() {
			isGoing = !isGoing;
			if (isGoing)
			{
				attendanceText.textContent = "Going: 1 — You're going ✓";
       			attendanceButton.textContent = "Can't make it";
			}
			else
			{
				attendanceText.textContent = "Going: 0";
        		attendanceButton.textContent = "I'm going";
			}
		});
		planItem.append(attendanceText, attendanceButton);
		planList.append(planItem);

		emptyPlansMessage.hidden = true;
		ideaRow.remove();
	});

	dateLabel.append(dateInput);
	planningArea.append(dateLabel);
	ideaDetails.append(planningArea);

	planButton.addEventListener("click", function() {
		planningArea.hidden = false;
		dateInput.focus();
	});

	ideaCell.append(ideaDetails);

	const interestedCell = document.createElement("td");

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
	descriptionArea.open = false;
	ideaInput.focus();
});
