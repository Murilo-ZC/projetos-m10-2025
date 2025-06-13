# Use the official Caddy image
FROM caddy:2-alpine

# Copy the Caddy configuration file
COPY Caddyfile /etc/caddy/Caddyfile

# Expose the default Caddy ports
EXPOSE 2015

# Start Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"] 