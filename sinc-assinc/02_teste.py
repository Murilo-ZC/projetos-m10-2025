import asyncio

async def task(nome, tempo_delay):
    print(f"Task {nome} iniciada")
    await asyncio.sleep(tempo_delay)
    print(f"Task {nome} finalizada")
    return f"Task {nome} finalizada"

async def main():
    # Cria uma lista de tarefas
    tasks = [
        task("A", 1),
        task("B", 5),
        task("C", 3)
    ]

    # Envia todas as tarefas para execução
    # O método gather() aguarda todas as tarefas serem finalizadas
    # Ele também lança a execução de todas as tarefas
    results = await asyncio.gather(*tasks)
    print(results)

# Cria um novo evento de loop
asyncio.run(main())
