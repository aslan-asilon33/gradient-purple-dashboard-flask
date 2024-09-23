// Function to format numbers with thousand separators
function formatAllPrices() {
    // Get all elements with the class 'price'
    const priceElements = document.querySelectorAll('.price');
    
    // Loop through each element
    priceElements.forEach(function(priceElement) {
        // Get the text content, remove "Rp", any commas, and trim whitespace
        let priceText = priceElement.textContent.replace('Rp', '').replace(/\./g, '').trim();

        // Convert the string to a number
        let priceNumber = parseInt(priceText);

        // Check if the price is a valid number
        if (!isNaN(priceNumber)) {
            // Format the number with thousand separators
            let formattedPrice = priceNumber.toLocaleString('id-ID');

            // Set the formatted price back to the element with "Rp" in front
            priceElement.textContent = `Rp ${formattedPrice}`;
        }
    });
}

// Call the function to format all prices
formatAllPrices();
