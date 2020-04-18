
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    { name: "Computer" },
    { name: "John Doe", description: "Head of marketing" }
  ])
};
