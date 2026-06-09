export const doctors = [
  // Arizona
  { id: 1, name: "Dr. Mohan V. Belthur, MD", specialty: "Orthopedic Surgery", hospital: "Phoenix Children's Hospital", city: "Phoenix", state: "AZ", phone: "(443) 285-9434", email: "mvbelthur@yahoo.com", ponseti: true, lat: 33.4484, lng: -112.0740 },
  { id: 2, name: "Kent A. Vincent, MD", specialty: "Orthopedic Surgery", hospital: "Ortho For Kids", city: "Tucson", state: "AZ", phone: "(520) 296-5437", email: "Drvincent@Orthoforkids.com", ponseti: true, lat: 32.2226, lng: -110.9747 },

  // Arkansas
  { id: 3, name: "Brien M. Rabenhorst, MD", specialty: "Orthopedic Surgery", hospital: "Arkansas Children's Hospital", city: "Little Rock", state: "AR", phone: "(501) 364-1469", email: "BMRabenhorst@uams.edu", ponseti: true, lat: 34.7465, lng: -92.2896 },

  // California
  { id: 4, name: "Michael Colburn, DPM", specialty: "Podiatry", hospital: "Livermore Podiatry", city: "Livermore", state: "CA", phone: "(415) 455-1555", email: "drcolburn@livermorepodiatry.com", ponseti: true, lat: 37.6819, lng: -121.7681 },
  { id: 5, name: "Sean D. Early, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Santa Barbara", state: "CA", phone: "(805) 687-0865", ponseti: true, lat: 34.4208, lng: -119.6982 },
  { id: 6, name: "Steven L. Frick, MD", specialty: "Orthopedic Surgery", hospital: "Stanford Children's Orthopedic & Sports Medicine Center", city: "Palo Alto", state: "CA", phone: "(844) 416-7846", email: "sfrick01@stanford.edu", ponseti: true, lat: 37.4419, lng: -122.1430 },
  { id: 7, name: "Pieter M. Lagaay, DPM", specialty: "Podiatry", hospital: "Financial District Foot and Ankle Center", city: "San Francisco", state: "CA", phone: "(415) 570-7490", ponseti: true, lat: 37.7749, lng: -122.4194 },
  { id: 8, name: "Joel Lerman, MD", specialty: "Orthopedic Surgery", hospital: "Shriners Hospitals for Children", city: "Sacramento", state: "CA", phone: "(916) 453-2049", email: "jlerman@shrinenet.org", ponseti: true, lat: 38.5816, lng: -121.4944 },
  { id: 9, name: "Scott Mubarak, MD", specialty: "Orthopedic Surgery", hospital: "Rady Children's Hospital", city: "San Diego", state: "CA", phone: "(858) 966-6789", email: "pedsortho@chsd.org", ponseti: true, lat: 32.7157, lng: -117.1611 },
  { id: 10, name: "Maya Pring, MD", specialty: "Orthopedic Surgery", hospital: "Pediatric Orthopedic and Scoliosis Center", city: "San Diego", state: "CA", ponseti: true, lat: 32.7157, lng: -117.1611 },
  { id: 11, name: "Nitza N. Rodriguez, DPM", specialty: "Podiatry", hospital: "Southern California Foot & Ankle Specialists", city: "Mission Viejo", state: "CA", phone: "(949) 364-9255", email: "Nitzarodriguez@gmail.com", ponseti: true, lat: 33.6001, lng: -117.6719 },
  { id: 12, name: "Roy M. Rubin, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Sacramento", state: "CA", phone: "(916) 437-0570", ponseti: true, lat: 38.5816, lng: -121.4944 },
  { id: 13, name: "Mauricio Silva, MD", specialty: "Orthopedic Surgery", hospital: "Orthopaedic Institute for Children", city: "Los Angeles", state: "CA", phone: "(213) 742-8330", email: "msilva@mednet.ucla.edu", ponseti: true, lat: 34.0522, lng: -118.2437 },
  { id: 14, name: "Stephen Silvani, DPM", specialty: "Podiatry", hospital: "Permanente Medical Group", city: "Walnut Creek", state: "CA", phone: "(925) 295-4973", email: "stephen.silvani@kp.org", ponseti: true, lat: 37.9101, lng: -122.0652 },
  { id: 15, name: "Carl R. Weinert Jr., MD", specialty: "Orthopedic Surgery", hospital: "Pediatric Orthopaedic and Scoliosis Center of Orange County", city: "Orange", state: "CA", ponseti: true, lat: 33.7879, lng: -117.8531 },

  // Colorado
  { id: 16, name: "Jay Albright, MD", specialty: "Orthopedic Surgery", hospital: "Children's Hospital Colorado", city: "Aurora", state: "CO", phone: "(720) 777-3899", ponseti: true, lat: 39.7294, lng: -104.8319 },
  { id: 17, name: "Gaia Georgopoulos, MD", specialty: "Orthopedic Surgery", hospital: "Children's Hospital Colorado", city: "Aurora", state: "CO", phone: "(720) 777-5571", ponseti: true, lat: 39.7294, lng: -104.8319 },
  { id: 18, name: "Daniel J. Hatch, DPM", specialty: "Podiatry", hospital: "Foot and Ankle Center of the Rockies", city: "Greeley", state: "CO", phone: "(970) 351-0900", email: "dhatch@facrockies.com", ponseti: true, lat: 40.4233, lng: -104.7091 },
  { id: 19, name: "Anna K. Weber, DPM", specialty: "Podiatry", hospital: "Colorado Sports Podiatry", city: "Denver", state: "CO", phone: "(303) 321-4477", email: "annakweber@yahoo.com", ponseti: true, lat: 39.7392, lng: -104.9903 },

  // Connecticut
  { id: 20, name: "Jeffrey D. Thomson, MD", specialty: "Orthopedic Surgery", hospital: "Connecticut Children's Medical Center", city: "Hartford", state: "CT", phone: "(860) 545-8643", ponseti: true, lat: 41.7658, lng: -72.6851 },
  { id: 21, name: "Philip W. Mack, MD", specialty: "Orthopedic Surgery", hospital: "Connecticut Children's Medical Center", city: "Hartford", state: "CT", phone: "(860) 545-9000", ponseti: true, lat: 41.7658, lng: -72.6851 },

  // Delaware
  { id: 22, name: "L. Reid Nichols, MD", specialty: "Orthopedic Surgery", hospital: "Nemours/Alfred I. DuPont Hospital for Children", city: "Wilmington", state: "DE", phone: "(302) 651-5724", email: "reid.nichols@nemours.org", ponseti: true, lat: 39.7447, lng: -75.5484 },

  // Florida
  { id: 23, name: "Elizabeth Moran, MD", specialty: "Orthopedic Surgery", hospital: "Nemours Children's Clinic", city: "Jacksonville", state: "FL", phone: "(904) 697-3600", email: "Elizabeth.Moran@nemours.org", ponseti: true, lat: 30.3322, lng: -81.6557 },

  // Georgia
  { id: 24, name: "Tim Schrader, MD", specialty: "Orthopedic Surgery", hospital: "Children's Orthopaedics of Atlanta", city: "Atlanta", state: "GA", phone: "(404) 255-1933", email: "tschrader@childrensortho.com", ponseti: true, lat: 33.7490, lng: -84.3880 },

  // Hawaii
  { id: 25, name: "Robert C. Durkin, MD", specialty: "Orthopedic Surgery", hospital: "Kapi'olani Medical Specialists", city: "Honolulu", state: "HI", phone: "(808) 945-3766", email: "robert.durkin@kapiolani.org", ponseti: true, lat: 21.3069, lng: -157.8583 },

  // Idaho
  { id: 26, name: "Buzz Showalter Jr., MD", specialty: "Orthopedic Surgery", hospital: "Intermountain Orthopaedics", city: "Boise", state: "ID", phone: "(208) 383-0201", ponseti: true, lat: 43.6150, lng: -116.2023 },

  // Illinois
  { id: 27, name: "Rebecca L. Carl, MD", specialty: "Pediatrics", hospital: "Ann & Robert H. Lurie Children's Hospital", city: "Chicago", state: "IL", phone: "(312) 227-6190", ponseti: true, lat: 41.8781, lng: -87.6298 },
  { id: 28, name: "Keith Gabriel, MD", specialty: "Orthopedic Surgery", hospital: "Southern Illinois University", city: "Springfield", state: "IL", phone: "(217) 545-7500", ponseti: true, lat: 39.7817, lng: -89.6501 },
  { id: 29, name: "Kamal N. Ibrahim, MD", specialty: "Orthopedic Surgery", hospital: "Du Page Medical Group", city: "Elmhurst", state: "IL", phone: "(630) 968-1881", email: "kichicago@aol.com", ponseti: true, lat: 41.8995, lng: -87.9401 },
  { id: 30, name: "Joseph Janicki, MD", specialty: "Orthopedic Surgery", hospital: "Ann & Robert H. Lurie Children's Hospital", city: "Chicago", state: "IL", phone: "(312) 227-6190", ponseti: true, lat: 41.8781, lng: -87.6298 },
  { id: 31, name: "Laura Lemke, MD", specialty: "Orthopedic Surgery", hospital: "Ann & Robert H. Lurie Children's Hospital", city: "Chicago", state: "IL", phone: "(312) 227-6190", ponseti: true, lat: 41.8781, lng: -87.6298 },
  { id: 32, name: "Eric K. Riley, DPM", specialty: "Podiatry", hospital: "CGH Medical Center", city: "Sterling", state: "IL", phone: "(815) 625-4790", ponseti: true, lat: 41.7886, lng: -89.6960 },

  // Iowa
  { id: 33, name: "José A. Morcuende, MD, PhD", specialty: "Orthopedic Surgery", hospital: "University of Iowa Hospitals and Clinics", city: "Iowa City", state: "IA", phone: "(319) 384-8041", email: "jose-morcuende@uiowa.edu", ponseti: true, lat: 41.6611, lng: -91.5302 },
  { id: 34, name: "Raymond Emerson, MD", specialty: "Orthopedic Surgery", hospital: "Mason City Clinic", city: "Mason City", state: "IA", phone: "(515) 421-6630", ponseti: true, lat: 43.1536, lng: -93.2010 },
  { id: 35, name: "Sterling J. Laaveg, MD", specialty: "Orthopedic Surgery", hospital: "Mason City Clinic", city: "Mason City", state: "IA", phone: "(515) 421-6630", ponseti: true, lat: 43.1536, lng: -93.2010 },
  { id: 36, name: "Stuart L. Weinstein, MD", specialty: "Orthopedic Surgery", hospital: "University of Iowa Hospitals and Clinics", city: "Iowa City", state: "IA", phone: "(319) 356-1872", email: "stuart-weinstein@uiowa.edu", ponseti: true, lat: 41.6611, lng: -91.5302 },

  // Louisiana
  { id: 37, name: "John R. Faust", specialty: "Orthopedic Surgery", hospital: "Our Lady of the Lake Children's Health", city: "Baton Rouge", state: "LA", phone: "(225) 374-4325", ponseti: true, lat: 30.4515, lng: -91.1871 },

  // Maryland
  { id: 38, name: "John E. Herzenberg, MD (Retired)", specialty: "Orthopedic Surgery", hospital: "Sinai Hospital", city: "Baltimore", state: "MD", phone: "(410) 601-8700", email: "jherzenberg@lifebridgehealth.org", ponseti: true, lat: 39.2904, lng: -76.6122 },
  { id: 39, name: "Bradley M. Lamm, DPM", specialty: "Podiatry", hospital: "Rubin Institute for Advanced Orthopedics / Sinai Hospital", city: "Baltimore", state: "MD", phone: "(410) 601-8700", email: "bradankle@yahoo.com", ponseti: true, lat: 39.2904, lng: -76.6122 },
  { id: 40, name: "Steven L. Tuck, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Rockville", state: "MD", phone: "(301) 340-9200", ponseti: true, lat: 39.0839, lng: -77.1528 },

  // Massachusetts
  { id: 41, name: "James Kasser, MD", specialty: "Orthopedic Surgery", hospital: "Boston Children's Hospital", city: "Boston", state: "MA", phone: "(617) 355-8213", ponseti: true, lat: 42.3601, lng: -71.0589 },

  // Michigan
  { id: 42, name: "Michael G. David, DPM", specialty: "Podiatry", hospital: "Foot & Ankle Specialists of West Michigan", city: "Kentwood", state: "MI", phone: "(616) 281-0666", email: "m.david@footandankledoctors.com", ponseti: true, lat: 42.8686, lng: -85.6447 },
  { id: 43, name: "Susan Laham, PA-C", specialty: "Physician Assistant", hospital: "Helen DeVos Children's Hospital", city: "Grand Rapids", state: "MI", phone: "(616) 267-2600", ponseti: true, lat: 42.9634, lng: -85.6681 },
  { id: 44, name: "Dayle Maples, MD", specialty: "Orthopedic Surgery", hospital: "Mary Free Bed Rehabilitation Hospital", city: "Grand Rapids", state: "MI", phone: "(616) 242-0393", email: "dayle.maples@maryfreebed.com", ponseti: true, lat: 42.9634, lng: -85.6681 },
  { id: 45, name: "Walid K. Yassir, MD", specialty: "Orthopedic Surgery", hospital: "Children's Hospital of Michigan", city: "Detroit", state: "MI", phone: "(313) 745-5227", ponseti: true, lat: 42.3314, lng: -83.0458 },

  // Minnesota
  { id: 46, name: "Richard Aadalen, MD", specialty: "Orthopedic Surgery", hospital: "Shriners Hospital for Children Twin Cities", city: "Minneapolis", state: "MN", ponseti: true, lat: 44.9778, lng: -93.2650 },
  { id: 47, name: "James Johanson, MD", specialty: "Orthopedic Surgery", hospital: "Shriners Hospital for Children Twin Cities", city: "Minneapolis", state: "MN", ponseti: true, lat: 44.9778, lng: -93.2650 },
  { id: 48, name: "Laura Trombino, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Duluth", state: "MN", phone: "(218) 722-8364", ponseti: true, lat: 46.7867, lng: -92.1005 },

  // Missouri
  { id: 49, name: "Susan K. Bonar, MD", specialty: "Orthopedic Surgery", hospital: "Rockhill Orthopaedics", city: "Kansas City", state: "MO", ponseti: true, lat: 39.0997, lng: -94.5786 },
  { id: 50, name: "Richard Schwend, MD", specialty: "Orthopedic Surgery", hospital: "Children's Mercy Hospital", city: "Kansas City", state: "MO", phone: "(816) 234-3693", ponseti: true, lat: 39.0997, lng: -94.5786 },
  { id: 51, name: "Harold Van Bosse, MD", specialty: "Orthopedic Surgery", hospital: null, city: null, state: "MO", email: "HvanBosse@iCloud.com", ponseti: true, lat: null, lng: null },

  // New Jersey
  { id: 52, name: "Mark A. Rieger, MD", specialty: "Orthopedic Surgery", hospital: "The Pediatric Orthopedic Center", city: "Cedar Knolls", state: "NJ", phone: "(973) 538-7700", email: "pediatricorthopediccenter@consensushealth.com", ponseti: true, lat: 40.8093, lng: -74.4449 },

  // New Mexico
  { id: 53, name: "Patrick Bosch, MD", specialty: "Orthopedic Surgery", hospital: "Carrie Tingley Hospital for Children UNM", city: "Albuquerque", state: "NM", ponseti: true, lat: 35.0844, lng: -106.6504 },
  { id: 54, name: "Matthew D. Cobb, DPM", specialty: "Podiatry", hospital: "Haas Foot and Ankle", city: "Albuquerque", state: "NM", phone: "(505) 247-4164", email: "abqclubfoot@gmail.com", ponseti: true, lat: 35.0844, lng: -106.6504 },

  // New York
  { id: 79, name: "Abigail K. Allen, MD", specialty: "Orthopedic Surgery", hospital: "Hospital for Special Surgery", city: "New York", state: "NY", phone: "+1 (212) 224-7908", ponseti: true, featured: true, lat: 40.7128, lng: -74.0060 },
  { id: 55, name: "David Feldman, MD", specialty: "Orthopedic Surgery", hospital: "NYU Langone", city: "New York", state: "NY", phone: "(212) 533-5310", email: "David.feldman@nyumc.org", ponseti: true, lat: 40.7128, lng: -74.0060 },
  { id: 56, name: "David H. Godfried, MD", specialty: "Orthopedic Surgery", hospital: "Cohen Children's Medical Center", city: "New Hyde Park", state: "NY", phone: "(516) 470-3570", email: "dgodfrie@nshs.edu", ponseti: true, lat: 40.7348, lng: -73.6880 },
  { id: 57, name: "Joshua Hyman, MD", specialty: "Orthopedic Surgery", hospital: "NewYork-Presbyterian / Columbia", city: "New York", state: "NY", phone: "(212) 305-5475", email: "jh736@columbia.edu", ponseti: true, lat: 40.7128, lng: -74.0060 },
  { id: 58, name: "Alice Chu, MD", specialty: "Orthopedic Surgery", hospital: "Hospital for Joint Diseases - NYU", city: "New York", state: "NY", phone: "(212) 598-6261", email: "Alice.Chu@nyumc.org", ponseti: true, lat: 40.7128, lng: -74.0060 },
  { id: 59, name: "David Roye Jr., MD", specialty: "Orthopedic Surgery", hospital: "NewYork-Presbyterian / Columbia", city: "New York", state: "NY", phone: "(212) 305-5475", email: "dpr2@columbia.edu", ponseti: true, lat: 40.7128, lng: -74.0060 },
  { id: 60, name: "David M. Scher, MD", specialty: "Orthopedic Surgery", hospital: "Hospital for Special Surgery", city: "New York", state: "NY", phone: "(212) 606-1253", email: "scherd@hss.edu", ponseti: true, lat: 40.7128, lng: -74.0060 },

  // North Carolina
  { id: 61, name: "Steven Frick, MD", specialty: "Orthopedic Surgery", hospital: "Atrium Health Myers Park Orthopedics", city: "Charlotte", state: "NC", phone: "(704) 446-1340", ponseti: true, lat: 35.2271, lng: -80.8431 },
  { id: 62, name: "Richard Henderson, MD", specialty: "Orthopedic Surgery", hospital: "UNC School of Medicine", city: "Chapel Hill", state: "NC", phone: "(919) 966-6730", ponseti: true, lat: 35.9132, lng: -79.0558 },

  // Ohio
  { id: 63, name: "Sheryl Handler-Matasar, MD", specialty: "Orthopedic Surgery", hospital: "Akron Children's Hospital", city: "Boardman", state: "OH", phone: "(330) 746-8070", email: "shandler-matasar@akronchildrens.org", ponseti: true, lat: 41.0294, lng: -80.6670 },

  // Oregon
  { id: 64, name: "Michael Aiona, MD", specialty: "Orthopedic Surgery", hospital: "Shriners Hospital for Children Portland", city: "Portland", state: "OR", phone: "(503) 241-5090", email: "maiona@shrinenet.org", ponseti: true, lat: 45.5051, lng: -122.6750 },
  { id: 65, name: "Michael Sussman, MD", specialty: "Orthopedic Surgery", hospital: "Shriners Hospital for Children Portland", city: "Portland", state: "OR", phone: "(503) 241-5090", email: "MSUSSMAN@shrinenet.org", ponseti: true, lat: 45.5051, lng: -122.6750 },

  // Pennsylvania
  { id: 66, name: "David Spiegel, MD", specialty: "Orthopedic Surgery", hospital: "Children's Hospital of Philadelphia", city: "Philadelphia", state: "PA", phone: "(215) 590-1524", email: "spiegeld@email.chop.edu", ponseti: true, lat: 39.9526, lng: -75.1652 },

  // South Carolina
  { id: 67, name: "Mark D. Visk, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Spartanburg", state: "SC", phone: "(864) 573-7241", ponseti: true, lat: 34.9496, lng: -81.9320 },
  { id: 68, name: "David E. Westberry, MD", specialty: "Orthopedic Surgery", hospital: "Shriners Hospital for Children Greenville", city: "Greenville", state: "SC", phone: "(864) 271-3444", email: "dwestberry@shrinenet.org", ponseti: true, lat: 34.8526, lng: -82.3940 },

  // Tennessee
  { id: 69, name: "Derek M. Kelly, MD", specialty: "Orthopedic Surgery", hospital: "Le Bonheur Children's Hospital", city: "Memphis", state: "TN", phone: "(901) 759-5552", email: "dkelly@campbellclinic.com", ponseti: true, lat: 35.1495, lng: -90.0490 },

  // Texas
  { id: 70, name: "Steven G. Lund, DPM", specialty: "Podiatry", hospital: null, city: "North Richland Hills", state: "TX", phone: "(817) 594-1310", email: "slund@metrofootankle.com", ponseti: true, lat: 32.8343, lng: -97.2289 },
  { id: 71, name: "Howard R. Epps, MD", specialty: "Orthopedic Surgery", hospital: "Fondren Orthopedic Group", city: "Houston", state: "TX", phone: "(713) 799-2300", ponseti: true, lat: 29.7604, lng: -95.3698 },

  // Utah
  { id: 72, name: "Theresa A. Hennessey, MD", specialty: "Orthopedic Surgery", hospital: "Shriners Hospitals for Children Salt Lake City", city: "Salt Lake City", state: "UT", phone: "(801) 536-3600", ponseti: true, lat: 40.7608, lng: -111.8910 },

  // Washington
  { id: 73, name: "Glen Baird, MD", specialty: "Orthopedic Surgery", hospital: "Shriners Hospital", city: "Spokane", state: "WA", phone: "(509) 623-0428", ponseti: true, lat: 47.6588, lng: -117.4260 },
  { id: 74, name: "Vincent S. Mosca, MD", specialty: "Orthopedic Surgery", hospital: "Seattle Children's Hospital", city: "Seattle", state: "WA", phone: "(206) 987-2109", ponseti: true, lat: 47.6062, lng: -122.3321 },

  // Wisconsin
  { id: 75, name: "Edgar O. Hicks, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Eau Claire", state: "WI", phone: "(715) 834-2701", email: "docobes@aol.com", ponseti: true, lat: 44.8113, lng: -91.4985 },
  { id: 76, name: "Blaise A. Nemeth, MD", specialty: "Orthopedic Surgery", hospital: "American Family Children's Hospital / UW", city: "Madison", state: "WI", phone: "(608) 263-6208", email: "Nemeth@ortho.wisc.edu", ponseti: true, lat: 43.0731, lng: -89.4012 },
  { id: 77, name: "Kenneth Noonan, MD", specialty: "Orthopedic Surgery", hospital: "University of Wisconsin", city: "Madison", state: "WI", phone: "(608) 263-1344", ponseti: true, lat: 43.0731, lng: -89.4012 },
  { id: 78, name: "Lee S. Segal, MD", specialty: "Orthopedic Surgery", hospital: "University of Wisconsin", city: "Madison", state: "WI", phone: "(608) 263-0904", email: "segal@ortho.wisc.edu", ponseti: true, lat: 43.0731, lng: -89.4012 },

  // Argentina
  { id: 80, name: "Sebastian A. Fedriani", specialty: "Orthopedic Surgery", hospital: null, city: "La Plata", state: null, country: "Argentina", phone: "+54 221 489 4619", ponseti: true, lat: -34.92, lng: -57.95 },
  { id: 81, name: "Claudio A. Fernández, MD", specialty: "Orthopedic Surgery", hospital: null, city: "La Plata", state: null, country: "Argentina", phone: "+54 221 489 4619", ponseti: true, lat: -34.92, lng: -57.95 },
  { id: 82, name: "Lucia B. Molina, MD", specialty: "Orthopedic Surgery", hospital: null, city: "La Plata", state: null, country: "Argentina", phone: "+54 221 473 3060", ponseti: true, lat: -34.92, lng: -57.95 },
  { id: 83, name: "Miguel Paz, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Buenos Aires", state: null, country: "Argentina", phone: "+5411 48218080", ponseti: true, lat: -34.60, lng: -58.38 },
  { id: 84, name: "Diego Piacenza", specialty: "Physiotherapy", hospital: null, city: "Cordoba", state: null, country: "Argentina", phone: "+08105552765", ponseti: true, lat: -31.42, lng: -64.18 },
  { id: 85, name: "Sergio D. Sanchez, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Bahia Blanca", state: null, country: "Argentina", phone: "+54 291 459 3616", ponseti: true, lat: -38.72, lng: -62.27 },

  // Australia
  { id: 86, name: "Ivan Astori, MD", specialty: "Orthopedic Surgery", hospital: null, city: "South Brisbane", state: null, country: "Australia", phone: "+61 7 3840-8111", ponseti: true, lat: -27.47, lng: 153.03 },
  { id: 87, name: "Nicholas Buttigieg", specialty: "Orthopedic Surgery", hospital: null, city: "Perth", state: null, country: "Australia", phone: "+61 8 6456 2222", ponseti: true, lat: -31.98, lng: 115.82 },
  { id: 88, name: "Helen Burgan", specialty: "Orthopedic Surgery", hospital: null, city: "North Adelaide", state: null, country: "Australia", phone: "+61 8 82674394", ponseti: true, lat: -34.90, lng: 138.59 },
  { id: 89, name: "Dr. Geoff Donald", specialty: "Orthopedic Surgery", hospital: null, city: "Brisbane", state: null, country: "Australia", ponseti: true, lat: -27.47, lng: 153.03 },
  { id: 90, name: "Nathalie Holland", specialty: "Physiotherapy", hospital: null, city: "Brisbane", state: null, country: "Australia", phone: "+61 7 30685099", ponseti: true, lat: -27.47, lng: 153.03 },
  { id: 91, name: "Wendy Poulsen", specialty: "Physiotherapy", hospital: null, city: "Brisbane", state: null, country: "Australia", phone: "+61 7 30685099", ponseti: true, lat: -27.47, lng: 153.03 },
  { id: 92, name: "Natasha Smith", specialty: "Physiotherapy", hospital: null, city: "Gold Coast", state: null, country: "Australia", phone: "+61 483366882", ponseti: true, lat: -28.02, lng: 153.40 },
  { id: 93, name: "Stephanie Manning", specialty: "Physiotherapy", hospital: null, city: "Brisbane", state: null, country: "Australia", phone: "+61 7 30685099", ponseti: true, lat: -27.47, lng: 153.03 },
  { id: 94, name: "Nick Veltjens", specialty: "Physiotherapy", hospital: null, city: "Brisbane", state: null, country: "Australia", phone: "+61 7 30685099", ponseti: true, lat: -27.47, lng: 153.03 },
  { id: 95, name: "Tony Juarez", specialty: "Physiotherapy", hospital: "The Children's Hospital at Westmead", city: "Westmead", state: null, country: "Australia", phone: "+61 2 9845 3369", ponseti: true, lat: -33.81, lng: 150.99 },
  { id: 96, name: "Dr. Minoo Patel", specialty: "Orthopedic Surgery", hospital: "Epworth Centre", city: "Richmond", state: null, country: "Australia", phone: "+61 3 9429-8084", ponseti: true, lat: -37.82, lng: 144.99 },
  { id: 97, name: "Eric Ho, MD", specialty: "Orthopedic Surgery", hospital: "John Hunter Children's Hospital", city: "Newcastle", state: null, country: "Australia", ponseti: true, lat: -32.93, lng: 151.78 },
  { id: 98, name: "Carolyn Matthews", specialty: "Physiotherapy", hospital: "John Hunter Children's Hospital", city: "Newcastle", state: null, country: "Australia", ponseti: true, lat: -32.93, lng: 151.78 },
  { id: 99, name: "Dr. Sandeep Tewari", specialty: "Orthopedic Surgery", hospital: "John Hunter Children's Hospital", city: "Newcastle", state: null, country: "Australia", ponseti: true, lat: -32.93, lng: 151.78 },
  { id: 100, name: "Dr. Wines", specialty: "Orthopedic Surgery", hospital: "Royal North Shore Hospital", city: "St Leonards", state: null, country: "Australia", phone: "+61 2 9926 7111", ponseti: true, lat: -33.82, lng: 151.20 },

  // Austria
  { id: 101, name: "Dr. Christof Radler", specialty: "Orthopedic Surgery", hospital: "Pediatric Orthopedic Hospital Vienna-Speising", city: "Vienna", state: null, country: "Austria", ponseti: true, lat: 48.21, lng: 16.37 },

  // Belgium
  { id: 102, name: "Renaud Rossillon", specialty: "Orthopedic Surgery", hospital: null, city: "Brussels", state: null, country: "Belgium", phone: "+32 2 6404916", ponseti: true, lat: 50.85, lng: 4.35 },

  // Bangladesh
  { id: 103, name: "Dr. Mohammed Rafiq Nawaz Khan", specialty: "Orthopedic Surgery", hospital: "NITOR", city: "Dhaka", state: null, country: "Bangladesh", phone: "+880 1824545454", ponseti: true, lat: 23.81, lng: 90.41 },
  { id: 104, name: "Dr. MD. Farhan Azad Badhon", specialty: "Orthopedic Surgery", hospital: "NITOR", city: "Dhaka", state: null, country: "Bangladesh", phone: "+880 1717373770", ponseti: true, lat: 23.81, lng: 90.41 },

  // Bolivia
  { id: 105, name: "Dr. Patricia Callisperis", specialty: "Orthopedic Surgery", hospital: null, city: "La Paz", state: null, country: "Bolivia", phone: "+591 76737000", ponseti: true, lat: -16.50, lng: -68.15 },

  // Brazil
  { id: 106, name: "Laura Fernanda Alves Ferreira, MD", specialty: "Orthopedic Surgery", hospital: "Hospital Universitario da Universidade de Sao Paulo", city: "Sao Paulo", state: null, country: "Brazil", phone: "+011 4153 2412", ponseti: true, lat: -23.55, lng: -46.63 },
  { id: 107, name: "Alexandre Francisco de Lourenco, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Sao Paulo", state: null, country: "Brazil", phone: "+55 11 3663 0050", ponseti: true, lat: -23.55, lng: -46.63 },
  { id: 108, name: "Patricia Moreno Grangeiro, MD", specialty: "Orthopedic Surgery", hospital: "Instituto de Ortopedia e Traumatologia", city: "Sao Paulo", state: null, country: "Brazil", ponseti: true, lat: -23.55, lng: -46.63 },
  { id: 109, name: "Monica Paschoal Nogueira, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Sao Paulo", state: null, country: "Brazil", phone: "+55 11 5055 3155", ponseti: true, lat: -23.55, lng: -46.63 },
  { id: 110, name: "Antonio Luiz Goncalves Brandao, MD", specialty: "Orthopedic Surgery", hospital: "COT Hospital", city: "Salvador", state: null, country: "Brazil", phone: "+55 71 2102-4400", ponseti: true, lat: -12.97, lng: -38.50 },
  { id: 111, name: "Gilberto Francisco Brandao", specialty: "Orthopedic Surgery", hospital: "Universidade Federal de Minas Gerais", city: "Belo Horizonte", state: null, country: "Brazil", phone: "+55 31 3344277", ponseti: true, lat: -19.92, lng: -43.93 },
  { id: 112, name: "Carlos Abreu de Aguiar", specialty: "Orthopedic Surgery", hospital: "Hospital Pequeno Principe", city: "Curitiba", state: null, country: "Brazil", phone: "+55 41 3310-1010", ponseti: true, lat: -25.43, lng: -49.27 },
  { id: 113, name: "Prof. Dr. Davi P. Haje", specialty: "Orthopedic Surgery", hospital: null, city: "Brasilia", state: null, country: "Brazil", ponseti: true, lat: -15.78, lng: -47.93 },
  { id: 114, name: "Guillermo Oscar Hernández Tierno", specialty: "Orthopedic Surgery", hospital: "Hospital Martagão Gesteira", city: "Salvador", state: null, country: "Brazil", phone: "+55 71 3350 6173", ponseti: true, lat: -12.97, lng: -38.50 },
  { id: 115, name: "Dra. Leopoldina Milanez da Silva Leite", specialty: "Orthopedic Surgery", hospital: null, city: "São Luís", state: null, country: "Brazil", ponseti: true, lat: -2.53, lng: -44.30 },
  { id: 116, name: "Jung Ho Kim", specialty: "Orthopedic Surgery", hospital: "Instituto de Ortopedia e Traumatologia de Passo Fundo", city: "Passo Fundo", state: null, country: "Brazil", phone: "+55 54 3045-2000", ponseti: true, lat: -28.26, lng: -52.41 },
  { id: 117, name: "Ana Paula Tedesco", specialty: "Orthopedic Surgery", hospital: null, city: "Caxias do Sul", state: null, country: "Brazil", phone: "+55 54 3228 6393", ponseti: true, lat: -29.17, lng: -51.18 },
  { id: 118, name: "Jose Luis Zabeu, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Americana", state: null, country: "Brazil", phone: "+55 19 3037 0463", ponseti: true, lat: -22.74, lng: -47.33 },

  // Bulgaria
  { id: 119, name: "Dr. Miroslav Zhivkov", specialty: "Orthopedic Surgery", hospital: "University Hospital Saint Anna", city: "Varna", state: null, country: "Bulgaria", phone: "+359 52 821 293", ponseti: true, lat: 43.20, lng: 27.91 },

  // Canada
  { id: 120, name: "Shafique Pirani, MD", specialty: "Orthopedic Surgery", hospital: null, city: "New Westminster", state: null, country: "Canada", phone: "+1 604 522 2332", ponseti: true, lat: 49.21, lng: -122.91 },
  { id: 121, name: "Timothy P. Carey, MD", specialty: "Orthopedic Surgery", hospital: null, city: "London", state: null, country: "Canada", phone: "+1 519 439 0701", ponseti: true, lat: 42.98, lng: -81.25 },
  { id: 122, name: "Lindsay Davidson, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Kingston", state: null, country: "Canada", phone: "+1 613 544 9626", ponseti: true, lat: 44.23, lng: -76.49 },
  { id: 123, name: "Dr. J. Alexandra Mortimer", specialty: "Orthopedic Surgery", hospital: null, city: "Saskatoon", state: null, country: "Canada", phone: "+1 306 844 1402", ponseti: true, lat: 52.13, lng: -106.67 },
  { id: 124, name: "Dr. J. Norgrove Penny, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Victoria", state: null, country: "Canada", phone: "+1 250 940 4444", ponseti: true, lat: 48.43, lng: -123.37 },

  // Chile
  { id: 125, name: "Dra. Dalia Sepúlveda", specialty: "Orthopedic Surgery", hospital: null, city: "Santiago", state: null, country: "Chile", phone: "+56 2 2233 6704", ponseti: true, lat: -33.45, lng: -70.67 },
  { id: 126, name: "Dr. Juan Carlos Ocampo, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Puente Alto", state: null, country: "Chile", phone: "+56 9 75849152", ponseti: true, lat: -33.61, lng: -70.57 },
  { id: 127, name: "Dr. Gaston Terrazas, MD", specialty: "Orthopedic Surgery", hospital: "Hospital de Ninos Dr. Roberto del Rio", city: "Santiago", state: null, country: "Chile", ponseti: true, lat: -33.45, lng: -70.67 },
  { id: 128, name: "Ximena Agurto Vargas, MD", specialty: "Orthopedic Surgery", hospital: "Hospital Regional de Talca", city: "Talca", state: null, country: "Chile", phone: "+56 71 2209236", ponseti: true, lat: -35.43, lng: -71.66 },

  // China
  { id: 129, name: "Xuemin Lu, MD PhD", specialty: "Orthopedic Surgery", hospital: "Beijing Jishuitan Hospital", city: "Beijing", state: null, country: "China", phone: "+86 10 58516688", ponseti: true, lat: 39.90, lng: 116.41 },
  { id: 130, name: "Cai Haiqing, MD", specialty: "Orthopedic Surgery", hospital: "Shanghai Children's Medical Center", city: "Shanghai", state: null, country: "China", phone: "+86 21 58732020", ponseti: true, lat: 31.23, lng: 121.47 },
  { id: 131, name: "Yanzhou Wang", specialty: "Orthopedic Surgery", hospital: "Shandong Provincial Hospital", city: "Jinan", state: null, country: "China", phone: "+86 531 86690656", ponseti: true, lat: 36.65, lng: 117.12 },
  { id: 132, name: "Li Yun Hoi", specialty: "Orthopedic Surgery", hospital: "Hong Kong Pediatric Orthopaedics & Scoliosis Centre", city: "Hong Kong", state: null, country: "China", ponseti: true, lat: 22.32, lng: 114.17 },
  { id: 133, name: "Liu Zhen-Ting", specialty: "Orthopedic Surgery", hospital: null, city: "Guilin", state: null, country: "China", phone: "+86 773 2820816", ponseti: true, lat: 25.27, lng: 110.29 },
  { id: 134, name: "Li Zhao, MD PhD", specialty: "Orthopedic Surgery", hospital: "Xin-Hua Hospital", city: "Shanghai", state: null, country: "China", ponseti: true, lat: 31.23, lng: 121.47 },

  // Colombia
  { id: 135, name: "Pablo Rosselli, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Bogotá", state: null, country: "Colombia", phone: "+57 1 2150210", ponseti: true, lat: 4.71, lng: -74.07 },
  { id: 136, name: "Astrid Medina Cañon, MD", specialty: "Orthopedic Surgery", hospital: "Fundacion Cardioinfantil", city: "Bogotá", state: null, country: "Colombia", phone: "+57 1 7490404", ponseti: true, lat: 4.71, lng: -74.07 },
  { id: 137, name: "Sonia Mercedes Quevedo Blanco", specialty: "Orthopedic Surgery", hospital: "Clínica Universitaria Colombia", city: "Bogotá", state: null, country: "Colombia", phone: "+57 1 2202727", ponseti: true, lat: 4.71, lng: -74.07 },
  { id: 138, name: "Maria del Pilar Quesada Aguilar", specialty: "Orthopedic Surgery", hospital: "Hospital Federico Lleras Acosta", city: "Ibagué", state: null, country: "Colombia", phone: "+57 608 2739805", ponseti: true, lat: 4.44, lng: -75.23 },
  { id: 139, name: "Luis Carlos Becerra Andrade, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Cúcuta", state: null, country: "Colombia", phone: "+57 7 5955859", ponseti: true, lat: 7.89, lng: -72.51 },
  { id: 140, name: "Diego Fernando Ortiz Montoya", specialty: "Orthopedic Surgery", hospital: "Instituto Roosevelt", city: "Bogotá", state: null, country: "Colombia", phone: "+57 601 3534016", ponseti: true, lat: 4.71, lng: -74.07 },
  { id: 141, name: "Marco Tulio Mahecha Toro, MD", specialty: "Orthopedic Surgery", hospital: "Hospital Infantil Universitario de San José", city: "Bogotá", state: null, country: "Colombia", phone: "+57 601 3290100", ponseti: true, lat: 4.71, lng: -74.07 },
  { id: 142, name: "Martha Patricia Valencia Chamorro", specialty: "Orthopedic Surgery", hospital: "Instituto Roosevelt", city: "Bogotá", state: null, country: "Colombia", ponseti: true, lat: 4.71, lng: -74.07 },
  { id: 143, name: "Clara Inés Trujillo González", specialty: "Orthopedic Surgery", hospital: "Fundación Clínica Noel", city: "Medellín", state: null, country: "Colombia", phone: "+57 604 3220737", ponseti: true, lat: 6.24, lng: -75.58 },
  { id: 144, name: "María Margarita Acosta Murcia, MD", specialty: "Orthopedic Surgery", hospital: "Clínica Infantil Colsubsidio", city: "Bogotá", state: null, country: "Colombia", phone: "+57 601 7447525", ponseti: true, lat: 4.71, lng: -74.07 },
  { id: 145, name: "Jessica Andrea Suárez Zarrate", specialty: "Orthopedic Surgery", hospital: "Fundación Clínica Infantil Club Noel", city: "Cali", state: null, country: "Colombia", phone: "+57 2 4854400", ponseti: true, lat: 3.45, lng: -76.53 },
  { id: 146, name: "Luis José Céspedes Pinto, MD", specialty: "Orthopedic Surgery", hospital: "Fundación FOSUNAB", city: "Floridablanca", state: null, country: "Colombia", phone: "+57 607 6383422", ponseti: true, lat: 7.06, lng: -73.09 },

  // Czech Republic
  { id: 147, name: "Monika Frydrychová, MD", specialty: "Orthopedic Surgery", hospital: "Ponseti Clinic Prague", city: "Prague", state: null, country: "Czech Republic", ponseti: true, lat: 50.08, lng: 14.44 },

  // Ecuador
  { id: 148, name: "Patricia Verónica Díaz Guzman", specialty: "Orthopedic Surgery", hospital: null, city: "Loja", state: null, country: "Ecuador", phone: "+593 7 2561039", ponseti: true, lat: -3.99, lng: -79.20 },
  { id: 149, name: "Geovanny Fabricio Oleas Santillan, MD", specialty: "Orthopedic Surgery", hospital: "Hospital Carlos Andrade Marin", city: "Quito", state: null, country: "Ecuador", phone: "+593 992911596", ponseti: true, lat: -0.18, lng: -78.47 },
  { id: 150, name: "Edwin G. Valencia Lucero, MD", specialty: "Orthopedic Surgery", hospital: "Hospital De Especialidades Quito Policia Nacional", city: "Quito", state: null, country: "Ecuador", phone: "+593 969 549 991", ponseti: true, lat: -0.18, lng: -78.47 },

  // Egypt
  { id: 151, name: "Yasser Elbatrawy, MD", specialty: "Orthopedic Surgery", hospital: "Elzaharaa University Hospital", city: "Cairo", state: null, country: "Egypt", phone: "+20 2 4 14 17 13", ponseti: true, lat: 30.04, lng: 31.24 },
  { id: 152, name: "Prof. Mohammed El-Sobky, MD", specialty: "Orthopedic Surgery", hospital: "Cairo University Paediatric Hospital", city: "Cairo", state: null, country: "Egypt", phone: "+20 12 2138899", ponseti: true, lat: 30.04, lng: 31.24 },
  { id: 153, name: "Dr. Nariman Abol Oyoun, MD", specialty: "Orthopedic Surgery", hospital: "Assiut University Hospital", city: "Assiut", state: null, country: "Egypt", ponseti: true, lat: 27.18, lng: 31.18 },

  // El Salvador
  { id: 154, name: "Dr. Roberto Gomez", specialty: "Orthopedic Surgery", hospital: null, city: "San Miguel", state: null, country: "El Salvador", phone: "+503 26452932", ponseti: true, lat: 13.48, lng: -88.18 },

  // Finland
  { id: 155, name: "Dr. Vesa Vahasarja, MD PhD", specialty: "Orthopedic Surgery", hospital: "University Hospital of Oulu", city: "Oulu", state: null, country: "Finland", ponseti: true, lat: 65.01, lng: 25.47 },

  // France
  { id: 156, name: "Ana Presedo, M.D.", specialty: "Orthopedic Surgery", hospital: "Robert Debré Hospital", city: "Paris", state: null, country: "France", phone: "+33 1 40035716", ponseti: true, lat: 48.86, lng: 2.35 },
  { id: 157, name: "Prof. J. Berard", specialty: "Orthopedic Surgery", hospital: "Hospital Debrousse", city: "Lyon", state: null, country: "France", ponseti: true, lat: 45.76, lng: 4.84 },

  // Germany
  { id: 158, name: "Oliver Eberhardt, MD", specialty: "Orthopedic Surgery", hospital: "Olgahospital", city: "Stuttgart", state: null, country: "Germany", ponseti: true, lat: 48.78, lng: 9.18 },
  { id: 159, name: "Dr. Elisabeth Goergens", specialty: "Orthopedic Surgery", hospital: "General Hospital Eilbek", city: "Hamburg", state: null, country: "Germany", ponseti: true, lat: 53.58, lng: 10.02 },
  { id: 160, name: "Dr. Ulrich Korn", specialty: "Orthopedic Surgery", hospital: null, city: "Hamburg", state: null, country: "Germany", phone: "+49 40 899 00 8-99", ponseti: true, lat: 53.58, lng: 10.02 },
  { id: 161, name: "Antonia Marques, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Wuppertal", state: null, country: "Germany", phone: "+49 202 265680", ponseti: true, lat: 51.26, lng: 7.15 },
  { id: 162, name: "Dr. Sari Salminen", specialty: "Orthopedic Surgery", hospital: "University Hospital of Cologne", city: "Cologne", state: null, country: "Germany", ponseti: true, lat: 50.93, lng: 6.95 },
  { id: 163, name: "Beate Stocker, MD", specialty: "Orthopedic Surgery", hospital: "Altonaer Kinderkrankenhaus", city: "Hamburg", state: null, country: "Germany", phone: "+49 40 88908397", ponseti: true, lat: 53.58, lng: 10.02 },
  { id: 164, name: "Rudiger Schulze, MD", specialty: "Orthopedic Surgery", hospital: "Winsen Hospital", city: "Winsen", state: null, country: "Germany", phone: "+49 41 71 130", ponseti: true, lat: 53.36, lng: 10.22 },

  // Greece
  { id: 165, name: "Dr. Anastasios Kanellopoulos", specialty: "Orthopedic Surgery", hospital: "IASO Children's Hospital", city: "Athens", state: null, country: "Greece", phone: "+30 6977939479", ponseti: true, lat: 38.05, lng: 23.81 },
  { id: 166, name: "Dr. Milly Konstantinidou", specialty: "Orthopedic Surgery", hospital: "IASO Children's Hospital", city: "Athens", state: null, country: "Greece", phone: "+30 6944471285", ponseti: true, lat: 38.05, lng: 23.81 },
  { id: 167, name: "Dr. Christina C. Neila", specialty: "Orthopedic Surgery", hospital: "IASO Children's Hospital", city: "Athens", state: null, country: "Greece", phone: "+30 6948262466", ponseti: true, lat: 38.05, lng: 23.81 },

  // Guatemala
  { id: 168, name: "Dr. Jose Domingo Soto Vasquez", specialty: "Orthopedic Surgery", hospital: null, city: "Guatemala City", state: null, country: "Guatemala", phone: "+502 334 5991", ponseti: true, lat: 14.63, lng: -90.51 },
  { id: 169, name: "Ana Dolores Zambrano Lopez, MD", specialty: "Orthopedic Surgery", hospital: "Instituto Guatemalteco De Seguridad Social", city: "Guatemala City", state: null, country: "Guatemala", phone: "+502 2508 7608", ponseti: true, lat: 14.63, lng: -90.51 },
  { id: 170, name: "Ana Gabriela Saenz Cardenas, MD", specialty: "Orthopedic Surgery", hospital: "Hospital Nacional de Retalhuleu", city: "Retalhuleu", state: null, country: "Guatemala", ponseti: true, lat: 14.54, lng: -91.68 },
  { id: 171, name: "Jorge Luis Escalante Valdez, MD", specialty: "Orthopedic Surgery", hospital: "Instituto Guatemalteco De Seguridad Social", city: "Quetzaltenango", state: null, country: "Guatemala", ponseti: true, lat: 14.85, lng: -91.52 },

  // Hungary
  { id: 172, name: "Miklos Szabo, MD", specialty: "Orthopedic Surgery", hospital: "Heim Pal Children's Hospital", city: "Budapest", state: null, country: "Hungary", phone: "+36 204050446", ponseti: true, lat: 47.50, lng: 19.04 },
  { id: 173, name: "Dr. Domos Gyula", specialty: "Orthopedic Surgery", hospital: "Semmelweis Egytem Ortopediai Klinika", city: "Budapest", state: null, country: "Hungary", phone: "+36 70 366 5465", ponseti: true, lat: 47.50, lng: 19.04 },
  { id: 174, name: "Csenge Szeverenyi, MD", specialty: "Orthopedic Surgery", hospital: "University of Debrecen", city: "Debrecen", state: null, country: "Hungary", phone: "+36 30 985 8749", ponseti: true, lat: 47.53, lng: 21.63 },

  // India
  { id: 175, name: "Dr. Alaric Aroojis", specialty: "Orthopedic Surgery", hospital: "Kokilaben Dhirubhai Ambani Hospital", city: "Mumbai", state: null, country: "India", ponseti: true, lat: 19.08, lng: 72.88 },
  { id: 176, name: "Milind Chaudhary, MD", specialty: "Orthopedic Surgery", hospital: "Chaudhary Hospital", city: "Mumbai", state: null, country: "India", ponseti: true, lat: 19.08, lng: 72.88 },
  { id: 177, name: "Dr. Dhiren Ganjwala", specialty: "Orthopedic Surgery", hospital: null, city: "Ahmedabad", state: null, country: "India", phone: "+91 982500 25600", ponseti: true, lat: 23.02, lng: 72.57 },
  { id: 178, name: "Dr. Matthew Varghese", specialty: "Orthopedic Surgery", hospital: null, city: "New Delhi", state: null, country: "India", ponseti: true, lat: 28.61, lng: 77.21 },

  // Indonesia
  { id: 179, name: "Dr. Anung B Satriadi", specialty: "Orthopedic Surgery", hospital: "Prof DR. R. Soeharso Orthopaedic Hospital", city: "Surakarta", state: null, country: "Indonesia", phone: "+62 271 714458", ponseti: true, lat: -7.58, lng: 110.82 },

  // Iran
  { id: 180, name: "Aziz Abbaspour, M.D. PhD", specialty: "Orthopedic Surgery", hospital: "Ghaem International Hospital", city: "Rasht", state: null, country: "Iran", phone: "+98 911 2380793", ponseti: true, lat: 37.27, lng: 49.58 },

  // Iraq
  { id: 181, name: "Ali Bakir Al-Hilli, MD", specialty: "Orthopedic Surgery", hospital: "Children's Welfare Teaching Hospital", city: "Baghdad", state: null, country: "Iraq", phone: "+964 7904549269", ponseti: true, lat: 33.31, lng: 44.36 },

  // Israel
  { id: 182, name: "Noam Bor, MD", specialty: "Orthopedic Surgery", hospital: "Emek Central Hospital", city: "Afula", state: null, country: "Israel", phone: "+972 4 652 2349", ponseti: true, lat: 32.60, lng: 35.29 },
  { id: 183, name: "Daniel Weltsch, MD MPH", specialty: "Orthopedic Surgery", hospital: "Sheba Medical Center / Safra Children's Hospital", city: "Tel Aviv", state: null, country: "Israel", phone: "+972 55 211 5834", ponseti: true, lat: 32.09, lng: 34.78 },
  { id: 184, name: "Eugen Cohen, M.D.", specialty: "Orthopedic Surgery", hospital: "Soroka Medical Center", city: "Beer-Sheva", state: null, country: "Israel", ponseti: true, lat: 31.25, lng: 34.79 },
  { id: 185, name: "Prof. Shlomo Wientroub", specialty: "Orthopedic Surgery", hospital: "Dana Children's Hospital", city: "Tel Aviv", state: null, country: "Israel", phone: "+972 3 697 4261", ponseti: true, lat: 32.09, lng: 34.78 },
  { id: 186, name: "Dr. Yoram Hemo", specialty: "Orthopedic Surgery", hospital: "Dana Children's Hospital", city: "Tel Aviv", state: null, country: "Israel", phone: "+972 3 697 4261", ponseti: true, lat: 32.09, lng: 34.78 },
  { id: 187, name: "Dr. Eitan Segev", specialty: "Orthopedic Surgery", hospital: "Dana Children's Hospital", city: "Tel Aviv", state: null, country: "Israel", phone: "+972 3 697 4261", ponseti: true, lat: 32.09, lng: 34.78 },

  // Italy
  { id: 188, name: "Prof. Antonio Andreacchio", specialty: "Orthopedic Surgery", hospital: "Ospedale dei Bambini V. Buzzi", city: "Milan", state: null, country: "Italy", phone: "+39 338 9362814", ponseti: true, lat: 45.47, lng: 9.19 },
  { id: 189, name: "Dr. Diego Bellini", specialty: "Orthopedic Surgery", hospital: "Policlinico Universitario di Roma Tor Vergata", city: "Rome", state: null, country: "Italy", phone: "+39 06 20903465", ponseti: true, lat: 41.90, lng: 12.50 },
  { id: 190, name: "Dr. Camilla Bettuzzi", specialty: "Orthopedic Surgery", hospital: null, city: "Rome", state: null, country: "Italy", phone: "+39 339 7535882", ponseti: true, lat: 41.90, lng: 12.50 },
  { id: 191, name: "Dr. Ignazio d'Addetta", specialty: "Orthopedic Surgery", hospital: "Ospedale Pediatrico Giovanni XXIII", city: "Bari", state: null, country: "Italy", phone: "+39 340 3395939", ponseti: true, lat: 41.12, lng: 16.87 },
  { id: 192, name: "Pasquale Farsetti, MD", specialty: "Orthopedic Surgery", hospital: "University of Rome Tor Vergata", city: "Rome", state: null, country: "Italy", ponseti: true, lat: 41.90, lng: 12.50 },
  { id: 193, name: "Prof. Ernesto Ippolito", specialty: "Orthopedic Surgery", hospital: "Università di Roma Tor Vergata", city: "Rome", state: null, country: "Italy", ponseti: true, lat: 41.90, lng: 12.50 },
  { id: 194, name: "Dr. Armando Gabrielli", specialty: "Orthopedic Surgery", hospital: null, city: "Rome", state: null, country: "Italy", phone: "+39 347 4328025", ponseti: true, lat: 41.90, lng: 12.50 },
  { id: 195, name: "Dr. Manuele Lampasi", specialty: "Orthopedic Surgery", hospital: null, city: "Bologna", state: null, country: "Italy", phone: "+39 329 4942699", ponseti: true, lat: 44.49, lng: 11.34 },
  { id: 196, name: "Dr. Sergio Monforte", specialty: "Orthopedic Surgery", hospital: "Ospedale dei Bambini V. Buzzi", city: "Milan", state: null, country: "Italy", phone: "+39 333 2905421", ponseti: true, lat: 45.47, lng: 9.19 },
  { id: 197, name: "Dr. Matteo Paonessa", specialty: "Orthopedic Surgery", hospital: "Ospedale Infantile Regina Margherita", city: "Turin", state: null, country: "Italy", phone: "+39 349 5522859", ponseti: true, lat: 45.07, lng: 7.69 },

  // Japan
  { id: 198, name: "Dr. Aziz Abbaspour", specialty: "Orthopedic Surgery", hospital: null, city: "Tokushima", state: null, country: "Japan", ponseti: true, lat: 34.07, lng: 134.55 },
  { id: 199, name: "Dr. Hiroshi Kusakabe", specialty: "Orthopedic Surgery", hospital: "Sengawa Orthopedics", city: "Tokyo", state: null, country: "Japan", phone: "+81 3 3305 0088", ponseti: true, lat: 35.64, lng: 139.55 },
  { id: 200, name: "Natsuo Yasui, MD", specialty: "Orthopedic Surgery", hospital: "University of Tokushima", city: "Tokushima", state: null, country: "Japan", phone: "+81 88 633 7238", ponseti: true, lat: 34.07, lng: 134.55 },
  { id: 201, name: "Yutaka Kinoshita, MD", specialty: "Orthopedic Surgery", hospital: "Tokushima University Graduate School", city: "Tokushima", state: null, country: "Japan", phone: "+81 88 633 7240", ponseti: true, lat: 34.07, lng: 134.55 },

  // Jordan
  { id: 202, name: "Dr. Mohammad Abu-Ain, MD", specialty: "Orthopedic Surgery", hospital: "Gardens Hospital", city: "Amman", state: null, country: "Jordan", phone: "+962 7 96111490", ponseti: true, lat: 31.95, lng: 35.91 },
  { id: 203, name: "Dr. Kamel F. Afifi", specialty: "Orthopedic Surgery", hospital: "Jordan Hospital and Medical Center", city: "Amman", state: null, country: "Jordan", phone: "+962 79 5528253", ponseti: true, lat: 31.95, lng: 35.91 },
  { id: 204, name: "Dr. Mahmoud M Odat, MD", specialty: "Orthopedic Surgery", hospital: "Arab Medical Center", city: "Amman", state: null, country: "Jordan", phone: "+962 799 018833", ponseti: true, lat: 31.95, lng: 35.91 },

  // Lithuania
  { id: 205, name: "Jolita Gintautiene", specialty: "Orthopedic Surgery", hospital: null, city: "Kaunas", state: null, country: "Lithuania", phone: "+370 685 76269", ponseti: true, lat: 54.90, lng: 23.90 },

  // Malawi
  { id: 206, name: "Steve Mannion", specialty: "Orthopedic Surgery", hospital: "Malawi Against Physical Disability", city: "Lilongwe", state: null, country: "Malawi", ponseti: true, lat: -13.97, lng: 33.79 },

  // Mexico
  { id: 207, name: "Dra. Erika Iliana Arana Hernández", specialty: "Orthopedic Surgery", hospital: "Hospital Civil de Guadalajara Fray Antonio Alcalde", city: "Guadalajara", state: null, country: "Mexico", phone: "+52 33 3658 1724", ponseti: true, lat: 20.66, lng: -103.35 },
  { id: 208, name: "Dr. Marco Antonio Ascacio Solis", specialty: "Orthopedic Surgery", hospital: "Hospital Regional Materno Infantil de Nuevo Leon", city: "Guadalupe", state: null, country: "Mexico", phone: "+52 818 131 3232", ponseti: true, lat: 25.68, lng: -100.26 },
  { id: 209, name: "Dr. Hugo Carrillo Munoz", specialty: "Orthopedic Surgery", hospital: null, city: "Zapopan", state: null, country: "Mexico", phone: "+52 33 3667 1638", ponseti: true, lat: 20.72, lng: -103.38 },
  { id: 210, name: "Dr. Sonia Maria Castro Noriega", specialty: "Orthopedic Surgery", hospital: "Hospital de Nino", city: "Villahermosa", state: null, country: "Mexico", phone: "+52 993 351 1090", ponseti: true, lat: 17.99, lng: -92.93 },
  { id: 211, name: "Dr. Carlos Cuevas De Alba", specialty: "Orthopedic Surgery", hospital: "Hospital Civil de Guadalajara", city: "Guadalajara", state: null, country: "Mexico", phone: "+52 33 3658 1724", ponseti: true, lat: 20.66, lng: -103.35 },
  { id: 212, name: "Dr. Ariathna Hernandez Segura", specialty: "Orthopedic Surgery", hospital: "Hospital San Lucas", city: "Oaxaca de Juárez", state: null, country: "Mexico", phone: "+52 951 135 0299", ponseti: true, lat: 17.06, lng: -96.73 },
  { id: 213, name: "Dr. Aurelio G. Martinez Lozano", specialty: "Orthopedic Surgery", hospital: null, city: "Monterrey", state: null, country: "Mexico", phone: "+52 818 347 6698", ponseti: true, lat: 25.69, lng: -100.32 },
  { id: 214, name: "Dr. Alfredo Ramirez Peinado", specialty: "Orthopedic Surgery", hospital: "Hospital Infantil del Estado", city: "Chihuahua", state: null, country: "Mexico", phone: "+52 614 410 5988", ponseti: true, lat: 28.63, lng: -106.07 },
  { id: 215, name: "Dr. Gilberto Rios Ruiz", specialty: "Orthopedic Surgery", hospital: "Hospital Shriners para Niños", city: "Mexico City", state: null, country: "Mexico", phone: "+52 55 54247850", ponseti: true, lat: 19.43, lng: -99.13 },
  { id: 216, name: "Dr. Adolfo Rocha Geded", specialty: "Orthopedic Surgery", hospital: "Hospital de Ortopedia Cruz Roja Mexicana", city: "Merida", state: null, country: "Mexico", phone: "+52 999 983 0232", ponseti: true, lat: 20.97, lng: -89.59 },
  { id: 217, name: "Dr. Luis Alberto Perez Mendez", specialty: "Orthopedic Surgery", hospital: null, city: "Oaxaca de Juárez", state: null, country: "Mexico", phone: "+52 951 513 4974", ponseti: true, lat: 17.06, lng: -96.73 },
  { id: 218, name: "Dra. Jelitze Sosa Colomé", specialty: "Orthopedic Surgery", hospital: null, city: "Merida", state: null, country: "Mexico", phone: "+52 999 1982136", ponseti: true, lat: 20.97, lng: -89.59 },
  { id: 219, name: "Dr. Antonio Toledo Medina", specialty: "Orthopedic Surgery", hospital: "Hospital General Regional no. 58 IMSS", city: "León", state: null, country: "Mexico", phone: "+52 477 1015110", ponseti: true, lat: 21.12, lng: -101.68 },
  { id: 220, name: "Dr. Luis Jesús Ramos Alday", specialty: "Orthopedic Surgery", hospital: "Centro de Rehabilitación Infantil Teletón", city: "Saltillo", state: null, country: "Mexico", phone: "+52 844 4852242", ponseti: true, lat: 25.44, lng: -100.97 },
  { id: 221, name: "Dra. M. Gabriela Morales Pirela", specialty: "Orthopedic Surgery", hospital: "Instituto Nacional de Pediatría", city: "Mexico City", state: null, country: "Mexico", phone: "+52 55 10840900", ponseti: true, lat: 19.43, lng: -99.13 },
  { id: 222, name: "Dr. Luis Eduardo Loyo Soriano", specialty: "Orthopedic Surgery", hospital: "Instituto Nacional de Rehabilitación", city: "Mexico City", state: null, country: "Mexico", phone: "+52 55 5999 1000", ponseti: true, lat: 19.43, lng: -99.13 },
  { id: 223, name: "Dr. Santos Santana Serna Reyna", specialty: "Orthopedic Surgery", hospital: "Hospital Regional de Alta Especialidad Materno Infantil", city: "Guadalupe", state: null, country: "Mexico", phone: "+52 81 8131 3285", ponseti: true, lat: 25.68, lng: -100.26 },
  { id: 224, name: "Dra. Luz Gabriela Villarreal Rivera", specialty: "Orthopedic Surgery", hospital: "Hospital Regional de Alta Especialidad Materno Infantil", city: "Guadalupe", state: null, country: "Mexico", phone: "+52 81 8131 3285", ponseti: true, lat: 25.68, lng: -100.26 },
  { id: 225, name: "Dr. José Abraham Delgadillo Vargas", specialty: "Orthopedic Surgery", hospital: "Hospital Andalucia", city: "Torreón", state: null, country: "Mexico", phone: "+52 871 7240147", ponseti: true, lat: 25.53, lng: -103.44 },

  // Namibia
  { id: 226, name: "Dr. Ernest B. Kombo, MD", specialty: "Orthopedic Surgery", hospital: "Windhoek Central Hospital", city: "Windhoek", state: null, country: "Namibia", phone: "+264 814743589", ponseti: true, lat: -22.56, lng: 17.07 },

  // Netherlands
  { id: 227, name: "Dr. Arnold T. Besselaar", specialty: "Orthopedic Surgery", hospital: "Máxima Medical Center", city: "Veldhoven", state: null, country: "Netherlands", ponseti: true, lat: 51.41, lng: 5.41 },
  { id: 228, name: "Peter AA Struijs, MD PhD", specialty: "Orthopedic Surgery", hospital: "Academic Medical Center", city: "Amsterdam", state: null, country: "Netherlands", phone: "+31 20 5663386", ponseti: true, lat: 52.37, lng: 4.90 },

  // New Zealand
  { id: 229, name: "Haemish Crawford, MD", specialty: "Orthopedic Surgery", hospital: "Starship Children's Hospital", city: "Auckland", state: null, country: "New Zealand", phone: "+64 9 379 7440", ponseti: true, lat: -36.85, lng: 174.76 },

  // Nicaragua
  { id: 230, name: "Mario Francisco Sequeira Somoza, MD", specialty: "Orthopedic Surgery", hospital: "Hospital Metropolitano", city: "Managua", state: null, country: "Nicaragua", phone: "+505 22782920", ponseti: true, lat: 12.13, lng: -86.29 },

  // Nigeria
  { id: 231, name: "Dr. Ladipo Adewole", specialty: "Orthopedic Surgery", hospital: "Lagos State University Teaching Hospital", city: "Lagos", state: null, country: "Nigeria", phone: "+234 8033008050", ponseti: true, lat: 6.60, lng: 3.35 },
  { id: 232, name: "Dr. Oluwadare Esan", specialty: "Orthopedic Surgery", hospital: "Obafemi Awolowo University Teaching Hospital", city: "Ile Ife", state: null, country: "Nigeria", phone: "+234 8064713940", ponseti: true, lat: 7.48, lng: 4.56 },
  { id: 233, name: "Dr. Omolade A. Lasebikan", specialty: "Orthopedic Surgery", hospital: "National Orthopaedic Hospital", city: "Enugu", state: null, country: "Nigeria", phone: "+234 08094316112", ponseti: true, lat: 6.46, lng: 7.51 },
  { id: 234, name: "Dr. Olayinka Adegbehingbe", specialty: "Orthopedic Surgery", hospital: "Obafemi Awolowo University Teaching Hospital", city: "Ile Ife", state: null, country: "Nigeria", ponseti: true, lat: 7.48, lng: 4.56 },
  { id: 235, name: "Dr. Adeoye Adetiloye", specialty: "Orthopedic Surgery", hospital: "Gwarinpa General Hospital", city: "Abuja", state: null, country: "Nigeria", phone: "+234 803 471 9891", ponseti: true, lat: 9.08, lng: 7.40 },
  { id: 236, name: "Dr. Habila Umaru", specialty: "Orthopedic Surgery", hospital: "National Hospital Abuja", city: "Abuja", state: null, country: "Nigeria", ponseti: true, lat: 9.08, lng: 7.40 },
  { id: 237, name: "Dr. Orlando Ugwoegbulem", specialty: "Orthopedic Surgery", hospital: "National Orthopaedic Hospital Lagos", city: "Lagos", state: null, country: "Nigeria", ponseti: true, lat: 6.60, lng: 3.35 },
  { id: 238, name: "Dr. Zumnan Songden", specialty: "Orthopedic Surgery", hospital: "University of Abuja Teaching Hospital", city: "Gwagwalada", state: null, country: "Nigeria", ponseti: true, lat: 8.94, lng: 7.09 },

  // North Macedonia
  { id: 239, name: "Milena Bogojevska Doksevska", specialty: "Orthopedic Surgery", hospital: "University Clinic for Orthopedic Surgery", city: "Skopje", state: null, country: "North Macedonia", phone: "+389 70 339963", ponseti: true, lat: 42.00, lng: 21.43 },

  // Norway
  { id: 240, name: "Christian Saetersdal, MD", specialty: "Orthopedic Surgery", hospital: "Haukeland University Hospital", city: "Bergen", state: null, country: "Norway", phone: "+47 55 97 50 00", ponseti: true, lat: 60.39, lng: 5.32 },
  { id: 241, name: "Dr. Suki Liyanarachi", specialty: "Orthopedic Surgery", hospital: "Trondheim University Hospital St Olavs", city: "Trondheim", state: null, country: "Norway", phone: "+47 72573000", ponseti: true, lat: 63.43, lng: 10.40 },

  // Oman
  { id: 242, name: "Dr. Tariq Amin Sheikh", specialty: "Orthopedic Surgery", hospital: "Khoula Hospital", city: "Muscat", state: null, country: "Oman", phone: "+968 95622760", ponseti: true, lat: 23.59, lng: 58.38 },

  // Pakistan
  { id: 243, name: "Prof. Anisuddin Bhatti", specialty: "Orthopedic Surgery", hospital: "Jinnah Postgraduate Medical Centre", city: "Karachi", state: null, country: "Pakistan", phone: "+92 21 32238098", ponseti: true, lat: 24.86, lng: 67.00 },
  { id: 244, name: "Dr. Irshad Bhutto", specialty: "Orthopedic Surgery", hospital: "LUMHS", city: "Jamshoro", state: null, country: "Pakistan", ponseti: true, lat: 25.43, lng: 68.28 },
  { id: 245, name: "Prof. Muhammad Amin Chinoy", specialty: "Orthopedic Surgery", hospital: "The Indus Hospital", city: "Karachi", state: null, country: "Pakistan", phone: "+92 21 35112709", ponseti: true, lat: 24.86, lng: 67.00 },
  { id: 246, name: "Dr. Mansoor Ali Khan", specialty: "Orthopedic Surgery", hospital: "Indus Hospital", city: "Karachi", state: null, country: "Pakistan", phone: "+92 21 35112713", ponseti: true, lat: 24.86, lng: 67.00 },
  { id: 247, name: "Dr. Mehtab Ahmed Pirwani", specialty: "Orthopedic Surgery", hospital: "DUHS Civil Hospital", city: "Karachi", state: null, country: "Pakistan", phone: "+92 21 34380161", ponseti: true, lat: 24.86, lng: 67.00 },

  // Philippines
  { id: 248, name: "Julyn Aguilar, MD", specialty: "Orthopedic Surgery", hospital: null, city: "Quezon City", state: null, country: "Philippines", ponseti: true, lat: 14.68, lng: 121.04 },

  // Poland
  { id: 249, name: "Jacek Kapinski, MD", specialty: "Orthopedic Surgery", hospital: "Szpital Dziecięcy im prof. Jana Bogdanowicza", city: "Warsaw", state: null, country: "Poland", phone: "+48 22 5098351", ponseti: true, lat: 52.23, lng: 21.01 },
  { id: 250, name: "Blazej Pruszczynski, MD PhD", specialty: "Orthopedic Surgery", hospital: "Medical University of Lodz", city: "Lodz", state: null, country: "Poland", phone: "+48 42 2014250", ponseti: true, lat: 51.76, lng: 19.46 },

  // Portugal
  { id: 251, name: "Nuno Alegrete, MD PhD", specialty: "Orthopedic Surgery", hospital: "Casa de Saúde da Boavista", city: "Porto", state: null, country: "Portugal", phone: "+351 228339060", ponseti: true, lat: 41.16, lng: -8.63 },
  { id: 252, name: "Cristina Alves, MD", specialty: "Orthopedic Surgery", hospital: "Hospital Pediatrico de Coimbra", city: "Coimbra", state: null, country: "Portugal", phone: "+351 239 480 355", ponseti: true, lat: 40.20, lng: -8.41 },
  { id: 253, name: "Manuel Cassiano Neves, MD", specialty: "Orthopedic Surgery", hospital: "Hospital CUF Descobertas", city: "Lisbon", state: null, country: "Portugal", ponseti: true, lat: 38.72, lng: -9.14 },

  // Puerto Rico
  { id: 254, name: "Samuel A. Fernandez-Lopez, MD", specialty: "Orthopedic Surgery", hospital: null, city: "San Juan", state: null, country: "Puerto Rico", phone: "+1 787 995 3454", ponseti: true, lat: 18.47, lng: -66.11 },

  // Romania
  { id: 255, name: "Dan Cosma, MD PhD", specialty: "Orthopedic Surgery", hospital: "Rehabilitation Clinical Hospital Cluj-Napoca", city: "Cluj-Napoca", state: null, country: "Romania", phone: "+40 264 207021", ponseti: true, lat: 46.77, lng: 23.62 },
  { id: 256, name: "Dr. Ioan Sarbu", specialty: "Orthopedic Surgery", hospital: "Santa Maria Emergency Children Hospital", city: "Iasi", state: null, country: "Romania", phone: "+40 745 760 716", ponseti: true, lat: 47.16, lng: 27.60 },

  // Russia
  { id: 257, name: "Vladimir Kenis", specialty: "Orthopedic Surgery", hospital: "Paediatric Orthopaedic Institute n.a. H.Turner", city: "Pushkin", state: null, country: "Russia", phone: "+7 812 465 2857", ponseti: true, lat: 59.72, lng: 30.40 },
  { id: 258, name: "Andrey Domarev, MD", specialty: "Orthopedic Surgery", hospital: "Filatov's Children's Hospital", city: "Moscow", state: null, country: "Russia", phone: "+7 499 254 6888", ponseti: true, lat: 55.76, lng: 37.62 },
  { id: 259, name: "Dr. Stanislav Ivanov", specialty: "Orthopedic Surgery", hospital: "Turner Institute for Children's Orthopaedics", city: "Pushkin", state: null, country: "Russia", ponseti: true, lat: 59.72, lng: 30.40 },
  { id: 260, name: "Maxim Vavilov, MD", specialty: "Orthopedic Surgery", hospital: "Yaroslavl Regional Hospital", city: "Yaroslavl", state: null, country: "Russia", ponseti: true, lat: 57.63, lng: 39.88 },
  { id: 261, name: "Dr. Andrey Sapogovskiy", specialty: "Orthopedic Surgery", hospital: "Turner Institute for Children's Orthopaedics", city: "Pushkin", state: null, country: "Russia", ponseti: true, lat: 59.72, lng: 30.40 },
  { id: 262, name: "Dr. Julia Stepanova", specialty: "Orthopedic Surgery", hospital: "Turner Institute for Children's Orthopaedics", city: "Pushkin", state: null, country: "Russia", ponseti: true, lat: 59.72, lng: 30.40 },

  // Saudi Arabia
  { id: 263, name: "Dr. Ayman Jawadi", specialty: "Orthopedic Surgery", hospital: "King Saud bin Abdulaziz University", city: "Riyadh", state: null, country: "Saudi Arabia", phone: "+966 11 8011111", ponseti: true, lat: 24.69, lng: 46.72 },
  { id: 264, name: "Munzer Jazaeri, MD", specialty: "Orthopedic Surgery", hospital: "Security Forces Hospital", city: "Riyadh", state: null, country: "Saudi Arabia", phone: "+966 1 4610910", ponseti: true, lat: 24.69, lng: 46.72 },
  { id: 265, name: "Prof. Khalid Khoshhal", specialty: "Orthopedic Surgery", hospital: "Taibah University", city: "Medina", state: null, country: "Saudi Arabia", ponseti: true, lat: 24.52, lng: 39.57 },
  { id: 266, name: "Mamoon Kremli, MD", specialty: "Orthopedic Surgery", hospital: "King Saud University Hospital", city: "Riyadh", state: null, country: "Saudi Arabia", ponseti: true, lat: 24.69, lng: 46.72 },

  // Singapore
  { id: 267, name: "Kevin Lim, MD", specialty: "Orthopedic Surgery", hospital: "KK Women's & Children's Hospital", city: "Singapore", state: null, country: "Singapore", phone: "+65 6394 8988", ponseti: true, lat: 1.35, lng: 103.82 },

  // Slovakia
  { id: 268, name: "Dr. Pavol Rendek", specialty: "Orthopedic Surgery", hospital: "Národný ústav detských chorôb", city: "Bratislava", state: null, country: "Slovakia", ponseti: true, lat: 48.15, lng: 17.11 },

  // Slovenia
  { id: 269, name: "Vane Antolic, MD", specialty: "Orthopedic Surgery", hospital: "Faculty of Medicine Ljubljana", city: "Ljubljana", state: null, country: "Slovenia", ponseti: true, lat: 46.06, lng: 14.51 },

  // South Africa
  { id: 270, name: "Stewart Dix-Peek, MD", specialty: "Orthopedic Surgery", hospital: "Red Cross Children's Hospital", city: "Cape Town", state: null, country: "South Africa", phone: "+27 21 674 2090", ponseti: true, lat: -33.93, lng: 18.43 },
  { id: 271, name: "Jacques du Toit, MD", specialty: "Orthopedic Surgery", hospital: "Tygerberg Hospital", city: "Parow", state: null, country: "South Africa", phone: "+27 21 938 5333", ponseti: true, lat: -33.90, lng: 18.61 },
  { id: 272, name: "Mark Eltringham, MD", specialty: "Orthopedic Surgery", hospital: "Sunninghill Hospital", city: "Johannesburg", state: null, country: "South Africa", phone: "+27 11 806 1863", ponseti: true, lat: -26.20, lng: 28.05 },
  { id: 273, name: "Gregory Firth, MD", specialty: "Orthopedic Surgery", hospital: "Chris Hani Baragwanath Hospital", city: "Johannesburg", state: null, country: "South Africa", phone: "+27 11 933 8914", ponseti: true, lat: -26.20, lng: 28.05 },
  { id: 274, name: "Anthony Robertson, MD", specialty: "Orthopedic Surgery", hospital: "Charlotte Maxeke Johannesburg Academic Hospital", city: "Johannesburg", state: null, country: "South Africa", phone: "+27 11 717 2538", ponseti: true, lat: -26.20, lng: 28.05 },
  { id: 275, name: "Paul Rollinson", specialty: "Orthopedic Surgery", hospital: "Ngwelezana Hospital", city: "Ngwelezana", state: null, country: "South Africa", ponseti: true, lat: -28.82, lng: 31.87 },
  { id: 276, name: "Dr. Kobus Smit", specialty: "Orthopedic Surgery", hospital: "University of the Free State", city: "Bloemfontein", state: null, country: "South Africa", ponseti: true, lat: -29.12, lng: 26.21 },

  // Spain
  { id: 277, name: "Rafael Casielles Javaloyes, MD", specialty: "Orthopedic Surgery", hospital: "Hospital Materno-Infantil", city: "Málaga", state: null, country: "Spain", ponseti: true, lat: 36.72, lng: -4.42 },
  { id: 278, name: "Dra. Anna Ey Batlle", specialty: "Orthopedic Surgery", hospital: "Clinica Diagonal", city: "Barcelona", state: null, country: "Spain", ponseti: true, lat: 41.39, lng: 2.17 },
  { id: 279, name: "Francisco Javier Downey-Carmona, MD", specialty: "Orthopedic Surgery", hospital: "Orthopediatrica", city: "Sevilla", state: null, country: "Spain", phone: "+34 954 610 022", ponseti: true, lat: 37.39, lng: -5.98 },

  // Sri Lanka
  { id: 280, name: "Dimuthu Tennakoon, MS", specialty: "Orthopedic Surgery", hospital: "Teaching Hospital Kurunegala", city: "Kurunegala", state: null, country: "Sri Lanka", phone: "+94 37 2223919", ponseti: true, lat: 7.49, lng: 80.36 },
  { id: 281, name: "Dr. Sunil Wijayasinghe", specialty: "Orthopedic Surgery", hospital: "Lady Ridgeway Hospital for Children", city: "Colombo", state: null, country: "Sri Lanka", ponseti: true, lat: 6.93, lng: 79.86 },

  // Sudan
  { id: 282, name: "Dr. Samir Shaheen", specialty: "Orthopedic Surgery", hospital: "University of Khartoum", city: "Khartoum", state: null, country: "Sudan", ponseti: true, lat: 15.55, lng: 32.53 },

  // Sweden
  { id: 283, name: "Anna Apelqvist, MD", specialty: "Orthopedic Surgery", hospital: "Kristianstad Hospital", city: "Kristianstad", state: null, country: "Sweden", phone: "+46 44 309 1260", ponseti: true, lat: 56.03, lng: 14.16 },
  { id: 284, name: "Per-Erik Persson, MD", specialty: "Orthopedic Surgery", hospital: "Kristianstad Hospital", city: "Kristianstad", state: null, country: "Sweden", phone: "+46 44 309 1260", ponseti: true, lat: 56.03, lng: 14.16 },
  { id: 285, name: "Dr. Bertil Romanus", specialty: "Orthopedic Surgery", hospital: "Sahlgrenska University Hospital", city: "Gothenburg", state: null, country: "Sweden", phone: "+46 31 343 4000", ponseti: true, lat: 57.71, lng: 11.97 },

  // Switzerland
  { id: 286, name: "Dr. med. Erica Lamprecht", specialty: "Orthopedic Surgery", hospital: "Kantonsspital Winterthur", city: "Winterthur", state: null, country: "Switzerland", ponseti: true, lat: 47.50, lng: 8.72 },
  { id: 287, name: "Rafael Velasco, MD", specialty: "Orthopedic Surgery", hospital: "Schulthess Klinik", city: "Zurich", state: null, country: "Switzerland", phone: "+41 1 385 74 30", ponseti: true, lat: 47.38, lng: 8.54 },

  // Tanzania
  { id: 288, name: "Robert Isaac Mhina, MD", specialty: "Orthopedic Surgery", hospital: "Muhimbili University Orthopaedic Institute", city: "Dar es Salaam", state: null, country: "Tanzania", phone: "+255 22 2151367", ponseti: true, lat: -6.79, lng: 39.21 },
  { id: 289, name: "Isidor H. Ngayomela, MD", specialty: "Orthopedic Surgery", hospital: "Bugando Medical Centre", city: "Mwanza", state: null, country: "Tanzania", ponseti: true, lat: -2.52, lng: 32.90 },

  // Thailand
  { id: 290, name: "Noppachart Limpaphayom, M.D.", specialty: "Orthopedic Surgery", hospital: "Chulalongkorn University", city: "Bangkok", state: null, country: "Thailand", phone: "+66 2 256 4230", ponseti: true, lat: 13.76, lng: 100.50 },
  { id: 291, name: "Amnuay Jirasirikul, MD", specialty: "Orthopedic Surgery", hospital: "Ramathibodi Hospital", city: "Bangkok", state: null, country: "Thailand", phone: "+66 2 201 1589", ponseti: true, lat: 13.76, lng: 100.50 },

  // Turkey
  { id: 292, name: "Aysegul Bursali", specialty: "Orthopedic Surgery", hospital: null, city: "Istanbul", state: null, country: "Turkey", phone: "+90 532 4247859", ponseti: true, lat: 41.01, lng: 28.98 },
  { id: 293, name: "Salih Marangoz, MD", specialty: "Orthopedic Surgery", hospital: "Acibadem University Atakent Hospital", city: "Istanbul", state: null, country: "Turkey", phone: "+90 212 4044444", ponseti: true, lat: 41.01, lng: 28.98 },

  // Ukraine
  { id: 294, name: "Andrei Popchenko, MD", specialty: "Orthopedic Surgery", hospital: "Odessa Children's Regional Hospital", city: "Odessa", state: null, country: "Ukraine", phone: "+380 487405236", ponseti: true, lat: 46.48, lng: 30.72 },

  // Uganda
  { id: 295, name: "Jackson Amone, MD", specialty: "Orthopedic Surgery", hospital: "Mulago Hospital", city: "Kampala", state: null, country: "Uganda", phone: "+256 39 2946369", ponseti: true, lat: 0.35, lng: 32.58 },
  { id: 296, name: "Edward Naddumba, MD", specialty: "Orthopedic Surgery", hospital: "Mulago Hospital", city: "Kampala", state: null, country: "Uganda", phone: "+256 41 2542332", ponseti: true, lat: 0.35, lng: 32.58 },
  { id: 297, name: "Sheba Gitta Nakacubo, MD", specialty: "Orthopedic Surgery", hospital: "Makerere University School of Public Health", city: "Kampala", state: null, country: "Uganda", ponseti: true, lat: 0.35, lng: 32.58 },
  { id: 298, name: "Gonzaga Waiswa, MD", specialty: "Orthopedic Surgery", hospital: "Mulago Hospital", city: "Kampala", state: null, country: "Uganda", phone: "+256 77 2473939", ponseti: true, lat: 0.35, lng: 32.58 },

  // UAE
  { id: 299, name: "Dr. Marc Sinclair", specialty: "Orthopedic Surgery", hospital: "King's College Hospital London Dubai", city: "Dubai", state: null, country: "UAE", phone: "+971 4 519 9999", ponseti: true, lat: 25.20, lng: 55.27 },
  { id: 300, name: "Edilson Forlin, MD", specialty: "Orthopedic Surgery", hospital: "King's College Hospital Dubai", city: "Dubai", state: null, country: "UAE", phone: "+971 4 2477790", ponseti: true, lat: 25.20, lng: 55.27 },

  // United Kingdom
  { id: 301, name: "Dr. Naomi Davis", specialty: "Orthopedic Surgery", hospital: "Royal Manchester Children's Hospital", city: "Manchester", state: null, country: "United Kingdom", phone: "+44 161 701 8758", ponseti: true, lat: 53.48, lng: -2.24 },
  { id: 302, name: "Mr. Gwyn Evans", specialty: "Orthopedic Surgery", hospital: "Robert Jones and Agnes Hunt Orthopaedic Hospital", city: "Oswestry", state: null, country: "United Kingdom", ponseti: true, lat: 52.86, lng: -3.05 },
  { id: 303, name: "Stuart Evans", specialty: "Orthopedic Surgery", hospital: "Chelsea and Westminster Hospital", city: "London", state: null, country: "United Kingdom", phone: "+44 208 746 8350", ponseti: true, lat: 51.51, lng: -0.13 },
  { id: 304, name: "Dr. Rupert D. Ferdinand", specialty: "Orthopedic Surgery", hospital: "Dumfries & Galloway Royal Infirmary", city: "Dumfries", state: null, country: "United Kingdom", phone: "+44 1387 241045", ponseti: true, lat: 55.07, lng: -3.61 },
  { id: 305, name: "Mr. Neeraj Garg", specialty: "Orthopedic Surgery", hospital: "Royal Liverpool Children's Hospital", city: "Liverpool", state: null, country: "United Kingdom", phone: "+44 151 2525376", ponseti: true, lat: 53.41, lng: -2.99 },
  { id: 306, name: "Ms. Alison Hulme", specialty: "Orthopedic Surgery", hospital: "Chelsea and Westminster Hospital", city: "London", state: null, country: "United Kingdom", phone: "+44 208 746 8350", ponseti: true, lat: 51.51, lng: -0.13 },
  { id: 307, name: "Mr. Nigel Kiely", specialty: "Orthopedic Surgery", hospital: "Robert Jones and Agnes Hunt Orthopaedic Hospital", city: "Oswestry", state: null, country: "United Kingdom", phone: "+44 1691 404000", ponseti: true, lat: 52.86, lng: -3.05 },
  { id: 308, name: "Gavin P. de Kiewiet", specialty: "Orthopedic Surgery", hospital: "Sunderland Royal Hospital", city: "Sunderland", state: null, country: "United Kingdom", ponseti: true, lat: 54.91, lng: -1.38 },
  { id: 309, name: "James G. B. MacLean, MD", specialty: "Orthopedic Surgery", hospital: "Perth Royal Infirmary", city: "Perth", state: null, country: "United Kingdom", ponseti: true, lat: 56.40, lng: -3.43 },
  { id: 310, name: "Steve Mannion", specialty: "Orthopedic Surgery", hospital: "CBM & World Orthopaedic Concern", city: "Blackpool", state: null, country: "United Kingdom", ponseti: true, lat: 53.81, lng: -3.05 },
  { id: 311, name: "Miss Olivia Malaga Shaw", specialty: "Orthopedic Surgery", hospital: "The Royal Free Hospital", city: "London", state: null, country: "United Kingdom", phone: "+44 20 7472 6897", ponseti: true, lat: 51.51, lng: -0.13 },
  { id: 312, name: "Nikki Shack", specialty: "Physiotherapy", hospital: "Royal Free Hospital", city: "London", state: null, country: "United Kingdom", ponseti: true, lat: 51.51, lng: -0.13 },
  { id: 313, name: "Rachel Short", specialty: "Orthopedic Surgery", hospital: "Crosshouse Hospital", city: "Kilmarnock", state: null, country: "United Kingdom", ponseti: true, lat: 55.61, lng: -4.50 },
  { id: 314, name: "Michael Uglow, MD", specialty: "Orthopedic Surgery", hospital: "Southampton University Hospital", city: "Southampton", state: null, country: "United Kingdom", phone: "+44 2381 205758", ponseti: true, lat: 50.91, lng: -1.40 },

  // Uzbekistan
  { id: 315, name: "Dr. Khushnud Rustamov", specialty: "Orthopedic Surgery", hospital: "Republican Specialized Scientific-Practical Medical Center of Traumatology", city: "Tashkent", state: null, country: "Uzbekistan", phone: "+998 97 752 5782", ponseti: true, lat: 41.30, lng: 69.24 },
  { id: 316, name: "Dr. Rasuljon Rakhimov", specialty: "Orthopedic Surgery", hospital: "Ponseti Markaz", city: "Tashkent", state: null, country: "Uzbekistan", ponseti: true, lat: 41.30, lng: 69.24 },

  // Uruguay
  { id: 317, name: "Dr. Mario Schimchak", specialty: "Orthopedic Surgery", hospital: null, city: "Montevideo", state: null, country: "Uruguay", phone: "+598 2 7104854", ponseti: true, lat: -34.90, lng: -56.16 },

  // Venezuela
  { id: 318, name: "Dr. Tairon Diaz", specialty: "Orthopedic Surgery", hospital: "Children's Orthopedic Hospital", city: "Caracas", state: null, country: "Venezuela", phone: "+58 212 5782595", ponseti: true, lat: 10.48, lng: -66.90 },
  { id: 319, name: "Dr. Sigfredo Dominguez", specialty: "Orthopedic Surgery", hospital: "Hospital Ortopedico Infantil", city: "Caracas", state: null, country: "Venezuela", phone: "+58 212 5094411", ponseti: true, lat: 10.48, lng: -66.90 },
];

export const states = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
];
