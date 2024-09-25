'use client';

import { useEffect } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import axiosInstance from '@/lib/api';
import type { PrismaModels } from '@/lib/prisma';
import { clearUser, updateAuthUser } from '@/services/auth/client/route';
import { createClient } from '@/utils/supabase/client';

const AuthEventListener = () => {
  const supabase = createClient();
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchUser = async (userId: string) => {
      const user = await axiosInstance.get<PrismaModels['profiles']>(`user/${userId}`);

      updateAuthUser(queryClient, user.data);
    };

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);

      if (event === 'INITIAL_SESSION') {
        // handle initial session
      } else if (event === 'SIGNED_IN') {
        // handle sign in event
        if (session) {
          const userId = session.user.id;
          fetchUser(userId).then();
        }
      } else if (event === 'SIGNED_OUT') {
        // handle sign out event
        clearUser(queryClient);
      } else if (event === 'PASSWORD_RECOVERY') {
        // handle password recovery event
      } else if (event === 'TOKEN_REFRESHED') {
        // handle token refreshed event
      } else if (event === 'USER_UPDATED') {
        // handle user updated event
      }
    });

    return () => {
      // call unsubscribe to remove the callback
      data.subscription.unsubscribe();
    };
  }, [queryClient, supabase.auth]);

  return null;
};

export default AuthEventListener;
