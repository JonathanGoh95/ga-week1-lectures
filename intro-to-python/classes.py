import random

# class Vehicle():
#     def __init__(self,make,model,running=False):
#         self.make = make
#         self.model = model
#         self.running = running

#     def start(self):
#         self.running = True
#         print('Starting up!')
        
#     def stop(self):
#         self.running = False
#         print('Turning off.')
        
#     def __str__(self):
#         return f'The vehicle is a {self.make} {self.model}. It is {'running' if self.running == True else 'not running'}.'
        
# honda = Vehicle('Honda','Civic')
# honda.start()
# print(honda)
# honda.stop()
# print(honda)

class BankAccount ():
    def __init__(self,owner,balance,has_overdraft=False):
        self.owner = owner
        self.balance = balance
        self.has_overdraft = has_overdraft
        self.account_no = random.randint(111111111,999999999)
    
    def deposit(self,amount):
        self.balance += amount
        return f'{self.owner} has deposited ${amount}. The new balance is ${self.balance}.'
        
    def withdraw(self,amount):
        if not self.has_overdraft and amount > self.balance:
            return 'There are not enough funds for you to withdraw!'
        elif self.has_overdraft == True:
            self.balance -= amount
            return f'{self.owner} has withdrawn ${amount}. The new balance is ${self.balance}.'
        
    def __str__(self):
        return f"Account: {self.account_no} - Balance: ${self.balance}"

class SavingsAccount(BankAccount):
    def withdraw(self):
        return 'No withdrawals permitted'

jack = BankAccount('Jack',50000)
print(jack)
jack.deposit(20000)
jack.withdraw(15000)
print(jack)

jane = SavingsAccount('Jane', 500)
print(jane.withdraw())
