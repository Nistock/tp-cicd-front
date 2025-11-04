<template>
  <div>
    <h2>Book Copies</h2>
    <DataTable :value="bookCopys" responsiveLayout="scroll">
      <Column field="id" header="ID" style="width: 80px" />
      <Column field="book.title" header="Book" />
      <Column field="available" header="Available" body="availableTemplate">
        <template #body="slotProps">
          <i
            :class="{
              'pi pi-check-circle text-green-500': slotProps.data.available,
              'pi pi-times-circle text-red-500': !slotProps.data.available,
            }"
          ></i>
        </template>
      </Column>
      <Column field="state" header="State" />
      <Column style="width: 150px">
        <template #header>
          <PButton icon="pi pi-plus" class="p-button-text p-mr-2" @click="openNew()" />
        </template>
        <template #body="slotProps">
          <PButton
            icon="pi pi-pencil"
            class="p-button-text p-mr-2"
            @click="openUpdate(slotProps.data)"
          />
          <PButton
            icon="pi pi-trash"
            class="p-button-text p-mr-2"
            @click="del(slotProps.data.id)"
          />
        </template>
      </Column>
    </DataTable>
  </div>

  <BookCopyDialog v-model:dialog-visible="dialogVisible" v-model:book-copy="form"></BookCopyDialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useBookCopyService } from '@/composables/bookcopy/bookCopyService';
import { useBookService } from '@/composables/book/bookService';
import type { BookCopy } from '@/model/BookCopy';
import BookCopyDialog from '@/components/BookCopyDialog.vue';

const { bookCopys, getAllBookCopies, deleteBookCopy } = useBookCopyService();
const { books, getAllBooks } = useBookService();

const dialogVisible = ref(false);
const form = ref<BookCopy>({
  available: true,
  state: '',
  book: { title: '', publishYear: '', isbn: '', author: { firstName: '', lastName: '' } },
});

function openNew() {
  form.value = {
    available: true,
    state: '',
    book: { title: '', publishYear: '', isbn: '', author: { firstName: '', lastName: '' } },
  };
  dialogVisible.value = true;
}

function openUpdate(bookCopy: BookCopy) {
  form.value = { ...bookCopy };
  dialogVisible.value = true;
}

function del(id: number) {
  deleteBookCopy(id);
}

onMounted(() => {
  getAllBookCopies();
  if (books.value.length === 0) {
    getAllBooks();
  }
});
</script>
