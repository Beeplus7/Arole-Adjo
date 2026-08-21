-- Arole Adjo: Waitlist table
-- Captures interest from the marketing site contact/waitlist form

CREATE TABLE IF NOT EXISTS waitlist (
  id          uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  name        text        NOT NULL,
  email       text        NOT NULL,
  phone       text,
  city        text        NOT NULL,
  role        text        NOT NULL DEFAULT 'member' CHECK (role IN ('member', 'leader', 'both')),
  message     text,
  status      text        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'invited', 'onboarded')),
  created_at  timestamptz DEFAULT now()
);

-- Unique email — one entry per person
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (lower(email));

-- RLS: public can insert (join waitlist), only service role can read
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join waitlist"
  ON waitlist FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role reads waitlist"
  ON waitlist FOR SELECT
  USING (auth.role() = 'service_role');
