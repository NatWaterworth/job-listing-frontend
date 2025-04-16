// src/services/supabaseJobs.js
import { supabase } from '../supabase';

export const fetchJobs = async () => {
    const { data, error } = await supabase.from('jobs').select('*');
    if (error) throw error;
    return data;
};

export const fetchJobById = async (id) => {
    const { data, error } = await supabase.from('jobs').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
};
