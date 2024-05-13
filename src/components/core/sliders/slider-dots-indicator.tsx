import { cn } from '@/utils';

type Props = {
  index: number;
  activeIndex: number;
};

export function SliderDotIndicator({ index, activeIndex }: Props) {
  return (
    <div
      className={cn(
        'mr-1 aspect-square h-[0.5vw] max-h-2 rounded-full sm:h-[1.5vw]',
        index === Math.ceil(activeIndex) ? 'bg-secondary' : 'bg-main'
      )}
    />
  );
}
