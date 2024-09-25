'use server';

import type { User } from '@supabase/auth-js';
import { cookies } from 'next/headers';

import axiosInstance from '@/lib/api';
import type { PrismaModels } from '@/lib/prisma';
import { createClient } from '@/utils/supabase/server';

export const getAuthUser = async (): Promise<PrismaModels['profiles'] | null> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (user) {
    const res = await axiosInstance.get<PrismaModels['profiles']>(`/user/${user.id}`);
    return res.data;
  }
  console.error(error);
  return null;
};

export const getAuth = async (): Promise<User | null> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  console.error(error);
  return user;
};
