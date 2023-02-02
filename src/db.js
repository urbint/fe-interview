const faker = require("@faker-js/faker").faker;

module.exports = () => {
  const data = { users: [] };
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
    });
  }
  return data;
};
