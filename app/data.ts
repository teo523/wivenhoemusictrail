export type Location = {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
  lat?: number;
  lng?: number;
  approximate?: boolean;
};

export type ArtistEvent = {
  slug: string;
  title: string;
  artist: string;
  start: number;
  duration: number;
  image: string;
  shortDescription: string;
  description: string;
  locationId: string;
  timelineGroupId: string;
  tbc?: boolean;
  artistOrder?: number;

};

export type TimelineEvent = {
  id: string;
  title: string;
  start: number;
  duration: number;
  artistEventIds: string[];
  shortDescription?: string;
};

export type TimelineRow = {
  name: string;
  color: string;
  events: TimelineEvent[];
};

export const locations: Location[] = [
  { id: "olive-branch", name: "The Olive Branch", address: "The Olive Branch", mapsUrl: "https://maps.app.goo.gl/biXeMay6pPDHT6zZ6", lat: 51.8556, lng: 0.9577, approximate: true },
  { id: "rosabelle-carpark", name: "Rosabelle Avenue Carpark", address: "Rosabelle Avenue Carpark", mapsUrl: "https://maps.app.goo.gl/aJDac7oJrcwKUFU89", lat: 51.8587, lng: 0.9508, approximate: true },
  { id: "old-manse", name: "The Old Manse", address: "The Old Manse, 40 High Street", mapsUrl: "https://maps.app.goo.gl/uMM61wUiwwnbAeF17", lat: 51.8555, lng: 0.9580, approximate: true },
  { id: "sandford-8", name: "8 Sandford Close", address: "8 Sandford Close", mapsUrl: "https://maps.app.goo.gl/8puYhJEYcVeGgU177", lat: 51.85734, lng: 0.96227, approximate: true },
  { id: "the-nook-12", name: "12 The Nook", address: "12 The Nook", mapsUrl: "https://maps.app.goo.gl/yjPJrDAukUEpU6Yy5", lat: 51.85873, lng: 0.96183, approximate: true },
  { id: "old-ferry-56", name: "Creek House, 56 Old Ferry Road ", address: "Creek House, 56 Old Ferry Road ", mapsUrl: "https://maps.app.goo.gl/ZDm2vXouYVaHuMtUA", lat: 51.85514860599746, lng:0.9530163670832059, approximate: true },  
  { id: "claremont-15", name: "15 Claremont Road", address: "15 Claremont Road", mapsUrl: "https://maps.app.goo.gl/yjPJrDAukUEpU6Yy5", lat: 51.8583, lng: 0.9673, approximate: true },
  { id: "sandford-11", name: "11 Sandford Close", address: "11 Sandford Close", mapsUrl: "https://maps.app.goo.gl/yjPJrDAukUEpU6Yy5", lat: 51.85751, lng: 0.96255, approximate: true },
  { id: "st-marys", name: "St Mary's Church Yard", address: "St Mary's Church Yard", mapsUrl: "https://maps.app.goo.gl/zCCpyZksPshdSmJH7", lat: 51.8549, lng: 0.9584 },
  { id: "black-buoy", name: "The Black Buoy", address: "The Black Buoy", mapsUrl: "https://maps.app.goo.gl/5WawfkteFfTUo6Bk7", lat: 51.85459, lng: 0.96014 },
  { id: "west-street-21", name: "21 West Street", address: "21 West Street", mapsUrl: "https://maps.app.goo.gl/kysiu8kTwy1PExnDA", lat: 51.8558, lng: 0.9548, approximate: true },
  { id: "old-grocery", name: "The Old Grocery", address: "The Old Grocery", mapsUrl: "https://maps.app.goo.gl/sTozYXY4EJRV8VGUA", lat: 51.8559, lng: 0.9571, approximate: true },
  { id: "rose-crown", name: "Rose & Crown", address: "Rose and Crown", mapsUrl: "https://maps.app.goo.gl/YTwdm1QgZ9LTce7w5", lat: 51.85451, lng: 0.95872 },
  { id: "jetty", name: "The Jetty", address: "The Jetty", mapsUrl: "https://maps.app.goo.gl/BEY6nDpmPkQCP2Sp7", lat: 51.85439, lng: 0.95843 },
  { id: "station-pub", name: "Station Pub", address: "Station Pub", mapsUrl: "https://maps.app.goo.gl/6ZuE469kGWVoUjs7A", lat: 51.8549, lng: 0.9615, approximate: true },
  { id: "horse-groom", name: "The Horse and Groom", address: "The Horse and Groom", mapsUrl: "https://maps.app.goo.gl/p9UahUkUCiqqLdhB8", lat: 51.8580, lng: 0.9606, approximate: true },
];

export const artistEvents: ArtistEvent[] = [
  { slug: "morning-dj", title: "Coffee DJ", artist: "The Maghreban", start: 10*60, duration: 120, image: "/artists/ayman.png", shortDescription: "The Maghreban will be DJing in the morning for a bit of coffee and music.", description: "Ayman Rostom has been making abstract hip-hop as Dr. Zygote since the late '90s, but he ventured into house music as the Maghreban during the mid-2010s. Like his hip-hop productions, his house tracks play with the conventions of the genre, favoring wobbly drums and spacy noises, as well as a rough, lo-fi aesthetic, often employing Casio keyboards. His music also reflects the influence of his Northern African heritage, and additionally incorporates genres such as jazz and disco.", locationId: "olive-branch", timelineGroupId: "morning-dj" },
  { slug: "sing-woods", title: "Woodsong", artist: "Sarah McCaskey", start: 11*60, duration: 60, image: "/artists/sarah2.png", shortDescription: "Participatory song circle in the woods.", description: "Participatory song circle in the woods. Fun warm-ups for body and voice. Learn simple rounds and harmony songs. No previous experience necessary. All ages and voices welcome.", locationId: "rosabelle-carpark", timelineGroupId: "sing-woods",  artistOrder: 1 },
  { slug: "studio1", title: "Open Studio 1", artist: "Richard Haylock", start: 11*60, duration: 280, image: "/artists/rich.jpeg", shortDescription: "Rich shares his recording space and music work at 8 Sandford Close.", description: "Musicians open their spaces to share with you their music and creative process.", locationId: "sandford-8", timelineGroupId: "open-studios",artistOrder: 10 },
  { slug: "studio2", title: "Open Studio 2", artist: "Morteza Shirzad", start: 11*60, duration: 280, image: "/artists/morteza.jpeg", shortDescription: "Persian classical and meditative music at 12 The Nook.", description: "Morteza Shirzad presents performances from the Persian classical music tradition, featuring works associated with masters such as Mohammad Reza Lotfi, Jalal Zolfonun and Hossein Alizadeh. Characterised by subtle or free rhythms, improvisation, and a contemplative atmosphere, this music offers a listening experience that differs significantly from most Western popular genres. Visitors will have the opportunity to hear short live performances, watch recorded demonstrations, and learn more about the aesthetic and cultural traditions of Persian classical music.", locationId: "the-nook-12", timelineGroupId: "open-studios" ,artistOrder: 10},
  { slug: "studio3", title: "Open Studio 3", artist: "Juanes Sanchez", start: 11*60, duration: 280, image: "/artists/juanes.png", shortDescription: "Playing vinyl records on the driveway at 15 Claremont Road.", description: "Come and share with Juanes his vinyl records collection.", locationId: "claremont-15", timelineGroupId: "open-studios",artistOrder: 12 },
  { slug: "studio4", title: "Open Studio 4", artist: "Abigail Lovejoy", start: 11*60, duration: 280, image: "/artists/abbie.png", shortDescription: "Open Jam Session at the driveway in 56 Old Ferry Road", description: "Visit Abigail Lovejoy as part of the Wivenhoe Music Trail Open Studios programme.", locationId: "old-ferry-56", timelineGroupId: "open-studios" ,artistOrder: 12},
  { slug: "studio5", title: "Open Studio 5", artist: "Christopher Scheuer", start: 11*60, duration: 280, image: "/artists/chris.jpg", shortDescription: "Accordion lessons and David Bowie singalongs.", description: "Lessons in how to play the accordion; David Bowie singalong with piano (if enough people turn up at any one go).", locationId: "sandford-11", timelineGroupId: "open-studios",artistOrder: 14 },
  { slug: "choir", title: "Millfields Primary Choir", artist: "Millfields Primary Choir", start: 11.5*60, duration: 30, image: "/artists/millfields.png", shortDescription: "Millfields Primary Choir.", description: "A joyful primary choir performance featuring a mix of contemporary and traditional repertoire.", locationId: "st-marys", timelineGroupId: "choir" },
  { slug: "dj-set", title: "The Black Buoy Buskers", artist: "The Black Buoy Buskers", start: 12*60, duration: 150, image: "/artists/BBB.jpg", shortDescription: "Acoustic session by The Black Buoy Buskers.", description: "An entirely acoustic performance by a group that varies from 5-8 musicians, mostly performing pop and rock songs from the 60s & 70s. We play a mixture of 60s & 70s pop & rock with standards & other oddities. \n Members may include on the day: \n Duncan Boon (guitar), \n Glyn Evans (vocals),\n Steve Fox (percussion & vocals), \nJohn Garwood (bass),\n Harry Lawrence (piano & vocals),\n Martin Newell (guitar, piano & vocals),\n Anthony Powell (guitar & piano), \n Alan Van Loen (harmonica) \n + occasional guests.", locationId: "black-buoy", timelineGroupId: "dj-set" },
  { slug: "indie-set", title: "Wivenhoe Gospel Choir Experience", artist: "Dirk Paterson", start: 13*60, duration: 120, image: "/artists/dirk.jpeg", shortDescription: "No experience needed. Just come and sing!", description: "Try a vocal workout in the Wivenhoe Gospel Choir experience. Participants will access their voices through this fun, exhilarating, and simple music. We’ll get you singing in parts and exploring a range of vocal colours and techniques. No prior choral experience necessary.", locationId: "old-manse", timelineGroupId: "indie-set" },
  { slug: "old-grocery", title: "Old Grocery Stage", artist: "Old Grocery Jammers", start: 13*60, duration: 150, image: "/artists/oldgrocery.jpg", shortDescription: "The Old Grocery Jammers playing live at the driveway of this classic artspace.", description: "The Old Grocery Jammers playing live at the driveway of this classic artspace.", locationId: "old-grocery", timelineGroupId: "old-grocery" },
  { slug: "folk-duo", title: "Open Singing Workshop", artist: "Wivenhoe Youth Choir", start: 15*60, duration: 40, image: "/artists/wivyouthchoir.jpg", shortDescription: "Songs, fiddle and acoustic folk traditions.", description: "River & Reed perform folk songs and instrumentals with fiddle, guitar and close vocal harmonies.", locationId: "st-marys", timelineGroupId: "folk-duo" },
  { slug: "west-street1", title: "West Street Stage", artist: "The Good Badgers", start: 15*60, duration: 80, image: "/artists/poetry-jam.svg", shortDescription: "An open garden concert featuring The Good Badgers followed by The Glowsticks.", description: "An open garden concert featuring The Good Badgers followed by The Glowsticks.", locationId: "west-street-21", timelineGroupId: "west-street" },
  { slug: "west-street2", title: "West Street Stage", artist: "The Glowsticks", start: 16.5*60, duration: 60, image: "/artists/poetry-jam.svg", shortDescription: "An open garden concert featuring The Good Badgers followed by The Glowsticks.", description: "An open garden concert featuring The Good Badgers followed by The Glowsticks.", locationId: "west-street-21", timelineGroupId: "west-street" },

  { slug: "folk", title: "Folk Session", artist: "Various Artists", start: 15.5*60, duration: 120, image: "/artists/dj-set.svg", shortDescription: "An acoustic folk session at The Black Buoy.", description: "An acoustic performance by a group of folk makers.", locationId: "black-buoy", timelineGroupId: "folk" },

  // The current programme says five singers/songwriters but does not yet store their names,
  // images or individual set times. These five honest TBC slots keep the data model correct
  // and can be replaced one-by-one as details are confirmed.
  { slug: "songwriter-1", title: "Singers & Songwriters Stage", artist: "Megan Klabunde", start: 17*60, duration: 30, image: "/artists/meganklabunde.jpg", shortDescription: "Singer-songwriter at the Rose & Crown. Artist details coming soon.", description: "One of five singers and songwriters performing by the quay at the Rose & Crown. Full artist details will be added when confirmed.", locationId: "rose-crown", timelineGroupId: "songwriters", tbc: true },
  { slug: "songwriter-2", title: "Singers & Songwriters Stage", artist: "Sinead Orme", start: 17*60+30, duration: 30, image: "/artists/sinead.jpg", shortDescription: "Singer-songwriter at the Rose & Crown. Artist details coming soon.", description: "One of five singers and songwriters performing by the quay at the Rose & Crown. Full artist details will be added when confirmed.", locationId: "rose-crown", timelineGroupId: "songwriters", tbc: true },
  { slug: "songwriter-3", title: "Singers & Songwriters Stage", artist: "Fuad Farooqi", start: 18*60, duration: 30, image: "/artists/fuad.jpeg", shortDescription: "Singer-songwriter at the Rose & Crown. Artist details coming soon.", description: "One of five singers and songwriters performing by the quay at the Rose & Crown. Full artist details will be added when confirmed.", locationId: "rose-crown", timelineGroupId: "songwriters", tbc: true },
  { slug: "songwriter-4", title: "Singers & Songwriters Stage", artist: "Steve Munro", start: 18*60+30, duration: 30, image: "/artists/roseandcrown.jpg", shortDescription: "Singer-songwriter at the Rose & Crown. Artist details coming soon.", description: "One of five singers and songwriters performing by the quay at the Rose & Crown. Full artist details will be added when confirmed.", locationId: "rose-crown", timelineGroupId: "songwriters", tbc: true },
  { slug: "songwriter-5", title: "Singers & Songwriters Stage", artist: "Songwriter 5 · TBC", start: 19*60, duration: 30, image: "/artists/roseandcrown.jpg", shortDescription: "Singer-songwriter at the Rose & Crown. Artist details coming soon.", description: "One of five singers and songwriters performing by the quay at the Rose & Crown. Full artist details will be added when confirmed.", locationId: "rose-crown", timelineGroupId: "songwriters", tbc: true },

  { slug: "jetty1", title: "Sunset Supper 1", artist: "Hannah Price and Margaret Miller", start: 18*60, duration: 120, image: "/artists/jetty.jpeg", shortDescription: "Bring your own food to share and enjoy lovely Wivenhoe local classical musicians.", description: "Bring your own food to share and enjoy lovely Wivenhoe local classical musicians.", locationId: "jetty", timelineGroupId: "jetty" },
  { slug: "jetty2", title: "Sunset Supper 2", artist: "Adam Jones", start: 18*60, duration: 120, image: "/artists/jetty.jpeg", shortDescription: "Bring your own food to share and enjoy lovely Wivenhoe local classical musicians.", description: "Bring your own food to share and enjoy lovely Wivenhoe local classical musicians.", locationId: "jetty", timelineGroupId: "jetty" },

  { slug: "station", title: "Station Pub", artist: "Somethingski", start: 19*60, duration: 120, image: "/artists/station.png", shortDescription: "Power folk from Poland.", description: "Somethingski Trio is a musical project by Nikodem Soszyński, known from Freeborn Brothers. The band debuted in 2020 with the album THINGS, featuring the hit Na Dolinach, which topped the Podkarpacka Hit List. Their music spans folk, rock, and 1970s-inspired pop.", locationId: "station-pub", timelineGroupId: "station" },
  { slug: "h-and-g1", title: "Horse & Groom", artist: "Didge & Sticks", start: 19*60, duration: 30, image: "/artists/horseandgroom.jpg", shortDescription: "Four different bands will wrap up the evening at the H&G.", description: "Four different bands will wrap up the evening at the H&G.", locationId: "horse-groom", timelineGroupId: "horse-groom" },
  { slug: "h-and-g2", title: "Horse & Groom", artist: "If Not Now", start: 19.75*60, duration: 30, image: "/artists/ifnotnow.jpeg", shortDescription: "Four different bands will wrap up the evening at the H&G.", description: "Four different bands will wrap up the evening at the H&G.", locationId: "horse-groom", timelineGroupId: "horse-groom" },
  { slug: "h-and-g3", title: "Horse & Groom", artist: "Dirty Fink Face", start: 20.5*60, duration: 30, image: "/artists/dirtyfunkface.jpg", shortDescription: "Four different bands will wrap up the evening at the H&G.", description: "Four different bands will wrap up the evening at the H&G.", locationId: "horse-groom", timelineGroupId: "horse-groom" },
  { slug: "h-and-g4", title: "Horse & Groom", artist: "Muntjac", start: 21.25*60, duration: 45, image: "/artists/horseandgroom.jpg", shortDescription: "Four different bands will wrap up the evening at the H&G.", description: "Four different bands will wrap up the evening at the H&G.", locationId: "horse-groom", timelineGroupId: "horse-groom" },

];

export const timelineRows: TimelineRow[] = [
  { name: "Workshops", color: "bg-pink-500", events: [
    { id: "sing-woods", title: "Woodsong", start: 11*60, duration: 60, artistEventIds: ["sing-woods"] },
    { id: "indie-set", title: "Wivenhoe Gospel Choir Experience", start: 13*60, duration: 120, artistEventIds: ["indie-set"] },
  ]},
  { name: "Open Studios", color: "bg-green-500", events: [
    { id: "open-studios", title: "Open Studios", start: 11*60, duration: 280, artistEventIds: ["studio1","studio2","studio3","studio4","studio5"], shortDescription: "Five artists and studios open across Wivenhoe." },
  ]},
  { name: "The Olive Branch", color: "bg-orange-500", events: [
    { id: "morning-dj", title: "Coffee DJ", start: 10*60, duration: 120, artistEventIds: ["morning-dj"] },
  ]},
  { name: "St Mary's Church Yard", color: "bg-blue-500", events: [
    { id: "choir", title: "Millfields Primary Choir", start: 11.5*60, duration: 30, artistEventIds: ["choir"] },
    { id: "folk-duo", title: "Wivenhoe Youth Choir", start: 15*60, duration: 40, artistEventIds: ["folk-duo"] },
  ]},
  { name: "Black Buoy", color: "bg-purple-500", events: [
    { id: "dj-set", title: "The Black Buoy Buskers", start: 12*60, duration: 150, artistEventIds: ["dj-set"] },
    { id: "folk", title: "Folk Session", start: 15.5*60, duration: 120, artistEventIds: ["folk"] },
  ]},
  { name: "West Street Stage", color: "bg-yellow-500", events: [
    { id: "west-street", title: "West Street", start: 15*60, duration: 150, artistEventIds: ["west-street1", "west-street2"] },
  ]},
  { name: "Old Grocery", color: "bg-red-300", events: [
    { id: "old-grocery", title: "Old Grocery Jammers", start: 13*60, duration: 150, artistEventIds: ["old-grocery"] },
  ]},
  { name: "Rose & Crown", color: "bg-yellow-700", events: [
    { id: "songwriters", title: "Songwriters", start: 17*60, duration: 150, artistEventIds: ["songwriter-1","songwriter-2","songwriter-3","songwriter-4","songwriter-5"], shortDescription: "Five singers and songwriters by the quay." },
  ]},
  { name: "Jetty", color: "bg-red-900", events: [
    { id: "jetty", title: "Sunset Supper", start: 18*60, duration: 120, artistEventIds: ["jetty1","jetty2"], shortDescription: "Bring food to share to the jetty in our musical Sunset Supper." },
  ]},
  { name: "Station Pub", color: "bg-green-900", events: [
    { id: "station", title: "Station Music", start: 19*60, duration: 120, artistEventIds: ["station"] },
  ]},
  { name: "The Horse and Groom", color: "bg-blue-900", events: [
    { id: "horse-groom", title: "Horse & Groom Bands", start: 20*60, duration: 120, artistEventIds: ["h-and-g1","h-and-g2","h-and-g3","h-and-g4"] },
  ]},
];

// Backwards-friendly aliases for components that refer to the timeline as venues.
export const venues = timelineRows;

export const locationById = Object.fromEntries(locations.map((location) => [location.id, location])) as Record<string, Location>;
export const artistEventBySlug = Object.fromEntries(artistEvents.map((event) => [event.slug, event])) as Record<string, ArtistEvent>;

export const allEvents = artistEvents.map((event) => {
  const location = locationById[event.locationId];
  const row = timelineRows.find((candidate) => candidate.events.some((timelineEvent) => timelineEvent.id === event.timelineGroupId));
  return {
    ...event,
    venue: row?.name ?? location?.name ?? "Wivenhoe Music Trail",
    address: location?.address ?? "Location TBC",
    mapsUrl: location?.mapsUrl ?? "#",
  };
});

export function getArtistEventsForTimelineEvent(event: TimelineEvent) {
  return event.artistEventIds
    .map((slug) => artistEventBySlug[slug])
    .filter((item): item is ArtistEvent => Boolean(item));
}
