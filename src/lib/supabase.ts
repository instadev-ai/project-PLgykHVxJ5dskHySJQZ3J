
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = 'https://tcvgzmuymzvlbcbagcoj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdmd6bXV5bXp2bGJjYmFnY29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MzA0NzcsImV4cCI6MjAzMzAwNjQ3N30.Yd-Yk-Ow-Yd-Yk-Ow-Yd-Yk-Ow-Yd-Yk-Ow';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
