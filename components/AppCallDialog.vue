<template>
  <dialog ref="callDialog" class="call-dialog" @click.self="callDialog?.close()">
    <button class="call-dialog__close" type="button" aria-label="Schließen" @click="callDialog?.close()">
      ×
    </button>
    <p class="eyebrow">Direkt anrufen</p>
    <h2>Wir sind für Sie da</h2>
    <a class="call-dialog__number" :href="company.phoneHref">{{ company.phoneDisplay }}</a>
    <div class="call-dialog__actions">
      <a class="button" :href="company.phoneHref">Jetzt anrufen</a>
      <button class="button button--ghost" type="button" @click="copyNumber">
        {{ copied ? 'Kopiert ✓' : 'Nummer kopieren' }}
      </button>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { company } from '~/data/site'

const callDialog = ref<HTMLDialogElement>()
const copied = ref(false)

// Smartphones öffnen tel: direkt im Dialer; nur am Desktop eigenen Dialog statt Browser-Abfrage zeigen
const onClick = (event: MouseEvent) => {
  const link = (event.target as Element).closest('a[href^="tel:"]')
  if (!link || callDialog.value?.contains(link) || window.matchMedia('(pointer: coarse)').matches) return
  event.preventDefault()
  copied.value = false
  callDialog.value?.showModal()
}

const copyNumber = async () => {
  await navigator.clipboard.writeText(company.phoneDisplay)
  copied.value = true
}

onMounted(() => document.addEventListener('click', onClick))
onUnmounted(() => document.removeEventListener('click', onClick))
</script>
