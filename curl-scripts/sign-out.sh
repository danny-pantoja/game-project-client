curl --include --request DELETE "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer ${TOKEN}"

echo

curl --include --request DELETE "https://tic-tac-toe-api-production.herokuapp.com/sign-in" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer ${TOKEN}"

echo
