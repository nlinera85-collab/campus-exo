export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-3
  explanation: string;
}

export interface VisualAid {
  type: 'diagram' | 'table' | 'compare';
  title: string;
  headers?: string[];
  rows?: string[][]; // For grid tables
  nodes?: { label: string; desc: string; category?: string }[]; // For tree nodes or flowcharts
  labels?: { title: string; left: string; right: string }[]; // For comparisons
}

export interface LearningModule {
  id: number;
  title: string;
  subtitle: string;
  summary: {
    title: string;
    content: string[];
  }[];
  examples: {
    company: string;
    description: string;
    metric?: string;
  }[];
  visualAid: VisualAid;
  quiz: Question[];
}

export interface GlossaryItem {
  id: string;
  term: string;
  category: 'SCALE' | 'IDEAS' | 'Metodología' | 'General';
  definition: string;
  example: string;
}

export interface UserProgressType {
  completedModules: number[]; // Array of completed module IDs
  quizScores: { [moduleId: number]: number }; // ID -> Score (max 5)
  points: number; // Cumulative gamified points
  unlockedBadges: string[];
  gamesCompleted: {
    matching: boolean;
    dragDrop: boolean;
    fillBlank: boolean;
    timed: boolean;
  };
}
