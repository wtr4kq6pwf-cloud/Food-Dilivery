// config/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "FATAL ERROR: Supabase environment variables are missing! " +
    "Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in your environment."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);