<template>
  <div>
    <Form @onSubmit="handleSubmit" />
    <List @onRemove="handleRemove" :items="notes" />
  </div>
</template>
<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
export default {
  components: {
    Form,
    List
  },
  data() {
    return {
      notes: []
    }
  },
  methods: {
    handleSubmit({ note, tags }) {
      const newArr = tags.filter(el => el.isActive)
      const newNote = {
        title: note,
        tags: newArr
      }
      console.log(note, tags)
      this.notes.push(newNote)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    },
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    }
  },
  mounted() {
    this.getNotes()
  },
  watch: {
    notes: {
      handler(updateLst) {
        localStorage.setItem('notes', JSON.stringify(updateLst))
      },
      deep: true
    }
  }
}
</script>
