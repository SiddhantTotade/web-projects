// Country Dropdown
document.querySelector('.dropbtn').addEventListener('click', () => {
    document.getElementById("myDropdown").classList.toggle("show");
})

document.querySelector('.dropbtn-state').addEventListener('click', () => {
    document.getElementById("myDropdown-state").classList.toggle("show-state");
})

document.querySelector('.address-type-btn').addEventListener('click', () => {
    document.getElementById("myDropdown-add").classList.toggle("show-add");
})

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.dropbtn-state')) {
        var dropdownsState = document.getElementsByClassName("dropdown-content-state");
        var i;
        for (i = 0; i < dropdownsState.length; i++) {
            var openDropdownState = dropdownsState[i];
            if (openDropdownState.classList.contains('show-state')) {
                openDropdownState.classList.remove('show-state');
            }
        }
    }
    if (!event.target.matches('.address-type-btn')) {
        var dropdownsState = document.getElementsByClassName("dropdown-content-add");
        var i;
        for (i = 0; i < dropdownsState.length; i++) {
            var openDropdownState = dropdownsState[i];
            if (openDropdownState.classList.contains('show-add')) {
                openDropdownState.classList.remove('show-add');
            }
        }
    }
}

// State Dropdown
// window.onclick = function (event) {
// }