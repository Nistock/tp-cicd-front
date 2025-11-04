<template>
  <Dialog :header="form?.id ? 'Edit Book' : 'Create Book'" v-model:visible="dialogVisible" modal>
    <div class="flex flex-column gap-3">
      <div class="flex align-items-center gap-3">
        <label class="w-6rem text-left">Title</label>
        <InputText v-model="form.title" />
      </div>
      <div class="flex align-items-center gap-3">
        <label class="w-6rem text-left">Publish Year</label>
        <InputText v-model="form.publishYear" type="number" />
      </div>
      <div class="flex align-items-center gap-3">
        <label class="w-6rem text-left">ISBN</label>
        <InputText v-model="form.isbn" />
      </div>
      <div class="flex align-items-center gap-3">
        <label class="w-6rem text-left">Author</label>
        <Select
          :options="authors"
          :optionLabel="(author) => author.firstName + ' ' + author.lastName"
          optionValue="id"
          v-model="form.author.id"
        />
      </div>
    </div>
    <template #footer>
      <PButton label="Cancel" class="p-button-text" @click="hideDialog" />
      <PButton label="Save" @click="save" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { useAuthorService } from '@/composables/author/authorService';
import { useBookService } from '@/composables/book/bookService';
import type { Book } from '@/model/Book';
const { createBook, updateBook } = useBookService();
const { authors } = useAuthorService();
const dialogVisible = defineModel<boolean>('dialogVisible');
const form = defineModel<Book>('book', { required: true });

async function save() {
  const payload = {
    title: form.value?.title,
    publishYear: form.value?.publishYear,
    isbn: form.value?.isbn,
    authorId: form.value.author.id!,
  };
  if (form.value?.id) await updateBook(form.value.id, payload);
  else await createBook(payload);
  dialogVisible.value = false;
}

function hideDialog() {
  dialogVisible.value = false;
}
</script>
