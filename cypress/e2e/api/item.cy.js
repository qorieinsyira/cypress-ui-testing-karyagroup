import { generateTestData } from "../../support/utils/dataGenerator";

describe("Item API Full Flow", () => {
  const baseUrl = Cypress.config("baseUrl");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const debugPath = `cypress/fixtures/debug/item-${timestamp}`;

  before(() => {
    cy.loginAPI();
    cy.exec(`mkdir -p ${debugPath}`);
  });

  it("1️ Create Item - POST /master/items", () => {
    const data = generateTestData();
    const token = Cypress.env("authToken");

    cy.request({
      method: "POST",
      url: `${baseUrl}/master/items`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        itemid: data.itemid,
        displayname: data.displayname,
        itemprocessfamily: data.itemprocessfamily,
        unit: "kg",
        isactive: true,
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      const itemData = res.body.data;
      expect(itemData.id).to.exist;
      cy.writeFile("cypress/fixtures/createdItem.json", itemData);
      cy.writeFile(`${debugPath}/post.json`, res.body);
    });
  });

  it("2️ Get All Items - GET /master/items", () => {
    const token = Cypress.env("authToken");

    cy.request({
      method: "GET",
      url: `${baseUrl}/master/items`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data.list).to.be.an("array");
      cy.writeFile(`${debugPath}/getAll.json`, res.body);
    });
  });

  it("3️ Get Item by ID - GET /master/items/:id", () => {
    const token = Cypress.env("authToken");

    cy.fixture("createdItem.json").then((item) => {
      cy.request({
        method: "GET",
        url: `${baseUrl}/master/items/${item.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.data.id).to.eq(item.id);
        cy.writeFile(`${debugPath}/getById.json`, res.body);
      });
    });
  });

  it("4️ Update Item - PUT /master/items/:id", () => {
    const token = Cypress.env("authToken");

    cy.fixture("createdItem.json").then((item) => {
      cy.request({
        method: "PUT",
        url: `${baseUrl}/master/items/${item.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          displayname: "Updated Item Name",
          unit: "pcs",
          isactive: false,
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.data.displayname).to.include("Updated");
        cy.writeFile(`${debugPath}/update.json`, res.body);
      });
    });
  });

  it("5️ Delete Item - DELETE /master/items/:id", () => {
    const token = Cypress.env("authToken");

    cy.fixture("createdItem.json").then((item) => {
      cy.request({
        method: "DELETE",
        url: `${baseUrl}/master/items/${item.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        expect(res.status).to.eq(204);
        cy.writeFile(`${debugPath}/delete.json`, {
          status: res.status,
          message: "Item deleted successfully",
        });
      });
    });
  });
});
