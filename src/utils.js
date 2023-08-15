import { faker } from "@faker-js/faker";

const year = new Date().getFullYear();
const ageCertifications = [
  "G",
  "PG",
  "PG-13",
  "R",
  "NC-17",
  "U",
  "U/A",
  "A",
  "S",
  "AL",
  "6",
  "9",
  "12",
  "12A",
  "15",
  "18",
  "18R",
  "R18",
  "R21",
  "M",
  "MA15+",
  "R16",
  "R18+",
  "X18",
  "T",
  "E",
  "E10+",
  "EC",
  "C",
  "CA",
  "GP",
  "M/PG",
  "TV-Y",
  "TV-Y7",
  "TV-G",
  "TV-PG",
  "TV-14",
  "TV-MA",
];
const roles = [
  "Director",
  "Producer",
  "Screenwriter",
  "Actor",
  "Actress",
  "Cinematographer",
  "Film Editor",
  "Production Designer",
  "Costume Designer",
  "Music Composer",
];

const genres = [
  "Action",
  "Adventure",
  "Animated",
  "Biography",
  "Comedy",
  "Crime",
  "Dance",
  "Disaster",
  "Documentary",
  "Drama",
  "Erotic",
  "Family",
  "Fantasy",
  "Found Footage",
  "Historical",
  "Horror",
  "Independent",
  "Legal",
  "Live Action",
  "Martial Arts",
  "Musical",
  "Mystery",
  "Noir",
  "Performance",
  "Political",
  "Romance",
  "Satire",
  "Science Fiction",
  "Short",
  "Silent",
  "Slasher",
  "Sports",
  "Spy",
  "Superhero",
  "Supernatural",
  "Suspense",
  "Teen",
  "Thriller",
  "War",
  "Western"
]

export function generateTitles(idx) {
    const title = {
        id: faker.number.int(),
        title: faker.word.words({ count: { min: 1, max: 5 }}).toUpperCase(),
        description: faker.lorem.text(),
        release_year: faker.number.int({ min: 1900, max: year }),
        age_sertification: faker.helpers.arrayElement(ageCertifications),
        runtime: faker.number.int({ min: 30, max: 240 }),
        genres: faker.helpers.arrayElements(genres, { min: 1, max: 5 }),
        production_coutry: faker.location.countryCode(),
        seasons: idx % 3 ? faker.number.int({ min: 1, max: 5 }) : null,
      };
  return title;
}

export function generateCredits(id) {
  let creditsEntries = faker.number.int({ min: 3, max: 20 });
  let credits = [];

  for (let idx = 0; idx < creditsEntries; idx++) {
    credits.push({
      id: faker.number.int(),
      title_id: id,
      real_name: faker.person.fullName(),
      character_name: faker.person.fullName(),
      role: faker.helpers.arrayElement(roles),
    });
  }

  return credits;
}
