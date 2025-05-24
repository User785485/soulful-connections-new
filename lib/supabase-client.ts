import { createClient } from '@supabase/supabase-js';
import { logger } from './logger';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://prbidefjoqdrqwjeenxm.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByYmlkZWZqb3FkcnF3amVlbnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMzY3NDEsImV4cCI6MjA2MzYxMjc0MX0.FaiiU8DTqnBVkNjG2L3wkE0MCsKnit_CNdGMmP0oRME';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export class SupabaseService {
  static async getStorageFileInfo(bucket: string, path: string) {
    try {
      const { data, error } = await supabase.storage.from(bucket).list(path);
      
      if (error) {
        logger.error('SUPABASE_SERVICE', 'storage_list_error', `Erreur liste fichiers: ${path}`, { error });
        throw error;
      }
      
      return data;
    } catch (error) {
      logger.error('SUPABASE_SERVICE', 'storage_error', `Erreur Supabase Storage`, {
        error: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }
