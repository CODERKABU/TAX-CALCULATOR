function calculateTax() {
    // Get the input value
    let basicSalary = parseFloat(document.getElementById('basicSalary').value);

    // Check if the input is a number and not negative
    if (!isNaN(basicSalary) && basicSalary >= 0) {
        let tax = 0;

        // Calculate tax based on tax slabs
        if (basicSalary <= 600000) {

            tax = 0;

            

        } else if (basicSalary <= 900000) {
        
            tax = (basicSalary - 600000) * 0.10;



        } else if (basicSalary <= 1200000) {

            tax = (basicSalary - 900000) * 0.15 + 30000; 
            

            
        } else if (basicSalary <= 1500000) {

            tax = (basicSalary - 1200000) * 0.20 + 75000;  

             

            
        } else {

            tax = (basicSalary - 1500000) * 0.30 + 135000;  

          
            
        }


        document.getElementById('result').innerHTML = `<p>Your payable income tax is: ${tax.toFixed(2)} INR</p>`;

    } else {
        
        document.getElementById('result').innerHTML = "<p>Please enter a valid positive number.</p>";

    }
}