from locust import HttpUser, task
import random


nomes = ["Jorge", "Marcelo", "Laura", "Podre", "Ana"]
emails = ["Jorge@mail.com", "Marcelo@mail.com", "Laura@mail.com", "Podre@mail.com", "Ana@mail.com"]
class HelloWorldUser(HttpUser):
    @task
    def hello_world(self):
        self.client.get("http://0.0.0.0/users")

    @task
    def criar_user(self):
        self.client.post("http://0.0.0.0/users", json={"nome":random.choice(nomes), "email":random.choice(emails)})
    