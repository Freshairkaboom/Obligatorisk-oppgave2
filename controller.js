function selectBar(selectedBar) {
    if (chosenBar == selectedBar) {
        chosenBar = "Ingen";
        disabled = 'disabled';
    } else {
    chosenBar = selectedBar;
    disabled = '';
    }
    show();
    return chosenBar;
}

function removeBar() {
    delete numbers[chosenBar - 1];
    disabled = 'disabled';
    chosenBar = '';
    numbers = numbers.filter(function () {
        return true;
    }); //Spør om dette.
    show();
}

function editBar() {
    if (!(10 < inputValue || inputValue == undefined || inputValue == 0)) {
    numbers[chosenBar - 1] = inputValue;
    show();
    return "edited " + chosenBar;
    }
    else {
        alert("Feltet er tomt eller du har valgt et tall over 10!");
    }
}

function addBar() {
    if (!(10 < inputValue || inputValue == undefined || inputValue == 0)) {
        numbers.push(inputValue);
        show();
        return "Added bar with value " + inputValue;
    }
    else {
        alert("Feltet er tomt eller du har valgt et tall over 10!");
    }
}
