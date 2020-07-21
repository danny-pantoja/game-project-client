curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games" \
--header "Content-Type: application/json" \
  --data '{
    "game": {
    }
  }'

echo

curl --include --request POST "https://tic-tac-toe-api-production.herokuapp.com/games" \
--header "Content-Type: application/json" \
  --data '{
    "game": {
    }
  }'

echo
