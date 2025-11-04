<template>
  <div>
    <h2>Authors</h2>
    <DataTable :value="authors" responsiveLayout="scroll">
      <Column field="id" header="ID" style="width: 80px" />
      <Column field="firstName" header="First name" />
      <Column field="lastName" header="Last name" />
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

    <AuthorDialog v-model:dialogVisible="dialogVisible" v-model:author="selectAuthor" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthorService } from '@/composables/author/authorService';
import AuthorDialog from '@/components/AuthorDialog.vue';
import type { Author } from '@/model/Author';

const { authors, getAllAuthors, deleteAuthor } = useAuthorService();
const dialogVisible = ref(false);
const selectAuthor = ref<Author>({ firstName: '', lastName: '' });

function openNew() {
  selectAuthor.value = { firstName: '', lastName: '' };
  dialogVisible.value = true;
}

function openUpdate(author: Author) {
  selectAuthor.value = { ...author };
  dialogVisible.value = true;
}

function del(id: number) {
  deleteAuthor(id);
}

onMounted(getAllAuthors);
</script>
