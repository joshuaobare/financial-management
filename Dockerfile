FROM php:8.1-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    nginx

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Set working directory
WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

# Copy nginx configuration
COPY nginx.conf /etc/nginx/sites-available/default

# Change ownership of our applications
RUN chown -R www-data:www-data /var/www

# Expose port 8080
EXPOSE 8080

# Copy start script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Start Nginx and PHP-FPM
CMD ["/start.sh"]