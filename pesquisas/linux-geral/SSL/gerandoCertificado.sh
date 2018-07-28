openssl req -new -key meuCert.key -x509 -out meuCert.crt
mkdir /etc/apache2/ssl/
mv meuCert.key meuCert.crt /etc/apache2/ssl/
cp meuCert.crt meuCert.pem
cd /etc/apache2/ports.conf