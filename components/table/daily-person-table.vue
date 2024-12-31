<template>
  <div class="mx-auto min-h-screen max-w-screen-lg">
    daily person
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
                <button>
                  <ChevronUpIcon class="size-5" />
                  <ChevronDownIcon class="size-5" />
                </button>
              </div>
            </th>
            <th class="border border-gray-300 p-2 text-gray-700">오다은</th>
            <th class="border border-gray-300 p-2 text-gray-700">이유진</th>
            <th class="border border-gray-300 p-2 text-gray-700">양용혁</th>
            <th class="border border-gray-300 p-2 text-gray-700">이유진</th>
            <th class="border border-gray-300 p-2 text-gray-700">양용혁</th>
            <th class="border border-gray-300 p-2 text-gray-700">양용혁</th>
          </tr>
          <tr class="bg-gray-200">
            <th class="border border-gray-300 p-2 text-gray-700">오다은</th>
            <th class="border border-gray-300 p-2 text-gray-700">이유진</th>
            <th class="border border-gray-300 p-2 text-gray-700">양용혁</th>
            <th class="border border-gray-300 p-2 text-gray-700">이유진</th>
            <th class="border border-gray-300 p-2 text-gray-700">양용혁</th>
            <th class="border border-gray-300 p-2 text-gray-700">양용혁</th>
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
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';
import { reactive } from 'vue';

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
