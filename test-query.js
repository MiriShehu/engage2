const q = `
  query GetTeamMembers {
    teamMembers(first: 100) {
      nodes {
        id
        slug
        title
        positionTitle
        content
        excerpt
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
    console.log("SUCCESS");
  }
})
.catch(e => console.error(e));
