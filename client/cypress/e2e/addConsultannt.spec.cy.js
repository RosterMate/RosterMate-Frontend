describe("AddingConsultant Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");

    cy.get('input[id="email"]').type("thejanbweerasekara@gmail.com");
    cy.get('input[id="password"]').type("12345");

    cy.get("button").contains("Login").click();

    cy.url().should("include", "http://localhost:3000/adminDashboard");

    // Click on a button or link that navigates to the addWards page from adminDashboard.
    cy.get("button or link selector to navigate to addWards").click();

    cy.url().should("include", "http://localhost:3000/addWard");
  });

  it("should display the form", () => {
    cy.get(".form_container").should("exist");
    cy.get("h1:contains('Add Consultant')").should("exist");
  });

  it("should display an error message with invalid credentials", () => {
    cy.get("input[id='email']").type("invalid-email");
    cy.get("input[id='password']").type("12345");
    cy.get("button:contains('Submit')").click();

    cy.get("Typography.variant-body2[color=error]")
      .should("exist")
      .contains("*Please enter a valid email.");
  });

  it("should successfully add a consultant with valid input", () => {
    // Fill in the form with valid data
    cy.get("input[id='fullname']").type("John Doe");
    cy.get("input[id='mobileNo']").type("1234567890");
    cy.get("input[id='position']").type("Doctor");
    cy.get("input[id='email']").type("john.doe@example.com");
    cy.get("input[id='password']").type("password123");
    cy.get("input[id='address']").type("123 Main St");
    cy.get("select[id='wardnumber']").select("Ward ID 1");
    cy.get("input[id='degree']").type("MD");
    cy.get("input[id='specialization']").type("Cardiology");
    cy.get("button:contains('Submit')").click();

    // Assert that the success modal is displayed
    cy.get(".PopupModal").should("exist");
    cy.get("h4:contains('Consultant added successfully')").should("exist");
  });

  it("should display an error message for missing required fields", () => {
    cy.get("button:contains('Submit')").click();

    cy.get("Typography.variant-body2[color=error]")
      .should("exist")
      .contains("*Please enter all the details.");
  });

  it("should display an error message for an invalid mobile number", () => {
    cy.get("input[id='mobileNo']").type("123");
    cy.get("button:contains('Submit')").click();

    cy.get("Typography.variant-body2[color=error]")
      .should("exist")
      .contains("*Enter a valid mobile number.");
  });
});
