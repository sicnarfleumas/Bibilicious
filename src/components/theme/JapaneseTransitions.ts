// JapaneseTransitions.ts
// This module defines custom Japanese-inspired transitions for use with Astro's ClientRouter

// Define types for transition animations
export interface TransitionAnimation {
  name: string;
  duration?: string;
  easing?: string;
  fillMode?: string;
  direction?: string;
  delay?: string;
}

export interface TransitionAnimationPair {
  old: TransitionAnimation;
  new: TransitionAnimation;
}

export interface TransitionDirectionalAnimations {
  forwards: TransitionAnimationPair;
  backwards: TransitionAnimationPair;
}

// Export transition functions for use in other components
export const wipeRight = (options: Partial<TransitionAnimation> = {}): TransitionDirectionalAnimations => ({
  forwards: {
    old: { name: 'jp-wipe-out-right', ...options },
    new: { name: 'jp-wipe-in-right', ...options }
  },
  backwards: {
    old: { name: 'jp-wipe-out-left', ...options },
    new: { name: 'jp-wipe-in-left', ...options }
  }
});

export const dissolve = (options: Partial<TransitionAnimation> = {}): TransitionDirectionalAnimations => ({
  forwards: {
    old: { name: 'jp-dissolve-out', ...options },
    new: { name: 'jp-dissolve-in', ...options }
  },
  backwards: {
    old: { name: 'jp-dissolve-out', ...options },
    new: { name: 'jp-dissolve-in', ...options }
  }
});

export const sakuraFade = (options: Partial<TransitionAnimation> = {}): TransitionDirectionalAnimations => ({
  forwards: {
    old: { name: 'jp-sakura-out', ...options },
    new: { name: 'jp-sakura-in', ...options }
  },
  backwards: {
    old: { name: 'jp-sakura-out', ...options },
    new: { name: 'jp-sakura-in', ...options }
  }
});

export const inkDrop = (options: Partial<TransitionAnimation> = {}): TransitionDirectionalAnimations => ({
  forwards: {
    old: { name: 'jp-ink-out', ...options },
    new: { name: 'jp-ink-in', ...options }
  },
  backwards: {
    old: { name: 'jp-ink-out', ...options },
    new: { name: 'jp-ink-in', ...options }
  }
});

// Add a new transition for sliding paper effect
export const paperSlide = (options: Partial<TransitionAnimation> = {}): TransitionDirectionalAnimations => ({
  forwards: {
    old: { name: 'jp-paper-slide-out', ...options },
    new: { name: 'jp-paper-slide-in', ...options }
  },
  backwards: {
    old: { name: 'jp-paper-slide-out-reverse', ...options },
    new: { name: 'jp-paper-slide-in-reverse', ...options }
  }
}); 