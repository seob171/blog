import { Suspense } from 'react';

import { encrypt } from '@vercel/flags';
import { FlagValues } from '@vercel/flags/react';

import { showNewFeature } from '@/flags';

async function ConfidentialFlagValues({ values }: { values: Record<string, unknown> }) {
  const encryptedFlagValues = await encrypt(values);
  return <FlagValues values={encryptedFlagValues} />;
}

export async function Page() {
  const exampleFlag = await showNewFeature();
  const values = { exampleFlag: exampleFlag };
  return (
    <div>
      <span>{exampleFlag ? 'new feature' : 'old feature'}</span>
      {/* Some other content */}
      <Suspense fallback={null}>
        <ConfidentialFlagValues values={values} />
      </Suspense>
    </div>
  );
}
