




start-laravel:
	## Launch docker-compose
	docker-compose -f adoptation/laravel/docker-compose.yml up


start-playground:
	cd ./packages/playground && yarn start


start-todo:
	cd ./packages/todo-hooks-context && yarn start