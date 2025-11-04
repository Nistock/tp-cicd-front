<template>
  <div>
    <h2>Books</h2>
    <DataTable :value="books" responsiveLayout="scroll">
      <Column field="id" header="ID" style="width: 80px" />
      <Column field="title" header="Title" />
      <Column field="publishYear" header="Year" />
      <Column field="isbn" header="ISBN" />
      <Column header="Author">
        <template #body="slotProps">
          {{ slotProps.data.author.firstName }} {{ slotProps.data.author.lastName }}
        </template>
      </Column>
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

    <BookDialog v-model:dialog-visible="dialogVisible" v-model:book="form"></BookDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthorService } from '@/composables/author/authorService';
import { useBookService } from '@/composables/book/bookService';
import type { Book } from '@/model/Book';
import BookDialog from '@/components/BookDialog.vue';

const { books, getAllBooks, deleteBook } = useBookService();
const { authors, getAllAuthors } = useAuthorService();

const dialogVisible = ref(false);
const form = ref<Book>({
  title: '',
  publishYear: '',
  isbn: '',
  author: { firstName: '', lastName: '' },
});

function openNew() {
  form.value = { title: '', publishYear: '', isbn: '', author: { firstName: '', lastName: '' } };
  dialogVisible.value = true;
}

function openUpdate(book: Book) {
  form.value = { ...book };
  dialogVisible.value = true;
}

function del(id: number) {
  deleteBook(id);
}

onMounted(() => {
  getAllBooks();
  if (authors.value.length === 0) {
    getAllAuthors();
  }
});
</script>
