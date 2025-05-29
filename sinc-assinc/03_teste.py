# Agendando e executando uma coroutine simples

import asyncio

async def corrotina(nome, delay):
    print(f"corrotina {nome} iniciada - {asyncio.get_event_loop().time()}")
    await asyncio.sleep(delay)
    print(f"corrotina {nome} finalizada - {asyncio.get_event_loop().time()}")
    

async def main():
    # Prepara as corrotinas utilizando o método create_task
    # O método create_task() cria uma tarefa para execução de uma corrotina, mas não a executa. A execução é feita pelo loop de eventos.
    print("Início da execução:", asyncio.get_event_loop().time())
    corrotina1 = asyncio.create_task(corrotina("A", 1))
    corrotina2 = asyncio.create_task(corrotina("B", 2))

    # Aguarda a execução das corrotinas, mas não bloqueia a execução
    await corrotina1
    await corrotina2

    # Chamada do exemplo anterior, mas sem a criação de tarefas
    corrotina3 = corrotina("C", 3)
    corrotina4 = corrotina("D", 4)
    await corrotina3
    await corrotina4
    print("Fim da execução:", asyncio.get_event_loop().time())

# Cria um novo evento de loop
if __name__ == "__main__":
    asyncio.run(main())