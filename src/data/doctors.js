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
  { id: 79, name: "Abigail K. Allen, MD", specialty: "Orthopedic Surgery", hospital: "Hospital for Special Surgery", city: "New York", state: "NY", phone: "(212) 606-1253", ponseti: true, lat: 40.7128, lng: -74.0060 },
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
];

export const states = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
];
