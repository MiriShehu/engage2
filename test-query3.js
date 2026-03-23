const q = `
  query GetTeamMembers {
    teamMembers(first: 1) {
      nodes {
        positionTitle {
          positionTitle
        }
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
    console.log("ERRORS:", JSON.stringify(d.errors, null, 2));
  } else {
    console.log("SUCCESS:", JSON.stringify(d.data, null, 2));
  }
})
.catch(e => console.error(e));
