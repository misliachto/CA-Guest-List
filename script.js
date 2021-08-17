//  VARIABLES
const btnAddFirst = document.querySelector("#btn-add-first");
const btnAddLast = document.querySelector("#btn-add-last");
const btnRemoveFirst = document.querySelector("#btn-remove-first");
const btnRemoveLast = document.querySelector("#btn-remove-last");
const btnReverseList = document.querySelector("#btn-reverse-list");


const nameInput = document.querySelector('#name-input');
const inviteeList = document.querySelector('.invitees-list');
let inviteeArray = [];

// FUNCTIONS
const getNameInput = () => {//??
    return parseFloat(nameInput.value)
}
//  --adding guest to the end of the list
const addFirstGuest = () => {
    inviteeArray.unshift(`<li>${nameInput.value}</li>`);
    outputInviteeList();
}
//  --adding guest to the end of the list
const addLastGuest = () => {
    inviteeArray.push(`<li>${nameInput.value}</li>`);
    outputInviteeList();
}
//  --removing last name from array
const removeLastGuest = () => {
    inviteeArray = inviteeArray.slice(0, -1)
    outputInviteeList();
    return
}
//  --removing first name from arra
const removeFirstGuest = () => {
    inviteeArray = inviteeArray.slice(1);
    outputInviteeList();
    return
}
//  --reversing list
const reverseList = () => {
    let reversed = inviteeArray.reverse();
    inviteeArray = reversed;
    outputInviteeList();
    return
}
// --outputting content
function outputInviteeList() {
    inviteeList.innerHTML = inviteeArray.join(" ");
}

// EVENTS

btnAddFirst.addEventListener("click", addFirstGuest);
btnAddLast.addEventListener("click", addLastGuest);
btnRemoveLast.addEventListener("click", removeLastGuest);
btnRemoveFirst.addEventListener("click", removeFirstGuest);
btnReverseList.addEventListener("click", reverseList);

/*
- “Remove from - to” - to remove list items from certain index to certain point in the list.
If only from provided - delete only 1 item. Will need additional input fields.
- “Add at certain point” - to add name at certain point in the list.
- “Move last to first” - to move last guest to the start of the list.
- “Move first to last” - to move first guest to last
*/