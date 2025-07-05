class Vehicle():
    def __init__(self,make,model,running=False):
        self.make = make
        self.model = model
        self.running = running

    def start(self):
        self.running = True
        print('Starting up!')
        
    def stop(self):
        self.running = False
        print('Turning off.')
        
    def __str__(self):
        return f'The vehicle is a {self.make} {self.model}. It is {'running' if self.running == True else 'not running'}.'
        
honda = Vehicle('Honda','Civic')
honda.start()
print(honda)
honda.stop()
print(honda)