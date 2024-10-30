const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dra. Linda Kelly",
  url: "http://Dralindakelly.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Edificio Ananda, Cl. 32 #8 -09 cons. 601, Tunja, Boyacá",
    addressLocality: "Tunja boyaca",
    addressRegion: "Boyaca",
    postalCode: "150001",
    addressCountry: "CO",
  },
  telephone: "+57 320 9657362",
  description:
    "Odontología Estética en Tunja Boyacá exclusividad y excelencia ,Implantes dentales en Tunja resultado - consulta nuestros servicios y agenda con nosotros,Especialistas en  odontología  en Tunja Boyacá",
  openingHours:
    "Mo 08:00-17:00, Tu 08:00-17:00, We 08:00-17:00, Th 08:00-17:00, Fr 08:00-15:00",
  sameAs: [
    "https://www.facebook.com/dralindakelly?mibextid=LQQJ4d",
    "https://www.instagram.com/lindakellyrj?igsh=b2llZmgxc2d5dWRu",
  ],
  priceRange: "$$$",
  image: "http://Dralindakelly.com/images/logo.png",
});
document.head.appendChild(script);
