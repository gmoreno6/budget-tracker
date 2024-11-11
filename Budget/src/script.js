//Select elements
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const addButton = document.getElementById("add-btn");
const transactionList = document.getElementById("transaction-list");
const totalDisplay = document.getElementById("total");

let totalAmount = 0;

//Add event listener to button
addButton.addEventListener("click", addTransaction);

//Add transaction function
function addTransaction()
{
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (description === "" || isNaN(amount))
    {
        alert("Please enter valid data.");
        return;
    }

    //Create list item
    const transactionItem = document.createElement("li");
    transactionItem.innerHTML = `${description} <span>$${amount}</span>`;

    //Append to transaction list
    transactionList.appendChild(transactionItem);

    //Update total
    totalAmount += amount;
    totalDisplay.textContent = totalAmount.toFixed(2);

    //Clear input fields
    descriptionInput.value = "";
    amountInput.value = "";

}