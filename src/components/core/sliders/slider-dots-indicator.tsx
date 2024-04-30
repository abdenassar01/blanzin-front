import { cn } from '@/utils';

type Props = {
  index: number;
  activeIndex: number;
};

export function SliderDotIndicator({ index, activeIndex }: Props) {
  return (
    <div
      className={cn(
        'mr-1 mt-3 h-[.5vw] w-[.5vw] rounded-full sm:h-[1.5vw] sm:w-[1.5vw]',
        index === Math.ceil(activeIndex) ? 'bg-secondary' : 'bg-main'
      )}
    />
  );
}
