# Drumify Engineering Challenge

## Overview

Welcome to the Drumify engineering challenge! This exercise focuses on designing interfaces and data models for audio file management, giving you a chance to work with some of the core concepts we deal with daily.

## Time Expectations

We respect your time and maintain a healthy work-life balance. We ask that you spend no more than 90 minutes on this exercise, (but feel free to spend more if you're having fun!). We completely understand that you may not be able to complete all of the features, and that's okay. We're more interested in seeing your thought process and how you approach the problem.

If you're not able to complete the exercise, all good! Just share your thought process and approach to the remaining tasks - this can be in code comments, diagrams, written explanations, etc.

You can use AI coding assistants on this exercise, but make sure you understand the code you're submitting. The goal is to see your thought process and approach to the problem, and the decisions you make in the code.

## Technical Requirements

Your application should be a single page application that allows users to upload, play, and download audio files.

### Environment Setup

A `.env` file will be provided with:

- NeonDB connection string
- AWS S3 credentials
- Additional necessary environment variables

### Core Features

The application should implement:

- Audio file upload functionality
- Playback controls (play, pause, stop)
- Download capability

### Tech Stack

- React
- Next.js
- TailwindCSS
- Web Audio API
- Drizzle ORM
- NeonDB
- AWS S3

### Bonus Features

If time permits, consider implementing:

- Search functionality
- Audio visualization (waveform, peaks data)
- Named markers on audio files

## Final Notes

Your approach and problem-solving style are what we're most interested in seeing. Do your best, let your personality shine through in your work, and try not to stress too much about perfection. Also, we'll provide you with some audio files to test with.

Good luck, and have fun building!

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Setup

1. Clone the repository
2. Add the `.env` file, with the correct environment variables
3. Run `pnpm install` to install the dependencies
4. Run `pnpm dev` to start the development server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
