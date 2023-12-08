// Import the Supabase library
import { createClient } from "@supabase/supabase-js";

// Your Supabase URL and API key
const supabaseUrl = "https://kunglsicsakuulhxguaa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1bmdsc2ljc2FrdXVsaHhndWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1NjUwMzcsImV4cCI6MjAxNzE0MTAzN30.6mrpRpWqouSp1YUpQpu1gvNZCtFkKXEh4B68OZdKo6Q";

// Create a Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Now you can use the 'supabase' client in your code
console.log(supabase);
