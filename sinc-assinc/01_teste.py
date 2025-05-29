# O asyncio é uma biblioteca que permite a execução de tarefas assíncronas
# Ela é uma biblioteca padrão do Python 3.5 ou superior
import asyncio


# Para marcarmos uma função como assíncrona, utilizamos a palavra-chave async
async def print_com_delay(tempo, mensagem):
# A função asyncio.sleep é uma função assíncrona que suspende a execução da função por um determinado tempo
    await asyncio.sleep(tempo)
    print(mensagem)


# Agora configuramos uma função principal que irá chamar a função assíncrona
async def main():
# Adicionando um marcador para ver o tempo de execução da função
    print("Início da execução:", asyncio.get_event_loop().time())
# Realiza uma chamada bloqueante para a função assíncrona
    print_com_delay(2, "Olá")
    print_com_delay(1, "Mundo")
# Adicionando um marcador para ver o tempo de execução da função
    print("Fim da execução:", asyncio.get_event_loop().time())

  

# Para chamar a função principal, utilizamos o método que cria um evento de loop e executa a função principal
asyncio.run(main())