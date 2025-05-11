// cypress/support/commands/login.js
Cypress.Commands.add("loginAPI", () => {
  cy.request({
    method: "POST",
    url: "/auth/login",
    headers: {
      appId:
        "WRdC75eHzvJT6FDw5fsfjX9TMuRCCXA3JbXhWcCXhB4VTKvU4ffCYCOH9P4x9nOaE34oeaIZ36c1bzFrMWS5CUWarmUHjUUeNzG4QXuPSAAIKHznN8fZOKKlNLsXuEwFODlyUYytGyz8umWsUCHGM6KR0JPSqPO7i2YQ2QeHAq9wa8RvZWzv4m2dh67T0bcU8e4zdfn9K4uCdWtozj9tb1sm3dTwfvvjN9e1ND678OWHRaCAxpV6zwj29Z6k2lu3g5JqPlUZ1aEC2p3Zir9j2PpSFpZeyGyPHzeNjR3MpzC32LySFXdQiYtTJdvRIPjtP9PKrlj3HsfYt42ucluuwhbsRMoMbKO6FI81cKToQj6YArKvOmBHnc0ItBwSMIplKOZ1iialRZCTb6WTm6oHFbK4YSdwHuiLGxkgHb4P9kz0kuU4wh6TqMY92tENIEGZqgg1hDA1tV6WdAhhwe044CcLMXpL6mRhAbL28dVI32BBYlf4oaiel56jTnZ1dSWF", // GANTI sesuai appId yang kamu pakai
    },
    body: {
      username: "admin",
      password: "admin@123",
    },
  }).then((res) => {
    expect(res.status).to.eq(200);
    Cypress.env("authToken", res.body.data.access_token);
  });
});
