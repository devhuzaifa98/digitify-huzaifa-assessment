import { Slide } from "./types";
import ThumbsUp from "../assets/thumbs-up.svg";
import ThumbsDown from "../assets/thumbs-down.svg";
import NeutralFace from "../assets/neutral-face.svg";

export const Slides: Slide[] = [
  {
    title: "How are you feeling today?",
    options: [
      {
        label: "Bad",
        icon: ThumbsDown,
      },
      {
        label: "Neutral",
        icon: NeutralFace,
      },
    ],
  },
  {
    title: "How was your week overall?",
    options: [
      {
        label: "Good",
        icon: ThumbsUp,
      },
      {
        label: "Good",
        icon: ThumbsUp,
      },
      {
        label: "Good",
        icon: ThumbsUp,
      },
      {
        label: "Good",
        icon: ThumbsUp,
      },
      {
        label: "Bad",
        icon: ThumbsDown,
      },
      {
        label: "Neutral",
        icon: NeutralFace,
      },
    ],
  },
  {
    title: "How was your day?",
    options: [
      {
        label: "Good",
        icon: ThumbsUp,
      },
      {
        label: "Bad",
        icon: ThumbsDown,
      },
      {
        label: "Neutral",
        icon: NeutralFace,
      },
    ],
  },
  {
    title: "How was your month?",
    options: [
      {
        label: "Good",
        icon: ThumbsUp,
      },
      {
        label: "Bad",
        icon: ThumbsDown,
      },
      {
        label: "Neutral",
        icon: NeutralFace,
      },
    ],
  },
  {
    title: "How was your year?",
    options: [
      {
        label: "Good",
        icon: ThumbsUp,
      },
      {
        label: "Bad",
        icon: ThumbsDown,
      },
      {
        label: "Neutral",
        icon: NeutralFace,
      },
    ],
  },
];
