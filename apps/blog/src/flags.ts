import { get, has } from '@vercel/edge-config';
import { unstable_flag as flag } from '@vercel/flags/next';

export const showSummerSale = flag({
  key: 'summer-sale',
  async decide() {
    const exists = await has('summer-sale');

    if (!exists) return false;

    const value = await get('summer-sale'); // could use this.key instead
    return value ?? false;
  },
});
