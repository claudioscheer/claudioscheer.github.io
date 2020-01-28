# Generate RSA keys and certificates in Linux

For more information on the difference between the generated files, see [this answer](https://serverfault.com/a/9717).

### Generate RSA private key

```bash
openssl genrsa -out key.pem
```

### Generate Certificate Signing Request (CSR)

```bash
openssl req -out key.csr -key key.pem -new
```

### Generate certificate

```bash
openssl x509 -req -in key.csr -signkey key.pem -out key.crt
```

### Generate .p12 certificate

```bash
openssl pkcs12 -export -in key.crt -inkey key.pem -out cert.p12
```