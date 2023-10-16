import { Typography } from "@mui/material";
describe("Login Page", () => {
  it("should log in with valid credentials", () => {
    cy.visit("http://localhost:3000/");

    cy.get('input[id="email"]').type("thejanbweerasekara@gmail.com");
    cy.get('input[id="password"]').type("12345");

    cy.get("button").contains("Login").click();

    cy.url().should("include", "http://localhost:3000/adminDashboard");
  });

  it("should show an error message with invalid credentials", () => {
    cy.visit("http://localhost:3000/");

    cy.get('input[id="email"]').type("invalid-email");
    cy.get('input[id="password"]').type("12345");

    cy.get("button").contains("Login").click();

    cy.contains("*Please enter a valid email.");
  });

  it("should show an error message when the email is empty", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[id="password"]').type("password123");

    cy.get("button").contains("Login").click();

    cy.contains("Please enter an email.");
  });

  it("should show an error message with an invalid email", () => {
    cy.visit("http://localhost:3000/");

    cy.get('input[id="email"]').type("invalid-email");
    cy.get('input[id="password"]').type("password123");

    cy.get("button").contains("Login").click();

    cy.contains("*Please enter a valid email.");
  });
});
