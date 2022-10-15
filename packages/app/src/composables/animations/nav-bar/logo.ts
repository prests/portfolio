import { timeline } from 'motion';

//TO DO: use a ref instead of global IDs
const LOGO_LINES = [
  '#Logo_Line_1',
  '#Logo_Line_2',
  '#Logo_Line_3',
  '#Logo_Line_4',
  '#Logo_Line_5',
  '#Logo_Line_6',
  '#Logo_Line_7',
  '#Logo_Line_8',
  '#Logo_Line_9',
  '#Logo_Line_10',
  '#Logo_Line_11',
  '#Logo_Line_12',
  '#Logo_Line_13',
  '#Logo_Line_14',
  '#Logo_Line_15',
  '#Logo_Line_16',
];

export function useLogoAnimations() {
  function focusLogo(): void {
    timeline(
      LOGO_LINES.map((line) => [
        line,
        { stroke: '#F7F7FF' },
        { duration: 0.5, at: 0 },
      ])
    );
  }

  function blurLogo(): void {
    timeline(
      LOGO_LINES.map((line) => [
        line,
        { stroke: '#FE5F55' },
        { duration: 0.5, at: 0 },
      ])
    );
  }

  return {
    focusLogo,
    blurLogo,
  };
}
