// Shared Supabase client initialization
const SUPABASE_URL = 'https://zzddwdnnddgfjtcncygj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6ZGR3ZG5uZGRnZmp0Y25jeWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwMTIwNDYsImV4cCI6MjA2NzU4ODA0Nn0.ElGic4KR5p9XlRAt3QLlsxeMYlwksXcRLKqhm-uVs8U';

// `supabase` becomes a global variable that other scripts can use
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
