document.getElementById("laptopForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const employee = document.getElementById("employee").value.trim();
    const department = document.getElementById("department").value;
    const laptop = document.getElementById("laptop").value;
    const quantity = Number(document.getElementById("quantity").value);
    const statusBox = document.getElementById("statusBox");

    if (!employee || !department || !laptop || quantity < 1) {
        statusBox.innerHTML = '<p class="error">Please enter all required details.</p>';
        return;
    }

    statusBox.innerHTML = `
        <p><strong>Request submitted successfully.</strong></p>
        <p>Employee: ${employee}</p>
        <p>Department: ${department}</p>
        <p>Laptop: ${laptop}</p>
        <p>Quantity: ${quantity}</p>
        <p>Flow: Request Submitted → Validation → Approval → Order Ready</p>
        <p class="success"><strong>Status: Approved - Order Ready</strong></p>
    `;
});
