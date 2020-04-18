
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    { name: "Test Project", description: "This is a description :)" }
  ])
};
