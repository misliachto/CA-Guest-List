//  VARIABLES
const btnAddFirst = document.querySelector("#btn-add-first");
const btnAddLast = document.querySelector("#btn-add-last");
const btnRemoveFirst = document.querySelector("#btn-remove-first");
const btnRemoveLast = document.querySelector("#btn-remove-last");


const nameInput = document.querySelector('#name-input');
const inviteeList = document.querySelector('.invitees-list');
let inviteeArray = [];

// FUNCTIONS
function getNameInput() {//??
    return parseFloat(nameInput.value)
}
//  --adding guest to the end of the list
function addFirstGuest() {
    inviteeArray.unshift(`<li>${nameInput.value}</li>`);
    outputInviteeList();
}

//  --adding guest to the end of the list
function addLastGuest() {
    inviteeArray.push(`<li>${nameInput.value}</li>`);
    outputInviteeList();
}
//  --removing last name from array
function removeLastGuest() {
    inviteeArray = inviteeArray.slice(0,-1)
    outputInviteeList();
    return
}
//  --removing first name from arra
function removeFirstGuest() {
    inviteeArray = inviteeArray.shift();
    outputInviteeList();
    return
}

// --outputting content
function outputInviteeList() {
    inviteeList.innerHTML = inviteeArray.toString();
}

// EVENTS

btnAddFirst.addEventListener("click", addFirstGuest);
btnAddLast.addEventListener("click", addLastGuest);
btnRemoveLast.addEventListener("click", removeLastGuest);
btnRemoveFirst.addEventListener("click", removeFirstGuest);



/*
- “Remove First” - to remove first name from the list
- “Remove Last” - to remove last name from the list
- “Reverse List” - reverse this list
Of course output the list in the screen for user to see.
Bonus: if you are faster, you can try to add these as well:
- “Remove from - to” - to remove list items from certain index to certain point in the list.
If only from provided - delete only 1 item. Will need additional input fields.
- “Add at certain point” - to add name at certain point in the list.
- “Move last to first” - to move last guest to the start of the list.
- “Move first to last” - to move first guest to last
*/