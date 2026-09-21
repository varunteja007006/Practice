class User: # Create Parent class 'User'
    def __init__(self,name,age):
        self.name = name
        self.age = age

class Admin(User): # Create child class 'Admin' inheriting from Parent class 'User'
    def __init__(self, name,age,isAdmin=False): # overrides the User __init__()
        super().__init__(name,age) # hence call the User __init__()
        self.isAdmin = isAdmin 

    def test(self):
        print(f'Admin:{self.isAdmin}')

class Super(Admin): # Create a child class 'Super' inheriting from Parent class 'Admin'
    def __init__(self,name,age,isSuper=False): # overrides the Admin __init__()
        super().__init__(name,age,isAdmin=False) # hence call the Admin __init__()
        self.isSuper = isSuper
    
    def hello(self):
        print(f'Hello {self.name}, you are Super Admin:{self.isSuper}, Admin:{self.isAdmin}')

userOne = Super('Rohit',23,False) # Super only needs 3 arguments
userOne.hello() 
userOne.test()

userTwo = Admin('Virat',20)
print("\nThis is for userTwo")
userTwo.test()