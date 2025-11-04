<template>
  <Dialog
    :header="form?.id ? 'Edit Author' : 'Create Author'"
    v-model:visible="dialogVisible"
    modal
  >
    <div class="flex flex-column gap-3">
      <div class="flex align-items-center gap-3">
        <label class="w-6rem text-left" for="firstname">First name</label>
        <InputText id="firstname" v-model="form.firstName" />
      </div>
      <div class="flex align-items-center gap-3">
        <label class="w-6rem text-left" for="lastname">Last name</label>
        <InputText id="lastname" v-model="form.lastName" />
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
import type { Author } from '@/model/Author';

const { createAuthor, updateAuthor } = useAuthorService();
const dialogVisible = defineModel<boolean>('dialogVisible');
const form = defineModel<Author>('author', { required: true });

async function save() {
  const payload = { firstName: form.value!.firstName, lastName: form.value!.lastName };
  if (form.value?.id) await updateAuthor(form.value.id, payload);
  else await createAuthor(payload);
  dialogVisible.value = false;
}

function hideDialog() {
  dialogVisible.value = false;
}
</script>
