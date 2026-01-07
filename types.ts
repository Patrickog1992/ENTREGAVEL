import React from 'react';

export enum StepType {
  WELCOME = 'WELCOME',
  PREPARATION = 'PREPARATION',
  RITUAL = 'RITUAL',
  PRAYER = 'PRAYER',
  ACTIVATION = 'ACTIVATION',
  POST_RITUAL = 'POST_RITUAL',
  CLOSING = 'CLOSING',
  ORACLE = 'ORACLE'
}

export enum RitualIntention {
  NEW_LOVE = 'NEW_LOVE',
  RETURN_LOVE = 'RETURN_LOVE'
}

export interface RitualStepData {
  id: StepType;
  title: string;
  content: React.ReactNode;
  buttonText: string;
}

export interface DayConfig {
  day: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  element: string; // The physical element needed (e.g., "Vela Roja", "Miel")
}