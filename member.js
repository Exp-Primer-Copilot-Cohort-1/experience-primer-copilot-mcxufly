function skillsMember() {
  return {
    name: 'John Doe',
    age: 25,
    skills: ['JavaScript', 'React', 'Node'],
    getSkills: function() {
      return this.skills;
    }
  };
}