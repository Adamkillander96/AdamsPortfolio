<template>

<b-container fluid id="about-me">
  <b-row class="position-relative wired-bg">
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
      <picture><img class="d-block mx-auto rounded-circle" src="https://adamkillander.se/adam-img.jpg"></picture>
    </b-col>
    <b-col lg="6" class="p-4">
      <h2 class="adam-turkos-text">{{ $t('aboutMeTitle') }} <i class="fab fa-sistrix"></i></h2>
      <span>{{ $t('aboutMeDescr') }}</span>
      <ul class="p-4" v-html="$t('aboutMeComp')">
      </ul>
    </b-col>
  </b-row>
</b-container>

</template>

<script>

export default {
  name: 'about-me',
  i18n: {
    messages: {
      en: { 
        aboutMeTitle: 'With the user in focus',
        aboutMeDescr: 'For many years I have been working with graphic design, frontend development & creating user-friendly products in a variety of ways. Below I list the skills & competences I have with me as a result of my work:',
        currentMe: 'My work today',
        currentMeDesc: `I work at Onmedia's SEO & development department, on the Design Unit. Primarily responsible for design, function development & SEO of our customers websites. For example, expanding an existing function or creating a new one, optimize speed & loading times. I also create varying reports & wireframes.
        <br><br>
        In our larger projects, we work in teams where I am the link between technology & the customer. I also conduct a few smaller projects where I handle everything from analysis, frontend development & processing of results & statistics.`,
        whoAmI: 'Who am I',
        whoAmIDesc: `I am passionate about frontend development, love new features & nice code. I am careful & structured with detail focus but also know when something is "good enough" & is good at meeting deadlines. I have easy to switch between social & sharp mode & like to transform design ideas into reality with the user in focus
        <br><br>
        In my spare time, I would like to relax by watching movies, have a "fika" or exercising. I also love music & play drums.`,
        aboutMeComp: `
        <li>Can translate customer requests into digital solutions</li>
        <li>Awesome eye for graphic design & layout</li>
        <li>Interested in UX & creating good customer experience</li>
        <li>Burns to benefit & develop both people & products</li>
        <li>Interested in both frontend development & stylish design</li>
        <li>Like using the technology for utility to users</li>`,
        perferedJob: 'What do I want',
        perferedJobDesc: `My dream is to become a great frontend developer with knowledge of everything about the subject. Not only today, but also tomorrow's latest technology & frameworks. I do not want to stay there either, I also seek knowledge of Backend system, market, product & function development.
        <br><br>Becoming an expert in everything will be difficult, but basic knowledge & with a great focus on frontend development, I hope to build & design the coolest systems!
        <br><br>I've been working on amazing companies in my years & it's hard to say what the perfect workplace is. As long as I develop myself, develop products & get the chance to work with something that creates value or difference for others, I'm home.<br><em>...a nice office is also nice!</em>`
        
        },
      se: { 
        aboutMeTitle: 'Med användaren i fokus',
        aboutMeDescr: 'Jag har under många år jobbat med grafisk design, frontend utveckling & att skapa användarvänliga produkter på en mängd olika sätt. Nedan listar jag de kompetenser & färdigheter jag har med mig som ett resultat av mitt arbete:',
        currentMe: 'Mina arbetsuppgifter idag',
        currentMeDesc: `Jag jobbar på Onmedia's SEO & utvecklingsavdelning, på enheten för Design. I första hand ansvarar jag för design, funktionsutveckling & SEO på våra kunders hemsidor. Det kan t.ex. innebära att vidareutvecka existerande funktioner eller bygga helt nya, optimisera hastigheten och laddningstider. Jag skriver/bygger även en mäng av olika typer av rapporter och wireframes.
        <br><br>
        I våra större projekt arbetar vi i team där jag är länken mellan tekniken & kunden. Jag leder också några mindre projekt där jag sköter allt från analys, frontend utveckling & bearbetning av resultat & statistik.`,
        whoAmI: 'Vem är jag',
        whoAmIDesc: `Jag brinner för frontend utveckling, älskar nya funktioner & snygg kod. Noggrannhet & struktur med detaljfokus är min filosofi, men jag vet också när något är ”good enough” & är duktig på att möta deadlines. Jag har lätt att växla mellan socialt/skarpt läge & gillar att omsätta designidéer till verklighet med användaren i fokus.
        <br><br>
        På fritiden kopplar jag gärna av genom att se på film, fika eller att träna. Jag älskar även musik & att spela trummor.`,
        aboutMeComp: `
        <li>Kan översätta kunders önskemål i digitala lösningar</li>
        <li>Grymt öga för grafisk design & layout</li>
        <li>Intresserad av UX & att skapa bra customer experience</li>
        <li>Brinner för att göra nytta & att utveckla både människor & produkter</li>
        <li>Intresserad av både webbutveckling & snygg design</li>
        <li>Gillar att använda tekniken till nytta för användare</li>`,
        perferedJob: 'Vad vill jag',
        perferedJobDesc: `Min dröm är att bli en grym frontend utvecklare med kunskap om allt kring ämnet. Inte bara idag, utan även morgondagens senaste teknik & ramverk. Jag vill inte stanna där heller, utan söker även kunskaper om Backend system, marknad, produkt & funktionsutveckling.
        <br><br>Att bli expert på allt blir svårt, men grundläggande kunskaper inom det mesta & med störst fokus på frontend utveckling hoppas jag bygga & designa de coolaste systemen!
        <br><br>Jag har fått jobba på fantastiska företag under mina år & det är svårt att säga vad den perfekta arbetsplatsen är. Så länge jag får utveckla, utvecklas & får chansen att jobba med något som skapar värde eller skillnad för andra så är jag hemma.<br><em>...ett fint kontor är ju också trevligt!</em>`
      }
    }
  }
}

</script>
