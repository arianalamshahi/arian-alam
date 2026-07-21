const cases = {
  broadband: {
    eyebrow: "CASE 01 · AFFÄRSANALYS OCH LEVERANTÖRSDIALOG",
    title: "Bredbandsutredning för 44 hushåll",
    lead: "Ett initiativ som började med ett erbjudande i brevlådan och utvecklades till en strukturerad utredning av kostnader, teknik och ansvarsfördelning.",
    challenge: "Föreningens hushåll hade redan bredbandskostnader, samtidigt som ett gruppavtal kunde innebära en tydlig ekonomisk förbättring. För att styrelsen skulle kunna fatta ett välgrundat beslut behövde olika prisuppgifter, tekniska upplägg och serviceavgifter jämföras på ett enhetligt sätt.",
    work: [
      "Identifierade möjligheten och tog initiativ till en fördjupad utredning.",
      "Kontaktade nätägare och leverantörer och klargjorde pris, hastighet, router, TV-alternativ, driftavgifter och felansvar.",
      "Jämförde offerter och historiska kostnader samt synliggjorde frågor som behövde lösas före beslut.",
      "Sammanställde materialet till en tydlig rekommendation och ett konkret beslutsunderlag för styrelsen."
    ],
    result: "Utredningen visar en beräknad besparingspotential på cirka 3 500 kronor per hushåll och år, motsvarande ungefär 150 000 kronor för 44 hushåll. Beloppet är en potential – avtalet är ännu inte genomfört.",
    skills: "Affärsanalys · Offertjämförelse · Leverantörsdialog · Teknisk förståelse · Beslutsunderlag",
    status: "Status: beslutsunderlag framtaget, ärendet hanteras vidare av styrelsen."
  },
  ventilation: {
    eyebrow: "CASE 02 · RISKHANTERING OCH PROJEKTINITIERING",
    title: "Åldrande ventilationssystem – från observerad risk till beslut",
    lead: "Ett exempel på att ta ansvar innan ett problem blivit akut: identifiera risken, förklara konsekvenserna och driva fram ett underlag för handling.",
    challenge: "Föreningens centrala ventilationslösning började bli gammal. Ett framtida haveri skulle kunna påverka hela byggnaden, men frågan hade ännu inte utvecklats till ett tydligt projekt.",
    work: [
      "Uppmärksammade systemets ålder och lyfte risken till styrelsen.",
      "Förklarade varför frågan behövde hanteras före ett eventuellt driftstopp.",
      "Tog in offerter och jämförde upplägg för fortsatt utredning och utbyte.",
      "Kommunicerade med leverantörer och strukturerade underlaget för styrelsens beslut."
    ],
    result: "Arbetet bidrog till att styrelsen beslutade om ett större utbytesprojekt med planerat genomförande under hösten 2026.",
    skills: "Riskidentifiering · Fastighetsteknik · Offertarbete · Intressentkommunikation · Projektinitiering",
    status: "Status: beslutat projekt, planerat genomförande hösten 2026."
  },
  portal: {
    eyebrow: "CASE 03 · DIGITAL FÖRBÄTTRING MED AI-STÖD",
    title: "Webbaserad jobb- och processportal",
    lead: "Ett eget digitalt förbättringsprojekt som visar hur jag går från ett återkommande problem till krav, prototyp, testning och iterativ förbättring.",
    challenge: "Jobbsökningen innehöll många parallella processer, dokument, statusar, samtalsunderlag och uppföljningsdatum. Informationen blev svår att överblicka och risken för dubbelarbete ökade.",
    work: [
      "Definierade användarbehov, informationsstruktur och viktigaste funktioner.",
      "Utvecklade med AI-stöd en lokal webbaserad portal med dashboard, pipeline, filtrering och samtalskort.",
      "Testade lösningen på dator och mobil och förbättrade layout och arbetsflöden över flera versioner.",
      "Byggde in import, export och strukturerad lagring för att förenkla fortsatt uppdatering."
    ],
    result: "En fungerande, mobilanpassad lösning som samlar processöversikt, prioritering och förberedelser inför rekryterarsamtal. Projektet är utvecklat med AI-stöd; jag har ansvarat för behov, krav, innehåll, testning och kvalitetskontroll.",
    skills: "Behovsanalys · Kravställning · AI-stödd utveckling · Prototypning · Test och förbättring",
    status: "Status: fungerande lokal produkt som förbättras iterativt."
  }
};

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
menuButton.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const modal = document.getElementById("caseModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function renderCase(key) {
  const data = cases[key];
  modalContent.innerHTML = `
    <div class="modal-content">
      <p class="eyebrow">${data.eyebrow}</p>
      <h2>${data.title}</h2>
      <p class="modal-lead">${data.lead}</p>
      <span class="modal-status">${data.status}</span>
      <section class="modal-section">
        <h3>Utmaning</h3>
        <p>${data.challenge}</p>
      </section>
      <section class="modal-section">
        <h3>Mitt arbete</h3>
        <ul>${data.work.map(item => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="modal-section">
        <h3>Resultat och nuläge</h3>
        <p>${data.result}</p>
      </section>
      <section class="modal-section">
        <h3>Kompetenser som caset visar</h3>
        <p><strong>${data.skills}</strong></p>
      </section>
    </div>`;
  modal.showModal();
  document.body.classList.add("modal-open");
}

document.querySelectorAll("[data-case]").forEach(button => {
  button.addEventListener("click", () => renderCase(button.dataset.case));
});
modalClose.addEventListener("click", () => modal.close());
modal.addEventListener("click", event => {
  if (event.target === modal) modal.close();
});
modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.open) modal.close();
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
