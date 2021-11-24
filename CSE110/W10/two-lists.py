print()

accounts = []
account = ""
balances = []
total = 0
higher_balance = -1
update = "yes"

print("Enter the names and balances of bank accounts (type: quit when done)")
while account.lower() != "quit":
    account = input("What is the name of this account? ")
    if account.lower() != "quit":
        balance = float(input("What is the balance? "))
        accounts.append(account)
        balances.append(balance)

#print(accounts)
#print(balances)

print()
print("Account information: ")
for i in range(len(accounts)):
    print(f"{i}. {accounts[i]} - ${balances[i]:.2f}")

    total += balances[i]

    if balances[i] > higher_balance:
        higher_balance = balances[i]
        higher_balance_account = accounts[i]

print()
print(f"Total: ${total:.2f}")
average = total/(len(accounts))
print(f"Average: ${average:.2f}")
   
print(f"Highest balance: {higher_balance_account} - ${higher_balance:.2f}")       
print()

while (update.lower() == "yes") or (update.lower() == "y"):
    update = input("Do you want to update an account? ")
    if update.lower() == "yes" or update.lower() == "y":
        index = int(input("What account index do you want to update? "))
        balances[index] = float(input("What is the new amount? "))
        print()

        for i in range(len(accounts)):
            print(f"{i}. {accounts[i]} - ${balances[i]:.2f}")
    print()
            


