chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'executeScript') {

        // hide graphs, toggles, refreshes, and tipables
        document.querySelectorAll(".infinibee-parent, .expand-collapse, .expanded-toggle, .refresh, .tipable").forEach(element => { element.style.display = "none"; });

        // smaller octicons
        document.querySelectorAll(".mega-octicon").forEach(element => {
            element.style.fontSize = "1rem";
            element.style.lineHeight = 1;
        });


        // organize goal data elements
        const goalDataElements = document.querySelectorAll('.goal-data');

        goalDataElements.forEach(goalDataElement => {
            const summaryElement = goalDataElement.querySelector('.summary');
            const lastDataPointElement = goalDataElement.querySelector('.last-datapoint');
            const formElement = goalDataElement.querySelector('form');
            summaryElement.style.flex = '0 0 20%'; // Change width to 20%
            lastDataPointElement.style.flex = '0 0 20%'; // Change width to 20% 

            // if not auto data and form exists
            if (formElement) {
                const addDataElement = formElement.querySelector('.add-data-date');
                const stepperElement = formElement.querySelector('.stepper-control');
                const commentElement = formElement.querySelector('input[name="datapoint-comment"]');
                const submitElement = formElement.querySelector('input[type="submit"]');
                const stepperInput = stepperElement.querySelector('.stepper-value');

                // Apply styles to form elements
                addDataElement.style.height = '30px'; // Change height to 30px
                addDataElement.style.marginBottom = '0px'; // Change margin to 0px
                stepperElement.style.height = '30px'; // Change height to 30px
                stepperElement.style.marginBottom = '0px'; // Change margin to 0px
                stepperInput.style.height = '100%';
                commentElement.style.height = '30px'; // Change height to 30px
                commentElement.style.marginBottom = '0px'; // Change margin to 0px
                commentElement.placeholder = 'comment'; // Change placeholder
                submitElement.style.height = '30px'; // Change height to 30px
                submitElement.value = 'Add'; // Change value

                goalDataElement.querySelector('.bbtn').style.lineHeight = '1';
                stepperElement.querySelector('.units').style.display = 'none'; // Hide units
                formElement.style.height = '60px'; // Change height to 60px
                formElement.style.margin = '0px';
                formElement.style.display = 'flex';
                formElement.style.alignItems = 'center';
            }
            else { // if auto data
                const refreshWrapper = goalDataElement.querySelector('.refresh-wrapper');
                const siteIconElement = refreshWrapper.querySelector('img');
                refreshWrapper.style.flex = '0 0 40%'; // Change width to 40%
                refreshWrapper.style.display = 'flex';
                refreshWrapper.style.alignItems = 'center';
                siteIconElement.style.height = '30px'; // Change height to 30px
                siteIconElement.style.margin = '0px'; // Change margin to 0px
            }
        });

        // Todo
        // sort goals by auto data or not (if soneone needs it)
        /*
        const sortButtonsContainer = document.getElementById('sort-buttons');
        const allSortButtons = document.querySelectorAll('.sort-button');
         
        // Create the "Auto" btn 
        const autoSortButton = document.createElement('a');
        autoSortButton.href = '#';
        autoSortButton.className = 'sort-button';
        autoSortButton.textContent = 'Auto';
        autoSortButton.innerHTML += '<span class="sort-arrow octicon"></span>';
        sortButtonsContainer.appendChild(autoSortButton);
         
        // Add specific functionality for the Auto button
        autoSortButton.addEventListener('click', function (event) {
            const sortArrow = autoSortButton.querySelector('.sort-arrow');
            sortArrow.classList.add('octicon-triangle-down');
         
            // Remove the "octicon-triangle-down" class from all other buttons
            allSortButtons.forEach(button => {
                const sortArrow = button.querySelector('.sort-arrow');
                if (button !== autoSortButton) {
                    sortArrow.classList.remove('octicon-triangle-down');
                }
            });
        });
        */
    }
});
