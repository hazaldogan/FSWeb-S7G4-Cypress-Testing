describe("Member Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("sayfa hatasız yükleniyor", () => {
    cy.get("h4").should("have.text", "Users");
  });

  it("4 form alanı ve bir buton görünüyor", () => {
    cy.get("input").should("have.length", 4);
    cy.get("button").should("have.length", 1);
  });

  it("gönder butonu disabled", () => {
    cy.get("button[type='submit']").should("be.disabled");
  });

  const correct = {
    name: "Student",
    email: "dobby@workintech.com.tr",
    password: "12345d",
    terms: true,
  };

  it("yazdığım doğru değerler", () => {
    cy.get('input[name="name"]')
      .type(correct.name)
      .should("have.value", correct.name);
    cy.get('input[name="email"]')
      .type(correct.email)
      .should("have.value", correct.email);
    cy.get('input[name="password"]')
      .type(correct.password)
      .should("have.value", correct.password);
    cy.get('input[name="terms"]').check().should("be.checked");
  });

  const inCorrect = {
    name: "5t",
    email: "dobbyworkintech.com.tr",
    password_case1: "123456",
    password_case2: "12345",
    terms: false,
  };
});
