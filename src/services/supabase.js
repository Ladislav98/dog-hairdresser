import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ncntosjoqhxefiykcnex.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbnRvc2pvcWh4ZWZpeWtjbmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMTUyNzAsImV4cCI6MjAzNDc5MTI3MH0.0OcbkXoCg9MIQMDyruwG4JAN3gWVv7CwKlfQaMpWZH8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
