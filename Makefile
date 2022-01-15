run:
	npm start

i:
	npm install && npx husky install

lint:
	npx eslint . --ext .jsx,.js

lint-fix:
	npx eslint --fix . --ext .jsx,.js

build:
	npm build

test:
	npm test
