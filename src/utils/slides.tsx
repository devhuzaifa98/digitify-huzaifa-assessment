import { Slide } from "./types";
import ThumbsUp from "../assets/thumbs-up.svg";
import ThumbsDown from "../assets/thumbs-down.svg";
import NeutralFace from "../assets/neutral-face.svg";

export const Slides: Slide[] = [
  {
    title: "How are you feeling today?",
    key: "feeling_today",
    options: [
      {
        label: "Bad",
        key: "bad",
        icon: ThumbsDown,
      },
      {
        label: "Neutral",
        key: "neutral",
        icon: NeutralFace,
      },
    ],
  },
  {
    title: "How was your week overall?",
    key: "week_overview",
    options: [
      {
        label: "Good",
        key: "good",
        icon: ThumbsUp,
      },
      {
        label: "Bad",
        key: "bad",
        icon: ThumbsDown,
      },
      {
        label: "Neutral",
        key: "neutral",
        icon: NeutralFace,
      },
    ],
  },
  {
    title: "What are your thoughts about this assessment?",
    key: "assessment_thoughts",
    options: [
      {
        label: "Good",
        key: "good",
        icon: ThumbsUp,
      },
      {
        label: "Bad",
        key: "bad",
        icon: ThumbsDown,
      },
      {
        label: "Neutral",
        key: "neutral",
        icon: NeutralFace,
      },
    ],
  },
];
