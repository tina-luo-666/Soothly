import { createClient } from "@supabase/supabase-js";
import { config } from "./config";

export const supabase = createClient(
  config.supabase.url,
  config.supabase.anonKey
);

// Database types
export interface WaitlistSignup {
  id: string;
  created_at: string;
  name: string;
  email: string;
  city: string;
  state: string;
  age_bracket: string;
  primary_allergy: string;
  consent: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
}

// Database functions
export async function addWaitlistSignup(
  data: Omit<WaitlistSignup, "id" | "created_at">
) {
  const { data: result, error } = await supabase
    .from("waitlist_signups")
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error("Error adding waitlist signup:", error);
    throw error;
  }

  return result;
}

export async function getWaitlistSignups() {
  const { data, error } = await supabase
    .from("waitlist_signups")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching waitlist signups:", error);
    throw error;
  }

  return data;
}

// SQL for creating the waitlist_signups table:
/*
CREATE TABLE waitlist_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  age_bracket TEXT NOT NULL,
  primary_allergy TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT FALSE,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT
);

-- Create an index on email for faster lookups
CREATE INDEX idx_waitlist_signups_email ON waitlist_signups(email);

-- Create an index on created_at for analytics
CREATE INDEX idx_waitlist_signups_created_at ON waitlist_signups(created_at);
*/
