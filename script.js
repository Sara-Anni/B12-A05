let coinCount = 100;

function decreaseCoins() {
            if (coinCount >= 20) {
                coinCount -= 20;
                updateCoinDisplay();
            } else {
                alert("No coins left");
            }
        }

// Function to update coin display
        function updateCoinDisplay() {
            const coinText = document.getElementById('coinText');
            if (coinText) {
                coinText.textContent = coinCount;
            }
        }

// Add event listeners to all "Call" buttons
        //document.addEventListener('DOMContentLoaded', () => {
            //const callButtons = document.querySelectorAll('.call-button');
            //callButtons.forEach(button => {
                //button.addEventListener('click', decreaseCoins);
           //});
        //});

        // Initial display update
        //updateCoinDisplay();


        let copyCount = 0; 
        function increaseCopyCount() {
            copyCount += 1;
            updateCopyDisplay();
        }
        
// Function to update copy display
        function updateCopyDisplay() {
            const copyCountDisplay = document.getElementById('copyCountDisplay');
            if (copyCountDisplay) {
                copyCountDisplay.textContent = `${copyCount} Copy${copyCount !== 1 ? 's' : ''}`;
            }
        }