const q = `query { teamMembers(first: 1) { nodes { 
  id 
  slug 
  title 
  content 
  excerpt 
  featuredImage { node { sourceUrl } }
  # Let's try to query the most common ACF group names and fields
  acf { jobTitle positionTitle }
  teamMember { jobTitle positionTitle position title }
  teamMemberFields { jobTitle positionTitle }
  fields { jobTitle positionTitle }
  positionTitle
  jobTitle
  position_title
  job_title
} } }`;

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
