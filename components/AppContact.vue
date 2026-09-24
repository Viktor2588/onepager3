<template>
  <section id="kontakt" class="section section--dark">
    <div class="container contact-layout">
      <div>
        <p class="eyebrow">Kontakt</p>
        <h2>Rufen Sie an oder schreiben Sie uns.</h2>
        <p class="contact-copy">
          Beschreiben Sie kurz, worum es geht. Wir melden uns schnellstmöglich
          und besprechen mit Ihnen die nächsten Schritte.
        </p>

        <div class="contact-cards">
          <article class="contact-card">
            <h3>Direkter Kontakt</h3>
            <p><a :href="company.phoneHref">{{ company.phoneDisplay }}</a></p>
            <p><a :href="`mailto:${company.email}`">{{ company.email }}</a></p>
          </article>

          <article class="contact-card">
            <h3>Standort</h3>
            <p>{{ company.street }}</p>
            <p>{{ company.city }}, {{ company.country }}</p>
            <p>{{ company.hours }}</p>
          </article>

          <article class="contact-card">
            <h3>Wir helfen bei</h3>
            <ul class="plain-list">
              <li>Räumung und Entsorgung</li>
              <li>Sicherstellung von Fahrzeugen</li>
              <li>Verwertung von Fahrzeugen, Maschinen und Elektronik</li>
              <li>Räumung von Immobilien</li>
            </ul>
          </article>
        </div>
      </div>

      <div class="mail-form-card">
        <h3>Anfrage senden</h3>
        <form class="mail-form" @submit.prevent="handleSubmit">
          <label>
            Name *
            <input v-model.trim="form.name" type="text" autocomplete="name">
            <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
          </label>

          <label>
            Unternehmen
            <input v-model.trim="form.company" type="text" autocomplete="organization">
          </label>

          <label>
            E-Mail *
            <input v-model.trim="form.email" type="email" autocomplete="email">
            <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
          </label>

          <label>
            Telefon
            <input v-model.trim="form.phone" type="tel" autocomplete="tel">
          </label>

          <label>
            Worum geht es? *
            <select v-model="form.topic">
              <option disabled value="">Bitte wählen</option>
              <option>Räumung & Entsorgung</option>
              <option>Sicherstellung von Fahrzeugen</option>
              <option>Verwertung</option>
              <option>Immobilie</option>
              <option>Sonstiges</option>
            </select>
            <span v-if="errors.topic" class="error-text">{{ errors.topic }}</span>
          </label>

          <label>
            Nachricht *
            <textarea v-model.trim="form.message" rows="6"></textarea>
            <span v-if="errors.message" class="error-text">{{ errors.message }}</span>
          </label>

          <label class="checkbox-field">
            <input v-model="form.consent" type="checkbox">
            <span>Ich möchte per E-Mail kontaktiert werden und habe die Datenschutzerklärung gelesen. *</span>
          </label>
          <span v-if="errors.consent" class="error-text">{{ errors.consent }}</span>

          <button class="button" type="submit">E-Mail-Anfrage öffnen</button>
          <p class="form-note">
            Beim Absenden wird Ihr lokales E-Mail-Programm mit einer vorbereiteten Anfrage geöffnet.
          </p>
          <p v-if="submitted" class="success-text">
            Ihr E-Mail-Programm wurde geöffnet. Falls nicht, rufen Sie uns bitte an oder schreiben Sie direkt an die E-Mail-Adresse oben.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { company } from '~/data/site'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  topic: string
  message: string
  consent: boolean
}

const form = reactive<FormState>({
  name: '',
  company: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
  consent: false
})

const submitted = ref(false)
const errors = reactive<Record<string, string>>({})

const mailtoLink = computed(() => {
  const lines = [
    `Name: ${form.name}`,
    `Unternehmen: ${form.company || '-'}`,
    `E-Mail: ${form.email}`,
    `Telefon: ${form.phone || '-'}`,
    '',
    form.message
  ]

  const subject = `Anfrage: ${form.topic}`
  const body = lines.join('\n')
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

const validate = () => {
  Object.keys(errors).forEach((key) => delete errors[key])

  if (!form.name) {
    errors.name = 'Bitte geben Sie Ihren Namen an.'
  }

  if (!form.email) {
    errors.email = 'Bitte geben Sie eine E-Mail-Adresse an.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
  }

  if (!form.topic) {
    errors.topic = 'Bitte wählen Sie aus, worum es geht.'
  }

  if (!form.message) {
    errors.message = 'Bitte beschreiben Sie Ihr Anliegen.'
  }

  if (!form.consent) {
    errors.consent = 'Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben.'
  }

  return Object.keys(errors).length === 0
}

const handleSubmit = () => {
  submitted.value = false

  if (!validate()) {
    return
  }

  if (process.client) {
    window.location.href = mailtoLink.value
  }

  submitted.value = true
}
</script>
