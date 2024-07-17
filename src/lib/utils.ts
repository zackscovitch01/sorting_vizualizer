import { generateBubleSortAnimationArray } from "@/algorithms/bubbleSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";
import { generateSelectionSortAnimationArray } from "@/algorithms/selectionSort";
import { generateInsertionSortAnimationArray } from "@/algorithms/insertionSort";
import { generateQuickSortAnimationArray } from "@/algorithms/quickSort";
import { generateMergeSortAnimationArray } from "@/algorithms/mergeSort";

export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export const generateRandomNumberFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const algorithmOptions = [
  { value: "Bubble", label: "Bubble Sort" },
  { value: "Insertion", label: "Insertion Sort" },
  { value: "Selection", label: "Selection Sort" },
  { value: "Merge", label: "Merge Sort" },
  { value: "Quick", label: "Quick Sort" },
];

export const generateAnimationArray = (
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) => {
  switch (selectedAlgorithm) {
    case "Bubble":
      generateBubleSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "Selection":
      generateSelectionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "Insertion":
      generateInsertionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "Quick":
      generateQuickSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "Merge":
      generateMergeSortAnimationArray(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
};

export const sortingAlgorithmsData = {
  Bubble: {
    title: "Bubble Sort",
    description:
      "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  Insertion: {
    title: "Insertion Sort",
    description:
      "Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements. This process continues until all elements have been inserted into their proper place, resulting in a sorted list.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  Selection: {
    title: "Selection Sort",
    description:
      "Selection sort works by repeatedly finding the minimum element from the unsorted portion of the list and swapping it with the element at the current position. This process is continued for each position in the list, moving the boundary of the sorted and unsorted portions one element forward each time until the entire list is sorted.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n²)",
  },
  Merge: {
    title: "Merge Sort",
    description:
      "Merge sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and then repeatedly merges these sublists to produce new sorted sublists until there is only one sublist remaining, which is the sorted list. This algorithm uses a divide-and-conquer approach, splitting the list in half recursively and merging the sorted halves back together.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  Quick: {
    title: "Quick Sort",
    description:
      "Quick sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the sorted array.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
};
