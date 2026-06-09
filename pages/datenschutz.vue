<template>
  <main id="main-content" class="legal-page">
    <div class="container legal-card">
      <p class="eyebrow">Rechtliches</p>
      <h1>Datenschutzhinweise</h1>

      <section>
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Ansprechpartner fuer diese Website ist {{ company.contactPerson }}, {{ company.street }}, {{ company.city }},
          {{ company.country }}.<br>
          E-Mail: <a :href="`mailto:${company.privacyEmail}`">{{ company.privacyEmail }}</a><br>
          Telefon: <a :href="company.phoneHref">{{ company.phoneDisplay }}</a>
        </p>
      </section>

      <section>
        <h2>2. Zugriffsdaten</h2>
        <p>
          Beim Besuch der Website koennen durch den Hosting-Anbieter technisch erforderliche
          Server-Logdaten verarbeitet werden, etwa IP-Adresse, Browserinformationen, Datum,
          Uhrzeit und angeforderte Dateien. Dies dient der sicheren Bereitstellung der Website.
        </p>
      </section>

      <section>
        <h2>3. Kontaktaufnahme</h2>
        <p>
          Das Kontaktformular dieser Website sendet keine Daten an einen Website-Server.
          Es bereitet Ihre Anfrage fuer Ihr lokales E-Mail-Programm vor. Erst wenn Sie die
          E-Mail dort absenden, werden die von Ihnen eingegebenen Daten an den Empfaenger uebermittelt.
        </p>
        <p>
          Wenn Sie direkt per E-Mail oder Telefon Kontakt aufnehmen, verarbeiten wir Ihre
          Angaben ausschliesslich zur Bearbeitung Ihres Anliegens.
        </p>
      </section>

      <section>
        <h2>4. Cookies und Tracking</h2>
        <p>
          In dieser Version werden auf der Website keine Analyse-, Marketing- oder Newsletter-Tools eingebunden.
          Es findet kein separates Tracking zu Werbezwecken statt.
        </p>
      </section>

      <section>
        <h2>5. Ihre Rechte</h2>
        <p>
          Sie haben nach Massgabe der gesetzlichen Vorschriften insbesondere das Recht auf
          Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung sowie Widerspruch
          gegen die Verarbeitung Ihrer personenbezogenen Daten.
        </p>
      </section>

      <section>
        <h2>6. Aktualisierung</h2>
        <p>
          Diese Hinweise wurden fuer die neue statische Website-Fassung ueberarbeitet. Falls
          spaeter weitere Dienste, Formulare oder Tracking-Werkzeuge hinzukommen, muessen die
          Datenschutzhinweise entsprechend aktualisiert werden.
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { company } from '~/data/site'

useHead({
  title: 'Datenschutz - Induva UG',
  meta: [
    {
      name: 'description',
      content: 'Datenschutzhinweise fuer die Induva UG Website.'
    }
  ]
})
</script>
