const date = new Date()
date.setMonth(date.getMonth() + 2)
date.setHours(date.getHours() + 4)

const twoHours = date.toLocaleTimeString()
const twoMonths = date.toISOString().substring(0,10);

export const exhibitData: ExhibitList[] = [
    {
      Id: 1,
      Name: "Vintage Art Collection",
      Description: "An exhibit featuring a curated collection of vintage artworks spanning different periods and styles.",
      Schedule: 'Ongoing',
      DatePosted: new Date().toISOString().substring(0,10),
      Image: "art.jpg",
      Participants: 50
    },
    {
      Id: 2,
      Name: "Contemporary Sculpture Showcase",
      Description: "A showcase highlighting contemporary sculptural works by emerging and established artists.",
      Schedule: 'Scheduled',
      DatePosted: twoHours,
      Image: "sculpture.jpg",
      Participants: 30
    },
    {
      Id: 3,
      Name: "Modern Photography Exploration",
      Description: "An exploration of modern photography techniques and styles, featuring works by contemporary photographers.",
      Schedule: 'Scheduled',
      DatePosted: twoMonths, // Schedule 2 months hence
      Image: "photo.jpg",
      Participants: 45
    },
    {
      Id: 4,
      Name: "Masterpieces of the Renaissance",
      Description: "A comprehensive exhibit showcasing masterpieces from the Renaissance era, including paintings, sculptures, and artifacts.",
      Schedule: 'Ended',
      DatePosted: new Date('2024-01-10').toISOString().substring(0,10),
      Image: "masterpieces.jpg",
      Participants: 100
    },
  ];
  