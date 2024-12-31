<template>
  <div>
    <h1 class="text-3xl">{{ teamLabel }}</h1>
    <component :is="currentTable" />
  </div>
</template>

<script setup lang="ts">
import DailyPersonTable from '@/components/table/daily-person-table.vue';
import DailyProjectTable from '@/components/table/daily-project-table.vue';
import WeeklyPersonTable from '@/components/table/weekly-person-table.vue';
import WeeklyProjectTable from '@/components/table/weekly-project-table.vue';

const route = useRoute();
const router = useRouter();

const teamPathMap: Record<string, string> = {
  management: '경영기획팀',
  team1: '1팀',
  team2: '2팀',
  team3: '3팀',
  'design-edit': '에디팀',
};

// 현재 경로의 팀 이름 가져오기
const teamLabel = computed(() => {
  const team = route.params.team as string; // URL 파라미터에서 team 값 가져오기
  return teamPathMap[team] || '경영기획팀'; // 매핑된 이름 반환, 없으면 기본값
});

// tableMap의 키를 타입으로 정의
const tableMap = {
  'daily-person': DailyPersonTable,
  'daily-project': DailyProjectTable,
  'weekly-person': WeeklyPersonTable,
  'weekly-project': WeeklyProjectTable,
} as const; // 객체를 읽기 전용으로 만듭니다.

type TableKey = keyof typeof tableMap; // 'daily-person' | 'daily-project' | 'weekly-person' | 'weekly-project'

// 기본값 설정
const defaultType = 'project';
const defaultPeriod = 'daily';

const currentTable = computed(() => {
  const type = route.query.type || defaultType;
  const period = route.query.period || defaultPeriod;
  const key = `${period}-${type}` as TableKey; // key를 TableKey 타입으로 변환
  return tableMap[key] || DailyProjectTable; // 타입 안전하게 tableMap에서 가져옴
});

// 쿼리 파라미터가 없을 때 기본값으로 리다이렉트
onMounted(() => {
  const { type, period } = route.query;
  if (!type || !period) {
    router.replace({
      path: route.path,
      query: { type: defaultType, period: defaultPeriod },
    });
  }
});
</script>
