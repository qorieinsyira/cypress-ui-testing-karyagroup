const validUsers = [
  { username: "admin", password: "admin@123", rolePath: "super-admin" },
  {
    username: "sales_indoor",
    password: "salesindoor@123",
    rolePath: "sales-indoor",
  },
  {
    username: "sales_outdoor",
    password: "salesoutdoor@123",
    rolePath: "sales-outdoor",
  },
];

describe("Pengujian Fungsional Login", () => {
  beforeEach(() => {
    cy.visit("https://sales-app-apergu.vercel.app/auth/login");
  });

  // ✅ Positive Case
  validUsers.forEach((user) => {
    it(`Login berhasil sebagai ${user.username}`, () => {
      cy.get('input[placeholder="My Email"]').clear().type(user.username);
      cy.get('input[placeholder="My Password"]').clear().type(user.password);
      cy.get("button")
        .contains(/submit/i)
        .click();

      cy.location("pathname").should("include", `/${user.rolePath}/home`);

      if (user.username === "admin") {
        cy.get("main.ant-layout-content").should("contain.text", "masuk");
      } else {
        cy.contains("Oops, page not found").should("be.visible");
        cy.contains("Go Back").should("be.visible");
      }
    });
  });

  // ❌ Negative Case

  const assertErrorKosong = () => {
    cy.wait(300);
    cy.get(".ant-notification-notice-description")
      .should("be.visible")
      .and("contain.text", "Email and Password are required!");
  };

  it("Menampilkan error jika email & password kosong", () => {
    cy.get("button")
      .contains(/submit/i)
      .click();
    assertErrorKosong();
  });

  it("Menampilkan error jika password kosong", () => {
    cy.get('input[placeholder="My Email"]').type("admin");
    cy.get("button")
      .contains(/submit/i)
      .click();
    assertErrorKosong();
  });

  it("Menampilkan error jika email kosong", () => {
    cy.get('input[placeholder="My Password"]').type("admin@123");
    cy.get("button")
      .contains(/submit/i)
      .click();
    assertErrorKosong();
  });

  it("Menampilkan error jika username/password salah", () => {
    cy.get('input[placeholder="My Email"]').type("wronguser");
    cy.get('input[placeholder="My Password"]').type("wrongpass");
    cy.get("button")
      .contains(/submit/i)
      .click();

    cy.wait(300);
    cy.get(".ant-notification-notice-description")
      .should("be.visible")
      .and("contain.text", "Username or Password Invalid");
  });
});
