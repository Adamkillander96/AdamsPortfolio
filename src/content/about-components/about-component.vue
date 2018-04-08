<template>

<b-container fluid id="about-me">
  <b-row class="position-relative col-overlay">
    <b-col sm="4" class="p-0">
      <ul class="nav justified tabPanelNav flex-row nav-pills nav-fill">
        <li v-b-toggle.accordion1 class="nav-item p-4 adam-red">
          <a class="nav-link nav-link text-white"><span>{{ $t('whoAmI') }}</span> <i class="fas fa-question fa-3x align-middle"></i></a>
        </li>
        <li v-b-toggle.accordion2 class="nav-item p-4 adam-blue">
          <a class="nav-link nav-link text-white"><span>{{ $t('currentMe') }}</span> <i class="fas fa-wrench fa-3x align-middle"></i></a>
        </li>
        <li v-b-toggle.accordion3 class="nav-item p-4 adam-green">
          <a class="nav-link nav-link text-white"><span>{{ $t('perferedJob') }}</span> <i class="fas fa-trophy fa-3x align-middle"></i></a>
        </li>
      </ul>
    </b-col>
    <b-col sm="8" class="p-0 tabPanelContent">
      <b-collapse id="accordion1" visible accordion="my-accordion">
        <b-card-body class="p-4">
          <h4 class="adam-red-text">{{ $t('whoAmI') }}</h4>
          <p class="card-text" v-html="$t('whoAmIDesc')"></p>
        </b-card-body>
      </b-collapse>
      <b-collapse id="accordion2" accordion="my-accordion">
        <b-card-body class="p-4">
          <h4 class="adam-blue-text">{{ $t('currentMe') }}</h4>
          <p class="card-text" v-html="$t('currentMeDesc')"></p>
        </b-card-body>
      </b-collapse>
      <b-collapse id="accordion3" accordion="my-accordion">
        <b-card-body class="p-4">
          <h4 class="adam-green-text">{{ $t('perferedJob') }}</h4>
          <p class="card-text" v-html="$t('perferedJobDesc')"></p>
        </b-card-body>
      </b-collapse>
    </b-col>
  </b-row>
  <b-row class="bg pb-4">
    <b-col lg="6" class="p-4">
      <picture><img class="d-block mx-auto rounded-circle" src="./bild.jpg"></picture>
    </b-col>
    <b-col lg="6" class="p-4">
      <h2 class="adam-turkos-text">{{ $t('aboutMeTitle') }} <i class="fab fa-sistrix"></i></h2>
      <span>{{ $t('aboutMeDescr') }}</span>
      <ul class="p-4" v-html="$t('aboutMeComp')">
      </ul>
    </b-col>
  </b-row>
  <mapComponent></mapComponent>
  <feedbackComponent></feedbackComponent>

</b-container>

</template>

<script>
import mapComponent from './map-component.vue'

export default {
  name: 'about-me',
  components: {
    mapComponent,
  },
  i18n: {
    messages: {
      en: { 
        aboutMeTitle: 'With the user in focus',
        aboutMeDescr: 'For many years I have been working with graphic design & creating user-friendly products in a variety of ways. Below I list the skills & competences I have with me as a result of my work:',
        currentMe: 'My work today',
        currentMeDesc: `I work at Quicksearch Development Department, on the Design Unit. Primarily responsible I for graphic design & ease of use in our customer portals. For example, mean that Customize the appearance of the customers graphical profile & build features, primarily with CSS, HTML & JavaScript but also internal system features. I also design dynamic reports to portals.
        <br><br>
        In our larger projects, we work in teams where I am the link between technology & the customer. I also conduct a few smaller projects where I handle everything from customer contact, data processing & processing of results & graphic design.
        <br><br>
        In parallel with design & development, I take care of our First-line support. This means being support for both our customers & our own employees.`,
        whoAmI: 'Who am I',
        whoAmIDesc: `I am passionate about development, love new features & nice code. I am careful & structured with detail focus but also know when something is "good enough" & is good at meeting deadlines. I have easy to switch between social & sharp mode & like to transform design ideas into reality with the user in focus
        <br><br>
        In my spare time, I would like to relax by watching movies or exercising (but I do not like it). I love music & play drums. Also working with my Youtube channel & playing strategy games with my partner.`,
        aboutMeComp: `
        <li>Can translate customer requests into digital solutions</li>
        <li>Awesome eye for graphic design & layout</li>
        <li>Nerdly interested in UX & creating good customer experience</li>
        <li>Educational & logical - good at explaining so you understand</li>
        <li>Burns to benefit & develop both people & products</li>
        <li>Interested in both web development & stylish design</li>
        <li>Like using the technology for utility to users</li>
        <li>Create routines & manuals to simplify & enhance quality</li>`,
        perferedJob: 'What do I want',
        perferedJobDesc: `My dream is to become a great web developer with knowledge of everything about the subject. Not only today, but also tomorrow's latest technology & frameworks. I do not want to stay there either, I also seek knowledge of Backend system, market, product & function development.
        <br><br>Becoming an expert in everything will be difficult, but basic knowledge & with a great focus on web development, I hope to build & design the coolest systems!
        <br><br>I've been working on amazing companies in my years & it's hard to say what the perfect workplace is. As long as I develop myself, develop product & get the chance to work with something that creates value or difference for others, I'm home.<br><em>...a nice office is also nice!</em>`
        
        },
      se: { 
        aboutMeTitle: 'Med användaren i fokus',
        aboutMeDescr: 'Jag har under många år jobbat med grafisk design och att skapa användarvänliga produkter på en mängd olika sätt. Nedan listar jag de kompetenser och färdigheter jag har med mig som ett resultat av mitt arbete:',
        currentMe: 'Mina arbetsuppgifter idag',
        currentMeDesc: `Jag jobbar på Quicksearch utvecklingsavdelning, på enheten för Design. I första hand ansvarar jag för grafiskt design och användarvänligheten i våra kundportaler. Det kan t.ex. innebära att anpassa utseendet till kundens grafiska profil och bygga funktioner, främst med CSS, HTML och JavaScript men även interna systemfunktioner. Jag designar också dynamiska rapporter till portalerna.
        <br><br>
        I våra större projekt arbetar vi i team där jag är länken mellan tekniken och kunden. Jag leder också några mindre projekt där jag sköter allt från kundkontakt, databehandling och bearbetning av resultat samt grafisk design.
        <br><br>
        Parallellet med design och utveckling har jag hand om vår First-line support. Det innebär att vara stöd för både våra kunder och våra egna medarbetare.`,
        whoAmI: 'Vem är jag',
        whoAmIDesc: `Jag brinner för utveckling, älskar nya funktioner & snygg kod. Noggrannhet & struktur med detaljfokus är min filosofi, men jag vet också när något är ”good enough” & är duktig på att möta deadlines. Jag har lätt att växla mellan socialt/skarpt läge & gillar att omsätta designidéer till verklighet med användaren i fokus.
        <br><br>
        På fritiden kopplar jag gärna av genom att se på film eller att träna (men jag gillar det inte). Jag älskar musik och spelar trummor. Jobbar också med min Youtube-kanal och spelar strategispel med min sambo.`,
        aboutMeComp: `
        <li>Kan översätta kunders önskemål i digitala lösningar</li>
        <li>Grymt öga för grafisk design och layout</li>
        <li>Nördigt intresserad av UX och att skapa bra customer experience</li>
        <li>Pedagogiskt och logiskt – bra på att förklara så du förstår</li>
        <li>Brinner för att göra nytta och att utveckla både människor och produkter</li>
        <li>Intresserad av både webbutveckling och snygg design</li>
        <li>Gillar att använda tekniken till nytta för användare</li>
        <li>Skapar gärna rutiner och manualer för att förenkla och öka kvaliteten</li>`,
        perferedJob: 'Vad vill jag',
        perferedJobDesc: `Min dröm är att bli en grym webbutvecklare med kunskap om allt kring ämnet. Inte bara idag, utan även morgondagens senaste teknik & ramverk. Jag vill inte stanna där heller, utan söker även kunskaper om Backend system, marknad, produkt & funktionsutveckling.
        <br><br>Att bli expert på allt blir svårt, men grundläggande kunskaper inom det mesta & med störst fokus på webbutveckling hoppas jag bygga & designa de coolaste systemen!
        <br><br>Jag har fått jobba på fantastiska företag under mina år & det är svårt att säga vad den perfekta arbetsplatsen är. Så länge jag får utveckla, utvecklas & får chansen att jobba med något som skapar värde eller skillnad för andra så är jag hemma.<br><em>...ett fint kontor är ju också trevligt!</em>`
      }
    }
  }
}

</script>
