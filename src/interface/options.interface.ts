import { SupabaseClientOptions } from "@supabase/supabase-js";
import { JwtFromRequestFunction } from "passport-jwt";

export interface Options {
  supabaseUrl: string;
  supabaseKey: string;
  supabaseOptions: SupabaseClientOptions<any>;
  supabaseJwtSecret: string;
  extractor?: JwtFromRequestFunction; // 追加
}

// エイリアス
export type SupabaseAuthStrategyOptions = Options;
