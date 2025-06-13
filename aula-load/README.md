Este diretório tem o projeto para estudar o sistema de Load Balancer.

Vamos verificar como utilizar a ferramenta Caddy para fazer sua utilização.

## 00_hello

Para compilar a imagem:

```sh
docker build -t basico-caddy .
```

Para executar:

```sh
docker run -p 2015:2015 basico-caddy
```

## 01_mais_rotas

Aqui, se executar o código Caddy padrão, vamos ter rotas HTTPS para servir nossa aplicação. Para mantermos o servidor apenas como HTTP, vamos especificar isso no Caddyfile.

Podemos configurar mais respostas.

```sh
docker build -t teste2 .
```

Para executar:

```sh
docker run -p 2015:2015 teste2
```


