# Streamlining IT Procurement: Automating Standard Laptop Orders with Flow Designer

## Project Overview
This project demonstrates an automated standard laptop procurement workflow. A user submits a laptop request, the request is validated, approval is checked, and the order status is updated automatically.

## Main Features
- Laptop request form
- Standard laptop catalog
- Automatic request validation
- Approval workflow simulation
- Automatic status updates
- Request tracking page

## Flow Designer Logic
1. Trigger: New laptop request is submitted.
2. Validate requester and laptop details.
3. Check whether the selected laptop is a standard model.
4. If valid, create an approval task.
5. If approved, update the request to "Order Ready".
6. If rejected, update the request to "Rejected".
7. Display the latest request status.

## Technologies
- HTML
- CSS
- JavaScript

## Note
This is a browser-based demonstration of the Flow Designer concept. In a real ServiceNow implementation, the same logic can be implemented using ServiceNow Flow Designer, Catalog Items, Approvals, and Requested Items.
