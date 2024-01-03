import { DetailedHTMLProps, HTMLAttributes } from "react";

type SkeletonProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function Skeleton({ ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse w-full h-2.5 bg-light-20 rounded-full mb-1
        ${props?.className || ''}
      `}
    />
  )
}