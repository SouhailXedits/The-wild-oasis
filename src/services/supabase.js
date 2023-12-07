import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bxzjknhajkgfhsndvlhx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4emprbmhhamtnZmhzbmR2bGh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzA4NzksImV4cCI6MjAxNjkwNjg3OX0.ovC-_vJbDI2sQF7tzLtlqzB_6AsEUQUqmEzjrbrjdq4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
