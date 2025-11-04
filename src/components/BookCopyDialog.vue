<template>
  <Dialog
    :header="form?.id ? 'Edit Book Copy' : 'Create Book Copy'"
    v-model:visible="dialogVisible"
    modal
  >
    <div class="flex flex-column gap-3">
      <div class="flex align-items-center gap-3">
        <label class="w-6rem text-left">Book</label>
        <Select :options="books" optionLabel="title" optionValue="id" v-model="form.book.id" />
      </div>
      <div class="flex align-items-center gap-3">
        <label class="w-6rem text-left">Available</label>
        <ToggleSwitch v-model="form.available" />
      </div>
      <div class="flex align-items-center gap-3">
        <label class="w-6rem text-left">State</label>
        <InputText v-model="form.state" />
      </div>
    </div>
    <template #footer>
      <PButton label="Cancel" class="p-button-text" @click="hideDialog" />
      <PButton label="Save" @click="save" />
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { useBookService } from '@/composables/book/bookService';
import { useBookCopyService } from '@/composables/bookcopy/bookCopyService';
import type { BookCopy } from '@/model/BookCopy';

const { books } = useBookService();
const { createBookCopy, updateBookCopy } = useBookCopyService();
const dialogVisible = defineModel<boolean>('dialogVisible');
const form = defineModel<BookCopy>('bookCopy', { required: true });

async function save() {
  const payload = {
    bookId: form.value.book.id!,
    available: form.value.available,
    state: form.value.state,
  };
  if (form.value.id) await updateBookCopy(form.value.id, payload);
  else await createBookCopy(payload);
  dialogVisible.value = false;
}

function hideDialog() {
  dialogVisible.value = false;
}
</script>
