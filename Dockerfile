FROM php:8.1-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Set working directory
WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

# Change ownership of our applications
RUN chown -R www-data:www-data /var/www

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Modify PHP-FPM configuration to listen on port 8080
RUN sed -i 's|listen = /var/run/php/php-fpm.sock|listen = 0.0.0.0:8080|' /usr/local/etc/php-fpm.d/www.conf

EXPOSE 8080

CMD ["php-fpm"]