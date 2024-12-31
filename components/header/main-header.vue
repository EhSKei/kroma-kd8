<template>
  <header
    class="sticky flex h-14 items-center justify-between border-b border-gray-200 px-4"
  >
    <div class="flex items-center gap-4">
      <NuxtLink to="/">Kroma</NuxtLink>
      <nav class="flex gap-2">
        <NavDropMenu v-model="selectedTeam" :options="teamOptions" />
        <NavDropMenu v-model="selectedType" :options="typeOptions" />
        <NavDropMenu v-model="selectedPeriod" :options="periodOptions" />
      </nav>
    </div>
    <ProfileBox />
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Vue Router 설정
const router = useRouter();
const route = useRoute();

// 팀 맵핑
const teamPathMap: Record<string, string> = {
  management: '경영기획팀',
  team1: '1팀',
  team2: '2팀',
  team3: '3팀',
  'design-edit': '에디팀',
};

// 드롭다운 옵션
const teamOptions = Object.entries(teamPathMap).map(([value, label]) => ({
  value,
  label,
}));

const typeOptions = [
  { value: 'project', label: '프로젝트 별' },
  { value: 'person', label: '개인 별' },
];

const periodOptions = [
  { value: 'daily', label: '일간' },
  { value: 'weekly', label: '주간' },
];

// 초기값 설정
const selectedTeam = ref<string>((route.params.team as string) || 'management');
const selectedType = ref<string>((route.query.type as string) || 'project');
const selectedPeriod = ref<string>((route.query.period as string) || 'daily');

// URL 변경 감지 및 동기화
// URL 변경 감지 및 동기화
watch(
  () => route.params.team,
  (newTeam) => {
    // newTeam이 배열인 경우 처리
    const team = Array.isArray(newTeam) ? newTeam[0] : newTeam;
    if (team && team !== selectedTeam.value) {
      selectedTeam.value = team;
    }
  },
);

// 드롭다운 값 변경 시 URL 업데이트
watch(
  [selectedTeam, selectedType, selectedPeriod],
  ([newTeam, newType, newPeriod]) => {
    router.push({
      path: `/${newTeam}`,
      query: { type: newType, period: newPeriod },
    });
  },
);
</script>
