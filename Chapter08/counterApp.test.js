describe('Counter App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('increases the counter', () => {
    cy.get('[data-testid="increment-button"]').click();

    cy.get('[data-testid="counter-display"]').contains('Count: 1');
  });

  it('decreases the counter', () => {
    cy.get('[data-testid="decrement-button"]').click();

    cy.get('[data-testid="counter-display"]').contains('Count: -1');
  });

  it('increases and decreases the counter', () => {
    cy.get('[data-testid="increment-button"]').click().click();

    cy.get('[data-testid="decrement-button"]').click();

    cy.get('[data-testid="counter-display"]').contains('Count: 1');
  });
});
