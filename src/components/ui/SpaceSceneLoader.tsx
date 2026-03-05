'use client';

import dynamic from 'next/dynamic';

const SpaceScene = dynamic(
  () => import('@/components/ui/SpaceScene').then((mod) => mod.SpaceScene),
  { ssr: false }
);

export function SpaceSceneLoader() {
  return <SpaceScene />;
}
