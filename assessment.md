### Final Assignment: **Insurance Management System**

#### Scenario:
You have been hired by an insurance company to develop an **Insurance Management System** to streamline their operations. This system will manage users, policies, and claims. The project must follow **MVC architecture** and use **Express.js**. Your solution should be modular, maintainable, and adhere to industry standards.

---

### Requirements:

1. **User Management**:
   - Develop functionalities to manage users with the following fields:
     - `id` (Unique Identifier)
     - `name` (Full Name)
     - `email` (Valid Email Address)
     - `phone` (Contact Number)
   - API Endpoints:
     - `GET /users`: Retrieve the list of all users.
     - `POST /users`: Add a new user to the system.
     - `DELETE /users/:id`: Delete a user by their ID.

2. **Policy Management**:
   - Manage policies with the following details:
     - `policyId` (Unique Identifier)
     - `policyName` (e.g., Health Insurance, Life Insurance)
     - `premium` (Policy Premium Amount)
     - `duration` (Duration of Policy in Years)
   - API Endpoints:
     - `GET /policies`: Retrieve the list of all policies.
     - `POST /policies`: Add a new policy to the system.
     - `DELETE /policies/:id`: Delete a policy by its ID.

3. **Claim Management**:
   - Implement a claims management system with the following fields:
     - `claimId` (Unique Identifier)
     - `userId` (ID of the user making the claim)
     - `policyId` (ID of the policy being claimed)
     - `description` (Details about the claim)
     - `status` (Pending, Approved, or Rejected)
   - API Endpoints:
     - `GET /claims`: Retrieve all claims.
     - `POST /claims`: Submit a new claim.
     - `PATCH /claims/:id`: Update the status of a claim.

4. **Middleware**:
   - Add middleware for the following:
     - **Logging**: Log each request with details like method, URL, and timestamp.
     - **Authentication**: Implement a mock authentication system that validates an authorization token for secured routes.

5. **Validation**:
   - Ensure proper validation for all inputs:
     - `email` must be a valid email address.
     - `premium` and `duration` must be positive numbers.
     - `status` for claims should only accept `Pending`, `Approved`, or `Rejected`.

6. **Error Handling**:
   - Handle invalid requests and unexpected errors gracefully.
   - Return appropriate HTTP status codes and error messages.

7. **File-Based Data Storage**:
   - Use text files (`users.txt`, `policies.txt`, and `claims.txt`) for data storage.
   - Perform CRUD operations by reading and writing data to these files.

8. **Folder Structure**:
   - Follow a clean and modular folder structure:
     ```
     insurance-system/
     ├── controllers/
     ├── middlewares/
     ├── models/
     ├── routes/
     ├── data/
     ├── app.js
     ├── package.json
     ```

---

### Deliverables:
1. Fully implemented **Insurance Management System** with all functionalities working as described.
2. Use the MVC architecture to organize your code.
3. Test all APIs using Postman or any API testing tool and ensure the outputs match the requirements.
4. Handle all edge cases and errors gracefully.

---

### Evaluation Criteria:
1. **Correctness**:
   - All functionalities should work as expected.
   - Input validations and error handling should be implemented properly.

2. **Architecture**:
   - Adherence to MVC principles.
   - Clean and modular code organization.

3. **Middleware Usage**:
   - Proper implementation of logging and authentication middleware.

4. **Code Quality**:
   - Readable, maintainable, and reusable code.

5. **Testing**:
   - All endpoints should be tested thoroughly for various scenarios.

---

### Example Use Cases:
1. **Add a New User**:
   - Add a user with name, email, and phone number.
   - Ensure that duplicate emails are not allowed.

2. **Add a New Policy**:
   - Create policies with unique IDs, names, premiums, and durations.

3. **File-Based Data Persistence**:
   - Verify that data persists correctly in the corresponding text files (`users.txt`, `policies.txt`, `claims.txt`).

4. **Claim Status Update**:
   - Submit a claim for a user and update its status from `Pending` to `Approved`.

---
