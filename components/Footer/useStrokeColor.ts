import { useTheme } from 'next-themes';

export const useStrokeColor = () => {
  const { theme } = useTheme();
  const strokeColor = theme === 'dark' ? '#dddfe7' : '#020616';
  return strokeColor;
};