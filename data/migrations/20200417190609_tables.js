
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.text('name', 128).notNullable()
            tbl.text('description', 256)
            tbl.boolean('completed').defaultTo(false)
        })
        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.text('description', 256).notNullable()
            tbl.text('notes', 256)
            tbl.boolean('completed').defaultTo(false)
            tbl.integer('project_id').unsigned().references('projects.id')
        })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.text('name', 128).notNullable().unique()
            tbl.text('description', 256)
        })
        .createTable('project_resources', tbl => {
            tbl.integer('project_id').unsigned().references('projects.id')
            tbl.integer('resource_id').unsigned().references('resources.id')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
};  
