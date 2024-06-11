function skillsMember() {
  const member = {
    name: 'John Doe',
    age: 30,
    skills: ['JavaScript', 'CSS', 'HTML'],
  };

  // Accessing object properties
  console.log(member.name); // John Doe
  console.log(member.age); // 30
  console.log(member.skills); // ['JavaScript', 'CSS', 'HTML']

  // Accessing array elements
  console.log(member.skills[0]); // JavaScript
  console.log(member.skills[1]); // CSS
  console.log(member.skills[2]); // HTML
}
