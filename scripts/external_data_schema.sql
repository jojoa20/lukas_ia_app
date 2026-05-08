-- Create new schema for external data pipeline
CREATE SCHEMA IF NOT EXISTS external_data;

-- Create the market_prices table
CREATE TABLE IF NOT EXISTS external_data.market_prices (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at timestamptz DEFAULT now(),
    product_name text NOT NULL,
    price numeric NOT NULL,
    store_name text,
    unit text,
    category text,
    region text DEFAULT 'Bogotá'
);

-- Configure permissions for the service_role (SERVICE_ROLE_KEY)
-- The service role should have full access to manage data in this schema
GRANT USAGE ON SCHEMA external_data TO service_role;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA external_data TO service_role;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA external_data TO service_role;
GRANT ALL PRIVILEGES ON ALL ROUTINES IN SCHEMA external_data TO service_role;
