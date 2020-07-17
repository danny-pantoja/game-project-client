curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
   }
  }'

echo

curl --include --request POST "https://tic-tac-toe-api-production.herokuapp.com/sign-in" \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
   }
  }'

echo
