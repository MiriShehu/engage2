const q = `
  query {
    __type(name: "TeamMember") {
      name
      fields {
        name
        type { name kind }
      }
    }
  }
`;

fetch('https://manage.engagehealthgroup.co.uk/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: q })
})
.then(r => r.json())
.then(d => {
  if (d.errors) {
    console.log("GraphQL Errors:", JSON.stringify(d.errors, null, 2));
    return;
  }
  const fields = d.data.__type.fields;
  console.log("TeamMember fields containing 'position', 'job', 'title', 'acf', or 'team':");
  fields.forEach(f => {
    const fn = f.name.toLowerCase();
    if (fn.includes('position') || fn.includes('job') || fn.includes('title') || fn.includes('acf') || fn.includes('team')) {
      console.log(f.name, f.type.name, f.type.kind);
    }
  });
})
.catch(e => console.error(e));
