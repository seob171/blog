import { get, has } from '@vercel/edge-config';
import { unstable_flag as flag } from '@vercel/flags/next';

export const showSummerSale = flag({
  key: 'newFeature',
  async decide() {
    const exists = await has('newFeature');

    if (!exists) return false;

    const value = await get('newFeature'); // could use this.key instead
    return value ?? false;
  },
});
