const queriesToTry = [
  // Flat fields if not using ACF group nesting
  `query { teamMembers(first: 1) { nodes { positionTitle } } }`,
  `query { teamMembers(first: 1) { nodes { jobTitle } } }`,
  `query { teamMembers(first: 1) { nodes { position_title } } }`,
  `query { teamMembers(first: 1) { nodes { position } } }`,
  `query { teamMembers(first: 1) { nodes { role } } }`,
  
  // Nested under a common ACF group name
  `query { teamMembers(first: 1) { nodes { teamMemberFields { positionTitle jobTitle position role } } } }`,
  `query { teamMembers(first: 1) { nodes { teamMemberData { positionTitle jobTitle position role } } } }`,
  `query { teamMembers(first: 1) { nodes { acf { positionTitle jobTitle position role } } } }`,
  `query { teamMembers(first: 1) { nodes { customFields { positionTitle jobTitle position role } } } }`,
  `query { teamMembers(first: 1) { nodes { teamMember { positionTitle jobTitle position role } } } }`,
  `query { teamMembers(first: 1) { nodes { team_member { positionTitle jobTitle position role } } } }`,
];

async function probe() {
  for (let q of queriesToTry) {
    try {
      const r = await fetch('https://manage.engagehealthgroup.co.uk/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q })
      });
      const d = await r.json();
      if (!d.errors) {
        console.log("SUCCESS query:", q);
        console.log("Response:", JSON.stringify(d.data, null, 2));
        return;
      } else {
        // Look for "Did you mean" in errors
        for (let err of d.errors) {
          if (err.message.includes("Did you mean")) {
            console.log("Hint found for query", q, "->", err.message);
          }
        }
      }
    } catch(e) {}
  }
  console.log("No exact match found, but here are the hints.");
}

probe();
