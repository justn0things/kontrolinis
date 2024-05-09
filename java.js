$(document).ready(function() {
    var submitButton = $('#taskEntryButton');
    var taskEntry = $('#taskEntryField');

    function submitFunction() {
        var newTaskContent = $('#taskEntryField').val();
        var newListItem = document.createElement('li');
        var newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        newListItem.appendChild(newCheckbox);
        newCheckbox.setAttribute('class', 'activeCheckBox');
        var label = document.createElement('label');
        label.innerText = newTaskContent;
        newCheckbox.after(label);
        var buttonHolder = document.createElement('div');
        buttonHolder.setAttribute('class', 'newButtonHolder');
        label.after(buttonHolder);
        var deleteButton = document.createElement('button');
        deleteButton.addEventListener("click", deleteItem);
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = "Delete";
        buttonHolder.appendChild(deleteButton);
        $('#activeTaskList').prepend(newListItem);
        taskEntry.val("");
        updateCheckboxCount(); // Update checkbox count
    };

    submitButton.click(submitFunction);

    taskEntry.keypress(function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            submitFunction();
            taskEntry.val("");
            updateCheckboxCount(); // Update checkbox count
        }
    });

    function deleteItem() {
        let item = this.parentNode.parentNode;
        let parent = item.parentNode;
        parent.removeChild(item);
        updateCheckboxCount(); // Update checkbox count
    };

    var activeTabButton = document.getElementById('activeButton');
    var completedTabButton = document.getElementById('completedButton');
    var activeTab = document.getElementById('activeTasks');
    var completedTab = document.getElementById('completedTasks');

    activeTabButton.addEventListener("click", function() {
        if (activeTab.style.display !== "block") {
            activeTab.style.display = "block";
            completedTab.style.display = "none";
        };
    });

    completedTabButton.addEventListener("click", function() {
        if (completedTab.style.display !== "block") {
            completedTab.style.display = "block";
            activeTab.style.display = "none";
        };
    });

    // Function to count selected checkboxes
    function updateCheckboxCount() {
        var selectedCheckboxes = $('.activeCheckBox:checked').length;
        $('#selectedCount').text(selectedCheckboxes); // Assuming you have an element with id 'selectedCount' to display the count
    }

    // Initial count update
    updateCheckboxCount();
});
