<template>
  <div class="mx-auto min-h-screen max-w-screen-lg">
    <div
      class="grow overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md"
    >
      <table class="w-full table-auto border-collapse border-hidden">
        <thead>
          <tr class="bg-gray-200">
            <th
              rowspan="2"
              class="w-32 border border-gray-300 p-2 text-gray-700"
            >
              <div class="flex items-center justify-center gap-2">
                <span>날짜</span>
                <button @click="moveDates(-20)">
                  <ChevronUpIcon class="size-5" />
                </button>
                <button @click="moveDates(20)">
                  <ChevronDownIcon class="size-5" />
                </button>
              </div>
            </th>
            <th
              v-for="(project, index) in projects"
              :key="index"
              :colspan="project.subProjects ? project.subProjects.length : 1"
              class="border border-gray-300 p-2 text-gray-700"
            >
              {{ project.project }}
            </th>
          </tr>
          <tr class="bg-gray-200">
            <th
              v-for="(subProject, index) in flattenedProjects"
              :key="index"
              class="border border-gray-300 p-2 text-gray-700"
            >
              <div class="flex flex-col items-center gap-1">
                <span>{{ subProject.name }}</span>
                <div class="flex gap-1">
                  <NameLable
                    v-for="member in subProject.members"
                    :key="member"
                    :name="member"
                  />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(date, rowIndex) in visibleDates"
            :key="rowIndex"
            class="hover:bg-gray-100"
          >
            <th class="border border-gray-300 p-2 text-center font-medium">
              {{ formatDate(date) }}
            </th>
            <td
              v-for="(task, colIndex) in getTasksForDate(date)"
              :key="colIndex"
              class="border border-gray-300 p-2 text-center"
            >
              {{ task ? task.name : '' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';
import { computed, ref } from 'vue';

// 데이터 타입 정의
type Task = {
  date_start: string;
  date_end: string | null;
  name: string;
  type: string;
};

type SubProject = {
  name: string;
  members: string[];
  tasks: Task[];
};

type Project = {
  project: string;
  subProjects?: SubProject[];
};

// 백엔드 데이터 (임시 데이터)
const backendData: { projects: Project[] } = {
  projects: [
    {
      project: '사랑의 열매',
      subProjects: [
        {
          name: '열매가알고잡다',
          members: ['이유진', '양용혁'],
          tasks: [
            {
              date_start: '2024-01-01',
              date_end: '2024-01-05',
              name: '광고주 미팅',
              type: 'meeting',
            },
          ],
        },
        {
          name: '열매니저',
          members: ['이승환'],
          tasks: [],
        },
      ],
    },
    {
      project: 'NH육튜브',
      subProjects: [
        {
          name: '머슴아 말왕',
          members: ['김수빈'],
          tasks: [
            {
              date_start: '2024-01-02',
              date_end: null,
              name: '스토리보드 작성',
              type: 'task',
            },
          ],
        },
      ],
    },
  ],
};

// 날짜 관리
const today = new Date();
console.log(today);

const startDate = ref(new Date());
const visibleDates = computed(() => {
  const dates = [];
  for (let i = 0; i < 20; i++) {
    const date = new Date(startDate.value);
    date.setDate(date.getDate() + i);
    dates.push(date);
  }
  return dates;
});

const moveDates = (offset: number) => {
  startDate.value.setDate(startDate.value.getDate() + offset);
};

const formatDate = (date: Date) => {
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayName = dayNames[date.getDay()];
  return `${month}월 ${day}일(${dayName})`;
};

// 프로젝트 및 서브프로젝트
const projects = backendData.projects;
const flattenedProjects = computed<SubProject[]>(() =>
  projects.flatMap((project) =>
    project.subProjects
      ? project.subProjects.map((sub) => ({ ...sub, project: project.project }))
      : [
          {
            project: project.project,
            name: project.project,
            members: [],
            tasks: [],
          },
        ],
  ),
);

// 특정 날짜에 해당하는 태스크 가져오기
const getTasksForDate = (date: Date): (Task | undefined)[] => {
  const dateString = date.toISOString().split('T')[0];
  return flattenedProjects.value.map((subProject) =>
    subProject.tasks.find(
      (task) =>
        task.date_start <= dateString &&
        (!task.date_end || task.date_end >= dateString),
    ),
  );
};
</script>
