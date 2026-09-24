function buildImagePath(carName, fileName) {
  return `/CarProjects/${encodeURIComponent(carName)}/${encodeURIComponent(fileName)}`;
}

function buildPhotos(carName, fileNames) {
  return fileNames.map((fileName) => buildImagePath(carName, fileName));
}

export const carProjects = [
  {
    id: "1946-mg",
    name: "1946 MG",
    beforeImage: buildImagePath("1946 MG", "MG1.jpg"),
    afterImage: buildImagePath("1946 MG", "MG11.jpeg"),
    description:
      "This MG came to the shop totally disassembled in July of 2021. The owner had taken it apart as a retirement project and realized he was over his head. Another shop started the work and also got overwhelmed with the wooden structure. The rest of the wood was assembled to factory specifications, steel body panels all custom fit to that structure (just like they did in England in 1946). All of the shiny bits were repaired and re-chromed. The chassis was gone through and every component was repaired, restored, or replaced. A brand new interior was installed as well as the roof and entire wiring harness. It was returned to it's owner in New Jersey in July of 2023. He was over the moon and said 'WOW! I can't believe it. I had all but given up on this car and was about to start selling it's parts on E-bay.'",
    photos: buildPhotos("1946 MG", [
      "MG1.jpg",
      "MG2.jpg",
      "MG3.jpg",
      "MG4.jpg",
      "MG5.jpg",
      "MG6.jpg",
      "MG7.jpg",
      "MG8.jpg",
      "MG9.jpg",
      "MG10.jpeg",
      "MG11.jpeg",
      "MG12.jpeg"      
    ]),
  },
  {
    id: "1963-catalina",
    name: "1963 Catalina",
    beforeImage: buildImagePath("1963 Catalina", "63Catalina 1.jpg"),
    afterImage: buildImagePath("1963 Catalina", "63Catalina 13.JPG"),
    description:
      "This car came to the shop having had an older restoration. The paint was in poor condition and there were some rust issues. The old paint was stripped, rusty areas were cut out and replaced with custom patch panels. (Replacement body panels were not available for this car). The trunk floor was replaced. The car was then primed, blocked, and painted in a single stage urethane.",
    photos: buildPhotos("1963 Catalina", [
      "63Catalina 1.jpg",
      "63Catalina 2.jpg",
      "63Catalina 3.jpg",
      "63Catalina 4.jpg",
      "63Catalina 5.jpg",
      "63Catalina 6.jpg",
      "63Catalina 7.jpg",
      "63Catalina 8.jpg",
      "63Catalina 9.jpg",
      "63Catalina 10.jpg",
      "63Catalina 11.jpg",
      "63Catalina 12.jpg",
      "63Catalina 13.JPG",
    ]),
  },
  {
    id: "1967-camaro",
    name: "1967 Camaro",
    beforeImage: buildImagePath("1967 Camaro", "67Camaro 5.jpg"),
    afterImage: buildImagePath("1967 Camaro", "67Camaro 2.JPEG"),
    description:
      "This car came to the hop after the owner had done most of the body work himself. He had been having trouble finding a shop that would even take the project on. The shop that did give him a price was much more expensive, had a longer delivery time, and wouldn’t get back to him on when they could start. The car was delivered on time and at the cost quoted.",
    photos: buildPhotos("1967 Camaro", [
      "67Camaro 1.jpg",
      "67Camaro 2.JPEG",
      "67Camaro 3.JPEG",
      "67Camaro 4.JPEG",
      "67Camaro 5.jpg",
      "67Camaro 6.jpg",
    ]),
  },
  {
    id: "1964-electra-225",
    name: "1964 Electra 225",
    beforeImage: buildImagePath("1964 Electra 225", "1964 Electra B4.jpg"),
    afterImage: buildImagePath("1964 Electra 225", "1964 Electra A5.jpg"),
    photos: buildPhotos("1964 Electra 225", [
      "1964 Electra B1.jpg",
      "1964 Electra B2.jpg",
      "1964 Electra B3.jpg",
      "1964 Electra B4.jpg",
      "1964 Electra B5.jpg",
      "1964 Electra A1.jpg",
      "1964 Electra A2.jpg",
      "1964 Electra A3.jpg",
      "1964 Electra A4.jpg",
      "1964 Electra A5.jpg",
      "1964 Electra A6.jpg",
    ]),
  },
  {
    id: "1970-k5-blazer",
    name: "1970 K5 Blazer",
    beforeImage: buildImagePath("1970 K5 Blazer", "70K5 10.jpg"),
    afterImage: buildImagePath("1970 K5 Blazer", "70K5 1.jpg"),
    description:
      "This truck came in with an older restoration. There were paint problems, some rust, and many dents and dings. The rust was repaired (including some structural components), body bumped out and blocked straight, then painted with base/clear urethane. Spray in bedliner was added to the rear and cargo area for looks and durability. The soft was installed by the shop also.",
    photos: buildPhotos("1970 K5 Blazer", [
      "70K5 1.jpg",
      "70K5 2.jpg",
      "70K5 3.jpg",
      "70K5 4.jpg",
      "70K5 5.jpg",
      "70K5 6.jpg",
      "70K5 7.jpg",
      "70K5 8.jpg",
      "70K5 9.jpg",
      "70K5 10.jpg",
    ]),
  },
  {
    id: "1985-k5-blazer",
    name: "1985 K5 Blazer",
    beforeImage: buildImagePath("1985 K5 Blazer", "K5 1.jpg"),
    afterImage: buildImagePath("1985 K5 Blazer", "K5 10.jpg"),
    description:
      "This truck came in as a rust free survivor from Texas. The paint had issues, all the rubber was bad, and there was some body damage. The damage was repaired, the engine compartment refreshed and the A/C deleted. The biggest thing was a total color change. That required repainting everything that had been tan or brown. Spray in bedliner was added to the rear and cargo area. I worked with the customer to come up with a custom lace paint job. She selected the lace and the color. She was unhappy with the look of the first try so we went back to the drawing board and came up with a much more subtle scheme that she is delighted with.",
    photos: buildPhotos("1985 K5 Blazer", [
      "K5 1.jpg",
      "K5 2.jpg",
      "K5 3.jpg",
      "K5 4.jpg",
      "K5 5.jpg",
      "K5 6.jpg",
      "K5 7.JPG",
      "K5 8.jpg",
      "K5 9.jpg",
      "K5 10.jpg",
    ]),
  },
];
