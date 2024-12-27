<template>
  <header
    class="sticky h-14 border-b border-gray-200 px-4 flex justify-between items-center"
  >
    <div class="flex gap-4 items-center">
      <NuxtLink to="/">Kroma</NuxtLink>
      <nav class="flex gap-2">
        <NavDropMenu v-model="selectedTeamValue" :options="teamOptions" />
        <NavDropMenu
          v-model="selectedWorkTypeValue"
          :options="workTypeOptions"
        />
        <NavDropMenu
          v-model="selectedTimePeriodValue"
          :options="timePeriodOptions"
        />
      </nav>
    </div>
    <ProfileBox />
  </header>
</template>

<script setup lang="ts">
const selectedTeamValue = ref<string>('option1');
const teamOptions = [
  { value: 'option1', label: '경영기획실' },
  { value: 'option2', label: '1팀' },
  { value: 'option3', label: '2팀' },
  { value: 'option4', label: '3팀' },
  { value: 'option5', label: '에디팀' },
];

const selectedWorkTypeValue = ref<string>('project');
const workTypeOptions = [
  { value: 'project', label: '프로젝트 별' },
  { value: 'person', label: '개인 별' },
];

const selectedTimePeriodValue = ref<string>('day');
const timePeriodOptions = [
  { value: 'day', label: '일간' },
  { value: 'week', label: '주간' },
];
</script>

<style scoped></style>
