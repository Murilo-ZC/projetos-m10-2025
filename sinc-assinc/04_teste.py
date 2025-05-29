# Gerar o quadrado de 1000000 de números
# Mostrar o tempo da execução deles
# Cria os valores aleatórios
import random
mu = 0.0
sigma = 10.0
dados = []
for _ in range(1_000_000):
    dados.append(random.gauss(mu, sigma))

import asyncio

async def quadrado_assincrono(n):
    return n * n

async def main():
    # Execução síncrona
    print("Início da execução:", asyncio.get_event_loop().time())
    saida = []
    for elemento in dados:
        valor = await quadrado_assincrono(elemento)
        saida.append(valor)
    print("Saida da execução:", asyncio.get_event_loop().time())

    # Execução assíncrona
    print("------------------------")

   

    print("Início da execução:", asyncio.get_event_loop().time())
    saida = []
    saida = await asyncio.gather(*[quadrado_assincrono(numero) for numero in dados])
    print("Saida da execução:", asyncio.get_event_loop().time())

if __name__ == "__main__":
    asyncio.run(main())