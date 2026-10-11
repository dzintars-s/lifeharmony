/**
 * Thin line-art SVGs inspired by Zen, botanical, and minimalist elements.
 */
import { SVGProps } from "react";

export function LotusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1}
      {...props}
    >
      <path d="M50 85 C50 85, 30 60, 30 40 C30 20, 50 15, 50 15 C50 15, 70 20, 70 40 C70 60, 50 85, 50 85 Z" />
      <path d="M50 85 C50 85, 10 55, 10 35 C10 15, 35 30, 35 30" />
      <path d="M50 85 C50 85, 90 55, 90 35 C90 15, 65 30, 65 30" />
      <path d="M50 85 C50 85, -5 45, 0 25 C5 5, 25 35, 25 35" />
      <path d="M50 85 C50 85, 105 45, 100 25 C95 5, 75 35, 75 35" />
    </svg>
  );
}

export function EnsoCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1}
      strokeLinecap="round"
      {...props}
    >
      <path d="M 40, 10 A 40,40 0 1,0 90, 50 A 40,40 0 0,0 45, 8" />
    </svg>
  );
}

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1}
      {...props}
    >
      <path d="M 50, 90 C 50, 70, 70, 40, 90, 20 C 60, 10, 30, 30, 10, 60 C 20, 70, 40, 80, 50, 90 Z" />
      <path d="M 50, 90 C 45, 70, 60, 40, 90, 20" />
    </svg>
  );
}

export function ZenBalanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1}
      {...props}
    >
      <circle cx="50" cy="50" r="40" />
      <path d="M 50, 10 A 20,20 0 0,1 50, 50 A 20,20 0 0,0 50, 90" />
      <circle cx="50" cy="30" r="4" fill="currentColor" />
      <circle cx="50" cy="70" r="4" />
    </svg>
  );
}

export function BotanicalBranch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1}
      strokeLinecap="round"
      {...props}
    >
      <path d="M 10 90 C 30 70 50 30 90 10" />
      <path d="M 30 70 C 20 50 40 40 40 40" />
      <path d="M 50 50 C 70 60 70 40 70 40" />
      <path d="M 70 30 C 60 10 80 15 80 15" />
    </svg>
  );
}

export function FlowingWater(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1}
      strokeLinecap="round"
      {...props}
    >
      <path d="M 10 30 Q 25 15, 50 30 T 90 30" />
      <path d="M 10 50 Q 25 35, 50 50 T 90 50" />
      <path d="M 10 70 Q 25 55, 50 70 T 90 70" />
    </svg>
  );
}

export function TinyParticleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1}
      {...props}
    >
      <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor" />
    </svg>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1}
      {...props}
    >
      <path d="M 50, 90 C 50, 90, 10, 60, 10, 30 A 20, 20 0 0, 1, 50, 30 A 20, 20 0 0, 1, 90, 30 C 90, 60, 50, 90, 50, 90 Z" />
    </svg>
  );
}

export function CalmWavesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1}
      strokeLinecap="round"
      {...props}
    >
      <path d="M 20 50 Q 35 30 50 50 T 80 50" />
    </svg>
  );
}

export function ZenArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="12" y1="4" x2="12" y2="20" />
      <polyline points="5 13 12 20 19 13" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
