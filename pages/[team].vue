<template>
  <div class="min-h-screen max-w-screen-lg mx-auto">
    <div class="flex items-start">
      <div class="pb-10">
        기간
        <el-date-picker
          v-model="date"
          type="daterange"
          placeholder="Pick a date"
        />
      </div>
      <div
        class="bg-white grow shadow-md rounded-lg border border-gray-300 overflow-hidden"
      >
        <table class="table-auto w-full border-collapse border-hidden">
          <thead>
            <tr class="bg-gray-200">
              <th rowspan="2" class="border border-gray-300 p-2 text-gray-700">
                날짜
                <button>
                  <ChevronUpIcon class="size-5" />
                  <ChevronDownIcon class="size-5" />
                </button>
              </th>
              <th colspan="3" class="border border-gray-300 p-2 text-gray-700">
                사랑의 열매
              </th>
              <th colspan="1" class="border border-gray-300 p-2 text-gray-700">
                NH육튜브
              </th>
              <th colspan="1" class="border border-gray-300 p-2 text-gray-700">
                정관장
              </th>
              <th colspan="1" class="border border-gray-300 p-2 text-gray-700">
                배달의 민족
              </th>
            </tr>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 p-2 text-gray-700">
                열매가알고잡다
              </th>
              <th class="border border-gray-300 p-2 text-gray-700">열매니저</th>
              <th class="border border-gray-300 p-2 text-gray-700">
                웹드라마 미생
              </th>
              <th class="border border-gray-300 p-2 text-gray-700">
                머슴아 말왕
              </th>
              <th class="border border-gray-300 p-2 text-gray-700">
                황희찬의 놀러와
              </th>
              <th class="border border-gray-300 p-2 text-gray-700">
                송년회 영상
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, rowIndex) in Array(20)"
              :key="rowIndex"
              class="hover:bg-gray-100"
            >
              <th class="border border-gray-300 p-2 text-center font-medium">
                12월 14일(수)
              </th>
              <td
                v-for="(cell, cellIndex) in Array(6)"
                :key="cellIndex"
                class="border border-gray-300 p-2 text-center"
                :contenteditable="cellStates[rowIndex][cellIndex]"
                @dblclick="enableEdit(rowIndex, cellIndex, $event)"
                @blur="saveData(rowIndex, cellIndex, $event)"
              >
                sss
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button><DocumentPlusIcon class="size-10 text-gray-500" /></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  DocumentPlusIcon,
} from '@heroicons/vue/24/outline';

const date = ref('');

// 셀의 편집 가능 상태를 관리하는 2D 배열
const cellStates = reactive<boolean[][]>(
  Array.from({ length: 20 }, () => Array.from({ length: 6 }, () => false)),
);

// 셀의 데이터를 저장하는 2D 배열
const cellData = reactive<string[][]>(
  Array.from({ length: 20 }, () => Array.from({ length: 6 }, () => 'sss')),
);

// 더블 클릭 시 셀 편집 활성화
const enableEdit = (rowIndex: number, cellIndex: number, event: Event) => {
  cellStates[rowIndex][cellIndex] = true;
  const target = event.target as HTMLElement;
  setTimeout(() => {
    target.focus();
  }, 0); // focus를 즉시 적용
};

// 포커스를 잃으면 셀 편집 비활성화하고 데이터 저장
const saveData = (rowIndex: number, cellIndex: number, event: Event) => {
  const target = event.target as HTMLElement;
  cellData[rowIndex][cellIndex] = target.innerText;
  console.log(`저장된 데이터: ${cellData[rowIndex][cellIndex]}`);
  cellStates[rowIndex][cellIndex] = false;
};
</script>
