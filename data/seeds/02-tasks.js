
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    { description: "Do the dishes", project_id: 1 }
  ])
};
