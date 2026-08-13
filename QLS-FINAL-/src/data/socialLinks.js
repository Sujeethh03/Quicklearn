// Single source of truth for social profiles and the office location.
// Used by Header, Footer, Contactus and StructuredData (schema.org sameAs).

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/quicklearnsystems",
  x: "https://x.com/quicklearnsys",
  linkedin: "https://www.linkedin.com/in/quicklearn-systems-1494ba12a/",
  instagram: "https://www.instagram.com/quicklearnsystems/",
};

export const SOCIAL_PROFILE_URLS = Object.values(SOCIAL_LINKS);

export const OFFICE_ADDRESS_LINES = [
  "QuickLearn Systems, Lorven Smart Space,",
  "2nd Floor, Vaishnavi Cynosure,",
  "Near Gachibowli Flyover, Telecom Nagar,",
  "Above Reliance Digital,",
  "Beside - Omega Hospital,",
  "Hyderabad, Telangana 500032",
];

// Google Business Profile listing. The CID is the canonical, permanent id for the
// place (decimal form of 0xbf21b4bcf7031d4b from the listing's Maps URL) — unlike a
// /maps/place/... URL it has no view state or tracking params to rot.
export const GOOGLE_MAPS_URL = "https://maps.google.com/?cid=13772487859166715211";

const MAP_PLACE_NAME =
  "QuickLearn Systems - PSM Certification Training In Hyderabad";

export const OFFICE_COORDINATES = { lat: 17.4367577, lng: 78.3670187 };

// Keyless embed for an <iframe>; no Maps API key or billing account required.
// Searching the listing name resolves to the office coordinates above.
export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  MAP_PLACE_NAME
)}&output=embed`;

// Turn-by-turn directions to the exact pin, from wherever the visitor is.
export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_COORDINATES.lat},${OFFICE_COORDINATES.lng}`;
