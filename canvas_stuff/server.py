from livereload import Server, shell

server = Server()
server.watch('*', delay=2)
server.serve(port=9876, host='localhost')