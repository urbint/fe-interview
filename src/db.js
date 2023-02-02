const faker = require("@faker-js/faker").faker;

module.exports = () => {
  const data = { users: [] };
  // Create 1000 users
  for (let i = 0; i < 100; i++) {
    data.users.push({
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      fullName: faker.name.fullName(),
    });
  }
  return data;
};
