        const buttons = document.querySelectorAll('button');
        //select buttons and stores in an array
        const container1 = document.querySelector(".container1");
        //select the place to show the result of the operation
        const container2 = document.querySelector(".container2")


        buttons.forEach(button => {
            button.addEventListener("click", operate);
        });
        //add event listener to each button

        function operate(event) {
            //calculator function
            const clickedButtonValue = event.target.value;
            //store in the variable the current clicked button´s value

            if (clickedButtonValue === '=') {
                //check if the display is not empty
                if (container1.value !== '') {
                    container2.value = eval(container1.value);
                    //RECORD
                    console.log(container1.value)
                }
                //calculate and show the answer to display
            } else if (clickedButtonValue === 'C') {
                container1.value = '';
                container2.value = '';
                //clear everything
            } else {
                container1.value += clickedButtonValue;
                //concatenate it to the display
            }
        }

        //DARK_MODE
        function dlMode() {
            var darkMode1 = document.querySelectorAll('.colors')
            darkMode1.forEach(dark => {
                dark.classList.toggle('darkMode1')
            });
            var darkMode2 = document.querySelector('.container')
            darkMode2.classList.toggle('darkMode2')
        }