
const notes = [
  {
  note_id: "",
  content_type: "",
  content:"",
  level:"",
  visible_to_admin:"",
  visible_to_moderator:"00ultx74kMUmEW8054x6",
  visible_to_mentor:"",
  profile_id_mentor:"",
  profile_id_mentee:,
  created_date:Date.now(),
  last_modified_date:Date.now()
];
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
