import { get, has } from '@vercel/edge-config';
import { unstable_flag as flag } from '@vercel/flags/next';

export const showWriteFeature = flag({
  key: 'writeFeature',
  async decide() {
    const exists = await has('writeFeature');

    if (!exists) return false;

    const value = await get('writeFeature'); // could use this.key instead
    return value ?? false;
  },
});
