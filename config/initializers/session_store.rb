# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_cart_session',
  :secret      => '62facdef33a0114ab917d444d0982c5ced1d91ce05722217db9eafb4c3d98cb8eebe3e9b1978e768f6d317acf27a53c90dae4439e77c052971ea1cecab38eb79'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
