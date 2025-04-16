import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fzlylrogvtmxcpvcisiw.supabase.co'; // from your Supabase dashboard
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6bHlscm9ndnRteGNwdmNpc2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3ODQ2NjYsImV4cCI6MjA2MDM2MDY2Nn0.vWkq3_sl37mbF9pFDKH63tNkP7lRdly-sV3vowGvJO0'; // also from Supabase dashboard

export const supabase = createClient(supabaseUrl, supabaseKey);
